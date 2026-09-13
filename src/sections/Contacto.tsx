import { useState, type FormEvent } from 'react'
import { FOOTER, FORM, LINKS } from '@/content'
import { Arrow, Button, Section, Title } from '@/components/Brand'
import { buildWhatsAppUrl, submitLead, type Lead } from '@/lib/lead'

const EMPTY: Lead = { nombre: '', whatsapp: '', unidad: '', objetivo: '', capital: '', mensaje: '' }

export function Contacto() {
  const [lead, setLead] = useState<Lead>(EMPTY)
  const [sent, setSent] = useState<string | null>(null)

  const set = (k: keyof Lead) => (e: { target: { value: string } }) => setLead((l) => ({ ...l, [k]: e.target.value }))

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    // Abrir WhatsApp de forma síncrona (dentro del gesto del usuario) para evitar bloqueos de popup.
    const url = buildWhatsAppUrl(lead)
    window.open(url, '_blank', 'noopener')
    void submitLead(lead)
    setSent(url)
  }

  return (
    <Section id="contacto" meta="Contacto">
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label opacity-70 mb-4">{FORM.eyebrow}</p>
          <Title lines={FORM.title} />
          <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-paper/85">{FORM.body}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <dt className="label opacity-60">Comercializa</dt>
              <dd className="mt-2 text-lg font-semibold uppercase tracking-[0.08em]">{FOOTER.comercializa}</dd>
              <dd className="font-light">
                <a href={`tel:+54${FOOTER.telefono.replace(/\D/g, '')}`} className="hover:underline underline-offset-4">
                  {FOOTER.telefono}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label opacity-60">Showroom virtual</dt>
              <dd className="mt-2">
                <a href={LINKS.web3d} target="_blank" rel="noopener" className="text-lg font-light hover:underline underline-offset-4">
                  Recorrer en 3D ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 lg:pt-16 grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="label opacity-60">Nombre</span>
            <input className="field" required value={lead.nombre} onChange={set('nombre')} placeholder="Tu nombre" autoComplete="name" />
          </label>
          <label className="block">
            <span className="label opacity-60">WhatsApp</span>
            <input
              className="field"
              required
              type="tel"
              inputMode="tel"
              value={lead.whatsapp}
              onChange={set('whatsapp')}
              placeholder="+54 9 11 ..."
              autoComplete="tel"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="label opacity-60">¿Qué tipo de unidad te interesa?</span>
            <select className="field" required value={lead.unidad} onChange={set('unidad')}>
              <option value="" disabled>
                Elegí una opción
              </option>
              {FORM.unidad.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="label opacity-60">Objetivo de la inversión</span>
            <select className="field" required value={lead.objetivo} onChange={set('objetivo')}>
              <option value="" disabled>
                Elegí una opción
              </option>
              {FORM.objetivo.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="label opacity-60">Capital disponible</span>
            <select className="field" required value={lead.capital} onChange={set('capital')}>
              <option value="" disabled>
                Elegí una opción
              </option>
              {FORM.capital.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block md:col-span-2">
            <span className="label opacity-60">Comentario (opcional)</span>
            <textarea className="field resize-none" rows={2} value={lead.mensaje} onChange={set('mensaje')} placeholder="Rubro, superficie, plazos..." />
          </label>

          <div className="md:col-span-2 flex flex-wrap items-center gap-5 pt-2">
            <Button type="submit">
              Enviar por WhatsApp <Arrow />
            </Button>
            {sent ? (
              <p className="text-sm font-light text-paper/80">
                ¡Listo! Si WhatsApp no se abrió,{' '}
                <a href={sent} target="_blank" rel="noopener" className="underline underline-offset-4">
                  tocá acá
                </a>
                .
              </p>
            ) : (
              <p className="text-sm font-light text-paper/60 max-w-xs">Se abre WhatsApp con tu consulta prearmada. Sin spam.</p>
            )}
          </div>
        </form>
      </div>
    </Section>
  )
}
