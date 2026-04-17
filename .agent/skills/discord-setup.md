---
name: discord-setup
description: Use when the user wants to set up, configure, populate, or manage the La Bottega Discord server. Covers server creation, channel structure, roles, welcome/onboarding messages, cultural rules, and free→paid conversion touchpoints. Guides the user through Discord UI actions (we can't automate the server without a bot token), and provides all templated content to copy-paste.
---

# Discord Setup — La Bottega

Codified playbook for launching and running the Discord community per `bottega_roadmap.md` Fase 1.

## Why this exists as a skill

Discord can't be managed headlessly by Claude Code — server creation, channel config, and role assignment require user actions in the Discord UI (or a bot with the right scopes, which we don't have here). This skill is a **guided procedure + content templates**: you do the clicks, we supply every piece of copy, rule, and structural decision pre-vetted against the brand voice.

## When to trigger

- User says "vamos a armar el Discord", "arranco la comunidad", "setup del server"
- User asks for welcome message, onboarding, channel structure, rules
- User wants to draft the first X/IG post announcing the Discord
- User needs to decide between free/paid tier structure for Discord

## Prerequisites

- User has a Discord account
- User has the La Bottega brand docs loaded (`bottega_core.md`, `bottega_voice.md`, `bottega_roadmap.md`)

## Phase 1 — Server creation

### Step-by-step (user does in Discord)

1. Open Discord desktop app (not web — desktop gets the full permissions UI)
2. Left sidebar → `+` (add server) → **Create My Own** → **For a club or community**
3. Server name: **La Bottega**
4. Upload server icon: use the same triangle mark from `public/favicon.svg` (brand mark). Can be generated at 512x512 from the SVG or leave the default initial for now.
5. Create

### Server settings to adjust immediately

- **Server Settings → Overview**:
  - Description: *"Un taller digital. Se aprende observando, practicando, repitiendo."*
  - System messages channel: `#bienvenida` (create first, then come back)
  - Default notification: Mentions only (respects "calma" principle)

- **Server Settings → Safety Setup**:
  - Verification level: **Medium** (account > 5 min old). Filters noise without being hostile.
  - Explicit content filter: **Scan from all members**
  - Enable community: **Yes** (unlocks more moderation tools)

- **Server Settings → Roles** — set up early (Phase 3 below)

## Phase 2 — Channel structure

Create these **categories + channels** in this exact order. Copy the `#name` and the topic one-liner. Topics show up under the channel name in the UI — they're the first filter for new arrivals.

### INICIO (category)
| Channel | Topic |
|---|---|
| `#bienvenida` | Mensaje fijado + qué esperar acá. Lee esto primero. |
| `#como-funciona` | Las reglas del taller. Cómo nos movemos, qué hacemos, qué evitamos. |
| `#presentaciones` | Contá quién sos, qué estás construyendo, qué querés aprender. |

### APRENDIZAJE (category)
| Channel | Topic |
|---|---|
| `#observatorio-digital` | Tendencias, movimientos, señales del internet. Mirá antes de opinar. |
| `#laboratorio` | Experimentos en curso. Qué estás probando esta semana. |
| `#metricas-y-datos` | Números, análisis, preguntas sobre performance. Contexto antes que métrica. |
| `#creatividad` | Ads, copy, landings, hooks. Desarmar lo que funciona. |
| `#herramientas-ia` | IA aplicada al oficio. Sin hype. |

### OPERACIÓN (category)
| Channel | Topic |
|---|---|
| `#proyectos` | Qué estás construyendo. Actualizaciones propias. |
| `#analisis` | Breakdowns de casos reales — propios o ajenos. |

### COMUNIDAD (category)
| Channel | Topic |
|---|---|
| `#cafe` | Off-topic, networking, lectura recomendada, humor. |

### Channel-level tweaks
- `#bienvenida`, `#como-funciona`: **read-only** for all roles except admins. Right-click channel → Edit Channel → Permissions → `@everyone` → Deny "Send Messages".
- `#presentaciones`: **slowmode 5 min** to avoid spam.
- All channels in APRENDIZAJE + OPERACIÓN: **slowmode 10 seconds** (nudges reflection).

## Phase 3 — Roles

Create these in **Server Settings → Roles** (in this stack order — Discord reads top-down for permissions):

| Role | Color | Hoisted | Purpose |
|---|---|---|---|
| **Maestro** | #d4b982 gold | Yes | Admins / moderators. You + 1-2 trusted ops later. |
| **Artesano** | #9a824e dark gold | Yes | Paid members (Fase 2). Access to private channels (to be created later). |
| **Aprendiz** | default grey | No | Default for everyone on join. |

**Role permissions** — start strict, open later:

- **Aprendiz**: Read + Send in all non-admin channels. No mass mentions. No embed links (prevents drive-by spam).
- **Artesano**: + add reactions freely, use threads, embed links.
- **Maestro**: admin.

## Phase 4 — Welcome + onboarding content

### Pinned message in #bienvenida (copy-paste)

```
Bienvenido a La Bottega.

Este no es un lugar para consumir contenido. Es un espacio para aprender a
pensar y operar mejor en internet.

**Para empezar:**
1. Leé #como-funciona — son las reglas del taller.
2. Andá a #presentaciones y contanos: qué hacés, qué querés aprender, qué estás probando.
3. A partir de ahí, el taller arranca.

— La Bottega
```

### Pinned message in #como-funciona (copy-paste)

```
**Cómo nos movemos acá.**

Acá se viene a pensar. Eso tiene implicancias:

• **Ritmo pausado.** No hay urgencia. Leé antes de responder. Pensá antes de preguntar.
• **Contexto antes que métrica.** "Mi ROAS bajó" no sirve. "Mi ROAS bajó y esto es lo que observé"
  ya es una conversación.
• **Práctica real.** Traé casos tuyos — negocios, campañas, decisiones. Las abstracciones no suman.
• **Cero hype.** "Esto es buenísimo" no aporta. "Esto funciona porque X" sí.
• **Criterio > opinión.** Defendé lo que decís. Aceptá cuando no sabés.

**Lo que no va:**
— Autopromoción constante (ok contar qué construís, no ok vender algo cada día).
— Links sin contexto.
— "Alguien sabe…" sin haber googleado primero.
— Debates de ideología. Acá se viene a trabajar.

Si algo no te cuadra, hablalo con un Maestro. La moderación es proactiva.
```

### Pinned message in #presentaciones (copy-paste)

```
**Template para presentarte**

Pegá y completá. Sin formalismo.

— **Nombre / ciudad:**
— **A qué te dedicás hoy:** (marketer, founder, freelance, etc.)
— **Qué estás probando actualmente:** (una campaña, un negocio, un proyecto propio)
— **Qué querés aprender:**
— **Algo que te haya hecho ruido esta semana:** (una observación, un error ajeno, una idea)

Respondemos todos los nuevos en 48h.
```

## Phase 5 — First 48h activation

After server is live + first 10-20 members join:

- **Respond personally to every #presentaciones post** within 48h. Not with "bienvenido" — con una observación real sobre lo que contaron. Esto define la cultura desde el día uno.
- **Post in #observatorio-digital** daily for the first 2 weeks. Una observación, un link analizado, una pregunta abierta. No hace falta volumen — consistencia.
- **Pin 3 posts iniciales** que muestren qué tipo de conversación querés. Ejemplo: un breakdown de campaña en `#analisis`, una observación en `#observatorio-digital`, un caso propio en `#proyectos`.

## Phase 6 — Free → Paid transition (Fase 2 del roadmap)

When you hit 100-300 members and conversation has density, open the paid tier:

1. Create new category **LA BOTTEGA PRIVADA** with channels:
   - `#operator-calls` (calendar + links de las live weekly)
   - `#auditorias` (revisiones 1:1 async)
   - `#playbooks` (knowledge base pineada)
   - `#taller-privado` (discusión core del grupo paga)
2. Permissions: only **Artesano** role can see/post. `@everyone` denied.
3. Create payment tier on Whop / Outseta / ConvertKit Commerce (pick simplest). Webhook → assign Artesano role on successful payment.
4. **Announcement in the free server**: use the invitation copy already drafted in `bottega_roadmap.md`. Keep it minimal — link to a separate landing page (can reuse the web product's invitation chapter as the landing).

## Operational rules for you (the Maestro)

- **Intervention rule**: if a conversation drifts to hype / tactics-without-context / gurú talk, don't lecture. Reply with a grounded counter-question. "¿Cuál es el contexto del negocio?" "¿Cómo llegaste a esa conclusión?" Shapes behavior faster than rules do.
- **Silence is OK.** If a day has 3 messages, that's fine. The brand voice is calma. Don't force activity.
- **Kill-switch for drift**: if someone repeatedly ignores #como-funciona rules, timeout 1h first, then DM explaining, then kick if it repeats. Document in a private mod log (a hidden channel only Maestros see).
- **Don't gate content publicly available elsewhere.** Playbooks exclusive to paid should be exclusive. Playbooks you already tweeted should not be paywalled — that creates resentment.

## What to announce publicly when the server opens

Post this in X + IG + LinkedIn the day the Discord goes live. Uses your established voice.

### X thread (copy draft)

```
Abrí La Bottega.

Un taller digital donde se aprende a pensar cómo crecen los negocios en internet.

No es un curso. Tampoco una newsletter.

Es un espacio para operar mejor, con gente que entiende.

→ [link al Discord invite]
```

### IG caption / story draft

```
La Bottega está abierta.

Un taller digital. Se aprende observando, practicando,
repitiendo — hasta que lo que antes parecía ruido se
vuelve patrón.

Link en bio para entrar al Discord.

— 2026
```

## Post-launch: wire the Discord link into the web product

When the Discord invite URL is permanent, update:

1. `src/App.jsx` — add a secondary CTA below the Waitlist in the invitation chapter, or add a "Capítulo VII · La Comunidad" that leads to Discord
2. Consider: hero footer already says "MMXXVI · Taller Digital" — could add `· Discord` with link there for early adopters
3. Don't put the Discord invite at the top — the Waitlist filter is intentional; people who don't even give an email don't belong in the community yet

Specific snippet for the invitation chapter (replace the current copy when ready):

```jsx
<Chapter id="invitation" label="Capítulo Final · La Invitación" title="Entrar al taller.">
  <p>Si llegaste hasta acá, probablemente estés buscando un lugar donde pensar mejor.</p>
  <p>La puerta está abierta. El ritmo lo marcás vos.</p>
  <Waitlist />
  <a
    href="https://discord.gg/YOUR_INVITE"
    target="_blank"
    rel="noopener"
    className="btn-editorial"
    style={{ marginTop: 'var(--space-md)' }}
  >
    O entrá directo al Discord
  </a>
</Chapter>
```

## Failure modes to watch

- **Empty server for weeks**: your only job for 30 days is to seed conversations. Don't wait for others. Post breakdowns, observations, questions. Reply to every #presentaciones within 24h.
- **Silent lurkers (1000 members, 10 talk)**: healthy ratio is 10-20% active. Below 5% means the culture stopped inviting participation. Run a "traigan un caso propio esta semana" challenge.
- **Drift into hype/tactics**: brand dies fastest when it becomes another growth-hacks chat. Moderate proactively — not aggressively, but consistently.
