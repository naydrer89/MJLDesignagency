---
name: Cupertino Clarity
brand: Apple
source: https://www.apple.com
colors:
  surface: '#1d1d1f'
  surface-dim: '#161617'
  surface-bright: '#3a3a3c'
  surface-container-lowest: '#0b0b0c'
  surface-container-low: '#1d1d1f'
  surface-container: '#242426'
  surface-container-high: '#2c2c2e'
  surface-container-highest: '#3a3a3c'
  on-surface: '#f5f5f7'
  on-surface-variant: '#a1a1a6'
  inverse-surface: '#f5f5f7'
  inverse-on-surface: '#1d1d1f'
  outline: '#86868b'
  outline-variant: '#424245'
  surface-tint: '#2997ff'
  primary: '#0071e3'
  on-primary: '#ffffff'
  primary-container: '#0071e3'
  on-primary-container: '#ffffff'
  inverse-primary: '#2997ff'
  secondary: '#30d158'
  on-secondary: '#003912'
  secondary-container: '#248a3d'
  tertiary: '#bf4800'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff6b00'
  error: '#ff453a'
  on-error: '#ffffff'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F5F5F7'
  surface-light-subtle: '#FAFAFC'
  border-light: rgba(0, 0, 0, 0.08)
  text-light-primary: '#1D1D1F'
  text-light-secondary: '#6E6E73'
  canvas-dark: '#000000'
  surface-dark: '#1D1D1F'
  surface-dark-subtle: '#2C2C2E'
  border-dark: rgba(255, 255, 255, 0.16)
  text-dark-primary: '#F5F5F7'
  text-dark-secondary: '#86868B'
  accent-blue: '#2997FF'
  accent-mint: '#30D158'
  accent-orange: '#BF4800'
typography:
  display:
    fontFamily: SF Pro Display
    fontSize: 80px
    fontWeight: '600'
    lineHeight: 84px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: SF Pro Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: SF Pro Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 60px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: SF Pro Display
    fontSize: 34px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: SF Pro Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: SF Pro Text
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  title-md:
    fontFamily: SF Pro Text
    fontSize: 21px
    fontWeight: '600'
    lineHeight: 25px
    letterSpacing: -0.011em
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 27px
    letterSpacing: -0.014em
  body-md:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 25px
    letterSpacing: -0.022em
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.016em
  label-md:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0em
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 18px
  lg: 28px
  xl: 40px
  pill: 980px
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

Apple sells products by removing everything that stands between the product and the eye. The interface is a
**neutral gallery wall**: near-white or true-black surfaces, one product hero per section, oversized centred
type, and no chrome that competes with the object. Measured on the live site: `SF Pro Display` for the big
statements, `SF Pro Text` for everything interactive, body colour `#1d1d1f`, canvas `#ffffff`, and pill
buttons at `980px` radius.

- **Purity & Focus:** One message per viewport. The section is the composition; the product photo is the content.
- **Dynamic Dual-Mode:** Light mode is paper (`#FFFFFF` / `#F5F5F7`), dark mode is a true-black void (`#000000`)
  with `#1D1D1F` panels — never grey-washed black.
- **Restrained Tactility:** Hairline separators, translucent blurred navigation bars, soft diffuse shadows only
  when a product must float.

## Colors

- **Primary (`#0071E3`):** the action blue — filled pill buttons, active states. Links in dark mode use the
  brighter `#2997FF` so they survive a black canvas.
- **Secondary (`#30D158`):** system green for "in stock", success and health.
- **Tertiary (`#BF4800`):** the commerce orange used for "New" and financing call-outs — never for buttons.
- **Neutrals:** text is `#1D1D1F` on light and `#F5F5F7` on dark; secondary text steps down to `#6E6E73` /
  `#86868B`. Section fills alternate between white and `#F5F5F7` to separate content without borders.
- Everything else is photography. Colour is a signal, not a surface treatment.

## Typography

SF Pro, two optical sizes, negative tracking as the grade grows.

- **Tight Kerning on Scale:** `-0.03em` at 80px down to `0` at 11px. Tracking is the single strongest cue that
  type was set, not defaulted.
- **Pacing:** display lines sit near 1.05–1.1× line-height; body text near 1.4–1.5×. Never both loose.
- **Hierarchy through Tone:** 17px `#1d1d1f` body against 17px `#6e6e73` secondary is enough separation; avoid
  a third size step where weight and colour already do the work.
- **Optical balance:** headlines are centred on product pages, left-aligned in editorial and support contexts.

## Layout & Spacing

- **Grid:** 12 columns, max content width 1680px, global gutters 24px (16px below 768px).
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1068px`, Desktop `> 1068px`.
- **Mobile paradigm:** single column, full-bleed product media, stacked type at 34–48px, and a sticky bottom
  action bar for commerce flows.
- **Rhythm:** section padding `4rem` vertical on desktop, `2.5rem` on mobile; internal component padding stays
  on the 4px baseline.

## Elevation & Depth

- **Level 0:** canvas (`#FFFFFF` / `#000000`).
- **Level 1:** section panels `#F5F5F7` (light) / `#1D1D1F` (dark) with no border and no shadow.
- **Level 2:** sticky navigation and sheets — `backdrop-filter: blur(20px) saturate(180%)` over
  `rgba(255,255,255,0.8)` / `rgba(29,29,31,0.8)`, closed by a 1px `rgba(0,0,0,0.08)` hairline.
- **Detached elevation:** `0 12px 32px -8px rgba(0,0,0,0.18), 0 4px 12px -2px rgba(0,0,0,0.10)` — soft, never black.

## Shapes

- **Buttons and chips:** full pill (`980px`) — the shape that reads as "tap me" on every Apple surface.
- **Cards and tiles:** `18–28px` continuous curvature; product imagery is cropped, never masked into blobs.
- **Inputs:** `12px`, or pill for search fields.
- **Avoid:** square corners on interactive elements, and radii above 28px on containers (except pills).

## Components

### Buttons
- **Primary:** pill, `#0071E3` fill, white label, 17px/600, padding `12px 24px`, min-height 44px.
- **Secondary:** pill, transparent with 1px `#0071E3` outline, blue label; fills on hover.
- **Tertiary:** inline link with chevron, `#0066CC` / `#2997FF`, no underline until hover.
- **Motion:** `scale(1.02)` hover, `scale(0.97)` active, 150ms ease-out; no colour flashes.

### Navigation
- 44px tall, centred links at 12px, blurred sticky bar, logo first, search and bag last. Nothing else.

### Cards & Product Tiles
- Full-bleed media with a 20px inset headline block, "Learn more" + "Buy" pair beneath. No card borders.

### Chips & Status Badges
- 24px pill, 11px/600 label; stock status uses the breathing green dot on a 10% tinted fill.

### Inputs & Search
- 44px height, `12px` radius (pill for global search), `#F5F5F7` fill, 1px transparent border that becomes
  `#0071E3` on focus with `0 0 0 3px rgba(0,113,227,0.25)`.
