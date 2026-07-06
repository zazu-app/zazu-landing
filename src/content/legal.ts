// Textos legales de la web (ES autoritativo · EN cortesía).
// ⚠️ PLANTILLA: revisar con asesoría legal y completar los [MARCADORES] con los
// datos reales de la empresa antes de publicar en producción.
// La versión en español prevalece sobre cualquier traducción.

export type LegalBlock =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
};

export type LegalKey = "avisoLegal" | "privacidad" | "cookies";

export const legalSlugs: Record<LegalKey, string> = {
  avisoLegal: "aviso-legal",
  privacidad: "privacidad",
  cookies: "cookies",
};

export const legalUi = {
  es: {
    updatedLabel: "Última actualización",
    back: "Volver al inicio",
    draftNotice:
      "Borrador de plantilla. Este texto debe ser revisado por asesoría legal y completado con los datos reales de la empresa (marcados entre corchetes) antes de su publicación.",
  },
  en: {
    updatedLabel: "Last updated",
    back: "Back to home",
    draftNotice:
      "Template draft. This text must be reviewed by legal counsel and completed with the company's real data (shown in brackets) before publication. The Spanish version prevails.",
  },
} as const;

export const legalContent: Record<"es" | "en", Record<LegalKey, LegalDoc>> = {
  es: {
    avisoLegal: {
      title: "Aviso legal y condiciones de uso",
      updated: "5 de julio de 2026",
      intro:
        "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a disposición de los usuarios los datos identificativos del titular de este sitio web.",
      blocks: [
        { type: "h", text: "1. Titular del sitio web" },
        { type: "ul", items: [
          "Denominación social: [RAZÓN SOCIAL]",
          "NIF/CIF: [NIF]",
          "Domicilio social: [DOMICILIO SOCIAL COMPLETO]",
          "Correo electrónico: [EMAIL DE CONTACTO]",
          "Datos registrales: [INSCRIPCIÓN EN EL REGISTRO MERCANTIL: tomo, folio, hoja]",
          "Nombre comercial: Zazu",
          "Sitio web: https://zazu.com.es",
        ]},
        { type: "h", text: "2. Objeto" },
        { type: "p", text: "El presente Aviso Legal regula el acceso, la navegación y el uso del sitio web, sin perjuicio de que el titular pueda establecer condiciones particulares para la contratación de determinados servicios. La navegación por el sitio atribuye la condición de usuario e implica la aceptación plena de estas condiciones." },
        { type: "h", text: "3. Condiciones de uso" },
        { type: "p", text: "El usuario se compromete a hacer un uso adecuado y lícito del sitio web y de sus contenidos conforme a la legislación aplicable, la buena fe y el orden público. Queda prohibido utilizar el sitio con fines ilícitos, lesivos de derechos o intereses de terceros, o que de cualquier forma puedan dañar, inutilizar o deteriorar el sitio o impedir su normal disfrute." },
        { type: "h", text: "4. Propiedad intelectual e industrial" },
        { type: "p", text: "Todos los contenidos del sitio (textos, fotografías, gráficos, imágenes, iconos, software, marcas, nombres comerciales y logotipos) son titularidad de [RAZÓN SOCIAL] o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del titular." },
        { type: "h", text: "5. Responsabilidad" },
        { type: "p", text: "El titular no garantiza la disponibilidad y continuidad ininterrumpida del sitio y no será responsable de los daños derivados de su falta de disponibilidad, errores, o de la presencia de virus u otros elementos lesivos, siempre que haya adoptado las medidas razonables para evitarlos. La información publicada podrá contener imprecisiones o erratas; el titular se reserva el derecho a modificarla sin previo aviso." },
        { type: "h", text: "6. Enlaces a terceros" },
        { type: "p", text: "El sitio puede contener enlaces a sitios de terceros. El titular no asume responsabilidad alguna sobre sus contenidos, políticas o disponibilidad. La inclusión de estos enlaces no implica aprobación ni asociación." },
        { type: "h", text: "7. Protección de datos" },
        { type: "p", text: "El tratamiento de los datos personales que se recaben a través del sitio se rige por la Política de Privacidad y la Política de Cookies, que forman parte de este Aviso Legal." },
        { type: "h", text: "8. Modificaciones" },
        { type: "p", text: "El titular se reserva el derecho a modificar el presente Aviso Legal para adaptarlo a novedades legislativas o cambios en el sitio. La versión vigente será la publicada en cada momento." },
        { type: "h", text: "9. Legislación aplicable y jurisdicción" },
        { type: "p", text: "Estas condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de [CIUDAD], salvo que la normativa de consumidores establezca otro fuero." },
      ],
    },
    privacidad: {
      title: "Política de privacidad",
      updated: "5 de julio de 2026",
      intro:
        "Esta Política de Privacidad describe cómo se tratan los datos personales que nos facilitas a través de este sitio web, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).",
      blocks: [
        { type: "h", text: "1. Responsable del tratamiento" },
        { type: "ul", items: [
          "Responsable: [RAZÓN SOCIAL]",
          "NIF/CIF: [NIF]",
          "Domicilio: [DOMICILIO SOCIAL]",
          "Correo electrónico: [EMAIL DE CONTACTO]",
          "Delegado de Protección de Datos (si procede): [EMAIL DEL DPD]",
        ]},
        { type: "h", text: "2. Datos que tratamos" },
        { type: "p", text: "Tratamos los datos que nos facilitas a través del formulario de solicitud de demo o contacto: nombre, correo electrónico, teléfono, nombre de la escuela, disciplina, número aproximado de alumnos y el mensaje que quieras incluir. También podemos tratar datos técnicos de navegación (ver la Política de Cookies)." },
        { type: "h", text: "3. Finalidades del tratamiento" },
        { type: "ul", items: [
          "Atender tu solicitud de demo, información o contacto.",
          "Gestionar la relación precontractual y, en su caso, comercial.",
          "Enviarte comunicaciones sobre nuestros servicios cuando nos hayas dado tu consentimiento.",
        ]},
        { type: "h", text: "4. Base jurídica (legitimación)" },
        { type: "ul", items: [
          "Tu consentimiento al enviar el formulario (art. 6.1.a RGPD).",
          "La aplicación de medidas precontractuales a tu solicitud (art. 6.1.b RGPD).",
          "Tu consentimiento específico para el envío de comunicaciones comerciales, revocable en cualquier momento.",
        ]},
        { type: "h", text: "5. Plazo de conservación" },
        { type: "p", text: "Conservaremos tus datos mientras dure la relación y, tras su finalización, durante los plazos legalmente exigidos para atender posibles responsabilidades. Los datos tratados con base en tu consentimiento se conservarán hasta que lo retires." },
        { type: "h", text: "6. Destinatarios y encargados del tratamiento" },
        { type: "p", text: "No cederemos tus datos a terceros salvo obligación legal. Para prestar el servicio podemos recurrir a proveedores que actúan como encargados del tratamiento (por ejemplo: proveedor de alojamiento web, herramientas de correo/CRM, plataformas de analítica y, en el ámbito de la plataforma, la pasarela de pagos). Con todos ellos suscribimos los contratos de encargo exigidos por el art. 28 RGPD." },
        { type: "h", text: "7. Transferencias internacionales" },
        { type: "p", text: "Si alguno de nuestros proveedores estuviera ubicado fuera del Espacio Económico Europeo, la transferencia se realizará con las debidas garantías (decisión de adecuación o cláusulas contractuales tipo de la Comisión Europea)." },
        { type: "h", text: "8. Tus derechos" },
        { type: "p", text: "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a [EMAIL DE CONTACTO] e identificándote debidamente. Si consideras que tus derechos no han sido atendidos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es)." },
        { type: "h", text: "9. Medidas de seguridad" },
        { type: "p", text: "Aplicamos medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo y proteger tus datos frente a accesos no autorizados, pérdida o alteración." },
        { type: "h", text: "10. Menores de edad" },
        { type: "p", text: "El formulario y los servicios de este sitio no están dirigidos a menores de 14 años. Si eres menor, no facilites tus datos sin el consentimiento de tus padres o tutores." },
        { type: "h", text: "11. Veracidad de los datos" },
        { type: "p", text: "Garantizas que los datos aportados son veraces y actuales, y te comprometes a comunicar cualquier modificación. Serás responsable de la información falsa o inexacta que facilites." },
      ],
    },
    cookies: {
      title: "Política de cookies",
      updated: "5 de julio de 2026",
      intro:
        "Esta Política de Cookies explica qué son las cookies, cuáles utiliza este sitio web y cómo puedes gestionarlas, de acuerdo con el artículo 22.2 de la LSSI-CE y las directrices de la Agencia Española de Protección de Datos.",
      blocks: [
        { type: "h", text: "1. ¿Qué son las cookies?" },
        { type: "p", text: "Una cookie es un pequeño archivo de texto que un sitio web almacena en tu dispositivo al visitarlo. Sirven, entre otras cosas, para que el sitio funcione, recordar tus preferencias o medir el uso de la web." },
        { type: "h", text: "2. Tipos de cookies" },
        { type: "ul", items: [
          "Según quién las gestiona: propias (del titular del sitio) o de terceros.",
          "Según su finalidad: técnicas (imprescindibles), de preferencias, de análisis o medición, y de publicidad/marketing.",
          "Según su duración: de sesión (se borran al cerrar el navegador) o persistentes.",
        ]},
        { type: "h", text: "3. Cookies que utiliza este sitio" },
        { type: "p", text: "Este sitio utiliza Vercel Web Analytics, una analítica sin cookies que no almacena información en tu dispositivo y, por tanto, no requiere consentimiento. Además, si prestas tu consentimiento, utilizamos Google Analytics (GA4), que sí instala cookies para medir el uso del sitio. Puedes aceptarlas, rechazarlas o configurarlas en el panel de cookies; mientras no las aceptes, no se instalan. Actualmente no utilizamos cookies de publicidad o marketing." },
        { type: "table", head: ["Cookie", "Titular", "Finalidad", "Duración"], rows: [
          ["_ga", "Google Analytics (terceros)", "Distinguir usuarios para la medición de uso — solo con tu consentimiento", "2 años"],
          ["_ga_<ID>", "Google Analytics (terceros)", "Mantener el estado de la sesión de análisis — solo con tu consentimiento", "2 años"],
          ["(sin cookies)", "Vercel Web Analytics (propia)", "Medición de tráfico agregada, sin cookies ni datos personales", "—"],
        ]},
        { type: "h", text: "4. Consentimiento" },
        { type: "p", text: "Cuando se utilicen cookies no exentas (análisis o marketing), se recabará tu consentimiento previo, informado y granular a través de un panel de configuración, y podrás aceptarlas, rechazarlas o configurarlas. Mientras no lo aceptes, dichas cookies no se instalarán." },
        { type: "h", text: "5. Cómo gestionar o desactivar las cookies" },
        { type: "p", text: "Puedes cambiar tu decisión en cualquier momento desde el enlace «Configuración de cookies» del pie de página. Además, puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador (consulta la ayuda de Google Chrome, Mozilla Firefox, Safari o Microsoft Edge)." },
        { type: "h", text: "6. Actualizaciones" },
        { type: "p", text: "Podemos actualizar esta Política de Cookies para adaptarla a cambios normativos o técnicos. Te recomendamos revisarla periódicamente." },
      ],
    },
  },
  en: {
    avisoLegal: {
      title: "Legal notice and terms of use",
      updated: "5 July 2026",
      intro:
        "In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the identifying details of the owner of this website are made available to users. The Spanish version of this text prevails.",
      blocks: [
        { type: "h", text: "1. Website owner" },
        { type: "ul", items: [
          "Company name: [LEGAL NAME]",
          "Tax ID (NIF/CIF): [TAX ID]",
          "Registered address: [FULL REGISTERED ADDRESS]",
          "Email: [CONTACT EMAIL]",
          "Registry details: [COMMERCIAL REGISTRY DETAILS]",
          "Trade name: Zazu",
          "Website: https://zazu.com.es",
        ]},
        { type: "h", text: "2. Purpose" },
        { type: "p", text: "This Legal Notice governs access to, navigation of and use of the website, without prejudice to specific terms that may apply to particular services. Browsing the site grants the status of user and implies full acceptance of these terms." },
        { type: "h", text: "3. Terms of use" },
        { type: "p", text: "The user agrees to make appropriate and lawful use of the website and its content in accordance with applicable law, good faith and public order. Any unlawful use, or use that harms third parties or may damage or impair the site, is prohibited." },
        { type: "h", text: "4. Intellectual and industrial property" },
        { type: "p", text: "All content on the site (text, photographs, graphics, images, icons, software, trademarks, trade names and logos) is owned by [LEGAL NAME] or by third parties who have authorised its use, and is protected by intellectual and industrial property law. Reproduction, distribution, public communication or transformation without express authorisation is prohibited." },
        { type: "h", text: "5. Liability" },
        { type: "p", text: "The owner does not guarantee the uninterrupted availability of the site and shall not be liable for damage arising from unavailability, errors or the presence of viruses, provided reasonable measures have been taken to prevent them. Published information may contain inaccuracies; the owner reserves the right to modify it without notice." },
        { type: "h", text: "6. Third-party links" },
        { type: "p", text: "The site may contain links to third-party sites. The owner assumes no responsibility for their content, policies or availability. Inclusion of these links does not imply approval or association." },
        { type: "h", text: "7. Data protection" },
        { type: "p", text: "The processing of personal data collected through the site is governed by the Privacy Policy and the Cookie Policy, which form part of this Legal Notice." },
        { type: "h", text: "8. Changes" },
        { type: "p", text: "The owner reserves the right to modify this Legal Notice to adapt it to legislative developments or changes to the site. The version in force is the one published at any given time." },
        { type: "h", text: "9. Governing law and jurisdiction" },
        { type: "p", text: "These terms are governed by Spanish law. For the resolution of any dispute, the parties submit to the Courts of [CITY], unless consumer regulations establish another jurisdiction." },
      ],
    },
    privacidad: {
      title: "Privacy policy",
      updated: "5 July 2026",
      intro:
        "This Privacy Policy describes how the personal data you provide through this website is processed, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).",
      blocks: [
        { type: "h", text: "1. Data controller" },
        { type: "ul", items: [
          "Controller: [LEGAL NAME]",
          "Tax ID (NIF/CIF): [TAX ID]",
          "Address: [REGISTERED ADDRESS]",
          "Email: [CONTACT EMAIL]",
          "Data Protection Officer (if applicable): [DPO EMAIL]",
        ]},
        { type: "h", text: "2. Data we process" },
        { type: "p", text: "We process the data you provide through the demo request or contact form: name, email, phone, school name, discipline, approximate number of students and any message you include. We may also process technical browsing data (see the Cookie Policy)." },
        { type: "h", text: "3. Purposes" },
        { type: "ul", items: [
          "To respond to your demo, information or contact request.",
          "To manage the pre-contractual and, where applicable, commercial relationship.",
          "To send you communications about our services where you have given consent.",
        ]},
        { type: "h", text: "4. Legal basis" },
        { type: "ul", items: [
          "Your consent when submitting the form (Art. 6.1.a GDPR).",
          "Pre-contractual measures taken at your request (Art. 6.1.b GDPR).",
          "Your specific consent for marketing communications, which you may withdraw at any time.",
        ]},
        { type: "h", text: "5. Retention period" },
        { type: "p", text: "We will keep your data for the duration of the relationship and, thereafter, for the periods legally required to address possible liabilities. Data processed on the basis of your consent will be kept until you withdraw it." },
        { type: "h", text: "6. Recipients and processors" },
        { type: "p", text: "We will not share your data with third parties except where legally required. To provide the service we may use providers acting as data processors (e.g. web hosting, email/CRM tools, analytics platforms and, within the platform, the payment gateway). We sign the processing agreements required by Art. 28 GDPR with all of them." },
        { type: "h", text: "7. International transfers" },
        { type: "p", text: "If any of our providers is located outside the European Economic Area, the transfer will be carried out with appropriate safeguards (adequacy decision or European Commission standard contractual clauses)." },
        { type: "h", text: "8. Your rights" },
        { type: "p", text: "You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw your consent, by writing to [CONTACT EMAIL] with proof of identity. If you believe your rights have not been respected, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es)." },
        { type: "h", text: "9. Security measures" },
        { type: "p", text: "We apply appropriate technical and organisational measures to ensure a level of security appropriate to the risk and to protect your data against unauthorised access, loss or alteration." },
        { type: "h", text: "10. Minors" },
        { type: "p", text: "The form and services on this site are not directed at children under 14. If you are a minor, do not provide your data without the consent of your parents or guardians." },
        { type: "h", text: "11. Accuracy of data" },
        { type: "p", text: "You warrant that the data provided is truthful and up to date, and undertake to notify any changes. You are responsible for any false or inaccurate information you provide." },
      ],
    },
    cookies: {
      title: "Cookie policy",
      updated: "5 July 2026",
      intro:
        "This Cookie Policy explains what cookies are, which ones this website uses and how you can manage them, in accordance with Article 22.2 of the LSSI-CE and the guidelines of the Spanish Data Protection Agency.",
      blocks: [
        { type: "h", text: "1. What are cookies?" },
        { type: "p", text: "A cookie is a small text file that a website stores on your device when you visit it. Among other things, they help the site work, remember your preferences or measure usage." },
        { type: "h", text: "2. Types of cookies" },
        { type: "ul", items: [
          "By who manages them: first-party (the site owner) or third-party.",
          "By purpose: technical (essential), preference, analytics/measurement, and advertising/marketing.",
          "By duration: session (deleted when you close the browser) or persistent.",
        ]},
        { type: "h", text: "3. Cookies used by this site" },
        { type: "p", text: "This site uses Vercel Web Analytics, a cookieless analytics tool that stores no information on your device and therefore requires no consent. In addition, if you give consent, we use Google Analytics (GA4), which does set cookies to measure site usage. You can accept, reject or configure them in the cookie panel; until you accept, they are not installed. We currently do not use advertising or marketing cookies." },
        { type: "table", head: ["Cookie", "Owner", "Purpose", "Duration"], rows: [
          ["_ga", "Google Analytics (third-party)", "Distinguish users for usage measurement — only with your consent", "2 years"],
          ["_ga_<ID>", "Google Analytics (third-party)", "Persist the analytics session state — only with your consent", "2 years"],
          ["(no cookies)", "Vercel Web Analytics (first-party)", "Aggregate traffic measurement, no cookies or personal data", "—"],
        ]},
        { type: "h", text: "4. Consent" },
        { type: "p", text: "When non-exempt cookies (analytics or marketing) are used, your prior, informed and granular consent will be obtained through a settings panel, where you can accept, reject or configure them. Until you accept, such cookies will not be installed." },
        { type: "h", text: "5. How to manage or disable cookies" },
        { type: "p", text: "You can change your choice at any time via the “Cookie settings” link in the footer. You can also allow, block or delete cookies from your browser settings (see the help pages for Google Chrome, Mozilla Firefox, Safari or Microsoft Edge)." },
        { type: "h", text: "6. Updates" },
        { type: "p", text: "We may update this Cookie Policy to adapt it to regulatory or technical changes. We recommend reviewing it periodically." },
      ],
    },
  },
};
