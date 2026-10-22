---
name: Weissach Precision
brand: Porsche
source: https://www.porsche.com
colors:
  surface: '#1a1a1a'
  surface-dim: '#000000'
  surface-bright: '#2e2e2e'
  surface-container-lowest: '#000000'
  surface-container-low: '#1a1a1a'
  surface-container: '#222222'
  surface-container-high: '#2e2e2e'
  surface-container-highest: '#3a3a3a'
  on-surface: '#ffffff'
  on-surface-variant: '#b5b5b5'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#1a1a1a'
  outline: '#8e8e8e'
  outline-variant: '#3a3a3a'
  surface-tint: '#d5001c'
  primary: '#d5001c'
  on-primary: '#ffffff'
  primary-container: '#b1001a'
  on-primary-container: '#ffffff'
  inverse-primary: '#d5001c'
  secondary: '#a8a8a8'
  on-secondary: '#1a1a1a'
  secondary-container: '#8c8c8c'
  tertiary: '#c8c8c8'
  on-tertiary: '#1a1a1a'
  error: '#d5001c'
  on-error: '#ffffff'
  error-container: '#a10016'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F2F2F2'
  surface-light-subtle: '#E8E8E8'
  border-light: rgba(0, 0, 0, 0.12)
  text-light-primary: '#000000'
  text-light-secondary: '#5C5C5C'
  canvas-dark: '#000000'
  surface-dark: '#1A1A1A'
  surface-dark-subtle: '#222222'
  border-dark: rgba(255, 255, 255, 0.16)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#B5B5B5'
  accent-red: '#D5001C'
  accent-silver: '#A8A8A8'
typography:
  display:
    fontFamily: Porsche Next
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Porsche Next
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Porsche Next
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Porsche Next
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Porsche Next
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Porsche Next
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  title-md:
    fontFamily: Porsche Next
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Porsche Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 25px
    letterSpacing: 0.005em
  body-md:
    fontFamily: Porsche Next
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Porsche Next
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.015em
  label-md:
    fontFamily: Porsche Next
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Porsche Next
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.14em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 32px
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

Porsche is a spec sheet that learned to photograph well. A pure white showroom or a full-bleed cockpit film, one
red (`#D5001C`), silver as the only neutral accent, and a strict 12-column grid where every module aligns to the
same left edge. Type is a modern grotesque (`Porsche Next`), light and oversized in the hero — measured on the
home view: a 72px-class "Mission S." headline over a darkened interior shot, with a **32px pill** for the only
button ("Discover more") and a 4-item top bar at 16px.

- **Purity & Focus:** the car in three-quarter view, then the numbers. Nothing overlaps the silhouette.
- **Dynamic Dual-Mode:** white for configurator and ownership, black for model launches.
- **Restrained Tactility:** square-ish geometry, 1px rules, 200ms linear transitions.

## Colors

- **Primary (`#D5001C`):** Porsche red — primary actions, active model tab, brake-callout details.
- **Secondary (`#A8A8A8`):** silver for secondary labels and technical dividers.
- **Tertiary (`#C8C8C8`):** light silver on dark for spec values.
- **Neutrals:** `#000000`, `#1A1A1A`, `#FFFFFF`, `#F2F2F2`, `#5C5C5C` secondary text.
- **Rule:** no gradients, no colour fields. Photography provides tone.

## Typography

- **Grotesque with optical tightness:** `-0.02em` at 72px, `0` at 14px; no italics anywhere.
- **Labels in tracked caps:** 11–12px, 600 weight, `+0.1em` to `+0.14em`.
- **Tabular numbers** for power, torque, acceleration and price.
- **Pacing:** display 1.0×, body 1.55×; max 62 characters per line.

## Layout & Spacing

- **Grid:** 12 columns, 1600px max, 24px gutters, 48px page margins.
- **Hero:** full-bleed media at 100vh, headline bottom-left with 48px inset, one pill CTA, navigation reduced to
  `Menu` · wordmark · account (no category row on the landing view).
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Model rail:** sticky horizontal tabs (911 · Taycan · Panamera · Macan · Cayenne) with a 2px red active rule.
- **Mobile:** full-bleed hero, spec blocks stacked in 2 columns, sticky "Configure" bar.

## Elevation & Depth

- **Level 0:** white or black.
- **Level 1:** `#F2F2F2` (light) / `#1A1A1A` (dark) panels with 1px hairline, 2–4px radius.
- **Level 2:** configurator drawers with `0 16px 40px rgba(0,0,0,0.18)` and a 1px top rule.
- **No glass, no blur** — except the sticky model rail at 92% opacity white/black.

## Shapes

- **Buttons:** pills at `32px` radius (8 measured on the home view) — the one soft, consumer-friendly gesture in an
  otherwise technical layout. Inside the configurator they shrink to `8px` rectangles.
- **Cards:** 8–12px.
- **Inputs:** 8px with 1px hairline; focus 1px red.
- **Avoid:** heavy rounding above 32px; the pill is for actions only, never for containers.

## Components

### Buttons
- **Primary:** red fill, white 13px/600 `+0.1em`, 48px, `32px` pill radius.
- **Secondary:** 1px black/white border, transparent fill, same pill — as seen on "Discover more" over the film.
- **Tertiary:** text + thin arrow, 12px/600 caps, underline on hover only.

### Model Tabs
- 48px tall row, 14px/500 labels, 2px bottom rule in transparent; active gets a 2px `#D5001C` rule plus black text.

### Configurator
- Left rail: 320px, steps with 1px connectors and 12px tracked caps. Main stage: car render on neutral ground with
  8 tone swatches (not circles — 24×24 squares with 1px border). Sticky summary bottom-right with price and CTA.

### Spec Blocks
- 2×2 or 4×1 grid: value at 28px/600 tabular, unit at 12px silver, label at 11px tracked caps above a 1px rule.

### Inputs
- 44px, 2px radius, `#F2F2F2` fill, 1px `rgba(0,0,0,0.12)`; focus 1px `#D5001C` and label lifted to 11px caps.
