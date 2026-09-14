import { useEffect, useRef, useState } from 'react'

/**
 * true una sola vez, cuando el elemento entra en el viewport. Sin IntersectionObserver
 * (navegadores viejos) devuelve true de entrada para no dejar nada oculto.
 */
export function useInView<T extends Element>(rootMargin = '0px 0px -12% 0px', threshold = 0.05) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, threshold])
  return [ref, inView] as const
}
