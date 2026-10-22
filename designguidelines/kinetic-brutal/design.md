---
name: Kinetic Brutal
brand: Nike
source: https://www.nike.com
colors:
  surface: '#111111'
  surface-dim: '#000000'
  surface-bright: '#2a2a2a'
  surface-container-lowest: '#000000'
  surface-container-low: '#111111'
  surface-container: '#1a1a1a'
  surface-container-high: '#242424'
  surface-container-highest: '#2e2e2e'
  on-surface: '#ffffff'
  on-surface-variant: '#b7b7b7'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#111111'
  outline: '#9e9ea0'
  outline-variant: '#3d3d3d'
  surface-tint: '#ffffff'
  primary: '#111111'
  on-primary: '#ffffff'
  primary-container: '#000000'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffffff'
  secondary: '#d4fb00'
  on-secondary: '#1a1a00'
  secondary-container: '#b6d900'
  tertiary: '#ff5a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#d94a00'
  error: '#e02b27'
  on-error: '#ffffff'
  error-container: '#7c1210'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F5F5F5'
  surface-light-subtle: '#EBEBEB'
  border-light: rgba(0, 0, 0, 0.10)
  text-light-primary: '#111111'
  text-light-secondary: '#707072'
  canvas-dark: '#000000'
  surface-dark: '#111111'
  surface-dark-subtle: '#1A1A1A'
  border-dark: rgba(255, 255, 255, 0.14)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#9E9EA0'
  accent-volt: '#D4FB00'
  accent-orange: '#FF5A00'
typography:
  display:
    fontFamily: Nike Futura ND
    fontSize: 96px
    fontWeight: '500'
    lineHeight: 86px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Nike Futura ND
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Nike Futura ND
    fontSize: 76px
    fontWeight: '500'
    lineHeight: 68px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Nike Futura ND
    fontSize: 44px
    fontWeight: '500'
    lineHeight: 42px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Helvetica Now Text Medium
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Helvetica Now Text Medium
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  title-md:
    fontFamily: Helvetica Now Text Medium
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: Helvetica Now Text
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Helvetica Now Text
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
    letterSpacing: 0em
  body-sm:
    fontFamily: Helvetica Now Text
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Helvetica Now Text Medium
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  label-sm:
    fontFamily: Helvetica Now Text Medium
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 16px
  lg: 24px
  xl: 30px
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

Nike is athletic brutalism with a luxury finish: enormous condensed headlines (`76px` measured on the home view,
`Nike Futura ND` at weight 500, line-height 0.9), photo-first tiles, 30px pill buttons, and pure black/white
contrast punctuated by volt (`#D4FB00`) and orange (`#FF5A00`). Athletes are the content; UI gets out of the way.

- **Purity & Focus:** one product or athlete per tile, headline as a caption beneath or over the image.
- **Dynamic Dual-Mode:** both modes are high-contrast; dark mode is true black with white type, no greys in between.
- **Restrained Tactility:** flat surfaces, 30px radii, image zoom and slide transitions carry the energy.

## Colors

- **Primary (`#111111`):** the ink. Nike's primary button is black on light, white on dark.
- **Secondary (`#D4FB00`):** volt — the sport signal for "new", drops and campaign accents.
- **Tertiary (`#FF5A00`):** hot orange for sales and seasonal highlights.
- **Neutrals:** `#FFFFFF`, `#F5F5F5` tiles, `#EBEBEB` hairlines, `#111111` ink, `#707072` secondary.
- Colour appears in photography; interface colour is limited to black, white and one accent.

## Typography

- **Headlines are typography-as-image:** 76–96px, uppercase, 0.9 line-height, tight tracking.
- **Sub-headlines** switch to `Helvetica Now Text Medium` at 20–28px — the utilitarian counterweight.
- **Labels** are 12–14px medium, sometimes uppercase with `+0.04em` for campaign eyebrows.
- **Pacing:** everything tight at display sizes, comfortable (1.5×) in product descriptions.

## Layout & Spacing

- **Grid:** 12 columns, 1920px fluid, 24px gutters; editorial tiles span 6 or 12 columns.
- **Breakpoints:** Mobile `< 960px`, Tablet `960–1280px`, Desktop `> 1280px`.
- **Mobile:** full-bleed 4:5 imagery, horizontal product carousels with snap, sticky "Add to bag" bar.
- **Rhythm:** 4px base; 48–96px section spacing.

## Elevation & Depth

- **Level 0:** white or black canvas.
- **Level 1:** `#F5F5F5` product tiles and `rgba(255,255,255,0.10)` menu surfaces — no borders on imagery.
- **Level 2:** sticky header with `backdrop-filter: blur(12px)` and a hairline bottom border.
- **Shadows:** only on dropdowns and the flyout cart: `0 8px 24px rgba(0,0,0,0.16)`.

## Shapes

- **Buttons and chips:** 30px pill — Nike's signature.
- **Cards:** 12–24px, imagery often square-cornered inside a rounded frame.
- **Inputs:** 8–12px, 1px hairline.
- **Avoid:** thin borders around photos; let the image reach the edges.

## Components

### Buttons
- **Primary:** black `#111111` (light) / white (dark), 30px radius, 16px/500, 60px height on product pages.
- **Secondary:** white with 1px `#111111` border, 30px radius.
- **Icon buttons:** 48px circles for favourite, share and filter.

### Product Tiles
- Edge-to-edge image, hover swaps to a second shot, "Just In" label at 12px medium, price at 16px medium,
  colour swatch dots (max 4 + "+2").

### Chips & Badges
- Filter pills 32px with 1px hairline; campaign badges are flat rectangles, uppercase 11px, volt or black.

### Navigation
- Mega-menu with 4 columns of 14px links, athlete imagery on the right, all-caps section labels.

### Inputs
- 56px height, 8px radius, 1px `#111111` border on focus, 12px error text below in `#E02B27`.
