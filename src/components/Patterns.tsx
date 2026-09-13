/**
 * Recursos gráficos: tira de módulos con ventanas circulares sobre el borde de una
 * imagen (celdas del color de la sección; el render se ve a través de los círculos),
 * y el claim con línea "TU LUGAR DE ——— ENCUENTRO" del manual.
 */
import type { CSSProperties } from 'react'

type Win = { r: string; cx: string; cy: string } | null

/* Bloque A: un círculo grande formado por cuatro cuartos. */
const CIRCLE_BLOCK: Win[] = [
  { r: '50cqw', cx: '100%', cy: '100%' },
  { r: '50cqw', cx: '0%', cy: '100%' },
  { r: '50cqw', cx: '100%', cy: '0%' },
  { r: '50cqw', cx: '0%', cy: '0%' },
]
/* Bloque B: dos círculos chicos, cada uno partido en dos semicírculos. */
const LENS_BLOCK: Win[] = [
  { r: '25cqw', cx: '50%', cy: '100%' },
  { r: '25cqw', cx: '50%', cy: '100%' },
  { r: '25cqw', cx: '50%', cy: '0%' },
  { r: '25cqw', cx: '50%', cy: '0%' },
]

function winStyle(w: Win): CSSProperties | undefined {
  if (!w) return undefined
  const g = `radial-gradient(circle ${w.r} at ${w.cx} ${w.cy}, transparent 99%, #000 100%)`
  return { WebkitMaskImage: g, maskImage: g }
}

export function ModuleStrip({
  edge = 'right',
  width = '25%',
  fill = 'bg-ink',
  blocks = 12,
  className = '',
}: {
  edge?: 'right' | 'left'
  width?: string
  fill?: string
  blocks?: number
  className?: string
}) {
  const cells: Win[] = []
  for (let b = 0; b < blocks; b++) cells.push(...(b % 2 === 0 ? CIRCLE_BLOCK : LENS_BLOCK))
  return (
    <div
      aria-hidden
      className={`strip absolute inset-y-0 overflow-hidden ${edge === 'right' ? 'right-0' : 'left-0'} ${className}`}
      style={{ width }}
    >
      <div className="strip-grid">
        {cells.map((w, i) => (
          <div key={i} className={fill} style={winStyle(w)} />
        ))}
      </div>
    </div>
  )
}

/** Imagen con la tira de ventanas circulares sobre uno de sus bordes. */
export function PatternImage({
  src,
  alt,
  edge = 'right',
  width = '25%',
  bg = 'bg-ink',
  aspect = '16 / 9',
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  edge?: 'right' | 'left'
  width?: string
  bg?: string
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
      <ModuleStrip edge={edge} width={width} fill={bg} />
    </div>
  )
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
