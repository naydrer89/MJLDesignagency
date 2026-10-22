---
name: Canvas Play
brand: Figma
source: https://www.figma.com
colors:
  surface: '#1e1e1e'
  surface-dim: '#000000'
  surface-bright: '#2c2c2c'
  surface-container-lowest: '#000000'
  surface-container-low: '#1e1e1e'
  surface-container: '#2c2c2c'
  surface-container-high: '#383838'
  surface-container-highest: '#444444'
  on-surface: '#ffffff'
  on-surface-variant: '#b3b3b3'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#000000'
  outline: '#8f8f8f'
  outline-variant: '#444444'
  surface-tint: '#0d99ff'
  primary: '#0d99ff'
  on-primary: '#ffffff'
  primary-container: '#007be5'
  on-primary-container: '#ffffff'
  inverse-primary: '#0d99ff'
  secondary: '#0acf83'
  on-secondary: '#00281a'
  secondary-container: '#06a86b'
  tertiary: '#a259ff'
  on-tertiary: '#ffffff'
  tertiary-container: '#7c3fd9'
  error: '#f24e1e'
  on-error: '#ffffff'
  error-container: '#c33a10'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F5F5F5'
  surface-light-subtle: '#EBEBEB'
  border-light: rgba(0, 0, 0, 0.10)
  text-light-primary: '#000000'
  text-light-secondary: '#5A5A5A'
  canvas-dark: '#000000'
  surface-dark: '#1E1E1E'
  surface-dark-subtle: '#2C2C2C'
  border-dark: rgba(255, 255, 255, 0.14)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#B3B3B3'
  accent-blue: '#0D99FF'
  accent-purple: '#A259FF'
  accent-green: '#0ACF83'
  accent-red: '#F24E1E'
  accent-yellow: '#FFC700'
typography:
  display:
    fontFamily: figmaSans
    fontSize: 88px
    fontWeight: '400'
    lineHeight: 88px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: figmaSans
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 50px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: figmaSans
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.022em
  headline-lg-mobile:
    fontFamily: figmaSans
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: figmaSans
    fontSize: 32px
    fontWeight: '450'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: figmaSans
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.01em
  title-md:
    fontFamily: figmaSans
    fontSize: 16px
    fontWeight: '550'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: figmaSans
    fontSize: 18px
    fontWeight: '330'
    lineHeight: 25px
    letterSpacing: 0em
  body-md:
    fontFamily: figmaSans
    fontSize: 15px
    fontWeight: '380'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: figmaSans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-md:
    fontFamily: figmaSans
    fontSize: 13px
    fontWeight: '550'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: figmaMono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.04em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 24px
  xl: 40px
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

Figma sells a canvas, so its marketing pages behave like one: hard black sections alternate with white sheets,
type is neutral (`figmaSans` at 400, weights between 330 and 550), and colour arrives in flat, friendly bursts —
blue `#0D99FF`, purple `#A259FF`, green `#0ACF83`, red `#F24E1E`, yellow `#FFC700`. Cards are playful objects
with 24px radii; buttons are pills; nothing is skeuomorphic.

- **Purity & Focus:** the work of users is the proof — screenshots, canvases, plugin art — framed generously.
- **Dynamic Dual-Mode:** both modes are native; dark is true black, light is pure white.
- **Restrained Tactility:** flat colour, 1px hairlines, and small "sticker" rotations/lifts on hover.

## Colors

- **Primary (`#0D99FF`):** Figma blue for actions and links.
- **Secondary (`#0ACF83`):** green for collaboration/online presence dots.
- **Tertiary (`#A259FF`):** purple for AI and creative accents.
- **Error / alert (`#F24E1E`):** red-orange.
- **Neutrals:** `#000000` and `#FFFFFF` with `#1E1E1E` / `#2C2C2C` dark surfaces and `rgba(0,0,0,0.10)` hairlines.
- **Multi-colour rule:** at most one accent per section; the full palette appears only in brand illustrations.

## Typography

- **Neutral sans, low drama:** display sits at 400 — Figma's confidence comes from scale, not weight.
- **Light body:** 330 at 18px is intentionally airy; bump to 380 below 16px for legibility.
- **Mono for metadata:** `figmaMono` at 12px with `+0.04em` for labels, shortcuts and file names.
- **Tracking:** `-0.03em` at 88px tapering to `0` at 16px.

## Layout & Spacing

- **Grid:** 12 columns, 1440px max, 24px gutters; alternating full-bleed colour bands.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Playful grid:** marketing tiles are allowed to break the grid by 8–16px or rotate 1–2° for the "sticker" feel.
- **Mobile:** single column, horizontal plugin carousels, sticky "Get started" pill.

## Elevation & Depth

- **Level 0:** black or white band.
- **Level 1:** panels `#1E1E1E` (dark) / `#F5F5F5` (light), 1px hairline, 12–24px radius.
- **Level 2:** floating cards `0 8px 24px rgba(0,0,0,0.16)`; hover lifts 2px.
- **Colour as depth:** a flat colour block behind a screenshot replaces a shadow.

## Shapes

- **Buttons:** full pill.
- **Cards:** 24px (marketing), 12px (app UI).
- **Inputs:** 8px.
- **Avatars / cursors:** circles and the multi-colour cursor shapes — the one place triangles are allowed.

## Components

### Buttons
- **Primary:** `#0D99FF` pill, white 16px/550, 48px height; hover darkens to `#007BE5`.
- **Secondary:** white/black pill with 1px hairline; text-only links use the blue.

### Cards
- 24px radius, 1px hairline, 32px padding, 16:10 media block; hover translates `-2px` and adds level-2 shadow.

### Chips & Avatars
- Pill chips 28px with 13px/550 label; presence shows a 8px green dot with a 2px canvas ring.

### Inputs
- 44px height, 8px radius, 1px hairline, blue 2px focus ring; search uses a `⌘K` mono hint.

### Canvas UI
- Toolbar 48px, `#2C2C2C` in dark, 16px icons, selected tool in blue; panels use 1px hairlines and 8px radii.
