import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import './index.css'
import App from './App'
import { installTracking } from './lib/tracking'

installTracking()

// Intro (pantalla de carga): una vez por sesión y nunca con movimiento reducido.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let showIntro = false
try {
  showIntro = !reduced && !sessionStorage.getItem('black-intro')
  if (showIntro) sessionStorage.setItem('black-intro', '1')
} catch {
  showIntro = !reduced
}
// La coreografía del hero espera a que termine la intro.
document.documentElement.style.setProperty('--hero-delay', showIntro ? '3.95s' : '0s')

// Scroll con inercia (Lenis). Se omite si el visitante pidió menos movimiento.
if (!reduced) {
  const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } })
  const raf = (t: number) => {
    lenis.raf(t)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App intro={showIntro} />
  </StrictMode>,
)
