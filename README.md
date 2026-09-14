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
├── components/Patterns.tsx # PatternImage (intervención de imagen del manual), LineClaim
├── components/Loader.tsx   # intro de marca (réplica CSS del video Outro BLACK); una vez por sesión
├── components/logos/     # LogoMark, LogoDisplay, LogoGrupo: SVG extraídos del manual de marca (no editar a mano)
├── sections/             # Nav · Hero+Stats · Proyecto+Mix+Sustentable · Ubicacion · Grupo · Inversion · Contacto · Footer
├── lib/lead.ts           # armado del mensaje de WhatsApp + POST opcional a un endpoint
└── lib/tracking.ts       # GA4 + Meta Pixel + event_id/fbc para CAPI (sólo si hay env vars)
public/img/               # renders web (WebP 1800px; hero con srcset 960/1600/2400) tomados de Drive › Grupo BLACK › 01_PRODUCCION_VISUAL › Renders_Finales
```

## Leads

El formulario replica los campos del "Black form" de Meta (unidad, objetivo, capital, nombre,
WhatsApp). Al enviar:

1. Abre WhatsApp (`wa.me/<VITE_WHATSAPP_NUMBER>`) con el mensaje prearmado.
2. Hace un `POST` JSON a `VITE_LEAD_ENDPOINT` (por defecto `/api/lead`, función edge de Vercel) con el lead,
   un `event_id`, `fbp`/`fbc` (el `fbclid` del anuncio se guarda al aterrizar), URL y user agent.
3. Dispara `generate_lead` (GA4) y `Lead` (Meta Pixel) con ese mismo `event_id`.
4. `api/lead.ts` reenvía el `Lead` a **Meta Conversions API** (teléfono y nombre hasheados SHA-256, IP, UA,
   fbp/fbc, `action_source: website`) si existen `META_PIXEL_ID` y `META_CAPI_TOKEN`; Meta deduplica
   contra el Pixel por `event_id`. Sin esas variables la función responde 204 y no hace nada.

Variables en `.env.example`. En Vercel se cargan en *Settings → Environment Variables*.

## SEO / AEO

- **Pre-render**: `plugins/prerender.ts` renderiza `<App />` con `react-dom/server` al terminar `vite build` y lo
  inyecta en `dist/index.html`; el cliente hidrata (`hydrateRoot`). Google, Meta y los rastreadores de IA
  (que no ejecutan JS) reciben todo el contenido en el HTML. Sin JavaScript la página se ve completa
  (clase `no-js`). En desarrollo (`bun dev`) no hay pre-render.
- **Intro**: se decide en un script inline del `<head>` (antes del primer pintado) y se monta en `#intro`,
  fuera del árbol hidratado. El flag `ONCE` de ese script controla "una vez por sesión" vs "siempre".
- **Head**: título con keyword al frente, descripción ≤160 caracteres, `lang="es-AR"`, canonical, OG/Twitter,
  geo tags y JSON-LD (`ShoppingCenter` con dirección, coordenadas y mapa; `WebSite`; `FAQPage`).
- **FAQ** visible (`src/sections/Faq.tsx`, contenido en `FAQ` de `content.ts`): debe decir exactamente lo
  mismo que el `FAQPage` del `index.html` (Google penaliza el marcado que no coincide con lo visible).
- `public/robots.txt` (permite todo, incluidos GPTBot/ClaudeBot/PerplexityBot) y `public/sitemap.xml`.

## Deploy

Vercel, proyecto conectado al repo `altum-studio/black-landing`. Cada push a `main` publica.
Dominio en producción desde el 14/09/2026: **https://blackpaseodecompras.com** (`www` redirige a la raíz,
y `black-landing-three.vercel.app` redirige al dominio). DNS en DonWeb: registro A de la raíz a Vercel
y CNAME `www` → `cname.vercel-dns.com`; el CNAME `virtual` (showroom de Urbania) no se toca.

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
