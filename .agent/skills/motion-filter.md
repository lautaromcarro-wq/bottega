---
name: motion-filter
description: Use when the user proposes motion/animation components (prompts, code snippets, library integrations) to add to the La Bottega web product. Filters each proposal against the editorial manuscrito-iluminado aesthetic and returns a verdict with aligned alternatives when a pattern doesn't fit.
---

# Motion Filter — La Bottega

Decision framework for evaluating motion proposals against La Bottega's visual identity.

## Why this exists

User periodically drops popular motion components (Aceternity, shadcn, Spline, WebGL shaders, framer-motion patterns) and asks to integrate. Most of them come from SaaS/tech aesthetic training sets and actively destroy the editorial dark-warm feel. This skill codifies the filter so we don't have the same conversation twice.

## When to use

Triggers:
- User pastes component code from aceternity.dev, shadcn, mimesis, motion.dev, lunar, etc.
- User asks "integrate X animation" / "agregá este hero" / "poné este efecto"
- Anything involving: framer-motion, Spline, three.js, WebGL, spring animations, particle systems

## Filter criteria

### Aligned (YES)
- **Measured motion** — 200-900ms durations, custom ease `cubic-bezier(0.4, 0, 0.2, 1)`
- **Opacity + subtle translate** (≤20px) — fade-in with restrained vertical movement
- **Stroke/draw-in animations** — hairlines, lines, borders that unfold
- **Scroll-linked progress** — reading progress bar, chapter indicator
- **Cross-fade word swaps** — slow, pausado, no spring
- **Ken Burns muy sutil** — 30-60s zoom, barely perceptible
- **Parallax suave** — 0.25x-0.45x factor, image-only, text-free
- **Candle/flame hue shift** — ±2% luminance on accent color, very slow
- **IntersectionObserver reveals** — once, on entry, with stagger
- **Cursor hover**: hairline extension, color shift, letter-spacing change

### Forbidden (NO)
- **Spring bouncy** (`type: "spring", stiffness: 50`) — breaks calma
- **3D transforms / tilt / perspective rotate** — screams SaaS demo
- **Mouse-follow spotlights / cursor effects** — tech/startup gimmick
- **Chromatic aberration / RGB distortion** — cyberpunk, not manuscrito
- **Marquee / infinite scrollers** — vanity metric energy
- **Typewriter / glitch / scramble** — too loud
- **WebGL shaders as background** — attention-grab, opposite of calma
- **Spline 3D scenes** — wrong medium entirely
- **Heavy box-shadows with multiple layers** — Vercel/Apple launch page
- **Border-radius > 6px on containers** — SaaS cards
- **Scale + rotateX on scroll** (Apple-style device reveal) — consumerist showcase vibe

## Filter protocol

For each proposed component:
1. Identify the motion primitive (what's actually animating)
2. Cross-reference with aligned/forbidden lists above
3. Check the dependencies (Spline runtime, framer-motion, three.js)
4. Check the visual target (3D object? scroll demo? particle?)
5. Return verdict: **YES / NO / PARTIAL**
6. If NO or PARTIAL, propose an aligned alternative that serves the same intent

## Log: patterns evaluated in conversation of 2026-04-17

### 1. Spline 3D scene + Aceternity Spotlight + ibelick Spotlight + shadcn Card
**Verdict:** ❌ **NO**
**Reasoning:**
- Interactive 3D + mouse-follow spotlight = exactly the SaaS/tech aesthetic La Bottega fights against
- Spline runtime adds ~200kb+ for one scene
- Mouse-follow light = "cool startup landing" energy, incompatible with manuscrito-iluminado
- Gradient text with `bg-clip-text` is flagged in bottega_visual.md as "avoid SaaS visuals"

**Aligned alternative:** If user wants depth/atmosphere on a hero, use:
- Slow Ken Burns on the Vermeer backdrop (30-60s zoom 1.0 → 1.05, infinite)
- Candle-flicker hue pulse on the gold accent (4-6s cycle, ±2% lum)
- Zero mouse interaction — the image and text are there, complete.

### 2. Animated Hero — rotating words with framer-motion spring
**Verdict:** ❌ **NO** as-is, ⚠️ reworkable concept
**Reasoning:**
- `type: "spring", stiffness: 50` + `y: -150` cycling = gimmick motion, breaks "ritmo pausado"
- Copy literal startup ("Read our launch article", "Jump on a call", "Sign up here")
- Lucide icons + two buttons with outline+fill variants = classic SaaS hero

**Aligned alternative** — word rotation reframed:
- Last word of hero subtitle cycles through synonyms: "en internet" → "en pantallas" → "en feeds" → "en algoritmos" → back
- Motion: 600ms cross-fade + 8px translateY, NOT spring
- Interval: 4-5 seconds per word (pausado, no 2s)
- Cap at 3-4 synonyms max, always return to canonical ("internet")

### 3. WebGL Shader — RGB chromatic sine distortion
**Verdict:** ❌ **HARD NO**
**Reasoning:**
- Full-screen fixed animated shader = attention grab, opposite of calma
- RGB chromatic aberration is cyberpunk/Tron/iPhone-launch aesthetic
- `fixed top-0 left-0 w-full h-full` on a constantly-animating canvas = maximum visual noise
- Three.js runtime (~600kb) for zero editorial value

**Aligned alternative:** None. The intent (atmospheric background motion) is fundamentally misaligned with the brand. If user insists on background motion, offer:
- Very slow parallax on the Vermeer (already implemented)
- Grain that imperceptibly shifts every 10-15 seconds (via SVG turbulence seed)
- Nothing else. The page should be quiet.

### 4. Container Scroll — 3D perspective card reveal (rotateX + scale)
**Verdict:** ⚠️ **PARTIAL**
**Reasoning:**
- Intent (content reveal on scroll) is valid
- Implementation is Apple-launch-page: rotateX(20deg), scale(1.05 → 1), huge multi-layer box-shadow, border-radius: 30px, border-color #6C6C6C, bg #222
- Specific values explicitly listed in bottega_visual.md "avoid" list: shadow blur > 10px, border-radius > 6px, 3D perspective

**Aligned alternative** — chapter reveal without the 3D performance:
- On scroll into viewport: opacity 0 → 1, translateY 16px → 0, duration 900-1200ms
- Optional: subtle clip-path reveal from top to bottom (like a scroll unrolling)
- Already implemented via useScrollReveal hook + IntersectionObserver
- If user wants "showcase" effect for a specific block, use: slow opacity cross-fade with the preceding content (200ms overlap)

## Rule for future evaluations

Before integrating any motion prompt, answer:

1. **Does this motion happen in a page you'd find in a monastic library?** If no → stop.
2. **Would this motion distract someone reading long-form text?** If yes → stop.
3. **Is the motion decorative or informational?** If decorative only, it must be almost invisible (slow Ken Burns, grain shift). If informational (progress, reveal), it's allowed with measured timing.
4. **Does the component pull in more than 100kb of dependencies?** If yes, think twice. Editorial sites should feel light on the wire.

## Author's rule

"If it would look at home on a Vercel/Linear/Stripe page, it won't fit here. If it would look at home on Aeon / The Paris Review / Are.na / New Yorker long-form, consider it."
