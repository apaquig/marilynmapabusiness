// src/data/services.ts
// Los 14 servicios reales de MAPA Business & Financial Services LLC

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: string;
  metaTitle: (city: string) => string;
  metaDescription: (city: string) => string;
  h1: (city: string) => string;
  intro: (city: string) => string;
  keywords: string[];
  faqs: FAQ[];
  schemaType: string; // FASE 2: Tipo de esquema específico para cada servicio
}

export const services: Service[] = [
  {
    slug: "notaria",
    name: "Notaría Pública",
    icon: "⚖️",
    metaTitle: (city) => `Notaria Pública en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Notaria Pública certificada en ${city}, New Jersey. Autenticación de documentos, contratos y declaraciones juradas. Llama a Marilyn Paladinez: (862) 622-8339.`,
    h1: (city) => `Notaria Pública en ${city}, New Jersey`,
    intro: (city) => `¿Necesitas una Notaria Pública en ${city}, NJ? Marilyn Paladinez es Notaria Pública certificada en New Jersey. Autenticamos tus documentos legales rápido y con confianza.`,
    keywords: ["notaria publica", "notary public", "documentos legales", "apostilla"],
    faqs: [
      { question: `¿Dónde puedo encontrar una notaria pública en ${"{city}"}, NJ?`, answer: "En MAPA Business & Financial Services LLC atendemos en Newark y toda el área de New Jersey. Llámanos al (862) 622-8339 para una cita." },
      { question: "¿Cuánto cuesta el servicio de notaria en New Jersey?", answer: "Nuestras tarifas son accesibles. Contáctanos para un presupuesto según el tipo de documento que necesitas." },
    ],
    schemaType: "Notary",
  },
  {
    slug: "traducciones",
    name: "Traducciones Certificadas",
    icon: "🌐",
    metaTitle: (city) => `Traducciones Certificadas en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Traducciones certificadas español-inglés en ${city}, New Jersey. Documentos oficiales aceptados por instituciones y agencias gubernamentales. ☎ (862) 622-8339.`,
    h1: (city) => `Traducciones Certificadas en ${city}, New Jersey`,
    intro: (city) => `Servicio de traducción certificada en ${city}, NJ. Traducimos tus documentos del español al inglés y viceversa con validez oficial ante instituciones gubernamentales y legales.`,
    keywords: ["traducciones certificadas", "traduccion documentos", "spanish english translation", "traduccion oficial"],
    faqs: [
      { question: "¿Qué documentos puedo traducir?", answer: "Actas de nacimiento, títulos, contratos, documentos migratorios y cualquier documento oficial que necesite traducción certificada." },
      { question: `¿Las traducciones son aceptadas en ${"{city}"}, NJ?`, answer: "Sí, nuestras traducciones son certificadas y aceptadas por agencias gubernamentales, cortes y escuelas en todo New Jersey." },
    ],
    schemaType: "TranslationService",
  },
  {
    slug: "poderes-notariales",
    name: "Poderes Notariales",
    icon: "📜",
    metaTitle: (city) => `Poderes Notariales en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Redacción y notarización de poderes notariales en ${city}, New Jersey. Para trámites bancarios, inmobiliarios y legales. Marilyn Paladinez: (862) 622-8339.`,
    h1: (city) => `Poderes Notariales en ${city}, New Jersey`,
    intro: (city) => `¿Necesitas otorgar un poder notarial en ${city}, NJ? Te ayudamos a redactar y notarizar poderes para representación legal, trámites bancarios, venta de propiedades y más.`,
    keywords: ["poder notarial", "power of attorney", "representacion legal", "poder legal"],
    faqs: [
      { question: "¿Para qué sirve un poder notarial?", answer: "Permite que otra persona actúe en tu nombre en trámites legales, bancarios, inmobiliarios o migratorios cuando tú no puedes estar presente." },
      { question: `¿Dónde tramito un poder notarial en ${"{city}"}, NJ?`, answer: "En MAPA Business te ayudamos a redactar y notarizar tu poder notarial de forma rápida. Llámanos al (862) 622-8339." },
    ],
    schemaType: "LegalService",
  },
  {
    slug: "permisos-de-trabajo",
    name: "Permisos de Trabajo",
    icon: "📋",
    metaTitle: (city) => `Permisos de Trabajo en ${city}, NJ | I-765 | MAPA Business`,
    metaDescription: (city) => `Solicitud de permiso de trabajo I-765 en ${city}, New Jersey. Gestión completa, seguimiento y renovaciones. Marilyn Paladinez te ayuda: (862) 622-8339.`,
    h1: (city) => `Permisos de Trabajo (I-765) en ${city}, New Jersey`,
    intro: (city) => `¿Necesitas tu permiso de trabajo en ${city}, NJ? En MAPA Business gestionamos tu solicitud I-765 de principio a fin — llenado, revisión, envío y seguimiento hasta que lo obtienes.`,
    keywords: ["permiso de trabajo", "I-765", "work permit", "autorización de empleo", "EAD"],
    faqs: [
      { question: "¿Qué es el formulario I-765?", answer: "Es la solicitud de Autorización de Empleo (EAD) que permite a los migrantes trabajar legalmente en los Estados Unidos." },
      { question: `¿Cuánto tarda el permiso de trabajo en New Jersey?`, answer: "El tiempo varía, pero actualmente USCIS procesa en 3-6 meses. Te ayudamos a presentar correctamente para evitar demoras." },
    ],
    schemaType: "LegalService",
  },
  {
    slug: "licencias-de-conducir",
    name: "Licencias de Conducir",
    icon: "🚗",
    metaTitle: (city) => `Licencia de Conducir en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Orientación para obtener tu licencia de conducir en ${city}, New Jersey. Documentación requerida y proceso paso a paso. Llama: (862) 622-8339.`,
    h1: (city) => `Licencia de Conducir en ${city}, New Jersey`,
    intro: (city) => `Te ayudamos a obtener tu licencia de conducir en ${city}, NJ. Te explicamos qué documentos necesitas, cómo prepararte para el examen y te acompañamos en el proceso.`,
    keywords: ["licencia de conducir", "driver license", "NJ MVC", "licencia NJ", "manejar legal"],
    faqs: [
      { question: "¿Puede un migrante obtener licencia de conducir en NJ?", answer: "Sí. New Jersey permite a migrantes sin status legal obtener una licencia de conducir con los documentos correctos bajo la ley de licencias inclusivas." },
      { question: "¿Qué documentos necesito para la licencia en NJ?", answer: "Necesitas 6 puntos de identificación, comprobante de domicilio en NJ y número de seguro social o ITIN. Te ayudamos a reunir todo." },
    ],
    schemaType: "LegalService",
  },
  {
    slug: "itin",
    name: "ITIN",
    icon: "🔢",
    metaTitle: (city) => `ITIN en ${city}, NJ | Número de Contribuyente | MAPA Business`,
    metaDescription: (city) => `Tramitación de ITIN en ${city}, New Jersey. Número de Identificación Personal del Contribuyente para migrantes. Sin seguro social. ☎ (862) 622-8339.`,
    h1: (city) => `ITIN en ${city}, New Jersey`,
    intro: (city) => `¿Necesitas tu ITIN en ${city}, NJ? El ITIN es el número que te permite pagar impuestos, abrir cuentas bancarias y acceder a crédito sin número de seguro social. Te ayudamos a tramitarlo.`,
    keywords: ["ITIN", "numero de contribuyente", "Individual Taxpayer Identification Number", "taxes sin seguro social"],
    faqs: [
      { question: "¿Para qué sirve el ITIN?", answer: "Sirve para pagar impuestos, abrir cuentas bancarias, obtener crédito, tramitar ITIN de dependientes y aplicar a ciertos préstamos." },
      { question: `¿Cómo obtengo mi ITIN en ${"{city}"}, NJ?`, answer: "En MAPA Business somos Acceptance Agents certificados. Te ayudamos a completar el formulario W-7 y enviarlo correctamente al IRS." },
    ],
    schemaType: "TaxService",
  },
  {
    slug: "taxes",
    name: "Taxes / Impuestos",
    icon: "💰",
    metaTitle: (city) => `Taxes en ${city}, NJ | Declaración de Impuestos | MAPA Business`,
    metaDescription: (city) => `Preparación de taxes en ${city}, New Jersey. Declaración de impuestos federales y estatales para individuos y negocios. Marilyn Paladinez: (862) 622-8339.`,
    h1: (city) => `Preparación de Taxes en ${city}, New Jersey`,
    intro: (city) => `Servicio de preparación de impuestos en ${city}, NJ. Declaramos tus taxes federales y estatales correctamente para que recibas tu reembolso máximo y evites problemas con el IRS.`,
    keywords: ["taxes", "impuestos", "declaracion de impuestos", "tax return", "reembolso de taxes"],
    faqs: [
      { question: "¿Puede un migrante hacer su declaración de taxes en NJ?", answer: "Sí. Todos los que trabajan en EE.UU. deben declarar, sin importar su estatus migratorio. Se puede hacer con ITIN si no tienes seguro social." },
      { question: "¿Cuánto cuesta preparar los taxes en New Jersey?", answer: "Nuestras tarifas son accesibles. Contáctanos al (862) 622-8339 para una cotización según tu situación." },
    ],
    schemaType: "TaxService",
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    icon: "📊",
    metaTitle: (city) => `Bookkeeping en ${city}, NJ | Contabilidad para Negocios | MAPA Business`,
    metaDescription: (city) => `Servicio de bookkeeping en ${city}, New Jersey. Contabilidad mensual, estados financieros y registros para tu negocio hispano. ☎ (862) 622-8339.`,
    h1: (city) => `Bookkeeping en ${city}, New Jersey`,
    intro: (city) => `¿Tienes un negocio en ${city}, NJ? Te ofrecemos bookkeeping mensual profesional — registramos tus ingresos, gastos y preparamos estados financieros claros para que tu negocio esté al día.`,
    keywords: ["bookkeeping", "contabilidad", "contadora", "estados financieros", "libros contables"],
    faqs: [
      { question: "¿Qué incluye el servicio de bookkeeping?", answer: "Incluye registro mensual de ingresos y gastos, conciliación bancaria, estados financieros y preparación de libros para tu contador o para taxes." },
      { question: `¿Por qué necesito bookkeeping para mi negocio en ${"{city}"}?`, answer: "Para conocer la salud financiera de tu negocio, prepararte para taxes, aplicar a préstamos y cumplir con las regulaciones de NJ." },
    ],
    schemaType: "FinancialService",
  },
  {
    slug: "seguros-de-auto",
    name: "Seguros de Auto",
    icon: "🚙",
    metaTitle: (city) => `Seguros de Auto en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Seguros de automóvil accesibles en ${city}, New Jersey. Para migrantes con o sin licencia local. Cotización gratis. ☎ (862) 622-8339.`,
    h1: (city) => `Seguros de Auto en ${city}, New Jersey`,
    intro: (city) => `Conseguimos el mejor seguro de auto para ti en ${city}, NJ. Trabajamos con múltiples aseguradoras para encontrar la cobertura que necesitas al precio más accesible, incluso sin licencia de NJ.`,
    keywords: ["seguro de auto", "car insurance", "seguro de carro", "auto insurance NJ", "seguro migrantes"],
    faqs: [
      { question: "¿Puedo asegurar mi auto sin licencia de NJ?", answer: "Sí. Hay opciones de seguro disponibles para conductores con licencia extranjera o en proceso de obtener la licencia de NJ." },
      { question: `¿Cuánto cuesta el seguro de auto en ${"{city}"}, NJ?`, answer: "El precio varía según tu vehículo, historial y cobertura. Te conseguimos varias cotizaciones para que elijas la mejor opción." },
    ],
    schemaType: "InsuranceAgency",
  },
  {
    slug: "seguros-de-salud",
    name: "Seguros de Salud",
    icon: "🏥",
    metaTitle: (city) => `Seguros de Salud en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Asesoría para seguros de salud en ${city}, New Jersey. Planes accesibles para migrantes y familias. Marilyn Paladinez: (862) 622-8339.`,
    h1: (city) => `Seguros de Salud en ${city}, New Jersey`,
    intro: (city) => `Te ayudamos a encontrar el seguro de salud ideal en ${city}, NJ. Evaluamos tu situación migratoria y económica para conectarte con el plan de salud más adecuado para ti y tu familia.`,
    keywords: ["seguro de salud", "health insurance", "seguro medico", "plan de salud NJ", "seguro familia"],
    faqs: [
      { question: "¿Pueden los migrantes obtener seguro de salud en NJ?", answer: "Sí. Hay opciones disponibles según tu estatus. Pueden incluir Medicaid, marketplace o planes privados. Te asesoramos sin costo." },
      { question: "¿Cuándo puedo inscribirme en un plan de salud en NJ?", answer: "New Jersey tiene inscripción abierta todo el año para ciertos programas. Te ayudamos a determinar cuándo y cómo inscribirte." },
    ],
    schemaType: "InsuranceAgency",
  },
  {
    slug: "seguros-de-vida",
    name: "Seguros de Vida",
    icon: "🛡️",
    metaTitle: (city) => `Seguros de Vida en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Seguros de vida para migrantes en ${city}, New Jersey. Protege el futuro de tu familia. Planes accesibles. Marilyn Paladinez: (862) 622-8339.`,
    h1: (city) => `Seguros de Vida en ${city}, New Jersey`,
    intro: (city) => `Protege el futuro de tu familia con un seguro de vida en ${city}, NJ. Te ayudamos a encontrar el plan ideal según tu edad, necesidades y presupuesto para que tu familia esté protegida.`,
    keywords: ["seguro de vida", "life insurance", "seguro vida migrantes", "proteccion familiar"],
    faqs: [
      { question: "¿Pueden los migrantes obtener seguro de vida en NJ?", answer: "Sí. Muchas aseguradoras ofrecen planes de vida para migrantes con o sin seguro social. Te ayudamos a encontrar el más adecuado." },
      { question: "¿Cuánto cuesta un seguro de vida en New Jersey?", answer: "Los planes pueden empezar desde $20 al mes dependiendo de tu edad y cobertura. Te conseguimos varias cotizaciones." },
    ],
    schemaType: "InsuranceAgency",
  },
  {
    slug: "doble-nacionalidad",
    name: "Doble Nacionalidad",
    icon: "🌍",
    metaTitle: (city) => `Doble Nacionalidad en ${city}, NJ | MAPA Business`,
    metaDescription: (city) => `Asesoría para doble nacionalidad en ${city}, New Jersey. Gestión ante consulados y embajadas. Marilyn Paladinez: (862) 622-8339.`,
    h1: (city) => `Doble Nacionalidad en ${city}, New Jersey`,
    intro: (city) => `¿Quieres obtener la doble nacionalidad desde ${city}, NJ? Te asesoramos en el proceso completo — documentación requerida, gestión ante consulados y embajadas de tu país de origen.`,
    keywords: ["doble nacionalidad", "dual citizenship", "doble ciudadania", "pasaporte extranjero NJ"],
    faqs: [
      { question: "¿Cómo obtengo la doble nacionalidad desde New Jersey?", answer: "El proceso varía según tu país de origen. Te ayudamos a identificar los requisitos y a gestionar la documentación necesaria ante el consulado correspondiente." },
      { question: "¿Cuánto tarda el proceso de doble nacionalidad?", answer: "Depende del país de origen. Te orientamos sobre los tiempos estimados y los pasos a seguir para tu caso específico." },
    ],
    schemaType: "LegalService",
  },
  {
    slug: "divorcios",
    name: "Divorcios",
    icon: "⚖️",
    metaTitle: (city) => `Divorcios en ${city}, NJ | Asistencia Legal | MAPA Business`,
    metaDescription: (city) => `Asistencia en proceso de divorcio sin disputa en ${city}, New Jersey. Preparación de documentos y orientación legal. ☎ (862) 622-8339.`,
    h1: (city) => `Divorcios en ${city}, New Jersey`,
    intro: (city) => `Te ayudamos con el proceso de divorcio sin disputa en ${city}, NJ. Preparamos la documentación necesaria y te orientamos paso a paso para que el proceso sea lo más sencillo posible.`,
    keywords: ["divorcio", "divorce NJ", "divorcio sin disputa", "separacion legal NJ"],
    faqs: [
      { question: "¿Cuánto tarda un divorcio en New Jersey?", answer: "Un divorcio sin disputa puede resolverse en 3-6 meses en NJ. Te ayudamos a preparar todos los documentos correctamente para agilizar el proceso." },
      { question: "¿Necesito abogado para divorciarme en NJ?", answer: "Para divorcios sin disputa puedes presentar sin abogado. Nosotros te ayudamos a preparar y organizar toda la documentación requerida." },
    ],
    schemaType: "LegalService",
  },
  {
    slug: "matrimonios",
    name: "Matrimonios",
    icon: "💍",
    metaTitle: (city) => `Matrimonios en ${city}, NJ | Documentos y Apostillas | MAPA Business`,
    metaDescription: (city) => `Orientación para matrimonio civil en ${city}, New Jersey. Preparación de documentos, apostillas y registros en el extranjero. ☎ (862) 622-8339.`,
    h1: (city) => `Matrimonios en ${city}, New Jersey`,
    intro: (city) => `¿Vas a casarte en ${city}, NJ? Te ayudamos con todos los documentos necesarios para tu matrimonio civil — desde la licencia de matrimonio hasta apostillas y registros en tu país de origen.`,
    keywords: ["matrimonio civil", "licencia de matrimonio NJ", "casarse en NJ", "apostilla matrimonio"],
    faqs: [
      { question: "¿Qué documentos necesito para casarme en New Jersey?", answer: "Necesitas identificación válida, acta de divorcio si aplica y en algunos casos documentos apostillados. Te ayudamos a reunir todo." },
      { question: "¿Puedo registrar mi matrimonio de NJ en mi país de origen?", answer: "Sí. Te ayudamos a apostillar el acta de matrimonio de NJ para que sea válida en tu país de origen." },
    ],
    schemaType: "LegalService",
  },
];
