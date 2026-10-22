---
name: Coral Belonging
brand: Airbnb
source: https://www.airbnb.com
colors:
  surface: '#ffffff'
  surface-dim: '#f7f7f7'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fafafa'
  surface-container: '#f2f2f2'
  surface-container-high: '#ebebeb'
  surface-container-highest: '#dddddd'
  on-surface: '#222222'
  on-surface-variant: '#6c6c6c'
  inverse-surface: '#222222'
  inverse-on-surface: '#ffffff'
  outline: '#c1c1c1'
  outline-variant: '#dddddd'
  surface-tint: '#ff385c'
  primary: '#ff385c'
  on-primary: '#ffffff'
  primary-container: '#e00b41'
  on-primary-container: '#ffffff'
  inverse-primary: '#ff385c'
  secondary: '#008a05'
  on-secondary: '#ffffff'
  secondary-container: '#00a699'
  tertiary: '#b4007a'
  on-tertiary: '#ffffff'
  tertiary-container: '#92174d'
  error: '#c13515'
  on-error: '#ffffff'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F7F7F7'
  surface-light-subtle: '#F2F2F2'
  border-light: rgba(0, 0, 0, 0.08)
  text-light-primary: '#222222'
  text-light-secondary: '#6C6C6C'
  canvas-dark: '#000000'
  surface-dark: '#1C1C1C'
  surface-dark-subtle: '#2A2A2A'
  border-dark: rgba(255, 255, 255, 0.16)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#B0B0B0'
  accent-coral: '#FF385C'
  accent-green: '#008A05'
typography:
  display:
    fontFamily: Airbnb Cereal VF
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 54px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Airbnb Cereal VF
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Airbnb Cereal VF
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Airbnb Cereal VF
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Airbnb Cereal VF
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Airbnb Cereal VF
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  title-md:
    fontFamily: Airbnb Cereal VF
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: Airbnb Cereal VF
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Airbnb Cereal VF
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Airbnb Cereal VF
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-md:
    fontFamily: Airbnb Cereal VF
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  label-sm:
    fontFamily: Airbnb Cereal VF
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 14px
  lg: 20px
  xl: 32px
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

Airbnb is a marketplace that has to feel like hospitality. `Airbnb Cereal` at 700 for headlines, a 20px-radius
image card as the primary content unit (188 instances measured on the home view), a white canvas with `#F7F7F7`
reserves, and a single coral (`#FF385C`) that always means "book / reserve / continue". Photo-first, chrome-second.

- **Purity & Focus:** the listing photo is the hero of every card; text overlays it only as a small white pill.
- **Dynamic Dual-Mode:** light default; dark mode uses `#000000` canvas with `#1C1C1C` cards and brightened coral.
- **Restrained Tactility:** soft, wide shadows under search and cards; generous 20–32px radii.

## Colors

- **Primary (`#FF385C`):** the booking colour. Used for the search button, primary CTA and the wishlist heart.
  Rosa (`#E00B41`) is its pressed/hover state.
- **Secondary (`#008A05`):** availability and "superhost" green.
- **Tertiary (`#B4007A`):** rare editorial accents (categories, campaigns).
- **Neutrals:** `#222222` ink, `#6C6C6C` secondary, `#C1C1C1` disabled, `#DDDDDD` hairlines, `#F7F7F7` fills.
- Rating stars and badges stay monochrome except the coral.

## Typography

- **Cereal does the branding:** 700 for headings, 600 for card titles, 400 for body. There is no light weight.
- **Tracking:** slightly negative (`-0.02em`) only above 26px; zero below — body text must stay neutral.
- **Pacing:** tight display (1.1×), airy body (1.5×).
- **Hierarchy through weight:** 16px/600 vs 16px/400 separates label from value inside the same row.

## Layout & Spacing

- **Grid:** 12 columns, 1760px fluid max, 24px gutters, 24px page padding.
- **Breakpoints:** Mobile `< 744px`, Tablet `744–1128px`, Desktop `> 1128px`.
- **Card grid:** 2 columns on mobile, 3 on tablet, 4–6 on desktop with 24px gaps.
- **Mobile:** sticky search pill at the top, sticky booking bar at the bottom, horizontal category scroller.

## Elevation & Depth

- **Level 0:** white canvas.
- **Level 1:** cards with no border, only the image's own edges.
- **Level 2 (floating search):** `0 3px 12px rgba(0,0,0,0.15)` on a white pill, 1px `#DDDDDD` border.
- **Level 3 (modals/sheets):** `0 8px 28px rgba(0,0,0,0.28)` over a `rgba(0,0,0,0.5)` scrim.

## Shapes

- **Cards:** 20px (image and card share the radius).
- **Buttons:** 8px in forms, pill for "Reserve" and category chips.
- **Inputs:** 8–12px with 1px `#B0B0B0` border.
- **Avatars:** 32px circles with a white 2px ring when stacked.

## Components

### Search Bar
- Pill, white, 1px `#DDDDDD`, shadow level 2; four segments divided by hairlines, coral circular search button
  (48px) at the right end. Collapses to a single pill on mobile.

### Cards
- 20px radius, image 1:1 or 4:3, heart top-right, title 16px/600 with `#222`, subtitle 14px `#6C6C6C`, price
  line with bold total. Hover: image scales to 1.03 over 200ms, card shadow appears.

### Buttons
- **Primary:** coral, white 16px/600, 8px radius, 48px height; gradient variant (`#E61E4D → #D70466`) for
  checkout flows.
- **Secondary:** white with 1px `#222` border, 16px/600 label.

### Chips
- Category pills: 32px, 1px `#DDDDDD`, icon + 14px/500 label; selected becomes `#222` with white text.

### Inputs
- 56px height in forms, 8px radius, floating 12px label; error state `#C13515` with a 1px border and 12px note.
