/**
 * GA4 + Meta Pixel. Sólo se inyectan si las variables de entorno están definidas
 * (ver .env.example). Los eventos de lead se disparan desde el formulario y, en
 * paralelo, el servidor los reenvía a Meta por Conversions API (api/lead.ts) con el
 * mismo event_id para que Meta los deduplique.
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
const FBC_KEY = 'black_fbc'

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

/**
 * Guarda el fbclid de la URL (llega desde un anuncio de Meta) como fbc, para que el
 * lead que se envía después por CAPI quede atribuido al clic aunque el Pixel esté bloqueado.
 */
export function captureClickIds() {
  try {
    const fbclid = new URLSearchParams(location.search).get('fbclid')
    if (fbclid) localStorage.setItem(FBC_KEY, `fb.1.${Date.now()}.${fbclid}`)
  } catch {
    /* almacenamiento no disponible */
  }
}

function cookie(name: string) {
  return document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1]
}

/** Identificadores de Meta disponibles en el navegador (para deduplicar y atribuir en CAPI). */
export function getMetaIds() {
  let stored: string | null = null
  try {
    stored = localStorage.getItem(FBC_KEY)
  } catch {
    /* sin storage */
  }
  return { fbp: cookie('_fbp'), fbc: cookie('_fbc') || stored || undefined }
}

export function newEventId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `lead_${Date.now()}_${Math.random().toString(36).slice(2)}`
}

export function trackLead(params: Record<string, string>, eventId: string) {
  window.gtag?.('event', 'generate_lead', { ...params, transaction_id: eventId })
  window.fbq?.('track', 'Lead', { content_name: 'BLACK Paseo de Compras', ...params }, { eventID: eventId })
}

export function trackCta(name: string) {
  window.gtag?.('event', 'cta_click', { cta: name })
}
