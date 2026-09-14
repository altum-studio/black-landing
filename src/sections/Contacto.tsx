import { useState, type FormEvent } from 'react'
import { FOOTER, FORM, LINKS } from '@/content'
import { Arrow, Button, Section, TextLink, Title } from '@/components/Brand'
import { buildWhatsAppUrl, submitLead, type Lead } from '@/lib/lead'

const EMPTY: Lead = { nombre: '', whatsapp: '', unidad: '', objetivo: '', capital: '', mensaje: '' }

export function Contacto() {
  const [lead, setLead] = useState<Lead>(EMPTY)
  const [sent, setSent] = useState<string | null>(null)

  const set = (k: keyof Lead) => (e: { target: { value: string } }) => setLead((l) => ({ ...l, [k]: e.target.value }))

  // Mensajes de validación nativos, en castellano y con la corrección concreta.
  const validity = (msg: string) => ({
    onInvalid: (e: FormEvent) => (e.target as HTMLInputElement).setCustomValidity(msg),
    onInput: (e: FormEvent) => (e.target as HTMLInputElement).setCustomValidity(''),
  })

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    // Abrir WhatsApp de forma síncrona (dentro del gesto del usuario) para evitar bloqueos de popup.
    const url = buildWhatsAppUrl(lead)
    window.open(url, '_blank', 'noopener')
    void submitLead(lead)
    setSent(url)
  }

  const Select = ({ k, options, label }: { k: keyof Lead; options: { value: string; label: string }[]; label: string }) => (
    <label className="block">
      <span className="label text-paper/60">{label}</span>
      <select className="field" required value={lead[k]} onChange={set(k)} {...validity('Elegí una opción para seguir.')}>
        <option value="" disabled>
          Elegí una opción
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )

  return (
    <Section id="contacto" meta="Contacto">
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Title lines={FORM.title} />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/85">{FORM.body}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 max-w-md">
            <div>
              <dt className="label text-paper/60">Comercializa</dt>
              <dd className="mt-2 text-lg font-semibold uppercase tracking-[0.08em]">{FOOTER.comercializa}</dd>
              <dd>
                <a href={`tel:+54${FOOTER.telefono.replace(/\D/g, '')}`} className="inline-block py-3 -my-3 underline-offset-[6px] hover:underline">
                  {FOOTER.telefono}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-paper/60">Showroom virtual</dt>
              <dd className="mt-2 text-lg">
                <TextLink href={LINKS.web3d} external>
                  Recorrer en 3D
                </TextLink>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 lg:pt-6 grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="label text-paper/60">Nombre</span>
            <input
              className="field"
              required
              value={lead.nombre}
              onChange={set('nombre')}
              placeholder="Tu nombre"
              autoComplete="name"
              {...validity('Escribí tu nombre para que sepamos a quién contactar.')}
            />
          </label>
          <label className="block">
            <span className="label text-paper/60">WhatsApp</span>
            <input
              className="field"
              required
              type="tel"
              inputMode="tel"
              value={lead.whatsapp}
              onChange={set('whatsapp')}
              placeholder="+54 9 11 ..."
              autoComplete="tel"
              pattern="[+0-9][0-9\s().-]{7,}"
              {...validity('Ingresá un WhatsApp válido con código de área, por ejemplo +54 9 11 1234 5678.')}
            />
          </label>
          <div className="md:col-span-2">
            <Select k="unidad" options={FORM.unidad} label="¿Qué tipo de unidad te interesa?" />
          </div>
          <Select k="objetivo" options={FORM.objetivo} label="Objetivo de la inversión" />
          <Select k="capital" options={FORM.capital} label="Capital disponible" />
          <label className="block md:col-span-2">
            <span className="label text-paper/60">Comentario (opcional)</span>
            <textarea className="field resize-none" rows={2} value={lead.mensaje} onChange={set('mensaje')} placeholder="Rubro, superficie, plazos..." />
          </label>

          <div className="md:col-span-2 flex flex-wrap items-center gap-5 pt-2">
            <Button type="submit">
              Enviar por WhatsApp <Arrow />
            </Button>
            <p className="text-sm text-paper/70 max-w-xs" aria-live="polite">
              {sent ? (
                <>
                  Listo. Si WhatsApp no se abrió,{' '}
                  <a href={sent} target="_blank" rel="noopener" className="underline underline-offset-4">
                    tocá acá
                  </a>
                  .
                </>
              ) : (
                'Se abre WhatsApp con tu consulta prearmada. Sin spam.'
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}
