import { LINKS, UBICACION } from '@/content'
import { PatternImage, Section, Title } from '@/components/Brand'

export function Ubicacion() {
  return (
    <Section id="ubicacion" meta="Ubicación estratégica">
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label opacity-70 mb-4">{UBICACION.eyebrow}</p>
          <Title lines={UBICACION.title} />
          <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-paper/85">{UBICACION.body}</p>
        </div>

        <div className="lg:col-span-5 lg:pt-16">
          <p className="label opacity-70 mb-4">Distancias</p>
          <ul className="border-t border-paper/20">
            {UBICACION.distancias.map((d) => (
              <li key={d.lugar} className="flex items-baseline justify-between py-3 border-b border-paper/20">
                <span className="text-lg font-light">{d.lugar}</span>
                <span className="display text-5xl">{d.km}</span>
              </li>
            ))}
          </ul>
          <p className="label mt-6 opacity-70 leading-relaxed">
            Santa Teresa · acceso Barrio San Matías · a 50 m del Camino de los Lagos
          </p>
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
          <a
            href={LINKS.maps}
            target="_blank"
            rel="noopener"
            className="absolute bottom-3 left-3 label bg-ink/80 text-paper px-3 py-2 hover:bg-paper hover:text-ink transition-colors"
          >
            Abrir en Google Maps ↗
          </a>
        </div>
        <PatternImage src="/img/vista_vuelo_2.jpg" alt="Vista aérea del proyecto entre el verde de Escobar" seed={11} />
      </div>
    </Section>
  )
}
