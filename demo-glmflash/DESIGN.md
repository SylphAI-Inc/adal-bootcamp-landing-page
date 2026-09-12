# GLMFlash Landing Page Design

## Product direction
GLMFlash is presented as a production-grade intelligence platform for enterprise teams. The voice is concise, confident, and technical without sounding cold. The first viewport prioritizes one promise, one action, proof of adoption, and measurable platform performance.

## Reference-derived decisions
- **Composition:** A single, full-bleed viewport keeps attention on the promise. Header, centered hero, and metrics footer form a deliberate three-zone hierarchy.
- **Hierarchy:** The headline is the visual anchor; the trust row establishes credibility; the subhead explains the product; the CTA is the only high-contrast action.
- **Color:** Black video stage with white type and charcoal controls. Muted gray is reserved for supporting text and labels.
- **Typography:** Inter handles UI and reading text. A retro dot-matrix display face gives the headline and metric symbols a distinct intelligence-lab character.
- **Spacing:** Responsive `clamp()` values preserve the same centered composition from desktop to mobile. The page never becomes a card stack.
- **Surfaces:** White navigation and logo surfaces contrast with the dark stage. Shadows stay soft and restrained.
- **Imagery:** Motion is supplied by the required CloudFront background video; the logo is a small circular mark, never a wordmark replacement.
- **Motion:** Short entrance reveals, count-up metrics, button lift, avatar lift, and a mobile sheet menu. Reduced-motion users receive the final state immediately.
- **Responsive behavior:** Desktop navigation becomes a circular menu button and a centered white sheet at 720px. Metrics change from four columns to a 2×2 grid.
- **Accessibility:** Semantic header/main/footer, labeled navigation, `aria-current`, keyboard-closeable menu, `aria-expanded`, visible focus rings, meaningful CTA text, and reduced-motion support.

## Source-of-truth tokens
Tokens live in `styles.css` under `:root` and are mirrored in the Tailwind-style token table below for future migration.

| Token | Value |
|---|---|
| Background | `#000000` |
| Text | `#ffffff` |
| Muted | `#8e8e8e` |
| Nav text | `#2e2e2e` |
| Dark pill | `#28282a` |
| Nav shadow | `0 4px 14px rgba(0,0,0,.16)` |
| Display font | `BubbledotICG-FinePos`, `Geist Pixel Circle`, monospace |
| UI font | `Inter`, `Segoe UI`, system-ui, sans-serif |
| Radius | `999px` pills; `28px` mobile sheet; `50%` circles |
| Breakpoints | `720px`, `420px`, `700px` height tuning |
| Motion | `cubic-bezier(0.22, 1, 0.36, 1)` |

## Extension points
Add content through the metric data in `main.js`; add navigation destinations through the links in `index.html`; change visual language through the root variables and component-level classes in `styles.css`.
