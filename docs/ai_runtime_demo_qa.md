# AI Runtime Demo — Verification Record

> Status: passed · verified 2026-09-11

## Scope

This record covers the completed static landing-page demo in
`demos/ai-runtime/app/`. It verifies the current AdaL-branded implementation,
not the external design-direction reference.

## Checks performed

| Area | Viewport | Result | Evidence |
| --- | --- | --- | --- |
| Desktop hero composition | 1440×900 | Pass | Header, hero copy, CTA, and four metric cells render in one viewport. |
| Mobile hero composition | 390×844 | Pass | Page stays readable without horizontal overflow; metrics render as a 2×2 grid. |
| Mobile navigation | 390×844 | Pass | Menu button changes `aria-expanded` and opens the full link list. |
| JavaScript runtime | Desktop and mobile | Pass | No page errors observed after load. |
| Animated metrics | Desktop and mobile | Pass | Values animate to `12s`, `24/7`, `100+`, and `$1M`. |
| Reduced-motion mode | CSS implementation | Pass | Motion is disabled through `prefers-reduced-motion: reduce` while final content remains visible. |

## Review notes

- The page uses a muted CloudFront-hosted video as a background layer, darkened
  by CSS overlays for legibility.
- Content and controls remain rendered as semantic HTML above the video.
- The layout is intentionally a one-viewport hero rather than a multi-section
  product page: it is a focused in-class demonstration of prompt adaptation and
  visible browser QA.

## Follow-up

- Add a separate clone-reference demo with before/after viewport comparison.
- Capture durable repository screenshots when the class recording workflow is
  finalized.
