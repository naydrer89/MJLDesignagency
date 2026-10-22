# Tools

Zwei Skripte, ein Zweck: Referenzen reproduzierbar machen.

| Datei | Aufgabe |
| --- | --- |
| `capture.mjs` | lädt eine Site in Chromium, klickt Consent weg, sammelt Computed Styles, schreibt `hero.jpg` + `tokens.json` + `capture-report.json` |
| `setup-browser.sh` | macht Playwright-Chromium in einer Ubuntu-24.04-VM **ohne Root** lauffähig (Libs, Fonts, ATK-Shim) |
| `browser-env.sh` | exportiert `LD_LIBRARY_PATH`, `LD_PRELOAD`, `FONTCONFIG_FILE` für alle Läufe |
| `fetch-fonts.sh` | lädt die WOFF2-Dateien der Testseiten nach `test/assets/fonts/` (lokale Schriften, kein CDN zur Laufzeit) |

## Benutzung

```bash
npm install                        # Playwright installieren (erzeugt package-lock.json)
bash tools/setup-browser.sh        # einmalig pro VM
npm run capture                    # alle 20 Sites
npm run capture -- rolex chanel    # nur diese
bash tools/fetch-fonts.sh          # Schriften der Testseiten erneuern
```

Die Site-Liste steht oben in `capture.mjs` (`SITES`): Slug, Name, URL, Gruppe. Neue Sites dort ergänzen — der
Ordner `reference/<slug>/` wird automatisch angelegt.

## Warum das Setup überhaupt nötig ist

Die Build-Umgebung hat kein `sudo`, und dem Basis-Image fehlen die Shared Libraries, die Chromium linkt
(`libnspr4`, `libnss3`, `libatk-1.0`, `libatk-bridge`, `libasound2`, `libxkbcommon`, `libX*`), außerdem jede
Fontconfig-Konfiguration — ohne Fonts bricht Chromium mit
`FATAL: SkFontMgr_FontConfigInterface.cpp Not implemented` ab. `setup-browser.sh` lädt passende `.deb`-Pakete,
entpackt sie nach `~/chromedeps/root` (ohne die Paketdatenbank anzufassen) und baut einen kleinen Shim für die
drei ATK-Symbole, die die neuere `libatk-bridge` erwartet (`atk_object_get_help_text`, …).

`browser-env.sh` muss in **jeder** Shell gesourct werden, die Chromium startet — `npm run capture` tut das selbst.

## Bekannte Einschränkungen

- **Egress-Ausfälle:** Die VM hat zeitweise keine Namensauflösung; dann endet der Lauf mit
  `ERR_NAME_NOT_RESOLVED` und `capture-report.json` zeigt `status: "error"`. Kein erneutes Setup nötig, nur
  erneut laufen lassen.
- **Bot-Schutz:** Gucci (HTTP/2-Fehler), Tiffany (403) und mehrere Luxus-Seiten blocken Headless-Traffic. Der
  Screenshot ist dann kein Designbeleg — im Report als `http-error`/`error` sichtbar.
- **Consent-Banner:** Es werden nur Buttons mit exakten Labels (`accept all`, `alle akzeptieren`, …) geklickt,
  die in einem `fixed`/`sticky`-Container oder einem Cookie-Container sitzen. Andere Banner bleiben im Bild.
- **Nur Above-the-fold:** `hero.jpg` ist 1440×900. Ganzseiten-Screenshots wären für ein Git-Repo zu schwer;
  bei Bedarf `page.screenshot({ fullPage: true })` lokal ergänzen.
- **Kein `prefers-reduced-motion`-Test:** Der Capture prüft keine Motion, nur gerendertes Layout und Tokens.
