# Testseiten — neun Designsprachen

Neun eigenständige HTML-Dateien, je eine Designsprache aus [`../designguidelines/`](../designguidelines/README.md),
plus eine Galerie. Zweck: die Systeme **nebeneinander sehen und anfassen**, bevor daraus ein Kundenprojekt
wird. Kein Build, kein Framework, keine externen Requests — die Schriften liegen im Repo.

**Einstieg:** [`index.html`](index.html). Ein Server ist nicht nötig, aber bequem:

```bash
python3 -m http.server 3000        # dann http://localhost:3000/test/
```

## Die Seiten

Jede Seite hat **eine Aufgabe**, **eine eigene Layout-Idee** und **Bewegung, die etwas erklärt** — nicht
neunmal Hero, drei Karten, Footer.

| Datei | System | Aufgabe | Layout-Idee | Bewegung |
| --- | --- | --- | --- | --- |
| [`01-meridian-studio.html`](01-meridian-studio.html) | **Meridian Studio** (Haus) | Entscheidungen nachlesbar machen | Split-Hero mit arbeitender Oberfläche (Sidebar, Tabs, Belege), dunkle Sticky-Strecke, gefülltes Bento | Panel baut sich zusammen, Tab-Indikator gleitet, Sticky-Schritte, Theme-Wechsel, Zähler |
| [`02-cupertino-clarity.html`](02-cupertino-clarity.html) | Cupertino Clarity | Produkt verstehen, Größe wählen | Apple-Satzspiegel: zentrierter Hero, randloses Produkt, Konfigurator-Leiste, drei Modellkarten | **Scroll-Cinema**: geklebte Szene über 300 svh, Lichtfarbe folgt dem Tag, Beats kreuzen sich, Fortschrittsschiene; Farbe, Modellwahl und Kaufleiste |
| [`03-ledger-gradient.html`](03-ledger-gradient.html) | Ledger Gradient | Zahlung auslösen und prüfen | Zahlungsfenster mit Ereignissen und Rohdaten, Sticky-Ablauf, Code-Tabs, Gebührentabelle | Ereignis-Takt, Code-Wechsel, gezeichnete Pfade, Zähler |
| [`04-monochrome-edge.html`](04-monochrome-edge.html) | Monochrome Edge | Deploy verstehen | Rasterlinien, Terminal, Latenzdiagramm, klebender Ablauf | Tipp-Takt, gezeichnete Linien, Regionsbalken |
| [`05-kinetic-brutal.html`](05-kinetic-brutal.html) | Kinetic Brutal | Kampagne, Produkt sichern | Typo bis an die Kante, Produktbahn, Größenwahl mit Größentabelle | Laufband, seitliche Bahn, Dialog, Größen-Feedback |
| [`06-paper-workshop.html`](06-paper-workshop.html) | Paper Workshop | Plan lesen und abhaken | App-Fenster ragt aus dem Raster, Befehlspalette mit ⌘K | Fenster-Parallaxe, Häkchen, echte Filterung, Toasts |
| [`07-coral-belonging.html`](07-coral-belonging.html) | Coral Belonging | Unterkunft finden | Große Suche, Karten mit Preis-Pins, Bewertungsprofil | Karten-Hover, Pin-Staffel, Balkenwachstum |
| [`08-oyster-authority.html`](08-oyster-authority.html) | Oyster Authority | Kollektion prüfen | Uhr aus CSS-Schichten (Lünette, Guilloché, Indizes, Band), Makro-Flächen, Werk, Händlernetz | Zusammenbau beim Laden, Vier Ausführungen, Zifferblatt, Händler-Pins |
| [`09-rosso-corsa.html`](09-rosso-corsa.html) | Rosso Corsa | Rennwochenende erfassen | Diagonale rote Fläche, Zeitentabelle, Telemetrie, Countdown | Wipe beim Laden, gezeichnete Kurve, laufender Countdown, Kalenderstrecke |

Elf weitere Systeme liegen fertig in `designguidelines/`, haben aber noch keine Testseite — darunter
`quiet-intelligence`, `midnight-velocity` und die übrigen Luxus-Systeme.

## Schriften

Die Specs nennen die Schriften der Originale (SF Pro, sohne, Cereal, Nike Futura, Ferrari Sans …). Keine ist
frei lizenzierbar, deshalb steht überall ein dokumentierter Ersatz. **Die Typo-Grade (Größe, Zeilenhöhe,
Laufweite, Gewicht) bleiben exakt — nur die Familie wechselt.**

| System | Spec | Ersatz (lokal in `assets/fonts/`) |
| --- | --- | --- |
| Meridian Studio | SF Pro / sohne / Inter (Synthese) | Archivo, Instrument Sans, Instrument Serif (Akzent), Geist Mono |
| Obsidian Precision | Inter | Geist |
| Cupertino Clarity | SF Pro Display / Text | Manrope |
| Ledger Gradient | sohne-var | Figtree, Geist Mono |
| Monochrome Edge | GeistSans / GeistMono | Geist, Geist Mono |
| Kinetic Brutal | Nike Futura ND | Archivo, Geist Mono |
| Paper Workshop | NotionInter | Geist, Geist Mono |
| Coral Belonging | Airbnb Cereal VF | Figtree, Archivo |
| Oyster Authority | Rolex Grotesk | Jost, Instrument Sans, Instrument Serif |
| Rosso Corsa | Ferrari Sans | Archivo, Geist Mono |

Die Dateien sind WOFF2, Latin-Subset, zusammen rund 250 kB, alle SIL Open Font License. Neu laden mit
`bash tools/fetch-fonts.sh`. Ohne die Dateien fällt der Browser auf Systemschriften zurück; das Layout hält.

## Bewegung

Die Seiten folgen dem installierten Motion-Skill [`../skills/motion-design/SKILL.md`](../skills/motion-design/SKILL.md):
**Premium-Charakter** — 380–520 ms, `cubic-bezier(0.4, 0, 0.2, 1)`, kein Überschwingen, Einstiege von unten
(16–24 px), Ausstiege 65–75 % der Einstiegsdauer, Staffelung 60 ms und nie über 420 ms.

Zwei Ebenen, bewusst getrennt:

- **`assets/motion.js`** (eine Datei, keine Abhängigkeit) für die wiederkehrenden Bausteine: Reveal, Wortmasken,
  `data-stagger`, `--scrub` und `--track` (Scroll-Fortschritt), Parallaxe, Zähler, Lesefortschritt, magnetische
  Buttons, Kartenlicht, Tilt, gezeichnete SVG-Pfade, Tabs, Dialoge, Sticky-Schritte sowie `[data-scene]` für
  Scroll-Cinema.
- **`assets/scene.css` + `skills/scroll-cinema/`** für die eine große Szene: geklebte Bühne, `--scene` als Uhr,
  Beats per `data-from`/`data-to`. Ohne JavaScript und bei `prefers-reduced-motion` bleibt sie statisch und
  vollständig lesbar.
- **Gestaltungsspezifische Bewegung** steht in der jeweiligen Datei: Zifferblatt, Terminal-Takt, Countdown,
  Kalenderstrecke, Kaufleiste, Wipe beim Laden. Was nur eine Sprache braucht, bleibt bei ihr.

`prefers-reduced-motion: reduce` schaltet beides ab, **ohne Inhalte zu verstecken**: Reveals sind sofort
sichtbar, Zähler stehen auf ihrem Endwert, Pfade sind gezeichnet, das Zifferblatt zeigt die Uhrzeit statisch.

## Regeln für diese Seiten

1. **Tokens nur aus dem Frontmatter.** Kein Farb-, Typo- oder Abstandswert, der nicht in der jeweiligen
   `design.md` steht. Wo ein Wert fehlte, wurde er dort ergänzt — nicht hier erfunden. `01` liest die Tokens
   aus `designguidelines/meridian-studio/design.md`.
2. **Jede Seite hat eine Aufgabe** und mindestens einen Nicht-Standard-Zustand: leer, lädt, Fehler,
   ausverkauft oder Erfolg.
3. **Bilder sind Platzhalter**, offen als solche markiert. Keine fremden Fotos, keine Logos, keine
   nachgebaute Marke — Produktnamen und Zahlen sind erfunden. Die Uhr auf Seite 08 ist aus CSS-Schichten
   gebaut, kein Foto.
4. **Barrierefreiheit ist Teil der Demo:** semantische Landmarks, Skip-Link, `:focus-visible`-Ringe,
   `aria-pressed`/`aria-selected`/`aria-live` wo Zustände wechseln, echte `<dialog>`-Elemente, Fokus auch auf
   dunklen Flächen sichtbar.
5. **Mobile ist Pflicht:** jede Seite ist auf 390 px geprüft, nicht nur auf 1440 px.
6. **Deutsch als Inhaltssprache**, Design- und Technikbegriffe bleiben englisch.

## Geprüft

Alle zehn Dateien wurden mit Chromium (Playwright) bei **1440 × 1000**, **768 × 1024** und **390 × 844**
gerendert: kein horizontaler Overflow (`scrollWidth === clientWidth`), keine Konsolen- oder Netzwerkfehler, alle
lokalen Schriften geladen, keine toten internen Links. Seite 02 wurde zusätzlich im Scroll-Cinema-Betrieb an
drei Fortschrittspunkten, mit `prefers-reduced-motion` und ohne JavaScript geprüft (Szene statisch, alle Beats
sichtbar). Einzelne Abschnitte (Vergleich, Latenz, Passform, Palette, Karte, Telemetrie, Countdown) wurden
separat angesehen und jede gefundene Abweichung korrigiert.
Die Prüfskripte und Screenshots liegen unter `artifacts/` und sind nicht Teil des Repos.

## Grenzen

- Die Seiten sind **Entwürfe**, keine Produktionsartefakte: kein State-Management, keine echten Daten,
  Formulare senden nichts — sie sagen das auch.
- Kontraste sind gegen AA gebaut, aber nicht automatisiert geprüft (kein Axe-Lauf im Repo).
- Die Luxus- und Marken-Systeme sind Analysen, keine Kopien: Namen, Produkte und Bilder sind eigenständig.
- Die Marken-Screenshots in `../reference/` sind teils blockiert (siehe `../reference/README.md`); die
  Luxus-Systeme sind Fachwissen, nicht Messung.
