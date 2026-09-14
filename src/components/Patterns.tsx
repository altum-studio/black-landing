/**
 * Recursos gráficos de la landing.
 *
 * - PatternImage: "Intervención de imágenes" del manual (pág. 11). El render se ve a
 *   través de columnas de semielipses: en cada celda la ventana es la mitad derecha de
 *   una elipse anclada al borde izquierdo (lado plano a la izquierda, curva a la
 *   derecha), con semiejes iguales al ancho de la columna y a la mitad de la fila.
 *   Las columnas se angostan hacia la derecha (medido en el manual: 530 · 520 · 340 · 190),
 *   la fila principal mide ~2 veces la columna más ancha y hay filas parciales arriba
 *   y abajo. Fuera de las ventanas queda el color de la sección.
 * - LineClaim: "TU LUGAR DE ——— ENCUENTRO" con línea, del manual y el cartel.
 */
import { useId, type CSSProperties } from 'react'
import { useInView } from '@/lib/useInView'

/** Secuencia de anchos de columna, de izquierda a derecha (manual pág. 9 y 11). */
const COLS = [2.85, 2.75, 1.8, 1]

type Cell = { x: number; y: number; w: number; h: number; cx: number; cy: number; rx: number; ry: number }

function buildCells(repeat: number) {
  const cols: number[] = []
  for (let i = 0; i < repeat; i++) cols.push(...COLS)
  const W = cols.reduce((a, b) => a + b, 0)
  const H = 1.94 * Math.max(...COLS)
  const hp = 0.3 * H
  const T = H + 2 * hp
  const cells: Cell[] = []
  let x = 0
  for (const w of cols) {
    cells.push({ x, y: 0, w, h: hp, cx: x, cy: hp, rx: w, ry: 2.6 * hp })
    cells.push({ x, y: hp, w, h: H, cx: x, cy: hp + H / 2, rx: w, ry: H / 2 })
    cells.push({ x, y: hp + H, w, h: hp, cx: x, cy: hp + H, rx: w, ry: 2.6 * hp })
    x += w
  }
  return { W, T, cells }
}

export function PatternImage({
  src,
  alt,
  aspect = 16 / 9,
  bg = '#000',
  repeat,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  /** Proporción del contenedor (ancho / alto). */
  aspect?: number
  /** Color de la sección, que tapa lo que queda fuera de las ventanas. */
  bg?: string
  /** Cuántas veces se repite la secuencia de 4 columnas. Por defecto, la que deja las
   *  ventanas casi circulares para la proporción dada. */
  repeat?: number
  className?: string
  priority?: boolean
}) {
  const id = useId()
  const [ref, inView] = useInView<HTMLDivElement>('0px 0px -20% 0px')
  const n = repeat ?? Math.max(1, Math.round(0.55 * aspect))
  const { W, T, cells } = buildCells(n)
  return (
    <div ref={ref} className={`relative overflow-hidden win-anim ${inView ? 'is-in' : ''} ${className}`} style={{ aspectRatio: `${aspect}` }}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      {/* Capa del color de sección con las ventanas recortadas: el patrón se estira a la
          proporción del contenedor, y como la regla es por celda, las ventanas siguen
          siendo semielipses ajustadas a cada columna. */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${W} ${T}`} preserveAspectRatio="none" aria-hidden>
        <defs>
          <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={T}>
            <rect x="0" y="0" width={W} height={T} fill="#fff" />
            {cells.map((c, i) => (
              <svg key={i} x={c.x} y={c.y} width={c.w} height={c.h} viewBox={`${c.x} ${c.y} ${c.w} ${c.h}`} preserveAspectRatio="none">
                <ellipse
                  cx={c.cx}
                  cy={c.cy}
                  rx={c.rx}
                  ry={c.ry}
                  fill="#000"
                  style={{ ['--i' as string]: Math.floor(i / 3) } as CSSProperties}
                />
              </svg>
            ))}
          </mask>
        </defs>
        <rect x="0" y="0" width={W} height={T} fill={bg} mask={`url(#${id})`} />
      </svg>
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
