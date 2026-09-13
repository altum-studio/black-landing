import { GRUPO } from '@/content'
import { PatternImage, Section, Title } from '@/components/Brand'

export function Grupo() {
  return (
    <Section id="grupo" meta="Grupo +Black" tone="light">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label opacity-70 mb-4">{GRUPO.eyebrow}</p>
          <Title lines={GRUPO.title} />
        </div>
        <div className="lg:col-span-5 lg:pt-16 space-y-6 max-w-md">
          <p className="text-lg font-light leading-relaxed text-ink/85">{GRUPO.body}</p>
          <p className="text-xl font-medium leading-snug">{GRUPO.claim}</p>
        </div>
      </div>

      <ol className="mt-14 border-t border-ink/15">
        {GRUPO.socios.map((s) => (
          <li key={s.n} className="grid gap-2 md:gap-6 md:grid-cols-12 py-6 border-b border-ink/15 items-baseline">
            <span className="display text-5xl md:col-span-1">{s.n}</span>
            <h3 className="md:col-span-4 text-xl font-semibold uppercase tracking-[0.08em]">{s.title}</h3>
            <p className="md:col-span-7 font-light text-ink/80 text-lg leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {GRUPO.kpis.map((k) => (
          <div key={k.label}>
            <div className="display text-[clamp(96px,12vw,200px)]">{k.value}</div>
            <div className="label opacity-70 -mt-1">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-center">
        <PatternImage
          src="/img/ext_4.jpg"
          alt="Fachada de chapa trapezoidal negra con vegetación"
          bg="bg-paper"
          seed={4}
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
