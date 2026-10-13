// @ts-nocheck
// Horizontal scroll + motion engine shared by both portfolio directions.
export function init(root, o = {}) {
  let opts = { lerp: 0.08, par: 1, cursor: true, ...o };
  const spacer = root.querySelector('[data-hs-spacer]');
  const track = root.querySelector('[data-hs-track]');
  const bar = root.querySelector('[data-hs-progress]');
  const label = root.querySelector('[data-hs-current]');
  const counter = root.querySelector('[data-hs-index]');
  const cursor = root.querySelector('[data-cursor]');
  const runner = root.querySelector('[data-runner]');
  const rFace = runner && runner.querySelector('[data-face]');
  const rBody = runner && runner.querySelector('[data-body]');
  const rLegA = runner && runner.querySelector('[data-leg-a]');
  const rLegB = runner && runner.querySelector('[data-leg-b]');
  const rArmA = runner && runner.querySelector('[data-arm-a]');
  const rArmB = runner && runner.querySelector('[data-arm-b]');
  let barRect = null, phase = 0, run = 0, facing = 1;
  const ease = 'cubic-bezier(.16,1,.3,1)';
  let cur = window.scrollY, max = 0, vw = innerWidth, vel = 0, alive = true, raf;
  let mx = vw / 2, my = innerHeight / 2, cx = mx, cy = my, cs = 1, hover = false;
  let pars = [], reveals = [], sections = [], skews = [], magnets = [], mouses = [];
  const absLeft = el => { let x = 0; while (el && el !== track) { x += el.offsetLeft; el = el.offsetParent; } return x; };
  const all = s => [...root.querySelectorAll(s)];

  function hide(el, t) {
    el.style.transition = 'none';
    if (t === 'up') { el.style.opacity = 0; el.style.transform = 'translate3d(0,70px,0)'; }
    else if (t === 'line') el.style.transform = 'translate3d(0,112%,0)';
    else if (t === 'left') { el.style.opacity = 0; el.style.transform = 'translate3d(120px,0,0)'; }
    else if (t === 'clip') el.style.clipPath = 'inset(0 100% 0 0)';
    else if (t === 'clipup') el.style.clipPath = 'inset(100% 0 0 0)';
    else if (t === 'scale') { el.style.opacity = 0; el.style.transform = 'scale(.6)'; }
    else if (t === 'fade') el.style.opacity = 0;
    else if (t === 'width') el.style.transform = 'scaleX(0)';
    else if (t === 'count') el.textContent = '0' + (el.dataset.suffix || '');
  }
  function show(el, t, d) {
    el.style.transition = `transform 1.3s ${ease} ${d}s, opacity 1s ${ease} ${d}s, clip-path 1.5s ${ease} ${d}s`;
    el.style.opacity = ''; el.style.transform = ''; el.style.clipPath = '';
    if (t === 'count') {
      const end = parseFloat(el.dataset.count), suf = el.dataset.suffix || '', t0 = performance.now() + d * 1000;
      const step = now => { const p = Math.min(1, Math.max(0, (now - t0) / 1400)); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))) + suf; if (p < 1 && alive) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }
  }
  function measure() {
    vw = innerWidth;
    max = Math.max(0, track.scrollWidth - vw);
    spacer.style.height = (max + innerHeight) + 'px';
    pars = all('[data-par]').map(el => ({ el, f: parseFloat(el.dataset.par) || 0, x: absLeft(el), w: el.offsetWidth }));
    reveals = all('[data-reveal]').map(el => {
      if (!el.__hs) { el.__hs = 'hidden'; hide(el, el.dataset.reveal); }
      return { el, x: absLeft(el), t: el.dataset.reveal, d: parseFloat(el.dataset.delay || 0) };
    });
    sections = all('[data-hs-section]').map(el => ({ el, x: absLeft(el), label: el.dataset.hsSection }));
    barRect = bar ? bar.parentElement.getBoundingClientRect() : null;
    skews = all('[data-skew]'); magnets = all('[data-magnet]'); mouses = all('[data-mouse]');
  }
  function tick() {
    if (!alive) return;
    const tgt = Math.min(window.scrollY, max), prev = cur;
    cur += (tgt - cur) * opts.lerp; if (Math.abs(tgt - cur) < 0.1) cur = tgt;
    vel += ((cur - prev) - vel) * 0.2;
    track.style.transform = `translate3d(${-cur}px,0,0)`;
    for (const p of pars) p.el.style.transform = `translate3d(${(p.x + p.w / 2 - cur - vw / 2) * p.f * opts.par}px,0,0)`;
    const sk = Math.max(-7, Math.min(7, -vel * 0.12 * opts.par));
    for (const el of skews) el.style.transform = `skewX(${sk}deg)`;
    for (const r of reveals) if (r.el.__hs === 'hidden' && r.x - cur < vw * 0.92) { r.el.__hs = 'shown'; show(r.el, r.t, r.d); }
    if (bar) bar.style.transform = `scaleX(${max ? cur / max : 0})`;
    if (runner && barRect && opts.runner !== false) {
      const p = max ? cur / max : 0, speed = Math.abs(vel);
      run += ((speed > 0.4 ? 1 : 0) - run) * 0.15;
      if (speed > 0.4) facing = vel > 0 ? 1 : -1;
      phase += Math.min(speed, 40) * 0.045 + run * 0.12;
      const s = Math.sin(phase) * run, w = runner.offsetWidth, h = runner.offsetHeight;
      runner.style.transform = `translate3d(${barRect.left + p * barRect.width - w / 2}px,${barRect.top + barRect.height / 2 - h + 4}px,0)`;
      rFace.style.transform = `scaleX(${facing})`;
      rBody.style.transform = `translateY(${-Math.abs(s) * 3}px) rotate(${run * 8}deg)`;
      rLegA.style.transform = `rotate(${s * 40}deg)`; rLegB.style.transform = `rotate(${-s * 40}deg)`;
      rArmA.style.transform = `rotate(${-s * 50}deg)`; rArmB.style.transform = `rotate(${s * 50}deg)`;
    }
    let i = 0; sections.forEach((s, k) => { if (s.x - cur <= vw * 0.45) i = k; });
    if (label && sections[i] && label.textContent !== sections[i].label) label.textContent = sections[i].label;
    if (counter) { const t = String(i + 1).padStart(2, '0') + ' / ' + String(sections.length).padStart(2, '0'); if (counter.textContent !== t) counter.textContent = t; }
    const nx = mx / vw - 0.5, ny = my / innerHeight - 0.5;
    for (const el of mouses) { const f = parseFloat(el.dataset.mouse) * opts.par; el.style.transform = `translate3d(${nx * f}px,${ny * f}px,0)`; }
    for (const el of magnets) {
      const b = el.getBoundingClientRect(), dx = mx - (b.left + b.width / 2), dy = my - (b.top + b.height / 2);
      const near = Math.hypot(dx, dy) < Math.max(b.width, b.height) * 0.9;
      el.style.transition = 'transform .5s ' + ease;
      el.style.transform = near ? `translate3d(${dx * 0.25}px,${dy * 0.35}px,0)` : '';
    }
    if (cursor) {
      cx += (mx - cx) * 0.2; cy += (my - cy) * 0.2; cs += ((hover ? 4.2 : 1) - cs) * 0.15;
      cursor.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%) scale(${cs})`;
    }
    raf = requestAnimationFrame(tick);
  }
  const onMove = e => { mx = e.clientX; my = e.clientY; };
  const onOver = e => { hover = !!e.target.closest('a,button,[data-hover]'); };
  const onWheel = e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) window.scrollBy(0, e.deltaX); };
  const onClick = e => {
    const a = e.target.closest('[data-goto]'); if (!a) return;
    const t = root.querySelector('#' + a.dataset.goto); if (!t) return;
    e.preventDefault(); window.scrollTo(0, Math.min(absLeft(t), max));
  };
  // state-machine diagrams + blinking labels
  const sm = setInterval(() => {
    all('[data-sm]').forEach(g => {
      const nodes = [...g.querySelectorAll('[data-sm-node]')];
      g.__i = ((g.__i ?? -1) + 1) % nodes.length;
      nodes.forEach((n, k) => { const on = k === g.__i; n.style.background = on ? g.dataset.fg : 'transparent'; n.style.color = on ? g.dataset.bg : g.dataset.fg; });
    });
    all('[data-blink]').forEach(b => { b.style.visibility = b.style.visibility === 'hidden' ? '' : 'hidden'; });
  }, 850);
  const io = new IntersectionObserver(es => es.forEach(en => { const v = en.target; if (en.isIntersecting) { v.muted = true; v.play().catch(() => {}); } else v.pause(); }), { threshold: 0.2 });
  all('video[data-autoplay]').forEach(v => io.observe(v));
  const ro = new ResizeObserver(() => measure()); ro.observe(track);

  function applyCursor() {
    const on = opts.cursor && matchMedia('(pointer:fine)').matches;
    if (cursor) cursor.style.display = on ? '' : 'none';
    if (runner) runner.style.display = opts.runner === false ? 'none' : '';
    document.documentElement.toggleAttribute('data-hs-cursor', on);
  }
  addEventListener('scroll', () => {}, { passive: true });
  addEventListener('resize', measure);
  addEventListener('mousemove', onMove, { passive: true });
  addEventListener('mouseover', onOver, { passive: true });
  addEventListener('wheel', onWheel, { passive: true });
  root.addEventListener('click', onClick);
  applyCursor();
  measure();
  requestAnimationFrame(() => requestAnimationFrame(tick));
  document.fonts && document.fonts.ready.then(measure);
  return {
    set(n) { opts = { ...opts, ...n }; applyCursor(); },
    measure,
    destroy() {
      alive = false; cancelAnimationFrame(raf); clearInterval(sm); io.disconnect(); ro.disconnect();
      removeEventListener('resize', measure); removeEventListener('mousemove', onMove); removeEventListener('mouseover', onOver);
      removeEventListener('wheel', onWheel); root.removeEventListener('click', onClick);
      document.documentElement.removeAttribute('data-hs-cursor');
    }
  };
}
