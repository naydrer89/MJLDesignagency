#!/usr/bin/env bash
# Lädt die Schriften der Testseiten als WOFF2 nach test/assets/fonts/.
# Die Testseiten sind reines HTML ohne Build — die Dateien liegen deshalb im Repo
# und werden nicht zur Laufzeit von Google geladen (reproduzierbar, offline-fähig).
#
#   bash tools/fetch-fonts.sh
#
# Alle Familien sind SIL Open Font License. Die Spezifikationen in designguidelines/
# nennen kommerzielle Schriften (SF Pro, sohne, Cereal, Nike Futura …); der Ersatz
# ist in test/README.md dokumentiert.
set -uo pipefail

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36"
DIR="$(cd "$(dirname "$0")/.." && pwd)/test/assets/fonts"
mkdir -p "$DIR"

# name|Google-Fonts-Familie|Achsen
FONTS=(
  "geist|Geist:wght@300..700|wght"
  "geist-mono|Geist+Mono:wght@400..600|wght"
  "instrument-sans|Instrument+Sans:wght@400..700|wght"
  "instrument-sans-italic|Instrument+Sans:ital,wght@1,400..600|wght"
  "jost|Jost:wght@400..700|wght"
  "archivo|Archivo:wght@400..700|wght"
  "figtree|Figtree:wght@400..800|wght"
  "manrope|Manrope:wght@400..800|wght"
)

for entry in "${FONTS[@]}"; do
  name="${entry%%|*}"
  rest="${entry#*|}"
  family="${rest%%|*}"
  out="$DIR/$name.woff2"
  [ -s "$out" ] && { echo "skip  $name"; continue; }

  css=$(curl -sf -A "$UA" "https://fonts.googleapis.com/css2?family=${family}&display=swap") || {
    echo "fail  $name (CSS nicht erreichbar)"; continue; }
  url=$(printf '%s' "$css" | grep -oE 'https://fonts\.gstatic\.com/[^)]+\.woff2' | tail -1)
  [ -n "$url" ] || { echo "fail  $name (keine woff2-URL)"; continue; }

  curl -sf -o "$out" "$url" && echo "ok    $name  $(du -h "$out" | cut -f1)" || echo "fail  $name (Download)"
done

echo
ls -lh "$DIR" | sed 's/^/  /'
