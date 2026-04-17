# La Bottega — Aesthetic Moodboard

> Investigación visual basada en 7 cuentas de Instagram elegidas como referencia, ordenadas por prioridad. Captura + análisis + síntesis de ADN visual para el producto web.

---

## Cuentas analizadas

| # | Cuenta | Escuela | Rol en el moodboard |
|---|--------|---------|---------------------|
| 1 | `pyramid_consciousness` | Editorial dark | **Referencia principal de producto web** |
| 2 | `viziandrei` | Editorial color-block | Tratamiento de imagen + ritmo |
| 3 | `recovering.overthinker` | Personal collage | Voz, no UI |
| 4 | `euronsoul` | Cinematic heritage | Atmósfera, tratamiento foto |
| 5 | `beautiful.classic.world` | Archive clásico | Banco de imágenes |
| 6 | `medieval_memory` | Archive medieval + meme | Iconografía, tono |
| 7 | `aragonleonart` | Archive clásico religioso | Banco de imágenes |

---

## Dos escuelas claras

**Editorial** (1, 2, parcialmente 3) — texto sobre imagen, jerarquía tipográfica fuerte, imagen como backdrop.
→ **Traducible a UI** (landings, cards, hero sections, quote blocks).

**Archive** (4, 5, 6, 7) — pura imagen, sin texto, arte clásico como protagonista.
→ **Banco de atmósfera**. No se traduce a UI pero sí al *feel* general: qué imágenes usar, qué tratamiento, qué ambiente.

Para el producto web, la **editorial es la referencia operativa**. La archive alimenta el banco visual.

---

## Análisis por cuenta

### 1. pyramid_consciousness — el patrón a seguir

**Lo que hace visualmente:**
- Fondo: near-black cálido (no negro puro, tiene warm undertone)
- Imagen de arte clásico como backdrop semi-oscurecido (overlay negro al 40-60%)
- Brand mark arriba: triángulo minimal + "PYRAMID CONSCIOUSNESS" en small caps tracked-out, crema suave
- Hairline rule (línea fina dorada/crema) como separador
- Título grande en serif regular: blanco cálido
- Subtítulo en serif italic: **mismo tamaño que el título**, color gold/cream
- Body copy en sans-serif pequeño, gris-blanco
- Attribution al pie: "— DEMOCRITUS" en small caps
- Progress indicator sutil: "1 / 10" + barra fina

**Paleta detectada:**
- BG: `#0a0907` → `#141210` (warm near-black)
- Text primary: `#f2ede3` (warm white)
- Accent gold: `#d4b982` → `#e8d5a3` (parchment gold)
- Muted text: `#8a8579`

**Tipografía:**
- Serif con personalidad (tipo Cormorant / Tiempos / Playfair — alta X-height, contraste fuerte)
- Italic del mismo serif para sub-headings
- Sans pequeño limpio (tipo Inter / Söhne) para body
- Small caps tracked-wide para brand mark y attribution

**Principio clave:** **la italic no es variación del título, es el título**. Se usa al mismo tamaño, con color distinto. Es jerarquía por color + estilo, no por tamaño.

### 2. viziandrei — el contrapunto editorial color

- Mezcla **color-blocking saturado** (rojo coral + celeste + marfil) con pintura clásica
- Pintura renacentista con overlays de color duotono
- Tipografía mezclada agresiva: serif condensed + bold sans + italic
- "Magazine cover" feel
- Uso de subrayados, tachados, highlights (como marcas sobre papel)
- Más energético que pyramid — sirve para contenido tipo "breakdown", "rant", opinión fuerte

**Para el producto web:** guardar como referencia para **secciones específicas** — un "hot take" block, un "manifesto" section, CTAs que necesitan presencia. No para el general.

### 3. recovering.overthinker — voz, no UI

- Collage personal: selfies + text blocks + pintura clásica recortada
- Annotations tipo cuaderno (subrayados, llaves, notas al margen)
- Aesthetic menos pulida, más "real"

**Para el producto web:** **no se traduce a UI**. Pero el **tratamiento de anotación manuscrita** (subrayado, palabras tachadas, margenalia) puede inspirar **detalles** en un blog post o un playbook individual.

### 4. euronsoul — cinematic

- Video stills, paisajes europeos, b&w cinema
- Logo heráldico (flor de lis en escudo) — tipografía tipo clásica label
- Paleta desaturada + tonos fríos
- "Old world Europe" atmósfera

**Para el producto web:** atmósfera general, tratamiento de imágenes hero. **Grain + low saturation + warm shadows**.

### 5. beautiful.classic.world — archivo romántico

- Puro 19th century oil painting
- Escenas pastorales, paisajes, genre scenes
- Sin texto, sin intervención
- Earth tones: ocre, verdes apagados, azules grises

**Para el producto web:** **banco directo de imágenes**. Cualquier hero, card background, o sección que necesite imagen puede venir de acá.

### 6. medieval_memory — medieval + modern annotation

- Arte medieval serio + memes/edits modernos
- Yuxtaposición irónica ("Born to: castle / Forced to: office chair")
- Tipografía decorativa blackletter ocasional
- Tono más irreverente

**Para el producto web:** **tono**, no estilo. Permite mezclar serio + juego sin perder autoridad.

### 7. aragonleonart — archivo épico religioso

- Pintura histórica-religiosa europea
- Dramatic chiaroscuro, reds/blacks, figuras monumentales
- Contenido más intenso emocionalmente que #5

**Para el producto web:** banco de imágenes para **momentos de peso** — hero principal, secciones de decisión, página de manifiesto.

---

## Patrones transversales (el ADN)

Destilando las 7, lo que **se repite** es el ADN que tiene que vivir en La Bottega:

### 1. Arte clásico / pre-industrial como lenguaje visual
No stock, no ilustración moderna, no render 3D. Pintura, grabado, escultura, fotografía b&w de paisaje europeo. **Anti-futurista por convicción.**

### 2. Tipografía serif protagonista
El serif no es "para título y chau". Es el carácter del sitio. Debe tener personalidad: alta modulación, contraste, italic distinguible.

### 3. Jerarquía por contraste de color, no solo de tamaño
El mejor truco de pyramid_consciousness: italic + color de acento para segunda línea. No cambia tamaño — cambia tono. Esto es **fundamentalmente distinto** a la jerarquía SaaS estándar.

### 4. Hairlines como estructura
Línea fina horizontal (1px, color acento) separa secciones. No boxes, no cards con sombra. Solo líneas y aire.

### 5. Iconografía simbólica mínima
Triángulo, círculo, flor de lis, cruz, escudo. Siempre como **mark tipográfico**, no como ilustración. Integrados en el header como parte del wordmark.

### 6. Oscuro cálido, no oscuro frío
El dark de estas cuentas **no es #000 ni #111 grisaceo**. Es un **near-black con undertone cálido** — algo así como piedra basáltica bajo luz de vela. Los acentos son dorados de manuscrito iluminado, no amarillos neón.

### 7. Atribución visible
Cada post/quote tiene autor, fuente, fecha. No es solo "contenido" — es **contenido citado**, con autoridad de archivo.

### 8. Progresión narrativa
"1 / 10", "Swipe through", "Part II". Se trata el contenido como **capítulos**, no como feed infinito.

---

## Cómo esto actualiza la dirección visual original

Tu `bottega_visual.md` original apuntaba a **marfil cálido + negro tinta** (light mode tipo libro).

**Las 7 referencias apuntan a dark cálido + gold.**

No es una contradicción total — ambos son editoriales, ambos son serif-driven, ambos priorizan calma y contenido. Pero la **temperatura dominante** cambia.

### Recomendación: pivotear a dark-por-default

**Razones:**
1. Tu #1 prioridad (pyramid_consciousness) es el caso más claro del moodboard y es dark
2. Dark cálido con gold diferencia más de la avalancha de "minimal ivory SaaS" que saturó el mercado 2023-2025
3. La objeción original ("todos en el nicho hacen negro/neón/tech") no aplica acá — **este dark no es tech, es manuscrito iluminado**. Completamente distinta lectura
4. El contenido que querés subir (análisis, frameworks, quotes) lee mejor como "libro de tapa negra con hoja crema" que como "papel ivory con tinta"
5. Te permite usar la pintura clásica con más impacto — la luz de una pintura renacentista cobra dramatismo contra fondo oscuro, se aplana contra fondo marfil

### Pero: light mode como variante

El modo claro tiene lugar:
- Posts largos del blog (leer mucho texto en dark cansa)
- Playbooks descargables (PDF print-friendly)
- Sección de archivo/biblioteca

**Plan:** dark como skin principal del sitio, light mode como alternativa explícita para lectura larga.

---

## Traducción a decisiones concretas (código)

Ver `bottega_visual.md` actualizado para:
- Variables CSS exactas
- Tipografías elegidas con fallback
- Escala tipográfica
- Componentes clave (hero, quote block, chapter divider, card)
- Tratamiento de imágenes (overlay, duotono, grain)

---

## Referencias capturadas

Screenshots de las 7 cuentas fueron tomados durante la sesión del 2026-04-17. Las capturas muestran:
- Profile grid de cada cuenta (header + 6-12 posts)
- Zoom de detalle en pyramid_consciousness para confirmar escala tipográfica

Si querés re-capturar o profundizar en alguna cuenta específica, usá la skill `.agent/skills/aesthetic-extractor.md`.
