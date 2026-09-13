import { useState } from 'react'
import { MIX, PROYECTO, SUSTENTABLE } from '@/content'
import { Section, Title } from '@/components/Brand'
import { PatternImage } from '@/components/Patterns'

export function Proyecto() {
  return (
    <Section id="proyecto" meta="El proyecto">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <Title lines={PROYECTO.title} className="lg:col-span-7" />
        <div className="lg:col-span-5 lg:pt-6 space-y-5 text-lg leading-relaxed text-paper/85 max-w-md">
          {PROYECTO.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-12">
        <PatternImage
          src="/img/ext_3.webp"
          alt="Patio central con escaleras y locales en doble altura"
          edge="right"
          className="md:col-span-8"
        />
        <div className="md:col-span-4 grid gap-4 grid-cols-2 md:grid-cols-1">
          <img
            src="/img/int_6.webp"
            alt="Espacio gastronómico con barra"
            className="w-full aspect-[3/2] object-cover"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/img/int_5.webp"
            alt="Lounge del rooftop al atardecer"
            className="w-full aspect-[3/2] object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Section>
  )
}

/* Índice de programas: la lista es el control, la imagen responde. */
export function Mix() {
  const [i, setI] = useState(0)
  return (
    <Section id="mix" meta="Mix comercial" tone="light">
      <Title lines={['Un destino', 'multi-uso.']} className="mt-10" />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
        <ol className="lg:col-span-5 border-t border-ink/15">
          {MIX.map((m, k) => {
            const active = i === k
            return (
              <li key={m.title} className="border-b border-ink/15">
                <button
                  type="button"
                  onMouseEnter={() => setI(k)}
                  onFocus={() => setI(k)}
                  onClick={() => setI(k)}
                  aria-expanded={active}
                  className={`w-full text-left py-4 flex items-baseline justify-between gap-6 transition-colors duration-200 ${
                    active ? 'text-ink' : 'text-ink/45 hover:text-ink'
                  }`}
                >
                  <span className="display text-5xl leading-none">{m.title}</span>
                  <span className="label whitespace-nowrap shrink-0 text-ink/60">{m.tag}</span>
                </button>
                <div className={active ? 'block' : 'hidden'}>
                  <p className="font-light text-ink/80 leading-relaxed pb-5 pr-6 max-w-md">{m.body}</p>
                  <img
                    src={m.img}
                    alt={m.alt}
                    className="lg:hidden w-full aspect-[3/2] object-cover mb-5"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>
            )
          })}
        </ol>

        <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28">
          <div className="relative aspect-[3/2] bg-ink/5 overflow-hidden">
            {MIX.map((m, k) => (
              <img
                key={m.title}
                src={m.img}
                alt={m.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === k ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <p className="label mt-3 text-ink/60">{MIX[i].alt}</p>
        </div>
      </div>
    </Section>
  )
}

export function Sustentable() {
  return (
    <Section id="sustentable" meta="Rooftop y sostenibilidad">
      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
        <PatternImage
          src="/img/ext_1.webp"
          alt="Terraza verde del rooftop"
          edge="left"
          className="lg:col-span-7 lg:order-first"
        />
        <Title lines={SUSTENTABLE.title} className="lg:col-span-5" />
      </div>

      <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 border-t border-paper/15">
        {SUSTENTABLE.items.map((it) => (
          <li key={it.title} className="py-8 border-b border-paper/15 lg:border-b-0">
            <h3 className="display text-5xl">{it.title}</h3>
            <p className="mt-3 text-paper/75 leading-relaxed max-w-xs">{it.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
