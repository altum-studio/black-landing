import { FOOTER, LINKS } from '@/content'
import { GrupoBlack, LogoTiles, TextLink } from '@/components/Brand'
import { LineClaim, RadialPattern } from '@/components/Patterns'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-16">
        <LineClaim className="text-paper/80" />

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:items-start">
          {/* Patrón radial del manual (blanco sobre negro), como en la pág. Patrones. */}
          <div className="md:col-span-5">
            <RadialPattern fill="#fff" className="w-full aspect-square max-w-[520px]" />
            <LogoTiles className="mt-10" />
            <p className="label mt-6 text-paper/60">Escobar · Buenos Aires · Argentina</p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-3 gap-8 md:pt-2">
            <div>
              <p className="label text-paper/60 mb-3">Desarrolla</p>
              <GrupoBlack />
            </div>
            <div>
              <p className="label text-paper/60 mb-3">Comercializa</p>
              <p className="text-lg font-semibold uppercase tracking-[0.08em]">{FOOTER.comercializa}</p>
              <a href={`tel:+54${FOOTER.telefono.replace(/\D/g, '')}`} className="block mt-1 underline-offset-[6px] hover:underline">
                {FOOTER.telefono}
              </a>
            </div>
            <div>
              <p className="label text-paper/60 mb-3">Explorar</p>
              <ul className="space-y-2">
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

        <p className="mt-16 text-xs leading-relaxed text-paper/55 max-w-5xl">{FOOTER.disclaimer}</p>

        <div className="mt-8 flex flex-wrap justify-between gap-4 label text-paper/50">
          <span>© 2026 BLACK Paseo de Compras · Grupo +Black</span>
          <span>Sitio por Altum Studio</span>
        </div>
      </div>
    </footer>
  )
}
