export interface Marca {
  slug: string
  nombre: string
  title: string
  description: string
  h1: string
  intro: string
  electrodomesticos: string[]
  specialties: string[]
  faq: { q: string; a: string }[]
}

export const MARCAS_SEO: Marca[] = [
  {
    slug: 'siemens',
    nombre: 'Siemens',
    title: 'Servicio Técnico Siemens Pamplona | Servitec Nafarroa',
    description: 'Técnico Siemens independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas, frigoríficos y más. Mismo día, 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Siemens en Pamplona',
    intro: 'Siemens es una de las marcas de electrodomésticos más vendidas y valoradas en España. En Servitec Nafarroa somos técnicos independientes especializados en electrodomésticos Siemens en Pamplona y toda Navarra. Con más de 20 años de experiencia, conocemos a fondo la tecnología de esta marca alemana y disponemos de repuestos originales para la mayoría de averías.',
    electrodomesticos: [
      'Lavadoras Siemens',
      'Lavavajillas Siemens',
      'Frigoríficos y congeladores Siemens',
      'Hornos Siemens',
      'Vitrocerámicas y placas de inducción Siemens',
      'Secadoras Siemens',
      'Microondas Siemens',
      'Campanas extractoras Siemens',
    ],
    specialties: [
      'Diagnóstico de errores electrónicos en modelos iQ300, iQ500 e iQ700',
      'Reparación de módulos WiFi y conectividad Home Connect',
      'Cambio de rodamientos y escobillas en lavadoras Siemens',
      'Reparación de placas de inducción con tecnología flexInduction',
    ],
    faq: [
      {
        q: '¿Sois el servicio técnico oficial de Siemens en Pamplona?',
        a: 'No somos el SAT oficial de Siemens, somos técnicos independientes multimarca. Esto nos permite ofrecer precios más competitivos y mayor flexibilidad horaria (365 días, incluidos festivos), sin perder calidad en la reparación.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Siemens en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. La reparación incluye 20 € + IVA de mano de obra más el repuesto si es necesario. La mayoría de reparaciones de electrodomésticos Siemens están entre 60 € y 160 €.',
      },
      {
        q: '¿Tenéis repuestos originales Siemens?',
        a: 'Sí, trabajamos con repuestos originales Siemens y compatibles de alta calidad. Indicamos siempre qué tipo de pieza se va a instalar antes de hacer la reparación.',
      },
    ],
  },
  {
    slug: 'bosch',
    nombre: 'Bosch',
    title: 'Servicio Técnico Bosch Pamplona | Servitec Nafarroa',
    description: 'Técnico Bosch independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas, frigoríficos y más marcas Bosch. 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Bosch en Pamplona',
    intro: 'Bosch es sinónimo de fiabilidad y durabilidad en el hogar. En Servitec Nafarroa reparamos electrodomésticos Bosch en Pamplona y toda Navarra con más de 20 años de experiencia. Como técnicos independientes, ofrecemos diagnóstico rápido y precios claros para que tu electrodoméstico Bosch vuelva a funcionar cuanto antes.',
    electrodomesticos: [
      'Lavadoras Bosch',
      'Lavavajillas Bosch',
      'Frigoríficos y congeladores Bosch',
      'Hornos Bosch',
      'Vitrocerámicas y placas de inducción Bosch',
      'Secadoras Bosch',
      'Microondas Bosch',
      'Campanas extractoras Bosch',
    ],
    specialties: [
      'Reparación de lavadoras Bosch Serie 4, 6 y 8',
      'Diagnóstico de errores en lavavajillas Bosch con tecnología PerfectDry',
      'Reparación de frigoríficos Bosch NoFrost',
      'Sustitución de módulos electrónicos en hornos Bosch',
    ],
    faq: [
      {
        q: '¿Sois el servicio técnico oficial de Bosch en Pamplona?',
        a: 'No somos el SAT oficial de Bosch. Somos técnicos independientes, lo que nos permite ofrecer mayor disponibilidad (365 días, festivos incluidos) y precios más competitivos que el servicio oficial.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Bosch en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. La reparación incluye 20 € + IVA de mano de obra más el repuesto si es necesario. La mayoría de reparaciones de electrodomésticos Bosch están entre 60 € y 150 €.',
      },
      {
        q: '¿Reparáis lavadoras Bosch con error E18 o F21?',
        a: 'Sí, son errores habituales en lavadoras Bosch relacionados con el desagüe o la bomba. Generalmente se resuelven en la primera visita. Llámanos para describirte el proceso.',
      },
    ],
  },
  {
    slug: 'balay',
    nombre: 'Balay',
    title: 'Servicio Técnico Balay Pamplona | Servitec Nafarroa',
    description: 'Técnico Balay independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas, frigoríficos Balay y más. 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Balay en Pamplona',
    intro: 'Balay es la marca española del grupo BSH (Bosch/Siemens) y una de las más populares en los hogares navarros. En Servitec Nafarroa somos especialistas en electrodomésticos Balay en Pamplona y toda Navarra. Con más de 20 años reparando esta marca, conocemos sus modelos, sus averías más frecuentes y dónde conseguir los repuestos.',
    electrodomesticos: [
      'Lavadoras Balay',
      'Lavavajillas Balay',
      'Frigoríficos Balay',
      'Hornos Balay',
      'Vitrocerámicas Balay',
      'Secadoras Balay',
      'Microondas Balay',
      'Campanas Balay',
    ],
    specialties: [
      'Especialistas en gama Balay 3TS, 3VS y 3TI',
      'Reparación de lavavajillas Balay con errores E1-E9',
      'Diagnóstico de frigoríficos Balay NoFrost',
      'Sustitución de juntas y resistencias en hornos Balay',
    ],
    faq: [
      {
        q: '¿Sois el servicio técnico oficial de Balay en Pamplona?',
        a: 'No somos el SAT oficial de Balay. Somos técnicos independientes multimarca, lo que nos da flexibilidad para atenderte los 365 días del año incluidos festivos, sin esperas de semanas.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Balay en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA, más 20 € + IVA de mano de obra y el repuesto si es necesario. La mayoría de reparaciones Balay están entre 60 € y 150 €.',
      },
      {
        q: '¿Mi lavadora Balay no centrifuga, ¿tiene solución?',
        a: 'En la mayoría de casos sí. Las causas más habituales son el módulo electrónico, las escobillas del motor o la correa. Son reparaciones frecuentes que resolvemos en la primera visita.',
      },
    ],
  },
  {
    slug: 'miele',
    nombre: 'Miele',
    title: 'Servicio Técnico Miele Pamplona | Servitec Nafarroa',
    description: 'Técnico Miele independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas y electrodomésticos Miele. Presupuesto sin compromiso. Llama: 634 006 304.',
    h1: 'Servicio técnico Miele en Pamplona',
    intro: 'Miele es la marca de electrodomésticos premium por excelencia, conocida por su durabilidad y tecnología avanzada. En Servitec Nafarroa reparamos electrodomésticos Miele en Pamplona y toda Navarra con la formación y experiencia que exige esta marca. Una reparación bien hecha puede alargar la vida de tu Miele décadas más.',
    electrodomesticos: [
      'Lavadoras Miele',
      'Secadoras Miele',
      'Lavavajillas Miele',
      'Frigoríficos Miele',
      'Hornos Miele',
      'Vitrocerámicas Miele',
      'Campanas Miele',
    ],
    specialties: [
      'Reparación de lavadoras Miele W1 y WCR',
      'Diagnóstico electrónico en lavavajillas Miele con AutoDos',
      'Reparación de hornos Miele con tecnología PureLine',
      'Sustitución de módulos en frigoríficos Miele PerfectCool',
    ],
    faq: [
      {
        q: '¿Merece la pena reparar un electrodoméstico Miele?',
        a: 'Casi siempre sí. Miele fabrica para durar 20 años. Si el aparato tiene menos de 15 años, la reparación suele ser muy rentable comparada con el coste de un equipo nuevo de la misma calidad.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Miele en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Los electrodomésticos Miele tienen piezas algo más caras por su calidad premium, pero la reparación suele estar entre 80 € y 200 €. Te damos presupuesto exacto antes de empezar.',
      },
      {
        q: '¿Tenéis repuestos originales Miele?',
        a: 'Trabajamos con repuestos originales Miele y compatibles certificados. Indicamos siempre qué tipo de pieza se instala antes de la reparación.',
      },
    ],
  },
  {
    slug: 'aeg',
    nombre: 'AEG',
    title: 'Servicio Técnico AEG Pamplona | Servitec Nafarroa',
    description: 'Técnico AEG independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas, frigoríficos AEG y más. Servicio a domicilio 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico AEG en Pamplona',
    intro: 'AEG es una marca premium del grupo Electrolux, reconocida por su tecnología innovadora y diseño elegante. En Servitec Nafarroa reparamos electrodomésticos AEG en Pamplona y toda Navarra. Nuestra experiencia con la electrónica avanzada de AEG nos permite diagnosticar y resolver la mayoría de averías en una sola visita.',
    electrodomesticos: [
      'Lavadoras AEG',
      'Lavavajillas AEG',
      'Frigoríficos AEG',
      'Hornos AEG',
      'Placas de inducción AEG',
      'Secadoras AEG',
      'Campanas AEG',
    ],
    specialties: [
      'Reparación de lavadoras AEG con tecnología ProSteam',
      'Diagnóstico en lavavajillas AEG ComfortLift',
      'Reparación de hornos AEG con SteamBake',
      'Sustitución de sensores en placas de inducción AEG',
    ],
    faq: [
      {
        q: '¿Sois el servicio técnico oficial de AEG en Pamplona?',
        a: 'No somos SAT oficial de AEG. Somos técnicos independientes, con mayor disponibilidad horaria (365 días, festivos) y precios más ajustados que el servicio de marca.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico AEG en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA, más 20 € + IVA de mano de obra y el repuesto. Las reparaciones AEG suelen estar entre 65 € y 170 €.',
      },
      {
        q: '¿Reparáis lavadoras AEG de carga superior?',
        a: 'Sí, reparamos todos los modelos AEG: carga frontal, carga superior e integrados. También lavadoras-secadoras combinadas.',
      },
    ],
  },
  {
    slug: 'samsung',
    nombre: 'Samsung',
    title: 'Servicio Técnico Samsung Pamplona | Servitec Nafarroa',
    description: 'Técnico Samsung independiente en Pamplona y Navarra. Reparamos lavadoras, frigoríficos y electrodomésticos Samsung. 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Samsung en Pamplona',
    intro: 'Los electrodomésticos Samsung combinan tecnología conectada y diseño moderno. En Servitec Nafarroa reparamos lavadoras, frigoríficos americanos, lavavajillas y otros electrodomésticos Samsung en Pamplona y toda Navarra. Experiencia con los modelos más recientes de lavadora AddWash, frigoríficos Family Hub y placas FlexZone.',
    electrodomesticos: [
      'Lavadoras Samsung',
      'Frigoríficos Samsung',
      'Lavavajillas Samsung',
      'Microondas Samsung',
      'Placas Samsung',
      'Campanas Samsung',
    ],
    specialties: [
      'Reparación de lavadoras Samsung AddWash y EcoBubble',
      'Diagnóstico en frigoríficos Samsung French Door y Family Hub',
      'Reparación de errores en panel táctil de lavadoras Samsung',
      'Actualización y reset de firmware en electrodomésticos Samsung',
    ],
    faq: [
      {
        q: '¿Reparáis frigoríficos americanos Samsung en Pamplona?',
        a: 'Sí, reparamos todos los modelos: frigoríficos americanos, French Door, Side-by-Side y combinados Samsung. También los modelos Family Hub con pantalla.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Samsung en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones Samsung suelen estar entre 55 € y 150 €. Para los modelos premium con pantalla táctil, el módulo puede tener mayor coste.',
      },
      {
        q: '¿Mi lavadora Samsung muestra el error 4C o 4E, ¿tiene solución?',
        a: 'Sí, ese error indica problema con el suministro de agua. Generalmente se debe al filtro de entrada o al presostato. Es una reparación sencilla que hacemos en la primera visita.',
      },
    ],
  },
  {
    slug: 'lg',
    nombre: 'LG',
    title: 'Servicio Técnico LG Pamplona | Servitec Nafarroa',
    description: 'Técnico LG independiente en Pamplona y Navarra. Reparamos lavadoras, frigoríficos, lavavajillas LG y más. Servicio el mismo día. Llama: 634 006 304.',
    h1: 'Servicio técnico LG en Pamplona',
    intro: 'LG es una de las marcas coreanas más presentes en los hogares españoles, reconocida por sus lavadoras con motor inverter y frigoríficos Door-in-Door. En Servitec Nafarroa reparamos electrodomésticos LG en Pamplona y toda Navarra, con experiencia en sus últimas generaciones de lavadoras TwinWash y frigoríficos InstaView.',
    electrodomesticos: [
      'Lavadoras LG',
      'Frigoríficos LG',
      'Lavavajillas LG',
      'Microondas LG',
      'Secadoras LG',
    ],
    specialties: [
      'Reparación de lavadoras LG con motor inverter directo',
      'Diagnóstico de frigoríficos LG InstaView y Door-in-Door',
      'Reparación de lavadoras LG TwinWash',
      'Solución de errores OE, LE y UE en lavadoras LG',
    ],
    faq: [
      {
        q: '¿Reparáis lavadoras LG con motor inverter en Pamplona?',
        a: 'Sí, el motor inverter de LG es muy fiable pero cuando falla requiere técnico especializado. Tenemos experiencia con este tipo de motor y los módulos electrónicos asociados.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico LG en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA, más 20 € + IVA de mano de obra y el repuesto. Las reparaciones LG suelen estar entre 60 € y 150 €.',
      },
      {
        q: '¿Reparáis frigoríficos LG que no enfrían?',
        a: 'Sí, es una de las averías más habituales. Puede ser el compresor, el gas refrigerante o el control electrónico. Diagnosticamos en el domicilio y te damos presupuesto.',
      },
    ],
  },
  {
    slug: 'electrolux',
    nombre: 'Electrolux',
    title: 'Servicio Técnico Electrolux Pamplona | Servitec Nafarroa',
    description: 'Técnico Electrolux independiente en Pamplona y Navarra. Reparamos lavadoras, lavavajillas y electrodomésticos Electrolux. 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Electrolux en Pamplona',
    intro: 'Electrolux es una marca sueca con décadas de historia en electrodomésticos de calidad. En Servitec Nafarroa reparamos electrodomésticos Electrolux en Pamplona y toda Navarra. Somos técnicos independientes con amplia experiencia en los modelos más recientes de esta marca, desde lavadoras SteamCare hasta frigoríficos FreshPlus.',
    electrodomesticos: [
      'Lavadoras Electrolux',
      'Lavavajillas Electrolux',
      'Frigoríficos Electrolux',
      'Hornos Electrolux',
      'Secadoras Electrolux',
      'Placas Electrolux',
      'Campanas Electrolux',
    ],
    specialties: [
      'Reparación de lavadoras Electrolux PerfectCare',
      'Diagnóstico en lavavajillas Electrolux AirDry',
      'Reparación de hornos Electrolux SteamBake',
      'Solución de errores E10, E20, E40 en lavadoras Electrolux',
    ],
    faq: [
      {
        q: '¿Sois el servicio técnico oficial de Electrolux en Pamplona?',
        a: 'No somos SAT oficial. Somos técnicos independientes con más disponibilidad y precios más ajustados, disponibles 365 días al año.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Electrolux en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones Electrolux suelen estar entre 60 € y 150 €, según la avería y el modelo.',
      },
      {
        q: '¿Reparáis lavadoras Electrolux de carga superior?',
        a: 'Sí, reparamos todos los modelos Electrolux: carga frontal, carga superior y lavadoras-secadoras combinadas.',
      },
    ],
  },
  {
    slug: 'fagor',
    nombre: 'Fagor',
    title: 'Servicio Técnico Fagor Pamplona | Servitec Nafarroa',
    description: 'Técnico Fagor en Pamplona y Navarra. Reparamos lavadoras, lavavajillas y electrodomésticos Fagor. Repuestos disponibles. 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Fagor en Pamplona',
    intro: 'Fagor es una marca española de origen vasco con gran implantación en Navarra. Aunque la marca pasó por una reestructuración, seguimos reparando electrodomésticos Fagor en Pamplona y toda Navarra. Disponemos de repuestos para modelos de los últimos 15 años y conocemos a fondo su tecnología.',
    electrodomesticos: [
      'Lavadoras Fagor',
      'Lavavajillas Fagor',
      'Frigoríficos Fagor',
      'Hornos Fagor',
      'Vitrocerámicas Fagor',
      'Campanas Fagor',
    ],
    specialties: [
      'Disponemos de repuestos para modelos Fagor hasta 15 años de antigüedad',
      'Reparación de lavadoras Fagor FET y FFT',
      'Diagnóstico en lavavajillas Fagor LVF',
      'Sustitución de termostatos y resistencias en hornos Fagor',
    ],
    faq: [
      {
        q: '¿Reparáis electrodomésticos Fagor antiguos?',
        a: 'Sí, tenemos acceso a repuestos para modelos Fagor de hasta 15 años de antigüedad. A partir de cierta antigüedad puede ser difícil encontrar piezas, pero lo intentamos siempre.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Fagor en Pamplona?',
        a: 'El diagnóstico a domicilio cuesta 40 € + IVA. Las reparaciones Fagor suelen estar entre 55 € y 130 €.',
      },
      {
        q: '¿Dónde consigo repuestos para mi Fagor?',
        a: 'Nosotros gestionamos los repuestos por ti. Si la pieza está disponible, la encargamos y te damos fecha para la reparación.',
      },
    ],
  },
  {
    slug: 'beko',
    nombre: 'Beko',
    title: 'Servicio Técnico Beko Pamplona | Servitec Nafarroa',
    description: 'Técnico Beko en Pamplona y Navarra. Reparamos lavadoras, frigoríficos, lavavajillas Beko y más. Servicio el mismo día. Llama: 634 006 304.',
    h1: 'Servicio técnico Beko en Pamplona',
    intro: 'Beko es una marca turca de gran calidad-precio con cada vez más presencia en los hogares navarros. En Servitec Nafarroa reparamos electrodomésticos Beko en Pamplona y toda Navarra. Conocemos bien sus modelos más vendidos y tenemos acceso a repuestos originales para una reparación rápida.',
    electrodomesticos: [
      'Lavadoras Beko',
      'Frigoríficos Beko',
      'Lavavajillas Beko',
      'Hornos Beko',
      'Microondas Beko',
      'Secadoras Beko',
    ],
    specialties: [
      'Reparación de lavadoras Beko con tecnología SteamCure',
      'Diagnóstico en frigoríficos Beko con NeoFrost',
      'Reparación de lavavajillas Beko HygieniX',
      'Solución de errores E1-E7 en electrodomésticos Beko',
    ],
    faq: [
      {
        q: '¿Reparáis electrodomésticos Beko en Pamplona?',
        a: 'Sí, Beko es una de las marcas más solicitadas. Disponemos de repuestos y experiencia con toda la gama Beko.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Beko en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones Beko suelen estar entre 55 € y 130 €, siendo una de las marcas con mejor relación entre coste de reparación y precio del aparato nuevo.',
      },
      {
        q: '¿Merece la pena reparar un Beko o es mejor comprarlo nuevo?',
        a: 'Depende de la antigüedad y la avería. Para aparatos de menos de 7 años, la reparación casi siempre es rentable. Te asesoramos sin compromiso.',
      },
    ],
  },
  {
    slug: 'zanussi',
    nombre: 'Zanussi',
    title: 'Servicio Técnico Zanussi Pamplona | Servitec Nafarroa',
    description: 'Técnico Zanussi en Pamplona y Navarra. Reparamos lavadoras, lavavajillas y electrodomésticos Zanussi. 365 días. Llama: 634 006 304.',
    h1: 'Servicio técnico Zanussi en Pamplona',
    intro: 'Zanussi es una marca italiana del grupo Electrolux con larga trayectoria en el mercado español. En Servitec Nafarroa reparamos electrodomésticos Zanussi en Pamplona y toda Navarra. La tecnología Zanussi comparte plataforma con Electrolux y AEG, lo que nos permite diagnósticos precisos y reparaciones eficientes.',
    electrodomesticos: [
      'Lavadoras Zanussi',
      'Lavavajillas Zanussi',
      'Frigoríficos Zanussi',
      'Hornos Zanussi',
      'Secadoras Zanussi',
    ],
    specialties: [
      'Reparación de lavadoras Zanussi ZWF y ZWT',
      'Diagnóstico en lavavajillas Zanussi ZDT',
      'Sustitución de resistencias en hornos Zanussi',
      'Solución de errores E10, E20, E40 en lavadoras Zanussi',
    ],
    faq: [
      {
        q: '¿Reparáis lavadoras Zanussi con error E20?',
        a: 'Sí, el error E20 en Zanussi indica problema de desagüe. Generalmente se resuelve limpiando la bomba o revisando la manguera. Lo solucionamos en la primera visita.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Zanussi en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones Zanussi suelen estar entre 55 € y 140 €.',
      },
      {
        q: '¿Zanussi y Electrolux comparten repuestos?',
        a: 'En muchos casos sí, ya que pertenecen al mismo grupo. Esto facilita encontrar piezas y agiliza la reparación.',
      },
    ],
  },
  {
    slug: 'teka',
    nombre: 'Teka',
    title: 'Servicio Técnico Teka Pamplona | Servitec Nafarroa',
    description: 'Técnico Teka en Pamplona y Navarra. Reparamos hornos, campanas, placas y electrodomésticos Teka. 365 días al año. Llama: 634 006 304.',
    h1: 'Servicio técnico Teka en Pamplona',
    intro: 'Teka es una marca española con gran presencia en cocinas equipadas. En Servitec Nafarroa reparamos electrodomésticos Teka en Pamplona y toda Navarra, especialmente hornos, campanas extractoras y placas de cocción, que son los productos estrella de esta marca.',
    electrodomesticos: [
      'Hornos Teka',
      'Campanas extractoras Teka',
      'Placas vitrocerámica Teka',
      'Placas de inducción Teka',
      'Lavavajillas Teka',
      'Microondas Teka',
      'Frigoríficos Teka',
    ],
    specialties: [
      'Especialistas en hornos Teka HC y HLC',
      'Reparación de campanas Teka de isla y pared',
      'Diagnóstico en placas de inducción Teka',
      'Sustitución de motores en campanas Teka',
    ],
    faq: [
      {
        q: '¿Reparáis campanas Teka integradas en mueble?',
        a: 'Sí, reparamos campanas Teka de todos los tipos: de pared, de isla, integradas y telescópicas. Sin coste adicional por el tipo de instalación.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Teka en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones Teka suelen estar entre 55 € y 130 €.',
      },
      {
        q: '¿Tenéis repuestos para hornos Teka antiguos?',
        a: 'Tenemos acceso a repuestos Teka para modelos de hasta 12 años. Para modelos más antiguos lo consultamos bajo pedido.',
      },
    ],
  },
  {
    slug: 'edesa',
    nombre: 'Edesa',
    title: 'Servicio Técnico Edesa Pamplona | Servitec Nafarroa',
    description: 'Técnico Edesa en Pamplona y Navarra. Reparamos lavadoras, lavavajillas y electrodomésticos Edesa. Presupuesto sin compromiso. Llama: 634 006 304.',
    h1: 'Servicio técnico Edesa en Pamplona',
    intro: 'Edesa es una marca española con tradición en el norte de España y especialmente conocida en Navarra. En Servitec Nafarroa reparamos electrodomésticos Edesa en Pamplona y toda la comunidad foral. Tenemos amplia experiencia con los modelos de esta marca y acceso a repuestos para una reparación fiable.',
    electrodomesticos: [
      'Lavadoras Edesa',
      'Lavavajillas Edesa',
      'Frigoríficos Edesa',
      'Hornos Edesa',
      'Campanas Edesa',
    ],
    specialties: [
      'Reparación de lavadoras Edesa EWF y MBLC',
      'Diagnóstico en lavavajillas Edesa EDF',
      'Sustitución de resistencias en hornos Edesa',
      'Reparación de motores en campanas Edesa',
    ],
    faq: [
      {
        q: '¿Reparáis electrodomésticos Edesa en Pamplona?',
        a: 'Sí, Edesa tiene mucha presencia en Navarra y es una de las marcas que reparamos con más frecuencia en la zona.',
      },
      {
        q: '¿Cuánto cuesta reparar un electrodoméstico Edesa en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. Las reparaciones Edesa suelen estar entre 55 € y 130 €.',
      },
      {
        q: '¿Encontráis repuestos para Edesa fácilmente?',
        a: 'Sí, al pertenecer al grupo BSH, muchos repuestos son compatibles con Bosch, Balay y Siemens, lo que facilita encontrar piezas.',
      },
    ],
  },
  {
    slug: 'cata',
    nombre: 'Cata',
    title: 'Servicio Técnico Cata Pamplona | Servitec Nafarroa',
    description: 'Técnico Cata en Pamplona y Navarra. Reparamos campanas extractoras, hornos y electrodomésticos Cata. Mismo día. Llama: 634 006 304.',
    h1: 'Servicio técnico Cata en Pamplona',
    intro: 'Cata es una marca española especializada en campanas extractoras y electrodomésticos de cocina. En Servitec Nafarroa reparamos campanas, hornos y placas Cata en Pamplona y toda Navarra. Nuestra experiencia con los motores y la electrónica de Cata nos permite resolver la mayoría de averías en la primera visita.',
    electrodomesticos: [
      'Campanas extractoras Cata',
      'Hornos Cata',
      'Placas vitrocerámica Cata',
      'Placas de inducción Cata',
      'Microondas Cata',
      'Lavavajillas Cata',
    ],
    specialties: [
      'Especialistas en reparación de motores de campanas Cata',
      'Diagnóstico en campanas Cata con panel táctil',
      'Reparación de hornos Cata con pirolisis',
      'Sustitución de luces LED en campanas Cata',
    ],
    faq: [
      {
        q: '¿Reparáis campanas Cata de isla y de pared?',
        a: 'Sí, reparamos todos los modelos Cata: campanas de pared, de isla, telescópicas e integradas. También las campanas con control remoto o táctil.',
      },
      {
        q: '¿Cuánto cuesta reparar una campana Cata en Pamplona?',
        a: 'El diagnóstico cuesta 40 € + IVA. La reparación de campanas Cata suele estar entre 55 € y 120 €. El cambio de motor es la reparación más habitual.',
      },
      {
        q: '¿Tenéis repuestos Cata originales?',
        a: 'Sí, trabajamos con repuestos originales Cata. Al ser una marca española, la logística de repuestos es ágil y solemos tener las piezas más habituales disponibles.',
      },
    ],
  },
]
