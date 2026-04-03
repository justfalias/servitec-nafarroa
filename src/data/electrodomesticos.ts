export interface Electrodomestico {
  slug: string
  nombre: string
  nombrePlural: string
  title: string
  description: string
  h1: string
  intro: string
  sintomas: string[]
  marcas: string[]
  faq: { q: string; a: string }[]
  imgAlt: string
}

export const ELECTRODOMESTICOS: Electrodomestico[] = [
  {
    slug: 'lavadoras',
    nombre: 'Lavadora',
    nombrePlural: 'Lavadoras',
    title: 'Reparación de Lavadoras en Pamplona | Servitec Nafarroa',
    description: 'Técnico de lavadoras en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, AEG y más. Servicio a domicilio el mismo día, 365 días al año. Llama: 634 006 304.',
    h1: 'Reparación de lavadoras en Pamplona',
    intro: 'La lavadora es uno de los electrodomésticos más usados del hogar y también uno de los más propensos a averías. En Servitec Nafarroa llevamos más de 20 años reparando lavadoras de todas las marcas en Pamplona y toda Navarra. Diagnosticamos la avería en tu domicilio y reparamos en el mismo día en la mayoría de casos.',
    sintomas: [
      'La lavadora no centrifuga o centrifuga mal',
      'Pierde agua por la puerta o por debajo',
      'Hace ruido excesivo al girar el tambor',
      'No calienta el agua (sale fría)',
      'No enciende o se queda bloqueada',
      'Muestra códigos de error en el display',
      'No desagua al terminar el ciclo',
      'La puerta no cierra o no abre',
      'Se detiene a mitad del programa',
      'Vibra demasiado durante el centrifugado',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'AEG', 'Electrolux', 'Samsung', 'LG', 'Beko', 'Zanussi', 'Fagor', 'Edesa'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar una lavadora en Pamplona?',
        a: 'El desplazamiento, diagnóstico y presupuesto tienen un coste de 40 € + IVA. La mano de obra de reparación son 20 € + IVA adicionales, más el coste del repuesto si es necesario. La mayoría de reparaciones de lavadora están entre 60 € y 150 €. Si decides no reparar, solo pagas el desplazamiento.',
      },
      {
        q: '¿Reparáis lavadoras Siemens, Bosch y Balay en Pamplona?',
        a: 'Sí, somos especialistas en lavadoras Siemens, Bosch y Balay, las marcas más vendidas en Navarra. También reparamos Miele, AEG, Electrolux, Samsung, LG, Beko, Zanussi, Fagor y cualquier otra marca.',
      },
      {
        q: '¿Podéis venir hoy mismo a reparar mi lavadora?',
        a: 'En la mayoría de casos sí. Trabajamos los 365 días del año, de 8:00 a 20:00, incluyendo festivos. Llámanos o escríbenos por WhatsApp y te decimos la disponibilidad del mismo día.',
      },
    ],
    imgAlt: 'Técnico reparando lavadora en Pamplona',
  },
  {
    slug: 'lavavajillas',
    nombre: 'Lavavajillas',
    nombrePlural: 'Lavavajillas',
    title: 'Reparación de Lavavajillas en Pamplona | Servitec Nafarroa',
    description: 'Técnico de lavavajillas en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, AEG y más marcas. Diagnóstico a domicilio el mismo día. Llama: 634 006 304.',
    h1: 'Reparación de lavavajillas en Pamplona',
    intro: 'Un lavavajillas averiado puede paralizar la cocina de tu hogar o negocio. En Servitec Nafarroa reparamos lavavajillas de todas las marcas en Pamplona y toda Navarra, con diagnóstico en tu domicilio y solución en el mismo día. Más de 20 años de experiencia nos avalan.',
    sintomas: [
      'El lavavajillas no lava bien, deja restos de suciedad',
      'No desagua al terminar el ciclo',
      'Pierde agua por debajo o por la puerta',
      'Muestra códigos de error (E1, E2, E3...)',
      'No enciende o no arranca el programa',
      'La puerta no cierra correctamente',
      'Hace ruido extraño durante el lavado',
      'No calienta el agua',
      'El dispensador de pastillas no se abre',
      'Termina el programa antes de tiempo',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'AEG', 'Electrolux', 'Samsung', 'Beko', 'Zanussi', 'Teka', 'Fagor', 'Edesa'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar un lavavajillas en Pamplona?',
        a: 'El desplazamiento y diagnóstico cuesta 40 € + IVA, más 20 € + IVA de mano de obra si se repara, más el repuesto si fuera necesario. La mayoría de reparaciones de lavavajillas están entre 60 € y 130 €.',
      },
      {
        q: '¿Mi lavavajillas Bosch pierde agua, ¿puede tener solución?',
        a: 'En la mayoría de casos sí. Las fugas en lavavajillas suelen deberse a la junta de puerta, la bomba de desagüe o las mangueras. Son reparaciones habituales que resolvemos en la primera visita.',
      },
      {
        q: '¿Reparáis lavavajillas integrados o de panel?',
        a: 'Sí, reparamos tanto lavavajillas de libre instalación como integrados bajo encimera. No hay recargo por el tipo de instalación.',
      },
    ],
    imgAlt: 'Técnico reparando lavavajillas en Pamplona',
  },
  {
    slug: 'frigorifico',
    nombre: 'Frigorífico',
    nombrePlural: 'Frigoríficos',
    title: 'Reparación de Frigoríficos en Pamplona | Servitec Nafarroa',
    description: 'Técnico de frigoríficos y congeladores en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, Samsung, LG y más. Urgencias el mismo día. Llama: 634 006 304.',
    h1: 'Reparación de frigoríficos en Pamplona',
    intro: 'Un frigorífico averiado es una urgencia: los alimentos se estropean en horas. En Servitec Nafarroa priorizamos las averías de frigorífico y congelador para actuar el mismo día en Pamplona y toda Navarra. Reparamos todas las marcas y modelos, incluidos frigoríficos americanos y combinados.',
    sintomas: [
      'El frigorífico no enfría o enfría insuficientemente',
      'El congelador no congela',
      'Acumula hielo en exceso en el congelador',
      'Gotea agua dentro o por debajo',
      'El compresor no arranca o hace ruido',
      'Tiene temperatura demasiado alta',
      'La puerta no cierra bien o la junta está dañada',
      'Hace ruido constante o intermitente',
      'El display muestra error o parpadea',
      'El motor trabaja continuamente sin parar',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'AEG', 'Samsung', 'LG', 'Electrolux', 'Beko', 'Zanussi', 'Fagor', 'Edesa'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar un frigorífico en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. La reparación más la mano de obra (20 € + IVA) suele quedar entre 60 € y 180 € según la avería. La recarga de gas tiene coste adicional según la cantidad necesaria.',
      },
      {
        q: '¿Reparáis frigoríficos americanos y side-by-side?',
        a: 'Sí, reparamos todo tipo de frigoríficos: combi, americanos, side-by-side, bajo encimera y vinotecas. Tenemos experiencia con los modelos más avanzados con dispensador de agua y hielo.',
      },
      {
        q: '¿Es mejor reparar o comprar un frigorífico nuevo?',
        a: 'Depende de la avería y la antigüedad del aparato. Te damos un presupuesto claro antes de empezar: si no merece la pena económicamente, te lo decimos con honestidad. No cobramos la reparación si decides no hacerla.',
      },
    ],
    imgAlt: 'Técnico reparando frigorífico en Pamplona',
  },
  {
    slug: 'horno',
    nombre: 'Horno',
    nombrePlural: 'Hornos',
    title: 'Reparación de Hornos en Pamplona | Servitec Nafarroa',
    description: 'Técnico de hornos en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, AEG, Teka y más marcas. Diagnóstico a domicilio. Llama: 634 006 304.',
    h1: 'Reparación de hornos en Pamplona',
    intro: 'Tanto si tienes un horno convencional como uno de pirolisis o con vapor, en Servitec Nafarroa lo reparamos. Llevamos más de 20 años con averías de hornos eléctricos y de gas en Pamplona y toda Navarra. Diagnóstico en tu domicilio y reparación en el mismo día.',
    sintomas: [
      'El horno no calienta o no alcanza la temperatura correcta',
      'No enciende o no responde al panel',
      'La resistencia o el grill no funcionan',
      'La puerta no cierra bien o está dañada',
      'El ventilador del horno no funciona',
      'El display muestra error o está apagado',
      'El temporizador o el programador falla',
      'Tiene la luz interior fundida',
      'El horno de pirolisis no completa el ciclo',
      'Fuga de gas (horno de gas)',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'AEG', 'Electrolux', 'Teka', 'Fagor', 'Edesa', 'Samsung', 'Beko'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar un horno en Pamplona?',
        a: 'El desplazamiento y diagnóstico cuesta 40 € + IVA. La reparación incluye 20 € + IVA de mano de obra más el repuesto. Las reparaciones de horno suelen estar entre 55 € y 140 €.',
      },
      {
        q: '¿Reparáis hornos de gas y eléctricos?',
        a: 'Sí, reparamos hornos eléctricos, de gas y mixtos de todas las marcas. Para los hornos de gas también revisamos la seguridad de la instalación.',
      },
      {
        q: '¿Podéis reparar el horno sin desmontarlo del mueble de cocina?',
        a: 'En la mayoría de averías sí. Accedemos al horno en su posición habitual. Solo en casos excepcionales (cambio de puerta, reparaciones internas complejas) es necesario extraerlo.',
      },
    ],
    imgAlt: 'Técnico reparando horno en Pamplona',
  },
  {
    slug: 'vitroceramica',
    nombre: 'Vitrocerámica y placa de inducción',
    nombrePlural: 'Vitrocerámicas y placas',
    title: 'Reparación de Vitrocerámica e Inducción en Pamplona | Servitec Nafarroa',
    description: 'Técnico de vitrocerámica y placas de inducción en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, AEG, Teka y más. Llama: 634 006 304.',
    h1: 'Reparación de vitrocerámica y placa de inducción en Pamplona',
    intro: 'Las placas de cocción son cada vez más sofisticadas. En Servitec Nafarroa reparamos vitrocerámicas y placas de inducción de todas las marcas en Pamplona y Navarra, desde zonas de cocción que no responden hasta pantallas táctiles averiadas o errores de conexión.',
    sintomas: [
      'Una o varias zonas de cocción no calientan',
      'La placa no enciende o no responde',
      'El panel táctil no funciona correctamente',
      'Muestra códigos de error en el display',
      'La placa se apaga sola durante el uso',
      'El ventilador de refrigeración hace ruido',
      'La placa de inducción no detecta los recipientes',
      'Hay zonas que calientan irregularmente',
      'El termostato de seguridad salta con frecuencia',
      'Cristal roto o fisurado',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'AEG', 'Electrolux', 'Teka', 'Fagor', 'Beko', 'Edesa', 'Cata'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar una vitrocerámica en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones habituales (cambio de zona, placa electrónica) suelen quedar entre 60 € y 160 €. El cambio de cristal tiene un coste adicional según el modelo.',
      },
      {
        q: '¿Se puede reparar una placa de inducción si el cristal está roto?',
        a: 'Sí, aunque el cambio de cristal en placas de inducción es una reparación de mayor coste. Te damos presupuesto exacto antes de proceder para que puedas decidir.',
      },
      {
        q: '¿Reparáis placas de inducción de marcas premium como Miele o Siemens?',
        a: 'Sí, somos especialistas en marcas premium. Las placas de inducción de alta gama tienen electrónica más compleja, y contamos con la formación y las herramientas necesarias para repararlas.',
      },
    ],
    imgAlt: 'Técnico reparando vitrocerámica en Pamplona',
  },
  {
    slug: 'microondas',
    nombre: 'Microondas',
    nombrePlural: 'Microondas',
    title: 'Reparación de Microondas en Pamplona | Servitec Nafarroa',
    description: 'Técnico de microondas en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Samsung, LG, Teka y más marcas. Servicio a domicilio. Llama: 634 006 304.',
    h1: 'Reparación de microondas en Pamplona',
    intro: 'El microondas es un electrodoméstico cotidiano cuya avería puede ser molesta. En Servitec Nafarroa reparamos microondas convencionales, con grill y combinados en Pamplona y toda Navarra. Diagnóstico rápido en tu domicilio y reparación el mismo día en la mayoría de casos.',
    sintomas: [
      'El microondas no calienta la comida',
      'No enciende o no responde a los botones',
      'El plato giratorio no gira',
      'Hace chispas o arcos eléctricos dentro',
      'La puerta no cierra bien o el seguro está roto',
      'El display no funciona o parpadea',
      'Hace ruido extraño durante el funcionamiento',
      'El grill no funciona',
      'Se apaga solo durante el uso',
      'El ventilador no para después de usarlo',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Samsung', 'LG', 'Teka', 'Fagor', 'Whirlpool', 'Daewoo', 'AEG'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar un microondas en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. La reparación de microondas suele estar entre 50 € y 100 €. En algunos casos, si la avería no merece la pena económicamente respecto al valor del aparato, te lo indicamos.',
      },
      {
        q: '¿Es seguro usar un microondas que hace chispas?',
        a: 'No. Las chispas indican un problema eléctrico o de revestimiento que puede ser peligroso. Deja de usar el aparato y llámanos para revisarlo.',
      },
      {
        q: '¿Reparáis microondas integrados en muebles de cocina?',
        a: 'Sí, reparamos microondas integrados sin necesidad de extraerlos del mueble en la mayoría de casos. Si fuera necesario retirarlos, lo hacemos con cuidado.',
      },
    ],
    imgAlt: 'Técnico reparando microondas en Pamplona',
  },
  {
    slug: 'campana-extractora',
    nombre: 'Campana extractora',
    nombrePlural: 'Campanas extractoras',
    title: 'Reparación de Campanas Extractoras en Pamplona | Servitec Nafarroa',
    description: 'Técnico de campanas extractoras en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, Elica, Cata y más marcas. A domicilio el mismo día. Llama: 634 006 304.',
    h1: 'Reparación de campanas extractoras en Pamplona',
    intro: 'Una campana extractora averiada llena la cocina de humos y olores. En Servitec Nafarroa reparamos campanas de todos los tipos — de pared, isla, integradas, telescópicas — de todas las marcas en Pamplona y Navarra. Servicio rápido y a domicilio.',
    sintomas: [
      'El motor no funciona o no extrae humos',
      'Hace ruido excesivo o vibra al funcionar',
      'Las luces no encienden o parpadean',
      'Los mandos o el panel táctil no responden',
      'Extrae poco aunque esté al máximo',
      'El motor funciona pero sin fuerza de aspiración',
      'El filtro metálico está bloqueado',
      'El motor arranca y para solo',
      'El piloto indicador no funciona',
      'Emite olores aunque esté apagada',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'Elica', 'Cata', 'AEG', 'Electrolux', 'Teka', 'Fagor', 'Edesa'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar una campana extractora en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. La reparación de campanas suele estar entre 55 € y 120 €. El cambio de motor es la reparación más habitual y costosa.',
      },
      {
        q: '¿Reparáis campanas de isla y campanas integradas en mueble?',
        a: 'Sí, reparamos todo tipo de campanas: de pared, de isla, integradas bajo mueble y telescópicas. También campanas con pantalla táctil y conectividad.',
      },
      {
        q: '¿Hacéis también la limpieza y sustitución de filtros?',
        a: 'Sí, durante la reparación revisamos y limpiamos los filtros metálicos. Si el filtro de carbón activo está agotado, lo sustituimos por uno nuevo.',
      },
    ],
    imgAlt: 'Técnico reparando campana extractora en Pamplona',
  },
  {
    slug: 'secadora',
    nombre: 'Secadora',
    nombrePlural: 'Secadoras',
    title: 'Reparación de Secadoras en Pamplona | Servitec Nafarroa',
    description: 'Técnico de secadoras en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Miele, AEG, Electrolux y más marcas. Servicio el mismo día. Llama: 634 006 304.',
    h1: 'Reparación de secadoras en Pamplona',
    intro: 'Las secadoras por condensación o bomba de calor son aparatos delicados que requieren un técnico especializado. En Servitec Nafarroa reparamos secadoras de todas las marcas y tecnologías en Pamplona y Navarra, con diagnóstico en tu domicilio y reparación en el mismo día.',
    sintomas: [
      'La secadora no seca la ropa o seca mal',
      'Se para sola a mitad del ciclo',
      'Hace ruido extraño (golpeteo, chirrido)',
      'No calienta el aire',
      'El tambor no gira',
      'Tarda demasiado en secar',
      'Muestra código de error en el display',
      'El depósito de agua se llena muy rápido',
      'No enciende o no responde al panel',
      'Emite olor a quemado',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Miele', 'AEG', 'Electrolux', 'Samsung', 'LG', 'Beko', 'Zanussi', 'Fagor'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar una secadora en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. Las reparaciones de secadora suelen estar entre 65 € y 160 €. Las secadoras de bomba de calor son más complejas y el coste puede ser algo mayor.',
      },
      {
        q: '¿Reparáis secadoras de condensación y de bomba de calor?',
        a: 'Sí, reparamos los tres tipos: secadoras de evacuación, de condensación y de bomba de calor. Las de bomba de calor son más eficientes pero también más delicadas, y contamos con la formación específica para repararlas.',
      },
      {
        q: '¿Mi secadora Siemens muestra el error E60, ¿tiene solución?',
        a: 'El error E60 en secadoras Siemens suele indicar un problema con el calentador o el sensor de temperatura. En la mayoría de casos tiene solución sin cambiar el aparato. Llámanos y te informamos.',
      },
    ],
    imgAlt: 'Técnico reparando secadora en Pamplona',
  },
  {
    slug: 'calentador-agua',
    nombre: 'Calentador de agua',
    nombrePlural: 'Calentadores de agua',
    title: 'Reparación de Calentadores de Agua en Pamplona | Servitec Nafarroa',
    description: 'Técnico de calentadores y termos eléctricos en Pamplona y Navarra. Reparamos Siemens, Bosch, Balay, Junkers, Fleck y más marcas. Urgencias el mismo día. Llama: 634 006 304.',
    h1: 'Reparación de calentadores de agua en Pamplona',
    intro: 'Quedarse sin agua caliente es una urgencia doméstica. En Servitec Nafarroa reparamos calentadores eléctricos (termos), calentadores de gas y termos eléctricos en Pamplona y toda Navarra. Atendemos urgencias el mismo día y priorizamos este tipo de avería para que no te quedes sin agua caliente.',
    sintomas: [
      'El calentador no da agua caliente',
      'El agua tarda mucho en calentarse',
      'Pierde agua por la válvula de seguridad',
      'Hay goteras o fugas en el depósito',
      'Hace ruido al calentar (chasquidos, borboteos)',
      'El piloto de encendido no funciona',
      'El agua sale con mal olor',
      'La resistencia eléctrica está quemada',
      'El termostato no regula bien la temperatura',
      'El calentador se apaga solo',
    ],
    marcas: ['Siemens', 'Bosch', 'Balay', 'Junkers', 'Fleck', 'Fagor', 'Cointra', 'Thermor', 'Ariston'],
    faq: [
      {
        q: '¿Cuánto cuesta reparar un calentador de agua en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. Las reparaciones más habituales (cambio de resistencia, termostato o ánodo) suelen estar entre 60 € y 130 €. Las fugas en el depósito a veces requieren la sustitución del calentador.',
      },
      {
        q: '¿Es mejor reparar o cambiar el calentador?',
        a: 'Depende de la antigüedad y la avería. Un calentador de menos de 8-10 años generalmente merece la pena reparar. Te damos un presupuesto honesto y si no es rentable, te lo decimos claramente.',
      },
      {
        q: '¿Reparáis calentadores de gas y eléctricos?',
        a: 'Sí, reparamos ambos tipos. Para los de gas también realizamos la revisión de seguridad de la instalación. Trabajamos con todas las marcas habituales en el mercado español.',
      },
    ],
    imgAlt: 'Técnico reparando calentador de agua en Pamplona',
  },
]
