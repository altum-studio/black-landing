import { FOOTER, LINKS } from '@/content'
import { GrupoBlack, LogoTiles } from '@/components/Brand'

export function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-paper/15">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 py-16">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5 overflow-hidden">
            <LogoTiles />
            <p className="label mt-6 opacity-60">Escobar · Buenos Aires · Argentina</p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <p className="label opacity-60 mb-3">Desarrolla</p>
              <GrupoBlack />
            </div>
            <div>
              <p className="label opacity-60 mb-3">Comercializa</p>
              <p className="text-lg font-semibold uppercase tracking-[0.08em]">{FOOTER.comercializa}</p>
              <a href={`tel:+54${FOOTER.telefono.replace(/\D/g, '')}`} className="block mt-1 font-light hover:underline underline-offset-4">
                {FOOTER.telefono}
              </a>
            </div>
            <div>
              <p className="label opacity-60 mb-3">Explorar</p>
              <ul className="space-y-2 font-light">
                <li>
                  <a href={LINKS.web3d} target="_blank" rel="noopener" className="hover:underline underline-offset-4">
                    Showroom 3D ↗
                  </a>
                </li>
                {LINKS.instagram && (
                  <li>
                    <a href={LINKS.instagram} target="_blank" rel="noopener" className="hover:underline underline-offset-4">
                      Instagram ↗
                    </a>
                  </li>
                )}
                <li>
                  <a href="#contacto" className="hover:underline underline-offset-4">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-16 text-[11px] leading-relaxed text-paper/50 max-w-5xl">{FOOTER.disclaimer}</p>

        <div className="mt-8 flex flex-wrap justify-between gap-4 label opacity-50">
          <span>© 2026 BLACK Paseo de Compras · Grupo +Black</span>
          <span>Sitio por Altum Studio</span>
        </div>
      </div>
    </footer>
  )
}
