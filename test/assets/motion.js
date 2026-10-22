/* Motion für die Testseiten — eine Datei, keine Abhängigkeiten.
 *
 * Das Handwerk liegt in den Layouts; hier stehen nur die wiederkehrenden Bausteine:
 *   [data-reveal]        Einblenden beim Scrollen (data-reveal="mask|scale|side")
 *   [data-words]         Headline in Wortmasken teilen und staffeln
 *   [data-scrub]         Scroll-Fortschritt als --scrub (0…1) auf das Element
 *   [data-parallax="n"]  Verschiebung in px = Fortschritt × n
 *   [data-count="120"]   Zahl hochzählen, sobald sichtbar
 *   [data-progress]      Lesefortschritt als scaleX
 *   [data-magnetic]      Button folgt dem Zeiger leicht
 *   [data-glow]          Karte bekommt --mx/--my in Prozent für einen Lichtpunkt
 *
 * prefers-reduced-motion schaltet alles ab, ohne Inhalte zu verstecken.
 */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn, { once: true });
  }

  /* Headline in Wörter und Masken zerlegen, Textknoten rekursiv. */
  function splitWords(el) {
    var nodes = Array.prototype.slice.call(el.childNodes);
    var index = 0;

    nodes.forEach(function (node) {
      if (node.nodeType === 3) {
        var frag = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach(function (chunk) {
          if (!chunk.trim()) {
            frag.appendChild(document.createTextNode(chunk));
            return;
          }
          var word = document.createElement('span');
          word.className = 'word';
          var inner = document.createElement('span');
          inner.textContent = chunk;
          inner.style.setProperty('--delay', (index * 55 + 60) + 'ms');
          word.appendChild(inner);
          frag.appendChild(word);
          index += 1;
        });
        el.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        splitWords(node);
      }
    });
  }

  ready(function () {
    var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal], [data-words]'));

    reveals.forEach(function (el) {
      if (el.hasAttribute('data-words')) splitWords(el);
      if (el.hasAttribute('data-delay')) el.style.setProperty('--delay', el.getAttribute('data-delay'));
    });

    if (reduced || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-in'); });
      document.querySelectorAll('[data-count]').forEach(function (el) {
        el.textContent = el.getAttribute('data-count');
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    reveals.forEach(function (el) { io.observe(el); });

    /* Ein vollständig per clip-path verstecktes Element hat für den
       IntersectionObserver keine Fläche und würde nie sichtbar werden. Der
       Scroll-Loop prüft solche Fälle anhand der Bounding-Box nach. */
    var pending = reveals.slice();

    /* Zahlen: einmal zählen, wenn sie sichtbar werden. */
    var countIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var decimals = (el.getAttribute('data-decimals') || '0') | 0;
        var start = performance.now();
        var dur = 1100;

        function tick(now) {
          var p = Math.min(1, (now - start) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals).replace('.', ',');
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toFixed(decimals).replace('.', ',');
        }
        requestAnimationFrame(tick);
        countIo.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = '0';
      countIo.observe(el);
    });

    /* Scroll-Fortschritt: ein Loop, alles darin. */
    var scrubs = Array.prototype.slice.call(document.querySelectorAll('[data-scrub], [data-parallax]'));
    var progress = document.querySelector('[data-progress]');
    var ticking = false;

    function frame() {
      ticking = false;
      var vh = window.innerHeight;

      for (var i = pending.length - 1; i >= 0; i--) {
        var box = pending[i].getBoundingClientRect();
        if (box.top < vh * 0.9 && box.bottom > 0) {
          pending[i].classList.add('is-in');
          io.unobserve(pending[i]);
          pending.splice(i, 1);
        }
      }

      scrubs.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        var raw = (vh - r.top) / (vh + r.height);
        var p = Math.min(1, Math.max(0, raw));
        if (el.hasAttribute('data-scrub')) el.style.setProperty('--scrub', p.toFixed(4));
        if (el.hasAttribute('data-parallax')) {
          var f = parseFloat(el.getAttribute('data-parallax')) || 0;
          el.style.setProperty('--shift', ((p - 0.5) * f * 100).toFixed(2) + 'px');
        }
      });

      if (progress) {
        var max = document.documentElement.scrollHeight - vh;
        progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    frame();

    /* Hover-Physik nur mit Maus: Buttons folgen leicht, Karten bekommen einen Lichtpunkt. */
    if (!finePointer) return;

    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      var strength = parseFloat(el.getAttribute('data-magnetic')) || 6;
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'translate3d(' + (x * strength) + 'px,' + (y * strength) + 'px,0)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transform = '';
      });
    });

    document.querySelectorAll('[data-glow]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  });
})();
