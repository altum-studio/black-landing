import { FICHA, HERO, LINKS } from '@/content'
import { Arrow, Button } from '@/components/Brand'
import { Quarter, StripPattern } from '@/components/Patterns'
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
      {/* Tira de semielipses blancas sobre el borde derecho del render, como en el panel del cartel. */}
      <StripPattern
        fill="#fff"
        rows={2}
        rowRatio={0.62}
        animate
        className="hidden lg:block absolute inset-y-0 right-0 h-full w-[24vw]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-14 pb-10 md:pb-14 pt-40 lg:pr-[28vw]">
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

/**
 * Ficha del proyecto como composición tipográfica del cartel de obra: palabras en Six Caps
 * a dos escalas, encastradas, con cuartos de círculo como signos entre ellas.
 */
export function Ficha() {
  return (
    <div className="bg-paper text-ink border-y border-ink/15 overflow-hidden">
      <p className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-8 md:py-10 flex flex-wrap items-end gap-x-[0.16em] gap-y-3 display text-[clamp(44px,7.2vw,112px)] leading-[0.85]">
        {FICHA.map((t, i) =>
          'shape' in t ? (
            <Quarter key={i} corner={t.shape} className="mb-[0.03em]" />
          ) : t.size === 'sm' ? (
            <span key={i} className="inline-flex flex-col text-[0.5em] leading-[0.85] pb-[0.04em]">
              {t.text.split('\n').map((l) => (
                <span key={l}>{l}</span>
              ))}
            </span>
          ) : t.size === 'xl' ? (
            <span key={i} className="text-[1.45em] leading-[0.8] -mb-[0.02em]">
              {t.text}
            </span>
          ) : t.text.includes('²') ? (
            <span key={i}>
              {t.text.replace('²', '')}
              <sup className="font-sans font-medium text-[0.3em] align-top relative top-[0.1em] ml-[0.05em]">2</sup>
            </span>
          ) : (
            <span key={i}>{t.text}</span>
          ),
        )}
      </p>
    </div>
  )
}
