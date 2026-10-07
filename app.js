/* ==========================================================
   YONIUS — interacciones
   Intro con el alfabeto griego, plato que se rompe (¡Opa!),
   carta con filtro vegetariano, anillo 3D de fotos y estado
   abierto / cerrado en hora de Lloret.
   ========================================================== */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const rand = (a, b) => a + Math.random() * (b - a);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const motion = hasGSAP && !reduced;
if (hasGSAP) gsap.registerPlugin(ScrollTrigger);
// si el navegador congela los frames (pestaña oculta), se completa la animación
const watchdog = (tl, ms) => { setTimeout(() => { if (tl.progress() < 1) tl.progress(1); }, ms); return tl; };
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

/* ----------------------------------------------------------
   DATOS DEL NEGOCIO
   ---------------------------------------------------------- */
// minutos desde medianoche · 0 = domingo
const HOURS = { 0: [[720, 1410]], 1: null, 2: [[720, 1410]], 3: [[720, 1410]], 4: [[720, 1410]], 5: [[720, 1410]], 6: [[720, 1410]] };
const DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const MENU = {
  mezze: [
    { n: 'Ensalada griega', g: 'Χωριάτικη', d: 'Tomate, pepino, pimiento, cebolla, olivas y queso feta.', p: '7,50', v: 1 },
    { n: 'Ensalada César', d: 'Lechuga, pan tostado, pechuga de pollo, zumo de limón, huevo y mayonesa.', p: '7,50' },
    { n: 'Dolmadakia', g: 'Ντολμαδάκια', d: 'Hojas de parra rellenas de arroz (5 unidades).', p: '6,00', v: 1 },
    { n: 'Tzatziki', g: 'Τζατζίκι', d: 'Crema de yogur griego con pepino y ajo.', p: '4,00', v: 1 },
    { n: 'Melitzanosalata', g: 'Μελιτζανοσαλάτα', d: 'Berenjena asada con pimientos, ajo y perejil.', p: '4,50', v: 1 },
    { n: 'Tirokafteri', g: 'Τυροκαυτερή', d: 'Crema de yogur griego con queso y un punto picante.', p: '4,50', v: 1 },
    { n: 'Queso feta', g: 'Φέτα', d: 'Feta griego.', p: '5,50', v: 1 },
    { n: 'Saganaki', g: 'Σαγανάκι', d: 'Queso kefalotyri a la plancha.', p: '7,50', v: 1 },
    { n: 'Bouyiourdi', g: 'Μπουγιουρντί', d: 'Queso griego picante con tomate y pimiento al horno.', p: '8,00', v: 1 },
    { n: 'Halloumi', g: 'Χαλλούμι', d: 'Queso halloumi. Ración 7,50 € · en plato 9,50 €.', p: '7,50', v: 1 },
    { n: 'Burek + ayran', g: 'Μπουρέκι', d: 'Burek de queso acompañado de ayran.', p: '6,50', v: 1 },
    { n: 'Patatas fritas', d: 'Ración.', p: '3,80', v: 1 },
    { n: 'Patatas bravas', d: 'Patatas con salsa picante.', p: '4,20', v: 1 }
  ],
  gyros: [
    { n: 'Gyro de cerdo o pollo', g: 'Γύρος', d: 'Pita, tzatziki, carne de cerdo o pollo, tomate, patatas y cebolla.', p: '7,00' },
    { n: 'Gyro falafel', g: 'Φαλάφελ', d: 'El clásico en pita, con falafel.', p: '8,00', v: 1 },
    { n: 'Gyro mixto', d: 'Pollo y cerdo en la misma pita.', p: '8,00' },
    { n: 'Combinado gyro', d: 'El gyros, servido en plato.', p: '10,50' },
    { n: 'Combinado gyro mixto', d: 'Pollo y cerdo, servido en plato.', p: '11,50' },
    { n: 'Combinado carnes', d: 'Pita, tzatziki, gyros de pollo o cerdo, tomate, patatas y cebolla.', p: '19,50' },
    { n: 'Souvlaki de pollo o cerdo', g: 'Σουβλάκι', d: 'Brochetas de pollo o de cerdo.', p: '11,00' },
    { n: 'Skepasti', g: 'Σκεπαστή', d: 'Doble pita, tzatziki, gyros de cerdo, tomate, patatas y cebolla.', p: '10,50' },
    { n: 'Loukaniko', g: 'Λουκάνικο', d: 'Salchicha especial con patatas fritas.', p: '9,00' }
  ],
  grill: [
    { n: 'Bifteki relleno de queso', g: 'Μπιφτέκι', d: 'Hamburguesa griega de cerdo rellena de queso feta.', p: '12,50' },
    { n: 'Kebab de ternera relleno', g: 'Κεμπάπ', d: 'Rollo de ternera relleno de queso o philadelphia, con patatas, tzatziki y verduras.', p: '11,00' },
    { n: 'Pita souvlaki', g: 'Πίτα σουβλάκι', d: 'Pita con pincho de cerdo o pollo, patatas, tzatziki y verduras.', p: '8,50' },
    { n: 'Musaka', g: 'Μουσακάς', d: 'Berenjenas, carne picada, salsa bechamel y queso rallado.', p: '11,00' }
  ],
  dulces: [
    { n: 'Baklava', g: 'Μπακλαβάς', d: 'Hojaldre griego en jarabe de miel y canela. Pequeño 4,50 € · grande 5,50 €.', p: '4,50', v: 1 },
    { n: 'Kadaifi', g: 'Κανταΐφι', d: 'Pastel de cabello de ángel relleno de frutos secos.', p: '4,50', v: 1 },
    { n: 'Karidopita', g: 'Καρυδόπιτα', d: 'Pastel griego de miel con canela, clavo y brandy, servido con helado.', p: '5,50', v: 1 },
    { n: 'Portokalopita', g: 'Πορτοκαλόπιτα', d: 'Yogur, láminas crujientes de pasta filo y un intenso almíbar de naranja.', p: '5,50', v: 1 }
  ]
};

const OPA = [
  { ...MENU.gyros[0], tag: 'El clásico' },
  { ...MENU.gyros[6] },
  { ...MENU.grill[3], tag: 'Al horno' },
  { ...MENU.mezze[4], tag: 'Favorito en las reseñas' },
  { ...MENU.mezze[8] },
  { ...MENU.mezze[7] },
  { ...MENU.gyros[7] },
  { ...MENU.grill[0] },
  { ...MENU.dulces[0], tag: 'Con miel' },
  { ...MENU.dulces[2] },
  { ...MENU.dulces[3] },
  { ...MENU.mezze[9] },
  { ...MENU.mezze[2] },
  { ...MENU.mezze[5], tag: 'Pica un poco' },
  { ...MENU.mezze[3] },
  { ...MENU.mezze[0] },
  { ...MENU.grill[1] },
  { ...MENU.gyros[8] }
];

const PHOTOS = [
  { src: 'assets/img/terraza-flores.jpg', cap: '“Best gyros, come and try”' },
  { src: 'assets/img/fachada-noche.jpg', cap: '“Full house, full hearts. Thank you!” 🩵' },
  { src: 'assets/img/gyro-papel.jpg', cap: 'El gyros, envuelto y listo' },
  { src: 'assets/img/sala.jpg', cap: 'Dentro, azul y blanco' },
  { src: 'assets/img/terraza-dia.jpg', cap: '“Souvlaki, tzatziki and summer memories!”' },
  { src: 'assets/img/rincon.jpg', cap: 'El rincón de los cojines' },
  { src: 'assets/img/gyro-pita.jpg', cap: 'Gyro recién hecho' },
  { src: 'assets/img/terraza-cojines.jpg', cap: 'La terraza a mediodía' }
];

const REVIEWS = [
  ['Nos ha encantado descubrir Yonius. Un restaurante griego familiar, de esos sitios donde se nota que hay cariño por lo que hacen.', 'Reseña en Google'],
  ['Mención especial a la Melitzanosalata: buenísima, casera y en su punto exacto de sabor. Un griego totalmente recomendado.', 'Reseña en Google'],
  ['Toda la comida deliciosa, muy tradicional y con ingredientes frescos.', 'Reseña en Google'],
  ['Buena comida, buena atención por parte de las camareras y buen precio. ¡Es un sitio de 10!', 'Reseña en Google'],
  ['Es más agradable comer en su terraza. El servicio es rápido y el personal atento. ¡No dejéis de probar sus postres!', 'Reseña en Google'],
  ['Excelente atención de las camareras y la comida exquisita. Se los recomiendo.', 'Reseña en Google']
];

/* ----------------------------------------------------------
   HORA DE LLORET · abierto / cerrado
   ---------------------------------------------------------- */
function madridNow() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')), min: (+get('hour') % 24) * 60 + +get('minute') };
}
const hhmm = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
function statusText() {
  const { day, min } = madridNow();
  const today = HOURS[day] || [];
  for (const [a, b] of today) {
    if (min >= a && min < b) return b - min <= 30 ? ['soon', `Cierra pronto · ${hhmm(b)}`] : ['open', `Abierto · hasta las ${hhmm(b)}`];
    if (min < a && a - min <= 60) return ['soon', `Abre a las ${hhmm(a)}`];
    if (min < a) return ['closed', `Cerrado · abre a las ${hhmm(a)}`];
  }
  for (let k = 1; k <= 7; k++) {
    const d = (day + k) % 7;
    if (HOURS[d]) return ['closed', `Cerrado · abre ${k === 1 ? 'mañana' : 'el ' + DAYS[d].toLowerCase()} a las ${hhmm(HOURS[d][0][0])}`];
  }
  return ['closed', 'Cerrado'];
}
function paintStatus() {
  const [state, txt] = statusText();
  $$('[data-status]').forEach((el) => { el.dataset.state = state; $('b', el).textContent = txt; });
}
function paintHours() {
  const t = $('#hours'); if (!t) return;
  const { day } = madridNow();
  [1, 2, 3, 4, 5, 6, 0].forEach((d) => {
    const tr = document.createElement('tr');
    if (d === day) tr.className = 'is-today';
    tr.innerHTML = `<td>${DAYS[d]}</td><td>${HOURS[d] ? HOURS[d].map(([a, b]) => `${hhmm(a)} – ${hhmm(b)}`).join(' · ') : 'Cerrado'}</td>`;
    t.appendChild(tr);
  });
}
paintStatus(); paintHours();
setInterval(paintStatus, 60000);

/* ----------------------------------------------------------
   SCROLL SUAVE + NAV
   ---------------------------------------------------------- */
let lenis = null;
if (motion && window.Lenis) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const nav = $('#nav');
const links = $('#navLinks');
const burger = $('#burger');
let lastY = 0;
function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('is-solid', y > 40);
  nav.classList.toggle('is-hidden', y > lastY && y > 700 && !links.classList.contains('is-open'));
  lastY = y;
}
addEventListener('scroll', onScroll, { passive: true });
burger.addEventListener('click', () => {
  const open = !links.classList.contains('is-open');
  links.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
});
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href');
  const target = id.length > 1 ? $(id) : document.body;
  if (!target) return;
  e.preventDefault();
  links.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false');
  if (lenis) lenis.scrollTo(target, { offset: id === '#top' ? 0 : -70, duration: 1.4 });
  else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
}));

/* ----------------------------------------------------------
   VÍDEOS · se cargan al acercarse y se pausan fuera de vista
   ---------------------------------------------------------- */
const vio = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target;
  if (e.isIntersecting) {
    if (!v.getAttribute('src')) v.src = v.dataset.src;
    if (!reduced) v.play().catch(() => {});
  } else v.pause();
}), { rootMargin: '250px 0px', threshold: 0.01 });
$$('video[data-auto]').forEach((v) => vio.observe(v));
$$('.phone__sound').forEach((b) => b.addEventListener('click', () => {
  const v = $('video', b.parentElement);
  const willUnmute = v.muted;
  $$('.phone video').forEach((o) => { o.muted = true; });
  $$('.phone__sound i').forEach((i) => { i.className = 'ph-light ph-speaker-slash'; });
  if (willUnmute) { v.muted = false; v.play().catch(() => {}); $('i', b).className = 'ph-light ph-speaker-high'; }
}));

/* ----------------------------------------------------------
   INTRO · el alfabeto griego se ordena en YONIUS
   ---------------------------------------------------------- */
const GREEK = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
const intro = $('#intro');
let seen = false;
try { seen = sessionStorage.getItem('yonius-intro') === '1'; sessionStorage.setItem('yonius-intro', '1'); } catch (e) { /* sin storage */ }

function heroIn() {
  if (!motion) return;
  return watchdog(gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from('.hero__title .line > span', { yPercent: 110, duration: 1.4, stagger: 0.1 })
    .from('.arch', { clipPath: 'inset(100% 0 0 0 round 999px 999px 18px 18px)', duration: 1.6, ease: 'expo.inOut' }, 0)
    .from('.sun', { y: 120, scale: .7, opacity: 0, duration: 1.8 }, 0.2)
    .from('.hero .eyebrow, .hero__lead, .hero__cta, .hero__facts', { y: 26, opacity: 0, duration: 1.1, stagger: 0.08 }, 0.5)
    .from('.badge, .badge__core', { scale: .4, opacity: 0, duration: 1.2 }, 0.8), 4500);
}

if (!motion || seen) { intro.remove(); heroIn(); }
else {
  document.body.classList.add('is-locked');
  const spans = $$('.intro__word span');
  const tl = gsap.timeline({ onComplete: () => { intro.remove(); document.body.classList.remove('is-locked'); } });
  watchdog(tl, 8000);
  tl.from('.intro__word', { opacity: 0, duration: 0.4 })
    .to('.intro__key rect', { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0);
  spans.forEach((s, i) => {
    const o = { t: 0 };
    tl.to(o, {
      t: 1, duration: 0.55 + i * 0.12, ease: 'none',
      onUpdate: () => { if (o.t < 1) s.textContent = GREEK[Math.floor(Math.random() * GREEK.length)]; },
      onComplete: () => { s.textContent = s.dataset.to; gsap.fromTo(s, { color: '#E0A93E' }, { color: '#F6F3EC', duration: 0.6 }); }
    }, 0.1);
  });
  tl.from('.intro__sub', { y: 12, opacity: 0, duration: 0.6 }, 0.9)
    .to(intro, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, '+=0.45')
    .add(heroIn, '-=0.75');
  intro.addEventListener('click', () => tl.progress(1));
}

/* ----------------------------------------------------------
   ¡OPA! · el plato que se rompe
   ---------------------------------------------------------- */
function keyRing(r1, r2, units) {
  let d = '';
  const P = (a, r) => `${(100 + Math.cos(a) * r).toFixed(2)} ${(100 + Math.sin(a) * r).toFixed(2)}`;
  const span = (Math.PI * 2) / units;
  const pts = [[0, 0], [0, 1], [0.78, 1], [0.78, 0.28], [0.3, 0.28], [0.3, 0.64], [0.55, 0.64]];
  for (let k = 0; k < units; k++) {
    const a0 = k * span;
    d += 'M' + pts.map(([u, v]) => P(a0 + u * span, r1 + v * (r2 - r1))).join(' L');
  }
  return d;
}
const KEY_PATH = keyRing(79.5, 91, 34);
const plateSVG = (id) => `<svg viewBox="0 0 200 200" aria-hidden="true">
  <defs><radialGradient id="pg${id}" cx="44%" cy="38%" r="68%"><stop offset="0" stop-color="#ffffff"/><stop offset=".72" stop-color="#F4F2EB"/><stop offset="1" stop-color="#D9D4C6"/></radialGradient></defs>
  <circle cx="100" cy="100" r="99" fill="url(#pg${id})"/>
  <circle cx="100" cy="100" r="95" fill="none" stroke="#1F4FA0" stroke-width="1.4"/>
  <circle cx="100" cy="100" r="76" fill="none" stroke="#1F4FA0" stroke-width="1.2"/>
  <path d="${KEY_PATH}" fill="none" stroke="#1F4FA0" stroke-width="1.7" stroke-linejoin="miter"/>
  <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(15,26,46,.07)" stroke-width="10"/>
  <g fill="none" stroke="#6E7B3A" stroke-width="1.6" stroke-linecap="round"><path d="M78 124 Q100 112 122 124"/></g>
  <g fill="#6E7B3A" opacity=".85"><ellipse cx="86" cy="117" rx="5" ry="2.2" transform="rotate(-35 86 117)"/><ellipse cx="96" cy="113" rx="5" ry="2.2" transform="rotate(-15 96 113)"/><ellipse cx="106" cy="113" rx="5" ry="2.2" transform="rotate(15 106 113)"/><ellipse cx="116" cy="117" rx="5" ry="2.2" transform="rotate(35 116 117)"/></g>
</svg>`;

const table = $('#table');
const plate = $('#plate');
const shardsBox = $('#shards');
const shout = $('#shout');
const dishBox = $('#dish');
const againBtn = $('#again');
let broken = 0;
let bag = [];
let busy = false;
plate.insertAdjacentHTML('afterbegin', plateSVG('p'));

let actx = null;
function crashSound() {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const now = actx.currentTime;
    const len = Math.floor(actx.sampleRate * 0.5);
    const buf = actx.createBuffer(1, len, actx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 4);
    const src = actx.createBufferSource(); src.buffer = buf;
    const hp = actx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1400;
    const g = actx.createGain(); g.gain.value = 0.28;
    src.connect(hp).connect(g).connect(actx.destination); src.start(now);
    for (let k = 0; k < 6; k++) {
      const o = actx.createOscillator(); const og = actx.createGain();
      o.type = 'triangle'; o.frequency.value = rand(2400, 5200);
      const t = now + rand(0.04, 0.4);
      og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.06, t + 0.004); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      o.connect(og).connect(actx.destination); o.start(t); o.stop(t + 0.25);
    }
  } catch (e) { /* sin audio */ }
}

function nextDish() {
  if (!bag.length) bag = OPA.map((_, i) => i).sort(() => Math.random() - 0.5);
  return OPA[bag.pop()];
}

function showDish(d) {
  dishBox.innerHTML = `
    <p class="dish__greek">${d.g || 'Καλή όρεξη'}</p>
    <h3 class="dish__name">${d.n}${d.tag ? `<span class="dish__tag">${d.tag}</span>` : ''}</h3>
    <p class="dish__desc">${d.d}</p>
    <p class="dish__price">${d.p} €</p>
    <div class="dish__foot"><span class="dish__count">${broken} ${broken === 1 ? 'plato roto' : 'platos rotos'}</span></div>`;
  $('.dish__foot', dishBox).appendChild(againBtn);
  againBtn.hidden = false;
  if (motion) gsap.from($$('.dish > *', dishBox), { y: 18, opacity: 0, filter: 'blur(6px)', duration: 0.7, ease: 'expo.out', stagger: 0.06 });
}

function shatter() {
  if (busy || plate.classList.contains('is-broken')) return;
  busy = true;
  broken++;
  crashSound();
  const N = 9;
  const c = { x: 50 + rand(-9, 9), y: 50 + rand(-9, 9) };
  const base = rand(0, Math.PI * 2);
  const angles = Array.from({ length: N }, (_, i) => base + (i + rand(-0.32, 0.32)) * (Math.PI * 2 / N));
  const edge = (a) => ({ x: 50 + Math.cos(a) * 51, y: 50 + Math.sin(a) * 51 });
  const mids = angles.map((a) => { const r = rand(16, 30), j = rand(-0.22, 0.22); return { x: c.x + Math.cos(a + j) * r, y: c.y + Math.sin(a + j) * r }; });
  shardsBox.innerHTML = '';
  const pieces = angles.map((a, i) => {
    const a2 = angles[(i + 1) % N] + (i === N - 1 ? Math.PI * 2 : 0);
    const pts = [c, mids[i], edge(a)];
    for (let k = 1; k < 4; k++) pts.push(edge(a + (a2 - a) * k / 4));
    pts.push(edge(a2), mids[(i + 1) % N]);
    const el = document.createElement('div');
    el.className = 'shard';
    el.style.clipPath = `polygon(${pts.map((p) => `${p.x.toFixed(2)}% ${p.y.toFixed(2)}%`).join(',')})`;
    el.innerHTML = plateSVG('s' + i);
    shardsBox.appendChild(el);
    const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length - 50;
    const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length - 50;
    const len = Math.hypot(cx, cy) || 1;
    return { el, dx: cx / len, dy: cy / len };
  });
  plate.classList.add('is-broken');

  const d = nextDish();
  if (!motion) { shardsBox.innerHTML = ''; showDish(d); busy = false; return; }

  gsap.fromTo(table, { rotation: -2 }, { rotation: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
  pieces.forEach(({ el, dx, dy }) => {
    const dist = rand(90, 220);
    gsap.timeline()
      .to(el, { x: dx * dist, y: dy * dist - rand(30, 90), rotation: rand(-140, 140), duration: 0.45, ease: 'power3.out' })
      .to(el, { y: `+=${rand(380, 560)}`, rotation: `+=${rand(-90, 90)}`, opacity: 0, duration: 0.95, ease: 'power2.in' });
  });
  gsap.timeline()
    .fromTo(shout, { scale: 0.3, opacity: 0, rotation: -24 }, { scale: 1, opacity: 1, rotation: -8, duration: 0.5, ease: 'back.out(3)' })
    .to(shout, { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, '+=0.55');
  gsap.delayedCall(0.55, () => { showDish(d); busy = false; });
}

function newPlate() {
  if (busy) return;
  shardsBox.innerHTML = '';
  plate.classList.remove('is-broken');
  $('.plate__hint', plate).textContent = '¡Otra vez!';
  if (motion) gsap.fromTo(plate, { y: -260, rotation: -30, opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.9, ease: 'bounce.out' });
  plate.focus({ preventScroll: true });
}
plate.addEventListener('click', shatter);
againBtn.addEventListener('click', newPlate);
table.addEventListener('click', (e) => { if (e.target === table && plate.classList.contains('is-broken')) newPlate(); });

/* ----------------------------------------------------------
   CARTA · pestañas + filtro vegetariano
   ---------------------------------------------------------- */
const menuEl = $('#menu');
const tabs = $$('.tabs [role="tab"]');
const ink = $('.tabs__ink');
const veg = $('#vegOnly');
let cat = 'mezze';

function moveInk() {
  const t = tabs.find((b) => b.dataset.cat === cat);
  ink.style.width = t.offsetWidth + 'px';
  ink.style.transform = `translate(${t.offsetLeft}px, ${t.offsetTop}px)`;
  ink.style.height = t.offsetHeight + 'px';
}
function renderMenu(animate = true) {
  const list = MENU[cat].filter((i) => !veg.checked || i.v);
  menuEl.innerHTML = list.length ? list.map((i) => `
    <li class="item">
      <p class="item__name">${i.n}${i.g ? `<small>${i.g}</small>` : ''}${i.v ? '<i class="ph-light ph-leaf" title="Vegetariano"></i>' : ''}</p>
      <p class="item__price">${i.p} €</p>
      <p class="item__desc">${i.d}</p>
    </li>`).join('') : '<li class="menu__empty">En esta sección no hay platos vegetarianos. Prueba en Entrantes o Postres.</li>';
  if (animate && motion) gsap.from($$('.item', menuEl), { y: 22, opacity: 0, duration: 0.7, ease: 'expo.out', stagger: 0.035 });
}
tabs.forEach((b) => b.addEventListener('click', () => {
  cat = b.dataset.cat;
  tabs.forEach((x) => x.setAttribute('aria-selected', String(x === b)));
  moveInk(); renderMenu();
}));
$('.tabs').addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
  const i = tabs.findIndex((b) => b.dataset.cat === cat);
  const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
  n.focus(); n.click();
});
veg.addEventListener('change', () => renderMenu());
renderMenu(false);
moveInk();
addEventListener('resize', moveInk);
if (document.fonts) document.fonts.ready.then(moveInk);

/* ----------------------------------------------------------
   TERRAZA · anillo 3D que se arrastra
   ---------------------------------------------------------- */
const ring = $('#ring');
const spin = $('#ringSpin');
const cap = $('#ringCap');
const N = PHOTOS.length;
const STEP = 360 / N;
let rot = 0, vel = 0, radius = 400, dragging = false, ringVisible = false, autoOn = !reduced, snapTween = null;
const cards = PHOTOS.map((p, i) => {
  const el = document.createElement('div');
  el.className = 'ring__card';
  el.innerHTML = `<img src="${p.src}" alt="${p.cap.replace(/[“”"]/g, '')}" loading="lazy" draggable="false">`;
  el.dataset.i = i;
  spin.appendChild(el);
  return el;
});
function layoutRing() {
  const w = cards[0].offsetWidth || 240;
  radius = Math.round((w / 2) / Math.tan(Math.PI / N) * 1.18);
  cards.forEach((c, i) => { c.style.transform = `rotateY(${i * STEP}deg) translateZ(${radius}px)`; });
  paintRing();
}
function frontIndex() { return ((Math.round(-rot / STEP) % N) + N) % N; }
let lastFront = -1;
function paintRing() {
  spin.style.transform = `translateZ(${-radius}px) rotateY(${rot}deg)`;
  cards.forEach((c, i) => {
    let a = ((i * STEP + rot) % 360 + 540) % 360 - 180;
    const k = Math.cos(a * Math.PI / 180);
    c.style.filter = `brightness(${0.45 + 0.55 * Math.max(0, k)})`;
  });
  const f = frontIndex();
  if (f !== lastFront) { lastFront = f; cap.textContent = PHOTOS[f].cap; }
}
function snapTo(target) {
  if (snapTween) snapTween.kill();
  if (!hasGSAP) { rot = target; paintRing(); return; }
  const o = { r: rot };
  snapTween = gsap.to(o, { r: target, duration: reduced ? 0.01 : 0.9, ease: 'expo.out', onUpdate: () => { rot = o.r; paintRing(); } });
}
function ringLoop() {
  if (!dragging && !snapTween?.isActive()) {
    if (Math.abs(vel) > 0.02) { rot += vel; vel *= 0.94; if (Math.abs(vel) <= 0.02) snapTo(Math.round(rot / STEP) * STEP); }
    else if (autoOn) rot -= 0.045;
    paintRing();
  }
  if (ringVisible) requestAnimationFrame(ringLoop);
}
new IntersectionObserver(([e]) => { ringVisible = e.isIntersecting; if (ringVisible) requestAnimationFrame(ringLoop); }, { threshold: 0.05 }).observe(ring);
let startX = 0, lastX = 0, moved = 0;
ring.addEventListener('pointerdown', (e) => {
  dragging = true; moved = 0; startX = lastX = e.clientX; vel = 0; autoOn = false;
  if (snapTween) snapTween.kill();
  ring.classList.add('is-drag');
  ring.setPointerCapture(e.pointerId);
});
ring.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx);
  rot += dx * 0.22; vel = dx * 0.22; paintRing();
});
function endDrag(e) {
  if (!dragging) return;
  dragging = false; ring.classList.remove('is-drag');
  if (moved < 6) {
    const hit = document.elementFromPoint(e.clientX, e.clientY)?.closest('.ring__card');
    if (hit) openLB(+hit.dataset.i);
    vel = 0;
  }
  if (Math.abs(vel) < 0.5) snapTo(Math.round(rot / STEP) * STEP);
  setTimeout(() => { autoOn = !reduced; }, 5000);
}
ring.addEventListener('pointerup', endDrag);
ring.addEventListener('pointercancel', endDrag);
function stepRing(dir) { autoOn = false; vel = 0; snapTo(Math.round(rot / STEP) * STEP - dir * STEP); setTimeout(() => { autoOn = !reduced; }, 6000); }
$$('[data-ring]').forEach((b) => b.addEventListener('click', () => stepRing(+b.dataset.ring)));
ring.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); stepRing(1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); stepRing(-1); }
  if (e.key === 'Enter') openLB(frontIndex());
});
layoutRing();
addEventListener('resize', layoutRing);

/* ----------------------------------------------------------
   LIGHTBOX
   ---------------------------------------------------------- */
const lb = $('#lb');
function openLB(i) {
  const p = PHOTOS[i];
  $('img', lb).src = p.src; $('img', lb).alt = p.cap.replace(/[“”"]/g, '');
  $('.lb__cap', lb).textContent = p.cap;
  lb.hidden = false; lenis?.stop();
  $('.lb__close', lb).focus();
  if (motion) gsap.fromTo($('img', lb), { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'expo.out' });
}
function closeLB() { lb.hidden = true; lenis?.start(); ring.focus({ preventScroll: true }); }
$('.lb__close', lb).addEventListener('click', closeLB);
lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) closeLB(); });

/* ----------------------------------------------------------
   RESEÑAS
   ---------------------------------------------------------- */
const rvHTML = REVIEWS.map(([t, w]) => `<figure class="rv"><span class="rv__stars" aria-label="5 estrellas">★★★★★</span><p>«${t}»</p><cite>${w}</cite></figure>`).join('');
$('#rvTrack').innerHTML = rvHTML + rvHTML.replace(/<figure class="rv">/g, '<figure class="rv" aria-hidden="true">');

/* ----------------------------------------------------------
   ANIMACIONES DE SCROLL
   ---------------------------------------------------------- */
if (motion) {
  gsap.to('.sun', { yPercent: 40, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.arch', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  const reveal = (sel, trig, vars = {}) => gsap.from(sel, { y: 50, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1, ...vars, scrollTrigger: { trigger: trig || sel, start: 'top 82%' } });
  reveal('.opa__head > *', '.opa__head');
  gsap.from('.table', { scale: 0.7, rotation: -40, opacity: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.opa__stage', start: 'top 75%' } });
  reveal('.dish', '.opa__stage', { x: 40, y: 0 });
  reveal('.carta__head > div > *', '.carta__head');
  gsap.from('.carta__photo', { scale: 0.5, rotation: -30, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.carta__head', start: 'top 80%' } });
  reveal('.terraza__head > *', '.terraza__head');
  gsap.from('.ring__card', { opacity: 0, duration: 1.4, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: '.ring', start: 'top 80%' } });
  reveal('.reels__copy > *', '.reels');
  gsap.from('.phone', { y: 120, rotation: (i) => (i ? 6 : -6), opacity: 0, duration: 1.5, ease: 'expo.out', stagger: 0.15, scrollTrigger: { trigger: '.phones', start: 'top 85%' } });
  reveal('.reviews__head > *', '.reviews');
  reveal('.visit__card > *', '.visit', { stagger: 0.05 });
  gsap.from('.visit__map', { clipPath: 'inset(0 0 100% 0 round 28px)', duration: 1.5, ease: 'expo.inOut', scrollTrigger: { trigger: '.visit', start: 'top 75%' } });
  gsap.from('.foot__big', { yPercent: 40, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.foot', start: 'top 85%' } });
  addEventListener('load', () => ScrollTrigger.refresh());
}
})();
