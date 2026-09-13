# Design System

## Design Direction
- Mundo visual: Manual de Marca BLACK 2026. Póster editorial en blanco y negro puros; la tipografía es la arquitectura de la página.
- Signature moment: el hero. Render a sangre y titular "TU LUGAR / DE ENCUENTRO" en Six Caps a escala de viewport que sube línea por línea. Sin recursos gráficos sobre el render (decisión del cliente, sept 2026).
- Referencias (top-design): Locomotive (escala display extrema, entrada por líneas, expo-out), Studio Freight (listas tipográficas con línea inferior, Lenis), AREA 17 (composición editorial, imagen a través de máscaras).
- Lo que NO se adopta de las referencias: negros/blancos "cálidos" (#0a0a0a / #fafaf9) y acento de color. El manual fija #000000 / #FFFFFF y sin acento; el brief manda.

## Typography
- Display: Six Caps (Google Fonts). Line-height 0.9 (por debajo pisa líneas), tracking +0.01em. Escala: hero `clamp(96px, 16vw, 232px)`, títulos de sección `clamp(64px, 9.5vw, 152px)`, cifras 56–140 px, ítems de índice 48–60 px.
- Cuerpo: Barlow 300/400/500/600/700. Body 18 px, line-height 1.6, medida ≤ 65 ch (`max-w-md`/`max-w-lg`). En fondo negro se usa 400; en blanco, 300.
- Etiquetas: Barlow 500, 12 px, mayúsculas, tracking 0.18em.
- Carga: Google Fonts con `display=swap`, preconnect a fonts.gstatic.com. Pendiente: self-host y subset si Lighthouse marca el round trip.

## Tokens
- Color: `--color-ink #000000`, `--color-paper #ffffff`. Opacidades funcionales: texto secundario 85/80, terciario 60–70, inactivo 45–50 (≥ 3:1 en display), bordes 15–20 %.
- Espaciado: escala Tailwind (4/8/16/24/32/48/64). Secciones `py-16 md:py-24`; contenedor 1440 px con `px-5 md:px-10 lg:px-14`.
- Sin sombras. Sin radios salvo las morfologías del manual (semicírculo, círculo, cuadrado, cuarto).
- Morfologías: formato definitivo = página 11 del manual (imagen vista a través de columnas de semielipses que se angostan a la derecha). Descartados: bloques 2×2 de círculos, grilla aleatoria 6×4 y tira de semielipses blancas sobre el borde (todo en el historial).
- Movimiento: `--ease-out-expo cubic-bezier(0.16,1,0.3,1)`. Lenis lerp 0.09. Sin reveals por sección.

## Components
| Component | Decision | Status |
|---|---|---|
| Meta (etiqueta de esquina) | "BLACK PASEO DE COMPRAS · SECCIÓN · 2026", reemplaza al eyebrow | live |
| Logo / LogoTiles / GrupoBlack | SVG vectoriales extraídos del manual (págs. 4, 5 y 14), pintados con currentColor; `--logo-bg` para los cuadros y la caja de +BLACK | live |
| PatternImage | Intervención de imágenes del manual (pág. 11): 4 columnas que se angostan a la derecha (2.85 · 2.75 · 1.8 · 1), ventana = mitad derecha de una elipse anclada al borde izquierdo de cada celda, fila principal ≈ 2× la columna ancha y filas parciales. Máscara SVG; fuera de las ventanas, el color de la sección | live |
| Stats (marquee) | Cinta de cifras (cifra Six Caps + palabra) en loop infinito, pausa en hover, estática con reduced-motion | live |
| LineClaim | "TU LUGAR DE ——— ENCUENTRO" con línea, del manual y el cartel | live |
| Button (solid/outline/dark/outlineDark) | 48 px, etiqueta 12 px, sin radio; foco con outline currentColor | live |
| TextLink | Texto + flecha SVG, subrayado en hover | live |
| Índice + imagen (Mix) | Lista display como control; imagen sticky que responde a hover/foco/tap | live |
| Form | Campos de línea inferior, mensajes en castellano, WhatsApp síncrono al enviar | live |

## UX Audit Findings
| Issue | Heuristic | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| Sin indicador de sección actual | Trunk Test / visibilidad de estado | 1 | Scroll-spy en nav con `aria-current` | done |
| Mensajes de validación genéricos | Nielsen 9 (recuperación de errores) | 2 | setCustomValidity en castellano con ejemplo | done |
| Texto inactivo a 35–40 % sobre blanco (< 3:1) | WCAG contraste | 2 | 45–50 % | done |
| Web 3D oculto en mobile | Nielsen 7 (flexibilidad) | 1 | Enlace visible en todos los anchos | done |
| Hover-only en índice de programas | Funciona sin hover | 0 | Ya respondía a tap y foco | n/a |
| Mapa de Google con filtro invertido | Nielsen 4 (consistencia) | 1 | Reemplazado por el mapa satelital del showroom virtual (Urbania, permite iframe); enlace "Cómo llegar en Google Maps" debajo | done |
| Sin estados de carga en el form | Nielsen 1 | 0 | La acción es instantánea (abre WhatsApp); mensaje de confirmación con enlace de respaldo | n/a |
| Precios ausentes obligan a un paso extra | Krug (fricción) | 2 | Decisión del cliente | pending |

## Microinteraction Inventory
| Interaction | Trigger/Rules/Feedback/Loops | Fix | Status |
|---|---|---|---|
| Carga del hero | Al montar: título sube por líneas, kicker/lead/CTAs entran, tira se imprime (0.45 s + 35 ms/celda) | — | live |
| Índice de programas | Hover/foco/tap → imagen cruza en 500 ms, texto activo a 100 % | — | live |
| Tabs de niveles | Click → imagen cambia, marcador cuadrado se rellena, descripción con aria-live | — | live |
| Nav | Scroll > 40 px → barra sólida; sección visible → subrayado | — | live |
| Botones | Hover: inversión de color 200 ms; foco visible con outline | — | live |
| Envío del form | Abre WhatsApp; confirmación con enlace de respaldo | — | live |
