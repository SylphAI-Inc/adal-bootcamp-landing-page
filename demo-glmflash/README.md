# GLMFlash Landing Page Demo

A framework-free, single-viewport landing page built from the GLMFlash design brief and informed by the AdaL reference site's strong hero hierarchy, pill navigation, expressive display type, and motion-led presentation.

## Run locally

```bash
cd demo-glmflash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Files

- `index.html` — semantic page structure and external font/icon/video sources
- `styles.css` — responsive component styles, tokens, motion, and reduced-motion rules
- `main.js` — mobile menu, count-up metrics, and interaction state
- `assets/logo.webp` — circular GLMFlash mark
- `fonts/GeistPixel-Circle.woff2` — local display fallback
- `DESIGN.md` — product direction and reusable design decisions

## Verification

- Desktop and mobile layouts use the same single-viewport composition.
- Mobile navigation is keyboard-closeable and exposes `aria-expanded`/`aria-controls`.
- Metrics count once when they enter the viewport.
- `prefers-reduced-motion` disables transitions and count animation.
- Background video is muted, inline, looping, and non-interactive.
