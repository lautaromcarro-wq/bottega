# Prep — Sesión 1 · Asesoría 1:1 con Juli Castro

**Módulo 1:** Ecosistema / Medición
**Formato:** 1:1, 60-90 min · One-shot $150.000 ARS
**Estado:** PREP. No es el SOP. El SOP sale de haber dado la sesión, no de imaginarla antes (`bottega_roadmap.md`).
**Se llena en vivo en:** `sesion-01-captura.md` (no se toca desde acá).

> **Nota de armado [PENDIENTE]:** este prep se escribió sin leer `sesion-01-captura.md` ni `curso/01` y `curso/02`, porque esos archivos todavía no estaban en el remoto de GitHub (solo en la máquina local). El contexto de Juli sale del brief. Antes de la sesión, cruzar este archivo con la plantilla de captura para que los nombres de los campos `[PENDIENTE]` coincidan.

**Lo que sabemos de Juli:**

- Freelo de contenido para un bar/boliche.
- Estrategia de marketing para una marca artesanal de pelucas. Arrancó en la comunidad judía (pelucas de casamiento). Hoy también vende a personas que atraviesan quimioterapia.
- Lead calificado: el hermano de la clienta de pelucas, importador de telas. Salió de esa misma relación.

**Lo que NO sabemos (y no se asume):** qué usa para medir, cuál es su dolor puntual, si sus clientes tienen sitio o viven en Instagram/WhatsApp, qué le prometió al lead.

---

## 1. Preguntas de intake

Pensadas para mandarle por WhatsApp 2-3 días antes (las marcadas con ★) o para abrir la sesión. Tono de colegas. Si contesta las ★ antes, la sesión arranca 15 minutos más adelante.

### Mensaje previo (copiar y pegar)

> Juli, para que la sesión del [día] rinda, te dejo 5 preguntas. Contestá como te salga, con audios si preferís. No hay respuestas correctas, necesito ver cómo estás hoy para no hablarte de cosas que no te sirven.

**★ 1. Cuando un cliente te pregunta "¿y, cómo vamos?", ¿qué abrís para contestarle?**
Estadísticas de Instagram, Meta Business Suite, una planilla, el WhatsApp del negocio, lo que te dice el dueño. Contame qué mirás de verdad, no lo que "deberías" mirar.

**★ 2. ¿A qué tenés acceso de cada cliente?**
Para el bar y para las pelucas, por separado:
- ¿Sos admin (o tenés acceso con tu usuario) en su Meta Business Suite / Business Manager, o te pasan capturas?
- ¿Tienen cuenta publicitaria propia o pautás desde otra cuenta?
- ¿Tienen Google Analytics? ¿Sabés si alguien lo instaló alguna vez?

**★ 3. ¿Tienen sitio web o todo pasa por Instagram y WhatsApp?**
Si hay sitio: ¿qué es (Wix, WordPress, Tiendanube, una landing, un Linktree)? ¿Se puede comprar o reservar ahí, o solo deriva a WhatsApp?

**★ 4. Contame la última vez que no supiste responder algo sobre resultados.**
Qué preguntó el cliente, qué le dijiste, cómo te quedaste. Esta es la más importante. De acá sale el dolor real.

**★ 5. ¿Qué hablaste con el hermano de la clienta de pelucas?**
Qué te pidió, qué le ofreciste o le prometiste (aunque sea al pasar), si hay un número o un plazo en el aire.

### Para profundizar en vivo (si las ★ no alcanzan)

- ¿Pautan hoy? ¿Cuánto por mes, más o menos, en cada cliente? ¿Quién pone la tarjeta?
- ¿Cómo sabe el bar si una noche fue buena? (entradas, consumo, reservas, lista). ¿Alguien te pasa ese número?
- ¿Cómo le llega una venta a la marca de pelucas? ¿Por DM, WhatsApp, recomendación, turno en taller? ¿Cuánto tarda desde la primera consulta hasta que paga?
- ¿Alguien anota de dónde vino cada cliente? Aunque sea en un cuaderno.
- ¿Cuánto sale una peluca y cuánto le queda a la clienta después de materiales y horas? (margen aproximado, sin precisión)
- ¿Cómo te pagan a vos? ¿Fee fijo, por pieza, por resultado? Esto define qué te conviene poder demostrar.
- Si tuvieras que elegir un solo número para mostrarle a cada cliente todos los meses, ¿cuál elegirías hoy?

### Qué estamos buscando detrás de cada pregunta

| Pregunta | Qué revela | Campo a llenar en la captura |
|---|---|---|
| 1 | Si mide actividad (likes, alcance) o negocio (consultas, ventas) | Qué usa hoy para medir |
| 2 | Si puede implementar algo esta semana o primero necesita accesos | Accesos / bloqueos |
| 3 | Qué rama del framework aplica (con sitio / sin sitio) | Infraestructura de cada cliente |
| 4 | El dolor concreto, con sus palabras | Dolor puntual |
| 5 | Si hay riesgo de prometer algo que no puede medir | Lead importador |

---

## 2. Framework mínimo de medición

Para freelancers con clientes chicos que no tienen e-commerce armado. La diferencia con los capítulos de Tiendanube: acá la venta casi nunca ocurre en el sitio. Ocurre en un DM, en un WhatsApp, en la puerta del bar o en un taller. El sistema tiene que seguir a la persona hasta ese lugar.

Tres preguntas, en orden. Si la primera no se puede contestar, las otras no importan.

```
QUIÉN ENTRA  →  QUÉ HACE  →  CUÁNTO SE CONVIERTE EN PLATA
 (origen)       (acción)        (caja)
```

### Capa A · Quién entra (origen)

| Situación del cliente | Setup mínimo | Qué te da |
|---|---|---|
| **Tiene sitio** | Pixel de Meta instalado + eventos básicos (ver página, contacto, formulario). Si pauta en serio (más de lo que cuesta el setup), sumar API de Conversiones. | Meta puede optimizar hacia gente que hace algo, no solo hacia clics. |
| **Solo Instagram/WhatsApp** | Anuncios con destino a WhatsApp o DM (el objetivo "mensajes" ya registra conversaciones iniciadas). Un link de WhatsApp distinto por fuente, con mensaje precargado: `wa.me/549XXXXXXXXXX?text=Hola!%20Vengo%20de%20Instagram` | Saber de dónde vino cada conversación sin tocar código. |
| **Ambos** | UTMs en cada link que sale del negocio (bio, historias, pauta, mailing, WhatsApp). Mismo nombre de campaña en todos lados. | Poder ver todo junto después, en vez de tener cinco versiones de la verdad. |

**Sustitutos cuando no hay tecnología (y valen igual):**

- **Mensaje precargado por canal.** "Vengo de la historia", "Vengo del anuncio", "Me recomendó alguien". El texto le dice al negocio de dónde vino la persona.
- **Código por canal.** Para el bar: "Decí BOTTEGA en la puerta" o un código distinto por promo. Se cuenta en la caja.
- **La pregunta en la venta.** "¿Cómo nos conociste?" como paso fijo, anotado. Es rudimentario. Es mejor que nada.

### Capa B · Qué hace esa persona (acción)

La pregunta: ¿qué acción predice una venta?

| Situación | Setup | Acción a medir |
|---|---|---|
| **Tiene sitio** | GA4 con eventos clave definidos (no solo "visitas"). Clic en botón de WhatsApp, envío de formulario, clic en "reservar". Reordenar los reportes por eventos clave, no por usuarios. | La página que más visitas trae casi nunca es la que más convierte. |
| **Sin sitio** | Etiquetas en WhatsApp Business (Consulta → Presupuesto enviado → Seña → Venta). Una planilla semanal con una fila por conversación: fecha, origen, etapa, monto. | Dónde se caen las consultas. |

**Primero definir el evento, después medirlo.** Antes de optimizar nada, acordar con el cliente qué cuenta como "resultado":

- **Contacto:** alguien escribió (WhatsApp, DM, llamada).
- **Lead:** alguien dejó datos sabiendo que lo van a contactar.
- **Reserva / seña:** alguien se comprometió.
- **Venta:** entró plata.

Si Meta optimiza por "contacto" y lo que importa es "seña", el algoritmo va a traer mucha gente que pregunta y poca que paga.

### Capa C · Cuánto de eso se convierte en plata (caja)

Acá es donde casi todos los freelancers se quedan cortos. Y es la única capa que le importa al dueño.

- Una planilla semanal con cuatro números por cliente: **gasto en pauta, consultas, ventas, facturación de esas ventas.**
- La fuente de la venta no es Meta. Es la caja del cliente (o su cuaderno, o su WhatsApp).
- Una vez por mes: comparar lo que dice Meta contra lo que dice la caja. Si Meta dice 40 ventas y la caja dice 12, el número de Meta no sirve para decidir.

### Cómo aplica a los dos casos de Juli (hipótesis a validar en vivo)

**Bar/boliche**
- Venta: entrada, consumo, reserva de mesa o cumpleaños.
- Origen: probablemente 100% Instagram + WhatsApp + lista.
- Mínimo viable: códigos o nombres en lista por fuente + un número por noche que el dueño ya tiene (entradas o facturación) + consultas de reservas por WhatsApp etiquetadas.
- Ojo: pauta de alcohol y nocturnidad tiene restricciones de edad en Meta. [VERIFICAR según el tipo de anuncio]

**Marca de pelucas**
- Venta: ticket alto, decisión lenta, mucha confianza de por medio. El ciclo consulta → venta puede ser de semanas.
- Origen: recomendación de comunidad (casamientos) + probablemente recomendación médica o grupos de pacientes (quimio). El boca a boca pesa más que la pauta. Medirlo: "¿cómo nos conociste?" obligatorio.
- Mínimo viable: planilla de consultas con origen y etapa. Con 10-20 consultas por mes ya se ve el patrón.
- **Ojo con dos cosas que pueden cambiar todo el setup:**
  1. Meta no permite anuncios que impliquen condiciones de salud ni religión de la persona ("¿Estás en quimio?", "Para la novia judía"). El mensaje tiene que hablar del producto, no del atributo de quien lo recibe.
  2. Desde 2025, Meta limita el envío de eventos de conversión en negocios que clasifica como salud/bienestar. Si la marca queda clasificada así, el pixel puede no transmitir eventos de fondo de funnel y la planilla pasa a ser la fuente principal. [VERIFICAR en el Administrador de Eventos del cliente si aparece la restricción]
- No se le puede pedir a la plataforma que segmente por "persona en tratamiento". Esa audiencia se construye con contenido, alianzas (centros oncológicos, fundaciones) y recomendación. La medición tiene que ver ese canal también.

**Lead del hermano (importador de telas)**
- Es B2B: pocas ventas, montos altos, ciclo largo. Medir leads calificados y conversaciones comerciales, no clics.
- Antes de prometer nada, saber: a quién le vende (confeccionistas, marcas, mayoristas), ticket, cuántos clientes nuevos puede absorber. Esto es el filtro, no un detalle.

### Cheat sheet semanal · cliente chico

Cinco números. Todos los lunes. Una fila por semana en la planilla.

| # | Métrica | De dónde sale | Qué pregunta responde |
|---|---|---|---|
| 1 | **Gasto en pauta** | Meta Ads | ¿Cuánto pusimos? |
| 2 | **Costo por consulta** (gasto / consultas reales) | Meta + planilla/WhatsApp | ¿Cuánto cuesta que alguien levante la mano? |
| 3 | **Tasa consulta → venta** | Planilla | ¿El problema está en traer gente o en cerrarla? |
| 4 | **Ventas y facturación** | Caja del cliente | ¿Entró plata? |
| 5 | **Costo por venta vs. margen por venta** | Cálculo | ¿Ganamos o pagamos por vender? |

Lectura rápida:

- Costo por consulta sube y tasa de cierre estable → problema de anuncio o de público.
- Costo por consulta estable y tasa de cierre cae → problema de atención, precio u oferta. No se arregla con más pauta.
- Costo por venta mayor al margen por venta → frenar y revisar antes de seguir gastando.

---

## 3. Guion de la sesión (75 min, con 15 de colchón)

| Tiempo | Bloque | Qué pasa | Output |
|---|---|---|---|
| 0-5 | **Apertura** | Marco de la sesión: hoy no vamos a hablar de anuncios. Vamos a hablar de cómo sabés si lo que hacés funciona. Qué se lleva al final: un sistema mínimo aplicado a un cliente real y una tarea para esta semana. | Expectativa alineada. |
| 5-20 | **Intake en vivo** | Repasar las ★ (o hacerlas si no las contestó). Profundizar en la pregunta 4: la última vez que no supo responder. Anotar sus palabras textuales en la captura. | Campos `[PENDIENTE]` llenos. Dolor puntual identificado. |
| 20-30 | **Concepto** | "Si el sistema no mide bien, el negocio decide mal." Aplicado a ella: si no puede mostrar qué generó su trabajo, el cliente decide con intuición. Y la intuición del cliente sobre un freelancer suele terminar en "bajemos el fee" o "probemos con otro". Medir es lo que sostiene su precio. Mostrar las 3 capas (quién entra, qué hace, cuánta plata). | Ella entiende por qué esto le conviene a ella, no solo al cliente. |
| 30-55 | **Framework en vivo sobre un caso real** | Elegir UN cliente (criterio: el que tenga más accesos y más pauta; si no hay pauta, el de pelucas porque tiene ticket alto y cada venta cuenta). Llenar juntos las 3 capas con lo que hay hoy. Marcar en rojo lo que falta. Si hay acceso a Meta Business Suite en la llamada, abrirlo juntos y ver qué hay (pixel, eventos, cuenta publicitaria, restricciones). Armar la planilla semanal en ese momento, con sus columnas. | Mapa del cliente con huecos marcados. Planilla creada. |
| 55-65 | **Bajar a acción** | Tres acciones para esta semana, no más. Ejemplo según el caso: (1) conseguir acceso admin, (2) crear los links de WhatsApp por fuente o los códigos, (3) pedirle al cliente el número de ventas de la semana pasada para arrancar la planilla. | 3 acciones con fecha. |
| 65-70 | **Tarea** | Pedir o revisar acceso a Meta Business Suite (y GA4 si hay sitio) del cliente elegido. Traer para la sesión 2: capturas de lo que encontró + la primera semana de la planilla con datos reales. | Tarea clara y chica. |
| 70-75 | **Cierre** | Agendar sesión 2 en ese momento (no "te escribo"). Preguntar: ¿qué fue lo más útil y qué te sobró? Anotarlo en la captura. Eso alimenta el SOP. | Sesión 2 en calendario. Feedback anotado. |
| 75-90 | **Colchón** | Si surge el lead del hermano con urgencia, usarlo acá: qué preguntar antes de prometer, qué medir en B2B. No abrirlo antes del bloque de acción. | — |

**Reglas para Lautaro durante la sesión:**

- Escuchar más de lo que se explica en los primeros 20 minutos. El framework se adapta al caso, no al revés.
- Si ella pide herramientas (GTM, server-side, CAPI completo), frenar: primero el evento y la planilla. La técnica viene cuando el volumen de pauta la justifique.
- Anotar en la captura todo lo que no encaje con este prep. Esas diferencias son el material del SOP.

---

## 4. Borrador · Capítulo 1 — Medir con presupuesto chico (versión freelancer/creador)

> **⚠️ HIPÓTESIS. NO DEFINITIVO.**
> Este capítulo es una alternativa al Capítulo 1 de Tiendanube, pensada para clientes sin e-commerce formal. Se escribió **antes** de la sesión con Juli. Se confirma, se reescribe o se descarta con lo que salga de esa sesión real. No se declara definitivo hasta tener al menos un caso validado, como exige `bottega_roadmap.md`: el SOP de cada capítulo sale de haberlo dado, no de imaginarlo antes.

### Por qué medir importa más cuando el presupuesto es chico

Con poco presupuesto, cada peso tiene que explicar algo.

Una marca grande puede permitirse probar a ciegas durante un trimestre. Una cuenta de 200 mil pesos por mes no. Si no sabés qué funcionó, el mes siguiente arrancás de cero.

Medir es lo que evita que un negocio chico pague dos veces por aprender lo mismo. Y cuanto más chico el presupuesto, más caro sale ese segundo pago.

### El error más común

La mayoría de los freelancers decide a ojo.

Mira likes, alcance, comentarios. Ve que el mes estuvo movido. Le dice al cliente que las cosas van bien. El cliente, que mira su caja, a veces no está de acuerdo.

Datos hay. Lo que falla es cuáles se miran: los que están a mano, en lugar de los que responden la pregunta del dueño. ¿Entró plata por esto?

Cuando no podés contestar esa pregunta, el cliente decide con intuición. Y la intuición, frente a un gasto que no entiende, casi siempre dice "recortemos".

### El sistema mínimo: tres preguntas

Todo sistema de medición, grande o chico, responde tres preguntas en orden.

**1. ¿Quién entra?** De dónde vino cada persona que se acercó.
**2. ¿Qué hace?** Qué acción tomó: preguntó, reservó, dejó una seña.
**3. ¿Cuánto de eso se convirtió en plata?** Lo que dice la caja, no la plataforma.

Si la primera no se puede responder, las otras dos son ruido.

### Setup mínimo si hay sitio web

- Pixel de Meta instalado, con eventos para las acciones que importan: contacto, formulario, clic en WhatsApp.
- Google Analytics con esas mismas acciones marcadas como eventos clave.
- UTMs en cada link que sale del negocio. Mismo nombre de campaña en todos los canales.
- Si la pauta crece, sumar la API de Conversiones de Meta. Recupera parte de lo que el pixel pierde por bloqueadores y navegadores. No es el primer paso.

### Setup mínimo si todo pasa por Instagram y WhatsApp

La mayoría de los negocios chicos venden así. No hace falta un sitio para medir.

- Anuncios con destino a WhatsApp o mensajes directos. La plataforma registra cuántas conversaciones empezaron.
- Un link de WhatsApp distinto por canal, con un mensaje precargado que indica el origen.
- Etiquetas en WhatsApp Business para cada etapa: consulta, presupuesto, seña, venta.
- La pregunta "¿cómo nos conociste?" como paso fijo en cada venta.
- Una planilla. Una fila por semana. Cuatro columnas: gasto, consultas, ventas, facturación.

Es rudimentario. Funciona. Y es mejor que un setup técnico que nadie revisa.

### Checklist antes de gastar el primer peso

Antes de activar cualquier campaña:

1. **Definir qué cuenta como resultado.** Contacto, lead, reserva o venta. Son cosas distintas. La plataforma optimiza hacia lo que le digas.
2. **Etiquetar todos los links.** Pagos y orgánicos. Si un canal no está etiquetado, se pierde en "directo".
3. **Probar el registro.** Hacer una consulta de prueba o una conversión de prueba y confirmar que aparece donde tiene que aparecer.
4. **Revisar restricciones.** Algunos rubros (salud, alcohol, temas sensibles) tienen reglas propias en Meta. Pueden limitar qué se puede decir y qué datos se pueden enviar.
5. **Acordar la fuente de verdad.** Antes de arrancar, dejar claro con el cliente de dónde sale el número de ventas. Casi nunca es Meta.

### Qué mirar cada semana

Cinco números alcanzan.

- Gasto en pauta.
- Costo por consulta real.
- Tasa de consultas que terminan en venta.
- Ventas y facturación.
- Costo por venta comparado con el margen de cada venta.

Si el costo por consulta sube y la tasa de cierre se mantiene, el problema está en el anuncio. Si el costo por consulta se mantiene y la tasa de cierre cae, el problema está después: en la atención, el precio o la oferta. Más pauta no lo arregla.

### Cómo explicarle esto a un cliente no técnico

El cliente no necesita entender el pixel. Necesita entender qué le cuesta conseguir un cliente y si le conviene.

Una forma simple:

> "Este mes pusimos X en publicidad. Eso trajo Y consultas. De esas, Z compraron. Cada venta nos costó W, y a vos cada venta te deja V. Entonces, por cada peso que pusimos, volvieron tantos."

Si no podés completar esa frase, falta medición. Y armarla es el siguiente trabajo.

### Implicancia

Medir cambia la conversación con el cliente.

Sin medición, se discute el gusto: si el posteo quedó lindo, si la campaña "anduvo". Con medición, se discuten decisiones: qué seguir, qué cortar, dónde poner el siguiente peso.

Para un freelancer, esa diferencia es la que sostiene el precio.

---

*Prep sesión 1 · La Bottega · Asesoría 1:1 Juli Castro · sep 2026 · Reescribir sección 4 después de la sesión real.*
