# Landing Page Design with AdaL

Course materials for building, verifying, and shipping landing pages with AdaL.

## Open the course

- GitHub Pages: https://sylphai-inc.github.io/adal-bootcamp-landing-page/

## Materials

- `slides/01-setup.html` — installation, setup, models, permissions, browser use, video, and the build–check–fix loop.
- `slides/03-two-ways.html` — choose a starting prompt or design system, then pass AdaL the style direction.
- `slides/04-skills-setup.html` — Clone Any Website skill and copyable AdaL command.
- `slides/04-resources.html` — landing-page references and reusable prompts.
- `slides/05-read-a-landing-page.html` — hands-on design reading with a Refero `DESIGN.md` example and the 19-page planning exercise.
- `adal-design-system-example.html` — Ada Design System Example: visual system, component kit, responsive rules, and builder prompt.
- `demos/ai-runtime/` — completed available-prompt demo: an original AdaL runtime hero with video, responsive navigation, CSS entrance motion, and animated metrics.
- `demos/design-system-tailwind/` — Demo 2: an original Tailwind landing page built from a reusable `DESIGN.md` design brief.
- `demos/claude-code/` — Demo 3: the Claude Code implementation — a pixel-matched clone of the modal.com hero built with the Clone Any Website skill and browser automation, including a re-implemented three.js hero graphic.

Use the arrow keys or on-screen arrows to move through each deck.

## Demo 1: AI Runtime

Run the finished static demo locally:

```bash
cd demos/ai-runtime/app
python3 -m http.server 4179
```

Then open http://127.0.0.1:4179/.

The demo is deliberately small enough to inspect live during class:

- `index.html` defines the semantic page structure.
- `styles.css` handles the video treatment, responsive layout, CSS animations,
  and reduced-motion fallback.
- `script.js` handles the mobile menu and animated metric counters.

Students can copy [`demos/ai-runtime/STUDENT_PROMPT.md`](demos/ai-runtime/STUDENT_PROMPT.md) into AdaL to recreate the exercise. See [`demos/ai-runtime/README.md`](demos/ai-runtime/README.md) for the prompt-to-product workflow, presenter run-of-show, and verification results.

## Demo 2: DESIGN.md → Tailwind

Open [`demos/design-system-tailwind/DESIGN.md`](demos/design-system-tailwind/DESIGN.md), then give students [`demos/design-system-tailwind/STUDENT_PROMPT.md`](demos/design-system-tailwind/STUDENT_PROMPT.md). The finished original implementation is in `demos/design-system-tailwind/app/`.

```bash
cd demos/design-system-tailwind/app
python3 -m http.server 4181
```

Then open http://127.0.0.1:4181/.
