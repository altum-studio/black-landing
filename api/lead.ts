/**
 * Recibe el lead del formulario y lo reenvía a Meta Conversions API (CAPI), en paralelo
 * al evento Lead del Pixel del navegador. Ambos comparten `event_id`, así Meta los
 * deduplica. El teléfono viaja hasheado (SHA-256); nunca se envía en claro.
 *
 * Variables de entorno en Vercel (Settings → Environment Variables):
 *   META_PIXEL_ID   id del Pixel (el mismo que VITE_META_PIXEL_ID)
 *   META_CAPI_TOKEN token de acceso de Conversions API (Events Manager → Configuración)
 * Sin esas variables la función responde 204 y no hace nada.
 */
export const config = { runtime: 'edge' }

async function sha256(value: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Normaliza un celular argentino a E.164 sin "+" (549 + área + número), quitando 0 y 15. */
function normalizePhone(raw: string) {
  let d = String(raw || '').replace(/\D/g, '')
  if (!d) return ''
  if (d.startsWith('0054')) d = d.slice(4)
  if (d.startsWith('54')) d = d.slice(2)
  if (d.startsWith('9')) d = d.slice(1)
  if (d.startsWith('0')) d = d.slice(1)
  // "15" intercalado después del código de área (2 a 4 dígitos): 11 15 xxxx-xxxx → 11 xxxx-xxxx
  if (d.length === 12) {
    for (const pos of [2, 3, 4]) {
      if (d.slice(pos, pos + 2) === '15') {
        d = d.slice(0, pos) + d.slice(pos + 2)
        break
      }
    }
  }
  if (d.length < 8) return ''
  return '549' + d
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') return new Response(null, { status: 405 })
  const body = (await req.json().catch(() => null)) as Record<string, string> | null
  if (!body) return new Response(null, { status: 400 })

  const PIXEL = process.env.META_PIXEL_ID
  const TOKEN = process.env.META_CAPI_TOKEN
  if (PIXEL && TOKEN) {
    const phone = normalizePhone(body.whatsapp)
    const userData: Record<string, unknown> = {
      client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined,
      client_user_agent: req.headers.get('user-agent') || body.user_agent || undefined,
      fbp: body.fbp || undefined,
      fbc: body.fbc || undefined,
    }
    if (phone) userData.ph = [await sha256(phone)]
    if (body.nombre) userData.fn = [await sha256(body.nombre.trim().toLowerCase().split(/\s+/)[0])]
    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.event_id || undefined,
          event_source_url: body.url || undefined,
          action_source: 'website',
          user_data: userData,
          custom_data: {
            content_name: 'BLACK Paseo de Compras',
            content_category: body.unidad,
            objetivo: body.objetivo,
            capital: body.capital,
          },
        },
      ],
    }
    await fetch(`https://graph.facebook.com/v21.0/${PIXEL}/events?access_token=${TOKEN}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => undefined)
  }
  return new Response(null, { status: 204 })
}
