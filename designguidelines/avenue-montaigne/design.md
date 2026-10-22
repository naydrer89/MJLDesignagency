---
name: Avenue Montaigne
brand: Dior
source: https://www.dior.com
colors:
  surface: '#ffffff'
  surface-dim: '#f7f7f7'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbfbfb'
  surface-container: '#f4f4f4'
  surface-container-high: '#ececec'
  surface-container-highest: '#e2e2e2'
  on-surface: '#0a0a0a'
  on-surface-variant: '#6d6d6d'
  inverse-surface: '#0a0a0a'
  inverse-on-surface: '#ffffff'
  outline: '#9a9a9a'
  outline-variant: '#e2e2e2'
  surface-tint: '#0a0a0a'
  primary: '#0a0a0a'
  on-primary: '#ffffff'
  primary-container: '#1c1c1c'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffffff'
  secondary: '#b9a48a'
  on-secondary: '#241d14'
  secondary-container: '#9c866b'
  tertiary: '#d8cfc4'
  on-tertiary: '#241d14'
  error: '#b3261e'
  on-error: '#ffffff'
  error-container: '#8c1d18'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F4F4F4'
  surface-light-subtle: '#ECECEC'
  border-light: rgba(0, 0, 0, 0.10)
  text-light-primary: '#0A0A0A'
  text-light-secondary: '#6D6D6D'
  canvas-dark: '#000000'
  surface-dark: '#0A0A0A'
  surface-dark-subtle: '#141414'
  border-dark: rgba(255, 255, 255, 0.14)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#B9B9B9'
  accent-sand: '#D8CFC4'
  accent-ink: '#0A0A0A'
typography:
  display:
    fontFamily: Dior Serif
    fontSize: 62px
    fontWeight: '400'
    lineHeight: 68px
    letterSpacing: 0.01em
  display-mobile:
    fontFamily: Dior Serif
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.01em
  headline-lg:
    fontFamily: Dior Serif
    fontSize: 42px
    fontWeight: '400'
    lineHeight: 50px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Dior Serif
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Dior Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.06em
  headline-sm:
    fontFamily: Dior Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.08em
  title-md:
    fontFamily: Dior Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 21px
    letterSpacing: 0.08em
  body-lg:
    fontFamily: Dior Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.04em
  body-md:
    fontFamily: Dior Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.05em
  body-sm:
    fontFamily: Dior Sans
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Dior Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.18em
  label-sm:
    fontFamily: Dior Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.22em
rounded:
  sm: 0px
  DEFAULT: 0px
  md: 0px
  lg: 0px
  xl: 0px
  full: 9999px
spacing:
  gutter: 2rem
  gutter-mobile: 1.25rem
  margin: 4.5rem
  margin-mobile: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

Dior is couture whitespace. Pure white or pure black, no fills, no radii, a didone serif at 26–62px with slight
positive tracking, and sans labels at 10–15px set with `+0.18em`. Photography is editorial: full-bleed runway and
atelier stills with generous empty space around the subject. The interface behaves like a lookbook with commerce
attached quietly at the edges.

- **Purity & Focus:** the collection image is the entire composition; text sits in the margins.
- **Dynamic Dual-Mode:** white default, black for evening and campaign takeovers.
- **Restrained Tactility:** hairlines, square geometry, underline-only affordances.

## Colors

- **Primary (`#0A0A0A`):** ink — the primary button, headlines, rules.
- **Secondary (`#B9A48A`):** warm sand for seasonal accents and editorial dividers.
- **Tertiary (`#D8CFC4`):** pale sand surfaces behind lookbook captions.
- **Neutrals:** `#FFFFFF`, `#F4F4F4`, `#6D6D6D` secondary, `rgba(0,0,0,0.10)` hairlines.
- **Rule:** no colour fills except sand at 10% for accessibility support blocks.

## Typography

- **Serif is the brand:** usually one line, often a collection name; never more than 60 characters.
- **Sans is the label system:** uppercase, tracked `+0.18em` to `+0.22em`, 10px.
- **No bold, no italics** (except the wordmark).
- **Pacing:** 1.1× serif, 1.7× sans body; enormous section spacing.

## Layout & Spacing

- **Grid:** 12 columns, 1520px max, 32px gutters, 72px margins desktop (24px mobile).
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Lookbook:** 6/6 split with the caption in the outer margin; intermissions are full-bleed 21:9 films.
- **Mobile:** one column, 20px margins, horizontal lookbook with page dots, menu as a white full-screen overlay.

## Elevation & Depth

- **Level 0:** white or black, nothing else.
- **Level 1:** 1px hairline frames, no fills.
- **Level 2:** overlays are solid white/black at 95% opacity; no blur, no shadows.
- **Depth via scale:** large image, small caption, wide margin — no z-axis tricks.

## Shapes

- **Everything square (0px).** No pills, no rounding, no circles except account and search icons.
- **Buttons** are 1px bordered rectangles 44px high or underlined text.
- **Media** is hard-edged.

## Components

### Buttons
- **Primary:** ink fill, white 10px uppercase `+0.18em`, 44px, square, padding 0 32px.
- **Secondary:** 1px ink border, transparent.
- **Tertiary:** 10px tracked caps with a 1px underline offset 6px; on hover the underline thickens to 2px.

### Lookbook Grid
- 2-up desktop / 1-up mobile, image 3:4, caption: serif name 20px, then 10px tracked "Discover" link.
  Hover: caption underline appears; image zooms 1.02 over 600ms.

### Navigation
- 64px white bar, wordmark centred in serif, 10px tracked categories left, icons right; mega-menu is a white
  panel with 4 columns and a full-width campaign strip.

### Product Page
- Sticky image column (8) + right rail (4): name in serif 26px, price 12px sans, size selector as 44px square
  cells with 1px borders, "Add to bag" ink button, accordion details with 1px rules.

### Inputs
- 44px, square, 1px `rgba(0,0,0,0.20)`, 12px tracked placeholder; focus 1px ink with 2px offset; errors in
  `#B3261E` at 11px.
