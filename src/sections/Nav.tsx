import { LINKS } from '@/content'
import { Button, Logo } from '@/components/Brand'
import { trackCta } from '@/lib/tracking'

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-paper">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 h-20 flex items-center justify-between gap-6">
        <a href="#top" aria-label="BLACK Paseo de Compras · inicio">
          <Logo size="sm" />
        </a>
        <div className="hidden md:flex items-center gap-8 label">
          <a href="#proyecto" className="hover:opacity-60 transition-opacity">Proyecto</a>
          <a href="#ubicacion" className="hover:opacity-60 transition-opacity">Ubicación</a>
          <a href="#inversion" className="hover:opacity-60 transition-opacity">Inversión</a>
          <a href={LINKS.web3d} target="_blank" rel="noopener" className="hover:opacity-60 transition-opacity">
            Web 3D ↗
          </a>
        </div>
        <Button href="#contacto" className="h-10 px-4" onClick={() => trackCta('nav_invertir')}>
          Quiero invertir
        </Button>
      </div>
    </nav>
  )
}
