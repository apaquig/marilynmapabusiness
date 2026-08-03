// src/data/serviceDetails.ts
// Detailed descriptions for the 14 services in Spanish and English for rich content display.

export interface ServiceDetailContent {
  es: string;
  en: string;
}

export const serviceDetails: Record<string, ServiceDetailContent> = {
  "notaria": {
    es: `
      <h3>¿En qué consiste el servicio de Notaría Pública?</h3>
      <p>El servicio de notaría pública es un proceso legal mediante el cual un funcionario autorizado por el estado (el Notario Público) actúa como testigo imparcial para prevenir el fraude en la firma de documentos importantes. Este servicio valida que las personas que firman un documento son quienes dicen ser y que lo hacen de manera voluntaria.</p>
      
      <h3>¿Qué documentos podemos notarizar?</h3>
      <p>Marilyn Paladinez cuenta con licencia y comisión activa como Notaria Pública en el estado de New Jersey para certificar firmas en una amplia gama de documentos:</p>
      <ul>
        <li><strong>Poderes Notariales (Power of Attorney):</strong> Documentos que autorizan a otra persona a actuar en tu nombre.</li>
        <li><strong>Declaraciones Juradas (Affidavits):</strong> Declaraciones escritas bajo juramento válidas ante cortes o entidades públicas.</li>
        <li><strong>Contratos y Acuerdos:</strong> Contratos comerciales, acuerdos de compraventa, y contratos de arrendamiento.</li>
        <li><strong>Autorizaciones de Viaje para Menores:</strong> Permisos para que niños viajen fuera del país con uno de sus padres o con un tercero.</li>
        <li><strong>Copias Certificadas:</strong> Certificación de que una copia de un pasaporte, identificación o documento oficial es fiel al original.</li>
      </ul>

      <h3>¿Por qué es importante para tu situación legal y financiera?</h3>
      <p>Un documento debidamente notarizado adquiere validez jurídica inmediata ante agencias gubernamentales, cortes, consulados y bancos en Estados Unidos o en el extranjero. Nos aseguramos de revisar cuidadosamente tu identificación oficial vigente y guiarte en el llenado para que tu trámite no sufra retrasos o rechazos.</p>
    `,
    en: `
      <h3>What does the Notary Public service consist of?</h3>
      <p>The notary public service is a legal process whereby an official authorized by the state (the Notary Public) acts as an impartial witness to prevent fraud in the signing of important documents. This service validates that the people signing a document are who they say they are and that they do so voluntarily.</p>
      
      <h3>What documents can we notarize?</h3>
      <p>Marilyn Paladinez is actively commissioned as a Notary Public in the State of New Jersey to certify signatures on a wide range of documents:</p>
      <ul>
        <li><strong>Powers of Attorney:</strong> Documents authorizing another person to act on your behalf.</li>
        <li><strong>Affidavits:</strong> Written statements made under oath valid before courts or public entities.</li>
        <li><strong>Contracts and Agreements:</strong> Business contracts, purchase agreements, and lease agreements.</li>
        <li><strong>Travel Consent for Minors:</strong> Permits for children to travel out of the country with one parent or a third party.</li>
        <li><strong>Certified Copies:</strong> Certification that a copy of a passport, ID, or official document is true to the original.</li>
      </ul>

      <h3>Why is this important for your legal and financial situation?</h3>
      <p>A properly notarized document gains immediate legal validity before government agencies, courts, consulates, and banks in the United States or abroad. We ensure to carefully review your valid official identification and guide you in filling it out so that your process does not suffer delays or rejections.</p>
    `
  },
  "traducciones": {
    es: `
      <h3>Traducciones Certificadas para USCIS, Cortes y Escuelas</h3>
      <p>Cuando presentas documentos oficiales en español ante agencias gubernamentales, instituciones educativas o financieras en los Estados Unidos, se requiere obligatoriamente que estos cuenten con una <strong>traducción certificada al inglés</strong>.</p>
      <p>Una traducción certificada incluye una carta de certificación firmada y fechada por el traductor, donde se da fe de que la traducción es una representación exacta y fiel del documento original.</p>

      <h3>¿Qué documentos traducimos con validez oficial?</h3>
      <ul>
        <li><strong>Documentos Migratorios:</strong> Actas de nacimiento, actas de matrimonio, certificados de divorcio y antecedentes penales.</li>
        <li><strong>Documentos Académicos:</strong> Títulos universitarios, diplomas y transcripciones de notas (records de notas) para procesos de equivalencia o estudio.</li>
        <li><strong>Documentos Comerciales y Financieros:</strong> Contratos, extractos bancarios, y declaraciones juradas financieras.</li>
        <li><strong>Documentos Médicos:</strong> Cartas de vacunación, reportes clínicos y recetas médicas.</li>
      </ul>

      <h3>Garantía de Aceptación</h3>
      <p>Nuestras traducciones certificadas cumplen estrictamente con todas las normas establecidas por el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS), el Departamento de Vehículos Motorizados (MVC de New Jersey), las cortes y las universidades públicas y privadas del estado. Recibirás tu documento traducido junto con su debida certificación oficial lista para presentar.</p>
    `,
    en: `
      <h3>Certified Translations for USCIS, Courts, and Schools</h3>
      <p>When you present official Spanish documents to government agencies, educational, or financial institutions in the United States, they must be accompanied by a <strong>certified English translation</strong>.</p>
      <p>A certified translation includes a certification letter signed and dated by the translator, swearing that the translation is an exact and faithful representation of the original document.</p>

      <h3>What documents do we translate with official validity?</h3>
      <ul>
        <li><strong>Immigration Documents:</strong> Birth certificates, marriage certificates, divorce decrees, and criminal records.</li>
        <li><strong>Academic Documents:</strong> College degrees, diplomas, and grade transcripts for credit evaluation or educational processes.</li>
        <li><strong>Business and Financial Documents:</strong> Contracts, bank statements, and financial affidavits.</li>
        <li><strong>Medical Documents:</strong> Vaccination records, clinical reports, and prescriptions.</li>
      </ul>

      <h3>Guaranteed Acceptance</h3>
      <p>Our certified translations strictly comply with all rules set by United States Citizenship and Immigration Services (USCIS), the New Jersey Motor Vehicle Commission (MVC), courts, and public/private universities. You will receive your translated document alongside its official certification letter ready for submission.</p>
    `
  },
  "poderes-notariales": {
    es: `
      <h3>¿Qué es un Poder Notarial y para qué sirve?</h3>
      <p>Un Poder Notarial (o Power of Attorney - POA) es un instrumento legal que te permite designar a una persona de tu entera confianza (tu apoderado) para que realice trámites, administre bienes o tome decisiones en tu nombre si te encuentras fuera del país, enfermo o imposibilitado para asistir en persona.</p>
      
      <h3>Tipos de Poderes que preparamos:</h3>
      <ul>
        <li><strong>Poder Especial o Limitado:</strong> Otorga autoridad para realizar una sola acción específica, como vender una propiedad en tu país de origen, comprar un auto o registrar a un niño en la escuela. Una vez finalizada la acción, el poder expira.</li>
        <li><strong>Poder General:</strong> Otorga facultades amplias para administrar finanzas, cuentas bancarias, firmar contratos y manejar tus asuntos comerciales en general.</li>
        <li><strong>Poder Duradero (Durable POA):</strong> Mantiene su validez incluso si la persona que lo otorga queda incapacitada físicamente o no puede tomar decisiones por sí misma.</li>
      </ul>

      <h3>¿Cómo te ayudamos en New Jersey?</h3>
      <p>Redactamos la carta de poder utilizando la terminología legal correcta y requerida por los consulados o entidades bancarias en tu país de origen (México, Colombia, Ecuador, Perú, etc.). Posteriormente, realizamos la notarización en nuestra oficina de Newark, NJ, para que el documento sea plenamente legal.</p>
    `,
    en: `
      <h3>What is a Power of Attorney and what is it for?</h3>
      <p>A Power of Attorney (POA) is a legal document that allows you to appoint a person of your absolute trust (your agent or attorney-in-fact) to perform transactions, manage assets, or make decisions on your behalf if you are out of the country, ill, or unable to attend in person.</p>
      
      <h3>Types of Powers we prepare:</h3>
      <ul>
        <li><strong>Special or Limited Power of Attorney:</strong> Grants authority to perform a single specific action, such as selling a property in your country of origin, buying a car, or registering a child in school. Once the action is complete, the power expires.</li>
        <li><strong>General Power of Attorney:</strong> Grants broad powers to manage finances, bank accounts, sign contracts, and handle your business affairs in general.</li>
        <li><strong>Durable Power of Attorney:</strong> Remains valid even if the person who grants it becomes physically incapacitated or unable to make decisions for themselves.</li>
      </ul>

      <h3>How we help you in New Jersey?</h3>
      <p>We draft the power of attorney letter using the correct legal terminology required by consulates or banking institutions in your country of origin. Afterward, we perform the notarization in our Newark, NJ office so that the document is fully legal.</p>
    `
  },
  "permisos-de-trabajo": {
    es: `
      <h3>¿Cómo solicitar el Permiso de Trabajo (EAD)?</h3>
      <p>El Documento de Autorización de Empleo (EAD), conocido comúnmente como <strong>Permiso de Trabajo</strong>, se solicita formalmente ante el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS) utilizando el <strong>Formulario I-765</strong>. Este beneficio autoriza a personas extranjeras en ciertas categorías migratorias a laborar de manera legal y recibir un salario formal en el país.</p>

      <h3>¿Quiénes califican para presentarlo?</h3>
      <p>La autorización de empleo depende de tu estatus migratorio o de si tienes un trámite activo con inmigración. Los casos más comunes incluyen:</p>
      <ul>
        <li>Solicitantes de asilo político con casos pendientes que cumplen con el tiempo de espera legal.</li>
        <li>Beneficiarios de Estatus de Protección Temporal (TPS).</li>
        <li>Personas con una solicitud pendiente de Ajuste de Estatus (Residencia Permanente).</li>
        <li>Personas amparadas bajo programas de Acción Diferida (como DACA) o Parole Humanitario.</li>
      </ul>

      <h3>¿Cómo te ayudamos en MAPA Business?</h3>
      <p>Te apoyamos con la preparación, llenado y organización meticulosa de tu Formulario I-765 y la recopilación de toda la evidencia física necesaria para tu categoría. Aunque no somos abogados de inmigración, nuestro servicio de preparación de documentos reduce errores de llenado u omisiones de firmas que suelen causar demoras críticas o denegaciones de tu caso ante USCIS.</p>
    `,
    en: `
      <h3>How to apply for an Employment Authorization Document (EAD)?</h3>
      <p>The Employment Authorization Document (EAD), commonly known as a <strong>Work Permit</strong>, is formally requested from United States Citizenship and Immigration Services (USCIS) using <strong>Form I-765</strong>. This benefit authorizes foreign nationals in certain immigration categories to work legally and receive a formal wage in the country.</p>

      <h3>Who qualifies to submit it?</h3>
      <p>Work authorization depends on your immigration status or whether you have a pending case with immigration. The most common cases include:</p>
      <ul>
        <li>Political asylum applicants with pending cases who meet the legal waiting time.</li>
        <li>Temporary Protected Status (TPS) beneficiaries.</li>
        <li>Individuals with a pending Application for Adjustment of Status (Permanent Residency).</li>
        <li>Individuals covered under Deferred Action programs (like DACA) or Humanitarian Parole.</li>
      </ul>

      <h3>How we help you at MAPA Business?</h3>
      <p>We support you with the meticulous preparation, filling out, and organization of your Form I-765 and the collection of all physical evidence required for your category. While we are not immigration attorneys, our document preparation service reduces form-filling errors or missing signatures that usually cause critical delays or denials of your case before USCIS.</p>
    `
  },
  "licencias-de-conducir": {
    es: `
      <h3>Obtén tu Licencia de Conducir en New Jersey</h3>
      <p>En New Jersey, todas las personas que viven en el estado, independientemente de su estatus migratorio, tienen el derecho a solicitar una licencia de conducir estándar. La Motor Vehicle Commission (MVC) del estado aplica un estricto <strong>sistema de 6 puntos de identificación</strong> para certificar la identidad y dirección del solicitante.</p>

      <h3>¿Cuáles son los requisitos esenciales?</h3>
      <p>Para presentarte ante la MVC de New Jersey, debes reunir documentos que sumen al menos 6 puntos de identificación y un comprobante de domicilio local. Te orientamos en la recopilación de:</p>
      <ul>
        <li><strong>Documento Primario (4 puntos):</strong> Pasaporte vigente de tu país de origen o tarjeta de permiso de trabajo (EAD).</li>
        <li><strong>Documentos Secundarios (1 a 3 puntos):</strong> Identificación consular, acta de nacimiento con traducción certificada, tarjeta de crédito, contrato de alquiler, o licencia de conducir de tu país de origen.</li>
        <li><strong>Prueba de Domicilio:</strong> Factura de servicios públicos a tu nombre, estados de cuenta bancarios recientes o correspondencia de agencias gubernamentales.</li>
        <li><strong>Número fiscal o de Seguro Social:</strong> Carta de no elegibilidad para SSN, número de ITIN, o Seguro Social.</li>
      </ul>

      <h3>Nuestra Asistencia Personalizada</h3>
      <p>Te guiamos paso a paso en el proceso: te ayudamos a traducir tus documentos de identidad al inglés, a verificar que sumes los 6 puntos requeridos sin fallas, a agendar tus citas en la MVC local y te damos pautas para los exámenes teórico y práctico.</p>
    `,
    en: `
      <h3>Obtain Your Driver's License in New Jersey</h3>
      <p>In New Jersey, all individuals living in the state, regardless of their immigration status, have the right to apply for a standard driver's license. The state's Motor Vehicle Commission (MVC) applies a strict <strong>6-point identification system</strong> to certify the applicant's identity and address.</p>

      <h3>What are the essential requirements?</h3>
      <p>To present yourself before the New Jersey MVC, you must gather documents adding up to at least 6 identification points and a proof of local address. We guide you in compiling:</p>
      <ul>
        <li><strong>Primary Document (4 points):</strong> Valid foreign passport from your country of origin or an Employment Authorization Document (EAD).</li>
        <li><strong>Secondary Documents (1 to 3 points):</strong> Consular ID, foreign birth certificate with certified translation, credit card, lease agreement, or a foreign driver's license.</li>
        <li><strong>Proof of Address:</strong> Utility bills in your name, recent bank statements, or letters from government agencies.</li>
        <li><strong>Tax or Social Security Number:</strong> Social Security card, ITIN number, or an SSN ineligibility letter.</li>
      </ul>

      <h3>Our Personalized Support</h3>
      <p>We guide you step-by-step through the process: we help you translate your identification documents into English, verify that you add up the required 6 points without error, schedule your appointments at the local MVC, and provide guidance for the written and road tests.</p>
    `
  },
  "itin": {
    es: `
      <h3>¿Qué es el ITIN y por qué lo necesitas?</h3>
      <p>El <strong>Individual Taxpayer Identification Number (ITIN)</strong> es un número de procesamiento tributario emitido por el IRS. Está diseñado exclusivamente para que personas extranjeras u otros contribuyentes que no califican para un Seguro Social puedan declarar impuestos de manera legal en los Estados Unidos.</p>

      <h3>¿Cuáles son los principales beneficios de obtener un ITIN?</h3>
      <ul>
        <li><strong>Declaración de Impuestos:</strong> Te permite reportar tus ingresos, cumplir con las leyes fiscales y calificar para reembolsos o créditos tributarios.</li>
        <li><strong>Apertura de Negocios y Cuentas Bancarias:</strong> Es un requisito indispensable para crear una LLC y abrir cuentas bancarias comerciales a nombre de tu empresa.</li>
        <li><strong>Historial de Impuestos para Inmigración:</strong> Demostrar que has pagado tus impuestos cada año es una de las pruebas de buen carácter moral más valiosas si decides regularizar tu estatus en el futuro.</li>
      </ul>

      <h3>¿Por qué tramitar tu ITIN con nosotros (Agentes CAA)?</h3>
      <p>MAPA Business cuenta con la certificación oficial de <strong>Certifying Acceptance Agents (CAA)</strong> del IRS. Esto significa que podemos verificar tu pasaporte original cara a cara en nuestra oficina de Newark, NJ, hacer copias certificadas y enviar el Formulario W-7 al IRS en tu nombre. **No tendrás que enviar tu pasaporte físico por correo**, evitando el grave peligro de que se pierda en el correo postal durante el trámite.</p>
    `,
    en: `
      <h3>What is an ITIN and why do you need it?</h3>
      <p>The <strong>Individual Taxpayer Identification Number (ITIN)</strong> is a tax processing number issued by the IRS. It is designed exclusively for foreign nationals or other taxpayers who do not qualify for a Social Security Number to file taxes legally in the United States.</p>

      <h3>What are the main benefits of obtaining an ITIN?</h3>
      <ul>
        <li><strong>Filing Taxes:</strong> It allows you to report your income, comply with tax laws, and qualify for tax refunds or credits.</li>
        <li><strong>Business and Bank Accounts:</strong> It is a fundamental requirement to register an LLC and open business bank accounts in your company name.</li>
        <li><strong>Tax History for Immigration:</strong> Showing that you have paid taxes every year is one of the most valuable proofs of good moral character if you regularize your status in the future.</li>
      </ul>

      <h3>Why process your ITIN with us (CAA Agents)?</h3>
      <p>MAPA Business is officially certified as a <strong>Certifying Acceptance Agent (CAA)</strong> by the IRS. This means we can verify your original passport in person at our Newark, NJ office, certify the copies, and submit Form W-7 to the IRS on your behalf. **You will not have to mail your physical passport**, avoiding the serious danger of it getting lost in the mail during the process.</p>
    `
  },
  "taxes": {
    es: `
      <h3>Preparación Profesional de Taxes Federales y Estatales</h3>
      <p>Declarar tus impuestos de manera correcta y a tiempo es una responsabilidad fundamental en los Estados Unidos. En MAPA Business & Financial Services LLC preparamos declaraciones de impuestos federales (IRS) y estatales de New Jersey para personas individuales, familias e independientes (1099).</p>

      <h3>¿Qué servicios de preparación de impuestos ofrecemos?</h3>
      <ul>
        <li><strong>Declaración de Impuestos Personales:</strong> Preparamos tu Formulario 1040 y nos aseguramos de reclamar los créditos fiscales a los que tienes derecho, como el Crédito por Hijos.</li>
        <li><strong>Taxes con Número ITIN:</strong> Si no tienes Seguro Social, preparamos tu declaración anual y anexos de manera correcta usando tu ITIN para que cumplas con la ley fiscal.</li>
        <li><strong>Trabajadores Independientes (1099):</strong> Si trabajas por tu cuenta (construcción, limpieza, entregas, consultoría), deducimos tus gastos legítimos de negocio para reducir legalmente el monto a pagar.</li>
        <li><strong>Taxes para Negocios (LLC):</strong> Declaraciones comerciales y contabilidad integrada para pequeños negocios.</li>
      </ul>

      <h3>Garantía de Confidencialidad y Soporte</h3>
      <p>El IRS tiene estrictamente prohibido compartir tu información fiscal con agencias de inmigración como el ICE. Realizar tus impuestos con nosotros es completamente seguro y confidencial. Te ayudamos a maximizar tu reembolso legal de manera ética y profesional.</p>
    `,
    en: `
      <h3>Professional Federal and State Tax Preparation</h3>
      <p>Filing your taxes correctly and on time is a fundamental responsibility in the United States. At MAPA Business & Financial Services LLC, we prepare federal (IRS) and state (NJ) tax returns for individuals, families, and self-employed workers (1099).</p>

      <h3>What tax preparation services do we offer?</h3>
      <ul>
        <li><strong>Personal Tax Returns:</strong> We prepare your Form 1040 and ensure you claim all eligible tax credits, such as the Child Tax Credit.</li>
        <li><strong>Taxes with an ITIN:</strong> If you don't have a Social Security Number, we prepare your annual return correctly using your ITIN to comply with tax laws.</li>
        <li><strong>Independent Contractors (1099):</strong> If you work for yourself (construction, cleaning, delivery, consulting), we deduct legitimate business expenses to legally reduce your tax liability.</li>
        <li><strong>Business Taxes (LLC):</strong> Commercial tax filing and integrated bookkeeping for small businesses.</li>
      </ul>

      <h3>Guaranteed Confidentiality and Support</h3>
      <p>The IRS is strictly prohibited from sharing your tax information with immigration agencies like ICE. Filing your taxes with us is completely safe and confidential. We help you maximize your legal refund ethically and professionally.</p>
    `
  },
  "bookkeeping": {
    es: `
      <h3>Mantén la Contabilidad de tu Negocio al Día</h3>
      <p>El <strong>Bookkeeping</strong> es el proceso diario y mensual de registrar de manera organizada todos los ingresos y gastos de tu negocio. Mantener tus libros contables limpios es crucial para tomar buenas decisiones, aplicar a préstamos comerciales y evitar auditorías del IRS.</p>

      <h3>¿Qué incluye nuestro servicio de Bookkeeping mensual?</h3>
      <ul>
        <li><strong>Registro de Transacciones:</strong> Clasificamos de manera precisa todas tus ventas, compras, pagos a proveedores y cobros de clientes.</li>
        <li><strong>Conciliación Bancaria:</strong> Cruzamos tus estados de cuenta bancarios y de tarjetas de crédito comerciales con tus libros contables para asegurarnos de que no falte ni sobre un solo centavo.</li>
        <li><strong>Estados Financieros Mensuales:</strong> Te entregamos reportes claros como el Estado de Pérdidas y Ganancias (Profit & Loss) y el Balance General para que veas el rendimiento de tu empresa.</li>
        <li><strong>Preparación para la Declaración de Taxes:</strong> Al finalizar el año fiscal, tus libros estarán perfectamente organizados para que la declaración de impuestos de tu LLC se haga rápido y sin errores.</li>
      </ul>

      <h3>Ideal para Pequeños Negocios y LLC</h3>
      <p>Nos especializamos en apoyar a pequeños empresarios hispanos en New Jersey. Te quitamos la carga de la contabilidad diaria para que tú puedas concentrarte en hacer crecer tu negocio.</p>
    `,
    en: `
      <h3>Keep Your Business Accounting Up to Date</h3>
      <p><strong>Bookkeeping</strong> is the daily and monthly process of organizing and recording all income and expenses of your business. Keeping clean financial books is crucial for making informed decisions, applying for business loans, and avoiding IRS audits.</p>

      <h3>What does our monthly Bookkeeping service include?</h3>
      <ul>
        <li><strong>Transaction Recording:</strong> We accurately classify all your sales, purchases, supplier payments, and client receipts.</li>
        <li><strong>Bank Reconciliation:</strong> We cross-reference your business bank and credit card statements with your financial books to ensure every penny matches.</li>
        <li><strong>Monthly Financial Statements:</strong> We deliver clear reports such as the Profit & Loss Statement and the Balance Sheet so you can monitor your company's performance.</li>
        <li><strong>Tax Season Readiness:</strong> At the end of the fiscal year, your books will be perfectly organized so your LLC's tax filing is fast and error-free.</li>
      </ul>

      <h3>Ideal for Small Businesses and LLCs</h3>
      <p>We specialize in supporting small Hispanic business owners in New Jersey. We take away the daily accounting burden so you can focus on growing your business.</p>
    `
  },
  "seguros-de-auto": {
    es: `
      <h3>Cotiza y Contrata tu Seguro de Auto en New Jersey</h3>
      <p>Conducir un vehículo en el estado de New Jersey requiere de manera obligatoria contar con un seguro de auto activo. Entendemos lo difícil que puede ser encontrar una cobertura adecuada y a un precio justo, especialmente para conductores nuevos o miembros de la comunidad inmigrante.</p>

      <h3>¿Qué opciones de cobertura te ofrecemos?</h3>
      <ul>
        <li><strong>Responsabilidad Civil (Liability):</strong> Cubre los daños materiales y corporales causados a terceros en caso de un accidente. Es la cobertura mínima obligatoria estatal.</li>
        <li><strong>Cobertura Completa (Full Coverage):</strong> Protege tu propio vehículo ante choques, robos, vandalismo, incendios o choques contra animales.</li>
        <li><strong>Opciones Especiales:</strong> Conseguimos cotizaciones accesibles para conductores con licencias extranjeras, licencias de otros estados o permisos temporales de New Jersey (MVC).</li>
      </ul>

      <h3>Cotizaciones Gratuitas con Múltiples Compañías</h3>
      <p>Trabajamos con una red de aseguradoras de confianza para comparar precios y coberturas, asegurándonos de conseguirte el plan más barato y seguro. Solicita tu cotización gratuita enviándonos los datos de tu auto y tu historial de manejo.</p>
    `,
    en: `
      <h3>Quote and Bind Your Car Insurance in New Jersey</h3>
      <p>Driving a vehicle in the State of New Jersey strictly requires having active car insurance. We understand how difficult it can be to find adequate coverage at a fair price, especially for new drivers or members of the immigrant community.</p>

      <h3>What coverage options do we offer you?</h3>
      <ul>
        <li><strong>Liability Coverage:</strong> Covers property damage and bodily injury caused to third parties in an accident. This is the minimum state-mandated coverage.</li>
        <li><strong>Full Coverage:</strong> Protects your own vehicle against collisions, theft, vandalism, fire, or animal strikes.</li>
        <li><strong>Special Options:</strong> We secure affordable quotes for drivers with foreign licenses, out-of-state licenses, or temporary NJ MVC permits.</li>
      </ul>

      <h3>Free Quotes from Multiple Insurance Carriers</h3>
      <p>We work with a network of trusted insurance carriers to compare prices and coverage, ensuring we secure the cheapest and safest plan for you. Request your free quote today by sending us your vehicle details and driving history.</p>
    `
  },
  "seguros-de-salud": {
    es: `
      <h3>Asesoría Completa para tu Seguro de Salud</h3>
      <p>Contar con un seguro médico es vital para proteger tu salud y tus finanzas familiares ante emergencias o visitas médicas preventivas. En New Jersey existen diversos programas de salud pública y de mercado con subsidios estatales.</p>

      <h3>¿Qué planes de salud te ayudamos a evaluar?</h3>
      <ul>
        <li><strong>Medicaid / NJ FamilyCare:</strong> Programa estatal gratuito o de muy bajo costo para familias e individuos con ingresos limitados. Te ayudamos a revisar si cumples con las reglas de elegibilidad e ingresos.</li>
        <li><strong>Mercado de Seguros de NJ (GetCoveredNJ):</strong> Planes médicos privados que cuentan con amplios subsidios federales y estatales según tus ingresos anuales. Puedes conseguir planes desde $10 al mes si calificas.</li>
        <li><strong>Planes Privados Directos:</strong> Opciones fuera del mercado para quienes buscan coberturas específicas o no califican para subsidios estatales.</li>
      </ul>

      <h3>Asistencia en la Inscripción sin Costo</h3>
      <p>Analizamos tu caso familiar, estatus migratorio e ingresos mensuales para determinar a qué programas o subsidios calificas. Te ayudamos a realizar el proceso de inscripción correctamente para evitar cobros sorpresa o pérdidas de cobertura.</p>
    `,
    en: `
      <h3>Complete Advisory for Your Health Insurance</h3>
      <p>Having medical insurance is vital to protect your health and your family's finances in the face of emergencies or preventive doctor visits. In New Jersey, there are various public health programs and market plans with state subsidies.</p>

      <h3>What health plans do we help you evaluate?</h3>
      <ul>
        <li><strong>Medicaid / NJ FamilyCare:</strong> Free or low-cost state program for families and individuals with limited income. We help you review if you meet the eligibility and income rules.</li>
        <li><strong>NJ Insurance Marketplace (GetCoveredNJ):</strong> Private health plans that feature broad federal and state subsidies based on your annual income. You can secure plans starting at $10 a month if you qualify.</li>
        <li><strong>Direct Private Plans:</strong> Off-marketplace options for those seeking specific coverage or who do not qualify for state subsidies.</li>
      </ul>

      <h3>Free Enrollment Assistance</h3>
      <p>We analyze your family situation, immigration status, and monthly income to determine which programs or subsidies you qualify for. We help you complete the enrollment process correctly to avoid surprise charges or coverage drops.</p>
    `
  },
  "seguros-de-vida": {
    es: `
      <h3>Protege el Futuro de tus Seres Queridos</h3>
      <p>Un seguro de vida es una de las muestras de amor y responsabilidad más grandes que puedes tener con tu familia. Garantiza que en caso de tu ausencia física imprevista, tus seres queridos reciban un respaldo económico libre de impuestos para cubrir gastos funerales, hipotecas, deudas o la educación de tus hijos.</p>

      <h3>¿Cuáles son las opciones de Seguros de Vida?</h3>
      <ul>
        <li><strong>Seguro de Vida a Término (Term Life):</strong> Ofrece protección por un período específico (como 10, 20 o 30 años). Es la opción más económica y con las primas mensuales más bajas para coberturas altas.</li>
        <li><strong>Seguro de Vida Permanente (Whole Life):</strong> Te protege durante toda tu vida útil y acumula un valor en efectivo con el paso de los años, el cual funciona como un fondo de ahorro con intereses garantizados.</li>
      </ul>

      <h3>Planes Accesibles para la Comunidad Latina</h3>
      <p>Te ayudamos a cotizar y contratar pólizas de vida con aseguradoras de primer nivel que no requieren número de seguro social en muchos casos. Diseñamos planes desde $15 al mes que se ajustan perfectamente a tu presupuesto familiar.</p>
    `,
    en: `
      <h3>Protect the Future of Your Loved Ones</h3>
      <p>Life insurance is one of the greatest gestures of love and responsibility you can have for your family. It guarantees that in the event of your unforeseen physical absence, your loved ones receive a tax-free financial payment to cover funeral costs, mortgages, debts, or your children's education.</p>

      <h3>What are the Life Insurance options?</h3>
      <ul>
        <li><strong>Term Life Insurance:</strong> Provides protection for a specific period (such as 10, 20, or 30 years). It is the most affordable option with the lowest monthly premiums for high coverage.</li>
        <li><strong>Whole Life Insurance:</strong> Protects you for your entire life and builds cash value over the years, which functions as a savings fund with guaranteed interest.</li>
      </ul>

      <h3>Affordable Plans for the Latino Community</h3>
      <p>We help you quote and contract life policies with top-tier insurance companies that do not require a Social Security Number in many cases. We design plans starting at $15 a month that fit perfectly into your family budget.</p>
    `
  },
  "doble-nacionalidad": {
    es: `
      <h3>Asistencia en Trámites de Doble Nacionalidad</h3>
      <p>Si eres inmigrante y tienes hijos nacidos en los Estados Unidos, o si deseas regularizar tus lazos legales con tu país de origen, el trámite de doble nacionalidad es fundamental. Permite registrar a un ciudadano estadounidense como nacional del país de sus padres, otorgándole plenos derechos civiles, pasaporte extranjero y el derecho a heredar o comprar propiedades de forma legal.</p>

      <h3>¿En qué consiste nuestra orientación?</h3>
      <ul>
        <li><strong>Revisión de Requisitos:</strong> Te indicamos qué documentos específicos exige el consulado de tu país de origen (actas de nacimiento de EE. UU., identificaciones, actas de matrimonio de los padres).</li>
        <li><strong>Apostilla de Documentos:</strong> Gestionamos la apostilla oficial del estado de New Jersey para tus actas americanas, ya que ningún documento de EE. UU. es válido en el extranjero sin este sello internacional.</li>
        <li><strong>Preparación de Carpeta y Citas:</strong> Organizamos toda la documentación de forma impecable y te orientamos sobre cómo presentarte ante el consulado correspondiente.</li>
      </ul>
    `,
    en: `
      <h3>Assistance in Dual Citizenship Procedures</h3>
      <p>If you are an immigrant and have children born in the United States, or if you want to regularize your legal ties with your country of origin, the dual citizenship process is essential. It allows a U.S. citizen to be registered as a national of their parents' country, granting them full civil rights, a foreign passport, and the right to legally inherit or purchase property.</p>

      <h3>What does our guidance consist of?</h3>
      <ul>
        <li><strong>Review of Requirements:</strong> We indicate what specific documents the consulate of your country of origin requires (U.S. birth certificates, IDs, parents' marriage certificates).</li>
        <li><strong>Apostille of Documents:</strong> We process the official State of New Jersey apostille for your American certificates, as no U.S. document is valid abroad without this international seal.</li>
        <li><strong>Folder Preparation and Appointments:</strong> We organize all documentation flawlessly and guide you on how to present yourself before the corresponding consulate.</li>
      </ul>
    `
  },
  "divorcios": {
    es: `
      <h3>Asistencia en Divorcios Sin Disputa en New Jersey</h3>
      <p>Un divorcio sin disputa (o divorcio de mutuo acuerdo) es aquel donde ambos cónyuges están de acuerdo en finalizar el matrimonio y han llegado a una resolución amistosa sobre la división de bienes, deudas y la custodia de los hijos, si corresponde.</p>

      <h3>¿Cómo te apoyamos en la preparación de documentos?</h3>
      <p>Para divorciarse de mutuo acuerdo en New Jersey no es estrictamente obligatorio contratar un abogado costoso, ya que puedes representarte a ti mismo (Pro Se). Nosotros te ayudamos con:</p>
      <ul>
        <li><strong>Preparación de Formularios de la Corte:</strong> Completamos la demanda de divorcio, formularios financieros y documentos de notificación obligatorios exigidos por la Corte Superior de NJ.</li>
        <li><strong>Acuerdos de Separación:</strong> Redactamos de forma clara el acuerdo de resolución de matrimonio firmado por ambas partes.</li>
        <li><strong>Organización y Radicación:</strong> Armamos la carpeta judicial y te explicamos paso a paso cómo presentar los documentos y pagar la tarifa de radicación ante el condado correspondiente.</li>
      </ul>
      <p><em>Nota: No somos abogados y no brindamos asesoría legal ni representación ante el juez. Si tu divorcio es conflictivo o requiere litigio de bienes, te sugerimos contratar un abogado especialista.</em></p>
    `,
    en: `
      <h3>Assistance for Uncontested Divorces in New Jersey</h3>
      <p>An uncontested divorce (or mutual agreement divorce) is one where both spouses agree to end the marriage and have reached an amicable resolution regarding the division of assets, debts, and child custody, if applicable.</p>

      <h3>How do we support you in document preparation?</h3>
      <p>To divorce by mutual agreement in New Jersey, it is not strictly mandatory to hire an expensive attorney, as you can represent yourself (Pro Se). We help you with:</p>
      <ul>
        <li><strong>Court Form Preparation:</strong> We complete the divorce complaint, financial forms, and court filing requirements.</li>
        <li><strong>Separation Agreements:</strong> We draft the marital settlement agreement signed by both parties.</li>
        <li><strong>Organization and Filing:</strong> We assemble the judicial folder and explain step-by-step how to submit the documents and pay the filing fee to the corresponding county.</li>
      </ul>
      <p><em>Note: We are not attorneys and do not provide legal advice or representation in court. If your divorce is contested or requires asset litigation, we suggest hiring a specialized attorney.</em></p>
    `
  },
  "matrimonios": {
    es: `
      <h3>Orientación para Matrimonios Civiles en New Jersey</h3>
      <p>Casarse por lo civil en los Estados Unidos requiere cumplir con ciertos requisitos municipales y estatales. En MAPA Business te ayudamos a que este paso tan importante en tu vida familiar se realice sin demoras administrativas.</p>

      <h3>¿Cómo te ayudamos en tu proceso de matrimonio?</h3>
      <ul>
        <li><strong>Licencia de Matrimonio:</strong> Te explicamos qué documentos de identidad debes presentar ante la alcaldía local (Registrar) para solicitar la licencia de matrimonio de NJ, los testigos requeridos y los tiempos de espera legales.</li>
        <li><strong>Traducciones de Actas Extranjeras:</strong> Si necesitas presentar actas de divorcio o nacimiento extranjeras para solicitar la licencia de matrimonio, realizamos la traducción certificada correspondiente.</li>
        <li><strong>Apostilla Internacional:</strong> Una vez casados, si necesitas que tu acta de matrimonio de New Jersey sea válida en tu país de origen (para procesos consulares, de herencia o migratorios en el extranjero), tramitamos la apostilla del estado de NJ.</li>
      </ul>
    `,
    en: `
      <h3>Guidance for Civil Marriages in New Jersey</h3>
      <p>Getting married through a civil ceremony in the United States requires meeting certain municipal and state requirements. At MAPA Business, we help ensure this important step in your family life is completed without administrative delays.</p>

      <h3>How do we help you in your marriage process?</h3>
      <ul>
        <li><strong>Marriage License:</strong> We explain what identity documents you must submit to the local registrar to apply for the NJ marriage license, the required witnesses, and the legal waiting times.</li>
        <li><strong>Translations of Foreign Certificates:</strong> If you need to present foreign birth or divorce certificates to apply for the marriage license, we perform the corresponding certified translation.</li>
        <li><strong>International Apostille:</strong> Once married, if you need your New Jersey marriage certificate to be valid in your country of origin, we process the NJ state apostille.</li>
      </ul>
    `
  }
};
