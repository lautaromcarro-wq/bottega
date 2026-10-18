# Capítulo 1 — Variante e-commerce (Tiendanube)

Esta es la variante del Capítulo 1 para cuando el cliente SÍ tiene una tienda online formal. Para el caso base del capítulo (cliente chico, sin plataforma de e-commerce — el más común entre los alumnos reales de La Bottega) ver `01-setup-tracking-medicion.md`.

Caso de referencia real: Sanitarios Larralde (freelo-workspace/sanitarios-larralde), septiembre 2026.

## Checklist paso a paso

### 1. GA4 — integración NATIVA de Tiendanube (no GTM)
1. Creá la propiedad GA4 en analytics.google.com si no existe.
2. En GA4: **Admin → Data Streams → Web** → copiá el Measurement ID (`G-XXXXXXX`).
3. **Admin → Data Streams → [tu stream] → Measurement Protocol API secrets** → crear uno → copiar.
4. En Tiendanube: **Configuración → Códigos externos → Google Analytics 4** → pegar Measurement ID + API Secret.
5. En el mismo panel: subir retención de eventos de 2 a **14 meses**, activar **Google Signals** y **recogida de datos proporcionados por el usuario**.
6. Vincular con Google Ads y con Merchant Center desde ahí mismo si aplica.
7. Marcar `purchase` como conversión primaria en GA4 (Admin → Eventos → marcar como conversión, si no viene marcado solo).

**Por qué nativo y no GTM:** la integración nativa usa **Measurement Protocol (server-side)** — manda las conversiones desde el backend de Tiendanube, no depende del navegador del cliente ni se pierde por ad blockers/ITP. Dispara 10 eventos de ecommerce automático sin configurar nada (view_item, add_to_cart, begin_checkout, purchase, etc.). GTM para esto sería reinventar con peor calidad de señal algo que ya viene resuelto server-side.

### 2. Meta — Pixel + Conversions API NATIVO de Tiendanube (no Pixel suelto)
1. Pixel se crea e instala directo desde **Configuración de Tiendanube** (no manual, no vía GTM).
2. Igual: catálogo de productos se crea y sincroniza nativo desde el panel de Tiendanube (Google Shopping/Meta catálogo).
3. Confirmar en Meta Events Manager que `Purchase` llega con `value` + `currency` y buen **Event Match Quality** — mandate una compra de prueba antes de dar por armado el tracking.

**Por qué nativo:** mismo argumento que GA4 — Conversions API es server-side, evita la pérdida de señal de un Pixel client-side puro (iOS, bloqueo de cookies).

### 3. Google Ads — conversión importada de GA4 (no tag propio)
1. Una vez GA4 tiene `purchase` server-side andando y está vinculado a Google Ads (paso 1.6).
2. En Google Ads: **Conversiones → + Nueva acción → Importar → Google Analytics 4** → importar el evento `purchase` → marcar como conversión primaria.
3. **No instalar el tag directo (AW-XXXXXXX / "Etiqueta de Google")** en el sitio — es una fuente de conversión alternativa y **Tiendanube prohíbe tener las dos activas a la vez** (duplica/pisa datos).
4. Google Ads va a seguir mostrando una alerta "Calidad de Etiqueta: Urgente" en Herramientas → Gestor de Datos → Etiqueta de Google — **es esperable e ignorable**, esa pantalla mide cobertura del tag directo que decidiste no usar. No se puede eliminar la Etiqueta de Google de la cuenta (es la default), simplemente no se instala.

### 4. Merchant Center (si hay catálogo/Shopping)
1. Se crea desde **Google Shopping en el panel de Tiendanube** (no desde Merchant Center directo) — sincroniza el catálogo solo.
2. Requiere página de **política de devoluciones** publicada en la tienda antes de poder completar la config.

### 5. GTM — solo para lo que NO es ecommerce estándar
Usar Google Tag Manager únicamente para eventos custom de CRO que la integración nativa no cubre: scroll depth, clics en elementos específicos, interacciones de formularios. **Nunca duplicar los 10 eventos de ecommerce que ya manda GA4 nativo** — eso rompe la medición (todo se cuenta doble).

## Errores comunes (verificados en el caso real)

- **Conexiones viejas de un sitio anterior** (ej. una web WordPress reemplazada) pueden quedar colgando en integraciones/Data Manager y generar alertas de calidad de etiqueta confusas. Revisar y limpiar destinos/fuentes obsoletas antes de diagnosticar cualquier alerta de tag quality.
- **No asumir que "conectar directo con la API" es automáticamente mejor que GTM** — depende de si esa integración nativa puntual es realmente server-side (Measurement Protocol, CAPI) o solo un client-side disfrazado. Verificar en la documentación oficial de la plataforma antes de asumir, no adivinar.
- El plan de Tiendanube importa: **"Aplicaciones a medida" (custom app token) solo existe en planes Escala/Evolución**. En plan Esencial hay que ir por la vía OAuth de app pública (ver Capítulo 2) — no asumir que el cliente tiene el plan necesario, confirmar primero.
