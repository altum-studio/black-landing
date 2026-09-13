/**
 * Todo el copy y los datos de la landing en un solo lugar.
 * Fuentes: Press Kit 2026, Manual de Marca 2026, Brochure, BLACK_Listado_Unidades.xlsx.
 * No inventar cifras: si algo cambia, se cambia acá.
 */

export const LINKS = {
  web3d: 'https://black.virtual2sold.com/',
  // PENDIENTE: confirmar handle de Instagram con el cliente. Vacío = no se muestra.
  instagram: '',
  mapsEmbed:
    'https://www.google.com/maps?q=Santa+Teresa+y+acceso+Barrio+San+Mat%C3%ADas,+Escobar,+Buenos+Aires&z=14&output=embed',
  maps: 'https://www.google.com/maps/search/?api=1&query=Santa+Teresa+Barrio+San+Mat%C3%ADas+Escobar',
}

export const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '5491130027781'

export const LEAD_ENDPOINT = (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) || ''

export const HERO = {
  kicker: 'Locales comerciales en pozo · Escobar · Corredor Puertos del Lago',
  title: ['Tu lugar', 'de encuentro'],
  lead:
    'Invertí en el nuevo hito comercial de Escobar: 17.000 m², 125 locales y 450 cocheras concebidos como destino de alta gama, no como un mall. Entrega estimada: mayo 2028.',
  ctaPrimary: 'Quiero invertir',
  ctaSecondary: 'Recorrer en 3D',
}

export const STATS = [
  { value: '17.000', unit: 'm²', label: 'cubiertos' },
  { value: '125', unit: '', label: 'locales' },
  { value: '450', unit: '', label: 'cocheras' },
  { value: '05·2028', unit: '', label: 'entrega' },
]

export const PROYECTO = {
  title: ['Destino,', 'no un mall.'],
  body: [
    'Arquitectura industrial contemporánea: chapa trapezoidal negra, hormigón y vegetación en canteros que integran el edificio al verde de la zona.',
    'Naves independientes unidas por una plataforma común que genera espacios sociales, semicubiertos y pergolados. Foyer de doble altura, mix retail premium, gastronomía, cowork y rooftop.',
  ],
}

export const MIX = [
  {
    title: 'Retail premium',
    tag: '125 locales · 50 a 138 m²',
    body: 'Locales modulables entre 50 m² y 138 m², distribuidos en módulos de 8 por nave.',
    img: '/img/int_4.webp',
    alt: 'Circulación interior con locales comerciales',
  },
  {
    title: 'Cines',
    tag: '4 salas',
    body: 'Cuatro salas con foyer en doble altura conectado al patio de comidas del nivel 3.',
    img: '/img/int_1.webp',
    alt: 'Foyer en doble altura con escalera y gastronomía',
  },
  {
    title: 'Gym y market',
    tag: '+1.000 m²',
    body: 'Gimnasio de última generación de más de 1.000 m² y market en planta baja.',
    img: '/img/patio_comidas.webp',
    alt: 'Patio de comidas con locales gastronómicos',
  },
  {
    title: 'Cowork y rooftop',
    tag: 'Dos niveles',
    body: 'Espacios de trabajo colaborativo en dos niveles, patio gastronómico y rooftop con acceso directo desde el estacionamiento.',
    img: '/img/cowork.webp',
    alt: 'Cowork con mesas de trabajo y vegetación',
  },
  {
    title: 'Storage',
    tag: '+200 unidades',
    body: 'Más de 200 unidades de guardado en el segundo subsuelo, con distintas medidas y volúmenes.',
    img: '/img/storage_ph.webp',
    alt: 'Pasillo de storage en subsuelo',
  },
]

export const UBICACION = {
  title: ['Llenamos', 'un vacío premium.'],
  body:
    'Sobre calle Santa Teresa, en el acceso al Barrio San Matías, a 50 m del Camino de los Lagos. Una zona que creció en densidad pero no en oferta comercial.',
  distancias: [
    { lugar: 'Fincas de Lago', km: '1 km' },
    { lugar: 'San Matías', km: '2 km' },
    { lugar: 'El Cantón', km: '2 km' },
    { lugar: 'Puertos del Lago', km: '3 km' },
    { lugar: 'Golf Maschwitz Club', km: '4 km' },
  ],
}

export const GRUPO = {
  title: ['No somos una', 'desarrolladora más.'],
  body:
    'Somos un ecosistema de cinco socios estratégicos que cubren todo el ciclo de vida de un proyecto inmobiliario. Al integrar verticalmente cada eslabón, eliminamos sobrecostos de intermediarios y mitigamos los riesgos que frenan otras obras.',
  claim: 'El inversor no compra metros cuadrados: se asocia a un sistema probado de eficiencia y respaldo profesional.',
  socios: [
    { n: '01', title: 'Arquitectura', body: 'Diseño vanguardista y optimización de espacios comerciales.' },
    { n: '02', title: 'Construcción', body: 'Ejecución directa de obra. Plazos y calidad garantizados.' },
    { n: '03', title: 'Insumos', body: 'Provisión propia de aberturas y materiales críticos.' },
    { n: '04', title: 'Finanzas', body: 'Estructuración fiscal eficiente y transparencia en el manejo de fondos.' },
    { n: '05', title: 'Seguros', body: 'Cobertura integral de riesgos y seguridad jurídica al inversor.' },
  ],
  kpis: [
    { value: '0', label: 'intermediarios en la cadena' },
    { value: '05', label: 'socios estratégicos integrados' },
    { value: '100%', label: 'control sobre obra y plazos' },
  ],
  diferencialTitle: 'Somos constructores, no sólo desarrolladores.',
  diferencial:
    'A diferencia de otras desarrolladoras, Grupo +Black opera bajo un modelo de integración vertical total. Al ser nosotros mismos los proveedores, constructores y gestores del proyecto, eliminamos intermediarios y optimizamos cada peso invertido.',
}

export const SUSTENTABLE = {
  title: ['Un paseo', 'inteligente.'],
  items: [
    { title: '+60% construcción en seco', body: 'Menor huella de carbono y plazos de obra más cortos.' },
    { title: 'Energía renovable', body: 'Iluminación fotovoltaica y dársenas de carga para vehículos eléctricos.' },
    { title: 'Gestión de residuos', body: 'Protocolo de tratamiento y separación en origen.' },
    { title: 'Seguridad 24 h', body: 'Sistema CCTV y grupo electrógeno propio.' },
  ],
}

export const INVERSION = {
  title: ['Locales de 50 a 138 m².', 'Venta en pozo.'],
  body:
    'Unidades combinables en naves independientes, con posiciones de borde y medio en cada nivel. Consultá la lista de precios vigente y la disponibilidad en tiempo real.',
  tipologias: [
    { title: 'Local medio', spec: '49,7 m²', body: 'Planta baja y niveles superiores. Ideal para retail y servicios.', img: '/img/nave_4_medio.webp' },
    { title: 'Local borde', spec: '51,5 m²', body: 'Doble frente y mayor exposición sobre circulaciones.', img: '/img/nave_4_esquina.webp' },
    { title: 'Combinables', spec: 'hasta 138 m²', body: 'Locales unificables para gastronomía, anclas y marcas.', img: '/img/nave_5_grande_a.webp' },
    { title: 'Storage', spec: '+200 unidades', body: 'Guardado privado en subsuelo, distintas medidas.', img: '/img/storage_ph.webp' },
  ],
  objetivos: ['Renta', 'Uso propio', 'Revalorización', 'Diversificar capital'],
}

/** Vistas axonométricas por nivel (Renders_Finales p-1..p3). Descripciones a validar con el cliente. */
export const NIVELES = [
  { id: -1, label: 'Subsuelo', body: '230 cocheras bajo nivel y storage privado.' },
  { id: 0, label: 'Planta baja', body: 'Locales retail en naves independientes y market.' },
  { id: 1, label: 'Nivel 1', body: 'Locales comerciales sobre la plataforma común.' },
  { id: 2, label: 'Nivel 2', body: 'Locales comerciales y espacios semicubiertos.' },
  { id: 3, label: 'Rooftop', body: 'Patio de comidas, foyer de cines en doble altura y rooftop.' },
]

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
  telefono: '11 3002-7781',
  disclaimer:
    'Las imágenes, renders, animaciones, recorridos virtuales y demás contenidos visuales presentados son representaciones artísticas de carácter ilustrativo. Los acabados, materialidades, vegetación, mobiliario, equipamiento y elementos decorativos mostrados no forman parte del precio de venta ni constituyen obligación contractual del desarrollador, salvo que se especifiquen expresamente en el boleto de reserva o contrato de compraventa. Las superficies indicadas son aproximadas y podrán presentar variaciones menores conforme a la medición final certificada. Los precios expresados en dólares estadounidenses (USD) corresponden a la fecha de publicación y están sujetos a modificación sin previo aviso hasta tanto se suscriba el correspondiente instrumento contractual. Las cocheras se comercializan de forma independiente. La fecha de entrega estimada podrá estar sujeta a variaciones por causas ajenas al control del desarrollador. La disponibilidad de unidades se actualiza en tiempo real y puede cambiar sin notificación previa.',
}
