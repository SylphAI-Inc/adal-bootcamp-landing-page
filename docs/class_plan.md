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
2. **Find an AI-native landing page prompt — such as motionsites.ai.** The
   reference is the prompt itself (built for Lovable/Bolt/Cursor/v0 — and
   AdaL). Also: 21st.dev copy-prompt, Aceternity, Magic UI, stork.ai free stack.

**How to do it without paying** (both ways): (1) watch the free animated
preview on a paid prompt site → ask AdaL to reverse-engineer it; (2) copy a
free-tier prompt → paste straight to AdaL. Three copyable AdaL prompts ship on
the references page (design-spec extraction, preview clone, full-page build).

## Proposed structure

### 0. Setup (~5 min) — install only
- Reuse the bootcamp-2 setup deck content: one-command install
  (`curl -fsSL https://adal.sylph.ai/install.sh | bash`), launch, browser sign-in.
- Three things to know: `/init`, `/model`, `/capabilities`. That's the whole manual.
- **Shortcut: `Shift+Tab`** cycles permission modes — strict → accept edits → yolo. Footer shows the current mode. Teach yolo as the landing-page shipping mode.
- Slides: `slides/01-setup.html` ✅ DONE (real screenshots via tuistory).

## What students will actually do
Every part answers four practical questions: **what do I give AdaL, what does it do, what file/output do I get, and how do I check it worked?**

### 1. Set up AdaL (~5 min)
- Install and sign in.
- Use `/model`, `/capabilities`, and `Shift+Tab` (strict → accept edits → yolo).
- **Student outcome:** AdaL running inside an empty project folder.

### 2. Choose the starting point (~5 min)
- **Clone:** start from a live page, Framer site, or free animated preview.
- **Available prompt:** start from a prompt supplied by MotionSites, 21st.dev, Magic UI, or a similar library.
- **Student outcome:** one URL or one copyable prompt to use in the live build.

### 3. Demo — clone a reference (~12 min)
- **Input:** a target URL.
- **AdaL does:** capture desktop/tablet/mobile screenshots; inspect the rendered page for fonts, colors, layout, assets, and CSS animation; use a screen recording when motion needs to be matched.
- **Output:** `design-spec.md` plus a rebuilt hero.
- **Proof:** compare target and rebuild at the same viewport; fix visible differences.
- **Resources:** Hyperspell and Xtract Framer from bootcamp-2; the clone guide remains the deeper reference.

### 4. Demo — use an available prompt (~10 min)
- **Input:** a prompt copied from an AI-native library, such as MotionSites, or a free component prompt from 21st.dev/Magic UI.
- **AdaL does:** replaces product, copy, palette, assets, and responsive constraints; builds the result.
- **Output:** an original page based on the prompt's design direction.
- **Proof:** inspect the running page at desktop and mobile; check that it represents the student's product rather than the source example.
- **No-pay route:** use the free animated preview as a clone reference, or a free copyable prompt as direct input.

### 5. Research resources (~5 min)
- Open `slides/04-references.html`; every resource opens in its own tab.
- Choose a resource by need: prompts (MotionSites / 21st.dev), page structure (Lapa / One Page Love), interaction ideas (Awwwards / Godly), or product flows (Pageflows / Mobbin).
- **Student outcome:** a shortlist of references, not an unbounded mood board.

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
slides/  01-setup.html ✅ · 02-capabilities.html · 03-two-ways.html · 04-references.html · 05-workflow.html
demos/   demo scripts as HTML pages (prompt + steps + fallback recording links)
assets/  adal logos ✅, screenshots/ (real CLI captures ✅)
```

## Open questions (need Li's input)
1. The 19-page design: for which product — AdaL V2 itself, a fictional founder product, or a student's real brief? (Determines the content we can show.)
2. Class length/date, single session or two?
3. Repo name for GitHub upload: `adal-bootcamp-landing-page` vs `adal-bootcamp-3`?
