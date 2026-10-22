---
name: Noir Discipline
brand: Chanel
source: https://www.chanel.com
colors:
  surface: '#0d0d0d'
  surface-dim: '#000000'
  surface-bright: '#1f1f1f'
  surface-container-lowest: '#000000'
  surface-container-low: '#0d0d0d'
  surface-container: '#141414'
  surface-container-high: '#1c1c1c'
  surface-container-highest: '#262626'
  on-surface: '#ffffff'
  on-surface-variant: '#c9c9c9'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#000000'
  outline: '#8a8a8a'
  outline-variant: '#3a3a3a'
  surface-tint: '#ffffff'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141414'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffffff'
  secondary: '#b0a89a'
  on-secondary: '#1a1713'
  secondary-container: '#8d8577'
  tertiary: '#d4c5a9'
  on-tertiary: '#241f16'
  error: '#b3261e'
  on-error: '#ffffff'
  error-container: '#8c1d18'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F6F6F6'
  surface-light-subtle: '#EDEDED'
  border-light: rgba(0, 0, 0, 0.12)
  text-light-primary: '#000000'
  text-light-secondary: '#6B6B6B'
  canvas-dark: '#000000'
  surface-dark: '#0D0D0D'
  surface-dark-subtle: '#141414'
  border-dark: rgba(255, 255, 255, 0.16)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#C9C9C9'
  accent-beige: '#D4C5A9'
  accent-black: '#000000'
typography:
  display:
    fontFamily: Chanel Sans
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 60px
    letterSpacing: 0.02em
  display-mobile:
    fontFamily: Chanel Sans
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Chanel Sans
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: 0.04em
  headline-lg-mobile:
    fontFamily: Chanel Sans
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Chanel Sans
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.05em
  headline-sm:
    fontFamily: Chanel Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.04em
  title-md:
    fontFamily: Chanel Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.06em
  body-lg:
    fontFamily: Chanel Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.02em
  body-md:
    fontFamily: Chanel Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.03em
  body-sm:
    fontFamily: Chanel Sans
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Chanel Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.16em
  label-sm:
    fontFamily: Chanel Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.2em
rounded:
  sm: 0px
  DEFAULT: 0px
  md: 0px
  lg: 0px
  xl: 0px
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

Chanel's web presence is a black-and-white editorial spread: pure `#000000` or pure `#FFFFFF`, no grey fills, no
rounded corners, wide-tracked uppercase labels (`+0.16em` to `+0.2em`), and film-still imagery that is allowed to
be the only colour on the page. Ornament is limited to a thin hairline and the beige of the house's pale gold.

- **Purity & Focus:** the product film and the collection name carry the page; the UI is a caption.
- **Dynamic Dual-Mode:** both modes exist and are equally austere — one black, one white, nothing between.
- **Restrained Tactility:** square edges, 1px rules, underlines instead of buttons in secondary positions.

## Colors

- **Primary (`#000000`):** black — text, borders, and the filled CTA in light mode.
- **Secondary (`#B0A89A`):** muted beige-grey for hairlines on photography.
- **Tertiary (`#D4C5A9`):** pale gold, used at 1px or in 10px labels only.
- **Neutrals:** `#FFFFFF`, `#F6F6F6`, `#C9C9C9` (dark-mode secondary), `rgba(0,0,0,0.12)` hairlines.
- **Rule:** no brand colour is used as a large fill. Colour lives in the imagery.

## Typography

- **Tracked, not bold:** Chanel's voice is spaced capitals in a regular weight; 400 everywhere except 500 in labels.
- **Wide letterspacing at every size:** `+0.02em` in display, up to `+0.2em` at 10px.
- **No tight tracking, no italics** except in editorial pull quotes.
- **Pacing:** 1.08× display, 1.7× body; text blocks never exceed 56 characters per line.

## Layout & Spacing

- **Grid:** 12 columns, 1440px max, 40px gutters, 64px outer margins (24px on mobile).
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Composition:** full-bleed film at the top, then an alternating 6/6 editorial grid; captions in the outer margin.
- **Mobile:** one column, full-width media, 24px margins, menu as a full-screen black overlay.

## Elevation & Depth

- **Level 0:** flat black or white.
- **Level 1:** 1px hairline frames; no fills.
- **Level 2:** overlays and menus are solid black with 90% opacity; no blur, no shadow.
- **No depth illusion:** the page is a printed page; layering happens through scale and whitespace.

## Shapes

- **Everything is square.** 0px radius on buttons, cards, inputs, media.
- **Buttons** are rectangles with 1px border and 48px height, or plain underlined links.
- **Chips** are bordered rectangles, not pills.

## Components

### Buttons
- **Primary:** 1px black (or white) border, transparent fill, 11px uppercase `+0.16em` label, 48px height,
  padding 0 40px; hover inverts to solid fill with 300ms ease.
- **Secondary:** underlined text link with a 4px offset rule.
- **Icon buttons:** 24px line icons, square hit area 44px.

### Editorial Blocks
- Full-bleed image or film, caption block below in the margin: 11px tracked caps + 13px body, max 2 lines.

### Navigation
- 72px bar, 11px uppercase `+0.16em` items, centred logo, search and account at the right; mega-menu is a
  white (or black) full-width panel with 5 columns and 13px links.

### Product Grid
- 4 columns desktop / 2 mobile, zero radius, hover shows a second image plus a 1px underline on the name;
  price at 13px, never bold.

### Inputs
- Square, 1px `rgba(0,0,0,0.24)`, 48px, 11px uppercase label above, error in a 1px red rule + 11px note.
