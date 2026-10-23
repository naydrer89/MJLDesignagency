# Design Systems

22 Systeme, alle im selben Format: YAML-Frontmatter (Tokens) + Kapitel *Brand & Style, Colors, Typography,
Layout & Spacing, Elevation & Depth, Shapes, Components*. Grundlage ist [`meridian-studio`](meridian-studio/design.md),
das Haus-System.

**Wie benutzen:** ein System pro Projekt wählen, Tokens aus dem Frontmatter übernehmen, Komponenten aus dem
letzten Kapitel ableiten. Nichts erfinden, was im Frontmatter steht. Regeln: siehe [`../AGENTS.md`](../AGENTS.md).

## Haus-System

| System | Ordner | Charakter |
| --- | --- | --- |
| Meridian Studio | [`meridian-studio/`](meridian-studio/design.md) | Apple × Linear × Stripe × Notion: warmes Papier, Hairlines, ein Kobalt, Archivo + Instrument |
| Obsidian Precision | [`obsidian-precision/`](obsidian-precision/design.md) | Apple × OpenAI: dunkles Obsidian, Micro-Glass, Pill-Buttons, Inter — dunkle Variante des Hauses |

## Top-Unternehmen

| System | Marke | Ordner | Kern |
| --- | --- | --- | --- |
| Cupertino Clarity | Apple | [`cupertino-clarity/`](cupertino-clarity/design.md) | Weiß/Schwarz-Galerie, SF Pro, 980px-Pills, ein Produkt pro Viewport |
| Ledger Gradient | Stripe | [`ledger-gradient/`](ledger-gradient/design.md) | Navy-Ink, 300er-Display, 4–8px-Radien, ein Gradient pro Seite |
| Midnight Velocity | Linear | [`midnight-velocity/`](midnight-velocity/design.md) | Near-Black, Inter 510/590, Mono-Metadaten, Hairlines |
| Monochrome Edge | Vercel | [`monochrome-edge/`](monochrome-edge/design.md) | Schwarz/Weiß, extremes Tracking, 1px-Geometrie, Geist |
| Coral Belonging | Airbnb | [`coral-belonging/`](coral-belonging/design.md) | Foto-First-Karten (20px), Coral-CTA, schwebende Suchpille |
| Kinetic Brutal | Nike | [`kinetic-brutal/`](kinetic-brutal/design.md) | 76px-Kampagnentypo, 30px-Pills, Schwarz/Weiß + Volt |
| Neon Sound | Spotify | [`neon-sound/`](neon-sound/design.md) | Dunkle Surface-Leiter, 700er-Labels, Acid-Green nur für Play |
| Paper Workshop | Notion | [`paper-workshop/`](paper-workshop/design.md) | Warmes Papier, 96px-Hero, Serif für Editorial, 4–12px |
| Canvas Play | Figma | [`canvas-play/`](canvas-play/design.md) | Schwarz/Weiß-Bänder, Flat-Colour-Bursts, spielerische Karten |
| Quiet Intelligence | OpenAI | [`quiet-intelligence/`](quiet-intelligence/design.md) | Rein grau, 6px-Controls, Hairline-Zeilen, monochromer Fokusring |

## Luxus & Heritage

| System | Marke | Ordner | Kern |
| --- | --- | --- | --- |
| Oyster Authority | Rolex | [`oyster-authority/`](oyster-authority/design.md) | Schwarz/Ivory, Gold-Hairlines, 0px-Radien, getrackte Small Caps |
| Noir Discipline | Chanel | [`noir-discipline/`](noir-discipline/design.md) | Editorial Schwarz/Weiß, `+0.2em`-Labels, keine Rundung |
| Atelier Orange | Hermès | [`atelier-orange/`](atelier-orange/design.md) | Creme-Papier, Serif-Erzählung, ein Orange pro Seite |
| Monogram Journey | Louis Vuitton | [`monogram-journey/`](monogram-journey/design.md) | Braun-Black, Gold-Keylines, Journey-Rails, Monogramm als Textur |
| Red Lacquer | Cartier | [`red-lacquer/`](red-lacquer/design.md) | Lackschwarz/Ivory, Rot + Gold, Vitrinen-Layout |
| Avenue Montaigne | Dior | [`avenue-montaigne/`](avenue-montaigne/design.md) | Couture-Weißraum, Didone-Serif, `+0.22em`-Labels |
| Maximal Heritage | Gucci | [`maximal-heritage/`](maximal-heritage/design.md) | Creme, Web-Stripe, Collage im strikten 12er-Raster |
| Rosso Corsa | Ferrari | [`rosso-corsa/`](rosso-corsa/design.md) | Motorsport-Typo 700, Rosso Corsa, Spec-Tabellen |
| Weissach Precision | Porsche | [`weissach-precision/`](weissach-precision/design.md) | Showroom-Weiß/Schwarz, 32px-Pill-CTA (gemessen), Konfigurator-Logik |
| Robin Blue | Tiffany & Co. | [`robin-blue/`](robin-blue/design.md) | Galerie-Weiß, Tiffany Blue als Juwel, Serif + getrackte Sans |

## Gemeinsame Anatomie

Alle Dateien teilen dieselben Token-Gruppen — dadurch sind Systeme austauschbar, ohne die Struktur zu brechen:

```yaml
name: <Systemname>
brand: <Marke>
source: <URL>
colors: { surface, surface-container-*, on-surface*, outline*, primary*, secondary*, tertiary*, error*,
          canvas-light, surface-light, border-light, text-light-*, canvas-dark, surface-dark, border-dark,
          text-dark-*, accent-* }
typography: { display, display-mobile, headline-lg(-mobile), headline-md, headline-sm, title-md,
              body-lg, body-md, body-sm, label-md, label-sm }
rounded: { sm, DEFAULT, md, lg, xl, full }
spacing: { gutter, gutter-mobile, margin, margin-mobile, space-xs … space-2xl }
```

## Neues System anlegen

1. Ordner `designguidelines/<systemname-in-kebab-case>/design.md` erstellen.
2. Frontmatter mit **allen** Gruppen füllen (keine Auslassungen — sonst bricht die Austauschbarkeit).
3. Kapitel 1:1 wie bei `obsidian-precision` gliedern, aber eigene Begründungen schreiben.
4. Werte, die aus einer echten Website stammen, als Messung kennzeichnen und in `reference/` verlinken.
5. Diesen Index ergänzen (Haus-System, Top-Unternehmen oder Luxus).
