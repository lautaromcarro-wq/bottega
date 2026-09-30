# Medir con clientes chicos · Material de la sesión 1

**Para:** Juli
**Módulo 1:** Ecosistema / Medición

> Borrador armado antes de la sesión. Se ajusta con lo que salga de la sesión antes de mandárselo a Juli: casos, nombres y números reales en lugar de los ejemplos.

---

## La idea

Si el sistema no mide bien, el negocio decide mal.

En un cliente chico esto pesa más. Cada peso de pauta tiene que explicar algo. Si no sabés qué funcionó, el mes siguiente arrancás de cero.

Y hay una segunda razón, más cercana a vos. Cuando no podés mostrar qué generó tu trabajo, el cliente decide con intuición. Frente a un gasto que no entiende, la intuición casi siempre dice "recortemos".

Medir es lo que sostiene tu precio.

---

## Las tres preguntas

Todo sistema de medición responde tres preguntas. En este orden.

**1. ¿Quién entra?** De dónde vino cada persona que se acercó.
**2. ¿Qué hace?** Qué acción tomó: preguntó, reservó, señó.
**3. ¿Cuánto de eso se convirtió en plata?** Lo que dice la caja del cliente. La plataforma no es la fuente.

Si la primera no se puede contestar, las otras dos son ruido.

---

## Cómo se arma, con o sin sitio web

| | Con sitio | Solo Instagram / WhatsApp |
|---|---|---|
| **Quién entra** | Pixel de Meta + UTMs en todos los links | Anuncios con destino a WhatsApp. Un link de WhatsApp por canal con mensaje precargado. |
| **Qué hace** | Google Analytics con eventos clave: clic en WhatsApp, formulario, reserva | Etiquetas en WhatsApp Business: Consulta → Presupuesto → Seña → Venta |
| **Cuánta plata** | Planilla semanal con la caja del cliente | Planilla semanal con la caja del cliente |

La última fila es igual en las dos columnas. La plata siempre se cuenta afuera de la plataforma.

### El link de WhatsApp por canal

```
https://wa.me/549XXXXXXXXXX?text=Hola!%20Vengo%20de%20Instagram
https://wa.me/549XXXXXXXXXX?text=Hola!%20Vengo%20del%20anuncio
https://wa.me/549XXXXXXXXXX?text=Hola!%20Me%20recomendaron
```

Uno para la bio, otro para los anuncios, otro para compartir por recomendación. El primer mensaje ya dice de dónde vino la persona.

### Si no hay nada de tecnología

- Un código por canal ("decí NOCHE en la puerta").
- La pregunta "¿cómo nos conociste?" en cada venta, anotada.

Es rudimentario. Funciona mejor que un setup técnico que nadie revisa.

---

## Antes de gastar el primer peso

1. **Definir qué cuenta como resultado.** Contacto, lead, reserva o venta. Son cosas distintas, y Meta optimiza hacia lo que le digas.
2. **Etiquetar todos los links**, pagos y orgánicos.
3. **Probar el registro.** Mandar una consulta de prueba y confirmar que aparece.
4. **Revisar las reglas del rubro.** Salud, alcohol y temas sensibles tienen restricciones propias en Meta.
5. **Acordar con el cliente de dónde sale el número de ventas.** Casi nunca es Meta.

### Las reglas que aplican a tus clientes

- **Bar:** si el anuncio muestra alcohol, la edad mínima de la audiencia es 18.
- **Pelucas:** un anuncio no puede decir ni dar a entender que la persona tiene una condición de salud o una religión. Frases como "¿Estás en tratamiento?" o "para la novia de la comunidad" no se aprueban. El mensaje habla del producto, del oficio y de la experiencia, no de quien lo recibe.
- **Pelucas:** si Meta clasifica la cuenta como salud/bienestar, limita los eventos de conversión. Se revisa en el Administrador de Eventos. Si pasa, la planilla es la fuente principal.

---

## Los cinco números de cada lunes

| Número | Pregunta que responde |
|---|---|
| Gasto en pauta | ¿Cuánto pusimos? |
| Costo por consulta | ¿Cuánto cuesta que alguien levante la mano? |
| Tasa consulta → venta | ¿El problema es traer gente o cerrarla? |
| Ventas y facturación | ¿Entró plata? |
| Costo por venta vs. margen por venta | ¿Ganamos o pagamos por vender? |

Cómo leerlos:

- El costo por consulta sube y la tasa de cierre se mantiene → el problema está en el anuncio o en el público.
- El costo por consulta se mantiene y la tasa de cierre cae → el problema está en la atención, el precio o la oferta. Más pauta no lo arregla.
- El costo por venta supera el margen por venta → frenar y revisar.

La planilla (`planilla-semanal-medicion.xlsx`) hace estas cuentas sola. Se carga una fila por consulta y el gasto de cada semana.

---

## Cómo contárselo al cliente

El cliente no necesita entender el pixel. Necesita entender cuánto le cuesta conseguir un cliente y si le conviene.

> "Este mes pusimos $X en publicidad. Eso trajo Y consultas. De esas, Z compraron. Cada venta nos costó $W, y a vos cada venta te deja $V. Por cada peso que pusimos, volvieron tantos."

Si todavía no podés completar esa frase, ese es el próximo trabajo.

---

## Tu tarea para la sesión 2

1. Conseguir acceso a Meta Business Suite del cliente elegido (y a Google Analytics si tiene sitio). Los pasos y el mensaje para pedirlo están en `kit-accesos.md`.
2. Cargar una semana completa de la planilla con datos reales.
3. Traer capturas de lo que encontraste en la cuenta, sobre todo lo que no entendiste.

No hace falta que esté perfecto. Hace falta que sea real.
