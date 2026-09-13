import { useEffect, useState } from 'react'
import { LINKS } from '@/content'
import { Arrow, Button, Logo } from '@/components/Brand'
import { trackCta } from '@/lib/tracking'

const ITEMS = [
  { id: 'proyecto', label: 'Proyecto' },
  { id: 'ubicacion', label: 'Ubicación' },
  { id: 'inversion', label: 'Inversión' },
]

/* Qué ítem de la nav representa a cada sección de la página ("estás acá"). */
const SECTION_TO_ITEM: Record<string, string> = {
  proyecto: 'proyecto',
  mix: 'proyecto',
  ubicacion: 'ubicacion',
  grupo: '',
  sustentable: '',
  inversion: 'inversion',
  contacto: '',
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = Object.keys(SECTION_TO_ITEM)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(SECTION_TO_ITEM[e.target.id] ?? '')
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 text-paper transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-paper/10' : 'bg-gradient-to-b from-ink/60 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14 h-20 flex items-center justify-between gap-6">
        <a href="#top" aria-label="BLACK Paseo de Compras · inicio" className="shrink-0">
          <Logo size="sm" />
        </a>
        <div className="flex items-center gap-6 md:gap-8 label whitespace-nowrap">
          {ITEMS.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              aria-current={active === it.id ? 'location' : undefined}
              className={`hidden md:inline-block transition-opacity underline-offset-8 decoration-1 ${
                active === it.id ? 'opacity-100 underline' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {it.label}
            </a>
          ))}
          <a
            href={LINKS.web3d}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            Web 3D <Arrow />
          </a>
          <Button href="#contacto" className="h-10 px-4" onClick={() => trackCta('nav_invertir')}>
            Quiero invertir
          </Button>
        </div>
      </div>
    </nav>
  )
}
