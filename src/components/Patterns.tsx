/**
 * Recursos gráficos del Manual de Marca BLACK 2026, construidos con la misma regla
 * que usan el manual (págs. Patrones e Intervención de imágenes) y el cartel de obra:
 *
 *   Cada celda de una grilla aloja una ELIPSE con semiejes iguales a las medidas de la
 *   celda, anclada al borde interior. Según la posición queda un cuarto (esquina), una
 *   mitad (borde) o la elipse entera (centro): las cuatro morfologías del manual.
 *
 * Como la regla se define por celda, el patrón puede estirarse a cualquier proporción
 * (en el manual las celdas son casi cuadradas; en el cartel, apaisadas 2:1) y sigue
 * siendo el mismo recurso. Por eso los SVG usan preserveAspectRatio="none".
 *
 * - StripPattern: columnas que se ensanchan hacia la derecha (1 · 1.8 · 2.7 · 3.6, medido
 *   en el manual: 140 / 248 / 378 / 404 px); cada una con media elipse anclada a su borde
 *   derecho (lado plano a la derecha, curva a la izquierda). Filas parciales arriba y abajo.
 * - RadialPattern: grilla cuyas celdas crecen hacia el centro; cuartos en las esquinas,
 *   mitades en los bordes, elipse entera en el centro, con calle entre celdas.
 */
import type { CSSProperties } from 'react'

type Cell = { x: number; y: number; w: number; h: number; cx: number; cy: number; rx: number; ry: number }

const STRIP_COLS = [1, 1.8, 2.7, 3.6]

function Cells({ cells, fill, animate = false }: { cells: Cell[]; fill: string; animate?: boolean }) {
  return (
    <>
      {cells.map((c, i) => (
        <svg key={i} x={c.x} y={c.y} width={c.w} height={c.h} viewBox={`${c.x} ${c.y} ${c.w} ${c.h}`} preserveAspectRatio="none">
          <ellipse
            cx={c.cx}
            cy={c.cy}
            rx={c.rx}
            ry={c.ry}
            fill={fill}
            style={animate ? ({ ['--i' as string]: i } as CSSProperties) : undefined}
          />
        </svg>
      ))}
    </>
  )
}

export function StripPattern({
  fill = '#fff',
  cols = STRIP_COLS,
  rows = 1,
  rowRatio = 0.6,
  animate = false,
  className = '',
  style,
}: {
  fill?: string
  cols?: number[]
  /** Filas principales (cada una con la media elipse completa). */
  rows?: number
  /** Alto de cada fila principal relativo al ancho total de la tira (manual ≈ 0.65, cartel ≈ 0.5). */
  rowRatio?: number
  animate?: boolean
  className?: string
  style?: CSSProperties
}) {
  const W = cols.reduce((a, b) => a + b, 0)
  const H = rowRatio * W
  const hp = 0.45 * H
  const T = rows * H + 2 * hp
  const cells: Cell[] = []
  let x = 0
  for (const w of cols) {
    // fila parcial superior: recorte de una elipse anclada al borde inferior de la fila
    cells.push({ x, y: 0, w, h: hp, cx: x + w, cy: hp, rx: w, ry: 2 * hp })
    for (let r = 0; r < rows; r++) {
      const y = hp + r * H
      cells.push({ x, y, w, h: H, cx: x + w, cy: y + H / 2, rx: w, ry: H / 2 })
    }
    // fila parcial inferior
    cells.push({ x, y: hp + rows * H, w, h: hp, cx: x + w, cy: hp + rows * H, rx: w, ry: 2 * hp })
    x += w
  }
  return (
    <svg
      viewBox={`0 0 ${W} ${T}`}
      preserveAspectRatio="none"
      className={`${animate ? 'strip-anim' : ''} ${className}`}
      style={style}
      aria-hidden
    >
      <Cells cells={cells} fill={fill} animate={animate} />
    </svg>
  )
}

const RADIAL_SIZES = [0.18, 0.33, 0.5, 1, 0.5, 0.33, 0.18]

export function RadialPattern({
  fill = '#fff',
  gap = 0.035,
  className = '',
  style,
}: {
  fill?: string
  gap?: number
  className?: string
  style?: CSSProperties
}) {
  const s = RADIAL_SIZES
  const n = s.length
  const mid = (n - 1) / 2
  const total = s.reduce((a, b) => a + b, 0)
  const pos: number[] = []
  s.reduce((acc, v) => {
    pos.push(acc)
    return acc + v
  }, 0)
  const cells: Cell[] = []
  for (let j = 0; j < n; j++)
    for (let i = 0; i < n; i++) {
      const x = pos[i]
      const y = pos[j]
      const w = s[i]
      const h = s[j]
      const ci = i === mid
      const cj = j === mid
      const cx = ci ? x + w / 2 : i < mid ? x + w : x
      const cy = cj ? y + h / 2 : j < mid ? y + h : y
      const rx = ci ? (w / 2) * 0.96 : w * 1.05
      const ry = cj ? (h / 2) * 0.96 : h * 1.05
      cells.push({ x: x + gap, y: y + gap, w: w - 2 * gap, h: h - 2 * gap, cx, cy, rx, ry })
    }
  return (
    <svg viewBox={`0 0 ${total} ${total}`} preserveAspectRatio="none" className={className} style={style} aria-hidden>
      <Cells cells={cells} fill={fill} />
    </svg>
  )
}

/** Imagen intervenida como en el manual (pág. 12) y el cartel: tira blanca sobre un borde. */
export function PatternImage({
  src,
  alt,
  edge = 'right',
  width = '38%',
  rows = 1,
  rowRatio = 0.75,
  aspect = '16 / 9',
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  edge?: 'right' | 'left'
  width?: string
  rows?: number
  rowRatio?: number
  aspect?: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: aspect }}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <StripPattern
        fill="#fff"
        rows={rows}
        rowRatio={rowRatio}
        className={`absolute inset-y-0 h-full ${edge === 'right' ? 'right-0' : 'left-0'}`}
        style={{ width }}
      />
    </div>
  )
}

/** Cuarto de círculo como signo tipográfico (cartel: "125 LOCALES ◥ STORAGE"). */
export function Quarter({ corner, className = '' }: { corner: 'tl' | 'tr' | 'bl' | 'br'; className?: string }) {
  const r = { tl: 'rounded-tl-full', tr: 'rounded-tr-full', bl: 'rounded-bl-full', br: 'rounded-br-full' }[corner]
  return <span aria-hidden className={`inline-block bg-current ${r} ${className}`} style={{ width: '0.8em', height: '0.8em' }} />
}

/** "TU LUGAR DE ———— ENCUENTRO": claim con línea, como en la intro del manual y el cartel. */
export function LineClaim({ className = '' }: { className?: string }) {
  return (
    <p className={`label flex items-center gap-4 ${className}`}>
      <span>Tu lugar de</span>
      <span className="flex-1 h-px bg-current opacity-80" aria-hidden />
      <span className="font-semibold">Encuentro</span>
    </p>
  )
}
