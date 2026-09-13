# Website

## Sitemap
- `/` landing única. Anclas: #proyecto · #mix · #ubicacion · #sustentable · #inversion · #contacto.
- Externo: showroom 3D (black.virtual2sold.com), abre en pestaña nueva.

## Page Briefs
### / (home)
- Purpose & primary conversion action: lead calificado por WhatsApp (nombre, WhatsApp, unidad, objetivo, capital).
- Message (from POSITIONING.md): "Locales en pozo en el paseo comercial que le faltaba a Escobar, construido por quienes también lo desarrollan."
- CTA (direct + transitional): "Quiero invertir" (nav, hero, inversión, form) + "Recorrer en 3D".
- Copy blocks: hero (claim + lead), ficha en números, el proyecto, mix comercial, ubicación y distancias, Grupo +Black (5 socios, 3 cifras, diferencial), sostenibilidad, inversión (tipologías, niveles), contacto, disclaimer.

## Conversion Elements
| Objection (Big 5) | Counter | Placement | Status |
|---|---|---|---|
| Trust: "¿quién está detrás?" | Desarrolla Grupo +Black, comercializa Coldwell Banker (footer y contacto). El módulo de los cinco socios se quitó a pedido del cliente | #contacto, footer | live |
| Trust: "¿es real / avanza?" | Renders finales + showroom 3D; falta prueba de avance de obra | hero, #proyecto | falta: fotos/reels de obra |
| Price: "¿cuánto?" | Lista de precios por WhatsApp; tipologías con m² | #inversion, form | pendiente decisión cliente |
| Fit: "¿me sirve a mí?" | Objetivos (renta, uso propio, revalorización, diversificar) + tipologías + niveles | #inversion, form | live |
| Timing: "¿cuándo?" | Entrega estimada mayo 2028, venta en pozo | ficha, hero lead | live |
| Effort: "¿qué tengo que hacer?" | Form corto de 5 campos → WhatsApp con mensaje armado | #contacto | live |
| Social proof | Marcas confirmadas, testimonios de inversores | — | falta (cliente) |

## Audit Findings
| Issue | Severity (0-4) | Fix | Status |
|---|---|---|---|
| Titulares Six Caps se pisaban entre líneas (line-height 0.82) | 3 | line-height 0.9 en `.display`; logo con leading 1 | done |
| Eyebrow repetido sobre cada título + etiqueta de sección: doble marcador | 2 | Se quita el eyebrow; queda la etiqueta de esquina del manual | done |
| Mix y tipologías como grillas de cards idénticas | 2 | Mix → índice tipográfico con imagen que responde; tipologías → catálogo sin cajas | done |
| Banda de métricas tipo plantilla (tile + label) | 1 | Una línea de cifras + palabra, estilo portada del press kit | done |
| Fade-in idéntico en todas las secciones | 2 | Se elimina; única entrada coreografiada en el hero | done |
| Patrones que no seguían el manual (bloques 2×2 inventados) | 3 | Se midieron las páginas Patrones e Intervención y el cartel: tira de columnas 1·1.8·2.7·3.6 con semielipses ancladas al borde derecho, patrón radial de celdas crecientes, ficha tipográfica con cuartos de círculo, claim con línea | done |
| Glifos "↗" como ícono | 1 | Ícono SVG de un trazo en todos los enlaces | done |
| Sin "estás acá" en la nav | 1 | Scroll-spy con subrayado + aria-current | done |
| Validación del form en idioma del navegador y sin corrección concreta | 2 | Mensajes en castellano con ejemplo; patrón para WhatsApp | done |
| Web 3D no accesible desde nav en mobile | 1 | Enlace visible en todos los anchos | done |
| Imágenes JPG 6,4 MB, hero único de 2400 px | 2 | WebP + srcset del hero + preload | done |
| Copy de Seguros sobreprometía ("cobertura integral… seguridad jurídica") | 2 | Se quita; los cinco socios "se potencian entre sí" | done |
| Sin prueba social ni avance de obra | 3 | Pedir al cliente marcas confirmadas y material de obra | pendiente |
| Precios ausentes | 2 | Decisión del cliente | pendiente |
| Logos armados con tipografía en vez de los del manual | 2 | Vectores extraídos del PDF del manual (marca apilada, display con cuadros, GRUPO +BLACK) | done |
| Recursos del manual aplicados literalmente no gustaron al cliente | 1 | Se vuelve a las ventanas circulares; sin gráfica en el hero; patrón radial fuera del footer | done |
| Aviso legal demasiado largo | 1 | Resumido a lo esencial | done |

## Lead Capture
Form de 5 campos que replica el "Black form" de Meta. Al enviar abre WhatsApp con el mensaje prearmado (unidad, objetivo, capital), POST opcional a `VITE_LEAD_ENDPOINT`, eventos `generate_lead` (GA4) y `Lead` (Meta). Sin scorecard: el capital y el objetivo ya califican el lead para Coldwell.
