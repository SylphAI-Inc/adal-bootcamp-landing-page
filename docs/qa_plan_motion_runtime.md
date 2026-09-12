# QA Plan — MotionSites-style Rebuild (AI Runtime Reference)

Read-only visual QA for a "close design-language recreation" of the
MotionSites **AI Runtime** reference card (`https://motionsites.ai/?prompt=ai-runtime`)
against the current local Bootcamp page (`index.html`).

This plan defines **measurable** style/layout criteria, an explicit
provenance/non-infringement checklist, the shortcomings currently
present in the local page, and the validation strategy. It does not
edit product files or implement the rebuild.

Captured `2026-09-11` at viewports `1440×900` (desktop) and `375×812`
(mobile) via Playwright on the shared Chrome at `127.0.0.1:9222`.
Reference image saved to session screenshots; raw metric snapshots
below.

---

## 1. Reference Design Language (AI Runtime)

Synthesized from the **public** AI Runtime hero image and the
motionsites.ai gallery shell. Used only for **shape**, not assets.

### 1.1 Geometry / vertical regions (top → bottom)

| Region | Reference behavior |
|---|---|
| Backdrop | Pure black (`#000`-ish) with **pink/orange gradient hill silhouette** centered behind the hero, plus a faint blue **binary code-rain** layer in the upper half. Soft noise. |
| Header | Single horizontal bar, logo + nav + action, vertically centered with the page edges (≈3–5% top/bottom padding). |
| Eyebrow | Centered, just below the header: 3 small square logo chips + a **black rounded pill** carrying the trust claim. |
| Hero | Centered, single column. Eyebrow → headline → subhead → CTA → stats, all center-aligned. The hill silhouette sits *behind* the headline. |
| Stats strip | Sits flush at the bottom edge of the hero region (above the fold at desktop), 4 equal columns separated by generous gutters. |

### 1.2 Header

- **Shape**: a 3-block row — *logo (left)* · *centered pill nav (4 items)* · *single dark "Sign in" pill (right)*.
- **Nav pill**: continuous translucent white pill (`rgba(255,255,255,.06)`-ish), 4 text links, current/active link underlined with dots (not background change).
- **Logo mark**: square/rounded-square (not a perfect circle).
- **Vertical centering** with the page; no separator/divider.

### 1.3 Eyebrow

- Icon row of 3 small **square** brand marks in a black pill, immediately followed by a second black pill with the trust string.
- All-caps, mono, ~11–12 px, letter-spacing ≈ +5–8%.

### 1.4 Hero hierarchy

- **H1**: 2 lines, large mono / bitmap / LED-style face, centered, weight 700+. Reference headline reads ~12% of viewport height per line on desktop.
- **Subhead**: sans-serif, ~16–18 px, max-width ≈ 560 px, centered, two short lines max.
- **CTA**: **one** pill button, white-on-dark (or dark-on-white if you invert), small (≈ 13 px), bold, ~47 px tall, ~999 px radius. No secondary CTA.
- **Vertical rhythm**: eyebrow → headline → subhead → CTA, each separated by a fixed gap (≈ 38 px between subhead and CTA on reference).

### 1.5 Typography

- **Display**: monospace family (reference uses a 5×7 LED bitmap; substitute with `JetBrains Mono`, `IBM Plex Mono`, or a Google mono).
- **Body**: humanist sans (reference uses system stack). `Inter` / `Manrope` are safe substitutes.
- **Numerics**: tabular figures for stats (`font-variant-numeric: tabular-nums`).

### 1.6 CTA

- One primary, one shape (pill), one size (47 px), one color (white on black background; green is acceptable as a single accent but only one button).

### 1.7 Footer stats strip

- 4 columns, each: tiny **geometric/asterisk-style icon** (≈ 18 px) → large **value** (~32–36 px mono) → small **caption** (~12 px sans, muted).
- Items: `120ms / Inference Time`, `99.99% / Platform Uptime`, `24/7 / Autonomous Runtime`, `2.4M / Context Windows`.
- Equal gutter, equal column width, centered as a block.

### 1.8 Mobile menu

- Hamburger icon top-right; full-width overlay (not a side drawer) anchored to top, dark glass panel, list of nav links, last item styled as the primary action (green text).

### 1.9 Reduced motion

- All animations respect `prefers-reduced-motion: reduce` — fades/translate-on-load reduced to ≤ 10 ms, backdrops static, no parallax.

---

## 2. Measurable Acceptance Criteria

Each item is **binary** and **scriptable** via Playwright `getComputedStyle`
or DOM queries. Numbers are derived from the reference render at
`1440×900` and `375×812`.

### 2.1 Geometry (desktop, 1440 wide)

| # | Criterion | Pass rule |
|---|---|---|
| G1 | Page is a single hero region, centered, no scroll at 900 px height for the fold | `document.documentElement.scrollHeight <= 1.05 × innerHeight` OR fold ends with stats row visible at `y < innerHeight` |
| G2 | Header total height | `header.getBoundingClientRect().height ∈ [56, 80] px` |
| G3 | Header layout | 3-block row: brand left, nav centered (≤ 8 px tolerance from horizontal center), CTA right |
| G4 | Nav rendered as a single pill | `nav` computed `border-radius >= 999 px` AND `background` is `rgba(255,255,255,*)` with alpha < 0.15 |
| G5 | Eyebrow sits between header and headline | eyebrow bottom ≤ headline top − 24 px AND eyebrow top ≥ header bottom + 24 px |
| G6 | H1 is centered | `Math.abs(h1.left + h1.width/2 - innerWidth/2) ≤ 4` px |
| G7 | H1 is mono | computed `font-family` contains `"Mono"` (case-insensitive) |
| G8 | Single CTA in hero | `document.querySelectorAll('.hero a.button, .hero button').length === 1` |
| G9 | CTA is pill-shaped | `border-radius >= 999` px AND `height >= 44` px |
| G10 | Stats strip = 4 equal columns | computed `grid-template-columns` parses to exactly 4 equal `fr`/numeric widths |
| G11 | Stats row top sits below the CTA | `stats.top >= cta.bottom + 24` |
| G12 | Stats caption font-size | each caption `font-size ≤ 13 px` AND `font-family` contains "Sans" |
| G13 | Stats value font-size | each value `fontSize ∈ [28, 40]` px AND mono |

### 2.2 Geometry (mobile, 375 wide)

| # | Criterion | Pass rule |
|---|---|---|
| M1 | Hamburger visible | `.menu-button` computed `display !== "none"` |
| M2 | Desktop nav hidden | `.desktop-nav` computed `display === "none"` |
| M3 | H1 still 2 lines | `h1.getBoundingClientRect().height >= 2 × (parseFloat(fontSize) * 0.84)` |
| M4 | H1 doesn't overflow viewport | `h1.right <= innerWidth + 1` |
| M5 | CTAs stack to one column OR remain one pill | either 1 button (preferred) or 2 stacked, each `width <= innerWidth - 2 * gutter` |
| M6 | Stats switch to 2×2 | computed `grid-template-columns` parses to exactly 2 columns |
| M7 | Tap targets ≥ 44 px | every interactive element `height >= 44` px |

### 2.3 Typography

| # | Criterion | Pass rule |
|---|---|---|
| T1 | Display family is mono and loaded | `document.fonts` contains a face whose `family` matches the declared mono token |
| T2 | Body family is humanist sans | body computed `font-family` falls back through a sans stack, not serif |
| T3 | Stat values use tabular figures | computed `font-variant-numeric: tabular-nums` on stat value |
| T4 | H1 letter-spacing is negative | `parseFloat(h1.letterSpacing) < 0` |

### 2.4 CTA

| # | Criterion | Pass rule |
|---|---|---|
| C1 | Exactly one primary CTA in hero | see G8 |
| C2 | CTA color contrasts ≥ 4.5:1 against backdrop | use a contrast util against measured `bg` |
| C3 | CTA has visible focus ring | `:focus-visible` outline ≥ 2 px, not `none` |

### 2.5 Footer / stats strip

| # | Criterion | Pass rule |
|---|---|---|
| F1 | All four cells present | `stats.children.length === 4` |
| F2 | Each cell has icon + value + caption | each cell contains ≥ 3 distinct text/icon nodes in fixed order |
| F3 | Stats use mono numerics with tabular figures | see T3 |

### 2.6 Mobile menu

| # | Criterion | Pass rule |
|---|---|---|
| MM1 | Hamburger toggles `aria-expanded` | click → `aria-expanded === "true"`; click again → `"false"` |
| MM2 | `hidden` attribute actually hides panel | when `aria-expanded === "false"`, `panel.getBoundingClientRect().height === 0` OR `panel.offsetParent === null` |
| MM3 | Escape closes | pressing `Escape` sets `aria-expanded === "false"` and applies MM2 |
| MM4 | Resize past 720 px closes | set viewport to 1024 → menu auto-closes within 200 ms |
| MM5 | Trap focus inside open menu | Tab cycles only among menu links and close control |
| MM6 | Last link is styled as primary action | last `a` computed `color` matches accent token (e.g. `--green`) |

### 2.7 Reduced motion

| # | Criterion | Pass rule |
|---|---|---|
| R1 | Animations disabled under `prefers-reduced-motion: reduce` | Playwright `colorScheme: 'dark', reducedMotion: 'reduce'` → no element with `animation-duration > 50 ms` |
| R2 | Backdrop effects static | no `animation` or `transition` properties on `.backdrop*` when reduced motion is on |
| R3 | Smooth scroll suppressed | `:root` scroll behavior is `auto` (not `smooth`) when reduced motion is on |

---

## 3. Provenance / Non-Infringement Checklist

Every item below must hold in the rebuilt page. Treat each as a hard
gate; copy/paste of any reference item fails the build.

### 3.1 Assets

- [ ] **Background hill silhouette** is original SVG/canvas/CSS — not a trace of the reference PNG.
- [ ] **Binary code-rain layer** is original — no copied character grid.
- [ ] **Brand-logo chips** in the eyebrow are **not** the reference companies' marks. Use neutral placeholders (`/assets/placeholders/*.svg`) or omit.
- [ ] **Logo mark** is the project's own (AdaL / Bootcamp).
- [ ] **Favicon / app icon** is original.
- [ ] **Icon font / glyphs** (stat icons) are from an open-licensed set (Lucide, Phosphor, Heroicons) — not a copy of the reference glyphs.

### 3.2 Copy / strings

- [ ] **Hero headline** is original. The reference string *"Intelligence Designed To Evolve"* must NOT appear.
- [ ] **Subhead** is original. The reference *"Build applications that reason, adapt and collaborate using a modular AI platform designed for production."* must NOT appear.
- [ ] **Trust claim** is original AND truthful. The reference *"Trusted by 2000+ Enterprises"* must NOT appear (it is a false claim for AdaL Bootcamp).
- [ ] **CTA label** is original (or generic like "Get Started", "Start the class"). Reference label *"Get Started"* is generic and acceptable; any other reference-specific string is not.
- [ ] **Stats values** (`120ms`, `99.99%`, `24/7`, `2.4M`) are reference claims — they must be replaced with AdaL Bootcamp's own metrics or removed. The reference statistic labels (*Inference Time*, *Platform Uptime*, *Autonomous Runtime*, *Context Windows*) are also reference product terminology — do not reuse.
- [ ] **Nav labels** (`Home / Product / Case Studies / Contact`) are the reference's nav structure. Replace with AdaL Bootcamp's actual primary destinations (e.g. *Program / Outcomes / Materials / Sign in*).
- [ ] **Eyebrow text** is original.
- [ ] **Modal/page meta description** (used for the design-by line, etc.) is original.

### 3.3 Trademarks / names

- [ ] **"MotionSites"**, **"AI Runtime"**, and **"Design Rocket"** (footer promo) names do NOT appear anywhere in the rebuilt code, copy, asset filenames, or metadata.
- [ ] **Author/credit byline** does NOT credit the reference designer (*Ritu* / *bthreeagency*).
- [ ] **"ViktorOddy"** YouTube handle is not referenced.
- [ ] **CloudFront / Higgs.ai image URLs** are not pulled at runtime — the rebuild must not hotlink reference imagery.

### 3.4 Structural / behavioral

- [ ] **Prompt URL pattern** (`?prompt=ai-runtime`) is not reused.
- [ ] **Modal interaction pattern** (full-page takeover with side rail) is not copied 1:1; if a similar pattern is used, it must be visually distinct.

### 3.5 Audit method

- [ ] `grep -RInE "MotionSites|AI Runtime|Intelligence Designed|Build applications|2000\+ Enterprises|120ms|99\.99%|2\.4M|Inference Time|Platform Uptime|Autonomous Runtime|Context Windows|Design Rocket|ViktorOddy|bthreeagency|Ritu|higgs\.ai|d8j0ntlcm91z4" .` returns **zero** hits in shipped source.
- [ ] Reverse-image search on any uploaded background asset returns no match against `images.higgs.ai` mirrors.
- [ ] DOM audit confirms no `<link>` or `<img>` whose host is `*.higgs.ai`, `d8j0ntlcm91z4.cloudfront.net`, or `motionsites.ai`.

---

## 4. Current Local Page — Shortcomings vs. The Reference

Measured against `index.html` rendered at `http://127.0.0.1:8765/index.html`.
Each line is a deviation that the rebuild must address.

| # | Area | Current state | Reference state | Action |
|---|---|---|---|---|
| S1 | Hero h1 font | `Manrope` sans 142 px, `-13.49` px tracking; em in *Georgia* italic pink | Mono / bitmap, ~12 vh, centered, white | Switch H1 to mono family; drop the Georgia italic em |
| S2 | CTA count | **Two** buttons (`Open the class` green + `Browse references` outline) | **One** pill, white-on-black | Remove secondary CTA or move it under a sub-row |
| S3 | CTA color | Lime green (`#9be564`) | White pill (accent role, not primary) | Reserve green for the single accent; CTA becomes white-on-black |
| S4 | Eyebrow | Green dot + uppercase mono "*FREE LIVE DESIGN CLASS*" | Brand logo chips + black pill trust string | Replace with logo-chip strip + black pill, or accept the dot style and only change copy |
| S5 | Backdrop | Radial pink glow + faint grid + soft pink/green blobs | Pink/orange gradient **hill silhouette** + **binary code rain** | Build original hill + rain; remove ad-hoc glows |
| S6 | Header layout | 3-column grid: brand left / nav pill center / text link right | Brand left / nav pill center / **pill** right (with text) | Wrap right action in a pill, not a plain link |
| S7 | Brand mark | Perfect-circle pink "A" badge | Rounded-**square** mark with monogram | Change to rounded-square |
| S8 | Footer | One "Class materials" strip with body copy + link | **4-cell stats row** (icon, value, caption) | Replace with 4-cell stats using AdaL-original metrics |
| S9 | Outcomes | 3-cell list (01/02/03, top-border, mono numerals) | No equivalent on reference (single hero only) | Either drop or move below stats |
| S10 | H1 width | 1000 px max, 2 lines + em line = 365 px tall, line wraps after "*page*" | Reference H1 ≈ 1300–1400 px wide on desktop, 2 lines only | Allow H1 to size up to ~85% of viewport width on desktop |
| S11 | Nav count | 3 items (Program / Outcomes / Materials) | 4 items in reference | Match product's true primary nav (3 or 4 acceptable) |
| S12 | Mobile menu | Hamburger present; **broken** — `display:block` in CSS overrides `hidden` attribute so the panel is **always visible at < 720 px** | Hamburger + overlay | Add `[hidden] { display: none !important; }` or use `.mobile-menu:not([hidden])` in CSS |
| S13 | Mobile menu focus trap | Not implemented | Expected | Add Tab trapping and `aria-modal` |
| S14 | Reduced motion | Animations reduced to 0.01 ms; reveal class still defined | Same intent | Verify reveal class is removed/disabled under reduced motion (currently it has `opacity:1; transform:none` — acceptable, but the element's animation rules must be absent) |
| S15 | Stat values | Use tabular figures? | Yes, reference numerics align | Add `font-variant-numeric: tabular-nums` to stat values |
| S16 | Focus rings | Not explicitly defined in CSS | Visible focus required | Add `:focus-visible { outline: 2px solid var(--green); outline-offset: 2px; }` globally |

---

## 5. Validation Strategy

### 5.1 Tooling

- **Playwright** (already loaded as `browser-use`) drives both viewports.
- A short Node script `scripts/qa.mjs` (to be added by implementation phase; not now) replays the §2 acceptance criteria.
- `grep` + a reverse-image step covers the §3 audit.

### 5.2 Viewports & view modes

| Mode | Width × Height | DPR |
|---|---|---|
| Desktop | 1440 × 900 | 1 |
| Desktop wide | 1920 × 1080 | 1 |
| Tablet | 820 × 1180 | 2 |
| Mobile | 375 × 812 | 2 |
| Mobile narrow | 320 × 700 | 2 |
| Reduced motion | 1440 × 900 + `prefers-reduced-motion: reduce` | 1 |

### 5.3 Per-viewport procedure

For each viewport in §5.2:

1. `goto` local server; `waitUntil: 'networkidle'`.
2. `screenshot({ fullPage: true })` — keep as evidence.
3. Run §2 metric queries; record pass/fail per criterion.
4. For mobile only: open and close the mobile menu, screenshot each state, run §2.6 checks.
5. For reduced-motion mode: confirm §2.7 passes.

### 5.4 Per-criterion artifact

Each row in §2 produces a JSON line:

```
{ "id": "G8", "value": 2, "expected": 1, "pass": false, "viewport": "1440x900" }
```

collected into `reports/qa/<date>.json`. Implementation phase fails the
build on any `pass: false` in §2 or any non-zero hit in the §3 grep
audit.

### 5.5 Reference-vs-rebuild comparison (visual)

At each viewport, place the reference render (saved at
`screenshots/ai-runtime-full.png`, or a re-render at the same width) and
the rebuilt local page side by side in a single stitched PNG. Annotate
discrepancies in the same image with red boxes. The annotated image is
the build's visual gate.

### 5.6 Acceptance gates

| Gate | Pass rule |
|---|---|
| Gate A — Geometry | 100% of §2.1 + §2.2 rows pass on all §5.2 viewports |
| Gate B — Typography & CTA | 100% of §2.3 + §2.4 rows pass on desktop |
| Gate C — Mobile menu | 100% of §2.6 rows pass at 375 px |
| Gate D — Reduced motion | 100% of §2.7 rows pass under reduced-motion mode |
| Gate E — Provenance | §3 grep audit returns 0 hits and no reference hosts in shipped HTML |
| Gate F — Visual | Reference vs rebuild comparison shows no "intentional copy" — any visual match must map to a §3.3-clean attribute (pill shape, mono type, dark bg) rather than a copied asset/string |

### 5.7 Out of scope for this plan

- Performance budgets (CLS, LCP).
- Cross-browser parity beyond Chromium (the public reference is only fully reviewed on Chromium here).
- Animation library choices (Framer Motion vs. CSS keyframes).
- CMS / content pipeline.

---

## 6. Source-of-Truth Captures

| Artifact | Path |
|---|---|
| Reference homepage, desktop full-page | session `screenshots/shot-1789180326-a91cb5.jpg` |
| Reference AI Runtime modal, desktop | session `screenshots/shot-1789180344-fc5b0d.jpg` |
| Reference AI Runtime modal, full-res PNG | session `screenshots/ai-runtime-full.png` |
| Reference AI Runtime modal, mobile | session `screenshots/shot-1789180494-bcf70d.jpg` |
| Local Bootcamp, desktop full-page | session `screenshots/shot-1789180405-680397.jpg` |
| Local Bootcamp, mobile full-page | session `screenshots/shot-1789180503-39963f.jpg` |

No source files in this repository were modified during this QA pass.
