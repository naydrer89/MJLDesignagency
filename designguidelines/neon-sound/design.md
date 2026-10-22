---
name: Neon Sound
brand: Spotify
source: https://www.spotify.com
colors:
  surface: '#121212'
  surface-dim: '#000000'
  surface-bright: '#282828'
  surface-container-lowest: '#000000'
  surface-container-low: '#121212'
  surface-container: '#181818'
  surface-container-high: '#242424'
  surface-container-highest: '#2A2A2A'
  on-surface: '#ffffff'
  on-surface-variant: '#b3b3b3'
  inverse-surface: '#ffffff'
  inverse-on-surface: '#121212'
  outline: '#7a7a7a'
  outline-variant: '#3e3e3e'
  surface-tint: '#1ed760'
  primary: '#1ed760'
  on-primary: '#000000'
  primary-container: '#1db954'
  on-primary-container: '#000000'
  inverse-primary: '#1db954'
  secondary: '#1178f5'
  on-secondary: '#ffffff'
  secondary-container: '#0d5ccd'
  tertiary: '#e13300'
  on-tertiary: '#ffffff'
  tertiary-container: '#b82900'
  error: '#f15e6c'
  on-error: '#2b0006'
  error-container: '#8c1420'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F7F7F7'
  surface-light-subtle: '#EFEFEF'
  border-light: rgba(0, 0, 0, 0.08)
  text-light-primary: '#121212'
  text-light-secondary: '#6A6A6A'
  canvas-dark: '#000000'
  surface-dark: '#121212'
  surface-dark-subtle: '#181818'
  border-dark: rgba(255, 255, 255, 0.10)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#B3B3B3'
  accent-green: '#1ED760'
  accent-blue: '#1178F5'
typography:
  display:
    fontFamily: SpotifyMixUI
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 58px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: SpotifyMixUI
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: SpotifyMixUITitle
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: SpotifyMixUITitle
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: SpotifyMixUI
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: SpotifyMixUI
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: -0.005em
  title-md:
    fontFamily: SpotifyMixUI
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0em
  body-lg:
    fontFamily: SpotifyMixUI
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: SpotifyMixUI
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: SpotifyMixUI
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: SpotifyMixUI
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: SpotifyMixUI
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 500px
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

Spotify is a dark app that lets artwork be the colour. Base `#121212`, cards `#181818`, elevated `#242424`,
text `#FFFFFF` / `#B3B3B3`, and a single acid green (`#1ED760`) that means "play". Measured on the live site:
`SpotifyMixUI` at 700 for almost every label, 1000px pill buttons, 8px card radii, and 83 surfaces at
`rgba(255,255,255,0.10)`.

- **Purity & Focus:** album art is the only imagery; UI is chrome around it.
- **Dynamic Dual-Mode:** dark default; light mode keeps the same layout with `#F7F7F7` canvas.
- **Restrained Tactility:** hover lifts a card from `#181818` to `#282828`; the green play button scales up on hover.

## Colors

- **Primary (`#1ED760`):** play, follow, "Premium" — never as a background for long text.
- **Secondary (`#1178F5`):** links and info states, rare.
- **Tertiary (`#E13300`):** destructive and record-label accents.
- **Neutrals:** `#000000` → `#121212` → `#181818` → `#242424`; text `#FFFFFF` and `#B3B3B3`.
- **Extraction:** each playlist page derives a 2-colour gradient from its cover art (top 200px only).

## Typography

- **Bold is the default voice:** 700 for titles and even small labels; 400 only for running copy.
- **Circular-like geometry:** `SpotifyMixUI` has round terminals and wide apertures; never substitute a condensed face.
- **Tracking:** `-0.03em` on display, positive `+0.06em` only for 11px uppercase eyebrows.
- **Truncation:** one-line ellipsis is a design rule, never a bug.

## Layout & Spacing

- **Grid:** app shell = 240px sidebar + fluid main + optional 360px right rail.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Shelf pattern:** horizontal card rows, 6 visible desktop / 2.2 visible mobile, 16px gutters, scroll snapping.
- **Mobile:** bottom tab bar (Home, Search, Library), 64px player above it, safe-area aware.

## Elevation & Depth

- **Level 0:** `#121212` (near-black, not pure black, except the player bar).
- **Level 1:** cards `#181818`, hover `#282828`, no borders.
- **Level 2:** context menus `#282828` with `0 8px 24px rgba(0,0,0,0.5)`.
- **Glass:** the sticky top bar over artwork uses `backdrop-filter: blur(24px)` + `rgba(18,18,18,0.8)`.

## Shapes

- **Play buttons:** 48px circles; "Premium" CTAs are full pills.
- **Cards:** 8px, cover art clipped to the same radius.
- **Inputs:** pill search field (`500px`) 48px tall.
- **Avoid:** borders and heavy shadows; contrast comes from surface steps.

## Components

### Play Button
- 48px circle, `#1ED760`, black triangle; hover `scale(1.06)` + shadow `0 8px 8px rgba(0,0,0,0.3)`.

### Cards
- 8px radius, 16px padding, cover 1:1, title 16px/700, subtitle 14px/400 `#B3B3B3`; hover reveals the play
  button bottom-right of the artwork.

### Player Bar
- 72px tall, `#181818`, three zones: track (art + title + heart), transport (shuffle, prev, 40px play, next,
  repeat) + 4px progress bar, volume/devices right.

### Chips
- Filter pills 32px, `rgba(255,255,255,0.10)` fill, 14px/700; selected `#FFFFFF` with black text.

### Inputs
- Search pill 48px, `#242424`, 14px, leading magnifier; results grouped with 12px uppercase section labels.
