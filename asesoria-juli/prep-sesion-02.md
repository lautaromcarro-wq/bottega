# Prep — Sesión 2 · Asesoría 1:1 con Juli Castro

**Módulo:** cierre del Módulo 1 (revisión de la tarea) + Capítulo 2 (operar con datos e IA), variante sin e-commerce.
**Formato:** 1:1, 60-75 min.
**Estado:** PREP, hipótesis. Igual que en la sesión 1, el SOP sale de haberla dado. La captura se llena en vivo en `sesion-02-captura.md`, que se crea copiando la estructura de `sesion-01-captura.md`.

> **Todavía no aplica.** La sesión 1 (Módulo 1) no se dio: hasta ahora solo hubo una reunión de contexto inicial. Este prep queda armado para después de la sesión 1.
>
> **Antes de usar este prep [PENDIENTE]:** completar la captura de la sesión 1 (al menos qué cliente se eligió y qué tarea quedó). Este prep asume que el cliente elegido fue uno de los dos y que la tarea fue la del kit de accesos. Si fue otra cosa, el bloque 1 cambia.

---

## Por qué este orden

El roadmap pone el Capítulo II en agenda. Pero el Capítulo 2 escrito (`curso/02-setup-apis-ia.md`) es 100% Tiendanube y Google Ads, y los clientes de Juli no tienen ninguna de las dos cosas. El propio roadmap ya lo anticipa: "puede necesitar variante no-ecommerce como el 1".

Esta sesión sirve para validar esa variante. Y antes de hablar de IA, hay que confirmar que hay datos: sin la tarea de la sesión 1 hecha, el Capítulo 2 no tiene sobre qué operar. Eso marca el orden: primero revisar la tarea, después el Capítulo 2.

---

## Guion

| Tiempo | Bloque | Qué pasa | Output |
|---|---|---|---|
| 0-5 | **Apertura** | ¿Cómo te fue con la tarea? Escuchar antes de abrir nada. | Estado real de la tarea. |
| 5-25 | **Revisión de la tarea** | Abrir juntos lo que trajo. ¿Consiguió acceso? Recorrer el checklist "Qué mirar apenas entrás" del kit. ¿Cargó la planilla? Leer la primera semana con las reglas de lectura. | Primer diagnóstico real del cliente, con números. |
| 25-35 | **Lo que encontró** | Bajar los hallazgos a decisiones: ¿qué se corrige esta semana? (evento mal elegido, links sin etiquetar, restricción de salud, cuenta que no es del cliente). | 1-3 correcciones concretas. |
| 35-60 | **Capítulo 2 · variante sin e-commerce** | Ver abajo. Mostrarlo en vivo con los datos que trajo. | Juli hace una lectura semanal asistida por IA, con sus propios datos. |
| 60-70 | **Tarea + cierre** | Tarea (abajo). Agendar sesión 3 o cerrar el paquete (ver "Decisión pendiente"). Preguntar qué sirvió y qué sobró. | Tarea clara. Próximo paso agendado. |

**Si no hizo la tarea:** no avanzar al Capítulo 2. Usar la sesión para hacer la tarea juntos (pedir acceso en vivo, cargar la planilla con lo que recuerde). Anotarlo en la captura: es información valiosa para el SOP (¿la tarea era demasiado grande? ¿el cliente no responde?).

---

## Capítulo 2 · variante sin e-commerce (hipótesis)

### La idea

Para operar con IA no hace falta conectar APIs el primer día. Hace falta que los datos estén ordenados y en un lugar.

Con un cliente chico, el camino es en dos niveles. El primero se usa desde hoy. El segundo, cuando el volumen lo justifique.

### Nivel 1 · Lectura semanal con IA, sin APIs (mostrar en vivo)

1. Exportar desde el Administrador de Anuncios el informe de la semana: campaña, gasto, resultados, costo por resultado, alcance, frecuencia. **Exportar → CSV.**
2. Exportar o copiar la planilla semanal (consultas y ventas).
3. Pasarle los dos a un asistente de IA con un pedido fijo:

> "Te paso dos archivos de un cliente [rubro]. Uno es el informe de Meta Ads de la semana. El otro es el registro real de consultas y ventas. Margen aproximado del negocio: [X]%. Decime: (1) cuánto costó cada consulta y cada venta real, (2) si el costo por venta es menor o mayor que lo que deja cada venta, (3) dónde ves la diferencia más grande entre lo que dice Meta y lo que dice el registro, (4) una sola cosa para cambiar la semana que viene. No inventes datos que no estén en los archivos."

4. Leer la respuesta juntos y **discutirla**. La IA ordena los números. La decisión es de Juli.

**Por qué funciona:** el trabajo pesado de un cliente chico es cruzar dos fuentes una vez por semana. Eso la IA lo hace bien y rápido. Lo que no puede hacer es saber si un dato está mal cargado. Por eso el Capítulo 1 va primero.

### Nivel 2 · Conexión directa a Meta (cuando haya volumen)

Cuando Juli maneje varios clientes con pauta, exportar cada semana se vuelve trabajo repetido. Ahí conviene la conexión directa:

- Portfolio comercial propio (si no lo armó en la tarea, es el primer paso).
- Usuario del sistema con acceso de lectura a la cuenta publicitaria de cada cliente y un token que no vence (pasos en `curso/02-setup-apis-ia.md`, sección Meta).
- Ese token se conecta a la herramienta de IA que use para que lea los datos sola.

**Criterio para pasar al nivel 2:** 3 o más clientes con pauta activa, o más de 30 minutos por semana exportando. Antes de eso, el nivel 1 alcanza y no tiene nada que se rompa.

### Lo que NO aplica a Juli (del Capítulo 2 escrito)

- Tiendanube: sus clientes no tienen tienda.
- Google Ads: solo si algún cliente empieza a pautar en Google.
- GA4 por API: solo si el cliente tiene sitio con eventos configurados. Si no, no hay nada que leer.

---

## Tarea para la sesión 3

1. Hacer dos lecturas semanales con el nivel 1 (dos lunes seguidos), con el pedido fijo.
2. Anotar qué le sirvió de la respuesta y qué estuvo mal o no sirvió.
3. Si el cliente es de pelucas y apareció la restricción de salud: traer captura del aviso.

---

## Decisión pendiente para Lautaro

El paquete es $150.000 ARS one-shot, con "cantidad de sesiones a definir después de la sesión 1" (captura). Hay que definirlo antes de esta sesión para poder cerrarla bien. Opciones:

- **3 sesiones:** Módulo 1 · Revisión + Capítulo 2 · Revisión final y plan de 30 días. Es lo más prolijo para un one-shot.
- **2 sesiones:** se cierra en esta. El bloque de cierre pasa a ser el plan de 30 días.

Recomendación: **3**. La sesión 3 es donde se ve si Juli sostiene el sistema sola, que es lo que valida el capítulo para el SOP. Cerrar en la 2 deja los dos capítulos sin validar.
