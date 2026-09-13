import { Nav } from './sections/Nav'
import { Hero, Stats } from './sections/Hero'
import { Mix, Proyecto, Sustentable } from './sections/Proyecto'
import { Ubicacion } from './sections/Ubicacion'
import { Grupo } from './sections/Grupo'
import { Inversion } from './sections/Inversion'
import { Contacto } from './sections/Contacto'
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
        <Grupo />
        <Sustentable />
        <Inversion />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
