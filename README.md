# BLACK Paseo de Compras · Landing

Landing de captación de inversores para **BLACK Paseo de Compras** (Escobar), desarrollado
por Grupo +Black y comercializado por Coldwell Banker. Producida por Altum Studio.

## Stack

- **React 19 + TypeScript + Vite** (mismo stack que ClubPlaza)
- **Tailwind CSS v4** — la config vive en `src/index.css` (`@theme`), no hay `tailwind.config.js`
- Sin router, sin UI kit: una sola página, componentes propios en `src/components/Brand.tsx`
- **Lenis** para scroll con inercia (se omite con `prefers-reduced-motion`)
- Tipografías del Manual de Marca 2026 vía Google Fonts: **Six Caps** (display) + **Barlow** (cuerpo)
- Paleta: sólo `#000000` / `#FFFFFF`

## Cómo correr

```bash
npm install     # (o: bun install)
npm run dev     # http://localhost:5173
npm run build   # tsc -b + vite build
npm run preview
```

## Estructura

```
src/
├── content.ts            # TODO el copy y los datos (press kit, brochure, listado de unidades)
├── components/Brand.tsx  # Logo, LogoTiles, GrupoBlack, Button, TextLink, Section, Title
├── components/Patterns.tsx # ModuleStrip, PatternImage (ventanas circulares), LineClaim
├── components/logos/     # LogoMark, LogoDisplay, LogoGrupo: SVG extraídos del manual de marca (no editar a mano)
├── sections/             # Nav · Hero+Stats · Proyecto+Mix+Sustentable · Ubicacion · Grupo · Inversion · Contacto · Footer
├── lib/lead.ts           # armado del mensaje de WhatsApp + POST opcional a un endpoint
└── lib/tracking.ts       # GA4 + Meta Pixel (sólo si hay env vars)
public/img/               # renders web (WebP 1800px; hero con srcset 960/1600/2400) tomados de Drive › Grupo BLACK › 01_PRODUCCION_VISUAL › Renders_Finales
```

## Leads

El formulario replica los campos del "Black form" de Meta (unidad, objetivo, capital, nombre,
WhatsApp). Al enviar:

1. Abre WhatsApp (`wa.me/<VITE_WHATSAPP_NUMBER>`) con el mensaje prearmado.
2. Si `VITE_LEAD_ENDPOINT` está definido, hace un `POST` JSON con el lead (para CRM / Supabase).
3. Dispara `generate_lead` (GA4) y `Lead` (Meta Pixel) si hay IDs configurados.

Variables en `.env.example`. En Vercel se cargan en *Settings → Environment Variables*.

## Deploy

Vercel, proyecto conectado al repo `altum-studio/black-landing`. Cada push a `main` publica.
Dominio: `blackpaseodecompras.com` (DNS en DonWeb). Para el subdominio de prueba, CNAME a
`cname.vercel-dns.com`; para la raíz, registro A a `76.76.21.21`.

## Diseño y auditorías

La dirección visual, las decisiones tipográficas y los hallazgos de las pasadas con las skills
`impeccable`, `ux-heuristics`, `top-design` e `improve-website` están en `docs/`:
`DESIGN.md`, `WEBSITE.md`, `POSITIONING.md`, `METRICS.md`, `EXPERIMENTS.md` y el tracker
`IMPROVE-WEBSITE-PLAN.md`. Regla de la casa: sin eyebrows sobre títulos, sin grillas de cards,
sin fade-in por sección; Six Caps con line-height 0.9.

## Pendientes a validar con el cliente

- Número de WhatsApp definitivo (hoy: Coldwell Banker 11 3002-7781, del brochure).
- Handle de Instagram (`LINKS.instagram` en `content.ts`, vacío = no se muestra).
- Descripción de cada nivel en `NIVELES` (usos por planta).
- Si se muestran precios (lista de junio 2026 en `BLACK_Listado_Unidades.xlsx`).
- Fecha de entrega: mayo 2028 (press kit). El disclaimer viejo decía julio 2027.
- Sección de expansión (esquina lindera) si se aprueba.
