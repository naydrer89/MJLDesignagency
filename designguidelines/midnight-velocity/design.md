---
name: Midnight Velocity
brand: Linear
source: https://linear.app
colors:
  surface: '#0f1011'
  surface-dim: '#08090a'
  surface-bright: '#1c1d20'
  surface-container-lowest: '#050506'
  surface-container-low: '#0f1011'
  surface-container: '#141518'
  surface-container-high: '#1c1d20'
  surface-container-highest: '#232529'
  on-surface: '#f7f8f8'
  on-surface-variant: '#8a8f98'
  inverse-surface: '#f7f8f8'
  inverse-on-surface: '#08090a'
  outline: '#62666d'
  outline-variant: '#2a2d31'
  surface-tint: '#8b93f8'
  primary: '#5e6ad2'
  on-primary: '#ffffff'
  primary-container: '#4f5bc4'
  on-primary-container: '#ffffff'
  inverse-primary: '#8b93f8'
  secondary: '#68cc58'
  on-secondary: '#04250a'
  secondary-container: '#3f9c34'
  tertiary: '#e5a13a'
  on-tertiary: '#2b1a00'
  tertiary-container: '#b87a1c'
  error: '#eb5757'
  on-error: '#ffffff'
  error-container: '#8a1f1f'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F7F8F8'
  surface-light-subtle: '#F1F2F4'
  border-light: rgba(0, 0, 0, 0.08)
  text-light-primary: '#18191A'
  text-light-secondary: '#62666D'
  canvas-dark: '#08090A'
  surface-dark: '#0F1011'
  surface-dark-subtle: '#141518'
  border-dark: rgba(255, 255, 255, 0.08)
  text-dark-primary: '#F7F8F8'
  text-dark-secondary: '#8A8F98'
  accent-indigo: '#5E6AD2'
  accent-green: '#68CC58'
typography:
  display:
    fontFamily: Inter Variable
    fontSize: 64px
    fontWeight: '510'
    lineHeight: 64px
    letterSpacing: -0.022em
  display-mobile:
    fontFamily: Inter Variable
    fontSize: 40px
    fontWeight: '510'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter Variable
    fontSize: 48px
    fontWeight: '510'
    lineHeight: 48px
    letterSpacing: -0.022em
  headline-lg-mobile:
    fontFamily: Inter Variable
    fontSize: 32px
    fontWeight: '510'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter Variable
    fontSize: 32px
    fontWeight: '510'
    lineHeight: 36px
    letterSpacing: -0.018em
  headline-sm:
    fontFamily: Inter Variable
    fontSize: 20px
    fontWeight: '590'
    lineHeight: 27px
    letterSpacing: -0.012em
  title-md:
    fontFamily: Inter Variable
    fontSize: 16px
    fontWeight: '590'
    lineHeight: 22px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter Variable
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 27px
    letterSpacing: -0.008em
  body-md:
    fontFamily: Inter Variable
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.011em
  body-sm:
    fontFamily: Inter Variable
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.005em
  label-md:
    fontFamily: Inter Variable
    fontSize: 14px
    fontWeight: '510'
    lineHeight: 21px
    letterSpacing: 0em
  label-sm:
    fontFamily: Berkeley Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
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

Linear is the reference implementation of "dark mode as default". The canvas is near-black (`#08090A`), panels
sit one step up (`#0F1011`), everything is separated by `rgba(255,255,255,0.08)` hairlines, and one indigo
(`#5E6AD2`) marks the interactive layer. Measured on the live site: `Inter Variable` at weights 400/510/590,
64px headlines with `-1.4px` tracking, `Berkeley Mono` for metadata, and 72 pill-shaped elements on the home view.

- **Purity & Focus:** Product UI is the imagery. No stock photography, no gradients as decoration.
- **Dynamic Dual-Mode:** Dark is primary; light mode is a clean paper mirror with the same tokens inverted.
- **Restrained Tactility:** Hover raises border brightness instead of adding shadows; focus rings are 2px.

## Colors

- **Primary (`#5E6AD2`):** indigo — primary actions, active nav, keyboard hints, focus rings.
- **Secondary (`#68CC58`):** status green for "Done", health and success.
- **Tertiary (`#E5A13A`):** amber for "in progress", warnings and priority.
- **Neutrals:** `#F7F8F8` primary text, `#8A8F98` secondary, `#62666D` tertiary — three tones only.
- **Surfaces:** `#08090A` canvas → `#0F1011` panel → `#141518` raised → `#1C1D20` overlay.
- Issue priority and status colours are the only saturated fills; everything else stays grayscale.

## Typography

- **Variable optical grades:** 510 for headings, 590 for emphasised UI, 400 for text. Linear's "between
  regular and medium" weights are the core of its softness.
- **Tight display tracking:** `-0.022em` at 64px, holds up to `-0.008em` at 17px.
- **Mono metadata:** issue IDs, shortcuts and timestamps use `Berkeley Mono` at 11–12px with `+0.04em`.
- **Pacing:** display at 1.0× line-height (deliberately dense), body at 1.55×.

## Layout & Spacing

- **Grid:** 12 columns, 1200px max width, 24px gutters; app shell uses a fixed 240px sidebar + fluid canvas.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Density:** the app runs on a 4px grid with 8px component padding and 28–32px row heights.
- **Mobile:** single column, bottom tab bar, lists become cards with 12px radius.

## Elevation & Depth

- **Level 0:** `#08090A`.
- **Level 1:** panels `#0F1011` + 1px `rgba(255,255,255,0.08)`.
- **Level 2:** popovers `#141518` + `0 8px 24px rgba(0,0,0,0.5)`, no border glow.
- **Level 3:** command palette and modals with a `rgba(0,0,0,0.6)` scrim and 20% backdrop blur.
- **Highlight:** a 1px inner top highlight `inset 0 1px 0 rgba(255,255,255,0.06)` marks raised surfaces.

## Shapes

- **Buttons and chips:** full pill for marketing, 8px for in-app controls.
- **Cards:** 12px (app) / 16px (marketing).
- **Inputs:** 8px, 1px hairline, indigo focus ring.
- **Avatars:** circles with a 2px canvas-coloured ring.

## Components

### Buttons
- **Primary:** indigo fill, white 14px/510 label, 8px radius, 32px height in app / 40px on marketing.
- **Secondary:** transparent with `rgba(255,255,255,0.08)` fill and a hairline border.
- **Ghost:** text only, `#8A8F98` → `#F7F8F8` on hover.

### Lists & Issues
- 32px rows, status icon + ID in mono + title; hover paints the row `rgba(255,255,255,0.03)`.

### Chips & Badges
- 20px pill, 11px mono/500, tinted 12% of the status colour with matching text.

### Command Palette
- Centred 640px overlay, 12px radius, blurred scrim, `⌘K` hint right-aligned in mono, 44px rows.

### Inputs
- 32px height, `#0F1011` fill, hairline border, indigo 2px focus ring with 3px offset.
