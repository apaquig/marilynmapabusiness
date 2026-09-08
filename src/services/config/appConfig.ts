/**
 * Central Configuration for MAPA Business & Financial Services LLC
 * Appointment & Booking Engine
 */

export interface BookingServiceItem {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  duration: number; // in minutes (15, 30, 45, 60, 90)
  icon: string;
  status: 'active' | 'inactive';
  allowedTypes: ('in_person' | 'phone' | 'virtual')[];
  calendarId?: string | null;
  assignedStaff?: string;
  crmTag: string;
  isPopular?: boolean;
}

export interface CityOption {
  id: string;
  name: string;
  state: string;
  isPhysicalOffice: boolean;
  notes: string;
}

export const APP_CONFIG = {
  business: {
    name: "MAPA Business & Financial Services LLC",
    founder: "Marilyn Paladinez",
    phone: "(862) 622-8339",
    phoneSecondary: "(973) 840-0014",
    phoneHref: "18626228339",
    phoneSecondaryHref: "19738400014",
    email: "info@marilynmapabusiness.com",
    address: "20 Bloomfield Pl, Newark, NJ 07104",
    defaultState: "NJ",
    defaultCountry: "US",
  },
  scheduling: {
    timezone: "America/New_York",
    defaultCalendarId: "fSDS40eiTiXyNcvQ0sss",
    defaultLanguage: "es" as const,
    secondaryLanguage: "en" as const,
    slotIntervalMinutes: 30,
    bufferTimeMinutes: 15,
    maxAdvanceDays: 45,
    minAdvanceHours: 2, // minimum hours in advance to book
    workingHours: {
      // 0: Sun, 1: Mon, ..., 6: Sat
      1: { open: "09:00", close: "18:00" }, // Monday
      2: { open: "09:00", close: "18:00" }, // Tuesday
      3: { open: "09:00", close: "18:00" }, // Wednesday
      4: { open: "09:00", close: "18:00" }, // Thursday
      5: { open: "09:00", close: "18:00" }, // Friday
      6: { open: "10:00", close: "16:00" }, // Saturday
      0: null, // Sunday closed
    },
    blockedDates: [
      // YYYY-MM-DD for holidays
      "2026-11-26", // Thanksgiving
      "2026-12-25", // Christmas
      "2027-01-01", // New Year
    ]
  },
  cities: [
    {
      id: "newark",
      name: "Newark, NJ",
      state: "NJ",
      isPhysicalOffice: true,
      notes: "Sede principal con atención presencial en 20 Bloomfield Pl."
    },
    {
      id: "elizabeth",
      name: "Elizabeth, NJ",
      state: "NJ",
      isPhysicalOffice: false,
      notes: "Atendemos clientes de Elizabeth de forma presencial en Newark (a 10-15 min) o vía telefónica/virtual."
    },
    {
      id: "paterson",
      name: "Paterson, NJ",
      state: "NJ",
      isPhysicalOffice: false,
      notes: "Atendemos clientes de Paterson presencialmente en Newark o vía telefónica/virtual."
    },
    {
      id: "otra",
      name: "Otra Ciudad en NJ / USA",
      state: "NJ",
      isPhysicalOffice: false,
      notes: "Atención virtual o telefónica para clientes en New Jersey y resto de EE.UU."
    }
  ] as CityOption[],
  services: [
    {
      id: "srv_not_sure",
      name: "No estoy seguro qué servicio necesito",
      nameEn: "Not sure what service I need",
      slug: "no-estoy-seguro",
      description: "Cuéntanos brevemente tu situación y nuestro equipo te orientará hacia la mejor solución.",
      descriptionEn: "Briefly tell us your situation and our team will guide you to the right solution.",
      duration: 30,
      icon: "💡",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-consultation-unsure",
      isPopular: true
    },
    {
      id: "srv_itin",
      name: "Trámite o Renovación de ITIN",
      nameEn: "ITIN Application & Renewal",
      slug: "itin",
      description: "Solicitud o renovación de número tributario ITIN ante el IRS para personas sin Seguro Social.",
      descriptionEn: "IRS ITIN application or renewal for individuals without a Social Security Number.",
      duration: 45,
      icon: "📄",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-itin",
      isPopular: true
    },
    {
      id: "srv_taxes",
      name: "Preparación de Taxes (Impuestos)",
      nameEn: "Tax Preparation (Personal & Business)",
      slug: "taxes",
      description: "Declaración de impuestos personales y comerciales para individuos, trabajadores independientes y negocios.",
      descriptionEn: "Personal and business tax return preparation for individuals, 1099 workers, and LLCs.",
      duration: 60,
      icon: "💰",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-taxes",
      isPopular: true
    },
    {
      id: "srv_notary",
      name: "Notary Public / Notaría en Español",
      nameEn: "Notary Public Services",
      slug: "notaria",
      description: "Notarización oficial de firmas, declaraciones juradas, contratos y cartas de poder en New Jersey.",
      descriptionEn: "Official notarization of signatures, affidavits, contracts, and powers of attorney in NJ.",
      duration: 30,
      icon: "✒️",
      status: "active",
      allowedTypes: ["in_person"], // Notary typically requires in-person presence
      crmTag: "service-notary",
      isPopular: true
    },
    {
      id: "srv_llc",
      name: "Creación de Empresas / LLC",
      nameEn: "LLC & Business Formation",
      slug: "creacion-empresas",
      description: "Registro de compañías ante el Estado de NJ, tramitación de EIN con el IRS y asesoría inicial.",
      descriptionEn: "LLC registration with the State of NJ, Federal EIN issuance, and business setup.",
      duration: 60,
      icon: "🏢",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-llc",
      isPopular: true
    },
    {
      id: "srv_bookkeeping",
      name: "Bookkeeping & Contabilidad Mensual",
      nameEn: "Bookkeeping & Accounting",
      slug: "bookkeeping",
      description: "Organización de ingresos, gastos, conciliaciones bancarias y estados financieros para negocios.",
      descriptionEn: "Monthly bookkeeping, expense tracking, bank reconciliations, and financial reporting.",
      duration: 45,
      icon: "📊",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-bookkeeping"
    },
    {
      id: "srv_translations",
      name: "Traducciones Certificadas",
      nameEn: "Certified Translations",
      slug: "traducciones",
      description: "Traducción certificada de actas de nacimiento, matrimonio, títulos y certificados (inglés-español).",
      descriptionEn: "Certified translations of birth certificates, marriage licenses, and official records.",
      duration: 30,
      icon: "🌐",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-translations"
    },
    {
      id: "srv_work_permits",
      name: "Permisos de Trabajo (Asistencia Documental)",
      nameEn: "Work Permit Assistance",
      slug: "permisos-de-trabajo",
      description: "Asistencia y organización documental para solicitudes o renovaciones de autorización de empleo.",
      descriptionEn: "Document preparation and assistance for work permit (EAD) applications and renewals.",
      duration: 45,
      icon: "💼",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-work-permits"
    },
    {
      id: "srv_license",
      name: "Licencias de Conducir NJ MVC",
      nameEn: "Driver License Assistance",
      slug: "licencias-de-conducir",
      description: "Organización de los 6 puntos de identificación y requisitos exigidos por el NJ Motor Vehicle Commission.",
      descriptionEn: "Guidance and document checklist for NJ MVC 6-point driver license requirements.",
      duration: 30,
      icon: "🚗",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-driver-license"
    },
    {
      id: "srv_insurance",
      name: "Seguros (Auto, Salud, Vida)",
      nameEn: "Insurance Services (Auto, Health, Life)",
      slug: "seguros",
      description: "Cotizaciones y asesoría en pólizas de seguro de auto, seguro médico (Obamacare/NJ) y seguro de vida.",
      descriptionEn: "Quotes and guidance for auto insurance, health insurance, and life insurance policies.",
      duration: 30,
      icon: "🛡️",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-insurance"
    },
    {
      id: "srv_personal_docs",
      name: "Documentos Personales & Cartas de Poder",
      nameEn: "Personal Documents & POA",
      slug: "poderes-notariales",
      description: "Preparación de poderes para trámites en EE.UU. o en tu país de origen, autorizaciones y cartas formales.",
      descriptionEn: "Preparation of power of attorney documents, travel authorizations, and formal letters.",
      duration: 45,
      icon: "📑",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-personal-docs"
    },
    {
      id: "srv_business_services",
      name: "Servicios Administrativos para Negocios",
      nameEn: "Business Administrative Services",
      slug: "servicios-empresariales",
      description: "Licencias municipales, reportes anuales de NJ, contratos comerciales y trámites administrativos.",
      descriptionEn: "Municipal licenses, NJ annual reports, commercial contracts, and business filings.",
      duration: 45,
      icon: "📈",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-business-admin"
    },
    {
      id: "srv_other",
      name: "Otro Trámite o Consulta",
      nameEn: "Other Inquiry or Service",
      slug: "otro-tramite",
      description: "Si tienes un trámite especial no listado arriba, cuéntanos tus necesidades para evaluarlo.",
      descriptionEn: "If you need assistance with an unlisted administrative procedure, let us know.",
      duration: 30,
      icon: "📌",
      status: "active",
      allowedTypes: ["in_person", "phone", "virtual"],
      crmTag: "service-other"
    }
  ] as BookingServiceItem[],
  appointmentTypeDetails: {
    in_person: {
      title: "Cita Presencial",
      titleEn: "In-Person Appointment",
      desc: "Te esperamos en nuestra oficina en 20 Bloomfield Pl, Newark, NJ 07104.",
      descEn: "We welcome you at our main office: 20 Bloomfield Pl, Newark, NJ 07104.",
      icon: "🏢",
      badge: "Recomendado para notarizaciones y firma de documentos"
    },
    phone: {
      title: "Cita Telefónica",
      titleEn: "Phone Call Appointment",
      desc: "Marilyn o nuestro equipo te llamará puntualmente al número que indiques.",
      descEn: "Marilyn or our team will call you promptly at the phone number provided.",
      icon: "📞",
      badge: "Rápido y conveniente sin desplazarte"
    },
    virtual: {
      title: "Cita Virtual (Videollamada)",
      titleEn: "Virtual Video Meeting",
      desc: "Recibirás un enlace por correo y WhatsApp para conectarte por Google Meet o Zoom.",
      descEn: "You will receive a Google Meet / Zoom link via email and WhatsApp.",
      icon: "💻",
      badge: "Ideal para compartir pantalla y revisar documentos"
    }
  }
};
