import { LINKS, UBICACION } from '@/content'
import { PatternImage, Section, TextLink, Title } from '@/components/Brand'

export function Ubicacion() {
  return (
    <Section id="ubicacion" meta="Ubicación estratégica">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Title lines={UBICACION.title} />
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/85">{UBICACION.body}</p>
        </div>

        <div className="lg:col-span-5 lg:pt-6">
          <table className="w-full border-t border-paper/20">
            <caption className="label text-left pb-4 text-paper/70">Distancias desde BLACK</caption>
            <tbody>
              {UBICACION.distancias.map((d) => (
                <tr key={d.lugar} className="border-b border-paper/20">
                  <th scope="row" className="py-3 text-left text-lg font-normal">
                    {d.lugar}
                  </th>
                  <td className="py-3 text-right display text-5xl leading-none tabular-nums">{d.km}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="label mt-6 text-paper/70">Santa Teresa · acceso Barrio San Matías · a 50 m del Camino de los Lagos</p>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <div className="relative aspect-[16/9] bg-paper/5 overflow-hidden">
          <iframe
            src={LINKS.mapsEmbed}
            title="Mapa de ubicación de BLACK Paseo de Compras"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ filter: 'grayscale(1) invert(0.92) contrast(1.05)' }}
          />
          <TextLink
            href={LINKS.maps}
            external
            className="absolute bottom-3 left-3 label bg-ink text-paper px-3 py-2 hover:bg-paper hover:text-ink hover:no-underline transition-colors"
          >
            Abrir en Google Maps
          </TextLink>
        </div>
        <PatternImage src="/img/vista_vuelo_2.webp" alt="Vista aérea del proyecto entre el verde de Escobar" edge="right" width="25%" />
      </div>
    </Section>
  )
}
