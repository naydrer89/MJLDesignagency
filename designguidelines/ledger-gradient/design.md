---
name: Ledger Gradient
brand: Stripe
source: https://stripe.com
colors:
  surface: '#0a2540'
  surface-dim: '#071d33'
  surface-bright: '#2c4a66'
  surface-container-lowest: '#04141f'
  surface-container-low: '#0a2540'
  surface-container: '#112f4d'
  surface-container-high: '#17395a'
  surface-container-highest: '#1f4468'
  on-surface: '#ffffff'
  on-surface-variant: '#adbdcc'
  inverse-surface: '#f6f9fc'
  inverse-on-surface: '#0a2540'
  outline: '#7d8fa3'
  outline-variant: '#2c4a66'
  surface-tint: '#7a73ff'
  primary: '#635bff'
  on-primary: '#ffffff'
  primary-container: '#5851ff'
  on-primary-container: '#ffffff'
  inverse-primary: '#4f46e5'
  secondary: '#00d4ff'
  on-secondary: '#002733'
  secondary-container: '#00a3c4'
  tertiary: '#ff5c39'
  on-tertiary: '#ffffff'
  tertiary-container: '#e0492a'
  error: '#df1b41'
  on-error: '#ffffff'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  canvas-light: '#FFFFFF'
  surface-light: '#F6F9FC'
  surface-light-subtle: '#F8FAFD'
  border-light: rgba(10, 37, 64, 0.08)
  text-light-primary: '#0A2540'
  text-light-secondary: '#64748D'
  canvas-dark: '#0A2540'
  surface-dark: '#112F4D'
  surface-dark-subtle: '#17395A'
  border-dark: rgba(255, 255, 255, 0.10)
  text-dark-primary: '#FFFFFF'
  text-dark-secondary: '#ADBDCC'
  accent-blurple: '#635BFF'
  accent-cyan: '#00D4FF'
  accent-success: '#15BE53'
typography:
  display:
    fontFamily: sohne-var
    fontSize: 64px
    fontWeight: '300'
    lineHeight: 72px
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: sohne-var
    fontSize: 40px
    fontWeight: '300'
    lineHeight: 46px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: sohne-var
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 55px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: sohne-var
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 39px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: sohne-var
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 35px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: sohne-var
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 29px
    letterSpacing: -0.01em
  title-md:
    fontFamily: sohne-var
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: sohne-var
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: sohne-var
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: sohne-var
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: sohne-var
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: sohne-var
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 4px
  DEFAULT: 6px
  md: 8px
  lg: 12px
  xl: 20px
  pill: 9999px
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

Stripe sells infrastructure, but designs like an editorial magazine for engineers. The signature is a
**light, cool-white slate canvas** (`#F6F9FC`) with deep navy ink (`#0A2540`), extremely light display weights
(`300` at 48–64px), and one gradient — the blurple-to-cyan mesh — used as the single moment of spectacle.
Measured on the live site: `sohne-var`, 4–8px radii, borders at `rgba(10,37,64,0.08)`, body copy `#64748D`.

- **Purity & Focus:** Documentation-grade clarity. Every headline is a claim; every section proves it with a
  product surface, a diagram or code.
- **Dynamic Dual-Mode:** Light is the default; dark mode is navy (`#0A2540`) rather than black, so gradients and
  product screenshots stay inside the same colour world.
- **Restrained Tactility:** Tiny radii (4–8px), 1px hairlines, and shadows only under floating cards.

## Colors

- **Primary (`#635BFF`):** blurple — links, primary buttons, active tabs, the gradient's anchor.
- **Secondary (`#00D4FF`):** cyan, used in gradients, charts and developer highlights.
- **Tertiary (`#FF5C39`):** sparingly for "new", warnings and editorial accents.
- **Ink:** `#0A2540` on light; secondary `#64748D`; muted `#7D8FA3`. On dark navy, text is `#FFFFFF` with
  `#ADBDCC` secondary.
- **Gradient:** one mesh per page, behind hero or a code block — never behind body text.

## Typography

- **Light display weights:** 300 at display sizes carries Stripe's calm; bump to 400–500 below 26px so text
  does not thin out.
- **Tracking:** `-0.035em` at 64px, tapering to `0` at 16px. Headlines are tight and long-lined.
- **Pacing:** 1.1–1.2× line-height for display, 1.5× for body. Code blocks use a mono face at 13–14px.
- **Hierarchy through Tone:** navy → slate → muted grey, one size step per level.

## Layout & Spacing

- **Grid:** 12 columns, max width 1080px for prose, 1280px for product blocks, 24px gutters.
- **Breakpoints:** Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`.
- **Mobile:** single column, gradient reduced to a soft top wash, code samples collapse into scrollable tabs.
- **Rhythm:** section padding 96px desktop / 64px mobile; cards on an 8px baseline.

## Elevation & Depth

- **Level 0:** `#F6F9FC` canvas.
- **Level 1:** white cards, 1px `rgba(10,37,64,0.08)`, 6–8px radius, no shadow at rest.
- **Level 2:** floating code panels and dropdowns: `0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3)`.
- **Gradient glow:** radial mesh at 12% opacity behind hero panels instead of a coloured shadow.

## Shapes

- **Buttons:** 6px radius (not pill) — Stripe reads as software, not as consumer app.
- **Cards:** 8px, sometimes 12px for marketing tiles.
- **Inputs:** 6px, 1px hairline, focus ring in blurple.
- **Avoid:** large 24px+ radii and heavy blurs; they break the editorial tone.

## Components

### Buttons
- **Primary:** `#635BFF` fill, white 15px/500 label, 6px radius, height 40px (48px in hero).
- **Secondary:** white fill, 1px `rgba(10,37,64,0.12)` border, ink label.
- **Ghost:** text-only blurple, underline on hover.

### Cards & Code Panels
- White surface, hairline border, 8px radius, 24px padding; code panels use mono 13px on `#0A2540`.

### Chips & Badges
- 20–24px pill or 4px chip, 12px/600, tinted 10% blurple background, blurple text.

### Inputs & Search
- 40px height, 6px radius, white fill, 1px `rgba(10,37,64,0.16)`; focus `0 0 0 4px rgba(99,91,255,0.18)`.

### Tables & Docs
- Sticky headers, 1px hairlines, hover row `#F6F9FC`; documentation uses the same type scale as marketing.
