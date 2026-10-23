# Scene recipes

Three patterns, written against the repository engine in `test/assets/motion.js` and
`test/assets/scene.css`. Copy the markup, keep the attribute names, replace the content.

## 0. The engine contract

| Attribute | Written by | Meaning |
| --- | --- | --- |
| `data-scene` | JS | Wrapper; gets `--scene` (0…1) and `.is-live`. |
| `data-scene-stage` | CSS + JS | Pinned composition. `position: sticky` only while `.is-live`. |
| `data-scene-beat` | JS | Copy beat; `.is-on` inside `data-from`…`data-to`, `.is-past` after. |
| `data-scene-depth="n"` | JS | Writes `--depth` in px (`n` = total travel in vh, max 2.5). |

```html
<link rel="stylesheet" href="assets/base.css">
<link rel="stylesheet" href="assets/scene.css">
…
<script src="assets/motion.js" defer></script>
```

```css
.scene { height: 260svh; }                 /* scene.span */
.scene__stage { min-height: 100svh; }      /* scene.stage */
```

Never write `position: sticky` on the stage yourself. The shared stylesheet only pins it when
`.is-live` is present, which keeps the no-JS and reduced-motion versions static.

## 1. Pinned product reveal

The object holds its frame while its light changes. The copy explains each state; the rail
names the states.

```html
<section class="scene" data-scene id="story">
  <div class="scene__stage" data-scene-stage>
    <div class="scene__object" aria-hidden="true">
      <div class="orb" style="--temp: 0"></div>
    </div>

    <div class="scene__copy">
      <article class="beat" data-scene-beat data-from="0" data-to="0.33">
        <p class="beat__index">06:00</p>
        <h2>Es beginnt kühl.</h2>
        <p>1800 Kelvin. Genug, um den Raum zu lesen, nicht genug, um ihn zu wecken.</p>
      </article>
      <article class="beat" data-scene-beat data-from="0.30" data-to="0.66">
        <p class="beat__index">18:40</p>
        <h2>Dann wird es Abend.</h2>
        <p>Der Sensor misst das Restlicht und nimmt 900 Kelvin heraus, bevor das Auge es merkt.</p>
      </article>
      <article class="beat" data-scene-beat data-from="0.63" data-to="1">
        <p class="beat__index">22:10</p>
        <h2>Bis nur noch Wärme bleibt.</h2>
        <p>2200 Kelvin, 4 Watt, kein Display. Die letzte Stunde gehört nicht dem Gerät.</p>
      </article>
    </div>

    <ol class="scene__rail" aria-hidden="true">
      <li>06:00</li><li>18:40</li><li>22:10</li>
    </ol>
  </div>
</section>
```

Colour interpolation belongs in the page script, not in CSS keyframes: read `--scene` from the
wrapper, interpolate between at most three named states, write the result as custom properties
on the object. Keep the interpolation to hue/lightness of one surface and stop adapting once
`--scene` reaches 1.

```js
const scene = document.querySelector('#story');
const orb = scene.querySelector('.orb');
const states = [
  { at: 0,    h: 258, l: 72, glow: 0.5 },
  { at: 0.5,  h: 274, l: 62, glow: 0.36 },
  { at: 0.85, h: 292, l: 48, glow: 0.28 },
];
function lerp(a, b, t) { return a + (b - a) * t; }
new MutationObserver(() => {
  const p = parseFloat(getComputedStyle(scene).getPropertyValue('--scene')) || 0;
  let i = 0;
  while (i < states.length - 2 && p > states[i + 1].at) i++;
  const a = states[i], b = states[i + 1];
  const t = Math.min(1, Math.max(0, (p - a.at) / (b.at - a.at)));
  orb.style.setProperty('--h', lerp(a.h, b.h, t).toFixed(1));
  orb.style.setProperty('--l', lerp(a.l, b.l, t).toFixed(1));
  orb.style.setProperty('--glow', lerp(a.glow, b.glow, t).toFixed(3));
}).observe(scene, { attributes: true, attributeFilter: ['style'] });
```

If a `MutationObserver` on a style attribute feels heavy, read `--scene` inside the page's own
`requestAnimationFrame` loop instead. Do not add a second scroll listener.

## 2. Copy crossfade without an object change

For editorial or technical stories: the structure stays, the text advances.

```html
<section class="scene scene--text" data-scene>
  <div class="scene__stage" data-scene-stage>
    <div class="scene__copy">
      <article data-scene-beat data-from="0" data-to="0.4">…</article>
      <article data-scene-beat data-from="0.34" data-to="0.75">…</article>
      <article data-scene-beat data-from="0.7" data-to="1">…</article>
    </div>
    <figure class="scene__still" data-scene-depth="1.2">…</figure>
  </div>
</section>
```

```css
.scene--text .scene__copy { display: grid; }
.scene--text .beat { grid-area: 1 / 1; max-width: 28ch; }
.scene--text .beat:not(.is-on) { opacity: 0; }
.scene--text .beat.is-past { opacity: .35; }
.scene--text .scene__still { transform: translate3d(0, var(--depth, 0), 0); }
```

The last beat stays at full opacity at `--scene: 1`; never leave the page in `.is-past`.

## 3. Assembly / clip reveal

Use when the product is built from parts (watch, device, poster). Reveal in causal order and
stop at the complete object.

```html
<div class="scene__assembly" data-scene-beat data-from="0" data-to="1">
  <span class="part part--case"></span>
  <span class="part part--dial"></span>
  <span class="part part--band"></span>
</div>
```

```css
.part { opacity: calc(clamp(0, (var(--scene) - var(--at, 0)) * 8, 1)); }
```

`calc()` with `--scene` only works when the property is registered:

```css
@property --scene { syntax: '<number>'; inherits: true; initial-value: 0; }
```

Otherwise animate `.part` with a JS-written `--p` per part, or use a mask with
`clip-path: inset(0 0 calc((1 - var(--scene)) * 100%) 0)`. Do not animate `height`.

## Reduced motion and no-JS

Both paths are already handled by the shared stylesheet. Check them by hand:

```bash
# reduced motion
chrome --force-prefers-reduced-motion   # or DevTools → Rendering → Emulate CSS media
# no JS
chrome --disable-javascript
```

Expected: no sticky stage, beats stacked in normal flow, all copy visible, object in its final
state, no horizontal overflow at 390 px.
