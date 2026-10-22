# Design Philosophy — MJL Design Agency

> **Wir bauen UX first.**
> Nicht „schön, dann benutzbar", sondern: erst das Problem, dann der Weg, dann die Oberfläche.
> Ästhetik ist die Belohnung für ein gelöstes Problem — nie der Ersatz dafür.

Dieses Dokument ist die oberste Instanz des Repos. Wenn ein Design-System, ein Skill oder eine
Referenz dieser Philosophie widerspricht, gewinnt die Philosophie.

---

## 1. Der Leitsatz

**UX first heißt: Jede Entscheidung wird vom Nutzer her begründet, nicht vom Geschmack.**

Bevor ein Pixel gesetzt wird, müssen drei Fragen beantwortet sein:

1. **Wer** benutzt das — in welcher Situation, auf welchem Gerät, mit welchem Vorwissen?
2. **Was** muss diese Person in welcher Reihenfolge tun, um ihr Ziel zu erreichen?
3. **Warum** ist dieser Schritt an dieser Stelle richtig — und was passiert, wenn er wegfällt?

Kann eine dieser Fragen nicht beantwortet werden, ist das kein Designproblem, sondern ein
Research-Problem. Dann wird recherchiert, nicht dekoriert.

---

## 2. Die zehn Prinzipien

### 1. Nutzen vor Effekt
Jedes Element muss eine Aufgabe haben. Ein Element, das nur gut aussieht, ist ein Element, das
Ladezeit, Aufmerksamkeit und Wartung kostet. Dekoration ist erlaubt — aber sie muss den Inhalt
tragen, nicht überdecken.

### 2. Klarheit ist Geschwindigkeit
Der schnellste Weg durch eine Oberfläche ist der, den man nicht erklären muss. Klare Hierarchie,
sprechende Labels, ein sichtbarer nächster Schritt. Verständlichkeit ist eine Performance-Kennzahl.

### 3. Ein Screen, eine Aufgabe
Jede Ansicht hat genau ein primäres Ziel. Sekundäres wird leiser, Tertiäres wird unsichtbar.
Konkurrierende Primäraktionen sind ein Bug, kein Feature.

### 4. Bewegung ist Feedback, nicht Unterhaltung
Animation erklärt Herkunft, Richtung und Konsequenz einer Zustandsänderung. Sie dauert selten
länger als 200–300 ms, respektiert `prefers-reduced-motion` und nie die Eingabe des Nutzers.

### 5. Kontrast führt
Der Blick folgt dem Kontrast. Wir setzen Kontrast bewusst als Navigationswerkzeug ein: ein
Primärton pro Screen, der den Weg zeigt — nicht als Farbsammlung, sondern als Signal.

### 6. Konsistenz ist Vertrauen
Gleiche Dinge verhalten sich gleich, über alle Screens und Produkte hinweg. Tokens statt
Einzelentscheidungen: Farbe, Typografie, Abstand und Radius kommen aus einem Design-System,
niemals aus dem Bauch einer einzelnen Komponente.

### 7. Barrierefreiheit ist Qualität
Kontrastverhältnisse (WCAG AA), Fokus-Ringe, Tastaturbedienung, semantisches HTML, `aria`-Labels,
Trefferflächen ab 44 px, Textzoom bis 200 % ohne Layoutbruch. Nicht als Nachbereitung — als
Definition of Done.

### 8. Performance ist Design
Ein hübsches Interface, das drei Sekunden braucht, ist kein gutes Interface. Ladezustände,
Skeletons und optimistische Updates sind Designaufgaben. Die erste Ansicht muss stehen, bevor
das Auge fertig ist mit der Erwartung.

### 9. Details sind die Marke
Die Mikro-Interaktion, der Fokusring, die 1-px-Linie, die Auswahlfarbe, der leere Zustand.
Genau dort entscheidet sich, ob eine Oberfläche „zusammengebaut" oder „gemacht" wirkt.

### 10. Messen statt glauben
Hypothese, Prototyp, Test mit echten Menschen, Messung (Task-Erfolg, Zeit, Fehlerquote,
Abbruchpunkt). Design wird überprüft — nicht verteidigt.

---

## 3. Der Prozess (UX first)

| Phase | Frage | Ergebnis |
| --- | --- | --- |
| **1. Verstehen** | Wer, was, warum — und was ist heute der Schmerz? | Problem Statement, Personas, Job-to-be-done |
| **2. Struktur** | Welche Information, in welcher Reihenfolge, mit welcher Priorität? | Informationsarchitektur, Flow, Wireframes |
| **3. Sprache** | Was steht da — und versteht es jemand ohne Kontext? | Copy, Labels, Fehlermeldungen |
| **4. System** | Welche Tokens, Komponenten, Muster bilden das ab? | Design-System (`designguidelines/`) |
| **5. Oberfläche** | Wie sieht das aus, wie fühlt es sich an? | High-Fidelity, Motion, Detail-Pass |
| **6. Prüfen** | Funktioniert es für echte Menschen und echte Daten? | Usability-Test, Edge-Cases, A11y-Audit |
| **7. Schärfen** | Was kann weg, was kann leiser, was kann klarer? | Der letzte, entscheidende Durchgang |

Phasen dürfen iterieren, aber nie übersprungen werden. **Wireframe vor Moodboard. Copy vor
Komposition. Zustände vor Effekten.**

---

## 4. Zustände sind Teil des Designs

Kein Screen ist fertig, bevor alle Zustände entworfen sind:

- **leer** (Empty State mit klarem nächstem Schritt)
- **lädt** (Skeleton statt Spinner, wenn die Struktur bekannt ist)
- **teilweise** (Daten fehlen, Felder sind unvollständig)
- **Fehler** (was ist passiert, was kostet es, was ist der Ausweg)
- **Erfolg** (ruhig bestätigen, nicht feiern)
- **extrem** (längster Name, größte Zahl, 0 Treffer, 10.000 Treffer, Emoji, RTL)
- **offline / langsam / ohne Rechte**

Ein Design ohne Zustände ist ein Poster, keine Oberfläche.

---

## 5. Anti-Patterns — so nicht

- **Scroll-Friedhöfe:** lange Seiten ohne klare Aufgabe und ohne nächsten Schritt.
- **Hero-Theater:** große Bildflächen, die die eigentliche Information nach unten drücken.
- **Mystery Meat:** Icons ohne Label, bei denen niemand das Ziel errät.
- **Konsens-Copy:** „Innovative Lösungen für moderne Teams" — sagt nichts, hilft niemandem.
- **Effekt-Stacking:** Glow, Blur, Gradient, Schatten und Noise gleichzeitig.
- **Karussells mit Autoplay**, die Inhalte vor dem Lesen wegwischen.
- **Fake-Zahlen, Fake-Logos, Fake-Testimonials.**
- **Modale Dialoge** für Dinge, die eine eigene Seite verdienen.
- **Token-Wildwuchs:** dreizehn Grautöne, vier Blautöne, keine Regel.

---

## 6. Ästhetik — wie sie bei uns entsteht

Ästhetik ist kein Zufall und keine Stilfrage, sondern die sichtbare Konsequenz aus Prinzip 1–10:

- **Raster und Abstand** vor Verzierung. Ein 4-px-Rhythmus, konsequent angewendet, wirkt teurer
  als jede Illustration.
- **Typografie trägt die Marke.** Ein bis zwei Familien, klare Skala, negative Laufweite in
  großen Graden, ruhige Zeilenhöhen im Text.
- **Farbe als Signal.** Neutrale Basis, ein Primärton, ein Sekundärton für Status — und Disziplin.
- **Tiefe nur, wenn sie Hierarchie erklärt.** Hairline-Borders und weiche, diffuse Schatten statt
  harter schwarzer Kanten.
- **Bewegung mit Ursache.** Kein Fade-in beim Scrollen um des Effekts willen.

Die konkrete Ausprägung — Farbwerte, Typo-Skala, Radien, Abstände, Komponenten — steht in
[`designguidelines/`](designguidelines/README.md). Jedes dort hinterlegte System ist eine
**bewusste** Richtung, kein Default. Gewählt wird nach Aufgabe, Publikum und Marke.

---

## 7. Definition of Done

Ein Design gilt als fertig, wenn:

- [ ] das primäre Ziel des Screens in einem Satz benannt werden kann
- [ ] alle Zustände (siehe 4.) gestaltet sind
- [ ] Tastaturbedienung, Fokus, Kontrast (AA) und Trefferflächen geprüft sind
- [ ] Tokens aus einem Design-System stammen und nicht hart im Code stehen
- [ ] Copy ohne Kontext verständlich ist
- [ ] die Seite auf Mobile (≤ 390 px), Tablet und Desktop funktioniert
- [ ] Motion `prefers-reduced-motion` respektiert
- [ ] die Detailrunde gelaufen ist: Abstände, Kanten, Übergänge, Leerzustände
- [ ] eine zweite Person es ohne Erklärung bedienen konnte

---

## 8. Wo was liegt

- [`designguidelines/`](designguidelines/README.md) — Design-Systeme im `design.md`-Format (Tokens + Begründung)
- [`reference/`](reference/README.md) — Screenshots und Analysen echter, herausragender Websites
- [`test/`](test/README.md) — neun Testseiten in neun Designsprachen, zum Nebeneinanderlegen und Weiterbauen
- [`skills/`](skills) — installierte Skills für Design, Motion und Art-Direction
- [`tools/`](tools) — Capture- und Token-Werkzeuge

**Kurzform für jede Entscheidung:**
*Was soll der Mensch hier tun — und was ist das Einfachste, was ihn dahin bringt?*
