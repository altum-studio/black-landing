import { useEffect } from 'react'
import { BLACK_D, BLACK_T, LABEL_D, LABEL_T, LOGO_VIEWBOX } from './logos/LogoParts'

/** Duración total de la intro (coincide con el video "Outro BLACK": 4.96 s). */
export const LOADER_MS = 4400

/**
 * Pantalla de carga que reproduce el video "Outro BLACK" del manual, en CSS:
 *  0.0–0.9 s  el contorno de BLACK se dibuja sobre negro
 *  1.05 s     se rellena
 *  1.2–1.7 s  un círculo blanco entra desde abajo a la derecha e invierte el logo
 *  1.6–2.0 s  "PASEO DE COMPRAS" sube a su lugar
 *  3.3–3.8 s  un círculo negro cierra desde abajo a la izquierda
 *  3.95 s     la pantalla se desvanece y arranca la coreografía del hero
 * Se muestra una vez por sesión y nunca con prefers-reduced-motion.
 */
export function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const html = document.documentElement
    html.classList.add('is-loading')
    const t = setTimeout(() => {
      html.classList.remove('is-loading')
      onDone()
    }, LOADER_MS)
    return () => {
      clearTimeout(t)
      html.classList.remove('is-loading')
    }
  }, [onDone])

  return (
    <div className="ld" role="status" aria-label="Cargando BLACK Paseo de Compras">
      <div className="ld-c1" aria-hidden />
      <svg className="ld-logo" viewBox={LOGO_VIEWBOX} aria-hidden>
        <defs>
          <clipPath id="ld-clip">
            <rect x="300" y="656" width="360" height="44" />
          </clipPath>
        </defs>
        <path className="ld-black" transform={BLACK_T} d={BLACK_D} pathLength={1} />
        <g clipPath="url(#ld-clip)">
          <g className="ld-label">
            <path transform={LABEL_T} d={LABEL_D} />
          </g>
        </g>
      </svg>
      <div className="ld-c2" aria-hidden />
    </div>
  )
}
