// src/data/posts.ts
// Initial blog posts data with Spanish and English translations

export interface Post {
  slug: string;
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  date: string;
  author: string;
  category: {
    es: string;
    en: string;
  };
  categoryKey: string;
  image: string;
  readingTime: string;
  tip?: {
    es: string;
    en: string;
  };
  content: {
    es: string;
    en: string;
  };
}

export const posts: Post[] = [
  {
    slug: "guia-itin-new-jersey",
    title: {
      es: "Cómo obtener o renovar tu número ITIN en New Jersey: Guía Completa",
      en: "How to Obtain or Renew Your ITIN Number in New Jersey: Complete Guide"
    },
    excerpt: {
      es: "Descubre el proceso paso a paso para solicitar o renovar tu número ITIN ante el IRS sin cometer errores que demoren tu trámite.",
      en: "Discover the step-by-step process to apply for or renew your ITIN number with the IRS without mistakes that delay your process."
    },
    date: "2026-06-05",
    author: "Marilyn Paladinez",
    category: {
      es: "Impuestos & ITIN",
      en: "Taxes & ITIN"
    },
    categoryKey: "itin",
    image: "/images/blog/itin-guide.png",
    readingTime: "5 min",
    tip: {
      es: "Nunca envíes tus documentos originales por correo al IRS o agencias estatales si puedes evitarlo. Al acudir con un Agente CAA autorizado como nosotros, validamos tus documentos cara a cara y tú conservas tus originales intactos en tu bolsillo.",
      en: "Never mail your original documents to the IRS or state agencies if you can avoid it. By consulting with a Certified Acceptance Agent (CAA) like us, we verify your identity documents in person, allowing you to keep your originals safe in your possession."
    },
    content: {
      es: `
        <h2>¿Qué es el número ITIN y para qué sirve?</h2>
        <p>El <strong>Individual Taxpayer Identification Number (ITIN)</strong> es un número de tramitación de impuestos emitido por el Servicio de Impuestos Internos (IRS). Está diseñado específicamente para personas que deben declarar impuestos en los Estados Unidos pero no son elegibles para obtener un número de Seguro Social (SSN).</p>
        <p>Tener un ITIN activo es fundamental por varias razones clave:</p>
        <ul>
          <li><strong>Declarar tus Taxes:</strong> Te permite cumplir con tus obligaciones tributarias federales.</li>
          <li><strong>Créditos Fiscales:</strong> Te permite reclamar créditos tributarios, como el Crédito Tributario por Hijos (Child Tax Credit).</li>
          <li><strong>Historial Crediticio:</strong> Muchas instituciones financieras te permiten abrir cuentas bancarias o solicitar tarjetas de crédito y préstamos usando tu ITIN.</li>
          <li><strong>Comprar Vivienda:</strong> Es un requisito común al solicitar préstamos hipotecarios para ITIN.</li>
        </ul>

        <h2>¿Quiénes deben solicitar un ITIN?</h2>
        <p>Debes solicitar un número ITIN si no tienes un Seguro Social y te encuentras en alguna de las siguientes situaciones:</p>
        <ol>
          <li>Eres un extranjero no residente que debe presentar una declaración de impuestos estadounidense.</li>
          <li>Eres un extranjero residente que presenta una declaración de impuestos basándose en los días que estuviste en el país.</li>
          <li>Eres dependiente o cónyuge de un ciudadano estadounidense o de un extranjero residente.</li>
          <li>Eres cónyuge o dependiente de un extranjero no residente con visa.</li>
        </ol>

        <h2>Pasos para Solicitar el ITIN por Primera Vez</h2>
        <p>Para obtener tu número ITIN, debes presentar tres elementos clave al IRS:</p>
        <h3>1. El Formulario W-7</h3>
        <p>Es la "Solicitud de Número de Identificación Personal del Contribuyente del Servicio de Impuestos Internos". Debes completarlo con tu información personal exacta tal como aparece en tus documentos oficiales.</p>
        <h3>2. Tu Declaración de Impuestos Federales (Taxes)</h3>
        <p>Generalmente, el IRS requiere que adjuntes una declaración de impuestos federales completada a tu formulario W-7. Existen excepciones muy específicas, pero la regla general es que el ITIN se tramita junto a la declaración anual de impuestos.</p>
        <h3>3. Documentos de Identidad Originales</h3>
        <p>Debes demostrar tu identidad y tu condición de extranjero. El documento más aceptado es tu <strong>pasaporte vigente</strong>, ya que es el único documento que el IRS acepta por sí solo para probar ambos criterios. Si no tienes pasaporte, deberás enviar una combinación de otros documentos (como acta de nacimiento y matrícula consular) certificados oficialmente.</p>

        <h2>¿Cómo Renovar un ITIN Vencido?</h2>
        <p>Los números de ITIN vencen si no se usan en una declaración de impuestos federales al menos una vez en tres años consecutivos. Si tu ITIN ha vencido y necesitas presentar una declaración, debes renovarlo presentando un formulario W-7 nuevo con tus documentos de identidad vigentes. La gran ventaja es que para las renovaciones <strong>no es obligatorio</strong> adjuntar una declaración de impuestos.</p>

        <h2>La Importancia de un Agente de Aceptación Autorizado (CAA)</h2>
        <p>Enviar tus documentos originales (como tu pasaporte) por correo al IRS puede ser arriesgado. Para evitar perder tu pasaporte, puedes acudir con un <strong>Certifying Acceptance Agent (CAA)</strong> como MAPA Business. Nosotros estamos autorizados por el IRS para verificar tus documentos de identidad originales en persona, hacer copias certificadas y enviarlas en tu nombre, permitiéndote conservar tu pasaporte original contigo en todo momento.</p>
      `,
      en: `
        <h2>What is an ITIN number and what is it for?</h2>
        <p>The <strong>Individual Taxpayer Identification Number (ITIN)</strong> is a tax processing number issued by the Internal Revenue Service (IRS). It is designed specifically for individuals who are required to file taxes in the United States but are not eligible for a Social Security Number (SSN).</p>
        <p>Having an active ITIN is essential for several key reasons:</p>
        <ul>
          <li><strong>Filing Taxes:</strong> It allows you to comply with your federal tax obligations.</li>
          <li><strong>Tax Credits:</strong> It enables you to claim tax credits, such as the Child Tax Credit.</li>
          <li><strong>Credit History:</strong> Many financial institutions allow you to open bank accounts or apply for credit cards and loans using your ITIN.</li>
          <li><strong>Buying a Home:</strong> It is a common requirement when applying for ITIN mortgage loans.</li>
        </ul>

        <h2>Who should apply for an ITIN?</h2>
        <p>You must apply for an ITIN if you do not have a Social Security Number and fall into any of the following categories:</p>
        <ol>
          <li>Non-resident alien who must file a U.S. tax return.</li>
          <li>Resident alien filing a tax return based on the number of days spent in the country.</li>
          <li>Dependent or spouse of a U.S. citizen or resident alien.</li>
          <li>Spouse or dependent of a non-resident alien visa holder.</li>
        </ol>

        <h2>Steps to Apply for an ITIN for the First Time</h2>
        <p>To obtain your ITIN number, you must submit three key elements to the IRS:</p>
        <h3>1. Form W-7</h3>
        <p>This is the "Application for IRS Individual Taxpayer Identification Number". You must fill it out with your exact personal information as it appears on your official documents.</p>
        <h3>2. Your Federal Tax Return</h3>
        <p>Generally, the IRS requires that you attach a completed federal tax return to your Form W-7. There are very specific exceptions, but the general rule is that the ITIN is processed alongside the annual tax return.</p>
        <h3>3. Original Identity Documents</h3>
        <p>You must prove your identity and foreign status. The most widely accepted document is your <strong>valid passport</strong>, as it is the only document the IRS accepts on its own to prove both criteria. If you do not have a passport, you must send a combination of other officially certified documents (such as a birth certificate and consular card).</p>

        <h2>How to Renew an Expired ITIN?</h2>
        <p>ITIN numbers expire if they are not used on a federal tax return at least once in three consecutive years. If your ITIN has expired and you need to file a return, you must renew it by submitting a new Form W-7 with your current identity documents. The big advantage is that for renewals, <strong>it is not mandatory</strong> to attach a tax return.</p>

        <h2>The Importance of a Certified Acceptance Agent (CAA)</h2>
        <p>Mailing your original documents (such as your passport) to the IRS can be risky. To avoid losing your passport, you can visit a <strong>Certifying Acceptance Agent (CAA)</strong> like MAPA Business. We are authorized by the IRS to verify your original identity documents in person, make certified copies, and mail them on your behalf, allowing you to keep your original passport with you at all times.</p>
      `
    }
  },
  {
    slug: "como-abrir-llc-inmigrantes-new-jersey",
    title: {
      es: "Cómo abrir una LLC en New Jersey sin Seguro Social: Guía Completa",
      en: "How to Open an LLC in New Jersey without a Social Security Number: Complete Guide"
    },
    excerpt: {
      es: "Emprende legalmente en EE.UU. Te enseñamos cómo registrar tu propia LLC en New Jersey utilizando tu número ITIN.",
      en: "Start your business legally in the U.S. We show you how to register your own LLC in New Jersey using your ITIN number."
    },
    date: "2026-06-01",
    author: "Marilyn Paladinez",
    category: {
      es: "Emprendimiento & LLC",
      en: "Business & LLC"
    },
    categoryKey: "llc",
    image: "/images/blog/llc-guide.png",
    readingTime: "6 min",
    tip: {
      es: "Mantén tus finanzas 100% separadas. Nada rompe más rápido la protección de responsabilidad limitada de tu LLC que mezclar los gastos del negocio con tus cuentas personales. Paga todo lo de tu empresa desde su cuenta bancaria comercial.",
      en: "Keep your finances 100% separate. Nothing pierces the limited liability protection of your LLC faster than mixing business expenses with personal accounts. Pay all company expenses from its business bank account."
    },
    content: {
      es: `
        <h2>Emprender en Estados Unidos siendo Inmigrante</h2>
        <p>Uno de los mayores mitos es que necesitas un número de Seguro Social (SSN) o tener residencia legal para abrir un negocio en los Estados Unidos. La realidad es que <strong>cualquier persona</strong>, independientemente de su estatus migratorio, puede registrar legalmente una corporación o una Sociedad de Responsabilidad Limitada (LLC) en New Jersey.</p>
        <p>Registrar una LLC te otorga credibilidad profesional, protege tu patrimonio personal ante posibles demandas comerciales y te abre las puertas a mercados formales.</p>

        <h2>¿Por qué elegir una LLC (sociedad de responsabilidad limitada)?</h2>
        <p>La LLC es la estructura más popular para pequeños empresarios debido a sus ventajas clave:</p>
        <ul>
          <li><strong>Protección de Bienes Personales:</strong> Separa las deudas y obligaciones de tu empresa de tus bienes personales (casa, ahorros, auto).</li>
          <li><strong>Flexibilidad Fiscal:</strong> Las ganancias se reportan en tu declaración de impuestos personal, evitando la doble imposición de las corporaciones tradicionales.</li>
          <li><strong>Estructura Simple:</strong> Requiere menos formalidades y registros que una corporación del tipo C o S.</li>
        </ul>

        <h2>Paso a Paso para Registrar tu LLC en New Jersey sin SSN</h2>
        <p>Para abrir tu empresa en New Jersey usando tu número ITIN, debes seguir estos pasos:</p>

        <h3>1. Elegir el Nombre de tu Negocio</h3>
        <p>El nombre de tu empresa debe ser único en el estado de New Jersey y terminar con las siglas "LLC" o "L.L.C.". Puedes verificar la disponibilidad del nombre en la base de datos de registro del Departamento del Tesoro de NJ.</p>

        <h3>2. Designar un Agente Registrado</h3>
        <p>New Jersey exige que tu LLC cuente con un Agente Registrado. Es la persona o entidad oficial autorizada para recibir notificaciones legales del estado en una dirección física real de New Jersey.</p>

        <h3>3. Presentar el Certificado de Formación</h3>
        <p>Debes enviar el documento oficial de registro comercial (Public Records Filing) al portal de New Jersey Division of Revenue and Enterprise Services. La tarifa estatal de registro para LLCs en New Jersey es de $125.</p>

        <h3>4. Obtener tu número EIN (Employer Identification Number)</h3>
        <p>Una vez que tu LLC esté aprobada por el estado, debes solicitar tu <strong>EIN</strong> ante el IRS. El EIN es el número de identificación fiscal de tu empresa, equivalente al Seguro Social pero para negocios. Si no cuentas con SSN, puedes solicitarlo por correo o fax utilizando tu número **ITIN** completando el formulario SS-4.</p>

        <h3>5. Redactar el Acuerdo de Operación (Operating Agreement)</h3>
        <p>Es un documento interno que define las reglas, responsabilidades y porcentajes de participación de los socios de la LLC. Aunque no se envía al estado, los bancos lo solicitan para abrir cuentas corporativas.</p>

        <h2>Apertura de la Cuenta Bancaria Comercial</h2>
        <p>Con tu Certificado de Formación de la LLC, tu carta del EIN emitida por el IRS y tu pasaporte o ITIN, puedes presentarte en un banco comercial para abrir una cuenta corriente empresarial. Mantener los fondos de tu negocio separados de tus finanzas personales es vital para conservar la protección de responsabilidad limitada de tu LLC.</p>
      `,
      en: `
        <h2>Entrepreneurship in the United States as an Immigrant</h2>
        <p>One of the biggest myths is that you need a Social Security Number (SSN) or legal residency to open a business in the United States. The reality is that <strong>anyone</strong>, regardless of immigration status, can legally register a corporation or a Limited Liability Company (LLC) in New Jersey.</p>
        <p>Registering an LLC gives you professional credibility, protects your personal assets from potential commercial lawsuits, and opens doors to formal markets.</p>

        <h2>Why choose an LLC (Limited Liability Company)?</h2>
        <p>The LLC is the most popular structure for small business owners due to its key benefits:</p>
        <ul>
          <li><strong>Protection of Personal Assets:</strong> It separates your business debts and obligations from your personal assets (home, savings, car).</li>
          <li><strong>Tax Flexibility:</strong> Profits are reported on your personal tax return, avoiding the double taxation of traditional corporations.</li>
          <li><strong>Simple Structure:</strong> Requires fewer formalities and records than a C or S corporation.</li>
        </ul>

        <h2>Step by Step to Register Your LLC in New Jersey without an SSN</h2>
        <p>To open your business in New Jersey using your ITIN number, you must follow these steps:</p>

        <h3>1. Choose Your Business Name</h3>
        <p>Your business name must be unique in the state of New Jersey and end with the letters "LLC" or "L.L.C.". You can check name availability in the NJ Department of the Treasury's business registry database.</p>

        <h3>2. Designate a Registered Agent</h3>
        <p>New Jersey requires your LLC to have a Registered Agent. This is the official person or entity authorized to receive legal notices from the state at a real physical address in New Jersey.</p>

        <h3>3. File the Certificate of Formation</h3>
        <p>You must submit the official business registration document (Public Records Filing) to the New Jersey Division of Revenue and Enterprise Services portal. The state filing fee for LLCs in New Jersey is $125.</p>

        <h3>4. Obtain Your EIN (Employer Identification Number)</h3>
        <p>Once your LLC is approved by the state, you must apply for your <strong>EIN</strong> with the IRS. The EIN is the tax identification number for your company, equivalent to a Social Security number but for businesses. If you do not have an SSN, you can apply by mail or fax using your **ITIN** number by completing Form SS-4.</p>

        <h3>5. Draft the Operating Agreement</h3>
        <p>This is an internal document that defines the rules, responsibilities, and ownership percentages of the LLC members. Although it is not filed with the state, banks require it to open business accounts.</p>

        <h2>Opening a Business Bank Account</h2>
        <p>With your LLC Certificate of Formation, your EIN confirmation letter from the IRS, and your passport or ITIN, you can visit a commercial bank to open a business checking account. Keeping your business funds separate from your personal finances is vital to maintaining the limited liability protection of your LLC.</p>
      `
    }
  },
  {
    slug: "requisitos-licencia-conducir-new-jersey-inmigrantes",
    title: {
      es: "Requisitos para la Licencia de Conducir en NJ para Inmigrantes",
      en: "Requirements for the NJ Driver's License for Immigrants"
    },
    excerpt: {
      es: "Guía clara sobre la ley de licencias inclusivas de New Jersey y cómo reunir tus 6 puntos de identificación obligatorios.",
      en: "Clear guide on New Jersey's inclusive licensing law and how to gather your mandatory 6 points of identification."
    },
    date: "2026-05-24",
    author: "Marilyn Paladinez",
    category: {
      es: "Trámites de Tránsito",
      en: "Transit Procedures"
    },
    categoryKey: "transit",
    image: "/images/blog/license-guide.png",
    readingTime: "4 min",
    tip: {
      es: "Las traducciones de tus documentos de identidad deben estar certificadas oficialmente. Si presentas actas de nacimiento o licencias extranjeras sin una traducción jurada válida al inglés, la MVC de New Jersey rechazará tu solicitud de inmediato.",
      en: "Translations of your identification documents must be officially certified. If you present foreign birth certificates or driver's licenses without a valid certified English translation, the New Jersey MVC will reject your application immediately."
    },
    content: {
      es: `
        <h2>Licencias de Conducir Inclusivas en New Jersey</h2>
        <p>Desde el 1 de mayo de 2021, el estado de New Jersey implementó una ley histórica que permite a todos los residentes obtener una licencia de conducir estándar, **independientemente de su estatus migratorio**. Esto significa que no es necesario presentar una prueba de presencia legal en los Estados Unidos ante la Comisión de Vehículos Motorizados (MVC).</p>
        <p>Poder manejar legalmente reduce el estrés familiar, te permite asegurar tu vehículo de manera correcta y evita multas graves de tránsito.</p>

        <h2>El Sistema de los 6 Puntos de Identificación</h2>
        <p>El mayor obstáculo para muchos solicitantes es reunir los documentos requeridos. New Jersey MVC utiliza un sistema de puntos donde debes acumular al menos **6 puntos de identificación** combinando diferentes documentos oficiales.</p>
        <p>Los documentos deben ser originales o copias certificadas con sello oficial. Si están en español, deben acompañarse de una **traducción certificada** oficial.</p>

        <h3>Ejemplos de Documentos y sus Puntos:</h3>
        <ul>
          <li><strong>Pasaporte Extranjero Vigente (4 puntos):</strong> Debe estar vigente y contar con tu foto.</li>
          <li><strong>Matrícula Consular Vigente (4 puntos):</strong> Emitida por consulados autorizados como el de México, Ecuador, Colombia, etc.</li>
          <li><strong>Acta de Nacimiento de tu país traducida (2 puntos):</strong> Debe ser traducción certificada oficial.</li>
          <li><strong>Tarjeta de Identificación Escolar con foto (2 puntos):</strong> Acompañada de registro de calificaciones.</li>
          <li><strong>Licencia de conducir de tu país de origen (2 puntos):</strong> Acompañada de foto y traducción certificada si no está en inglés.</li>
        </ul>

        <h2>Comprobante de Domicilio en New Jersey</h2>
        <p>Además de los 6 puntos de identidad, debes probar que resides en el estado de New Jersey aportando un comprobante de domicilio que tenga menos de 90 días de emitido. Los documentos aceptados incluyen:</p>
        <ul>
          <li>Un contrato de arrendamiento o extracto bancario reciente.</li>
          <li>Facturas de servicios públicos (agua, gas, electricidad, teléfono móvil).</li>
          <li>Correspondencia oficial de agencias gubernamentales federales, estatales o locales.</li>
        </ul>

        <h2>El Proceso de Solicitud Paso a Paso</h2>
        <p>Una vez reunida la documentación, el proceso ante la MVC consta de estos pasos:</p>
        <ol>
          <li><strong>Comprar un Permiso de Aprendizaje:</strong> Debes programar una cita en el portal de la MVC para comprar tu permiso inicial de manejo y verificar tus 6 puntos.</li>
          <li><strong>Aprobar el Examen de la Vista:</strong> Es obligatorio y se realiza en la misma oficina.</li>
          <li><strong>Aprobar el Examen de Conocimientos (Teórico):</strong> Consiste en preguntas sobre reglas de tránsito en NJ. Puedes solicitar realizar el examen en español.</li>
          <li><strong>Practicar el Manejo:</strong> Deberás practicar por un período obligatorio (generalmente 3 o 6 meses según tu edad) acompañado de un conductor con licencia.</li>
          <li><strong>Aprobar el Examen de Manejo (Práctico):</strong> Deberás programar tu cita final para demostrar tus habilidades al volante en un carro con doble control o freno de mano central accesible.</li>
        </ol>
      `,
      en: `
        <h2>Inclusive Driver's Licenses in New Jersey</h2>
        <p>Since May 1, 2021, the state of New Jersey has implemented a historic law allowing all residents to obtain a standard driver's license, **regardless of immigration status**. This means it is not necessary to present proof of legal presence in the United States to the Motor Vehicle Commission (MVC).</p>
        <p>Being able to drive legally reduces family stress, allows you to insure your vehicle properly, and avoids serious traffic fines.</p>

        <h2>The 6 Points of ID System</h2>
        <p>The biggest hurdle for many applicants is gathering the required documents. The New Jersey MVC uses a point system where you must accumulate at least **6 points of identification** by combining different official documents.</p>
        <p>Documents must be original or certified copies with an official seal. If they are in Spanish, they must be accompanied by an official **certified translation**.</p>

        <h3>Examples of Documents and Their Points:</h3>
        <ul>
          <li><strong>Valid Foreign Passport (4 points):</strong> Must be valid and have your photo.</li>
          <li><strong>Valid Consular ID (4 points):</strong> Issued by authorized consulates such as Mexico, Ecuador, Colombia, etc.</li>
          <li><strong>Translated birth certificate from your country (2 points):</strong> Must be an official certified translation.</li>
          <li><strong>School ID card with photo (2 points):</strong> Accompanied by official transcripts.</li>
          <li><strong>Driver's license from your home country (2 points):</strong> With photo and certified translation if not in English.</li>
        </ul>

        <h2>Proof of Address in New Jersey</h2>
        <p>In addition to the 6 points of ID, you must prove that you reside in the state of New Jersey by providing a proof of address issued within the last 90 days. Accepted documents include:</p>
        <ul>
          <li>A recent lease agreement or bank statement.</li>
          <li>Utility bills (water, gas, electricity, mobile phone).</li>
          <li>Official correspondence from federal, state, or local government agencies.</li>
        </ul>

        <h2>The Step-by-Step Application Process</h2>
        <p>Once the documentation is gathered, the process at the MVC consists of these steps:</p>
        <ol>
          <li><strong>Buy a Learner's Permit:</strong> You must schedule an appointment on the MVC portal to purchase your initial permit and verify your 6 points.</li>
          <li><strong>Pass the Vision Test:</strong> Mandatory and conducted at the same office.</li>
          <li><strong>Pass the Knowledge Test (Written):</strong> Consists of questions about traffic rules in NJ. You can request to take the test in Spanish.</li>
          <li><strong>Practice Driving:</strong> You must practice for a mandatory period (usually 3 or 6 months depending on your age) accompanied by a licensed driver.</li>
          <li><strong>Pass the Road Test (Practical):</strong> You must schedule your final appointment to demonstrate your driving skills behind the wheel.</li>
        </ol>
      `
    }
  }
];
