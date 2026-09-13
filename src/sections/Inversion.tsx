import { useState } from 'react'
import { INVERSION, LINKS, NIVELES } from '@/content'
import { Arrow, Button, Section, Title } from '@/components/Brand'
import { trackCta } from '@/lib/tracking'

export function Inversion() {
  const [nivel, setNivel] = useState(0)
  const actual = NIVELES.find((n) => n.id === nivel) ?? NIVELES[1]

  return (
    <Section id="inversion" meta="Oportunidad" tone="light">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <Title lines={INVERSION.title} className="lg:col-span-8" />
        <div className="lg:col-span-4 lg:pt-6">
          <p className="text-lg font-light leading-relaxed text-ink/85">{INVERSION.body}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Objetivos de inversión">
            {INVERSION.objetivos.map((o) => (
              <li key={o} className="label border border-ink/30 px-3 py-2">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tipologías: catálogo sin cajas, ficha bajo cada render */}
      <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {INVERSION.tipologias.map((t) => (
          <li key={t.title}>
            <img
              src={t.img}
              alt={`Tipología ${t.title}`}
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-4 pt-3 border-t border-ink flex items-baseline justify-between gap-3">
              <h3 className="display text-4xl leading-none">{t.title}</h3>
              <span className="label whitespace-nowrap">{t.spec}</span>
            </div>
            <p className="mt-2 font-light text-ink/75 leading-relaxed">{t.body}</p>
          </li>
        ))}
      </ul>

      {/* Niveles */}
      <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-4">
          <div role="tablist" aria-label="Niveles del edificio" className="border-t border-ink/15">
            {NIVELES.map((n) => {
              const active = n.id === nivel
              return (
                <button
                  key={n.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setNivel(n.id)}
                  className={`w-full flex items-center justify-between gap-4 py-4 border-b border-ink/15 text-left transition-colors ${
                    active ? 'text-ink' : 'text-ink/50 hover:text-ink'
                  }`}
                >
                  <span className="display text-4xl leading-none">{n.label}</span>
                  <span className={`w-2.5 h-2.5 ${active ? 'bg-ink' : 'border border-ink/40'}`} aria-hidden />
                </button>
              )
            })}
          </div>
          <p className="mt-5 font-light text-ink/80 leading-relaxed" aria-live="polite">
            {actual.body}
          </p>
        </div>
        <div className="lg:col-span-8 border border-ink/15 bg-paper">
          <img
            key={actual.id}
            src={`/img/nivel_${actual.id}.webp`}
            alt={`Vista axonométrica · ${actual.label}`}
            className="w-full aspect-[16/9] object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <Button href="#contacto" variant="dark" onClick={() => trackCta('inversion_precios')}>
          Pedir lista de precios <Arrow />
        </Button>
        <Button href={LINKS.web3d} target="_blank" variant="outlineDark" onClick={() => trackCta('inversion_web3d')}>
          Ver disponibilidad en 3D
        </Button>
      </div>
    </Section>
  )
}
