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

  // — LOTE 2 —
  {
    slug: 'ansoain',
    nombre: 'Ansoáin',
    distanciaKm: 5,
    descripcion: 'Ansoáin es un municipio de la cuenca de Pamplona situado al norte de la capital, con cerca de 10.000 habitantes.',
    descripcionLarga: 'Ansoáin se sitúa al norte de Pamplona, separada de la capital por el río Sadar. Con cerca de 10.000 habitantes y una importante zona industrial, el municipio cuenta con una mezcla de viviendas antiguas y bloques de construcción más reciente. En Servitec Nafarroa atendemos averías en Ansoáin el mismo día en la gran mayoría de casos, con el mismo precio que en Pamplona.',
    codigoPostal: '31013',
    faq: [
      {
        q: '¿Reparáis electrodomésticos en Ansoáin el mismo día?',
        a: 'Sí. Ansoáin está a menos de 10 minutos de nuestra zona principal. En la mayoría de casos podemos desplazarnos el mismo día, de 8:00 a 20:00, incluidos fines de semana y festivos.',
      },
      {
        q: '¿Cuánto cuesta la visita a domicilio en Ansoáin?',
        a: 'El desplazamiento, diagnóstico y presupuesto tiene un coste fijo de 40 € + IVA, sin recargo por municipio dentro de la comarca de Pamplona.',
      },
      {
        q: '¿Reparáis electrodomésticos industriales o solo domésticos?',
        a: 'Nos especializamos en electrodomésticos domésticos: lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, secadoras, microondas, campanas y calentadores de agua.',
      },
    ],
  },
  {
    slug: 'berriozar',
    nombre: 'Berriozar',
    distanciaKm: 7,
    descripcion: 'Berriozar es un municipio de la cuenca de Pamplona con más de 9.000 habitantes, al noroeste de la capital.',
    descripcionLarga: 'Berriozar se encuentra al noroeste de Pamplona, en la cuenca del río Ulzama. Con más de 9.000 habitantes, es un municipio predominantemente residencial con varias zonas de bloques construidos desde los años setenta y urbanizaciones más recientes. En Servitec Nafarroa prestamos servicio técnico de electrodomésticos en Berriozar los 365 días del año, con desplazamiento el mismo día en la mayoría de casos.',
    codigoPostal: '31013',
    faq: [
      {
        q: '¿Atendéis averías urgentes en Berriozar?',
        a: 'Sí, priorizamos las averías urgentes como frigoríficos que no enfrían o calentadores sin agua caliente. En esos casos intentamos dar servicio el mismo día con la mayor rapidez posible.',
      },
      {
        q: '¿El precio es el mismo que en Pamplona?',
        a: 'Exactamente el mismo. No aplicamos ningún recargo por distancia para municipios de la comarca de Pamplona como Berriozar. Desplazamiento + diagnóstico + presupuesto: 40 € + IVA.',
      },
      {
        q: '¿Qué marcas reparáis en Berriozar?',
        a: 'Somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Electrolux, Samsung, LG, Beko, Fagor, Edesa y cualquier otra marca habitual.',
      },
    ],
  },
  {
    slug: 'noain',
    nombre: 'Noáin',
    distanciaKm: 8,
    descripcion: 'Noáin es el municipio que acoge el aeropuerto de Pamplona, con cerca de 7.000 habitantes en el Valle de Elorz.',
    descripcionLarga: 'Noáin es la capital del Valle de Elorz y el municipio donde se ubica el Aeropuerto de Pamplona. Con cerca de 7.000 habitantes y una ubicación estratégica en la comarca sur de Pamplona, combina zonas residenciales consolidadas con nuevas áreas de expansión. En Servitec Nafarroa atendemos Noáin y todo el Valle de Elorz con desplazamiento rápido y sin coste adicional.',
    codigoPostal: '31110',
    faq: [
      {
        q: '¿Cubrís Noáin y el Valle de Elorz?',
        a: 'Sí, cubrimos Noáin y los municipios del entorno del Valle de Elorz. El desplazamiento tiene el mismo coste fijo (40 € + IVA) sin recargo por distancia.',
      },
      {
        q: '¿Podéis venir hoy a reparar mi lavadora en Noáin?',
        a: 'En la mayoría de casos sí. Llámanos o escríbenos por WhatsApp y comprobamos disponibilidad. Trabajamos de 8:00 a 20:00, 365 días al año.',
      },
      {
        q: '¿Reparáis hornos y vitrocerámicas en Noáin?',
        a: 'Sí, reparamos todo tipo de electrodomésticos de cocina: hornos eléctricos y de gas, vitrocerámicas, placas de inducción, microondas y campanas extractoras.',
      },
    ],
  },
  {
    slug: 'sarriguren',
    nombre: 'Sarriguren',
    distanciaKm: 9,
    descripcion: 'Sarriguren es una localidad del Valle de Egüés con más de 12.000 habitantes, uno de los desarrollos urbanísticos más modernos de Navarra.',
    descripcionLarga: 'Sarriguren es una de las zonas de expansión urbana más importantes de Navarra, con más de 12.000 habitantes en el Valle de Egüés. Sus viviendas son mayoritariamente de nueva construcción, lo que implica una alta concentración de electrodomésticos de gama media-alta y modelos recientes. En Servitec Nafarroa estamos especializados en las marcas más habituales en obra nueva: Siemens, Bosch, Balay y AEG.',
    codigoPostal: '31621',
    faq: [
      {
        q: '¿Tenéis experiencia con electrodomésticos de obra nueva en Sarriguren?',
        a: 'Sí. Sarriguren tiene una gran proporción de viviendas de obra nueva con electrodomésticos Siemens, Bosch, Balay y AEG integrados. Somos especialistas en estas marcas y en los modelos más habituales en construcción reciente.',
      },
      {
        q: '¿Cuánto tardáis en llegar a Sarriguren desde Pamplona?',
        a: 'Sarriguren está a menos de 15 minutos de Pamplona. Podemos atender el mismo día en la mayoría de casos, de 8:00 a 20:00 los 365 días del año.',
      },
      {
        q: '¿Reparáis lavavajillas integrados y encimeras de inducción en Sarriguren?',
        a: 'Sí, reparamos lavavajillas integrados bajo encimera y placas de inducción de todas las marcas y modelos, sin necesidad de extraerlos del mueble en la mayoría de casos.',
      },
    ],
  },
  {
    slug: 'berian',
    nombre: 'Beriáin',
    distanciaKm: 12,
    descripcion: 'Beriáin es un municipio del Valle de Aranguren con importante actividad industrial y unos 4.000 habitantes.',
    descripcionLarga: 'Beriáin pertenece al municipio de Aranguren y alberga uno de los principales polígonos industriales de Navarra, además de una zona residencial en crecimiento. Con unos 4.000 habitantes, su proximidad a la autovía A-15 facilita el desplazamiento desde Pamplona. En Servitec Nafarroa atendemos Beriáin con el mismo nivel de servicio que el resto de la comarca: mismo día, precio fijo y sin sorpresas.',
    codigoPostal: '31191',
    faq: [
      {
        q: '¿Atendéis en Beriáin y el municipio de Aranguren?',
        a: 'Sí, cubrimos Beriáin y el entorno del municipio de Aranguren. El desplazamiento tiene el mismo coste fijo de 40 € + IVA, sin recargo por municipio.',
      },
      {
        q: '¿Reparáis calentadores y termos en Beriáin?',
        a: 'Sí. Además de los grandes electrodomésticos, reparamos calentadores de agua eléctricos y de gas, termos eléctricos y cualquier otro electrodoméstico doméstico.',
      },
      {
        q: '¿Podéis venir un fin de semana a Beriáin?',
        a: 'Sí, trabajamos todos los días del año incluidos sábados, domingos y festivos, de 8:00 a 20:00. El precio no varía según el día de la semana.',
      },
    ],
  },

  // — LOTE 3 —
  {
    slug: 'orkoien',
    nombre: 'Orkoien',
    distanciaKm: 8,
    descripcion: 'Orkoien es un municipio al noroeste de Pamplona con unos 4.000 habitantes y una importante zona industrial.',
    descripcionLarga: 'Orkoien se sitúa al noroeste de Pamplona, junto a la autovía A-12. Con unos 4.000 habitantes, combina una zona residencial tranquila con un polígono industrial de relevancia en la comarca. En Servitec Nafarroa cubrimos Orkoien con el mismo servicio que el resto de la cuenca de Pamplona: mismo día, precio fijo y técnicos multimarca especializados.',
    codigoPostal: '31170',
    faq: [
      {
        q: '¿Atendéis averías en Orkoien el mismo día?',
        a: 'Sí. Orkoien está a menos de 15 minutos de Pamplona por la A-12. En la mayoría de casos podemos desplazarnos el mismo día, de 8:00 a 20:00, los 365 días del año.',
      },
      {
        q: '¿Cuánto cuesta el desplazamiento a Orkoien?',
        a: 'El mismo precio que en Pamplona: 40 € + IVA por desplazamiento, diagnóstico y presupuesto. Sin recargos por distancia dentro de la comarca.',
      },
      {
        q: '¿Reparáis todo tipo de electrodomésticos en Orkoien?',
        a: 'Sí, reparamos lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, placas de inducción, secadoras, microondas, campanas y calentadores de agua de todas las marcas.',
      },
    ],
  },
  {
    slug: 'galar',
    nombre: 'Galar',
    distanciaKm: 10,
    descripcion: 'Galar es un municipio al suroeste de Pamplona que engloba varias localidades como Salinas de Pamplona y Cordovilla.',
    descripcionLarga: 'El municipio de Galar engloba varias localidades —Salinas de Pamplona, Cordovilla, Olaz-Chipi, Arlegui y otras— al suroeste de Pamplona. Con una población de unos 4.000 habitantes repartidos en distintos núcleos, Galar es una zona residencial de baja densidad con buenas comunicaciones con la capital. En Servitec Nafarroa atendemos todos los núcleos del municipio de Galar con desplazamiento a precio fijo.',
    codigoPostal: '31191',
    faq: [
      {
        q: '¿Cubrís todas las localidades del municipio de Galar?',
        a: 'Sí, cubrimos Salinas de Pamplona, Cordovilla, Olaz-Chipi, Arlegui y el resto de núcleos del municipio de Galar. El precio de desplazamiento es el mismo para todos: 40 € + IVA.',
      },
      {
        q: '¿Podéis venir hoy a reparar un frigorífico en Galar?',
        a: 'En la mayoría de casos sí. Las averías de frigorífico las priorizamos por ser urgentes. Llámanos y comprobamos disponibilidad para el mismo día.',
      },
      {
        q: '¿Reparáis calentadores de gas en Galar?',
        a: 'Sí, reparamos calentadores de agua eléctricos y de gas. Para los de gas también revisamos la seguridad de la instalación durante la visita.',
      },
    ],
  },
  {
    slug: 'cizur',
    nombre: 'Cizur',
    distanciaKm: 7,
    descripcion: 'Cizur es un municipio al sur de Pamplona que incluye Cizur Mayor y Cizur Menor, con más de 16.000 habitantes en conjunto.',
    descripcionLarga: 'El municipio de Cizur comprende Cizur Mayor y Cizur Menor, situados al sur de Pamplona junto al Camino de Santiago. Con más de 16.000 habitantes, es una de las zonas de mayor crecimiento urbanístico de Navarra, con numerosas viviendas de obra nueva y electrodomésticos de última generación. En Servitec Nafarroa somos el servicio técnico de referencia para la zona sur de la cuenca de Pamplona.',
    codigoPostal: '31180',
    faq: [
      {
        q: '¿Atendéis tanto Cizur Mayor como Cizur Menor?',
        a: 'Sí, cubrimos todo el municipio de Cizur: Cizur Mayor, Cizur Menor y el resto de urbanizaciones del entorno. El precio de desplazamiento es el mismo para toda la zona.',
      },
      {
        q: '¿Tenéis experiencia con electrodomésticos de nueva construcción en Cizur?',
        a: 'Sí. La zona de Cizur tiene una alta proporción de viviendas recientes con electrodomésticos Siemens, Bosch, Balay y AEG integrados. Somos especialistas en estas marcas.',
      },
      {
        q: '¿Podéis venir un sábado a reparar una lavadora en Cizur?',
        a: 'Sí, trabajamos todos los días incluidos sábados, domingos y festivos de 8:00 a 20:00. El precio no varía según el día.',
      },
    ],
  },
  {
    slug: 'estella',
    nombre: 'Estella',
    distanciaKm: 44,
    descripcion: 'Estella-Lizarra es una ciudad de la Navarra Media con más de 14.000 habitantes, capital de la comarca de Estella.',
    descripcionLarga: 'Estella-Lizarra es la capital de la comarca de Estella y una de las ciudades históricas más importantes de Navarra, con más de 14.000 habitantes. Situada a 44 km de Pamplona por la A-12, es un núcleo de servicios para toda la Navarra Media occidental. En Servitec Nafarroa atendemos Estella y su comarca, con técnicos desplazados desde Pamplona para cualquier tipo de avería de electrodomésticos.',
    codigoPostal: '31200',
    faq: [
      {
        q: '¿Atendéis Estella y la comarca de Estella-Lizarra?',
        a: 'Sí, cubrimos Estella y los municipios de la comarca. Al estar a 44 km de Pamplona, la disponibilidad para el mismo día puede ser más limitada, pero solemos poder atender en 24-48 horas.',
      },
      {
        q: '¿Cuánto cuesta la visita a domicilio en Estella?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Estella puede aplicarse un suplemento de desplazamiento que te comunicamos antes de confirmar la visita.',
      },
      {
        q: '¿Reparáis lavadoras y frigoríficos en Estella?',
        a: 'Sí, reparamos todo tipo de electrodomésticos en Estella: lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, secadoras y más, de todas las marcas.',
      },
    ],
  },

  // — LOTE 4 —
  {
    slug: 'tafalla',
    nombre: 'Tafalla',
    distanciaKm: 36,
    descripcion: 'Tafalla es una ciudad de la Navarra Media con más de 11.000 habitantes, capital de la comarca de Tafalla.',
    descripcionLarga: 'Tafalla es la capital de la comarca que lleva su nombre y uno de los núcleos urbanos más importantes de la Navarra Media, con más de 11.000 habitantes. Situada a 36 km de Pamplona por la A-15, es un centro de servicios para los municipios de su entorno. En Servitec Nafarroa desplazamos técnicos a Tafalla para reparar cualquier electrodoméstico del hogar, con diagnóstico a domicilio y presupuesto cerrado.',
    codigoPostal: '31300',
    faq: [
      {
        q: '¿Atendéis averías de electrodomésticos en Tafalla?',
        a: 'Sí, cubrimos Tafalla y la comarca. Al estar a 36 km de Pamplona, solemos poder atender en el mismo día o el siguiente. Llámanos y buscamos la cita más próxima.',
      },
      {
        q: '¿Cuánto cuesta la visita en Tafalla?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Tafalla puede aplicarse un suplemento de desplazamiento que te indicamos antes de confirmar la visita.',
      },
      {
        q: '¿Reparáis todas las marcas en Tafalla?',
        a: 'Sí, somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Samsung, LG, Beko, Fagor, Edesa y cualquier otra marca habitual.',
      },
    ],
  },
  {
    slug: 'olite',
    nombre: 'Olite',
    distanciaKm: 42,
    descripcion: 'Olite es una villa medieval de la Navarra Media con más de 3.500 habitantes, famosa por su castillo palacio.',
    descripcionLarga: 'Olite es una de las villas más emblemáticas de Navarra, conocida por su castillo palacio medieval y su producción vitivinícola. Con más de 3.500 habitantes, es el núcleo principal del municipio de Olite-Erriberri en la Navarra Media. En Servitec Nafarroa atendemos Olite y los municipios cercanos para la reparación de electrodomésticos a domicilio, con técnicos desplazados desde Pamplona.',
    codigoPostal: '31390',
    faq: [
      {
        q: '¿Desplazáis técnicos hasta Olite?',
        a: 'Sí, cubrimos Olite y el entorno de la Navarra Media. Al estar a 42 km de Pamplona, la disponibilidad para el mismo día puede ser más limitada, pero solemos atender en 24-48 horas.',
      },
      {
        q: '¿El precio es el mismo que en Pamplona?',
        a: 'El diagnóstico es de 40 € + IVA. Para Olite puede aplicarse un suplemento de desplazamiento que te comunicamos antes de confirmar la visita, sin compromiso.',
      },
      {
        q: '¿Reparáis frigoríficos y lavadoras en Olite?',
        a: 'Sí, reparamos todo tipo de electrodomésticos domésticos en Olite: lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, secadoras y calentadores.',
      },
    ],
  },
  {
    slug: 'sanguesa',
    nombre: 'Sangüesa',
    distanciaKm: 46,
    descripcion: 'Sangüesa es una localidad de la Navarra Media Oriental con más de 5.000 habitantes a orillas del río Aragón.',
    descripcionLarga: 'Sangüesa-Zangoza es la principal localidad de la Navarra Media Oriental, situada a orillas del río Aragón y en el Camino de Santiago aragonés. Con más de 5.000 habitantes, es el centro de servicios de la comarca de Sangüesa. En Servitec Nafarroa atendemos Sangüesa y los municipios de su comarca para la reparación de electrodomésticos a domicilio.',
    codigoPostal: '31400',
    faq: [
      {
        q: '¿Cubrís Sangüesa y la comarca de la Navarra Media Oriental?',
        a: 'Sí, atendemos Sangüesa y los municipios del entorno. Al estar a 46 km de Pamplona, solemos poder atender en 24-48 horas. Llámanos para concretar fecha.',
      },
      {
        q: '¿Cuánto cuesta la visita en Sangüesa?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Sangüesa puede aplicarse un suplemento de desplazamiento que te indicamos antes de confirmar la visita.',
      },
      {
        q: '¿Reparáis electrodomésticos de todas las marcas en Sangüesa?',
        a: 'Sí, somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Samsung, LG, Beko, Fagor, Edesa y cualquier otra marca del mercado español.',
      },
    ],
  },
  {
    slug: 'aoiz',
    nombre: 'Aoiz',
    distanciaKm: 30,
    descripcion: 'Aoiz es la capital del Valle de Aoiz-Agoitz con más de 2.500 habitantes, en la Navarra Media Oriental.',
    descripcionLarga: 'Aoiz-Agoitz es la capital del valle homónimo y un núcleo de servicios para los municipios del Pirineo navarro occidental. Con más de 2.500 habitantes y una ubicación privilegiada entre Pamplona y los valles pirenaicos, es un municipio con buenas comunicaciones por la carretera NA-150. En Servitec Nafarroa atendemos Aoiz y los municipios próximos para la reparación de electrodomésticos a domicilio.',
    codigoPostal: '31430',
    faq: [
      {
        q: '¿Atendéis Aoiz y los valles del Pirineo navarro?',
        a: 'Sí, cubrimos Aoiz y los municipios próximos. Al estar a 30 km de Pamplona, podemos atender con relativa rapidez, generalmente el mismo día o el siguiente.',
      },
      {
        q: '¿Hay recargo por desplazamiento a Aoiz?',
        a: 'El diagnóstico es de 40 € + IVA. Para Aoiz puede aplicarse un pequeño suplemento de desplazamiento que te comunicamos antes de confirmar la visita.',
      },
      {
        q: '¿Reparáis calentadores de gas en Aoiz?',
        a: 'Sí, reparamos calentadores de agua eléctricos y de gas, termos eléctricos y cualquier electrodoméstico doméstico. Para los de gas también revisamos la seguridad de la instalación.',
      },
    ],
  },
  // — LOTE 6 —
  {
    slug: 'alsasua',
    nombre: 'Alsasua',
    distanciaKm: 55,
    descripcion: 'Alsasua es la localidad más poblada de la comarca de Sakana, con más de 7.000 habitantes en el norte de Navarra.',
    descripcionLarga: 'Alsasua-Altsasu es la capital de la comarca de Sakana y el núcleo urbano más importante del norte de Navarra, con más de 7.000 habitantes. Situada en un cruce estratégico de comunicaciones entre Pamplona, el País Vasco y Gipuzkoa, cuenta con una fuerte actividad industrial y comercial. En Servitec Nafarroa atendemos Alsasua y la comarca de Sakana para la reparación de todo tipo de electrodomésticos a domicilio.',
    codigoPostal: '31800',
    faq: [
      {
        q: '¿Atendéis Alsasua y la comarca de Sakana?',
        a: 'Sí, cubrimos Alsasua y los municipios de la comarca de Sakana. Al estar a 55 km de Pamplona, solemos poder atender en 24-48 horas. Llámanos para concretar la visita.',
      },
      {
        q: '¿Cuánto cuesta la visita a domicilio en Alsasua?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Alsasua puede aplicarse un suplemento de desplazamiento que te indicamos antes de confirmar la visita, sin compromiso.',
      },
      {
        q: '¿Reparáis electrodomésticos de todas las marcas en Alsasua?',
        a: 'Sí, somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Samsung, LG, Beko, Fagor, Edesa y cualquier otra marca habitual en el mercado español.',
      },
    ],
  },
  {
    slug: 'irurtzun',
    nombre: 'Irurtzun',
    distanciaKm: 25,
    descripcion: 'Irurtzun es un municipio de la comarca de Aranguren con más de 2.500 habitantes, puerta de entrada al Pirineo navarro.',
    descripcionLarga: 'Irurtzun se sitúa en la comarca de Aranguren, a 25 km de Pamplona por la autovía A-15, siendo la puerta de entrada natural hacia los valles pirenaicos navarros. Con más de 2.500 habitantes y un importante polígono industrial, es un municipio con buenas comunicaciones. En Servitec Nafarroa atendemos Irurtzun con rapidez gracias a su proximidad a Pamplona, pudiendo dar servicio el mismo día en la mayoría de casos.',
    codigoPostal: '31170',
    faq: [
      {
        q: '¿Podéis venir el mismo día a Irurtzun?',
        a: 'Sí, en la mayoría de casos. Irurtzun está a 25 km de Pamplona y tiene excelente acceso por la A-15. Llámanos y comprobamos disponibilidad para el mismo día.',
      },
      {
        q: '¿Cuánto cuesta la visita en Irurtzun?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Irurtzun puede aplicarse un pequeño suplemento de desplazamiento que te indicamos antes de confirmar.',
      },
      {
        q: '¿Reparáis calentadores y termos en Irurtzun?',
        a: 'Sí, reparamos calentadores de agua eléctricos y de gas, termos y cualquier electrodoméstico doméstico. Para los de gas también revisamos la seguridad de la instalación.',
      },
    ],
  },
  {
    slug: 'lekunberri',
    nombre: 'Lekunberri',
    distanciaKm: 35,
    descripcion: 'Lekunberri es la capital del Valle de Larráun con más de 1.500 habitantes, en la Navarra húmeda prepirenaica.',
    descripcionLarga: 'Lekunberri es la capital del Valle de Larráun, en la Navarra húmeda prepirenaica, con más de 1.500 habitantes. Conocida como puerta del Pirineo navarro, es un destino turístico y residencial con creciente demanda de servicios de calidad. En Servitec Nafarroa desplazamos técnicos a Lekunberri y los valles del entorno para la reparación de electrodomésticos a domicilio.',
    codigoPostal: '31870',
    faq: [
      {
        q: '¿Cubrís Lekunberri y el Valle de Larráun?',
        a: 'Sí, atendemos Lekunberri y los municipios del Valle de Larráun. Al estar a 35 km de Pamplona, solemos poder atender en el mismo día o el siguiente.',
      },
      {
        q: '¿Cuánto cuesta la visita en Lekunberri?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Lekunberri puede aplicarse un suplemento de desplazamiento que te comunicamos antes de confirmar la visita.',
      },
      {
        q: '¿Reparáis electrodomésticos de todas las marcas en Lekunberri?',
        a: 'Sí, somos técnicos multimarca y reparamos Siemens, Bosch, Balay, Miele, AEG, Samsung, LG, Beko, Fagor y cualquier otra marca habitual.',
      },
    ],
  },
  {
    slug: 'baztan',
    nombre: 'Baztan',
    distanciaKm: 60,
    descripcion: 'Baztan es el municipio más extenso de Navarra, con más de 7.000 habitantes repartidos entre Elizondo y otros núcleos del valle.',
    descripcionLarga: 'El Valle del Baztán es el municipio más extenso de Navarra, con más de 7.000 habitantes repartidos entre Elizondo —su capital— y otros quince núcleos. Situado en la frontera con Francia, es una de las zonas más verdes y singulares del Pirineo occidental. En Servitec Nafarroa atendemos el Valle del Baztán para la reparación de electrodomésticos a domicilio, con técnicos desplazados desde Pamplona.',
    codigoPostal: '31700',
    faq: [
      {
        q: '¿Cubrís el Valle del Baztán y sus núcleos?',
        a: 'Sí, atendemos el Valle del Baztán, incluyendo Elizondo y el resto de núcleos del municipio. Al estar a 60 km de Pamplona, la atención suele ser en 24-48 horas.',
      },
      {
        q: '¿Cuánto cuesta la visita en Baztán?',
        a: 'El diagnóstico es de 40 € + IVA. Para el Valle del Baztán se aplica un suplemento de desplazamiento que te comunicamos antes de confirmar la visita, sin compromiso.',
      },
      {
        q: '¿Reparáis lavadoras y frigoríficos en el Baztán?',
        a: 'Sí, reparamos todo tipo de electrodomésticos: lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, secadoras y calentadores de agua, de todas las marcas.',
      },
    ],
  },
  {
    slug: 'elizondo',
    nombre: 'Elizondo',
    distanciaKm: 60,
    descripcion: 'Elizondo es la capital del Valle del Baztán, con más de 3.500 habitantes en el corazón del Pirineo navarro occidental.',
    descripcionLarga: 'Elizondo es la capital y el núcleo urbano principal del Valle del Baztán, con más de 3.500 habitantes. Situada en el corazón del Pirineo occidental navarro, es un centro de servicios para todo el valle. En Servitec Nafarroa atendemos Elizondo para la reparación de electrodomésticos a domicilio, con diagnóstico in situ y presupuesto cerrado antes de empezar cualquier reparación.',
    codigoPostal: '31700',
    faq: [
      {
        q: '¿Atendéis averías de electrodomésticos en Elizondo?',
        a: 'Sí, cubrimos Elizondo y el entorno del Valle del Baztán. Al estar a 60 km de Pamplona, solemos poder atender en 24-48 horas. Llámanos para la cita más próxima.',
      },
      {
        q: '¿Hay recargo por desplazamiento a Elizondo?',
        a: 'El diagnóstico es de 40 € + IVA. Para Elizondo se aplica un suplemento de desplazamiento que te indicamos antes de confirmar la visita, sin ningún compromiso.',
      },
      {
        q: '¿Reparáis electrodomésticos de gama alta en Elizondo?',
        a: 'Sí, tenemos experiencia con marcas premium como Miele, Siemens iQ700 y AEG. Reparamos cualquier electrodoméstico doméstico independientemente de la marca o el modelo.',
      },
    ],
  },

  // — LOTE 7 —
  {
    slug: 'lesaka',
    nombre: 'Lesaka',
    distanciaKm: 65,
    descripcion: 'Lesaka es una villa del Valle del Bidasoa con más de 3.000 habitantes, en la frontera norte de Navarra.',
    descripcionLarga: 'Lesaka es una de las cinco villas del Valle del Bidasoa, situada en el extremo norte de Navarra, a pocos kilómetros de la frontera con Francia. Con más de 3.000 habitantes, conserva su carácter de villa histórica con una economía mixta entre industria y servicios. En Servitec Nafarroa atendemos Lesaka y el Valle del Bidasoa para la reparación de electrodomésticos a domicilio.',
    codigoPostal: '31770',
    faq: [
      {
        q: '¿Cubrís Lesaka y el Valle del Bidasoa?',
        a: 'Sí, atendemos Lesaka y los municipios del Valle del Bidasoa. Al estar a 65 km de Pamplona, la atención suele ser en 24-48 horas. Llámanos para concretar la cita.',
      },
      {
        q: '¿Cuánto cuesta la visita en Lesaka?',
        a: 'El diagnóstico es de 40 € + IVA. Para Lesaka se aplica un suplemento de desplazamiento que te comunicamos antes de confirmar la visita, sin compromiso.',
      },
      {
        q: '¿Reparáis electrodomésticos de todas las marcas en Lesaka?',
        a: 'Sí, somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Samsung, LG, Beko, Fagor y cualquier otra marca habitual.',
      },
    ],
  },
  {
    slug: 'bera',
    nombre: 'Bera',
    distanciaKm: 70,
    descripcion: 'Bera de Bidasoa es una villa del norte de Navarra con más de 4.000 habitantes, la más extensa del Valle del Bidasoa.',
    descripcionLarga: 'Bera de Bidasoa es la villa más extensa del Valle del Bidasoa y una de las más pobladas del norte de Navarra, con más de 4.000 habitantes. Limita con Gipuzkoa y con Francia, lo que le otorga un carácter fronterizo singular. En Servitec Nafarroa prestamos servicio técnico de electrodomésticos en Bera con técnicos desplazados desde Pamplona, con diagnóstico a domicilio y presupuesto previo.',
    codigoPostal: '31780',
    faq: [
      {
        q: '¿Atendéis averías en Bera de Bidasoa?',
        a: 'Sí, cubrimos Bera y el entorno del Valle del Bidasoa. Al estar a 70 km de Pamplona, la atención suele ser en 24-48 horas. Llámanos y buscamos la fecha más próxima.',
      },
      {
        q: '¿Hay recargo por desplazamiento a Bera?',
        a: 'El diagnóstico es de 40 € + IVA. Para Bera se aplica un suplemento de desplazamiento que te indicamos antes de confirmar la visita.',
      },
      {
        q: '¿Reparáis lavadoras y frigoríficos en Bera?',
        a: 'Sí, reparamos todo tipo de electrodomésticos: lavadoras, lavavajillas, frigoríficos, hornos, vitrocerámicas, secadoras, microondas y calentadores, de todas las marcas.',
      },
    ],
  },
  {
    slug: 'santesteban',
    nombre: 'Santesteban',
    distanciaKm: 50,
    descripcion: 'Santesteban es la capital del Valle del Bidasoa navarro con más de 1.500 habitantes, en la Navarra húmeda.',
    descripcionLarga: 'Santesteban-Doneztebe es la capital administrativa del Valle del Bidasoa navarro, con más de 1.500 habitantes. Situada a 50 km de Pamplona por la NA-121, es el centro de servicios de la comarca. En Servitec Nafarroa atendemos Santesteban y los municipios del entorno para la reparación de electrodomésticos a domicilio, cerrando así la cobertura de toda la Navarra húmeda.',
    codigoPostal: '31740',
    faq: [
      {
        q: '¿Cubrís Santesteban y el Valle del Bidasoa?',
        a: 'Sí, cubrimos Santesteban y los municipios del Valle del Bidasoa. Al estar a 50 km de Pamplona, podemos atender en el mismo día o el siguiente según disponibilidad.',
      },
      {
        q: '¿Cuánto cuesta la visita en Santesteban?',
        a: 'El diagnóstico y presupuesto es de 40 € + IVA. Para Santesteban puede aplicarse un suplemento de desplazamiento que te indicamos antes de confirmar, sin compromiso.',
      },
      {
        q: '¿Reparáis electrodomésticos de todas las marcas en Santesteban?',
        a: 'Sí, somos técnicos multimarca. Reparamos Siemens, Bosch, Balay, Miele, AEG, Samsung, LG, Beko, Fagor, Edesa y cualquier otra marca del mercado español.',
      },
    ],
  },
]
