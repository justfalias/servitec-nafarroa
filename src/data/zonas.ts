export interface Zona {
  slug: string
  nombre: string
  distanciaKm: number
  descripcion: string
  descripcionLarga: string
  codigoPostal: string
  faq: { q: string; a: string }[]
}

export const ZONAS_SEO: Zona[] = [
  // — LOTE 1 —
  {
    slug: 'baranain',
    nombre: 'Barañáin',
    distanciaKm: 4,
    descripcion: 'Barañáin es uno de los municipios más poblados de la comarca de Pamplona, con más de 22.000 habitantes.',
    descripcionLarga: 'Barañáin limita directamente con Pamplona por el oeste y forma parte de la cuenca de Pamplona. Con más de 22.000 habitantes, es uno de los municipios más densamente poblados de Navarra. En Servitec Nafarroa atendemos averías en Barañáin con la misma rapidez que en la capital: en la mayoría de casos podemos ir el mismo día.',
    codigoPostal: '31010',
    faq: [
      {
        q: '¿Atendéis averías en Barañáin el mismo día?',
        a: 'Sí. Barañáin está a menos de 10 minutos de nuestra zona de operaciones. En la mayoría de casos podemos desplazarnos el mismo día, incluso en fin de semana y festivos.',
      },
      {
        q: '¿Cuánto cuesta la visita a domicilio en Barañáin?',
        a: 'El desplazamiento, diagnóstico y elaboración de presupuesto tiene un coste fijo de 40 € + IVA, independientemente del municipio dentro de la comarca de Pamplona.',
      },
      {
        q: '¿Qué electrodomésticos reparáis en Barañáin?',
        a: 'Reparamos todo tipo de electrodomésticos: lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, placas de inducción, secadoras, microondas, campanas extractoras y calentadores de agua.',
      },
    ],
  },
  {
    slug: 'burlada',
    nombre: 'Burlada',
    distanciaKm: 5,
    descripcion: 'Burlada es un municipio de más de 18.000 habitantes situado al este de Pamplona, en la cuenca de Pamplona.',
    descripcionLarga: 'Burlada es un municipio residencial situado al este de Pamplona, con más de 18.000 habitantes. Bien comunicado con la capital a través de la Avenida de Navarra, cuenta con una gran concentración de viviendas de distintas épocas y por tanto una amplia variedad de electrodomésticos. En Servitec Nafarroa ofrecemos servicio técnico a domicilio en Burlada los 365 días del año.',
    codigoPostal: '31600',
    faq: [
      {
        q: '¿Cuánto tardáis en llegar a Burlada?',
        a: 'Burlada está a menos de 10 minutos de Pamplona. Solemos poder atender el mismo día, de 8:00 a 20:00, incluidos sábados, domingos y festivos.',
      },
      {
        q: '¿Reparáis electrodomésticos de todas las marcas en Burlada?',
        a: 'Sí, somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Electrolux, Samsung, LG, Beko, Fagor, Edesa y cualquier otra marca habitual en el mercado español.',
      },
      {
        q: '¿Hacéis presupuesto antes de reparar?',
        a: 'Siempre. Tras el diagnóstico en tu domicilio te damos un presupuesto cerrado. Si no aceptas, solo pagas el desplazamiento (40 € + IVA). Sin sorpresas.',
      },
    ],
  },
  {
    slug: 'zizur-mayor',
    nombre: 'Zizur Mayor',
    distanciaKm: 6,
    descripcion: 'Zizur Mayor es uno de los municipios de mayor crecimiento de Navarra, con más de 16.000 habitantes al suroeste de Pamplona.',
    descripcionLarga: 'Zizur Mayor ha experimentado un gran crecimiento urbanístico en los últimos años y cuenta hoy con más de 16.000 habitantes. Su proximidad a Pamplona y sus urbanizaciones de nueva construcción hacen que sea una zona con gran demanda de servicio técnico para electrodomésticos de gama alta. En Servitec Nafarroa atendemos Zizur Mayor con plena disponibilidad, los 365 días del año.',
    codigoPostal: '31180',
    faq: [
      {
        q: '¿Atendéis en las urbanizaciones de nueva construcción de Zizur Mayor?',
        a: 'Sí. Trabajamos en todas las zonas de Zizur Mayor, incluidas las urbanizaciones más recientes. Estamos familiarizados con las marcas de electrodomésticos más habituales en viviendas de nueva construcción: Siemens, Bosch, Balay y AEG principalmente.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico en Zizur Mayor?',
        a: 'El desplazamiento, diagnóstico y presupuesto cuesta 40 € + IVA. La reparación incluye 20 € + IVA de mano de obra más el repuesto si fuera necesario. Sin recargo por distancia.',
      },
      {
        q: '¿Podéis venir un sábado o domingo a Zizur Mayor?',
        a: 'Sí, trabajamos todos los días del año incluidos fines de semana y festivos, de 8:00 a 20:00. El precio no varía según el día.',
      },
    ],
  },
  {
    slug: 'huarte',
    nombre: 'Huarte',
    distanciaKm: 7,
    descripcion: 'Huarte es un municipio de la cuenca de Pamplona situado al noreste de la capital, junto al río Arga.',
    descripcionLarga: 'Huarte se encuentra en el Valle de Aranguren, al noreste de Pamplona, junto al río Arga. Con alrededor de 7.000 habitantes, combina zonas residenciales consolidadas con nuevas urbanizaciones. En Servitec Nafarroa prestamos servicio técnico de electrodomésticos en Huarte con la misma agilidad que en Pamplona, atendiendo tanto averías puntuales como revisiones.',
    codigoPostal: '31620',
    faq: [
      {
        q: '¿Atendéis en Huarte y en el Valle de Aranguren?',
        a: 'Sí, cubrimos Huarte y los municipios del entorno del Valle de Aranguren. El desplazamiento tiene el mismo coste fijo (40 € + IVA) sin recargo por distancia dentro de la comarca.',
      },
      {
        q: '¿Reparáis calentadores y termos en Huarte?',
        a: 'Sí. Además de los grandes electrodomésticos de cocina y lavado, reparamos calentadores de agua eléctricos y de gas, termos eléctricos y cualquier otro electrodoméstico del hogar.',
      },
      {
        q: '¿Podéis venir hoy mismo a Huarte?',
        a: 'En la mayoría de casos sí. Llámanos o escríbenos por WhatsApp y comprobamos disponibilidad para el mismo día. Trabajamos de 8:00 a 20:00, 365 días.',
      },
    ],
  },
  {
    slug: 'villava',
    nombre: 'Villava',
    distanciaKm: 5,
    descripcion: 'Villava es un municipio limítrofe con Pamplona al norte, con cerca de 10.000 habitantes y plena integración con la capital.',
    descripcionLarga: 'Villava limita directamente con el norte de Pamplona y está prácticamente integrada en la trama urbana de la capital. Con cerca de 10.000 habitantes, su ubicación hace que el tiempo de desplazamiento desde nuestro equipo sea mínimo. En Servitec Nafarroa atendemos averías en Villava con la máxima rapidez, cubriendo todos los tipos de electrodomésticos y todas las marcas.',
    codigoPostal: '31610',
    faq: [
      {
        q: '¿Cuánto tardáis en llegar a Villava?',
        a: 'Villava es municipio limítrofe con Pamplona. El tiempo de desplazamiento suele ser inferior a 10 minutos. Atendemos el mismo día en casi todos los casos.',
      },
      {
        q: '¿Reparáis electrodomésticos de Siemens y Bosch en Villava?',
        a: 'Sí, somos especialistas en Siemens, Bosch y Balay, las marcas más extendidas en la comarca. También reparamos Miele, AEG, Samsung, LG, Beko, Fagor y el resto de marcas habituales.',
      },
      {
        q: '¿El precio es el mismo que en Pamplona?',
        a: 'Exactamente el mismo. No aplicamos recargo por municipio dentro de la cuenca de Pamplona. Desplazamiento + diagnóstico + presupuesto: 40 € + IVA.',
      },
    ],
  },
]
