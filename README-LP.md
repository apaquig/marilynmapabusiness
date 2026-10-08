# Landing de Google Ads: Notary Public Newark

Rutas aisladas del sitio principal:

- Landing: https://marilynmapabusiness.com/lp/notary-newark
- Gracias: https://marilynmapabusiness.com/lp/notary-newark/gracias

Layout: `src/layouts/LandingLayout.astro`. No importa BaseLayout, estilos globales del sitio, scripts de contacto, calendario ni chat. Solo reutiliza GTM-TW289QXQ, activos existentes y el componente/fuente de reseñas. El único cambio al sitio principal es el filtro de sitemap de `astro.config.mjs`. No hay enlaces a /lp/ desde otras páginas.

## Formulario existente de MAPA

Se reutiliza `src/components/ContactForm.astro`, como pidió el usuario, en lugar de crear un nuevo formulario iframe. No se necesita GHL_FORM_ID ni form_embed.js. No hay backend ni endpoints nuevos.

La misma ruta de envío del sitio se mantiene: EmailJS (servicio y plantilla existentes) + External Tracking de **MAPA** con ID `tk_92b14bc678ea4eb3b89a2a27dca3f16f`. Nunca carga el widget del chat en esta landing. El formulario usa el servicio visible **Notary Public**; el valor interno del CRM se obtiene del catálogo existente y se conserva para compatibilidad con Services of Interest. No se añaden opciones nuevas ni se cambia el formulario general por defecto.

La landing envía nombre, teléfono, correo, consulta y dos consentimientos SMS opcionales e independientes. Para esta campaña ya se fija el servicio, por lo que no aparece el catálogo completo. Los avisos y opciones SMS se reutilizan sin marcar casillas automáticamente.

### Atribución

El layout lee exclusivamente `gclid`, `gbraid`, `wbraid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` y `utm_content`, los guarda en sessionStorage y el formulario los copia a inputs ocultos. Esos valores se envían a EmailJS como parámetros y dentro del mensaje existente, sin depender de que la plantilla ya tenga campos dedicados.

En MAPA, pueden crearse campos de contacto de texto con esos ocho nombres para almacenar la atribución estructurada. **Debe verificarse/configurarse el mapeo de External Tracking:** HighLevel no garantiza capturar campos ocultos por defecto. La presencia de inputs ocultos no demuestra que GHL los guarde en campos personalizados. El envío por EmailJS y la captura de HighLevel son independientes; la confirmación de EmailJS no confirma por sí sola la creación en GHL.

Referencia oficial: https://help.gohighlevel.com/support/solutions/articles/155000006092

### Confirmación y página de gracias

Tras la respuesta exitosa de EmailJS, el handler existente redirige a:
`https://marilynmapabusiness.com/lp/notary-newark/gracias`

La redirección se configura mediante `data-success-url` solo en el formulario de la landing y se limita al mismo origen. No se configura un On Submit de un formulario iframe en GHL. Si falla EmailJS, no se redirige y el botón vuelve a estar disponible. En las otras páginas el formulario mantiene su confirmación dentro del panel. La landing omite las conversiones heredadas del formulario y usa únicamente `lead_gracias` para su conversión de envío.

Para la prueba real, usar una URL con parámetros de test y un envío autorizado, luego comprobar la recepción en EmailJS y en Contacts de MAPA y revisar el mapeo. No se hizo un envío real adicional durante esta implementación.

## Conversiones en GTM, GA4 y Google Ads

El layout replica exactamente el snippet GTM del sitio (head + noscript), una sola instancia. No carga el gtag adicional del sitio: configura el Google tag de GA4 existente **G-E9BVZ26P78** en GTM si no está allí, sin crear un segundo Google tag duplicado.

1. Abre **GTM-TW289QXQ**, conecta Preview a la landing y verifica la configuración del Google tag de GA4.
2. Crea variables de capa de datos `servicio` y `ubicacion_boton`.
3. Crea tres activadores **Custom Event**, con coincidencia exacta de nombres:
   - `click_llamar`
   - `click_whatsapp`
   - `lead_gracias`
4. Crea tres etiquetas **Google Analytics: GA4 Event**, con los mismos nombres, el Google tag existente y parámetros `servicio` y `ubicacion_boton` (este último aplica a clics). Asocia cada etiqueta a su activador. Publica el contenedor después de verificar Preview.
5. Todos los enlaces tel: y wa.me se rastrean mediante UN listener delegado. Los valores de ubicación incluyen header, hero, servicios, formulario, sticky, final, footer y gracias. Los clics indican intención de contacto, no que una llamada haya sido atendida o un chat se haya iniciado.
6. En GA4, marca esos tres eventos como **eventos clave** y vincula la propiedad con la cuenta Google Ads. En Google Ads, importa/crea las conversiones desde la propiedad GA4 vinculada. Usa **Count: One** para leads. Selecciona conscientemente cuáles serán primarias para puja; evita contar el clic y el envío del mismo lead como dos leads primarios.
7. No crees otra conversión independiente por Page View de /gracias si ya importas `lead_gracias`. Evita etiquetar el mismo evento por dos vías.

`lead_gracias` se empuja como `{ event: 'lead_gracias', servicio: 'notary' }` una sola vez por sesión de pestaña. Recargar gracias no repite el evento. Si sessionStorage está bloqueado, se omite ese evento antes de producir conversiones sin deduplicación. Visitar directamente /gracias también puede dispararlo: no envíes usuarios allí en anuncios ni enlaces externos. No garantiza identidad única de un lead entre dispositivos/pestañas.

Referencias oficiales:
- https://support.google.com/google-ads/answer/2375435?hl=es
- https://help.gohighlevel.com/support/solutions/articles/155000004538

## Noindex y sitemap

Ambas páginas usan `<meta name="robots" content="noindex, nofollow">` y canonical propio. Todo URL que contiene `/lp/` se excluye del sitemap mediante el filtro existente, conservando las exclusiones anteriores.

- En código fuente (no solo inspector), busca el meta robots y canonical.
- Después de publicar, en Google Search Console → Inspección de URL → Probar URL publicada, confirma rastreo permitido y noindex detectado. No solicites indexación de estas rutas.
- `robots.txt` no debe contener `Disallow: /lp/`. Googlebot y AdsBot necesitan poder rastrear la landing para leer noindex/revisar el anuncio.
- Para comprobar: `npm run build`; revisar `dist/lp/notary-newark/index.html`, `dist/lp/notary-newark/gracias/index.html`, `dist/sitemap*.xml` y `dist/robots.txt`.

## Diseño, reseñas y verificación

Foto y logo reutilizados con astro:assets, WebP y dimensiones. No se alteran rasgos faciales. El hero carga con prioridad; mapa y formulario usan lazy. Montserrat y Lato, acciones de al menos 48 px y barra móvil 50/50. El componente de reseñas existente conserva su fuente y refresco; la landing muestra hasta seis tarjetas en escritorio y tres en móvil, con diseño neutro. La cita del hero se obtiene del texto original del componente existente, sin escribir una reseña nueva.

No se han cambiado las páginas anteriores ni las definiciones de reseñas del sitio. El componente existente usa Places, que ofrece una selección limitada; no se promete que sean todas las reseñas ni siempre las últimas.

Verificar en navegador a 390 px: ausencia de scroll horizontal, botones, foco teclado, acordeones, mapa, tres reseñas y footer. En GTM Preview comprobar cada ubicación, el href y una sola emisión por clic. Cargar gracias y recargar dentro de la misma pestaña: un único lead_gracias. Lighthouse móvil ≥90 es un objetivo que debe medirse con el formulario y seguimiento externo activos: los scripts de GTM y HighLevel pueden cambiar los resultados. No se declara una puntuación sin medición.

## Pendientes [COMPLETAR]

- Confirmar disponibilidad de atención el mismo día.
- Confirmar requisitos de testigos según el acto/documento.
- Confirmar qué identificaciones se aceptan.
- Tarifas de los cinco servicios, sin inventar precios.

Pendientes de configuración externa: mapeo de atribución en External Tracking, etiquetas/eventos clave/importación de Google Ads, prueba real de envío y medición Lighthouse. Los datos comerciales se usan tal como fueron proporcionados, incluido ZIP 07104; no se cambia la ficha de GHL.

## Mejora de captación (CRO)

El formulario queda después de la barra de confianza, antes de los servicios y reseñas. El hero y el cierre tienen un CTA directo a #cita. Las tarjetas de los cinco servicios llevan al mismo formulario y, si la nota está vacía, agregan el servicio elegido sin sobrescribir lo que el usuario haya escrito. El correo y el nombre permanecen obligatorios; teléfono y nota se identifican como opcionales. La ausencia de autorización SMS no impide enviar una consulta.

El hero evita presentar atención el mismo día como un hecho no confirmado; esa confirmación pendiente permanece en FAQ. No se inventan precios ni se garantiza disponibilidad.

Base de las decisiones:
- Google Ads: claridad y correspondencia entre anuncio y acción en móvil: https://support.google.com/google-ads/answer/7324514
- Google: contenido relevante y navegación sencilla: https://blog.google/products/ads-commerce/search-ads-and-the-importance-of-landing-page-navigation/
- NN/g: campos agrupados y distinción de obligatorios/opcionales: https://www.nngroup.com/articles/web-form-design/

Verificado en móvil a 390 px: acciones visibles en hero, un solo formulario, sin overflow horizontal y nota de servicio autocompletada. Compilación correcta y pruebas aisladas del handler de envío (éxito/error/confirmación original), clics de teléfono/WhatsApp y deduplicación de gracias. No se envió un lead real durante esta revisión.

Estas mejoras son hipótesis de conversión, no una tasa garantizada. Después de publicar y configurar GA4/GTM/Ads, medir leads confirmados/visitas y coste por lead, separando clics de contacto de envíos. Verificar además que el contacto llega a MAPA y que el equipo responde; una respuesta de EmailJS no confirma por sí sola la captura de GHL.
