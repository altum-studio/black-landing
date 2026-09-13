import { useEffect, useRef, type ReactNode } from 'react'

/* ── Logo: "BLACK" en Six Caps + "PASEO DE COMPRAS" en Barlow (Manual 2026) ── */
export function Logo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'text-[40px]', md: 'text-[56px]', lg: 'text-[96px]' }[size]
  const sub = { sm: 'text-[8px]', md: 'text-[10px]', lg: 'text-[15px]' }[size]
  return (
    <span className={`inline-flex flex-col leading-none ${className}`} aria-label="BLACK Paseo de Compras">
      <span className={`display ${s}`}>Black</span>
      <span className={`label ${sub} -mt-[0.35em] tracking-[0.22em]`}>Paseo de compras</span>
    </span>
  )
}

/* ── Versión display: BLACK + cuadros de letras P A S E O / D E / C O M P R A S ── */
export function LogoTiles({ invert = false }: { invert?: boolean }) {
  const t = invert ? 'bg-ink text-paper' : 'bg-paper text-ink'
  const row = (word: string) =>
    word.split('').map((c, i) => (
      <span key={i} className={`tile ${t}`}>
        {c}
      </span>
    ))
  return (
    <span className="inline-flex items-end gap-2" aria-hidden>
      <span className="display text-[84px] leading-[0.75]">Black</span>
      <span className="inline-flex flex-col gap-[3px]">
        <span className="inline-flex gap-[3px]">{row('PASEO')}</span>
        <span className="inline-flex gap-[3px]">
          {row('DE')}
          <span className="tile opacity-0" />
          {row('COMPRAS')}
        </span>
      </span>
    </span>
  )
}

/* ── Marca del desarrollador: GRUPO + caja "+BLACK" ── */
export function GrupoBlack({ invert = false }: { invert?: boolean }) {
  return (
    <span className="inline-flex items-stretch gap-2" aria-label="Grupo +Black">
      <span className="display text-[44px]">Grupo</span>
      <span className={`display text-[44px] px-2 ${invert ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>+Black</span>
    </span>
  )
}

/* ── Etiqueta de esquina, estilo manual: "BLACK PASEO DE COMPRAS · SECCIÓN · 2026" ── */
export function Meta({ left, right }: { left: string; right?: string }) {
  return (
    <div className="label flex items-center justify-between gap-6 opacity-70">
      <span>
        <b className="font-semibold">Black</b> Paseo de compras · {left}
      </span>
      <span>{right ?? '2026'}</span>
    </div>
  )
}

/* ── Morfologías del manual: 1 semicírculo · 2 círculo · 3 cuadrado · 4 cuarto ── */
type Shape = 'half' | 'circle' | 'square' | 'quarter' | 'empty'

function ShapeCell({ shape, fill, rotate = 0 }: { shape: Shape; fill: string; rotate?: number }) {
  if (shape === 'empty') return <div />
  const r =
    shape === 'circle'
      ? 'rounded-full'
      : shape === 'half'
        ? 'rounded-t-full'
        : shape === 'quarter'
          ? 'rounded-tl-full'
          : ''
  return <div className={`${fill} ${r} w-full h-full`} style={{ transform: `rotate(${rotate}deg)` }} />
}

/**
 * Patrón geométrico (grilla de módulos). Determinista a partir de `seed`, para que
 * cada instancia quede igual entre renders y se pueda ajustar a mano.
 */
export function Pattern({
  cols = 6,
  rows = 4,
  seed = 1,
  fill = 'bg-paper',
  className = '',
}: {
  cols?: number
  rows?: number
  seed?: number
  fill?: string
  className?: string
}) {
  const shapes: Shape[] = ['quarter', 'half', 'circle', 'quarter', 'square', 'empty', 'quarter', 'half']
  const cells: { shape: Shape; rotate: number }[] = []
  let x = seed * 9301 + 49297
  for (let i = 0; i < cols * rows; i++) {
    x = (x * 233280 + 1) % 4294967296
    const shape = shapes[x % shapes.length]
    const rotate = 90 * (Math.floor(x / 7) % 4)
    cells.push({ shape, rotate })
  }
  return (
    <div
      className={`grid gap-0 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, aspectRatio: `${cols} / ${rows}` }}
      aria-hidden
    >
      {cells.map((c, i) => (
        <ShapeCell key={i} shape={c.shape} fill={fill} rotate={c.rotate} />
      ))}
    </div>
  )
}

/**
 * "Intervención de imágenes" del manual: el render se ve a través de una grilla de
 * módulos; algunas celdas quedan tapadas por el color de fondo con formas.
 */
export function PatternImage({
  src,
  alt,
  cols = 6,
  rows = 4,
  seed = 3,
  bg = 'bg-ink',
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  cols?: number
  rows?: number
  seed?: number
  bg?: string
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
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        aria-hidden
      >
        {cells.map((s, i) => (
          <div key={i} className="relative">
            {s && (
              <div className={`absolute inset-0 ${bg}`}>
                {/* Recorte interior: forma transparente que deja ver el render */}
                <div
                  className={`w-full h-full ${
                    s === 'circle' ? 'rounded-full' : s === 'half' ? 'rounded-b-full' : s === 'quarter' ? 'rounded-br-full' : ''
                  }`}
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${((i % cols) / (cols - 1)) * 100}% ${(Math.floor(i / cols) / (rows - 1)) * 100}%`,
                    opacity: s === 'square' ? 0 : 1,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Botones ── */
export function Button({
  children,
  href,
  onClick,
  variant = 'solid',
  type = 'button',
  className = '',
  target,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'solid' | 'outline' | 'ghost'
  type?: 'button' | 'submit'
  className?: string
  target?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-3 h-12 px-6 label text-[12px] transition-colors duration-200 select-none'
  const v = {
    solid: 'bg-paper text-ink hover:bg-paper/85',
    outline: 'border border-paper text-paper hover:bg-paper hover:text-ink',
    ghost: 'text-paper underline underline-offset-8 decoration-paper/40 hover:decoration-paper px-0',
  }[variant]
  if (href)
    return (
      <a href={href} onClick={onClick} target={target} rel={target ? 'noopener' : undefined} className={`${base} ${v} ${className}`}>
        {children}
      </a>
    )
  return (
    <button type={type} onClick={onClick} className={`${base} ${v} ${className}`}>
      {children}
    </button>
  )
}

export const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

/* ── Sección con etiqueta de esquina y reveal al scroll ── */
export function Section({
  id,
  meta,
  tone = 'dark',
  className = '',
  children,
}: {
  id?: string
  meta: string
  tone?: 'dark' | 'light'
  className?: string
  children: ReactNode
}) {
  const t = tone === 'dark' ? 'bg-ink text-paper' : 'bg-paper text-ink'
  return (
    <section id={id} className={`${t} ${className}`}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-16 md:py-24">
        <Meta left={meta} />
        <Reveal>{children}</Reveal>
      </div>
    </section>
  )
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) el.classList.add('is-in')
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

/* ── Titular display de dos líneas ── */
export function Title({ lines, className = '' }: { lines: string[]; className?: string }) {
  return (
    <h2 className={`display text-[clamp(72px,12vw,180px)] ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </h2>
  )
}
