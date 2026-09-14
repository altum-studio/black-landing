import { HERO, LINKS, STATS } from '@/content'
import { Arrow, Button } from '@/components/Brand'
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
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14 pb-10 md:pb-14 pt-40">
        <p className="label mb-5 text-paper/85 enter [text-shadow:0_1px_12px_rgba(0,0,0,.7)]" style={{ animationDelay: 'calc(var(--hero-delay, 0s) + 150ms)' }}>
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
          <p className="max-w-xl text-lg md:text-xl leading-snug text-paper/90 enter" style={{ animationDelay: 'calc(var(--hero-delay, 0s) + 420ms)' }}>
            {HERO.lead}
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 enter" style={{ animationDelay: 'calc(var(--hero-delay, 0s) + 540ms)' }}>
            <Button href="#contacto" className="px-3 sm:px-6" onClick={() => trackCta('hero_invertir')}>
              {HERO.ctaPrimary} <Arrow />
            </Button>
            <Button href={LINKS.web3d} target="_blank" variant="outline" className="px-3 sm:px-6" onClick={() => trackCta('hero_web3d')}>
              {HERO.ctaSecondary} <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

/* Cinta de cifras (cifra grande + palabra) en loop infinito; se pausa al pasar el mouse. */
export function Stats() {
  const list = (hidden: boolean) => (
    <ul className="flex items-baseline gap-x-12 lg:gap-x-16 pr-12 lg:pr-16 whitespace-nowrap" aria-hidden={hidden || undefined}>
      {STATS.map((s) => (
        <li key={s.label} className="flex items-baseline gap-3">
          <span className="display text-[56px] md:text-[72px] leading-none">
            {s.value}
            {s.unit && <span className="text-[0.5em] ml-1">{s.unit}</span>}
          </span>
          <span className="label">{s.label}</span>
        </li>
      ))}
    </ul>
  )
  return (
    <section className="marquee bg-paper text-ink border-y border-ink/15 py-5 md:py-7 overflow-hidden" aria-label="Ficha del proyecto">
      <div className="marquee-track">
        {list(false)}
        {list(true)}
      </div>
    </section>
  )
}
