import { FOOTER, LINKS } from '@/content'
import { GrupoBlack, LogoTiles, TextLink } from '@/components/Brand'
import { LineClaim } from '@/components/Patterns'
import { LogoAltum } from '@/components/logos/LogoAltum'

/** Logo apilado de Coldwell Banker (public/img/coldwell-banker.png), blanco sobre el footer negro. */
const COLDWELL_W = 313
const COLDWELL_H = 320

export function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-paper/15">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-10 md:py-16">
        <LineClaim className="text-paper/80" />

        <div className="mt-8 md:mt-14 grid gap-8 md:gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <LogoTiles className="h-11 md:h-[72px]" />
            <p className="label mt-4 md:mt-6 text-paper/60">Escobar · Buenos Aires · Argentina</p>
          </div>

          {/* En mobile: Desarrolla y Comercializa lado a lado, Explorar en una línea. */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 md:gap-8">
            <div>
              <p className="label text-paper/60 mb-2 md:mb-3">Desarrolla</p>
              <GrupoBlack className="h-14 md:h-20" />
            </div>
            <div>
              <p className="label text-paper/60 mb-2 md:mb-3">Comercializa</p>
              <img
                src="/img/coldwell-banker.png"
                alt={FOOTER.comercializa}
                width={COLDWELL_W}
                height={COLDWELL_H}
                loading="lazy"
                decoding="async"
                className="h-14 md:h-20 w-auto"
              />
              <a href={`tel:+54${FOOTER.telefono.replace(/\D/g, '')}`} className="inline-block mt-3 md:mt-4 py-3 -my-3 underline-offset-[6px] hover:underline">
                {FOOTER.telefono}
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="label text-paper/60 mb-2 md:mb-3">Explorar</p>
              <ul className="flex sm:flex-col gap-x-6 gap-y-2">
                <li>
                  <TextLink href={LINKS.web3d} external>
                    Showroom 3D
                  </TextLink>
                </li>
                {LINKS.instagram && (
                  <li>
                    <TextLink href={LINKS.instagram} external>
                      Instagram
                    </TextLink>
                  </li>
                )}
                <li>
                  <TextLink href="#contacto">Contacto</TextLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 md:mt-16 text-xs leading-relaxed text-paper/60 max-w-4xl">{FOOTER.disclaimer}</p>

        <div className="mt-6 md:mt-8 flex flex-wrap justify-between gap-x-6 gap-y-2 label text-paper/55">
          <span>© 2026 BLACK Paseo de Compras · Grupo +Black</span>
          <a
            href="https://altum.studio"
            target="_blank"
            rel="noopener"
            aria-label="Sitio por Altum Studio"
            className="inline-flex items-center py-3 -my-3 text-paper/55 hover:text-paper transition-colors"
          >
            <LogoAltum className="h-3 md:h-[14px] w-auto" />
          </a>
        </div>
      </div>
    </footer>
  )
}
