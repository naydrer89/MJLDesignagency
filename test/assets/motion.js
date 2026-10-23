/* Motion — eine Datei, keine Abhängigkeiten. Premium-Charakter:
   380–520 ms, kein Überschwingen, Bewegung nur als Erklärung von Hierarchie
   oder Ursache. Regeln und Tabellen: skills/motion-design/.

   Attribute
     [data-reveal]           Einblenden beim Scrollen (mask|scale|side|line)
     [data-words]            Headline in Wortmasken teilen, staffeln
     [data-stagger]          Kinder nacheinander einblenden (max. 420 ms gesamt)
     [data-scrub]            Sichtbarkeitsfortschritt als --scrub (0…1)
     [data-track]            eigener Fortschritt durch den Viewport als --track
     [data-parallax="n"]     Verschiebung in px = Fortschritt × n
     [data-count="120"]      Zahl hochzählen, sobald sichtbar
     [data-progress]         Lesefortschritt als scaleX
     [data-magnetic]         Button folgt dem Zeiger leicht
     [data-glow]             --mx/--my in Prozent für einen Lichtpunkt
     [data-tilt="6"]         Karte kippt maximal n Grad zum Zeiger
     [data-draw]             SVG-Pfad zeichnet sich beim Sichtbarwerden
     [data-tabs]             Tabliste (role=tab) mit gleitendem Indikator
     [data-dialog-open]      öffnet das <dialog id="…">; [data-dialog-close] schließt
     [data-sticky]           markiert eine Sticky-Sektion für Schritt-Aktivierung
     [data-scene]            Scroll-Cinema: setzt --scene (0…1), markiert .is-live
     [data-scene-beat]       data-from/data-to → .is-on / .is-past nach --scene
     [data-scene-depth="n"]  schreibt --depth (px), gekappt auf ±2,5 vh

   prefers-reduced-motion schaltet alles ab, ohne Inhalte zu verstecken. */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var doc = document;

  function ready(fn) {
    if (doc.readyState !== 'loading') fn();
    else doc.addEventListener('DOMContentLoaded', fn, { once: true });
  }

  function each(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }

  /* Headline in Wörter und Masken zerlegen. Text in <em>/<span> bleibt erhalten,
     weil rekursiv durch die Kindknoten gegangen wird. */
  function splitWords(el) {
    var index = 0;
    var cap = parseFloat(el.getAttribute('data-words')) || 45;

    function walk(parent) {
      each(Array.prototype.slice.call(parent.childNodes), function (node) {
        if (node.nodeType === 3) {
          if (!node.textContent.trim()) return;
          var frag = doc.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(function (chunk) {
            if (!chunk.trim()) {
              frag.appendChild(doc.createTextNode(chunk));
              return;
            }
            var word = doc.createElement('span');
            word.className = 'word';
            var inner = doc.createElement('span');
            inner.textContent = chunk;
            inner.style.setProperty('--delay', Math.min(index, 7) * cap + 80 + 'ms');
            word.appendChild(inner);
            frag.appendChild(word);
            index += 1;
          });
          parent.replaceChild(frag, node);
        } else if (node.nodeType === 1 && !node.classList.contains('no-split')) {
          walk(node);
        }
      });
    }

    walk(el);
  }

  ready(function () {
    var reveals = Array.prototype.slice.call(
      doc.querySelectorAll('[data-reveal], [data-words], [data-stagger]')
    );

    reveals.forEach(function (el) {
      if (el.hasAttribute('data-words')) splitWords(el);
      if (el.hasAttribute('data-delay')) el.style.setProperty('--delay', el.getAttribute('data-delay'));
      if (el.hasAttribute('data-stagger')) {
        each(el.children, function (child, i) {
          child.style.setProperty('--i', String(i));
        });
      }
    });

    /* Zahlen: ruhiges ease-out über 1,1 s, deutsches Komma. */
    function runCounters() {
      each(doc.querySelectorAll('[data-count]'), function (el) {
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
      });
    }

    if (reduced || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) {
        el.classList.add('is-in');
      });
      each(doc.querySelectorAll('[data-count]'), function (el) {
        var d = (el.getAttribute('data-decimals') || '0') | 0;
        el.textContent = parseFloat(el.getAttribute('data-count')).toFixed(d).replace('.', ',');
      });
      each(doc.querySelectorAll('[data-draw]'), function (el) {
        el.style.strokeDashoffset = '0';
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    reveals.forEach(function (el) {
      io.observe(el);
    });

    /* Ein vollständig per clip-path verstecktes Element hat keine Fläche für den
       Observer. Der Scroll-Loop prüft solche Fälle an der Bounding-Box nach. */
    var pending = reveals.slice();

    var countIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          countIo.unobserve(entry.target);
          var el = entry.target;
          var target = parseFloat(el.getAttribute('data-count'));
          var decimals = (el.getAttribute('data-decimals') || '0') | 0;
          var start = performance.now();
          function tick(now) {
            var p = Math.min(1, (now - start) / 1100);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals).replace('.', ',');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target.toFixed(decimals).replace('.', ',');
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );

    each(doc.querySelectorAll('[data-count]'), function (el) {
      el.textContent = '0';
      countIo.observe(el);
    });

    /* SVG-Pfade zeichnen. Länge erst nach Layout messen. */
    each(doc.querySelectorAll('[data-draw]'), function (path) {
      var len = path.getTotalLength ? path.getTotalLength() : 0;
      if (!len) return;
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)';
      var drawIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            path.style.strokeDashoffset = '0';
            drawIo.unobserve(path);
          });
        },
        { threshold: 0.2 }
      );
      drawIo.observe(path);
    });

    /* Scroll-Cinema: die Szene wird erst live, wenn Bewegung erlaubt ist.
       Ohne is-live bleibt der statische Aufbau aus scene.css stehen. */
    var scenes = Array.prototype.slice.call(doc.querySelectorAll('[data-scene]'));
    scenes.forEach(function (scene) {
      scene.classList.add('is-live');
      scene.__beats = Array.prototype.slice.call(scene.querySelectorAll('[data-scene-beat]'));
      scene.__depths = Array.prototype.slice.call(scene.querySelectorAll('[data-scene-depth]'));
      scene.__last = -1;
    });

    /* Scroll-Fortschritt: ein Loop für alles. */
    var scrubs = Array.prototype.slice.call(
      doc.querySelectorAll('[data-scrub], [data-parallax], [data-track]')
    );
    var progress = doc.querySelector('[data-progress]');
    var sticky = Array.prototype.slice.call(doc.querySelectorAll('[data-sticky-step]'));
    var ticking = false;

    function frame() {
      ticking = false;
      var vh = window.innerHeight;

      for (var i = pending.length - 1; i >= 0; i--) {
        var box = pending[i].getBoundingClientRect();
        if (box.top < vh * 0.92 && box.bottom > 0) {
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
        if (el.hasAttribute('data-track')) {
          var t = (vh * 0.8 - r.top) / (r.height + vh * 0.3);
          el.style.setProperty('--track', Math.min(1, Math.max(0, t)).toFixed(4));
        }
        if (el.hasAttribute('data-parallax')) {
          var f = parseFloat(el.getAttribute('data-parallax')) || 0;
          el.style.setProperty('--shift', ((p - 0.5) * f * 100).toFixed(2) + 'px');
        }
      });

      /* Scroll-Cinema: ein Fortschritt pro Szene, Beats nur bei Änderung. */
      for (var s = 0; s < scenes.length; s++) {
        var scene = scenes[s];
        var sr = scene.getBoundingClientRect();
        var travel = sr.height - vh;
        var sp = travel > 0 ? Math.min(1, Math.max(0, -sr.top / travel)) : 0;
        if (Math.abs(sp - scene.__last) < 0.002) continue;
        scene.__last = sp;
        scene.style.setProperty('--scene', sp.toFixed(4));

        scene.__beats.forEach(function (beat) {
          var from = parseFloat(beat.getAttribute('data-from')) || 0;
          var to = parseFloat(beat.getAttribute('data-to')) || 1;
          beat.classList.toggle('is-on', sp >= from && sp <= to);
          beat.classList.toggle('is-past', sp > to);
        });

        scene.__depths.forEach(function (el) {
          var n = parseFloat(el.getAttribute('data-scene-depth')) || 0;
          var cap = vh * 0.025;
          var d = Math.max(-cap, Math.min(cap, (sp - 0.5) * n * vh * 0.01));
          el.style.setProperty('--depth', d.toFixed(2) + 'px');
        });
      }

      /* Sticky-Schritte: der Schritt, der die Mitte kreuzt, ist aktiv. */
      if (sticky.length) {
        var mid = vh * 0.52;
        sticky.forEach(function (step) {
          var r = step.getBoundingClientRect();
          step.classList.toggle('is-active', r.top < mid && r.bottom > mid);
        });
      }

      if (progress) {
        var max = doc.documentElement.scrollHeight - vh;
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

    /* Kopfzeile: Hairline erst nach 24 px. */
    var nav = doc.querySelector('.nav');
    if (nav) {
      var onNav = function () {
        nav.classList.toggle('is-stuck', window.scrollY > 24);
      };
      window.addEventListener('scroll', onNav, { passive: true });
      onNav();
    }

    /* Tabs: Pfeiltasten, aria-selected, gleitender Indikator. */
    each(doc.querySelectorAll('[data-tabs]'), function (group) {
      var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'));
      var panels = tabs.map(function (t) {
        return doc.getElementById(t.getAttribute('aria-controls'));
      });
      var indicator = group.querySelector('.tabs__indicator');

      function place(tab) {
        if (!indicator) return;
        indicator.style.width = tab.offsetWidth + 'px';
        indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
      }

      function select(index, focus) {
        tabs.forEach(function (tab, i) {
          var on = i === index;
          tab.setAttribute('aria-selected', on ? 'true' : 'false');
          tab.tabIndex = on ? 0 : -1;
          if (panels[i]) panels[i].hidden = !on;
        });
        place(tabs[index]);
        if (focus) tabs[index].focus();
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () {
          select(i);
        });
        tab.addEventListener('keydown', function (e) {
          var next = null;
          if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
          if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
          if (e.key === 'Home') next = 0;
          if (e.key === 'End') next = tabs.length - 1;
          if (next !== null) {
            e.preventDefault();
            select(next, true);
          }
        });
      });

      var initial = Math.max(0, tabs.findIndex(function (t) {
        return t.getAttribute('aria-selected') === 'true';
      }));
      select(initial);
      window.addEventListener('resize', function () {
        place(tabs[Math.max(0, tabs.findIndex(function (t) {
          return t.getAttribute('aria-selected') === 'true';
        }))]);
      });
    });

    /* Dialoge: natives <dialog>, Fokus kommt von der Plattform. */
    each(doc.querySelectorAll('[data-dialog-open]'), function (trigger) {
      trigger.addEventListener('click', function () {
        var id = trigger.getAttribute('data-dialog-open');
        var dialog = doc.getElementById(id);
        if (!dialog) return;
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
        var first = dialog.querySelector('[autofocus], input, button');
        if (first) first.focus();
      });
    });

    each(doc.querySelectorAll('dialog'), function (dialog) {
      each(dialog.querySelectorAll('[data-dialog-close]'), function (btn) {
        btn.addEventListener('click', function () {
          dialog.close();
        });
      });
      dialog.addEventListener('click', function (e) {
        if (e.target === dialog) dialog.close();
      });
    });

    if (!finePointer) return;

    /* Magnetische Buttons: höchstens 6 px, nie mehr. */
    each(doc.querySelectorAll('[data-magnetic]'), function (el) {
      var strength = parseFloat(el.getAttribute('data-magnetic')) || 6;
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'translate3d(' + (x * strength).toFixed(2) + 'px,' + (y * strength).toFixed(2) + 'px,0)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transform = '';
      });
    });

    /* Lichtpunkt in Karten. */
    each(doc.querySelectorAll('[data-glow], [data-spotlight]'), function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
      });
    });

    /* Kippen: klein halten (max. 6°), zurücksetzen ohne Nachfedern. */
    each(doc.querySelectorAll('[data-tilt]'), function (el) {
      var max = parseFloat(el.getAttribute('data-tilt')) || 4;
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          'perspective(1200px) rotateX(' + (-y * max).toFixed(2) + 'deg) rotateY(' + (x * max).toFixed(2) + 'deg)';
        el.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        el.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
      });
      el.addEventListener('pointerleave', function () {
        el.style.transform = '';
      });
    });
  });
})();
