/**
 * Todo el copy y los datos de la landing en un solo lugar.
 * Fuentes: NUEVA MEMORIA DESCRIPTIVA.docx (23/11/2026, manda sobre lo anterior), Brochure_Black_Corregido.ai (nov 2026),
 * Manual de Marca 2026, Press Kit 2026.
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
    'Invertí en el nuevo hito comercial de Escobar: más de 12.000 m², más de 160 locales combinables y más de 400 cocheras en cinco niveles, concebidos como destino de alta gama, no como un mall. Entrega: 2028.',
  ctaPrimary: 'Quiero invertir',
  ctaSecondary: 'Recorrer en 3D',
}

/** Cinta de cifras en loop (cifra grande + palabra). */
export const STATS = [
  { value: '+12.000', unit: 'm²', label: 'de superficie' },
  { value: '+160', unit: '', label: 'locales combinables' },
  { value: 'Desde 25', unit: 'm²', label: 'por local' },
  { value: '+400', unit: '', label: 'cocheras' },
  { value: '+280', unit: 'm', label: 'de frente' },
  { value: '4', unit: '', label: 'salas de cine' },
  { value: '+1.500', unit: 'm²', label: 'de gimnasio' },
  { value: '+100', unit: '', label: 'unidades de storage' },
  { value: '5', unit: '', label: 'niveles' },
  { value: '2028', unit: '', label: 'entrega' },
]

export const PROYECTO = {
  title: ['Un destino,', 'no un mall.'],
  body: [
    'Mucho más que un paseo de compras: un desarrollo de usos múltiples, con identidad propia, pensado para convertirse en un nuevo punto de referencia urbano, comercial y social de la zona.',
    'Arquitectura industrial contemporánea: naves independientes de chapa trapezoidal negra, hormigón y vegetación, unidas por una plataforma común que se recorre de manera fluida y genera espacios sociales, semicubiertos y pergolados.',
    'Todas las actividades en un solo lugar: comercios, gastronomía, entretenimiento, deporte, salud y bienestar, servicios y hogar.',
  ],
}

/** Programa por nivel, según la nueva memoria descriptiva (23/11/2026). */
export const MIX = [
  {
    title: 'Fresh Market y gastronomía',
    tag: 'Planta baja',
    body: 'Fresh Market con isla gourmet, para degustar productos y vivir experiencias gastronómicas mientras hacés las compras. Hogar y deco, farmacia, restaurant y café, con estacionamiento libre.',
    img: '/img/locales_2026.webp',
    alt: 'Circulación de planta baja con locales comerciales a ambos lados',
  },
  {
    title: 'Tiendas y cines',
    tag: 'Primer nivel',
    body: 'Tiendas deportivas, tiendas de ropa y servicios, junto a cuatro salas de cine y entretenimiento.',
    img: '/img/escaleras_2026.webp',
    alt: 'Primer nivel con escaleras mecánicas y vista al exterior',
  },
  {
    title: 'Salud, cowork y oficinas',
    tag: 'Segundo nivel',
    body: 'Centro de salud, cowork y oficinas AAA, con restaurant y bar panorámicos.',
    img: '/img/cowork_2026.webp',
    alt: 'Cowork con mesas de trabajo, barra y ventanales',
  },
  {
    title: 'Gimnasio y rooftop',
    tag: 'Tercer nivel',
    body: 'Gimnasio de más de 1.500 m², salón para eventos corporativos y privados y guardería. El rooftop suma vistas panorámicas al entorno natural, vegetación y áreas de permanencia, con acceso directo desde el estacionamiento.',
    img: '/img/gym_2026.webp',
    alt: 'Gimnasio en doble altura con equipamiento y luminarias circulares',
  },
  {
    title: 'Storage y pileta',
    tag: 'Subsuelo',
    body: 'Más de 100 unidades de storage desde 8,50 m², con temperatura estable, cortinas de cierre individuales y acceso desde el estacionamiento cubierto. Depósitos, cajas de seguridad, montacargas a todos los niveles, anexo del gimnasio con pileta y vestuarios, y el salón de eventos BLACK.',
    img: '/img/pileta_2026.webp',
    alt: 'Pileta cubierta del anexo del gimnasio, con reposeras y revestimiento de mármol',
  },
]

export const UBICACION = {
  title: ['Llenamos', 'un vacío premium.'],
  body:
    'La esquina icónica de la rotonda más importante de la Av. de los Lagos, con más de 280 metros lineales de frente e ingreso por el Acceso San Matías. Una zona que creció en densidad pero no en oferta comercial.',
  /** Siempre hablar del Acceso San Matías (pedido del cliente): la otra calle del predio no se destaca. */
  accesos: 'Ingreso y egreso por Acceso San Matías · Esquina Av. de los Lagos · Belén de Escobar, Partido de Escobar',
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
    { value: 'local', label: 'Local comercial (desde 25 m²)' },
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
