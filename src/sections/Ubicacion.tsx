import type { CSSProperties } from 'react'
import { LINKS, UBICACION } from '@/content'
import { InView, Section, TextLink, Title } from '@/components/Brand'

const idx = (i: number) => ({ ['--i' as string]: i }) as CSSProperties

export function Ubicacion() {
  return (
    <>
      <Section id="ubicacion" meta="Ubicación estratégica" bottom={false}>
        <div className="mt-10 grid gap-8 lg:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Title lines={UBICACION.title} />
            <p className="mt-6 lg:mt-8 max-w-lg text-lg leading-relaxed text-paper/85">{UBICACION.body}</p>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <table className="w-full border-t border-paper/20">
              <caption className="label text-left pb-3 text-paper/70">Distancias desde BLACK</caption>
              <InView as="tbody" className="stagger">
                {UBICACION.distancias.map((d, k) => (
                  <tr key={d.lugar} className="border-b border-paper/20" style={idx(k)}>
                    <th scope="row" className="py-2 text-left text-base font-normal">
                      {d.lugar}
                    </th>
                    <td className="py-2 text-right display text-3xl leading-none tabular-nums">{d.km}</td>
                  </tr>
                ))}
              </InView>
            </table>
            <p className="label mt-4 text-paper/70">Av. de los Lagos · Belén de Escobar · Partido de Escobar</p>
          </div>
        </div>
      </Section>

      {/* Mapa del showroom a todo el ancho; en mobile ocupa casi toda la pantalla. */}
      <div className="bg-ink pt-10 md:pt-16">
        <div className="relative w-full h-[72svh] sm:h-auto sm:aspect-[16/9] lg:aspect-[2/1] bg-paper/5">
          <iframe
            src={LINKS.mapsEmbed}
            title="Mapa satelital de la ubicación de BLACK Paseo de Compras (showroom virtual)"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-5 md:py-6 flex flex-wrap justify-between gap-x-6 gap-y-3 label text-paper/70">
          <span>Mapa satelital del showroom virtual · Av. de los Lagos, Belén de Escobar</span>
          <TextLink href={LINKS.maps} external className="text-paper">
            Cómo llegar en Google Maps
          </TextLink>
        </div>
      </div>
    </>
  )
}
