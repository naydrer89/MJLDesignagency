---
name: Monochrome Edge
brand: Vercel
source: https://vercel.com
colors:
  surface: '#0a0a0a'
  surface-dim: '#000000'
  surface-bright: '#1f1f1f'
  surface-container-lowest: '#000000'
  surface-container-low: '#0a0a0a'
  surface-container: '#111111'
  surface-container-high: '#171717'
  surface-container-highest: '#1f1f1f'
  on-surface: '#ededed'
  on-surface-variant: '#a1a1a1'
  inverse-surface: '#fafafa'
  inverse-on-surface: '#171717'
  outline: '#8f8f8f'
  outline-variant: '#333333'
  surface-tint: '#0072f5'
  primary: '#0072f5'
  on-primary: '#ffffff'
  primary-container: '#0060df'
  on-primary-container: '#ffffff'
  inverse-primary: '#0072f5'
  secondary: '#52a8ff'
  on-secondary: '#001a33'
  secondary-container: '#0072f5'
  tertiary: '#f5a623'
  on-tertiary: '#2b1a00'
  tertiary-container: '#c47f00'
  error: '#ee0000'
  on-error: '#ffffff'
  error-container: '#7d0000'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#FAFAFA'
  surface-light-subtle: '#F2F2F2'
  border-light: rgba(0, 0, 0, 0.08)
  text-light-primary: '#171717'
  text-light-secondary: '#4D4D4D'
  canvas-dark: '#000000'
  surface-dark: '#0A0A0A'
  surface-dark-subtle: '#111111'
  border-dark: rgba(255, 255, 255, 0.14)
  text-dark-primary: '#EDEDED'
  text-dark-secondary: '#A1A1A1'
  accent-blue: '#0072F5'
  accent-cyan: '#52A8FF'
typography:
  display:
    fontFamily: GeistSans
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.05em
  display-mobile:
    fontFamily: GeistSans
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: GeistSans
    fontSize: 56px
    fontWeight: '450'
    lineHeight: 56px
    letterSpacing: -0.045em
  headline-lg-mobile:
    fontFamily: GeistSans
    fontSize: 34px
    fontWeight: '450'
    lineHeight: 38px
    letterSpacing: -0.04em
  headline-md:
    fontFamily: GeistSans
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: GeistSans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.02em
  title-md:
    fontFamily: GeistSans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: GeistSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: GeistSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: GeistSans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: GeistMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: GeistMono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 4px
  DEFAULT: 6px
  md: 10px
  lg: 14px
  xl: 20px
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

Vercel reduces interface design to black, white and one accent. The canvas is `#FAFAFA` or pure `#000000`,
type is `Geist Sans` set unusually tight (`-0.05em` at 72px — measured `-3.84px` on the live site at 64px),
labels are `Geist Mono` in uppercase, and blue (`#0072F5`) appears only where the product actually does
something. Structure comes from a strict grid of hairline boxes, not from cards and shadows.

- **Purity & Focus:** Black text on white, white text on black. Nothing decorative, everything on a grid.
- **Dynamic Dual-Mode:** both modes are first-class; the dark canvas is true black so OLED edges disappear.
- **Restrained Tactility:** 1px geometry. Hover changes border and background by a few percent, nothing else.

## Colors

- **Primary (`#0072F5`):** links, primary buttons, focus rings, deployment status accents.
- **Secondary (`#52A8FF`):** hover and dark-mode link tint.
- **Tertiary (`#F5A623`):** only for build warnings.
- **Neutrals:** `#171717` ink → `#4D4D4D` → `#8F8F8F`; dark mode `#EDEDED` → `#A1A1A1`.
- **Borders:** `rgba(0,0,0,0.08)` light, `rgba(255,255,255,0.14)` dark. Borders are the primary depth device.

## Typography

- **Extreme tight tracking:** `-0.05em` at display sizes, easing to `0` at 16px. This is Vercel's whole voice.
- **Mono for metadata:** deployment IDs, domains, commands, labels at 11–13px, uppercase with `+0.06em`.
- **Weight range is narrow:** 400 for display, 450–500 for UI emphasis, never 700.
- **Pacing:** display 1.0× line-height; body 1.5×.

## Layout & Spacing

- **Grid:** 12 columns, 1200px max, 24px gutters, hairline dividers between sections instead of spacing alone.
- **Breakpoints:** Mobile `< 640px`, Tablet `640–1024px`, Desktop `> 1024px`.
- **Rhythm:** 4px base, 16/24/32px component padding, 96px section rhythm on marketing pages.
- **Mobile:** single column, monospace eyebrows, code samples scroll horizontally.

## Elevation & Depth

- **Level 0:** `#FAFAFA` / `#000000`.
- **Level 1:** panels with 1px border, no shadow, no radius above 14px.
- **Level 2:** dropdowns use `0 8px 30px rgba(0,0,0,0.12)` in light and a `#111111` surface in dark.
- **No glass:** blur is avoided; depth is purely geometric.

## Shapes

- **Buttons:** 6px radius; pill only for avatars and status dots.
- **Cards:** 10–14px.
- **Inputs:** 6px, 1px border, blue 2px focus ring.
- **Avoid:** heavy rounding and neumorphism.

## Components

### Buttons
- **Primary:** `#171717` (light) / `#EDEDED` (dark) fill with inverted label — Vercel's primary is monochrome,
  blue is reserved for links and states. 6px radius, 32–40px height, 14px/500.
- **Secondary:** transparent, 1px border, same radius.
- **Ghost:** text-only with a mono chevron.

### Cards & Grids
- 1px bordered rectangles, 12px padding, no shadow; hover raises border to `rgba(0,0,0,0.16)`.

### Chips & Status
- 20px pill with a 6px dot: green deployed, amber building, red failed. Mono 11px uppercase label.

### Inputs
- 32–40px height, 6px radius, mono placeholder for domains and env keys, blue ring on focus.

### Code Blocks
- `#0A0A0A` surface, `GeistMono` 13px, 12px padding, horizontal scroll, copy button top-right.
