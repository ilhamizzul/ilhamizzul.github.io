(function () {
  var root = document.documentElement;

  function setTheme(dark) {
    root.className = dark ? 't-dark' : 't-light';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }

  function setMenu(open) {
    var menu = document.querySelector('[data-menu]');
    var btn = document.querySelector('.menu-btn');
    if (!menu) return;
    menu.hidden = !open;
    if (btn) btn.setAttribute('aria-expanded', String(open));
  }

  function setMap(wrap, after) {
    wrap.classList.toggle('mode-after', after);
    wrap.classList.toggle('mode-before', !after);
    wrap.querySelectorAll('[data-seg]').forEach(function (seg) {
      var on = (seg.getAttribute('data-seg') === 'after') === after;
      seg.classList.toggle('on', on);
      seg.setAttribute('aria-pressed', String(on));
    });
  }

  function setFlow(wrap, n) {
    wrap.className = wrap.className.replace(/\bst-\d\b/, 'st-' + n);
    wrap.setAttribute('data-step', String(n));
    wrap.querySelectorAll('[data-action="flow-go"]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-step') === String(n)));
    });
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var action = el.getAttribute('data-action');
    if (action === 'theme') {
      setTheme(!root.classList.contains('t-dark'));
    } else if (action === 'menu') {
      var menu = document.querySelector('[data-menu]');
      setMenu(menu ? menu.hidden : false);
    } else if (action === 'map-before' || action === 'map-after') {
      var wrap = el.closest('[data-map]');
      if (wrap) setMap(wrap, action === 'map-after');
    } else if (action.indexOf('flow-') === 0) {
      var flow = el.closest('[data-flow]');
      if (!flow) return;
      var cur = parseInt(flow.getAttribute('data-step') || '1', 10);
      var n = action === 'flow-go' ? parseInt(el.getAttribute('data-step'), 10)
        : action === 'flow-next' ? (cur % 7) + 1 : ((cur + 5) % 7) + 1;
      setFlow(flow, n);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
})();
