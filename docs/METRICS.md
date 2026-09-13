# Metrics

## Funnel
Baseline de Altum (julio 2026, pauta Meta + formulario nativo, sin landing):

| Etapa | Cantidad | % del anterior |
|---|---|---|
| Leads | 31 | 100 % |
| Contactados (conversación real) | 17 | 55 % |
| Interesados | 9 | 53 % |
| Reuniones | 3 | 33 % (10 % del total) |

Fuera del funnel: 11 sin respuesta, 3 desinteresados, 3 no calificados.
Arteria bloqueada: leads → contactados (45 % nunca responde). La landing ataca eso con un lead que llega ya conversando por WhatsApp y con los tres campos de calificación cargados.

## Stage & One Metric That Matters
- Etapa: lanzamiento de la landing.
- OMTM: leads calificados por WhatsApp por semana (evento `generate_lead`).
- Meta de la propuesta comercial: conversión total lead → reunión del 10 % al 20–25 %.

## Baselines & Targets
| CWV metric | baseline | target | miss response |
|---|---|---|---|
| LCP | pendiente Lighthouse en prod | < 2.5 s | self-host fonts, hero-960 en mobile, quitar iframe del mapa del primer render |
| INP | pendiente | < 200 ms | revisar Lenis en móviles de gama baja |
| CLS | pendiente (imágenes con aspect-ratio reservado) | < 0.1 | reservar alto del iframe / fonts con size-adjust |
| TTFB | pendiente (Vercel edge) | < 800 ms | — |
| Peso assets | 4,5 MB WebP total, hero 271 KB (1600) / 106 KB (960) | hero ≤ 300 KB | — |
