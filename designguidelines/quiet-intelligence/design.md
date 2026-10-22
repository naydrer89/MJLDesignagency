---
name: Quiet Intelligence
brand: OpenAI
source: https://openai.com
colors:
  surface: '#ffffff'
  surface-dim: '#f7f7f7'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fafafa'
  surface-container: '#f1f1f1'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#dedede'
  on-surface: '#000000'
  on-surface-variant: 'rgba(0, 0, 0, 0.60)'
  inverse-surface: '#000000'
  inverse-on-surface: '#ffffff'
  outline: 'rgba(0, 0, 0, 0.44)'
  outline-variant: 'rgba(0, 0, 0, 0.12)'
  surface-tint: '#0d0d0d'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1a1a'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffffff'
  secondary: '#10a37f'
  on-secondary: '#ffffff'
  secondary-container: '#0e8a6c'
  tertiary: '#5e6ad2'
  on-tertiary: '#ffffff'
  tertiary-container: '#4954b3'
  error: '#e02e2a'
  on-error: '#ffffff'
  error-container: '#b0221f'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F1F1F1'
  surface-light-subtle: '#FAFAFA'
  border-light: rgba(0, 0, 0, 0.12)
  text-light-primary: '#000000'
  text-light-secondary: rgba(0, 0, 0, 0.60)
  canvas-dark: '#000000'
  surface-dark: '#141414'
  surface-dark-subtle: '#1D1D1D'
  border-dark: rgba(255, 255, 255, 0.16)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: rgba(255, 255, 255, 0.64)
  accent-emerald: '#10A37F'
  accent-ink: '#0D0D0D'
typography:
  display:
    fontFamily: OpenAI Sans
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: -0.028em
  display-mobile:
    fontFamily: OpenAI Sans
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.024em
  headline-lg:
    fontFamily: OpenAI Sans
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.022em
  headline-lg-mobile:
    fontFamily: OpenAI Sans
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: OpenAI Sans
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.016em
  headline-sm:
    fontFamily: OpenAI Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: OpenAI Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: OpenAI Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: OpenAI Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: OpenAI Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 13px
    letterSpacing: 0em
  label-md:
    fontFamily: OpenAI Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: OpenAI Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 4px
  DEFAULT: 6px
  md: 10px
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

OpenAI designs with almost no colour: white canvas, black ink at `rgba(0,0,0,0.95)`, greys for structure,
`OpenAI Sans` set slightly tight, 6px radii on controls and pills only where a control is conversational.
Measured on the live site: `#F1F1F1` surfaces, borders at `rgba(0,0,0,0.12)`, 17px body, and 39 controls at
6px radius. The page reads like a research journal that happens to be interactive.

- **Purity & Focus:** one idea per section, hairline separators, no decorative graphics beyond product UI.
- **Dynamic Dual-Mode:** light default; dark is pure black with `rgba(255,255,255,0.16)` hairlines.
- **Restrained Tactility:** hover is a 4% fill change plus a 1px border darkening; no scale, no glow.

## Colors

- **Primary (`#000000`):** ink — buttons, headlines, icons. The only "brand colour" is contrast.
- **Secondary (`#10A37F`):** emerald, reserved for availability, model status and links in long-form content.
- **Tertiary (`#5E6AD2`):** indigo, only in charts and code highlights.
- **Neutrals:** `#F1F1F1` panels, `#FAFAFA` subtle fills, `rgba(0,0,0,0.60)` secondary text, `rgba(0,0,0,0.12)` borders.
- Colour is data, not decoration: everything structural is greyscale.

## Typography

- **Regular-weight display:** 400 at 48–72px; scale and tracking create authority, not boldness.
- **17px body** with 1.65× line-height is the reading default; 14px/500 for dense UI labels.
- **Tracking:** `-0.028em` at 72px to `0` at 14px.
- **Long-form:** measure 68–72 characters, generous 28px line-height, links underlined with 1px offset 4px.

## Layout & Spacing

- **Grid:** 12 columns, 1280px max, 24px gutters; content often splits 4/8 with a sticky left label column.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Rhythm:** 4px base; 96–128px between sections; hairline rules instead of cards where possible.
- **Mobile:** single column, 16px gutters, list rows 56px, sticky chat composer at the bottom.

## Elevation & Depth

- **Level 0:** `#FFFFFF` / `#000000`.
- **Level 1:** `#F1F1F1` fill, no border (light) / `#141414` with hairline (dark).
- **Level 2:** popovers `0 8px 24px rgba(0,0,0,0.12)` with 1px `rgba(0,0,0,0.12)`.
- **No blur, no gradients** except the product's own UI imagery.

## Shapes

- **Buttons and inputs:** 6px (measured), pill only for the chat composer and tags.
- **Cards:** 10–16px; media blocks 16px.
- **Avatars:** circles.
- **Avoid:** large 24px+ radii and heavy shadows — they read as consumer app, not research.

## Components

### Buttons
- **Primary:** black fill, white 14–17px/500 label, 6px radius, 40px height (48px in hero).
- **Secondary:** white with 1px `rgba(0,0,0,0.12)`, ink label; hover `#F1F1F1`.
- **Ghost:** text + arrow, underline on hover.

### Chat Composer
- Pill (28px+), `#F1F1F1` fill, 52px height, placeholder in `rgba(0,0,0,0.44)`, circular send button 36px in
  black, expandable textarea with no visible scrollbar until 6 lines.

### Cards & Lists
- Hairline-separated rows 56–72px tall: 18px/500 title, 14px secondary meta, chevron right.
- Editorial cards: 1px border, 16px radius, 24px padding, no shadow.

### Chips & Tags
- 28px pill, 12px/600, `#F1F1F1` fill; selected inverts to ink on white.

### Inputs
- 40px height, 6px radius, 1px `rgba(0,0,0,0.12)`; focus `0 0 0 2px #000000` (monochrome ring, no colour).
