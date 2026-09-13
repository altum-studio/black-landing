import type { ReactNode } from 'react'

/* ── Logo: "BLACK" en Six Caps sobre "PASEO DE COMPRAS" en Barlow (Manual 2026) ── */
export function Logo({ className = '', size = 'sm' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'text-[38px]', md: 'text-[56px]', lg: 'text-[96px]' }[size]
  const sub = { sm: 'text-[8px]', md: 'text-[10px]', lg: 'text-[15px]' }[size]
  return (
    <span className={`inline-flex flex-col whitespace-nowrap ${className}`} aria-label="BLACK Paseo de Compras">
      <span className={`display leading-none ${s}`}>Black</span>
      <span className={`label ${sub} mt-[0.2em] tracking-[0.26em] leading-none`}>Paseo de compras</span>
    </span>
  )
}

/* ── Versión display: BLACK + cuadros de letras P A S E O / D E / C O M P R A S ── */
export function LogoTiles({ className = '' }: { className?: string }) {
  const row = (word: string) =>
    word.split('').map((c, i) => (
      <span key={i} className="tile bg-paper text-ink">
        {c}
      </span>
    ))
  return (
    <span className={`inline-flex items-end gap-[0.3em] text-[56px] md:text-[84px] ${className}`} aria-hidden>
      <span className="display leading-[0.78]">Black</span>
      <span className="inline-flex flex-col gap-[3px] pb-[0.04em]">
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
    <span className="inline-flex items-stretch gap-[0.12em] text-[44px]" aria-label="Grupo +Black">
      <span className="display leading-none">Grupo</span>
      <span className={`display leading-none px-[0.14em] ${invert ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>+Black</span>
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

/* ── Ícono de flecha, un solo trazo, para todos los enlaces y botones ── */
export const Arrow = ({ className = '' }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={`shrink-0 ${className}`}>
    <path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

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
  variant?: 'solid' | 'outline' | 'dark' | 'outlineDark'
  type?: 'button' | 'submit'
  className?: string
  target?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-3 h-12 px-6 label text-[12px] transition-colors duration-200 select-none'
  const v = {
    solid: 'bg-paper text-ink hover:bg-paper/85',
    outline: 'border border-paper text-paper hover:bg-paper hover:text-ink',
    dark: 'bg-ink text-paper hover:bg-ink/85',
    outlineDark: 'border border-ink text-ink hover:bg-ink hover:text-paper',
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

/* ── Enlace de texto con flecha ── */
export function TextLink({
  href,
  children,
  external = false,
  className = '',
  onClick,
}: {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={`inline-flex items-center gap-2 underline-offset-[6px] decoration-1 hover:underline ${className}`}
    >
      {children}
      <Arrow />
    </a>
  )
}

/* ── Sección con etiqueta de esquina ── */
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
        {children}
      </div>
    </section>
  )
}

/* ── Titular display de una o más líneas ── */
export function Title({ lines, className = '', size }: { lines: string[]; className?: string; size?: string }) {
  return (
    <h2 className={`display ${size ?? 'text-[clamp(64px,9.5vw,152px)]'} ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </h2>
  )
}
