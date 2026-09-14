import { Nav } from './sections/Nav'
import { Hero, Stats } from './sections/Hero'
import { Mix, Proyecto, Sustentable } from './sections/Proyecto'
import { Ubicacion } from './sections/Ubicacion'
import { Contacto } from './sections/Contacto'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Proyecto />
        <Mix />
        <Ubicacion />
        <Sustentable />
        <Contacto />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
