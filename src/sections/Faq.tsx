import type { CSSProperties } from 'react'
import { FAQ } from '@/content'
import { InView, Section, Title } from '@/components/Brand'

const idx = (i: number) => ({ ['--i' as string]: i }) as CSSProperties

/**
 * Preguntas frecuentes. Cada pregunta es un H3 con la respuesta directa en la primera
 * oración: es el formato que Google y los buscadores de IA citan (y va acompañado del
 * FAQPage en JSON-LD de index.html, que debe decir exactamente lo mismo).
 */
export function Faq() {
  return (
    <Section id="faq" meta="Preguntas frecuentes" tone="light">
      <Title lines={['Lo que', 'preguntan.']} className="mt-10" />
      <InView as="div" className="stagger mt-10 lg:mt-12 border-t border-ink/15 max-w-4xl">
        {FAQ.map((f, k) => (
          <details key={f.q} className="group border-b border-ink/15" style={idx(k)}>
            <summary className="list-none cursor-pointer py-5 flex items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg md:text-xl font-medium leading-snug">{f.q}</h3>
              <span
                aria-hidden
                className="shrink-0 mt-1 w-6 h-6 grid place-items-center border border-ink/40 text-lg leading-none transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-6 pr-12 font-light text-ink/80 leading-relaxed max-w-2xl">{f.a}</p>
          </details>
        ))}
      </InView>
    </Section>
  )
}
