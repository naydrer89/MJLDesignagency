#!/usr/bin/env bash
# Make Playwright's Chromium runnable in this cloud VM (Ubuntu 24.04, no root).
#
# What is missing on the base image:
#   - X/ATK/NSS/ALSA shared libraries that Chromium links against
#   - a fontconfig configuration and any fonts (Chromium aborts with
#     "SkFontMgr_FontConfigInterface Not implemented" without them)
#   - a DBus session (harmless warning only)
#
# Strategy: download the matching Ubuntu .deb files, unpack them into
# ~/chromedeps/root (no dpkg database touched), point LD_LIBRARY_PATH there,
# build a tiny ATK shim for the three symbols newer libatk-bridge wants, and
# write a minimal fontconfig file.
#
#   bash tools/setup-browser.sh
#   source tools/browser-env.sh   # afterwards, for every capture run
set -euo pipefail

MIRROR="${MIRROR:-http://archive.ubuntu.com/ubuntu}"
DEPS="${CHROMEDEPS:-$HOME/chromedeps}"
mkdir -p "$DEPS/debs"
cd "$DEPS"

get() { # $1 = pool subdir, $2 = exact filename
  if curl -sf --max-time 120 -O "$MIRROR/pool/main/$1/$2" -o "debs/$2" 2>/dev/null ||
     curl -sf --max-time 120 -o "debs/$2" "$MIRROR/pool/main/$1/$2"; then
    echo "  ok   $2"
  else
    echo "  FAIL $2 (version may have moved; list $MIRROR/pool/main/$1/ and update this script)"
  fi
}

echo "== downloading shared libraries"
get n/nspr              libnspr4_4.35-1.1build1_amd64.deb
get n/nss               libnss3_3.98-1ubuntu0.3_amd64.deb
get a/at-spi2-core      libatk-bridge2.0-0t64_2.52.0-1build1_amd64.deb
get a/at-spi2-core      libatspi2.0-0t64_2.52.0-1build1_amd64.deb
get a/atk1.0            libatk1.0-0_2.36.0-3build1_amd64.deb
get libx/libxcomposite  libxcomposite1_0.4.6-1build1_amd64.deb
get libx/libxdamage     libxdamage1_1.1.7-1_amd64.deb
get libx/libxfixes      libxfixes3_6.0.0-2build2_amd64.deb
get libx/libxrandr      libxrandr2_1.5.4-1build1_amd64.deb
get libx/libxrender     libxrender1_0.9.10-1.1build1_amd64.deb
get libx/libxi          libxi6_1.8.1-1build1_amd64.deb
get libx/libxres        libxres1_1.2.1-1_amd64.deb
get libx/libxkbcommon   libxkbcommon0_1.6.0-1build1_amd64.deb
get a/alsa-lib          libasound2t64_1.2.11-1build2_amd64.deb
get a/alsa-lib          libasound2-data_1.2.11-1build2_all.deb
get c/cups              libcups2t64_2.4.7-1.2ubuntu7_amd64.deb
get f/fonts-dejavu      fonts-dejavu-core_2.37-8_all.deb

echo "== unpacking into $DEPS/root"
rm -rf root
mkdir -p root
for f in debs/*.deb; do dpkg-deb -x "$f" root; done

echo "== building ATK shim"
BR="root/usr/lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0"
ATK="root/usr/lib/x86_64-linux-gnu/libatk-1.0.so.0"
nm -D --undefined-only "$BR" 2>/dev/null | awk '{print $NF}' | grep '^atk' | sort -u > undef.txt || true
nm -D --defined-only "$ATK" 2>/dev/null | awk '{print $NF}' | sort -u > def.txt || true
comm -23 undef.txt def.txt > missing.txt || true
{
  echo '#include <stddef.h>'
  echo '/* Generated: symbols newer libatk-bridge expects, absent from libatk 2.36.'
  echo '   Headless capture does not use accessibility; NULL is safe. */'
  while read -r s; do [ -n "$s" ] && echo "void *$s(void) { return 0; }"; done < missing.txt
} > atk-stub.c
gcc -shared -fPIC -o atk-stub.so atk-stub.c

echo "== writing fontconfig"
mkdir -p /tmp/fc-cache
cat > fonts.conf <<EOF
<?xml version="1.0"?>
<fontconfig>
  <dir>$DEPS/root/usr/share/fonts</dir>
  <cachedir>/tmp/fc-cache</cachedir>
  <config><rescan><int>30</int></rescan></config>
</fontconfig>
EOF

echo "== installing Playwright Chromium"
npx --yes playwright install chromium

echo
echo "done. now:  source tools/browser-env.sh && node tools/capture.mjs apple"
