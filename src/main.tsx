import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App'
import { Loader } from './components/Loader'
import { captureClickIds, installTracking } from './lib/tracking'

installTracking()
captureClickIds()

// La intro se decide en un script inline de index.html (antes del primer pintado);
// acá sólo se monta en su propia raíz (#intro), fuera del HTML pre-renderizado,
// para no romper la hidratación. Nunca con prefers-reduced-motion.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (document.documentElement.classList.contains('has-intro')) {
  const introRoot = createRoot(document.getElementById('intro')!)
  introRoot.render(
    <Loader
      onDone={() => {
        document.documentElement.classList.remove('has-intro')
        setTimeout(() => introRoot.unmount(), 0)
      }}
    />,
  )
}

// Scroll con inercia (Lenis). Se omite si el visitante pidió menos movimiento.
if (!reduced) {
  const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } })
  const raf = (t: number) => {
    lenis.raf(t)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

// En producción el HTML llega pre-renderizado (plugins/prerender.ts) y se hidrata.
// En desarrollo #root está vacío y se renderiza desde cero.
const rootEl = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app)
else createRoot(rootEl).render(app)
