#!/usr/bin/env bash
# Browser environment for the reference capture on this cloud VM.
# The VM ships without Chromium's runtime libs, without fontconfig fonts and
# without a DBus session, so Playwright's bundled browser is made runnable by
# side-loading the Ubuntu packages into ~/chromedeps (see setup-browser.sh).
#
#   source tools/browser-env.sh && node tools/capture.mjs
set -a
CHROMEDEPS="${CHROMEDEPS:-$HOME/chromedeps}"
export LD_LIBRARY_PATH="$CHROMEDEPS/root/usr/lib/x86_64-linux-gnu${LD_LIBRARY_PATH:+:$LD_LIBRARY_PATH}"
export LD_PRELOAD="$CHROMEDEPS/atk-stub.so${LD_PRELOAD:+:$LD_PRELOAD}"
export FONTCONFIG_FILE="$CHROMEDEPS/fonts.conf"
set +a
