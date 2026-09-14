import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '@/lib/useInView'

import { LogoDisplay } from './logos/LogoDisplay'
import { LogoGrupo } from './logos/LogoGrupo'
import { LogoMark } from './logos/LogoMark'

const bgVar = (bg: string) => ({ ['--logo-bg' as string]: bg }) as CSSProperties

/* ── Logo apilado BLACK / PASEO DE COMPRAS (manual pág. 4), en el color del texto ── */
export function Logo({ className = '' }: { className?: string }) {
  return <LogoMark role="img" aria-label="BLACK Paseo de Compras" className={`block h-12 md:h-14 w-auto ${className}`} />
}

/* ── Versión display: BLACK + cuadros P A S E O / D E / C O M P R A S (manual pág. 5) ── */
export function LogoTiles({ className = '', bg = '#000' }: { className?: string; bg?: string }) {
  return (
    <LogoDisplay
      role="img"
      aria-label="BLACK Paseo de Compras"
      className={`block h-[52px] md:h-[72px] w-auto max-w-full ${className}`}
      style={bgVar(bg)}
    />
  )
}

/* ── Marca del desarrollador GRUPO +BLACK (manual pág. 14) ── */
export function GrupoBlack({ className = '', bg = '#000' }: { className?: string; bg?: string }) {
  return <LogoGrupo role="img" aria-label="Grupo +Black" className={`block h-20 w-auto ${className}`} style={bgVar(bg)} />
}

/* ── Etiqueta de esquina, estilo manual: "BLACK PASEO DE COMPRAS · SECCIÓN · 2026" ── */
export function Meta({ left, right }: { left: string; right?: string }) {
  return (
    <div className="label flex items-center justify-between gap-6 opacity-70">
      <span>
        <b className="font-semibold">Black</b>
        <span className="hidden sm:inline"> Paseo de compras</span> · {left}
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
    'inline-flex items-center justify-center gap-2 sm:gap-3 h-12 px-6 label text-[11px] sm:text-[12px] tracking-[0.12em] sm:tracking-[0.18em] whitespace-nowrap transition-colors duration-200 select-none'
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
      className={`inline-flex items-center gap-2 py-[13px] -my-[13px] underline-offset-[6px] decoration-1 hover:underline ${className}`}
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
  bottom = true,
  className = '',
  children,
}: {
  id?: string
  meta: string
  tone?: 'dark' | 'light'
  /** false: sin padding inferior (cuando sigue un bloque a sangre, como el mapa). */
  bottom?: boolean
  className?: string
  children: ReactNode
}) {
  const t = tone === 'dark' ? 'bg-ink text-paper' : 'bg-paper text-ink'
  return (
    <section id={id} className={`${t} ${className}`}>
      <div className={`mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 pt-16 md:pt-24 ${bottom ? 'pb-16 md:pb-24' : 'pb-0'}`}>
        <Meta left={meta} />
        {children}
      </div>
    </section>
  )
}

/* ── Titular display: las líneas suben al entrar en pantalla (mismo gesto que el hero) ── */
export function Title({ lines, className = '', size }: { lines: string[]; className?: string; size?: string }) {
  const [ref, inView] = useInView<HTMLHeadingElement>()
  return (
    <h2 ref={ref} className={`display reveal-lines ${inView ? 'is-in' : ''} ${size ?? 'text-[clamp(64px,9.5vw,152px)]'} ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="line" style={{ ['--i' as string]: i } as CSSProperties}>
          <span>{l}</span>
          {i < lines.length - 1 ? ' ' : null}
        </span>
      ))}
    </h2>
  )
}

/* ── Envoltorio que recibe la clase is-in al entrar en pantalla (para .stagger / .unfold) ── */
export function InView({
  as: Tag = 'div',
  className = '',
  style,
  children,
  ...rest
}: {
  as?: ElementType
  className?: string
  style?: CSSProperties
  children: ReactNode
} & Record<string, unknown>) {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <Tag ref={ref} className={`${className} ${inView ? 'is-in' : ''}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}
