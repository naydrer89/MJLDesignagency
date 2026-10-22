---
name: Rosso Corsa
brand: Ferrari
source: https://www.ferrari.com
colors:
  surface: '#121212'
  surface-dim: '#000000'
  surface-bright: '#242424'
  surface-container-lowest: '#000000'
  surface-container-low: '#121212'
  surface-container: '#1a1a1a'
  surface-container-high: '#242424'
  surface-container-highest: '#2f2f2f'
  on-surface: '#ffffff'
  on-surface-variant: '#b4b4b4'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#121212'
  outline: '#8c8c8c'
  outline-variant: '#333333'
  surface-tint: '#ff2800'
  primary: '#ff2800'
  on-primary: '#ffffff'
  primary-container: '#d81f00'
  on-primary-container: '#ffffff'
  inverse-primary: '#ff2800'
  secondary: '#fff200'
  on-secondary: '#1a1a00'
  secondary-container: '#d4c900'
  tertiary: '#ffffff'
  on-tertiary: '#121212'
  error: '#ff2800'
  on-error: '#ffffff'
  error-container: '#a81c00'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F5F5F5'
  surface-light-subtle: '#EBEBEB'
  border-light: rgba(0, 0, 0, 0.10)
  text-light-primary: '#121212'
  text-light-secondary: '#5E5E5E'
  canvas-dark: '#000000'
  surface-dark: '#121212'
  surface-dark-subtle: '#1A1A1A'
  border-dark: rgba(255, 255, 255, 0.14)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#B4B4B4'
  accent-red: '#FF2800'
  accent-yellow: '#FFF200'
  accent-giallo: '#F5D000'
typography:
  display:
    fontFamily: Ferrari Sans
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Ferrari Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Ferrari Sans
    fontSize: 52px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Ferrari Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Ferrari Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Ferrari Sans
    fontSize: 19px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  title-md:
    fontFamily: Ferrari Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Ferrari Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Ferrari Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 21px
    letterSpacing: 0.015em
  body-sm:
    fontFamily: Ferrari Sans
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Ferrari Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.14em
  label-sm:
    fontFamily: Ferrari Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.18em
rounded:
  sm: 0px
  DEFAULT: 2px
  md: 4px
  lg: 6px
  xl: 8px
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

Ferrari is engineering drama: black canvas or white showroom, giant italicised grotesque headlines (84px,
700 weight, 0.95× line-height), Rosso Corsa (`#FF2800`) as the single saturated signal, and Giallo (`#FFF200`)
for racing heritage moments. Layouts are technical — telemetry grids, spec tables, 1px rules — with cars shot
three-quarter and in motion.

- **Purity & Focus:** the car and its numbers. Copy is short, in caps, and never poetic.
- **Dynamic Dual-Mode:** black for motorsport, white for showroom and configurator.
- **Restrained Tactility:** 2–8px radii, sharp 1px rules, motion fast (150–250ms) and linear.

## Colors

- **Primary (`#FF2800`):** Rosso Corsa for CTAs, active navigation and critical data.
- **Secondary (`#FFF200`):** Giallo — heritage, "Ferrari Approved" badges, highlight strips.
- **Tertiary (`#FFFFFF`):** white type on black and the "Configure" inverted button.
- **Neutrals:** `#000000`, `#121212`, `#1A1A1A`, `#B4B4B4`, `rgba(255,255,255,0.14)` hairlines.
- **Data colours:** red for temperature/speed, yellow for warnings, white for baseline.

## Typography

- **Heavy, tight, often italic:** the display face is set 700 with `-0.02em`; the italic cut is used for
  "speed" moments (campaign headlines, lap times).
- **Uppercase labels:** 10–11px, 700, `+0.14em` to `+0.18em`.
- **Numbers are typography:** spec sheets use tabular figures at 15–28px.
- **Pacing:** display 0.95×, body 1.6×.

## Layout & Spacing

- **Grid:** 12 columns, 1600px max, 24px gutters; spec modules snap to 3- and 4-column blocks.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Technical rhythm:** 4px base with 8px increments; hairline tables replace cards wherever data is involved.
- **Mobile:** full-bleed car imagery, horizontal model rail, sticky "Configure" bar.

## Elevation & Depth

- **Level 0:** black or white.
- **Level 1:** `#121212` panels with 1px `rgba(255,255,255,0.14)`; no shadow.
- **Level 2:** dropdowns `#1A1A1A` + `0 12px 32px rgba(0,0,0,0.6)`.
- **Depth via photography:** motion blur and lighting do the work; the UI stays flat.

## Shapes

- **Buttons:** 2px radius, rectangular — motorsport, not consumer app.
- **Cards:** 4–6px.
- **Inputs:** 2px with 1px hairline.
- **Avoid:** pills except the model-switcher tab.

## Components

### Buttons
- **Primary:** Rosso Corsa fill, white 12px/700 uppercase `+0.14em`, 48px height, 2px radius.
- **Secondary:** transparent with 1px white border; hover fills white, label turns black.
- **Tertiary:** text + chevron, 11px/700 uppercase.

### Model Cards
- 16:9 imagery, model name at 28px/700, spec row (PS, 0–100, Vmax) in 13px tabular, hover reveals a red
  2px bar along the bottom and a "Configure" affordance.

### Spec Tables
- Hairline rows 40px, label left in 11px tracked caps, value right in 15px/600 tabular; alternating rows none —
  rules only.

### Chips & Badges
- Rectangular badges 2px radius, 10px/700 `+0.18em`: "HYBRID" in white outline, "NEW" in Giallo fill.

### Inputs
- 44px, 2px radius, `#1A1A1A` fill on dark, 1px hairline; focus 1px `#FF2800` + `0 0 0 3px rgba(255,40,0,0.18)`.
