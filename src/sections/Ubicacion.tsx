import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { LINKS, UBICACION } from '@/content'
import { Arrow, InView, Section, TextLink, Title } from '@/components/Brand'

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

      <MapEmbed />
        </>
  )
}

/**
 * Mapa del showroom embebido. Arranca "dormido": una capa transparente evita que el
 * iframe capture el scroll o el toque. Se activa con un clic o un toque y se vuelve a
 * dormir al scrollear la página, al tocar "Cerrar mapa", con Esc o al salir de pantalla.
 */
function MapEmbed() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const lock = () => setActive(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && lock()
    // Si la página scrollea (rueda o dedo fuera del mapa), el mapa vuelve a dormirse.
    const y0 = window.scrollY
    const onScroll = () => {
      if (Math.abs(window.scrollY - y0) > 40) lock()
    }
    const io = new IntersectionObserver((es) => es.forEach((e) => !e.isIntersecting && lock()), { threshold: 0.2 })
    if (ref.current) io.observe(ref.current)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      io.disconnect()
    }
  }, [active])

  return (
    <div className="bg-ink pt-10 md:pt-16">
      <div ref={ref} className="relative w-full h-[62svh] sm:h-auto sm:aspect-[16/9] lg:aspect-[21/8] lg:max-h-[520px] bg-paper/5">
        <iframe
          src={LINKS.mapsEmbed}
          title="Mapa satelital de la ubicación de BLACK Paseo de Compras (showroom virtual)"
          className={`absolute inset-0 w-full h-full border-0 ${active ? '' : 'pointer-events-none'}`}
          loading="lazy"
          allow="fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {active ? (
          <button
            type="button"
            onClick={() => setActive(false)}
            className="absolute top-3 right-3 z-10 h-11 px-4 inline-flex items-center gap-2 bg-ink text-paper label hover:bg-paper hover:text-ink transition-colors"
          >
            Cerrar mapa <span aria-hidden className="text-base leading-none">×</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label="Activar el mapa para navegarlo"
            className="absolute inset-0 z-10 flex items-end sm:items-center justify-center p-5 bg-ink/10 cursor-pointer group"
          >
            <span className="inline-flex items-center gap-3 h-12 px-6 bg-paper text-ink label group-hover:bg-ink group-hover:text-paper transition-colors">
              <span className="sm:hidden">Tocá para navegar el mapa</span>
              <span className="hidden sm:inline">Hacé clic para navegar el mapa</span>
              <Arrow />
            </span>
          </button>
        )}
      </div>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-5 md:py-6 flex flex-wrap justify-between gap-x-6 gap-y-3 label text-paper/70">
        <span>Mapa satelital del showroom virtual · Av. de los Lagos, Belén de Escobar</span>
        <TextLink href={LINKS.maps} external className="text-paper">
          Cómo llegar en Google Maps
        </TextLink>
      </div>
    </div>
  )
}
