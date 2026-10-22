# Reference — echte Websites, gemessen

Screenshots und ausgelesene Computed Styles von Websites, die als Maßstab dienen. Zweck: Muster **belegen**
statt behaupten. Jede Referenz besteht aus drei Dateien:

| Datei | Inhalt |
| --- | --- |
| `hero.jpg` | Screenshot 1440×900 (above the fold, Cookie-Banner weggeklickt) |
| `tokens.json` | gemessene Fonts, Textfarben, Hintergrundfarben, Radien, Border-Stile, Typo-Samples |
| `notes.md` | Einordnung: was auffällt, was man übernehmen kann, was nicht |

`capture-report.json` hält Status, HTTP-Code und Fehler jedes Laufs fest (Quelle der Wahrheit, nicht der
Screenshot allein — ein 403-Captcha ist kein Design).

## Top-Unternehmen (10 von 10 erfasst)

| Seite | Ordner | Blickfang |
| --- | --- | --- |
| Apple | [`apple/`](apple/notes.md) | 980px-Pills, 17/40/80-Typo-Skala, Sektionswechsel per Fläche |
| Stripe | [`stripe/`](stripe/notes.md) | 300er-Display, 4–8px-Radien, ein Gradient pro Seite |
| Linear | [`linear/`](linear/notes.md) | `#08090A`, Inter 510/590, Mono-Metadaten |
| Vercel | [`vercel/`](vercel/notes.md) | `-3.84px` Tracking, 1px-Geometrie, Mono-Labels |
| Airbnb | [`airbnb/`](airbnb/notes.md) | 20px-Karten, schwebende Suchpille, Coral nur für Aktionen |
| Nike | [`nike/`](nike/notes.md) | 76px-Kampagnentypo, 30px-Pills, Foto an die Kante |
| Spotify | [`spotify/`](spotify/notes.md) | Surface-Leiter ohne Borders, 700er-Labels, Acid-Green |
| Notion | [`notion/`](notion/notes.md) | 96px-Hero, warmes Papier, Hover-Affordanzen |
| Figma | [`figma/`](figma/notes.md) | Flat-Colour-Bursts, 24px-Karten, 330er-Body |
| OpenAI | [`openai/`](openai/notes.md) | Graustufen-Struktur, 6px-Controls, Hairline-Zeilen |

## Luxus & Heritage (2 von 10 erfasst)

| Seite | Ordner | Status |
| --- | --- | --- |
| Ferrari | [`ferrari/`](ferrari/notes.md) | erfasst — Video-Hero, Caps-Navigation, Kreis-CTA |
| Porsche | [`porsche/`](porsche/notes.md) | erfasst — Cockpit-Film, 32px-Pill-CTA, 3-Elemente-Navigation |
| Rolex, Chanel, Hermès, Louis Vuitton, Cartier, Dior, Gucci, Tiffany | — | **blockiert**: HTTP 403 „Access Denied“ bzw. HTTP/2-Fehler für Headless-Chromium (Akamai/Bot-Schutz), siehe `capture-report.json` |

Für die acht blockierten Marken existieren die Design-Systeme in
[`../designguidelines/`](../designguidelines/README.md), aber **keine Screenshots**. Ihre Analysen sind
entsprechend als Fachwissen markiert, nicht als Messung. Ein nicht-headless Browser oder ein freigegebener
Screenshot-Dienst kann die Lücke schließen; die Ordner sind angelegt, `npm run capture -- rolex chanel` füllt
sie, sobald der Bot-Schutz nicht mehr greift.

## Eine Referenz erzeugen

```bash
npm install                      # Playwright einmalig
bash tools/setup-browser.sh      # Chromium-Libs, Fonts, ATK-Shim (Cloud-VM, kein Root)
npm run capture -- rolex chanel  # einzelne Sites; ohne Argumente alle
```

Ablauf pro Seite: laden (domcontentloaded, 45s) → 2,5s warten → Consent-Banner wegklicken → 400px scrollen und
zurück (Lazy-Load triggern) → Computed Styles über 4000 Elemente sammeln → Screenshot.

## Regeln für die Nutzung

1. **Messen, nicht schätzen.** Werte aus `tokens.json` zitieren, wenn ein Detail behauptet wird.
2. **Kein Screenshot ohne `notes.md`.** Eine Datei ohne Einordnung ist ein Bild, keine Referenz.
3. **Marken sind Studien.** Keine Logos, keine Assets, keine 1:1-Imitation in Kundenprojekten.
4. **Veraltet ist erlaubt, unmarkiert nicht.** Ein `capturedAt`-Datum im `capture-report.json` sagt, wie alt der
   Stand ist.
