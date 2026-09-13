import { FORM, LEAD_ENDPOINT, WHATSAPP_NUMBER } from '@/content'
import { trackLead } from './tracking'

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
 * Envía el lead. Si hay endpoint configurado se hace POST (JSON) y, pase lo que pase,
 * se abre WhatsApp para no perder el contacto.
 * TODO BACKEND: reemplazar el endpoint por Supabase/CRM cuando esté definido.
 */
export async function submitLead(lead: Lead) {
  trackLead({ unidad: lead.unidad, objetivo: lead.objetivo, capital: lead.capital })
  if (LEAD_ENDPOINT) {
    try {
      await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, source: 'landing', ts: new Date().toISOString(), url: location.href }),
        keepalive: true,
      })
    } catch {
      /* no bloquea el flujo hacia WhatsApp */
    }
  }
  return buildWhatsAppUrl(lead)
}
