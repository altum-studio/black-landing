import { GRUPO } from '@/content'
import { GrupoBlack, Section, Title } from '@/components/Brand'
import { PatternImage } from '@/components/Patterns'

export function Grupo() {
  return (
    <Section id="grupo" meta="Grupo +Black" tone="light">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <GrupoBlack invert />
          <Title lines={GRUPO.title} className="mt-8" />
        </div>
        <div className="lg:col-span-5 lg:pt-6 space-y-6 max-w-md">
          <p className="text-lg font-light leading-relaxed text-ink/85">{GRUPO.body}</p>
          <p className="text-xl font-medium leading-snug">{GRUPO.claim}</p>
        </div>
      </div>

      {/* Los cinco socios, numerados como en el press kit: la cuenta es el mensaje. */}
      <ol className="mt-14 border-t border-ink/15">
        {GRUPO.socios.map((s) => (
          <li key={s.n} className="grid gap-2 md:gap-6 md:grid-cols-12 py-6 border-b border-ink/15 items-baseline">
            <span className="display text-5xl md:col-span-1 leading-none">{s.n}</span>
            <h3 className="md:col-span-4 text-xl font-semibold uppercase tracking-[0.08em]">{s.title}</h3>
            {s.body && <p className="md:col-span-7 font-light text-ink/80 text-lg leading-relaxed">{s.body}</p>}
          </li>
        ))}
      </ol>

      <p className="mt-12 flex flex-wrap items-baseline gap-x-12 gap-y-4">
        {GRUPO.kpis.map((k) => (
          <span key={k.label} className="flex items-baseline gap-4">
            <span className="display text-[clamp(72px,9vw,140px)] leading-none">{k.value}</span>
            <span className="label max-w-[14ch] text-ink/70">{k.label}</span>
          </span>
        ))}
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-center">
        <PatternImage
          src="/img/ext_4.webp"
          alt="Fachada de chapa trapezoidal negra con vegetación"
          edge="left"
          width="34%"
          className="md:col-span-7"
        />
        <div className="md:col-span-5 md:pl-6">
          <h3 className="display text-6xl md:text-7xl">{GRUPO.diferencialTitle}</h3>
          <p className="mt-5 font-light text-lg leading-relaxed text-ink/85 max-w-md">{GRUPO.diferencial}</p>
        </div>
      </div>
    </Section>
  )
}
