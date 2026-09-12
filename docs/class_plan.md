# AdaL Bootcamp 3 — Landing Page Design with AdaL
> Status: DRAFT plan, 2026-09-11. Free live class (~60–75 min), demo-driven.
> Prior material: `../bootcamp-2` (Class 1 Beyond Loop Engineering, Class 2 Custom Agents, clone-web docs, hyperspell-clone demo).

## Value prop (verbatim, for the promo)
In this free live class, I'll share:
- The best models for each step
- Browser automation for research and testing
- Design skills that give agents taste
- Where to find the best landing-page references
- The complete workflow from an idea to a professional website

Founders: deliver a professional landing page without design skill.
Designers: come challenge and show real human design taste over AI design.
"After building 10+ landing pages with AI, I'm teaching founders to do this. No design agency $20K, no weeks of meetings."

## Core idea
Every teaching beat is a LIVE DEMO, and **all class materials are HTML pages**
(slides, reference list, demo scripts — open in browser, bootcamp-2 deck style).
One running use case ties them together: **the 19-page design** — we do NOT
have the 19-page plan yet; the class figures it out live, end to end, idea →
deployed site.

The class spine: **two ways to create a landing page**
1. **Clone an existing landing page — or anything else, like Framer — and
   remix.** Three moves to near-100% fidelity: (1) screenshots at
   1440/768/390, (2) live-DOM inspection (hex, .woff2 fonts, keyframes,
   data-URI SVGs), (3) video recording of the hero animation, scrubbed frame
   by frame. Out-of-box: browser-use + video capabilities, the
   `browser-automation` skill, and Engineer's builder≠evaluator worker pair.
   Battle-tested: hyperspell.com, xtract.framer.ai (~10 min heroes).
2. **Start from a real product design brief — Refero Styles is the default.**
   Its public `DESIGN.md` references capture the palette, typography, spacing,
   components, and rules of modern products, so students can hand AdaL a
   concrete system instead of a vague visual description. 21st.dev prompts,
   Aceternity, Magic UI, and MotionSites remain optional sources for component
   ideas and visual direction.

**How to do it without paying** (both ways): (1) watch the free animated
preview on a paid prompt site → ask AdaL to reverse-engineer it; (2) copy a
free-tier prompt → paste straight to AdaL. Three copyable AdaL prompts ship on
the references page (design-spec extraction, preview clone, full-page build).

## Proposed structure

### 0. Setup (~5 min) — install only
- Reuse the bootcamp-2 setup deck content: one-command install
  (`curl -fsSL https://adal.sylph.ai/install.sh | bash`), launch, browser sign-in.
- Two things to know: `/model` and `Shift+Tab`. Browser use turns on automatically when needed.
- **Shortcut: `Shift+Tab`** cycles permission modes — strict → accept edits → yolo. Footer shows the current mode. Teach yolo as the landing-page shipping mode.
- Slides: `slides/01-setup.html` ✅ DONE (real screenshots via tuistory).

## What students will actually do
Every part answers four practical questions: **what do I give AdaL, what does it do, what file/output do I get, and how do I check it worked?**

### 1. Set up AdaL (~5 min)
- Install and sign in.
- Use `/model` and `Shift+Tab` (strict → accept edits → yolo). Browser use turns on automatically when needed.
- **Student outcome:** AdaL running inside an empty project folder.

### 2. Choose the starting point (~5 min)
- **Clone:** start from a live page, Framer site, or free animated preview.
- **Design brief:** start from a Refero Styles `DESIGN.md`, an AI-ready 21st.dev prompt, or a component library such as Magic UI.
- **Student outcome:** one URL or one copyable prompt to use in the live build.

### 3. Demo — clone a reference (~12 min)
- **Input:** a target URL.
- **AdaL does:** capture desktop/tablet/mobile screenshots; inspect the rendered page for fonts, colors, layout, assets, and CSS animation; use a screen recording when motion needs to be matched.
- **Output:** `design-spec.md` plus a rebuilt hero.
- **Proof:** compare target and rebuild at the same viewport; fix visible differences.
- **Resources:** Hyperspell and Xtract Framer from bootcamp-2; the clone guide remains the deeper reference.

### 4. Demo — DESIGN.md → Tailwind (~10 min)
- **Input:** a structured `DESIGN.md` from Refero Styles or the class-provided Atlas Runtime brief.
- **AdaL does:** reads named color, type, spacing, component, and layout rules before building an original Tailwind landing page.
- **Output:** `demos/design-system-tailwind/app/` — an original Atlas Runtime hero, plus a reusable `DESIGN.md` and student prompt.
- **Proof:** inspect the running page at desktop and mobile; verify that it follows the brief while using original product copy and visuals.
- **Student workflow:** `DESIGN.md` → copy the student prompt → Tailwind build → browser QA.

### 5. Research resources (~5 min)
- Open `slides/04-resources.html`; it separates the modern options into two
  student decisions: **AI-native, free-first** sources and **rendered pages,
  templates & clone targets**.
- **AI-native, free-first:** Refero Styles is the default for a full
  `DESIGN.md` brief; 21st.dev offers AI-ready prompts plus components; React
  Bits, Magic UI, and Aceternity offer live-previewed code/effects.
- **Rendered pages and templates:** Framer Marketplace’s free templates are
  the default clone source. shadcnblocks and Cruip provide previewed layouts
  plus implementation material.
- Every card with **Live preview · cloneable** means students can give AdaL
  that URL for screenshots, DOM inspection, a design spec, and an original
  rebuild.
- **Student outcome:** one bounded starting point with a known access path:
  copy `DESIGN.md`, copy prompt/code, or inspect a live template.

### 6. Build and verify (~15 min)
- Start in yolo after the brief is clear.
- Build one hero and two supporting sections live; use the remaining 19-page plan only after the design system is agreed.
- Browser-use verifies layout, responsive widths, interactions, console errors, and network requests.
- Video review verifies motion that a static screenshot cannot show.
- **Proof:** screenshot comparison at 1440 / 768 / 390, plus a short recording for animated sections.

### 7. Ship and reuse (~5 min)
- Deploy the page.
- Optional: generate a short product video from the finished site (clip, voice-over, captions, composition).
- **Student outcome:** a live page and reusable prompt/design spec for their next page.

### 8. Assignment (~8 min)
- Bring one product idea, choose one of the two starting points, and submit: source URL/prompt, `design-spec.md`, deployed URL, and three responsive screenshots.

## Essential Ada features mapped to beats
1. `/model` switching → "best model per step"
2. browser-use capability + playwright-cli skill → research & visual QA
3. @Skills hub + create-skill → design taste as installed knowledge
4. generate_image / analyze_image → art direction & pixel critique
5. Engineer + workers + smart worktrees → parallel 19-section build
6. Consult → multi-model A/B design critique
7. Video capability → landing page promo clip
8. AdaL Desktop → visual diff review for non-terminal comfort

## Product updates to feature (as of v1.7.4)
- @Skills Hub launch (atskills.one) — skill search/install inline
- Native Smart Worktree support
- Video capability (current `feat/video-capability` branch work)
- New models: Claude Fable 5.1, Gemini 3.8 Flash, Muse Spark 1.3; `/model` shows image+video models
- Student pricing journey (just merged)

## Repo layout (this directory) — everything HTML
```
docs/    class_plan.md (this)
slides/  01-setup.html · 03-two-ways.html · 04-skills-setup.html · 04-resources.html · 05-read-a-landing-page.html
demos/   demo scripts as HTML pages (prompt + steps + fallback recording links)
assets/  adal logos ✅, screenshots/ (real CLI captures ✅)
```

## Open questions (need Li's input)
1. The 19-page design: for which product — AdaL V2 itself, a fictional founder product, or a student's real brief? (Determines the content we can show.)
2. Class length/date, single session or two?
3. Repo name for GitHub upload: `adal-bootcamp-landing-page` vs `adal-bootcamp-3`?
