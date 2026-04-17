# La Bottega — Visual Identity

> Última actualización: 2026-04-17. Dirección visual pivoteada a **dark-por-default warm** tras investigación de 7 cuentas de IG de referencia. Ver `aesthetic_moodboard.md` para el análisis completo.

---

## Concepto visual

Un **manuscrito iluminado** traído a pantalla.

No es una landing de startup. No es un newsletter de Substack. No es un blog de Medium. Es un objeto intelectual: página oscura, tinta dorada, tipografía con carácter, pintura clásica como atmósfera. Taller renacentista + biblioteca monástica + editorial contemporánea.

**Regla de oro:** si parece que se hizo en 2025 con una plantilla, falló. Tiene que sentirse **atemporal y hecho a mano**.

---

## Sensación buscada

- Calma con peso
- Profundidad sin solemnidad
- Autoridad sin pretensión
- "Acá se viene a pensar, y te tratan como adulto"

---

## Paleta de colores — Dark principal

```css
/* Background layers */
--bg-base:       #0c0a08;   /* near-black warm, fondo general */
--bg-raised:    #15120e;   /* cards, elevated surfaces */
--bg-sunken:    #080705;   /* footer, zones más profundas */

/* Text */
--text-primary:  #f2ede3;   /* warm white, títulos y lectura */
--text-body:    #c9c3b5;   /* body copy */
--text-muted:    #8a8579;   /* metadata, captions */
--text-faded:    #5a564e;   /* disabled, secondary marks */

/* Accent — parchment gold (core) */
--accent:        #d4b982;   /* gold principal, italic subheads */
--accent-soft:   #e8d5a3;   /* gold claro, hairlines, highlights */
--accent-deep:  #9a824e;   /* gold oscuro, hover, bordes */

/* Semantic (usar con parsimonia) */
--wine:         #7f1d1d;   /* decisión, CTAs pesados */
--deep-blue:     #1d3557;   /* citas largas, pensamiento */
--olive:         #6b705c;   /* proceso, estados positivos */
```

### Paleta light — variante para lectura larga

Activable con `prefers-color-scheme: light` o toggle manual.

```css
--bg-base:       #f5f1e8;   /* marfil cálido, tipo papel */
--bg-raised:     #ffffff;
--bg-sunken:     #e9e2d2;

--text-primary:  #1a1a1a;
--text-body:     #2d2a22;
--text-muted:    #6b655a;
--text-faded:    #a09a8a;

--accent:        #8a6b2e;   /* gold oscuro sobre marfil */
--accent-soft:   #b89854;
--accent-deep:   #5f4920;
```

### Regla
El color **no domina**. La jerarquía viene de tipografía + peso + color de acento, no de bloques de color saturado. Acentos wine/blue/olive solo para secciones con intención específica (manifesto, cita larga, "hot take" block).

---

## Tipografía

### Heading — Serif con personalidad

**Primaria:** `Cormorant Garamond` (Google Fonts) — contraste fuerte, italic distinguible, alta X-height, feeling de libro antiguo.

**Alternativas igualmente válidas:** `Fraunces`, `EB Garamond`, `Playfair Display`.

```css
--font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
```

### Body — Sans limpio, moderno

**Primaria:** `Inter` (Google Fonts) — neutra, muy legible, buen weight range.

**Alternativa premium:** `Söhne` (paga) o `Satoshi`.

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
```

### Display/Mark — Small caps tracked

Para brand mark y attribution. Puede ser el mismo serif en small caps variant, o una sans wide.

```css
--font-mark: 'Cormorant Garamond', sans-serif;
/* Aplicar: font-variant-caps: all-small-caps; letter-spacing: 0.15em; */
```

### Escala tipográfica

```css
--text-xs:    0.75rem;    /* 12px — captions, metadata */
--text-sm:    0.875rem;   /* 14px — small body, brand mark */
--text-base:   1rem;      /* 16px — body */
--text-lg:    1.125rem;   /* 18px — body lead */
--text-xl:    1.5rem;     /* 24px — small heading */
--text-2xl:   2rem;       /* 32px — section heading */
--text-3xl:   2.75rem;    /* 44px — page heading */
--text-4xl:   4rem;       /* 64px — hero */
--text-5xl:   5.5rem;     /* 88px — mega hero */

/* Line heights */
--leading-tight: 1.1;     /* headings */
--leading-snug:  1.3;     /* subheadings */
--leading-body:  1.6;     /* body */
--leading-loose: 1.8;     /* lectura larga */
```

### Principio clave: la italic es protagonista

Heredado de pyramid_consciousness. El subtítulo en **italic + color gold** al mismo tamaño que el título crea una jerarquía por **carácter**, no por peso.

```css
.heading {
  font-family: var(--font-serif);
  font-size: var(--text-3xl);
  font-weight: 400;
  color: var(--text-primary);
  line-height: var(--leading-tight);
}

.heading-italic {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: var(--text-3xl); /* MISMO tamaño */
  font-weight: 400;
  color: var(--accent);        /* cambio es por color */
  line-height: var(--leading-tight);
}
```

---

## Componentes clave

### 1. Brand mark

Triángulo minimal (o figura elegida) + "LA BOTTEGA" small caps tracked. Siempre en la parte superior del contenido. Nunca desaparece al hacer scroll en hero sections.

```html
<header class="brand-mark">
  <svg class="brand-icon">◬</svg>
  <span class="brand-name">LA BOTTEGA</span>
</header>
```

```css
.brand-name {
  font-family: var(--font-serif);
  font-variant-caps: all-small-caps;
  letter-spacing: 0.18em;
  font-size: var(--text-sm);
  color: var(--accent-soft);
}
```

### 2. Hairline divider

```css
.hairline {
  height: 1px;
  background: var(--accent-deep);
  border: none;
  width: 48px;           /* corto, no full-width */
  margin: 2rem 0;
}
```

### 3. Quote block (estilo pyramid)

Título → italic subtítulo (gold) → body pequeño → attribution en small caps.

```html
<article class="quote-block">
  <header class="brand-mark">◬ LA BOTTEGA</header>
  <hr class="hairline">
  <h2 class="heading">Difficulty does not come to break you.</h2>
  <p class="heading-italic">It comes to reveal what you are made of.</p>
  <p class="body">Character is not declared. It is forged.</p>
  <footer class="attribution">— DEMÓCRITO</footer>
</article>
```

### 4. Hero con imagen clásica

Pintura clásica como `background-image`, overlay oscuro 50-65%, contenido encima.

```css
.hero {
  background-image: linear-gradient(
    rgba(12, 10, 8, 0.55),
    rgba(12, 10, 8, 0.75)
  ), url('painting.jpg');
  background-size: cover;
  background-position: center;
  color: var(--text-primary);
}
```

### 5. Card / Chapter

Sin sombra, sin borde pesado. Solo hairline superior (acento) + aire + tipografía.

```css
.chapter {
  padding: 3rem 2rem;
  border-top: 1px solid var(--accent-deep);
  background: transparent;
}
```

### 6. Botones

Minimal. Solo texto + hairline abajo al hover. Nada de fondos, radius agresivos, gradientes.

```css
.btn {
  display: inline-block;
  padding: 0.75rem 0;
  font-family: var(--font-serif);
  font-variant-caps: all-small-caps;
  letter-spacing: 0.15em;
  color: var(--accent);
  background: none;
  border: none;
  border-bottom: 1px solid var(--accent-deep);
  transition: color 200ms ease, border-color 200ms ease;
}
.btn:hover {
  color: var(--accent-soft);
  border-color: var(--accent-soft);
}

/* CTA pesado — solo para conversión crítica */
.btn-heavy {
  background: var(--wine);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: none;
}
```

### 7. Progress indicator (capítulos)

Tomado de pyramid_consciousness ("1 / 10 — swipe through"). Útil en multi-step o long-form.

```html
<footer class="progress">
  <div class="progress-bar">
    <span class="progress-fill" style="width: 10%"></span>
  </div>
  <span class="progress-text">1 / 10</span>
</footer>
```

---

## Estilo de imágenes

### Sí
- Pintura 16-19 siglo (Caspar David Friedrich, Bouguereau, Böcklin, Repin, Courbet)
- Grabado / woodcut
- Escultura clásica (mármol)
- Fotografía b&w de paisaje europeo, arquitectura vieja
- Detalles de oficios (mano con pluma, forja, taller, herramientas)
- Texturas: papel, lino, pergamino, cuero

### Tratamiento
- **Warm-dark overlay** cuando se usa como background (rgba del `--bg-base` al 50-70%)
- **Grain sutil** opcional (8-12% opacity noise SVG)
- **No saturar** — desaturar 10-15% el color si la imagen es demasiado moderna
- **Nunca** usar con esquinas redondeadas agresivas — máximo 4px border-radius, o mejor 0

### No (lista prohibida)
- Stock corporate (laptop, sonrisas, handshake)
- 3D render, glass morphism, isometric, gradients SaaS
- Screenshots de dashboards
- Iconografía Notion/Figma/Vercel (rayo, engranaje, etc.)
- Emojis como bullets
- Gente con headset sonriendo

---

## Texturas y detalles

- **Grain sutil** en fondos oscuros (generar con SVG feTurbulence, 0.9 baseFrequency, opacity 8%)
- **Efecto papel** opcional en light mode (sutil noise + warm tint)
- **Transiciones lentas**: 200-300ms para todo, easing custom `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Scroll**: smooth scroll habilitado, no snap agresivo
- **Animaciones**: solo fade y translate sutil. Nada de spring bouncy

```css
* {
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
}
html {
  scroll-behavior: smooth;
}
body {
  background: var(--bg-base) url('data:image/svg+xml;utf8,...grain...') repeat;
}
```

---

## Iconografía

Todos los íconos son **símbolos tipográficos o SVG minimalistas**, nunca ilustraciones.

- Triángulo (◬) — jerarquía, pirámide de conocimiento
- Cruz lusitana / flor de lis — heráldica, autoridad
- Círculo — comunidad, completitud
- Ojo (cuidado con masonic vibes, usar poco)
- Compás / escuadra — oficio, geometría
- Columnas clásicas — fundamentos

Todos en **line-style**, 1-1.5px stroke, color `--accent`.

---

## Lenguaje visual (copywriting UI)

Ya estaba definido — mantener:

- "Secciones" → "Capítulos"
- "Beneficios" → "Lo que vas a trabajar"
- "Precio" → "Contribución"
- "Inscribirse" → "Entrar al taller"
- "Testimonios" → "Voces del taller" (o directamente no usar)
- "Blog" → "Archivo" o "Biblioteca"

---

## Lo que define ser "premium editorial" vs "SaaS con serif"

Chequeo rápido — si cualquiera de estos es `sí`, revisar:

- ¿Tiene testimonios en cards con avatares redondos? ❌
- ¿Hay un "as seen on" con logos? ❌
- ¿Los CTAs dicen "Start free trial", "Get started now"? ❌
- ¿Hay un comparador de pricing con checkmarks? ❌
- ¿Hay un hero con "Supercharge your X"? ❌
- ¿Aparece un countdown o "spots left"? ❌
- ¿Los componentes tienen border-radius > 6px? ❌
- ¿Hay sombras con blur > 10px? ❌
- ¿Hay emojis como bullets? ❌

La Bottega no debería tener **ninguno** de esos. Si algo de eso aparece en la landing, hay que reemplazarlo con su versión editorial (citas, extractos, lecturas recomendadas, progress narrativo).

---

## Diferencial estético

El nicho de "crecimiento/performance/growth" hace todo lo mismo: negro-neón, tech-aggressive, "unlock/supercharge/10x".

La Bottega hace: **warm dark, gold sutil, serif con carácter, pintura clásica, lenguaje de taller**.

Ese contraste **solo** ya te posiciona premium. No hace falta gritar "premium" en ningún lado.

---

## Prompt actualizado para Lovable / Claude Code / generadores

```
Design a premium editorial site for "La Bottega Digital" — not a SaaS landing.

Concept: An illuminated manuscript reimagined as a web product. Renaissance workshop + monastic library + contemporary editorial.

Dark mode by default (warm, not cold).

Color palette (dark):
- Background: #0c0a08 (warm near-black)
- Text primary: #f2ede3 (warm white)
- Accent: #d4b982 (parchment gold)
- Semantic: #7f1d1d wine, #1d3557 deep blue (rare use)

Typography:
- Headings: Cormorant Garamond (serif with strong italic contrast)
- Body: Inter
- Brand mark: serif small caps, tracked-out letterspacing

Key UI principles:
- Italic subheadings at same size as title, colored gold — hierarchy by character not size
- Hairline dividers (1px gold, short 48px width) instead of boxes
- Classical oil paintings as backdrops with 55-75% dark overlay
- Sections called "Chapters" with progress indicators (1/10)
- Minimal buttons: text + bottom hairline, no fill

Absolutely avoid:
- Startup landing patterns (testimonial cards, "as seen on", pricing tables with checkmarks)
- SaaS visuals (dashboards, 3D, glass morphism, gradients)
- Aggressive CTAs ("Get started", "Unlock", "Supercharge")
- Emojis as bullets
- Border-radius > 6px, shadows with blur > 10px

Tone: quiet authority. Think Aeon magazine × illuminated manuscript × New Yorker long-form.

Imagery: 16-19th century European painting (Friedrich, Bouguereau, Courbet), woodcuts, classical sculpture, b&w photography of old European architecture. No stock photography.

Sections as chapters:
1. Brand mark + hero (atmosphere)
2. Declaration (philosophy) — single quote-block
3. The Problem — what's broken in the current state
4. The Craft — what we actually do
5. The Workshop — how the community works
6. Inside — what's in the private space
7. Voices — subtle community presence (no avatars, just quotes + attribution)
8. A pause (pure image, no text)
9. Final invitation — minimal CTA
```

---

## Referencias primarias (orden de peso)

1. `pyramid_consciousness` — patrón directo de composición editorial
2. `viziandrei` — color-block para secciones con intención
3. `beautiful.classic.world` + `aragonleonart` — banco de imágenes
4. `euronsoul` — tratamiento atmosférico
5. `medieval_memory` — tono (mezcla de serio + irónico)
6. `recovering.overthinker` — voz personal en contenido, no UI

Ver `aesthetic_moodboard.md` para análisis completo cuenta por cuenta.
