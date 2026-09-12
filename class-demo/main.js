const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const mobileBreakpoint = window.matchMedia('(max-width: 720px)');

function setMenu(open) {
  if (!menuToggle || !mobileMenu || !menuOverlay) return;
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.hidden = !open;
  menuOverlay.hidden = !open;
}

menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
menuOverlay?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
mobileBreakpoint.addEventListener('change', ({ matches }) => { if (!matches) setMenu(false); });

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const stats = document.querySelectorAll('.stat');
function animateStat(stat, index) {
  const value = stat.querySelector('strong');
  if (!value || value.dataset.done) return;
  value.dataset.done = 'true';
  const target = Number(value.dataset.target);
  const decimals = Number(value.dataset.decimals || 0);
  if (prefersReducedMotion) { value.textContent = target.toFixed(decimals); return; }
  const start = performance.now() + 480 + index * 90;
  const duration = 1500 + index * 80;
  const tick = (now) => {
    const progress = Math.min(1, Math.max(0, (now - start) / duration));
    const eased = 1 - Math.pow(1 - progress, 3);
    value.textContent = (target * eased).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { animateStat(entry.target, [...stats].indexOf(entry.target)); observer.unobserve(entry.target); }
  }), { threshold: .25 });
  stats.forEach((stat) => observer.observe(stat));
} else { stats.forEach((stat, index) => animateStat(stat, index)); }
