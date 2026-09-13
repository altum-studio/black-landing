/**
 * Recursos gráficos de la landing.
 *
 * - PatternImage: "intervención de imágenes" de la primera versión. El render se ve a
 *   través de una grilla de módulos: algunas celdas quedan tapadas por el color de la
 *   sección con una ventana en forma de cuarto, semicírculo o círculo, o tapadas del
 *   todo (cuadrado). La distribución sale de una semilla, así cada imagen queda
 *   siempre igual y se puede ajustar cambiando `seed`.
 * - LineClaim: "TU LUGAR DE ——— ENCUENTRO" con línea, del manual y el cartel.
 */

type Shape = 'quarter' | 'half' | 'circle' | 'square'

const WINDOW: Record<Shape, string> = {
  circle: 'rounded-full',
  half: 'rounded-b-full',
  quarter: 'rounded-br-full',
  square: '',
}

export function PatternImage({
  src,
  alt,
  cols = 6,
  rows = 4,
  seed = 3,
  bg = 'bg-ink',
  imgAspect = 16 / 9,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  cols?: number
  rows?: number
  seed?: number
  bg?: string
  /** Proporción real de la imagen, para que la ventana muestre exactamente lo que hay debajo. */
  imgAspect?: number
  className?: string
  priority?: boolean
}) {
  const cells: (Shape | null)[] = []
  let x = seed * 7919 + 104729
  for (let i = 0; i < cols * rows; i++) {
    x = (x * 1103515245 + 12345) % 2147483648
    const v = x % 10
    cells.push(v < 5 ? null : v < 7 ? 'quarter' : v < 8 ? 'half' : v < 9 ? 'circle' : 'square')
  }

  // La imagen de fondo se ajusta con object-cover al contenedor (cols/rows). Cada ventana
  // pinta el mismo recorte, calculado en unidades de celda, para que coincida con la base.
  const ca = cols / rows
  const dispW = imgAspect >= ca ? rows * imgAspect : cols
  const dispH = imgAspect >= ca ? rows : cols / imgAspect
  const slice = (i: number) => {
    const c = i % cols
    const r = Math.floor(i / cols)
    const ox = -(c + (dispW - cols) / 2)
    const oy = -(r + (dispH - rows) / 2)
    return {
      backgroundImage: `url(${src})`,
      backgroundSize: `${dispW * 100}% ${dispH * 100}%`,
      backgroundPosition: `${(ox / (1 - dispW)) * 100}% ${(oy / (1 - dispH)) * 100}%`,
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${cols} / ${rows}` }}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} aria-hidden>
        {cells.map((s, i) => (
          <div key={i} className="relative">
            {s && (
              <div className={`absolute inset-0 ${bg}`}>
                {s !== 'square' && <div className={`w-full h-full ${WINDOW[s]}`} style={slice(i)} />}
              </div>
            )}
          </div>
        ))}
      </div>
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
