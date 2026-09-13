import { HERO, LINKS, STATS } from '@/content'
import { Arrow, Button } from '@/components/Brand'
import { trackCta } from '@/lib/tracking'

export function Hero() {
  return (
    <header id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink">
      <img
        src="/img/hero.jpg"
        alt="Render exterior de BLACK Paseo de Compras en Escobar"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14 pb-10 md:pb-14 pt-40">
        <p className="label mb-5 opacity-80">{HERO.eyebrow}</p>
        <h1 className="display text-[clamp(104px,20vw,320px)]">
          {HERO.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg md:text-xl font-light leading-snug text-paper/90">{HERO.lead}</p>
          <div className="flex flex-wrap gap-3">
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

export function Stats() {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] grid grid-cols-2 md:grid-cols-4 border-y border-ink/15">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 md:px-10 lg:px-14 py-8 md:py-10 border-ink/15 ${
              i % 2 === 0 ? 'border-r' : 'md:border-r'
            } ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 3 ? 'md:border-r-0' : ''}`}
          >
            <div className="display text-[clamp(64px,7vw,112px)] whitespace-nowrap">
              {s.value}
              {s.unit && <span className="text-[0.45em] align-top ml-1">{s.unit}</span>}
            </div>
            <div className="label mt-2 opacity-70">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
