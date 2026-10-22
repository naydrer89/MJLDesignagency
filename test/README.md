# Testseiten — neun Designsprachen

Neun eigenständige HTML-Dateien, je eine Designsprache aus [`../designguidelines/`](../designguidelines/README.md),
plus eine Übersicht. Zweck: die Systeme **nebeneinander sehen und anfassen**, bevor daraus ein Kundenprojekt
wird. Kein Build, kein Framework, keine externen Requests — die Schriften liegen im Repo.

**Einstieg:** [`index.html`](index.html). Ein Server ist nicht nötig, aber bequem:

```bash
python3 -m http.server 3000        # dann http://localhost:3000/test/
```

## Die Seiten

Jede Seite hat **eine Aufgabe** und **eine eigene Layout-Idee** — nicht neunmal Hero, drei Karten, Footer.

| Datei | System | Aufgabe | Layout-Idee | Bewegung |
| --- | --- | --- | --- | --- |
| [`01-obsidian-precision.html`](01-obsidian-precision.html) | Obsidian Precision | Frage an eine Wissensbasis | Antwort-Panel überlappt die Headline, Aussagen stapeln sich beim Scrollen | Wortmasken, Klebekarten, Scroll-Scrub |
| [`02-cupertino-clarity.html`](02-cupertino-clarity.html) | Cupertino Clarity | Produkt verstehen, Farbe wählen | Gerät skaliert und dreht mit dem Scroll, Bahn läuft seitwärts | Scrub-Skalierung, Farbwechsel, Kaufleiste |
| [`03-ledger-gradient.html`](03-ledger-gradient.html) | Ledger Gradient | Zahlung auslösen und prüfen | Diagonale Lichtfläche, Code-Panel, Rechnung klappt per `grid-template-rows` auf | Zeilen-Takt, Layout-Übergang, Zähler |
| [`04-monochrome-edge.html`](04-monochrome-edge.html) | Monochrome Edge | Deploy verstehen | Rasterlinien, Terminal, klebender Ablauf | Tipp-Takt, Klebespalte, Statuswechsel |
| [`05-kinetic-brutal.html`](05-kinetic-brutal.html) | Kinetic Brutal | Kampagne, Produkt sichern | Typo bis an die Kante, umrissene zweite Zeile, Produktbahn | Laufband, seitliche Bahn, klebende Typo |
| [`06-paper-workshop.html`](06-paper-workshop.html) | Paper Workshop | Plan lesen und abhaken | App-Fenster ragt aus dem Raster, Dokument atmet | Fenster-Parallaxe, Häkchen-Übergang |
| [`07-coral-belonging.html`](07-coral-belonging.html) | Coral Belonging | Unterkunft finden | Große Suche als Produkt, illustrierte Aufenthalte | Karten-Hover, Reveal-Staffel |
| [`08-oyster-authority.html`](08-oyster-authority.html) | Oyster Authority | Kollektion prüfen | Editorial mit Gold-Haarlinien, lebendes Zifferblatt | echte Zeiger, seitliche Bahn, Masken-Reveal |
| [`09-rosso-corsa.html`](09-rosso-corsa.html) | Rosso Corsa | Rennwochenende erfassen | Diagonale rote Fläche, Zeitentabelle, Technik-Klebeblock | Wipe beim Laden, Ticker, seitliche Bahn |

Elf weitere Systeme liegen fertig in `designguidelines/`, haben aber noch keine Testseite — darunter
`quiet-intelligence`, `midnight-velocity` und die übrigen Luxus-Systeme.

## Schriften

Die Specs nennen die Schriften der Originale (SF Pro, sohne, Cereal, Nike Futura, Ferrari Sans …). Keine ist
frei lizenzierbar, deshalb steht überall ein dokumentierter Ersatz. **Die Typo-Grade (Größe, Zeilenhöhe,
Laufweite, Gewicht) bleiben exakt — nur die Familie wechselt.**

| System | Spec | Ersatz (lokal in `assets/fonts/`) |
| --- | --- | --- |
| Obsidian Precision | Inter | Geist |
| Cupertino Clarity | SF Pro Display / Text | Manrope |
| Ledger Gradient | sohne-var | Instrument Sans |
| Monochrome Edge | GeistSans / GeistMono | Geist, Geist Mono |
| Kinetic Brutal | Nike Futura ND | Jost (Futura-Anmutung), Archivo für Text |
| Paper Workshop | NotionInter | Geist |
| Coral Belonging | Airbnb Cereal VF | Figtree |
| Oyster Authority | Rolex Grotesk | Instrument Sans 300/400 |
| Rosso Corsa | Ferrari Sans | Archivo 600/700 |

Die Dateien sind WOFF2, Latin-Subset, zusammen rund 230 kB, alle SIL Open Font License. Neu laden mit
`bash tools/fetch-fonts.sh`. Ohne die Dateien fällt der Browser auf Systemschriften zurück; das Layout hält.

## Bewegung

Zwei Ebenen, bewusst getrennt:

- **`assets/motion.js`** (eine Datei, keine Abhängigkeit) für die wiederkehrenden Bausteine: Scroll-Reveal,
  Wortmasken, `--scrub` (Scroll-Fortschritt als Variable), Parallaxe, Zähler, Lesefortschritt, magnetische
  Buttons. Alles über `IntersectionObserver` und einen einzigen `requestAnimationFrame`-Loop.
- **Gestaltungsspezifische Bewegung** steht in der jeweiligen Datei: Laufband, Zifferblatt, Terminal-Takt,
  aufgehende Rechnung, Wipe beim Laden. Was nur eine Sprache braucht, bleibt bei ihr.

`prefers-reduced-motion: reduce` schaltet beides ab, **ohne Inhalte zu verstecken**: Reveals werden sofort
sichtbar, das Zifferblatt zeigt die Uhrzeit statisch.

## Regeln für diese Seiten

1. **Tokens nur aus dem Frontmatter.** Kein Farb-, Typo- oder Abstandswert, der nicht in der jeweiligen
   `design.md` steht. Wo ein Wert fehlte, wurde er dort ergänzt — nicht hier erfunden.
2. **Jede Seite hat eine Aufgabe** und mindestens einen Nicht-Standard-Zustand: leer, lädt, Fehler,
   ausverkauft oder Erfolg.
3. **Bilder sind Platzhalter**, offen als solche markiert. Keine fremden Fotos, keine Logos, keine
   nachgebaute Marke — Produktnamen und Zahlen sind erfunden.
4. **Barrierefreiheit ist Teil der Demo:** semantische Landmarks, Skip-Link, `:focus-visible`-Ringe,
   `aria-pressed`/`aria-checked`/`aria-live` wo Zustände wechseln, sichtbarer Fokus auch auf dunklen Flächen.
5. **Mobile ist Pflicht:** jede Seite ist auf 390 px geprüft, nicht nur auf 1440 px.
6. **Deutsch als Inhaltssprache**, Design- und Technikbegriffe bleiben englisch.

## Geprüft

Alle zehn Dateien wurden mit Chromium (Playwright) bei **1440 × 1000** und **390 × 844** gerendert und
einzeln angesehen: kein horizontaler Overflow, keine Konsolenfehler, keine toten internen Links, keine
kaputten Schriften. Die Prüfskripte liegen unter `artifacts/` und sind nicht Teil des Repos.

## Grenzen

- Die Seiten sind **Entwürfe**, keine Produktionsartefakte: kein State-Management, keine echten Daten,
  Formulare senden nichts.
- Kontraste sind gegen AA gebaut, aber nicht automatisiert geprüft (kein Axe-Lauf im Repo).
- Die Luxus- und Marken-Systeme sind Analysen, keine Kopien: Namen, Produkte und Bilder sind eigenständig.
