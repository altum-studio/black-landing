# Improve Website Plan

## Context
- Página: landing única `/` en https://black-landing-three.vercel.app (repo `altum-studio/black-landing`).
- Acción única: lead calificado por WhatsApp (formulario → wa.me con mensaje prearmado → Coldwell Banker).
- Evidencia disponible (julio 2026, propuesta comercial Altum): 31 leads → 17 contactados (55%) → 9 interesados (29%) → 3 reuniones (10%). Fuera del funnel: 11 sin respuesta, 3 desinteresados, 3 no calificados. Pauta Meta ~USD 150/mes; formulario "Black form" con campos unidad / objetivo / capital.
- Tráfico semanal: desconocido (la landing es nueva). Se asume bajo → las fases se apoyan en evidencia cualitativa y heurística; los tests A/B quedan en backlog hasta tener volumen.
- Queja más escuchada (reuniones RRSS mayo 2026): tono poco premium, términos ambiguos ("Retail Flagship", "DM"), y que no se presente como un shopping estándar.
- Iniciado: 2026-09-13. Primera pasada hecha en una sola sesión sin intake con el usuario: las decisiones marcadas "propuesta" requieren confirmación.

## Phase Status
| Phase | Skill | Status | Artifact | Date |
|---|---|---|---|---|
| 1 | cro-methodology | done (evidencia de julio; sin tests aún) | METRICS.md, WEBSITE.md, EXPERIMENTS.md | 2026-09-13 |
| 2 | ux-heuristics | done | DESIGN.md, EXPERIMENTS.md | 2026-09-13 |
| 3 | refactoring-ui | done (vía impeccable: jerarquía en escala de grises, sin cards) | DESIGN.md | 2026-09-13 |
| 4 | web-typography | done | DESIGN.md | 2026-09-13 |
| 5 | storybrand-messaging | done (propuesta) | POSITIONING.md | 2026-09-13 |
| 6 | high-perf-browser | done (sin Lighthouse aún) | METRICS.md, WEBSITE.md | 2026-09-13 |
| 7 | made-to-stick | done (propuesta) | POSITIONING.md | 2026-09-13 |
| 8 | design-everyday-things | done | DESIGN.md | 2026-09-13 |
Statuses: pending · in-progress · awaiting-evidence · done · deferred: <reason> · skipped: <reason>

## Key Decisions
| Date | Phase | Decision | Rationale |
|---|---|---|---|
| 2026-09-13 | 1 | La ONE action es el lead por WhatsApp. "Recorrer en 3D" queda como CTA transicional, no compite. | El funnel de Altum se mide en reuniones; WhatsApp es el canal ya activo con Coldwell. |
| 2026-09-13 | 1 | Precios no se muestran hasta que el cliente lo apruebe; el form promete "lista de precios". | Lista de junio 2026 puede estar desactualizada. |
| 2026-09-13 | 2 | Se agregó "estás acá" en la nav (scroll-spy) y validación en castellano. | Trunk Test y heurística 1/9 de Nielsen. |
| 2026-09-13 | 4 | Se mantienen Six Caps + Barlow (manual de marca). Interlineado display 0.9. | Brief manda; 0.82 pisaba líneas. |
| 2026-09-13 | 5 | Titular "Tu lugar de encuentro" se conserva (claim de marca); el kicker y el lead nombran la acción ("Invertí…", "en pozo", entrega). | Un extraño entiende qué es y qué hacer sin perder el claim. |
| 2026-09-13 | 6 | Imágenes a WebP, hero con srcset 960/1600/2400 y preload. | LCP y peso: 6,4 MB → 4,5 MB en assets. |

## Next Actions
- [ ] Confirmar con Grupo +Black: WhatsApp definitivo, handle IG, usos por nivel, mostrar precios (Altum, esta semana)
- [ ] Cargar GA4 y Meta Pixel en Vercel (VITE_GA4_ID, VITE_META_PIXEL_ID) para medir el funnel de la landing (Altum)
- [ ] Correr Lighthouse en producción y registrar baseline de CWV en METRICS.md (Altum)
- [ ] Sumar prueba social cuando exista: marcas confirmadas, avance de obra, testimonio de inversor (cliente)
- [ ] Cuando haya ≥300 visitas/semana, promover EXP-001 y EXP-002 de backlog a tarjetas de experimento
