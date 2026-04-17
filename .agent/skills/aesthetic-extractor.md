---
name: aesthetic-extractor
description: Use when user provides one or more Instagram account URLs as visual references and wants to extract an actionable design system (palette, typography, composition) for the La Bottega web product. Captures feed via browser, analyzes patterns, synthesizes into moodboard + updated visual identity.
---

# Aesthetic Extractor

Extracts visual ADN from Instagram reference accounts and translates it into actionable design decisions for the La Bottega web product.

## When to use

Triggers:
- User provides 1+ Instagram URLs as "visual references", "refes estéticas", "moodboard sources"
- User asks to "analyze these accounts", "capture the aesthetic", "build a moodboard"
- User asks to update `bottega_visual.md` based on new references

Do NOT trigger:
- If user wants to copy a specific post (that's not aesthetic extraction, that's replication)
- If references are non-visual (articles, podcasts, etc.)

## Prerequisites

- **Claude in Chrome** MCP extension installed and connected
- Chrome browser open with **an active Instagram session** (user logged in)
- User confirmed which account takes priority (or provided an ordered list)

If prerequisites not met, stop and ask. Do not try to use WebFetch on Instagram URLs — returns empty HTML without session.

## Workflow

### 1. Capture phase (fast, broad)

For each account in priority order:
1. `mcp__Claude_in_Chrome__navigate` → account URL
2. `mcp__Claude_in_Chrome__computer` action=`screenshot` → capture profile header + first row of grid
3. `mcp__Claude_in_Chrome__computer` action=`scroll` direction=`down` amount=`5-6` → capture second grid view
4. For the **top 1-2 priority accounts only**: open a representative post and use action=`zoom` on the text/typography area for detail

**Keep it fast**: 2 screenshots per account is enough to detect patterns. Don't drill into every post.

### 2. Analysis phase (per-account notes)

For each account, note:
- **Palette**: dominant background, text colors, accent colors (use warm/cool descriptors, not just hex)
- **Typography**: serif vs sans, italic usage, hierarchy mechanism (size vs color vs weight)
- **Composition**: text-over-image? color-blocked? pure image? collage?
- **Iconography**: what symbols recur (triangle, cross, shield, circle)?
- **Tone**: editorial / personal / archive / cinematic / memetic?

### 3. Pattern extraction (the ADN)

Across all accounts, identify what **repeats**. These patterns are the brand's visual ADN.

Examples to look for:
- Classical vs modern imagery bias
- Dark vs light mode dominance
- Serif-led vs sans-led typography
- How hierarchy is achieved (size vs italic vs color)
- Use of hairlines, dividers, borders
- Attribution/citation patterns
- Symbols as marks vs illustrations

### 4. Tension check (critical)

Compare the extracted ADN against the **current** `bottega_visual.md`. If there's divergence (e.g. original says light mode but refs are all dark), **flag it explicitly** and recommend a direction. Don't silently pivot — the user needs to know their previous direction is being challenged.

### 5. Output phase

Write **two files**:

**`aesthetic_moodboard.md`** (new or overwrite) — the research document:
- Table of accounts analyzed
- Per-account analysis
- Cross-cutting patterns (the ADN)
- Tensions with current direction
- Recommendation

**`bottega_visual.md`** (update) — the operational document:
- CSS variables with exact hex values
- Typography choices (Google Fonts names + fallback)
- Component specs with HTML/CSS examples (brand mark, quote block, hero, hairline, card, button, progress)
- Do/don't lists for imagery
- Updated prompt for generators (Lovable, Claude Code)

### 6. Deliver

Summary to user:
- One paragraph: what pattern emerged
- Key tension with previous direction (if any) + your recommendation
- List of files written
- Next concrete step: "if this direction is approved, the next move is to [build component X / update App.jsx / generate prototype]"

## Principles

- **Speed over completeness**. 2 screenshots per account, not 20. Patterns emerge fast.
- **Call out divergence**. If the new refs contradict old direction, say so. Don't be diplomatic about strategic choices.
- **Output must be code-ready**. Hex values, font names, CSS snippets. Not "warm tones" — `#d4b982`.
- **Preserve user intent**. If the original visual.md reflects a strong user preference (e.g. "avoid tech/neon"), keep the spirit. Dark-warm is not neon.
- **Two documents, two audiences**. Moodboard = research. Visual.md = spec. Don't mix.

## Common failure modes

- **IG login wall**: if screenshots show login screen, stop and ask user to log in. Don't keep taking screenshots of the wall.
- **Over-screenshotting**: resist the urge to capture every post. 2 per account, 1 deep-zoom on the top priority.
- **Vague synthesis**: "The accounts feel sophisticated" is useless. Name the mechanism: "hierarchy achieved by italic + color swap, not by size".
- **Ignoring the existing doc**: always read `bottega_visual.md` before writing. Preserve what still works.

## Post-completion

After delivering, ask one question: **"¿Arrancamos el componente hero en el App.jsx con esta paleta o querés ver un componente específico primero?"** — keep momentum toward shipping.
