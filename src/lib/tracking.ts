/**
 * GA4 + Meta Pixel. Sólo se inyectan si las variables de entorno están definidas
 * (ver .env.example). Los eventos de lead se disparan desde el formulario.
 */
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const GA4 = import.meta.env.VITE_GA4_ID as string | undefined
const PIXEL = import.meta.env.VITE_META_PIXEL_ID as string | undefined

export function installTracking() {
  if (GA4) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA4)
  }

  if (PIXEL) {
    const s = document.createElement('script')
    s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`
    document.head.appendChild(s)
  }
}

export function trackLead(params: Record<string, string>) {
  window.gtag?.('event', 'generate_lead', params)
  window.fbq?.('track', 'Lead', params)
}

export function trackCta(name: string) {
  window.gtag?.('event', 'cta_click', { cta: name })
}
