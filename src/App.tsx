import { useState } from 'react'
import { Loader } from './components/Loader'
import { Nav } from './sections/Nav'
import { Hero, Stats } from './sections/Hero'
import { Mix, Proyecto, Sustentable } from './sections/Proyecto'
import { Ubicacion } from './sections/Ubicacion'
import { Contacto } from './sections/Contacto'
import { Footer } from './sections/Footer'

export default function App({ intro = false }: { intro?: boolean }) {
  const [loading, setLoading] = useState(intro)
  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Proyecto />
        <Mix />
        <Ubicacion />
        <Sustentable />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
