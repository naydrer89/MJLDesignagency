---
name: Obsidian Precision
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39393e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#c1c6d6'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303035'
  outline: '#8b919f'
  outline-variant: '#414753'
  surface-tint: '#abc7ff'
  primary: '#abc7ff'
  on-primary: '#002f66'
  primary-container: '#0071e3'
  on-primary-container: '#fcfbff'
  inverse-primary: '#005cbb'
  secondary: '#61dbb4'
  on-secondary: '#00382a'
  secondary-container: '#12a480'
  on-secondary-container: '#003024'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#5f62ed'
  on-tertiary-container: '#fdfaff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#00458f'
  secondary-fixed: '#7ff8cf'
  secondary-fixed-dim: '#61dbb4'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#00513d'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
  canvas-light: '#FBFBFD'
  surface-light: '#FFFFFF'
  surface-light-subtle: '#F5F5F7'
  border-light: rgba(0, 0, 0, 0.08)
  text-light-primary: '#1D1D1F'
  text-light-secondary: '#6E6E73'
  canvas-dark: '#0B0B0F'
  surface-dark: '#16161D'
  surface-dark-subtle: '#1F1F27'
  border-dark: rgba(255, 255, 255, 0.10)
  text-dark-primary: '#F5F5F7'
  text-dark-secondary: '#86868B'
  accent-mint: '#30D158'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
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

This design system embodies the calculated precision of Apple’s Human Interface Guidelines combined with the cerebral, forward-looking restraint of OpenAI. It projects quiet authority, absolute clarity, and unyielding reliability. The experience is tailored for tech-forward professionals, enterprise leaders, and demanding creators who value signal over noise.

The visual direction synthesizes **Modern Minimalist Utility** with **Micro-Glassmorphic Precision**:
- **Purity & Focus:** Content takes absolute precedence. Visual ornamentation is strictly functional, leveraging crisp negative space, structural alignment, and subtle tonal borders.
- **Dynamic Dual-Mode:** A seamless light and dark continuum. Light mode utilizes luminous, warm off-whites (`#FBFBFD`) and paper tones; dark mode utilizes deep obsidian, graphite, and velvet charcoal layers (`#0D0D11`) instead of flat lifeless black.
- **Restrained Tactility:** Interactive elements feature hairline translucent stroke borders, gentle atmospheric drop shadows, and soft corner radii that feel naturally ergonomic under touch or cursor.

## Colors

The palette operates on calibrated contrast, pairing deep, desaturated bases with deliberate high-signal accents:
- **Primary (`#0071E3`):** The definitive electric tech-blue inspired by precision interfaces. Used for key calls-to-action, active links, active selection rings, and critical UI landmarks.
- **Secondary (`#10A37F`):** OpenAI-inspired emerald/teal. Signals AI reasoning, operational health, success confirmations, and algorithmic status.
- **Tertiary (`#6366F1`):** A soft indigo accent reserved for subtle badges, secondary highlights, and specialized data visualization.
- **Neutral Surface Scale:**
  - *Light Mode:* Primary canvas sits at `#FBFBFD` with elevated cards in `#FFFFFF` and inset containers in `#F5F5F7`. Borders use calibrated alpha overlays (`rgba(0, 0, 0, 0.08)`).
  - *Dark Mode:* Primary canvas sits in an infinite void (`#0B0B0F`), stepping to `#16161D` for base panels, and `#1F1F27` for elevated layers. Hairline borders (`rgba(255, 255, 255, 0.10)`) define crisp physical edges without relying on heavy shadows.

## Typography

Typography relies on **Inter**, delivering pristine legibility across dense data displays and spacious hero banners alike.

Key principles:
- **Tight Kerning on Scale:** Larger headings demand negative tracking (`-0.03em` down to `-0.015em`) to project intentional, editorial tension.
- **Pacing & Optical Balance:** Line heights are balanced loosely around 1.45x to 1.6x for running text, giving ample breathing room between thoughts.
- **Hierarchy through Weight and Tone:** Rather than jumping radical size steps, level differentiation relies primarily on shifting from primary foreground (`#F5F5F7` / `#1D1D1F`) down to muted secondary tonal values (`#86868B` / `#6E6E73`).

## Layout & Spacing

The system enforces a 12-column dynamic fluid grid architecture pinned to an upper container constraint of 1280px for standard reading panels and 1440px for broad dashboard layouts.

Rhythm and scale:
- **Breakpoints:** Mobile (`< 768px`), Tablet (`768px – 1024px`), Desktop (`> 1024px`).
- **Mobile Paradigm:** Collapses to a 4-column layout with 1.25rem outer gutters. Horizontal scroll rows with snap points are favored over vertical stack bloating.
- **Micro-Spacing:** All element internal padding adheres strictly to the 4px baseline (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2.5rem`, `4rem`). Dense components (e.g., input controls, chips) use `space-xs` and `space-sm`, while major section margins consume `space-xl` through `space-2xl`.

## Elevation & Depth

Visual depth is achieved through an interplay of physical surface layering, frosted glass translucency, and hairline interior glow borders rather than heavy, dirty drop shadows.

- **Level 0 (Canvas Base):** Deep, non-reflective ground (`#0B0B0F` dark / `#FBFBFD` light).
- **Level 1 (Structural Surfaces):** Floating cards and panels use `#16161D` with a top-inset highlight: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`. Outlines are 1px solid `rgba(255, 255, 255, 0.08)` (dark) or `rgba(0, 0, 0, 0.06)` (light).
- **Level 2 (Modals, Popovers & Floating Bars):** Translucent backdrop layers utilizing `backdrop-filter: blur(20px) saturate(180%)`, paired with surface fills of `rgba(22, 22, 29, 0.75)` in dark mode and `rgba(255, 255, 255, 0.82)` in light mode.
- **Shadow Profile:** When detached elevation is needed, use diffused ambient shadows: `box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.35), 0 4px 12px -2px rgba(0, 0, 0, 0.20)`.

## Shapes

The design system uses a pill-forward and continuous-curve geometry reminiscent of modern Apple UI and conversational OpenAI surfaces:
- **Buttons, Badges & Chips:** Full pill geometries (`rounded-full` or `9999px`) to emphasize interactability and natural touch affinity.
- **Cards & Primary Modules:** Generous curvature (`rounded-2xl` / `1.5rem` to `2rem`) giving an approachable yet structured boundary.
- **Inputs & Dropdowns:** Soft rounded corners (`rounded-xl` / `0.75rem` to `1rem`) allowing form controls to feel distinct from interactive action pills.

## Components

### Buttons
- **Primary Action:** Pill-shaped (`rounded-full`), solid high-contrast background (Pure white `#FFFFFF` with `#0B0B0F` label in dark mode; deep obsidian `#1D1D1F` with white text in light mode; or vibrant `#0071E3`). Subtle hover scale (`scale(1.015)`) with active scale depression (`scale(0.98)`).
- **Secondary Action:** Pill-shaped, subtle translucent background (`rgba(255, 255, 255, 0.08)` in dark mode, `rgba(0, 0, 0, 0.05)` in light mode), accompanied by a 1px boundary stroke.
- **Ghost/Tertiary:** No border, transparent background, text in primary or secondary label color, transitioning to subtle fill on hover.

### Chips & Status Badges
- Compact height (`24px` to `28px`), `rounded-full`, typography at `label-sm`.
- Status indicators feature a 6px breathing dot (e.g., `#10A37F` for active AI systems, `#0071E3` for syncing), wrapped in 10% opacity pill backgrounds with matching tone-tinted hairline borders.

### Input Fields & Search Bars
- Continuous height (`44px` for standard inputs, `52px` for focal prompts or search).
- Border radius set to `rounded-xl` or `rounded-full` for conversational prompts.
- Subtle inner background (`#1F1F27` dark / `#F5F5F7` light). Border remains neutral until focused, triggering a 2px outward glow using `#0071E3` with `0 0 0 3px rgba(0, 113, 227, 0.2)`.

### Cards & Data Containers
- Standard container: 1px continuous stroke border (`rgba(255, 255, 255, 0.08)` / `rgba(0, 0, 0, 0.06)`), 24px padding (`space-lg`), background `#16161D` (dark) or `#FFFFFF` (light).
- Interactive cards feature a hover lift via border brightness increase (`rgba(255, 255, 255, 0.16)`) and subtle ambient dispersion.

### Checkboxes & Toggle Switches
- **Switches:** Apple-style smooth toggle capsule with a recessed track (`#2C2C35` inactive / `#30D158` or `#0071E3` active) and a solid floating thumb with micro-shadow.
- **Checkboxes:** Smooth rounded square (`6px` radius), transitioning from neutral outline to solid active fill with crisp white icon checkmark.

### AI Prompt & Chat Containers
- Floating docked panel at page footers with high-blur frosted glass (`backdrop-blur-xl`, `bg-surface-dark/70`).
- Integrated dynamic action pills, auto-expanding text areas without visible scrollbars, and an integrated pill action icon.
