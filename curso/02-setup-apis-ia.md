# Capítulo 2 — Conectar APIs (Google Ads, GA4, Meta, Tiendanube) para operar con IA

Caso de referencia real: Sanitarios Larralde. Requiere el Capítulo 1 (tracking) ya andando — sin `purchase` bien trackeado, las APIs traen datos vacíos o falsos.

## Principio general: infraestructura propia, no la del empleador/agencia

Si el cliente es freelance/fuera de tu agencia principal, armá credenciales 100% separadas: proyecto de Google Cloud propio, MCC de Google Ads propio, apps de Meta y Tiendanube propias. **Ojo con el organization picker de Google Cloud** — si tu login corporativo tiene una org de Google Workspace asociada (ej. `empresa.com`), un proyecto nuevo puede caer ahí sin que te des cuenta. Verificar "Sin organización" al crear.

**Nomenclatura reusable, no por cliente:** un solo GCP project, una sola MCC, una sola app de Meta, una sola app de Tiendanube — todas genéricas ("tu-marca-freelo"), reusadas para cada cliente nuevo. Nombrar un proyecto por cliente es trabajo redundante.

## Estructura de proyecto (por cliente)

```
cliente/
  .gitignore          # .env, *.token, credentials.json — nunca al repo
  integrations/
    .env.example       # documenta variables, sin valores reales
    .env               # valores reales, gitignored
    requirements.txt
    google_ads/
    ga4/
    meta/
    tiendanube/
```

## 1. Google Cloud — proyecto reusable (Google Ads + GA4)

1. console.cloud.google.com, logueado con la cuenta personal correcta.
2. Proyecto nuevo → Organización **"Sin organización"** → nombre genérico (ej. `tu-marca-freelo`).
3. **APIs & Services → Library** → habilitar **Google Ads API** + **Google Analytics Data API**.
4. **OAuth consent screen** → Externo → agregar tu propio email en **"Usuarios de prueba"** (paso que se saltea fácil y rompe el login después).
5. **Credentials → + Crear credenciales → ID de cliente OAuth → tipo "Aplicación de escritorio"** (no "Web application" — ese tipo no soporta el flujo de loopback dinámico y tira `redirect_uri_mismatch`).
6. Un script simple (`InstalledAppFlow.run_local_server`) con scopes `adwords` + `analytics.readonly` combinados genera UN refresh token que sirve para Ads y GA4 a la vez.

## 2. Google Ads — MCC + developer token propios

1. ads.google.com/home/tools/manager-accounts → crear MCC nueva, nombre genérico ("Tu Nombre — Freelance").
2. Dentro: **Herramientas → Configuración → Centro de API** → developer token (arranca en modo Test, puede empezar a funcionar contra cuentas reales antes de la aprobación formal de Basic access — probarlo, no asumir que hay que esperar).
3. Con developer token + refresh token + Customer ID de la cuenta del cliente → listo para consultar vía API, sin necesidad de vincular la cuenta del cliente bajo tu MCC (acceso directo de usuario alcanza).

## 3. Meta — app propia + System User

1. developers.facebook.com/apps → app nueva, nombre genérico. Casos de uso: Marketing API (+ Instagram API si hace falta feed).
2. Modo **Development**, no publicar — no hace falta App Review para uso interno de un solo operador.
3. business.facebook.com/settings → **Usuarios del sistema** → crear uno → asignar la cuenta publicitaria del cliente (permiso `ads_read` o `ads_management`).
4. Generar token desde ahí (no desde login de usuario normal) → **no expira**, a diferencia del token de usuario (60 días).

## 4. Tiendanube — según el plan del cliente

- **Plan Escala/Evolución**: Configuración → Aplicaciones a medida → token directo, un click.
- **Plan Esencial (u otro sin esa opción)**: vía OAuth de app pública, no depende del plan:
  1. Registrarte como Partner en Tiendanube (gratis).
  2. Crear app genérica reusable, distribución **"Para tus clientes"** (no "Tienda de aplicaciones" — esa exige review pública de marketplace, innecesario para uso interno).
  3. El cliente/vos visitan `https://www.tiendanube.com/apps/{app_id}/authorize?state={loquesea}` (reemplazar `{app_id}` real, sin llaves) → aprueba permisos.
  4. El `code` de la autorización aparece en la **URL de la barra de direcciones** de la página de éxito, no en el texto de la página — copiarlo de ahí.
  5. Canjear por token: `POST https://www.tiendanube.com/apps/authorize/token` con `client_id`, `client_secret`, `grant_type=authorization_code`, `code`.
  6. **Verificar el `scope` de la respuesta** — si al crear la app solo tildaste "Productos", el token va a venir sin permisos de Pedidos/Clientes aunque el flujo "funcione". Revisar y volver a autorizar si falta algo.
  7. Token de Tiendanube **no expira**.

## Errores comunes (verificados en el caso real)

- **`redirect_uri_mismatch`** al generar el refresh token de Google → el OAuth client es tipo "Web application", no "Aplicación de escritorio". Solución: crear un client nuevo del tipo correcto, no intentar arreglar el existente.
- **`access_denied` / "no ha completado el proceso de verificación"** → falta agregarte como test user en OAuth consent screen, o estás logueado en el navegador con una cuenta de Google distinta a la que autorizaste.
- **Confundir App ID/Secret con el token real** (Meta) → el token del System User es un string largo que arranca `EAA...`, se genera aparte, no es lo mismo que las credenciales de la app.
- **Confundir el ejemplo genérico de la doc con los valores reales** (Tiendanube) → la pantalla de éxito muestra un curl de ejemplo con `<ACCESS_TOKEN>` literal; los valores reales están en la URL de la barra de direcciones, no en el cuerpo de la página.
- **Scope incompleto sin darse cuenta** (Tiendanube) → siempre confirmar el campo `scope` de la respuesta del token antes de asumir que quedó bien.
