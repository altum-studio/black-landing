/**
 * Todo el copy y los datos de la landing en un solo lugar.
 * Fuentes: Brochure_Black_Corregido.ai (nov 2026, manda sobre lo anterior), Manual de Marca 2026, Press Kit 2026.
 * No inventar cifras: si algo cambia, se cambia acá.
 */

export const LINKS = {
  web3d: 'https://black.virtual2sold.com/',
  // PENDIENTE: confirmar handle de Instagram con el cliente. Vacío = no se muestra.
  instagram: '',
  /** Mapa del showroom virtual (Urbania); permite embeberse (frame-ancestors *). */
  mapsEmbed: 'https://black.virtual2sold.com/location/map?type=satellite',
  /** Ficha de Google Maps del proyecto ("Paseo comercial Black"). */
  maps: 'https://maps.app.goo.gl/eijdmFAH4Dit6ae7A',
}

export const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '5491128237865'

/** Endpoint que recibe el lead (POST JSON). Por defecto la función /api/lead de Vercel, que reenvía a Meta CAPI. */
export const LEAD_ENDPOINT = (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) ?? '/api/lead'

export const HERO = {
  kicker: 'Locales comerciales en pozo · Escobar · Corredor Puertos del Lago',
  title: ['Tu lugar', 'de encuentro'],
  lead:
    'Invertí en el nuevo hito comercial de Escobar: más de 10.000 m² cubiertos, más de 100 locales y 120 cocheras en cinco niveles, concebidos como destino de alta gama, no como un mall. Entrega: 2028.',
  ctaPrimary: 'Quiero invertir',
  ctaSecondary: 'Recorrer en 3D',
}

/** Cinta de cifras en loop (cifra grande + palabra). */
export const STATS = [
  { value: '+10.000', unit: 'm²', label: 'cubiertos' },
  { value: '+100', unit: '', label: 'locales comerciales' },
  { value: '120', unit: '', label: 'cocheras' },
  { value: '5', unit: '', label: 'niveles' },
  { value: '2028', unit: '', label: 'entrega' },
  { value: '50 a 138', unit: 'm²', label: 'por módulo' },
  { value: '60%', unit: '', label: 'construcción en seco' },
  { value: '24 h', unit: '', label: 'seguridad y CCTV' },
]

export const PROYECTO = {
  title: ['Un destino,', 'no un mall.'],
  body: [
    'Arquitectura industrial contemporánea: chapa trapezoidal negra, hormigón y vegetación en canteros que integran el edificio al verde de la zona.',
    'Naves independientes unidas por una plataforma común que genera espacios sociales, semicubiertos y pergolados. Cinco niveles: market y gastronomía en planta baja, locales comerciales, salud y cowork, gimnasio con salón de eventos y rooftop, y storage con pileta climatizada en el subsuelo.',
  ],
}

/** Programa por nivel, según el brochure corregido (nov 2026). */
export const MIX = [
  {
    title: 'Market y gastronomía',
    tag: 'Planta baja',
    body: 'Market, farmacia, gastronomía y locales comerciales en el nivel de acceso.',
    img: '/img/locales_2026.webp',
    alt: 'Circulación de planta baja con locales comerciales a ambos lados',
  },
  {
    title: 'Locales comerciales',
    tag: 'Primer nivel',
    body: '40 módulos de 50 a 138 m², modulables según la superficie que necesite cada marca.',
    img: '/img/escaleras_2026.webp',
    alt: 'Primer nivel con escaleras mecánicas y vista al exterior',
  },
  {
    title: 'Salud y cowork',
    tag: 'Segundo nivel',
    body: 'Centro de salud, espacios de trabajo colaborativo y gastronomía.',
    img: '/img/cowork_2026.webp',
    alt: 'Cowork con mesas de trabajo, barra y ventanales',
  },
  {
    title: 'Gimnasio y rooftop',
    tag: 'Tercer nivel',
    body: 'Gimnasio, salón de eventos y rooftop.',
    img: '/img/gym_2026.webp',
    alt: 'Gimnasio en doble altura con equipamiento y luminarias circulares',
  },
  {
    title: 'Storage y pileta',
    tag: 'Subsuelo',
    body: 'Unidades de storage, cajas de seguridad, pileta climatizada y estacionamiento cubierto.',
    img: '/img/pileta_2026.webp',
    alt: 'Pileta climatizada cubierta con reposeras y revestimiento de mármol',
  },
]

export const UBICACION = {
  title: ['Llenamos', 'un vacío premium.'],
  body:
    'Sobre calle Santa Teresa, en el acceso a San Matías y a 50 m del Camino de los Lagos. Una zona que creció en densidad pero no en oferta comercial.',
  accesos: 'Ingreso y egreso por Ruta San Matías · Ingreso peatonal por calle Santa Teresa · Esquina Av. de los Lagos',
  distancias: [
    { lugar: 'Fincas de Lago', km: '1 km' },
    { lugar: 'El Cantón', km: '2 km' },
    { lugar: 'San Matías', km: '2 km' },
    { lugar: 'Farmingdale College', km: '2,5 km' },
    { lugar: 'Puertos del Lago', km: '3 km' },
    { lugar: 'Colegio Del Faro', km: '3 km' },
    { lugar: 'Golf Maschwitz Club', km: '4 km' },
    { lugar: 'Northfield', km: '4 km' },
    { lugar: 'Dover High School', km: '4 km' },
    { lugar: 'Aranjuez', km: '6 km' },
    { lugar: 'Septiembre', km: '6 km' },
    { lugar: 'El Cazador', km: '7 km' },
  ],
}

export const SUSTENTABLE = {
  title: ['Pensado', 'para durar.'],
  items: [
    { title: 'Seguridad y CCTV 24 h', body: 'Monitoreo permanente en todo el paseo.' },
    { title: 'Grupo electrógeno', body: 'Respaldo de energía para operar sin cortes.' },
    { title: 'Energía renovable', body: 'Iluminación fotovoltaica y dársenas de carga para vehículos eléctricos.' },
    { title: 'Gestión de residuos', body: 'Protocolo de tratamiento y separación en origen.' },
    { title: 'Pet friendly', body: 'Un paseo abierto a las mascotas.' },
    { title: '60% construcción en seco', body: 'Menor huella de carbono y plazos de obra más cortos.' },
  ],
}

export const FORM = {
  title: ['Hablemos', 'de tu inversión.'],
  body: 'Dejanos tus datos y un asesor comercial te contacta por WhatsApp con la lista de precios, planos y disponibilidad.',
  unidad: [
    { value: 'local', label: 'Local comercial (50 a 138 m²)' },
    { value: 'storage', label: 'Storage / depósito privado' },
    { value: 'asesoramiento', label: 'Quiero asesoramiento, no lo tengo definido' },
  ],
  objetivo: [
    { value: 'renta', label: 'Renta (alquilar la unidad)' },
    { value: 'uso_propio', label: 'Uso propio (instalar mi negocio)' },
    { value: 'reventa', label: 'Reventa / revalorización a futuro' },
    { value: 'diversificar', label: 'Diversificar mi capital' },
  ],
  capital: [
    { value: 'hasta_30', label: 'Hasta USD 30.000' },
    { value: '30_80', label: 'USD 30.000 a 80.000' },
    { value: '80_150', label: 'USD 80.000 a 150.000' },
    { value: 'mas_150', label: 'Más de USD 150.000' },
  ],
}


export const FOOTER = {
  desarrolla: 'Grupo +Black',
  comercializa: 'Coldwell Banker',
  /** Teléfono público (mismo número que recibe los leads por WhatsApp). */
  telefono: '11 2823-7865',
  disclaimer:
    'Las imágenes y renders son representaciones artísticas de carácter ilustrativo; acabados, equipamiento y vegetación no forman parte del precio ni constituyen obligación contractual salvo que se especifiquen en el boleto o contrato. Superficies aproximadas. Precios en USD sujetos a modificación sin previo aviso hasta la firma del instrumento contractual. Cocheras se comercializan por separado. La fecha de entrega estimada y la disponibilidad pueden variar por causas ajenas al desarrollador.',
}
