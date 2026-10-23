---
name: scroll-cinema
description: >
  Builds scroll-scrubbed product scenes for premium marketing pages: a pinned stage whose
  composition, light and copy advance with the reader's scroll instead of a fixed timer.
  Includes the token table, scene anatomy, choreography rules, progressive-enhancement and
  reduced-motion behaviour, and the QA checklist. Use for hero stories, product reveals,
  launch pages and any scroll sequence that should feel authored rather than animated.
metadata:
  author: MJL Design Agency
  version: "1.0.0"
---

# Scroll Cinema

Scroll-scrubbed scene storytelling. The reader's scroll is the clock; the page is a filmstrip
they can stop, reverse and leave at any frame. This is a different instrument from the house
premium tween (380–520 ms, `cubic-bezier(0.4, 0, 0.2, 1)`) and does not replace it: the tween
still handles hovers, menus, dialogs and micro-feedback. Scroll cinema handles the one big
moment a page is remembered for.

**One scene per page.** A second pinned scene halves the effect of the first and doubles the
scroll cost. If a page needs two stories, it needs two pages.

## When to use it

- A product launch or hero where a single object changes state (light, temperature, material,
  assembly, position) while the copy explains why.
- An editorial story with 3–4 beats that only make sense in order.
- A technical demonstration (build, deploy, handshake, lap) whose causally linked steps are the
  argument.

## When not to use it

- Dashboards, forms, settings, checkout: motion there must be immediate and reversible.
- More than four beats. Five beats is a slideshow with extra steps.
- Anything whose meaning disappears if a visitor jumps straight to the anchor.
- Pages where the fold is already doing three jobs. Fix the hierarchy first.
- Content that must be readable before JavaScript runs *and* cannot be duplicated in a static
  fallback. Then write the static version instead.

## Token table

Agency defaults for a lightweight implementation. They are starting values, not a brand's
published specification — label them as ours when citing.

| Token | Value | Rule |
| --- | ---: | --- |
| `scene.span` | `260svh` | Scroll travel for one scene incl. its stage. Short scenes feel like a glitch, long ones like a hostage situation. |
| `scene.stage` | `100svh` | Pinned composition. `svh`, never `vh`: mobile browser chrome must not clip it. |
| `scene.sticky-offset` | `0` | The stage starts at the viewport top. Navigation floats above it. |
| `scene.scale-from` | `0.96` | Product settles to `1`. Never start below `0.9`. |
| `scene.lift` | `24px` | Entrance offset of the hero object; resolves to `0`. |
| `scene.parallax-max` | `2.5vh` | Total depth travel between background and foreground. More is a theme-park ride. |
| `scene.beat-step` | `0.09` | Progress offset between successive copy beats. |
| `scene.crossfade` | `0.06` | Overlap where two beats are both partially visible. |
| `scene.dim` | `0.35` | Opacity of a beat that has been passed. Do not remove it: the reader must be able to look back. |
| `scene.rail` | `1px` | Progress rail. The only chrome the scene is allowed. |
| `scene.light-ease` | `linear` | Scroll progress is linear. Easing belongs to the content inside a beat, never to the scrub itself. |
| `scene.micro` | `200ms` | Timed reveals that fire once (labels, first paint of a beat), `33ms` stagger. |
| `scene.fallback` | `static` | Without scroll timelines, JS or motion permission: all beats visible, no pin, final object state. |

## Scene anatomy

```
<section class="scene" data-scene>            ← the scroll range, height: scene.span
  <div class="scene__stage" data-scene-stage> ← sticky, 100svh, one composition
    <div class="scene__object">…</div>        ← the thing that changes
    <div class="scene__copy">
      <article data-scene-beat data-from="0"    data-to="0.32">…</article>
      <article data-scene-beat data-from="0.29" data-to="0.64">…</article>
      <article data-scene-beat data-from="0.61" data-to="1">…</article>
    </div>
    <ol class="scene__rail">…</ol>            ← optional, three marks max
  </div>
</section>
```

Rules:

1. **Every beat is complete prose.** A headline plus one sentence that explains the state, not a
   caption fragment. If it only works while the object is at 40 % opacity, rewrite it.
2. **The object changes, the layout does not.** One camera. No scene cuts, no new grids mid-scroll.
3. **The rail names the states** (`06:00`, `18:40`, `22:10`), so the reader knows the length of
   the story before starting it.
4. **The last frame is the product's best frame.** Scroll-bottom must not leave the composition
   in a transitional state.
5. **Copy leads, object answers.** The beat appears first, the object follows within ~30 ms of
   scroll — never the reverse; the reader should read the claim while seeing it confirmed.

## Choreography

- **One idea per beat.** Temperature, then distance, then silence. Never two properties of the
  product in the same beat.
- **Crossfade, don't slide.** Beats exchange opacity and at most `8px` of translateY. Panels
  flying in from the sides break the single-camera illusion.
- **Depth is a whisper.** `scene.parallax-max` split across at most three layers. If the
  background moves more than the object, it becomes the subject.
- **The object never exits the frame.** Rotation, scale and light are allowed; travel is not.
- **State must be legible at any scroll position**, including 0.37 and 0.62. Test the in-between
  frames, not only the beats.

## Implementation

Use CSS scroll-driven animations where supported and the shared engine otherwise. Both paths
must render the same final frame.

```css
@supports (animation-timeline: view()) {
  .scene__object { animation: settle linear both; animation-timeline: view(); animation-range: entry 10% cover 55%; }
}
```

The repository engine (`test/assets/motion.js`, `test/assets/scene.css`) exposes:

- `[data-scene]` — sets `--scene` (0…1) for the whole wrapper.
- `[data-scene-beat][data-from][data-to]` — toggles `.is-on` / `.is-past`.
- `[data-scene-depth="n"]` — writes `--depth` in px, clamped to `2.5vh`.
- `.is-live` is added by JS only when motion is allowed; all static styles hang off it.

Full recipes: [`reference/scene-recipes.md`](reference/scene-recipes.md).

## Progressive enhancement

1. Write the static page first: all beats stacked, all readable, final product state, no pin.
2. Add `.js` (set in `<head>`) and let JS add `.is-live` to scenes it can drive.
3. Under `prefers-reduced-motion: reduce`, never add `.is-live`: no pin, no crossfade, no scrub.
   The page must look finished, not paused.
4. Anchor jumps and `scroll-behavior: smooth` must land on a readable frame. Test `#specs`,
   `#kaufen`, browser back/forward and a reload mid-page.

## Accessibility

- Beats are real headings and paragraphs in DOM order, not generated text.
- Never hide a beat with `display: none` or `visibility: hidden` under JS: use opacity, and keep
  it in the accessibility tree.
- The rail is decorative: `aria-hidden`, the state is already in the copy.
- Text over a moving object needs a static scrim or a reserved area. Minimum contrast 4.5:1 at
  the darkest frame of the animation, not the average.
- Keyboard users must be able to reach every link and button inside every beat even when the
  beat is not the active one — hence opacity, not concealment.
- No horizontal scroll at any breakpoint, including while the stage is pinned.

## Performance

- Only `transform`, `opacity` and (sparingly) `filter` inside the scene. Colour changes on a
  large radial gradient are expensive: keep the animated surface under ~60 % of the stage and
  test on a mid-range phone.
- One `requestAnimationFrame` loop for the whole page; no per-element scroll listeners.
- Write CSS custom properties with 3-decimal precision and skip frames where the value did not
  change by more than `0.002`.
- `content-visibility: auto` on sections below the scene, never on the scene itself.
- The sticky stage must not create a scroll container: `overflow: clip`, not `hidden`.

## Anti-patterns

- Pinning a section so the reader *cannot* continue without consuming the animation.
- Scrubbing five unrelated properties so nothing reads as a cause.
- A beat that is only a number or a logo.
- Animating `height`, `top`, `margin` or `filter: blur()` on every frame.
- Scroll-jacking: intercepting the wheel, normalising scroll speed, or snapping.
- A progress bar with no labels, or one that reaches 100 % before the section ends.
- Confetti of parallax layers that drift independently for decoration.

## QA checklist

- [ ] Scene reads at 1440, 1024, 768 and 390 px; stage fits `100svh` on iOS Safari.
- [ ] Static (no JS) version is complete and readable; nothing overlaps.
- [ ] `prefers-reduced-motion: reduce`: no sticky, all beats visible, final state shown.
- [ ] Any scroll position between beats looks composed, not caught mid-fade.
- [ ] Reverse scroll returns every state exactly.
- [ ] Anchor links inside and into the scene land readably.
- [ ] No console errors, no horizontal overflow, no layout shift when `.is-live` is added.
- [ ] Contrast checked at the brightest and darkest frame.
- [ ] Keyboard: every link reachable, focus ring visible over the stage.
- [ ] One scene on the page; the rest of the page uses the ordinary tween system.

## Sources

Mechanism and production evidence, read 2026:

- Chrome for Developers — NRK scroll-driven storytelling case study: <https://developer.chrome.com/blog/nrk-casestudy>
- Chrome for Developers — CSS UI ecommerce scroll animations (Tokopedia, redBus): <https://developer.chrome.com/blog/css-ui-ecommerce-sda>
- WebKit — A guide to scroll-driven animations with just CSS: <https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/>
- IBM Carbon — Motion guidelines (duration steps, expressive curves): <https://v10.carbondesignsystem.com/guidelines/motion/overview/>
- Material 3 — Motion overview and expressive motion: <https://m3.material.io/styles/motion/overview/how-it-works>

The token values above are our defaults, not quotes from these sources.
