---
name: classical-hero-backdrop
description: Use when the user wants to replicate the Vermeer-hero pattern in another section of the web product. Chooses a thematically-matched classical painting from public-domain archives (Wikimedia Commons), downloads it, crops for the section aspect ratio, and wires it as a backdrop with the established warm-dark overlay + optional parallax + candle atmosphere. Outputs a ready-to-use React section matching the editorial dark-warm aesthetic.
---

# Classical Hero Backdrop — La Bottega

Codified recipe for adding painting-backed sections to the web product. Preserves the pattern that worked for the Hero (Vermeer's The Astronomer) so every new section has the same quality without rediscovering it each time.

## Why this exists as a skill

The first time we did a hero backdrop we made ~15 micro-decisions (which painting, which crop, which overlay darkness, which filter saturation, which parallax factor, which background-position). Most of them were judgment calls I made on the fly. This skill codifies them so the user can say "hacé otra sección con un Caravaggio" and I execute correctly without re-asking every variable.

## When to trigger

- User says "quiero otra sección con imagen", "replicá el hero en X", "agregá una pintura en Y"
- User describes a chapter that needs visual weight ("quiero que la sección del Ruido tenga peso visual")
- User gives a painting reference ("metéme un Caravaggio", "algo de Böcklin")

## Prerequisites

- User has approved dark-warm editorial aesthetic (per `bottega_visual.md`)
- Section in `src/App.jsx` where the backdrop will live
- `sips` (built-in macOS image tool) or equivalent for cropping

## Thematic rule — how to pick the painting

The painting must match the **meaning of the chapter**, not just "look pretty". For La Bottega, map each chapter to a symbolic mode:

| Chapter mode | What to look for | Example paintings |
|---|---|---|
| **Seeker / scholar** (hero, invitación) | Single figure studying, reading, contemplating | Vermeer *The Astronomer*, Rembrandt *Philosopher in Meditation* |
| **Craft / workshop** (el oficio) | Hands working, tools, apprenticeship scenes | Vermeer *The Lacemaker*, Courbet *The Stone Breakers*, Wright of Derby *The Blacksmith's Shop* |
| **Silence / interior** (pausa, declaración) | Empty rooms, candlelight, still life | Hammershøi interiors, Vilhelm Hammershøi *Strandgade 30*, de La Tour candlelit scenes |
| **Ruins / fall** (ruido, problem) | Decay, melancholy, fog, ruins | Caspar David Friedrich *Abbey in the Oakwood*, Böcklin *Isle of the Dead*, Piranesi *Carceri* |
| **Wanderer / horizon** (craft, sistema) | Single figure facing landscape | Friedrich *Wanderer above the Sea of Fog*, *Monk by the Sea* |
| **Collective / taller** (community, gente) | Groups of people working together | Velázquez *Las Meninas*, Rembrandt *The Night Watch* (cropped), Courbet *The Painter's Studio* |
| **Dark enlightenment** (manifesto, declaración) | Light breaking darkness, figures in chiaroscuro | Caravaggio *Calling of St Matthew*, de La Tour *St Joseph the Carpenter* |

**Rule of thumb**: if the painting depicts an action aligned with the chapter's meaning, it works. If it's just "a nice classical painting", it probably doesn't.

**Avoid**:
- Overly famous paintings that have become memes (*Wanderer above Sea of Fog* is pushing it — still usable but tired)
- Paintings with figures looking directly at the viewer (breaks the quiet contemplative vibe)
- Modern masters (post-1900) unless you want a specific tonal shift
- Religious paintings with too much overt iconography unless you want that specific tone (risk: reads evangelical to some audiences)

## Technical recipe

### Step 1 — Find the public-domain file

Use Wikimedia Commons first. Every major pre-1928 painting is there at high resolution, legally clear.

1. Search the painting on Wikipedia (English gives better results)
2. Click the image → "More details" → opens Wikimedia Commons
3. Right-click the highest resolution link → Copy link
4. URL should match: `https://upload.wikimedia.org/wikipedia/commons/X/XX/Filename.jpg`

If the direct URL doesn't download with curl (Wikimedia blocks without User-Agent sometimes), add `-A "Mozilla/5.0"`.

If stuck finding the URL: use WebFetch on the Wikipedia article page asking it to extract the Wikimedia Commons URL.

### Step 2 — Download to the right place

```bash
curl -sL -A "Mozilla/5.0" \
  -o /Users/lautcro/nebulab-workspace/Bottega/src/assets/bg-{chapter-slug}.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/X/XX/Filename.jpg"
```

Naming convention: `bg-{chapter-slug}.jpg` (e.g. `bg-ruido.jpg`, `bg-oficio.jpg`, `bg-taller.jpg`).

Verify it downloaded a real image (not an HTML error page):
```bash
file /Users/lautcro/nebulab-workspace/Bottega/src/assets/bg-{slug}.jpg
# Should say: JPEG image data, ... WxH pixels
```

### Step 3 — Optimize size (optional but recommended)

Raw Wikimedia files are often 5-30MB. Overkill for web. Resize max width to ~2000px:

```bash
sips -Z 2000 src/assets/bg-{slug}.jpg --out src/assets/bg-{slug}.jpg
```

Target file size: under 600KB. If the painting is large, try `sips -Z 1600` or compress more aggressively with `sips -s formatOptions 72`.

### Step 4 — Wire the CSS backdrop

Add a new CSS block mirroring `.hero-chapter::after`:

```css
.bg-chapter-{slug} {
  position: relative;
  min-height: 80vh;  /* adjust — hero was 100vh, mid-page usually 70-80vh */
  padding: var(--space-xl) var(--space-md);
  overflow: hidden;
}

.bg-chapter-{slug}::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(
      to bottom,
      rgba(12, 10, 8, 0.80) 0%,
      rgba(12, 10, 8, 0.90) 60%,
      rgba(12, 10, 8, 0.97) 100%
    ),
    url('./assets/bg-{slug}.jpg');
  background-size: cover;
  background-position: center 40%;   /* tweak based on where the focal point is */
  background-repeat: no-repeat;
  z-index: 0;
  filter: saturate(0.85);
}

.bg-chapter-{slug} > * {
  position: relative;
  z-index: 2;
}
```

**Key differences from the hero** (DO NOT blindly copy the hero CSS):

- **Overlay is darker (0.80→0.97 instead of 0.70→0.95)**: mid-page sections don't have hero prominence, so the painting must recede more to let text dominate.
- **No parallax by default**: parallax is a hero-only indulgence. Repeating it mid-page causes motion sickness. Only add parallax if the section occupies full viewport height AND there's significant scroll room before/after.
- **`background-position` depends on painting**: center 40% is a decent default but you may need to adjust. For a standing figure: try center 20%. For a landscape with horizon mid: center 50%. For the painting's main subject near the top: center 15%. Screenshot at desktop + mobile to check.

### Step 5 — Wire the React section

Inside `src/App.jsx`, wrap the chapter content with the backdrop class:

```jsx
<section id="{chapter-id}" className="bg-chapter-{slug}">
  <Chapter
    id="{chapter-id}-inner"
    label="Capítulo {N} · {Name}"
    title="{Title copy}"
  >
    <p>{Body copy}</p>
  </Chapter>
</section>
```

Or if the section already uses `<Chapter>` directly, add the bg class via a wrapping div:

```jsx
<div className="bg-chapter-{slug}">
  <Chapter id="{chapter-id}" ...>
    ...
  </Chapter>
</div>
```

### Step 6 — Verify

1. Run preview: `preview_start`
2. Take screenshots at desktop + mobile
3. Check that:
   - Text is readable against the painting (overlay darkness correct)
   - The figure/composition reads through but doesn't dominate
   - Background doesn't cause horizontal scroll on mobile (overflow: hidden on the section helps)
   - The painting's focal point is visible (adjust background-position if not)

## Composition rules for the finished section

These keep the pattern visually consistent across all backdropped sections:

- Always keep the same **brand mark + hairline + section-label** as the first elements. Users should recognize the editorial pattern regardless of which painting backs it.
- Body copy stays `--text-primary` (warm white) + `--accent` (gold) for emphasis — never introduce new colors to contrast the painting.
- Max **1 backdropped section per 3 chapters**. If every chapter has a painting, the weight becomes noise and each painting loses impact. Let flat dark sections rest between backdropped ones.
- The hero and the invitation are the two obvious candidates for backdrops. Mid-page, prefer `break-chapter` quote interludes over adding another painting.

## Log of paintings used (update as new ones get added)

| Section | Painting | Wikimedia URL | Why it fits |
|---|---|---|---|
| Hero | Vermeer — *The Astronomer* (1668) | [commons](https://upload.wikimedia.org/wikipedia/commons/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg) | Scholar studying celestial globe = metaphor for "observing Internet as the master" |

## Common failure modes

- **Painting too bright / wrong key**: high-key paintings (Impressionists, Rococo pastel scenes) don't work — the dark overlay fights them. Stick to pre-1880 or specifically dark/chiaroscuro works.
- **Crop kills the subject**: cover-sizing on wide desktop vs narrow mobile can hide the figure. Test both. `background-position: center X%` is your lever.
- **Too many backdrops**: the Vermeer works because it's the only one. If you add paintings to 5 chapters the whole site becomes a museum slideshow and the brand reads decorative, not editorial.
- **Copyright / attribution**: pre-1928 works are clearly public domain in the US. Wikimedia confirms. Newer artwork (even digital reinterpretations of old masters) often is not. Stick to Wikimedia Commons originals.

## Quick start — if the user just says "hacé X sección con un Caravaggio"

1. Ask: which chapter in `src/App.jsx`?
2. Pick a specific Caravaggio matching the chapter's mode (use the thematic table above)
3. Propose 2-3 candidates with one-line reasoning each
4. Once user picks: execute steps 1-6 above end-to-end in a single turn
5. Screenshot, update the log table in this skill with the addition
