---
name: Paper Workshop
brand: Notion
source: https://www.notion.com
colors:
  surface: '#ffffff'
  surface-dim: '#f9f9f8'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbfbfa'
  surface-container: '#f9f9f8'
  surface-container-high: '#f1f1ef'
  surface-container-highest: '#e9e9e6'
  on-surface: '#191918'
  on-surface-variant: '#73726e'
  inverse-surface: '#191918'
  inverse-on-surface: '#ffffff'
  outline: '#a3a29c'
  outline-variant: '#e4e3df'
  surface-tint: '#2383e2'
  primary: '#2383e2'
  on-primary: '#ffffff'
  primary-container: '#0b6bcb'
  on-primary-container: '#ffffff'
  inverse-primary: '#2383e2'
  secondary: '#0f7b6c'
  on-secondary: '#ffffff'
  secondary-container: '#0a6255'
  tertiary: '#6940a5'
  on-tertiary: '#ffffff'
  tertiary-container: '#54328a'
  error: '#eb5757'
  on-error: '#ffffff'
  error-container: '#c0392b'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F9F9F8'
  surface-light-subtle: '#F1F1EF'
  border-light: rgba(0, 0, 0, 0.10)
  text-light-primary: '#191918'
  text-light-secondary: '#73726E'
  canvas-dark: '#191919'
  surface-dark: '#202020'
  surface-dark-subtle: '#2A2A28'
  border-dark: rgba(255, 255, 255, 0.12)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#9B9A97'
  accent-blue: '#2383E2'
  accent-teal: '#0F7B6C'
typography:
  display:
    fontFamily: NotionInter
    fontSize: 96px
    fontWeight: '600'
    lineHeight: 100px
    letterSpacing: -0.048em
  display-mobile:
    fontFamily: NotionInter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: NotionInter
    fontSize: 54px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.035em
  headline-lg-mobile:
    fontFamily: NotionInter
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.03em
  headline-md:
    fontFamily: NotionInter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: NotionInter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.011em
  title-md:
    fontFamily: NotionInter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: NotionInter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: NotionInter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: NotionInter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-md:
    fontFamily: NotionInter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: NotionInter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 10px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

Notion looks like paper that happens to be software. A warm off-white (`#F9F9F8`) sits under a crisp white
canvas, ink is `rgba(0,0,0,0.95)`, hairline borders are `rgba(0,0,0,0.10)`, radii stay at 4–12px, and the
96px `NotionInter` hero with `-4.6px` tracking gives the page its editorial confidence. `Lyon Text` (serif)
appears in quotes and editorial modules to add humanity.

- **Purity & Focus:** content is the interface; the chrome whispers (grey 4px icons, 12px labels).
- **Dynamic Dual-Mode:** light is a warm paper tone, dark is `#191919` (never blue-black).
- **Restrained Tactility:** block hover shows a drag handle and `+` in `#C1C0BA`; nothing glows.

## Colors

- **Primary (`#2383E2`):** the Notion blue for links, selected blocks, primary buttons.
- **Secondary (`#0F7B6C`):** teal for success and "shared/public" states.
- **Tertiary (`#6940A5`):** purple for AI actions and highlights.
- **Neutrals:** `#191918` ink, `#73726E` secondary, `#A3A29C` placeholder, `#E9E9E6` hairlines,
  `#F9F9F8` page tint, `#F1F1EF` hover fill.
- **Callout palette:** grey, brown, orange, yellow, green, blue, purple, pink, red — each at 10% background
  with a 100% left border and text at 600 weight.

## Typography

- **Huge, tight heroes:** 96px/600 with `-4.6px` tracking shrinks to 48px on mobile.
- **Editorial serif:** `Lyon Text` italic for pull quotes, never for UI.
- **Body 14–18px** with 1.5–1.55× line-height; the editor uses 16px/1.5 as the canonical body.
- **Hierarchy through weight:** 600 for blocks, 500 for controls, 400 for text — three weights only.

## Layout & Spacing

- **Grid:** 12 columns; content max 1200px; the editor column measures 708px for readability.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Mobile:** sidebar becomes a drawer, page top bar keeps breadcrumb + share + `⋯`.
- **Rhythm:** 4px base, 8/12/16/24/32px steps; blocks carry 2–6px vertical margin, not spacing wrappers.

## Elevation & Depth

- **Level 0:** `#FFFFFF`.
- **Level 1:** hover fill `#F1F1EF`, no border.
- **Level 2:** popovers/modals `#FFFFFF` + `0 9px 24px rgba(15,15,15,0.12)` + 1px `rgba(15,15,15,0.05)`.
- **No glass, no gradients:** the only transparency is the 20% scrim behind modals.

## Shapes

- **Buttons:** 8px (small), 10px (medium).
- **Cards / callouts:** 8–12px.
- **Inputs:** 4px (editor inline) to 8px (forms).
- **Avoid:** pills except for tags and avatars; Notion is rectangular by nature.

## Components

### Blocks & Editor
- 32px row height, drag handle and `+` appear on hover at 12px, block menu with 4px icons and 14px labels.

### Buttons
- **Primary:** blue `#2383E2`, white 14px/500, 8px radius, 32px height.
- **Secondary:** white with 1px `rgba(0,0,0,0.12)`, ink label.
- **Ghost:** transparent, `#73726E` → `#191918` on hover with `#F1F1EF` fill.

### Callouts & Tags
- Callout: 10% tinted fill, 3px left border, 14px text, 16px icon.
- Tags: 20px pill, 12px/500, tinted background, removable `×` on hover.

### Inputs & Search
- 32px height, 8px radius, 1px `rgba(0,0,0,0.12)`, blue 2px ring on focus; `⌘K` search opens a centred
  640px palette with 44px rows and mono shortcut hints.

### Tables & Databases
- 32px rows, hairline column dividers, sticky header with 12px/500 grey labels, hover row `#F7F7F5`.
