import { HERO, LINKS, STATS } from '@/content'
import { Arrow, Button, ModuleStrip } from '@/components/Brand'
import { trackCta } from '@/lib/tracking'

export function Hero() {
  return (
    <header id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink">
      <img
        src="/img/hero-1600.webp"
        srcSet="/img/hero-960.webp 960w, /img/hero-1600.webp 1600w, /img/hero-2400.webp 2400w"
        sizes="100vw"
        alt="Render exterior de BLACK Paseo de Compras en Escobar"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      {/* Tira de módulos del manual sobre el borde derecho: el render se ve a través de los círculos. */}
      <ModuleStrip edge="right" width="16vw" fill="bg-ink" animate className="hidden lg:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14 pb-10 md:pb-14 pt-40 lg:pr-[18vw]">
        <p className="label mb-5 text-paper/80 enter" style={{ animationDelay: '150ms' }}>
          {HERO.kicker}
        </p>
        <h1 className="display text-[clamp(96px,16vw,232px)]">
          {HERO.title.map((l) => (
            <span key={l} className="rise">
              <span>{l}</span>
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg md:text-xl leading-snug text-paper/90 enter" style={{ animationDelay: '420ms' }}>
            {HERO.lead}
          </p>
          <div className="flex flex-wrap gap-3 enter" style={{ animationDelay: '540ms' }}>
            <Button href="#contacto" onClick={() => trackCta('hero_invertir')}>
              {HERO.ctaPrimary} <Arrow />
            </Button>
            <Button href={LINKS.web3d} target="_blank" variant="outline" onClick={() => trackCta('hero_web3d')}>
              {HERO.ctaSecondary} <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

/* Ficha en una línea, como la portada del press kit: cifra grande + palabra. */
export function Stats() {
  return (
    <div className="bg-paper text-ink border-y border-ink/15">
      <ul className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-5 md:py-7 flex flex-wrap items-baseline gap-x-10 lg:gap-x-16 gap-y-2">
        {STATS.map((s) => (
          <li key={s.label} className="flex items-baseline gap-3">
            <span className="display text-[56px] md:text-[72px] leading-none whitespace-nowrap">
              {s.value}
              {s.unit && <span className="text-[0.5em] ml-1">{s.unit}</span>}
            </span>
            <span className="label">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
