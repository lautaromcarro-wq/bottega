# Capítulo 1 — Setup básico de medición y tracking (freelancer / cliente sin e-commerce)

**HIPÓTESIS — sin validar todavía.** Este es el caso base del capítulo, porque se parece más a la audiencia real de La Bottega (freelancers y media buyers chicos) que al caso e-commerce. Se confirma o se ajusta con lo que salga de la sesión real con Julieta Castro, tal como exige `bottega_roadmap.md` — no se declara definitivo antes de eso.

Caso de referencia: Julieta Castro — freelance de contenido orgánico, dos clientes sin plataforma de e-commerce formal (un bar/boliche, y una marca artesanal de pelucas que vende por Instagram/WhatsApp).

Para el cliente que sí tiene tienda online, ver la variante `01-variante-ecommerce-tiendanube.md`.

---

## Por qué medir importa incluso con presupuesto chico

Un cliente con presupuesto bajo no necesita menos medición. Necesita medición más simple. La confusión más común es pensar que medir es para cuentas grandes y que con poca plata alcanza con "ver cómo va". No alcanza. Con poco presupuesto, cada peso mal gastado pesa más, no menos.

## El error más común

Freelancers que manejan contenido y pauta para clientes chicos deciden a ojo. Suben una publicación, corren un anuncio, y evalúan el resultado por sensación: "esto funcionó bien", "esto no tanto". Sin un número que respalde esa sensación, la decisión de repetir o cambiar de estrategia queda librada a la memoria y al humor del día.

---

## El framework — 3 capas, con o sin sitio web

### Capa 1 — ¿Sabés quién entra?

- **Si hay sitio web:** Meta Pixel instalado, y si se puede, API de Conversiones (server-side) para no depender solo del navegador del usuario — el pixel solo pierde señal por bloqueadores y por Safari.
- **Si no hay sitio (todo por Instagram/WhatsApp):** el sustituto es un link en la bio con UTMs, o el botón de WhatsApp de Meta Ads medido como evento de clic. No hay excusa de "no tengo sitio" para no medir nada — se mide lo que hay.
- **Un link de WhatsApp por canal, con mensaje precargado.** `wa.me/549XXXXXXXXXX?text=Hola!%20Vengo%20del%20anuncio`, otro para la bio, otro para recomendaciones. El primer mensaje ya dice de dónde vino la persona.
- **Sin nada de tecnología:** un código por canal ("decí NOCHE en la puerta") y la pregunta "¿cómo nos conociste?" anotada en cada venta.

### Capa 2 — ¿Sabés qué hace esa persona?

- **Si hay sitio:** GA4 básico. Un evento clave definido (compra, reserva, consulta) marcado como conversión.
- **Si no hay sitio:** eventos manuales. Ejemplos concretos: mensajes de WhatsApp iniciados desde el anuncio, reservas confirmadas por DM, consultas por catálogo.

### Capa 3 — ¿Sabés cuánto de eso se convierte en plata?

- Ticket promedio del cliente.
- De cada 10 mensajes/consultas, cuántas terminan en venta o reserva. Sin este número, no hay manera de saber si el costo por mensaje es bueno o malo.

---

## Setup mínimo viable

Si el cliente tiene sitio web, el mínimo es Meta Pixel funcionando y, si es posible, la API de Conversiones activa. Esto no depende del tamaño del negocio — depende de si hay una página donde instalar el código.

Si el cliente no tiene sitio y trabaja todo por Instagram o WhatsApp, el sustituto es definir un evento manual: cuántos mensajes llegaron desde un anuncio, cuántas de esas conversaciones terminaron en algo. No es tan preciso como un pixel, pero es infinitamente mejor que no medir nada.

## Checklist antes de gastar el primer peso en pauta

1. Definir qué evento importa de verdad (una venta no es lo mismo que un mensaje curioso).
2. Usar el mismo nombre de campaña en todos los canales donde se promociona, para poder comparar después.
3. Probar el evento antes de lanzar: mandar un mensaje de prueba, hacer una reserva de prueba, y confirmar que quedó registrado en algún lado.
4. Si hay pixel y API de conversiones juntos, confirmar que no se están contando dos veces el mismo evento.
5. Revisar las reglas del rubro en Meta. Si el anuncio muestra alcohol, la audiencia mínima es 18+. Ningún anuncio puede decir ni dar a entender que la persona tiene una condición de salud o una religión ("¿Estás en tratamiento?" no se aprueba). Y si Meta clasifica la cuenta como salud/bienestar, limita los eventos de conversión: se ve en el Administrador de Eventos, y en ese caso la planilla pasa a ser la fuente principal.
6. Acordar con el cliente de dónde sale el número de ventas. Casi nunca es Meta: es la caja, el cuaderno o el WhatsApp del negocio.

## Cheat sheet semanal (qué mirar con un cliente chico)

1. Inversión de la semana.
2. Mensajes/consultas iniciadas (o visitas al sitio, si aplica).
3. Reservas o ventas confirmadas.
4. Costo por reserva/venta.
5. Algo de calidad: ¿son clientes nuevos o gente que ya conocía la marca? (frecuencia, repetición).

Con 5 números por semana alcanza. Más que eso, para un cliente de este tamaño, es ruido.

Cómo leerlos:

- El costo por consulta sube y la tasa de cierre se mantiene → el problema está en el anuncio o en el público.
- El costo por consulta se mantiene y la tasa de cierre cae → el problema está en la atención, el precio o la oferta. Más pauta no lo arregla.
- El costo por venta supera lo que deja cada venta (margen) → frenar y revisar antes de seguir gastando.

Plantilla lista: `asesoria-juli/planilla-semanal-medicion.xlsx` (también en Google Sheets). Una fila por consulta, el gasto de cada semana, y los números salen solos.

## Cómo explicarle esto a un cliente que no es técnico

No se necesita que el cliente entienda GA4 ni Meta Pixel. Se necesita que entienda una frase: "esto nos permite saber qué está funcionando y qué no, en vez de adivinar". Todo lo técnico se queda del lado del freelancer. Lo único que el cliente necesita ver es el número que le importa: cuánto le costó cada venta.

Una frase que sirve todos los meses:

> "Este mes pusimos $X en publicidad. Eso trajo Y consultas. De esas, Z compraron. Cada venta nos costó $W, y a vos cada venta te deja $V."

Si no se puede completar esa frase, falta medición. Y armarla es el siguiente trabajo.
