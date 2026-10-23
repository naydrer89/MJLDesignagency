---
name: Meridian Studio
brand: MJL Design Agency (house system)
source: Synthesis of Apple, Linear, Stripe and Notion — principles only, no brand assets
colors:
  canvas: '#F7F6F3'
  canvas-raised: '#FCFBF9'
  surface: '#FFFFFF'
  surface-subtle: '#F1F0EB'
  surface-sunken: '#E9E7E0'
  hairline: 'rgba(18,19,22,0.10)'
  hairline-strong: 'rgba(18,19,22,0.18)'
  ink: '#121316'
  ink-secondary: '#55575E'
  ink-tertiary: '#8A8C93'
  on-ink: '#F4F2ED'
  on-ink-secondary: '#A6A8AF'
  accent: '#2447E8'
  accent-hover: '#1A36C2'
  accent-wash: '#ECF0FE'
  accent-hairline: 'rgba(36,71,232,0.22)'
  night: '#101114'
  night-surface: '#17181C'
  night-hairline: 'rgba(255,255,255,0.12)'
  positive: '#1E7A4B'
  caution: '#A9630C'
  negative: '#B3261E'
  positive-wash: '#E8F3EC'
  caution-wash: '#FBF0DF'
  negative-wash: '#FBEBE9'
  focus: '#2447E8'
typography:
  display:
    fontFamily: Archivo
    fontSize: 84px
    fontWeight: '600'
    lineHeight: 86px
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Archivo
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Archivo
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 58px
    letterSpacing: -0.03em
  headline:
    fontFamily: Archivo
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-sm:
    fontFamily: Archivo
    fontSize: 27px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  serif-accent:
    fontFamily: Instrument Serif
    fontSize: 88px
    fontWeight: '400'
    lineHeight: 84px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Instrument Sans
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 31px
    letterSpacing: -0.005em
  body:
    fontFamily: Instrument Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0
  body-sm:
    fontFamily: Instrument Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0
  label:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
  code:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0
rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 10px
  xl: 16px
  panel: 20px
  pill: 999px
spacing:
  '2': 2px
  '4': 4px
  '8': 8px
  '12': 12px
  '16': 16px
  '24': 24px
  '32': 32px
  '48': 48px
  '64': 64px
  '96': 96px
  '128': 128px
  '160': 160px
  '192': 192px
elevation:
  e1: '0 1px 2px rgba(18,19,22,0.05)'
  e2: '0 2px 4px -2px rgba(18,19,22,0.06), 0 14px 34px -20px rgba(18,19,22,0.22)'
  e3: '0 40px 80px -48px rgba(18,19,22,0.35), 0 2px 6px -2px rgba(18,19,22,0.08)'
motion:
  quick: 140ms
  standard: 260ms
  considered: 380ms
  slow: 520ms
  dramatic: 800ms
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
  ease-premium: 'cubic-bezier(0.4, 0, 0.2, 1)'
  stagger: 60ms
---

## Brand & Style

Meridian Studio is the agency's house system: the **quiet precision of Apple**, the **interface discipline
of Linear**, the **explanatory confidence of Stripe**, and the **functional calm of Notion** — combined into
one original language. Nothing here is copied: no logos, no layouts, no proprietary assets. What is borrowed
are principles, not surfaces.

The page should read like a well-made object: warm paper, black ink, one cobalt accent, hairlines instead of
boxes, and space used as a material. It is editorial where it explains, and instrument-like where it works.

Three rules carry the whole system:

1. **One accent, used like punctuation.** Cobalt marks the action, the active state, the single number that
   matters. Everything else is ink, paper or hairline. When a second color appears it is a semantic state
   (positive, caution, negative) — never decoration.
2. **Lines before boxes.** Structure is drawn with 1px hairlines, alignment and type. Cards earn their border
   only when they group something the user must compare or act on.
3. **Depth by layering, not by shadow.** Surfaces are separated by one step of tone, a hairline and at most
   `e2`. Real elevation (`e3`) is reserved for things that float above the document: dialogs, popovers, the
   one product panel that must feel physical.

## Colors

Paper is warm, not blue-white: `canvas #F7F6F3`, `surface #FFFFFF`, one step down `surface-subtle`, one step
further `surface-sunken` for wells such as inputs and code. Ink runs `#121316` → `#55575E` → `#8A8C93`; the
third step is for meta text only and never for body copy.

Cobalt `#2447E8` on canvas reaches ≈ 6.9:1, on white ≈ 7.2:1; white on cobalt is ≈ 6.1:1. It passes AA for
body text and AAA for large text. `accent-wash` is the only tint allowed behind type, and `accent-hairline`
the only tinted border.

Dark sections use `night #101114` with `on-ink #F4F2ED`; the accent stays the same cobalt but is allowed to
glow (a 40–60px blurred duplicate) because on ink it reads as light, not as paint.

Semantic colors are muted, never neon: positive `#1E7A4B`, caution `#A9630C`, negative `#B3261E`, each with a
wash for badges. They never carry meaning alone — an icon or a word always accompanies them.

The optional dark theme inverts paper and ink and dims the accent to `#7C93FF` so contrast survives. No page
may ship a dark theme that merely swaps two hex values.

## Typography

Three families, three jobs:

- **Archivo** (600) for headlines. Tight tracking (−0.02 to −0.035em), short line height (0.96–1.08), and
  never more than three lines. Headline width is set by the container, not by the font size.
- **Instrument Serif italic** for one accent phrase per page at most. It is a voice, not a style: used for a
  single word that carries the argument ("*belegt*", "*Zeit*"), never for a whole headline.
- **Instrument Sans** for running text at 16/26 or 19/31, with a measure of 58–68 characters.
- **Geist Mono** for labels (11px, 0.12em tracking, uppercase), code, IDs and numbers that should not wobble.

The scale is fluid with `clamp()`: display `clamp(2.75rem, 6vw, 5.25rem)`, headline `clamp(1.9rem, 3.4vw, 2.4rem)`.
No arbitrary sizes: every step above exists in the frontmatter. Numbers in tables are tabular (`font-variant-numeric: tabular-nums`) and right-aligned; units sit one step smaller in `ink-tertiary`.

## Layout & Spacing

A 12-column grid with a 1280px content frame (`--frame`), 24px gutters and 32px outer margin on mobile. Full-bleed
sections opt out; their content still aligns to the frame.

Sections are chapters: 128px between blocks on desktop, 160–192px before a change of subject, 72–96px on mobile.
Whitespace is not leftover — it is what tells the reader where one thought ends.

Layouts are chosen by job, never by habit:

| Job | Layout |
| --- | --- |
| Product introduction | split hero: copy left, working surface right |
| Readable explanation | centred column, 62ch, generous leading |
| Feature overview | bento with filled cells — no empty holes, no card where a line would do |
| Process / argument | sticky left title, steps scroll past on the right |
| Application | sidebar 248px, content, optional inspector 320px |
| Comparison | table with hairlines, sticky header row |

## Elevation & Depth

`e1` for inputs and buttons at rest, `e2` for the working panel, `e3` for the dialog only. Shadows are always
paired with a hairline; a shadow alone looks like a mistake.

Layering order: canvas → subtle well → white surface → floating panel. Each step changes tone by roughly 3–5%
lightness, which is enough to read on a calibrated screen and invisible on a bad one — hence the hairline.

Glass is used exactly once per page, on the sticky navigation, with `backdrop-filter: blur(14px)` over a 72%
paper tint. Nowhere else.

## Shapes

Radii: 2px for tags and inline code, 4px for inputs, 6px for buttons, 10px for small cards, 16–20px for panels
and the dialog. Pills only for status and filters — never for primary buttons, never for headings.

Hairlines are 1px `rgba(18,19,22,0.10)`; on dark, `rgba(255,255,255,0.12)`. Never use a border wider than 1px
to create emphasis — use weight, space or the accent.

## Components

**Navigation.** 64px tall, sticky, paper at 72% with blur, hairline appears only after 24px of scroll. Left:
wordmark (Archivo 600, 15px, −0.01em) with a 10px cobalt meridian mark. Centre: four links at 14px. Right:
quiet text link plus one solid button. Mobile: 44px menu button, full-height sheet, links at 28px Archivo.

**Buttons.** Primary: cobalt, white, 6px radius, 40px tall (48px for hero), padding 18/24, `translateY(-1px)` and
`accent-hover` on hover, 140ms. Secondary: transparent, hairline, ink. Tertiary: text with a 12px arrow that
moves 2px on hover. Press state is `scale(0.985)` for 90ms — the only transform that is allowed to feel physical.

**Inputs.** 44px tall, `surface-subtle` fill, hairline, 4px radius, label above in 12px/500. Focus: hairline
becomes `accent`, plus a 3px `accent-wash` ring. Error: `negative` hairline and a 13px message that names the fix.

**Panels.** White, hairline, 16px radius, `e2`, header row 44px with a mono label and one action. Panels never
nest more than one level; inside a panel, use wells (`surface-subtle`) and hairlines.

**Tables.** No zebra. 44px rows, hairline between, header in mono 11px uppercase, numbers tabular and right
aligned, row hover tints `accent-wash` at 40%. The active row keeps a 2px cobalt left edge.

**Badges.** 20px tall, 2px radius, mono 10px uppercase, wash background, text in the semantic color, preceded by
a 5px dot. Status is always a word, never a lone dot.

**Dialogs.** Native `<dialog>` with `::backdrop` at 40% ink + 4px blur, panel 520px wide, 20px radius, `e3`,
entrance 380ms `ease-premium` from 98% scale and 8px rise. Escape closes; focus is trapped by the platform;
the first field is focused on open.

**Motion.** Premium archetype: 380–520ms, `cubic-bezier(0.4, 0, 0.2, 1)`, no overshoot. Entrances move 16–24px
and fade; exits are 70% of the entrance. Scroll reveals stagger 60ms and never exceed 420ms total. Hover states
answer within 140ms. Motion must explain hierarchy or causality — anything else is removed. `prefers-reduced-motion`
keeps every element visible and every state change instant.
