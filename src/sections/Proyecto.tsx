import { MIX, PROYECTO, SUSTENTABLE } from '@/content'
import { Pattern, PatternImage, Section, Title } from '@/components/Brand'

const MIX_IMG = ['/img/int_4.jpg', '/img/int_1.jpg', '/img/patio_comidas.jpg', '/img/cowork.jpg', '/img/storage_ph.jpg']

export function Proyecto() {
  return (
    <Section id="proyecto" meta="El proyecto">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label opacity-70 mb-4">{PROYECTO.eyebrow}</p>
          <Title lines={PROYECTO.title} />
        </div>
        <div className="lg:col-span-5 lg:pt-16 space-y-5 text-lg font-light leading-relaxed text-paper/85 max-w-md">
          {PROYECTO.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-12">
        <PatternImage
          src="/img/ext_3.jpg"
          alt="Patio central con escaleras y locales en doble altura"
          cols={6}
          rows={4}
          seed={5}
          className="md:col-span-8"
        />
        <div className="md:col-span-4 grid gap-4 grid-cols-2 md:grid-cols-1">
          <img
            src="/img/int_4.jpg"
            alt="Circulación interior con locales comerciales"
            className="w-full aspect-[3/2] object-cover"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/img/int_6.jpg"
            alt="Espacio gastronómico con barra"
            className="w-full aspect-[3/2] object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Section>
  )
}

export function Mix() {
  return (
    <Section meta="Mix comercial" tone="light">
      <div className="mt-10 flex items-end justify-between gap-6 flex-wrap">
        <Title lines={['Un destino', 'multi-uso.']} />
        <p className="label opacity-70 pb-3">Rubros y distribución</p>
      </div>

      <ul className="mt-12 grid gap-px bg-ink/15 border border-ink/15 md:grid-cols-2 lg:grid-cols-3">
        {MIX.map((m, i) => (
          <li key={m.n} className="bg-paper p-5 md:p-7 flex flex-col gap-6">
            <img
              src={MIX_IMG[i]}
              alt=""
              className="w-full aspect-[3/2] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex gap-5 items-start">
              <span className="display text-6xl leading-[0.8] shrink-0">{m.n}</span>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-[0.08em]">{m.title}</h3>
                <p className="mt-2 font-light text-ink/80 leading-relaxed">{m.body}</p>
              </div>
            </div>
          </li>
        ))}
        <li className="bg-ink p-8 flex items-center justify-center min-h-[280px]">
          <Pattern cols={4} rows={4} seed={2} fill="bg-paper" className="w-full max-w-[260px]" />
        </li>
      </ul>
    </Section>
  )
}

export function Sustentable() {
  return (
    <Section meta="Rooftop y sostenibilidad">
      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <p className="label opacity-70 mb-4">{SUSTENTABLE.eyebrow}</p>
          <Title lines={SUSTENTABLE.title} />
        </div>
        <PatternImage
          src="/img/ext_1.jpg"
          alt="Terraza verde del rooftop"
          cols={6}
          rows={4}
          seed={7}
          className="lg:col-span-6"
        />
      </div>

      <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 border-t border-paper/15">
        {SUSTENTABLE.items.map((it) => (
          <li key={it.title} className="py-8 md:pr-8 border-b border-paper/15 lg:border-b-0">
            <h3 className="display text-5xl">{it.title}</h3>
            <p className="mt-3 font-light text-paper/75 leading-relaxed max-w-xs">{it.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
