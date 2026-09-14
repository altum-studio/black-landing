import { FORM, LEAD_ENDPOINT, WHATSAPP_NUMBER } from '@/content'
import { getMetaIds, newEventId, trackLead } from './tracking'

export type Lead = {
  nombre: string
  whatsapp: string
  unidad: string
  objetivo: string
  capital: string
  mensaje?: string
}

const label = (list: { value: string; label: string }[], v: string) => list.find((o) => o.value === v)?.label ?? v

export function buildWhatsAppUrl(lead: Lead) {
  const lines = [
    `Hola, soy ${lead.nombre}. Me interesa BLACK Paseo de Compras.`,
    `Unidad: ${label(FORM.unidad, lead.unidad)}`,
    `Objetivo: ${label(FORM.objetivo, lead.objetivo)}`,
    `Capital disponible: ${label(FORM.capital, lead.capital)}`,
  ]
  if (lead.mensaje?.trim()) lines.push(`Comentario: ${lead.mensaje.trim()}`)
  lines.push('Vengo desde la landing.')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

/**
 * Registra el lead: evento Lead en Pixel/GA4 con un event_id, y POST al endpoint
 * (por defecto /api/lead, que lo reenvía a Meta CAPI con el mismo event_id). Pase lo
 * que pase, el formulario abre WhatsApp para no perder el contacto.
 * TODO CRM: el mismo POST puede alimentar Supabase o el CRM cuando esté definido.
 */
export async function submitLead(lead: Lead) {
  const eventId = newEventId()
  trackLead({ unidad: lead.unidad, objetivo: lead.objetivo, capital: lead.capital }, eventId)
  if (LEAD_ENDPOINT) {
    const { fbp, fbc } = getMetaIds()
    try {
      await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...lead,
          event_id: eventId,
          fbp,
          fbc,
          source: 'landing',
          ts: new Date().toISOString(),
          url: location.href,
          referrer: document.referrer || undefined,
          user_agent: navigator.userAgent,
        }),
        keepalive: true,
      })
    } catch {
      /* no bloquea el flujo hacia WhatsApp */
    }
  }
  return buildWhatsAppUrl(lead)
}
