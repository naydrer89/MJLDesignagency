# AGENTS.md — MJL Design Agency

Dieses Repo ist eine **Design-Bibliothek**, kein Anwendungsprojekt. Es enthält Design-Systeme, Skills,
Referenz-Screenshots und die Design-Philosophie der Agentur. Lese dieses Dokument zuerst, dann die Datei,
auf die deine Aufgabe zeigt.

## Die eine Regel

**[`philosophy.md`](philosophy.md) gewinnt immer.** Wir bauen **UX first**: erst Problem und Ablauf, dann
Oberfläche. Wenn ein Design-System, ein Skill, eine Referenz oder eine Vorlage der Philosophie widerspricht,
gilt die Philosophie — und der Widerspruch wird notiert, nicht stillschweigend aufgelöst.

Kurzfassung: *Was soll der Mensch hier tun — und was ist das Einfachste, was ihn dahin bringt?*

## Was liegt wo

| Pfad | Inhalt | Wann lesen |
| --- | --- | --- |
| [`philosophy.md`](philosophy.md) | Prinzipien, Prozess, Anti-Patterns, Definition of Done | **immer zuerst** |
| [`skills/`](skills) | installierte Agent-Skills (Design, Motion, Art-Direction, Taste) | vor Design-, UI- oder Motion-Arbeit |
| [`designguidelines/`](designguidelines/README.md) | 22 Design-Systeme im `design.md`-Format (Tokens + Begründung) | wenn eine Richtung, Marke oder ein Token-Set gebraucht wird |
| [`reference/`](reference/README.md) | Screenshots + `tokens.json` + Analyse echter Top-Websites | wenn ein konkretes Muster oder Detail belegt werden soll |
| [`test/`](test/README.md) | neun Beispielseiten in neun Designsprachen (reines HTML, kein Build) | wenn eine Richtung verglichen oder ein Muster im Code gebraucht wird |
| [`test/assets/motion.js`](test/assets/motion.js) | gemeinsamer Motion-Layer der Seiten (Reveal, Stagger, Tabs, Dialoge) | wenn eine Testseite Bewegung braucht |
| [`tools/`](tools) | Capture-Pipeline (Playwright), Browser-Setup, Token-Extraktion | wenn Referenzen neu erzeugt werden sollen |
| [`designguidelines/meridian-studio/design.md`](designguidelines/meridian-studio/design.md) | das Haus-System (Default, wenn nichts anderes passt) | als Startpunkt für neue Systeme |

## Design-Systeme benutzen

Jedes System liegt in `designguidelines/<slug>/design.md` und hat **YAML-Frontmatter als Single Source of
Truth**: `name`, `brand`, `source`, `colors`, `typography`, `rounded`, `spacing`. Danach folgen die Kapitel
*Brand & Style, Colors, Typography, Layout & Spacing, Elevation & Depth, Shapes, Components*.

Regeln:

1. **Tokens nie erfinden.** Farben, Typo-Grade, Radien und Abstände kommen aus dem Frontmatter des gewählten
   Systems. Fehlt ein Wert, wird er ergänzt **und** im Dokument begründet — nicht im Code hart kodiert.
2. **Ein System pro Projekt.** Mischen ist erlaubt nur über klar benannte Ausnahmen (z. B. „Obsidian Precision
   + Apple-Motion"), nie als Sammlung von Einzelentscheidungen.
3. **Neue Systeme** werden nach demselben Schema angelegt (siehe Meridian Studio) und im
   [Index](designguidelines/README.md) eingetragen.
4. **Marken-Systeme sind Analysen, keine Kopien.** Keine Logos, keine geschützten Assets, keine Imitation von
   Markenauftritten in Kundenprojekten — die Systeme dienen als Studien und als Startpunkt für eigenständige Arbeit.

## Wann welches System

- **Haus-Default:** `meridian-studio` (Apple × Linear × Stripe × Notion: warmes Papier, Haarlinien, ein Kobalt).
  Dunkle Variante des Hauses: `obsidian-precision`.
- **SaaS / Developer-Tools:** `ledger-gradient`, `midnight-velocity`, `monochrome-edge`, `quiet-intelligence`.
- **Consumer / Marktplatz:** `coral-belonging`, `neon-sound`, `kinetic-brutal`.
- **Content / Produktivität:** `paper-workshop`, `canvas-play`, `cupertino-clarity`.
- **Luxus / Heritage:** `oyster-authority`, `noir-discipline`, `atelier-orange`, `monogram-journey`,
  `red-lacquer`, `avenue-montaigne`, `maximal-heritage`.
- **Performance / Technik:** `rosso-corsa`, `weissach-precision`, `robin-blue` (Retail-Luxus mit Licht).

## Skills benutzen

`skills/` enthält installierte Skills (`SKILL.md` je Ordner). Vor der Arbeit den passenden `SKILL.md` lesen, nicht
aus dem Gedächtnis zitieren.

- `motion-design` (LottieFiles) — Timing, Easing, Choreografie, Disney-Prinzipien; **vor jeder Motion-Arbeit lesen**
- `scroll-cinema` — scroll-gescrubbte Produktszenen: geklebte Bühne, Beats, Tokens, Fallbacks; **für jede große Scroll-Strecke**
- `design-taste-frontend` — Art-Direction, Anti-Slop, Landingpages, App-Screens
- `emil-design-eng` — UI-Polish, Komponenten-Qualität, die unsichtbaren Details
- `animate` — eine einzelne Animation von Grund auf entscheiden und implementieren
- `apple-design` — Gesten, Spring-Physik, Materials, Typo-Feinheiten
- `gpt-taste` — zweite Meinung zur visuellen Richtung

### Bewegung (Hausregel)

Premium-Charakter: **380–520 ms**, `cubic-bezier(0.4, 0, 0.2, 1)`, kein Überschwingen. Einstiege von unten
(16–24 px) und ausblenden, Ausstiege 65–75 % davon. Staffelung 60 ms, insgesamt nie über 420 ms. Hover
antwortet in ≤ 140 ms. Bewegung erklärt Hierarchie oder Ursache — sonst wird sie entfernt. Details:
[`skills/motion-design/SKILL.md`](skills/motion-design/SKILL.md).

Für die **eine große Szene** einer Seite gilt stattdessen Scroll-Cinema: der Scroll ist die Uhr, eine
geklebte Bühne, drei bis vier Beats, `--scene` statt Timer. Tokens und Fallbacks stehen in
[`skills/scroll-cinema/SKILL.md`](skills/scroll-cinema/SKILL.md); die gemeinsame Bühne liegt in
`test/assets/scene.css` und wird von `motion.js` über `[data-scene]` gesteuert. Nie zwei Szenen auf einer Seite.

## Referenzen benutzen

- `reference/<site>/hero.jpg` ist der Screenshot, `tokens.json` die gemessenen Werte
  (Fonts, Textfarben, Hintergründe, Radien, Typo-Samples), `notes.md` die Einordnung.
- Zitate aus Referenzen immer als **Messung** kennzeichnen („gemessen: 20px Radius") statt als Behauptung.
- Kein Screenshot einer Seite ohne `notes.md`-Eintrag.

## Referenzen neu erzeugen

```bash
npm install                 # Playwright (einmalig)
bash tools/setup-browser.sh # Chromium-Libs + Fonts in ~/chromedeps (Cloud-VM ohne Root)
npm run capture             # alle Sites
node tools/capture.mjs rolex chanel   # einzelne Sites
```

Details und bekannte Einschränkungen stehen in [`tools/README.md`](tools/README.md).

## Arbeitsweise für Agenten

1. **Verstehen → Struktur → Sprache → System → Oberfläche → Prüfen → Schärfen** (siehe `philosophy.md`).
2. Vor dem ersten Pixel: primäres Ziel des Screens in einem Satz, plus alle Zustände (leer, lädt, Fehler, Erfolg,
   Extremwerte).
3. Tokens aus dem Frontmatter, Komponenten aus den Kapiteln, Muster aus `reference/` — in dieser Reihenfolge.
4. **Definition of Done** aus `philosophy.md` abarbeiten, inklusive Tastaturbedienung, Kontrast AA,
   `prefers-reduced-motion` und Mobile bei ≤ 390 px.
5. Nichts committen, was nicht gegen die Philosophie geprüft wurde; keine Platzhalter-Copy, keine Fake-Daten
   ohne `TODO`-Markierung.

## Konventionen

- Sprache der Dokumente: **Deutsch** für Prozess und Anleitung (`philosophy.md`, `AGENTS.md`, READMEs),
  **Englisch** für Design-Systeme (`design.md`), damit Tokens und Komponenten international nutzbar bleiben.
- Dateinamen: `kebab-case`; ein Design-System = ein Ordner = eine `design.md`.
- Markdown-Links relativ, Bilder als `hero.jpg` neben ihrer Analyse.
