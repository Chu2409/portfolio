export const idiomas = ["es", "en"] as const;
export type Idioma = (typeof idiomas)[number];

export const perfil = {
  nombre: "Daniel Zhu",
  correo: "dzhu2409@gmail.com",
  github: "https://github.com/Chu2409",
  linkedin: "https://www.linkedin.com/in/chu-er/",
  formulario: "https://formspree.io/f/xqaqzlzz",
  // Ruta del PDF dentro de /public cuando el CV esté listo, se completa con el idioma (/cv-daniel-zhu-es.pdf). Se genera en multi-repo/cv.
  cv: "/cv-daniel-zhu" as string | null,
};

interface Area {
  rotulo: string;
  titulo: string;
  detalle: string;
  tecnologias: string[];
}

interface Caso {
  rotulo: string;
  titulo: string;
  descripcion: string;
  impacto: string;
  pasos?: string[];
  stack: string[];
}

interface Puesto {
  periodo: string;
  cargo: string;
  empresa: string;
  modalidad: string;
  resumen: string;
  logros: string[];
}

export interface Proyecto {
  id: "bazar" | "nous" | "dl";
  titulo: string;
  estado: string;
  descripcion: string;
  stack: string[];
  modulos?: string[];
  codigo?: string;
  demo?: string;
}

export interface Contenido {
  meta: { titulo: string; descripcion: string; cargo: string };
  nav: { trabajo: string; experiencia: string; proyectos: string; contacto: string };
  controles: { idioma: string; otroIdioma: string; tema: string; saltar: string; menu: string };
  hero: {
    disponibilidad: string;
    titulo: string;
    presentacion: string;
    escribir: string;
    verCasos: string;
    cv: string;
  };
  areas: { titulo: string; lista: Area[] };
  trabajo: { titulo: string; nota: string; casos: Caso[] };
  experiencia: {
    titulo: string;
    puestos: Puesto[];
  };
  proyectos: {
    titulo: string;
    nota: string;
    codigo: string;
    demo: string;
    privado: string;
    capturaDe: string;
    modulos: string;
    lista: Proyecto[];
  };
  contacto: {
    titulo: string;
    texto: string;
    ubicacion: string;
    nombre: string;
    correo: string;
    mensaje: string;
    enviar: string;
    enviando: string;
    enviado: string;
    error: string;
  };
  pie: { codigo: string };
}

const es: Contenido = {
  meta: {
    titulo: "Daniel Zhu · Ingeniero de software full-stack",
    descripcion:
      "Ingeniero de software full-stack. Aplicaciones web, APIs y automatizaciones para empresas como Fideval, Deloitte y FEMSA, con .NET, Python, NestJS, Angular y React.",
    cargo: "Ingeniero de software full-stack",
  },
  nav: {
    trabajo: "Trabajo",
    experiencia: "Experiencia",
    proyectos: "Proyectos",
    contacto: "Contacto",
  },
  controles: {
    idioma: "Read in English",
    otroIdioma: "EN",
    tema: "Cambiar entre tema claro y oscuro",
    saltar: "Saltar al contenido",
    menu: "Menú de secciones",
  },
  hero: {
    disponibilidad: "Disponible para nuevos proyectos",
    titulo: "Desarrollo software de punta a punta.",
    presentacion:
      "Soy Daniel Zhu, ingeniero de software full-stack. Diseño y construyo aplicaciones web, APIs, integraciones y automatizaciones que reemplazan el trabajo manual, desde la base de datos hasta la interfaz.",
    escribir: "Escríbeme",
    verCasos: "Ver mi trabajo",
    cv: "Descargar CV",
  },
  areas: {
    titulo: "Qué hago",
    lista: [
      {
        rotulo: "Backend",
        titulo: "APIs y servicios",
        detalle: "APIs, tareas programadas e integraciones con servicios de terceros.",
        tecnologias: ["C# · .NET", "Python · FastAPI", "NestJS", "Java"],
      },
      {
        rotulo: "Frontend",
        titulo: "Aplicaciones web",
        detalle: "De paneles internos y micro frontends a tiendas en línea.",
        tecnologias: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        rotulo: "Datos",
        titulo: "Bases de datos",
        detalle: "Modelado, consultas, migraciones y lógica de negocio en la base.",
        tecnologias: ["Oracle · PL/SQL", "PostgreSQL", "SQL Server", "MySQL", "Redis"],
      },
      {
        rotulo: "Infraestructura",
        titulo: "Servidores y despliegues",
        detalle: "Contenedores, administración de servidores y puesta en producción.",
        tecnologias: ["Docker", "Linux", "IIS", "WHM/cPanel", "Git"],
      },
      {
        rotulo: "Automatización e IA",
        titulo: "Procesos que corren solos",
        detalle: "Navegadores automatizados, colas de trabajo e integración de modelos de lenguaje.",
        tecnologias: ["Playwright", "BullMQ", "APIs de LLM", "pgvector"],
      },
      {
        rotulo: "Sistemas heredados",
        titulo: "Mantener y modernizar",
        detalle: "Trabajo sobre sistemas que llevan años en producción sin detener la operación.",
        tecnologias: ["Oracle Forms", "ASP.NET WebForms", "WordPress"],
      },
    ],
  },
  trabajo: {
    titulo: "Trabajo destacado",
    nota: "Sistemas construidos para Fideval y Deloitte. También he levantado requerimientos con FEMSA, Banco ProCredit y ARGOS.",
    casos: [
      {
        rotulo: "Fideval · Automatización",
        titulo: "Motor de debida diligencia",
        descripcion:
          "Recibe una identificación, consulta en paralelo una decena de portales públicos y varios sistemas internos, guarda la evidencia de cada fuente, califica el riesgo y genera el expediente en Word y Excel. Incluye API, worker con cola, conectores con navegador automatizado y pantallas.",
        impacto: "Lo que era una revisión manual, portal por portal, ahora es una sola consulta.",
        pasos: ["Identificación", "Fuentes en paralelo", "Calificación de riesgo", "Expediente listo"],
        stack: ["Python", "FastAPI", "Playwright", "Docker", "Oracle", "Angular"],
      },
      {
        rotulo: "Fideval · Contabilidad",
        titulo: "Registro automático de facturas",
        descripcion:
          "Una tarea lee las facturas de proveedores, las valida contra la autoridad tributaria y propone el registro contable. Tras la revisión en la web, se registra y se emite el comprobante electrónico firmado.",
        impacto: "Contabilidad dejó de digitar cada factura: solo revisa y confirma.",
        stack: [".NET 10", "PL/SQL", "Angular", "Firma electrónica"],
      },
      {
        rotulo: "Fideval · Integración bancaria",
        titulo: "Conciliación con cinco bancos",
        descripcion:
          "Una API que consulta los movimientos en los servicios de cinco bancos y los cruza con las transacciones esperadas, con una lógica de cruce común y reglas propias de cada banco.",
        impacto: "Confirmar un depósito ya no exige abrir el estado de cuenta de cada banco.",
        stack: [".NET", "APIs REST", "Oracle"],
      },
      {
        rotulo: "Fideval · Autogestión",
        titulo: "Actualización de datos para fideicomisos",
        descripcion:
          "Las personas naturales y jurídicas de fideicomisos verifican y actualizan sus propios datos desde un enlace, en un formulario por pestañas. La aplicación existía solo para fondos de inversión.",
        impacto: "Los clientes de fideicomisos actualizan sus datos sin pasar por la fiduciaria.",
        stack: [".NET 8", "Angular", "PL/SQL", "Oracle Forms"],
      },
      {
        rotulo: "Deloitte · Administración de personal",
        titulo: "Administración de personal y buzones",
        descripcion:
          "Gestión de empleados, buzones de correo, grupos y oficinas para Latinoamérica, con roles y permisos, bitácoras y notificaciones por correo. Procesos programados sincronizan empleados y oficinas y verifican vigencias.",
        impacto: "Reemplazó al sistema anterior, con todos sus datos migrados.",
        stack: [".NET 8", "ASP.NET Core MVC", "EF Core", "SQL Server", "TypeScript"],
      },
    ],
  },
  experiencia: {
    titulo: "Experiencia",
    puestos: [
      {
        periodo: "nov. 2024 — Actualidad",
        cargo: "Desarrollador full-stack",
        empresa: "Proconty",
        modalidad: "Remoto",
        resumen: "Desarrollo para Fideval y Deloitte, y levantamiento de requerimientos con FEMSA, Banco ProCredit y ARGOS.",
        logros: [
          "Para Fideval: registro automático de facturas, conciliación con cinco bancos y archivos de pago de tesorería, de punta a punta.",
          "Para Deloitte: SABE, la aplicación de administración de personal y buzones para Latinoamérica.",
          "Levantamiento de requerimientos e historias de usuario con las áreas de negocio de cada cliente.",
          "Backends en .NET, frontends en Angular y lógica en Oracle, con documentación, planes de prueba y entregas coordinadas con infraestructura.",
        ],
      },
      {
        periodo: "jun. 2026 — Actualidad",
        cargo: "Desarrollador full-stack",
        empresa: "AudiSupport",
        modalidad: "Remoto, por proyecto",
        resumen: "Desarrollo por proyecto para Fideval.",
        logros: [
          "Motor de debida diligencia: diseño y desarrollo completo de la API, el worker con cola y los conectores con navegador automatizado, en Python con FastAPI, SQLAlchemy y Playwright sobre Docker.",
          "Autogestión de datos de personas: extensión a fideicomisos, para personas naturales y jurídicas, de la aplicación que existía para fondos (.NET 8, Angular, PL/SQL y Oracle Forms).",
        ],
      },
      {
        periodo: "nov. 2024 — feb. 2026",
        cargo: "Desarrollador full-stack e infraestructura",
        empresa: "CODETEG",
        modalidad: "Presencial en Ambato, tercerizado para Proconty",
        resumen: "Desarrollo para clientes de la empresa y operación de sus servidores.",
        logros: [
          "Administración de servidores VPS con aplicaciones en Docker y de 20 a 30 clientes en WHM/cPanel, entre ellos entidades públicas.",
          "Pipelines de CI/CD en Azure, migraciones de servidores, respaldos automáticos y certificados SSL.",
          "Diseño y desarrollo de sitios en WordPress, y funcionalidades con React y NestJS.",
        ],
      },
    ],
  },
  proyectos: {
    titulo: "Proyectos personales",
    nota: "Lo que construyo por mi cuenta.",
    codigo: "Código",
    demo: "Ver en vivo",
    privado: "Repositorio privado",
    capturaDe: "Captura de",
    modulos: "Módulos",
    lista: [
      {
        id: "bazar",
        titulo: "Punto de venta para un bazar",
        estado: "Ventas e inventario",
        descripcion:
          "Ventas, inventario, cotizaciones, cajas y sucursales, con facturación electrónica, impresión directa de comprobantes y actualización en tiempo real.",
        stack: ["NestJS", "Prisma", "PostgreSQL", "BullMQ", "Next.js", "Docker"],
      },
      {
        id: "nous",
        titulo: "NousAI",
        estado: "Plataforma educativa con IA",
        descripcion:
          "La usan más de 300 estudiantes y docentes de la Universidad Técnica de Ambato. Los docentes generan lecciones, resúmenes y cuestionarios con modelos de lenguaje; los estudiantes conversan con un asistente que responde sobre el contenido del curso mediante búsqueda semántica.",
        stack: ["NestJS", "Prisma", "PostgreSQL", "pgvector", "BullMQ", "Vercel AI SDK", "Vue"],
        modulos: [
          "Lecciones generadas",
          "Chat con el curso",
          "Cuestionarios",
          "Videos transcritos",
          "Retroalimentación",
          "Analítica",
        ],
      },
      {
        id: "dl",
        titulo: "D&L American Outlet",
        estado: "E-commerce",
        descripcion:
          "Tienda en línea con catálogo, filtros y carrito, más un panel de administración para productos, tallas, colores y pedidos.",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
        codigo: "https://github.com/Chu2409/e-commerce",
      },
    ],
  },
  contacto: {
    titulo: "Hablemos",
    texto: "Busco nuevos proyectos y oportunidades. Cuéntame qué necesitas y te respondo por correo.",
    ubicacion: "Ambato, Ecuador",
    nombre: "Nombre",
    correo: "Correo",
    mensaje: "Mensaje",
    enviar: "Enviar mensaje",
    enviando: "Enviando…",
    enviado: "Mensaje enviado. Te respondo por correo.",
    error: "No se pudo enviar el mensaje. Escríbeme a",
  },
  pie: {
    codigo: "Código de este sitio",
  },
};

const en: Contenido = {
  meta: {
    titulo: "Daniel Zhu · Full-stack software engineer",
    descripcion:
      "Full-stack software engineer. Web applications, APIs and automation for companies such as Fideval, Deloitte and FEMSA, with .NET, Python, NestJS, Angular and React.",
    cargo: "Full-stack software engineer",
  },
  nav: {
    trabajo: "Work",
    experiencia: "Experience",
    proyectos: "Projects",
    contacto: "Contact",
  },
  controles: {
    idioma: "Leer en español",
    otroIdioma: "ES",
    tema: "Switch between light and dark theme",
    saltar: "Skip to content",
    menu: "Sections menu",
  },
  hero: {
    disponibilidad: "Available for new projects",
    titulo: "I build software end to end.",
    presentacion:
      "I'm Daniel Zhu, a full-stack software engineer. I design and build web applications, APIs, integrations and automation that replace manual work, from the database to the interface.",
    escribir: "Get in touch",
    verCasos: "See my work",
    cv: "Download CV",
  },
  areas: {
    titulo: "What I do",
    lista: [
      {
        rotulo: "Backend",
        titulo: "APIs and services",
        detalle: "APIs, scheduled jobs and integrations with third-party services.",
        tecnologias: ["C# · .NET", "Python · FastAPI", "NestJS", "Java"],
      },
      {
        rotulo: "Frontend",
        titulo: "Web applications",
        detalle: "From internal dashboards and micro frontends to online stores.",
        tecnologias: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        rotulo: "Data",
        titulo: "Databases",
        detalle: "Modeling, queries, migrations and business logic in the database.",
        tecnologias: ["Oracle · PL/SQL", "PostgreSQL", "SQL Server", "MySQL", "Redis"],
      },
      {
        rotulo: "Infrastructure",
        titulo: "Servers and releases",
        detalle: "Containers, server administration and production releases.",
        tecnologias: ["Docker", "Linux", "IIS", "WHM/cPanel", "Git"],
      },
      {
        rotulo: "Automation and AI",
        titulo: "Processes that run themselves",
        detalle: "Browser automation, job queues and language model integration.",
        tecnologias: ["Playwright", "BullMQ", "LLM APIs", "pgvector"],
      },
      {
        rotulo: "Legacy systems",
        titulo: "Maintain and modernize",
        detalle: "I work on systems that have been in production for years without stopping operations.",
        tecnologias: ["Oracle Forms", "ASP.NET WebForms", "WordPress"],
      },
    ],
  },
  trabajo: {
    titulo: "Selected work",
    nota: "Systems built for Fideval and Deloitte. I have also gathered requirements with FEMSA, Banco ProCredit and ARGOS.",
    casos: [
      {
        rotulo: "Fideval · Automation",
        titulo: "Due diligence engine",
        descripcion:
          "Takes an ID number, queries about ten public portals and several internal systems in parallel, stores the evidence from each source, scores risk and generates the case file in Word and Excel. It includes an API, a queue worker, browser-automation connectors and screens.",
        impacto: "What used to be a manual review, portal by portal, is now a single query.",
        pasos: ["ID number", "Sources in parallel", "Risk scoring", "Case file ready"],
        stack: ["Python", "FastAPI", "Playwright", "Docker", "Oracle", "Angular"],
      },
      {
        rotulo: "Fideval · Accounting",
        titulo: "Automatic invoice entry",
        descripcion:
          "A job reads supplier invoices, validates them against the tax authority and proposes the accounting entry. After review on the web, it is posted and the signed electronic receipt is issued.",
        impacto: "Accounting no longer types in each invoice: they just review and confirm.",
        stack: [".NET 10", "PL/SQL", "Angular", "Digital signature"],
      },
      {
        rotulo: "Fideval · Bank integration",
        titulo: "Reconciliation with five banks",
        descripcion:
          "An API that pulls movements from the services of five banks and matches them with the expected transactions, with shared matching logic and bank-specific rules.",
        impacto: "Confirming a deposit no longer means opening each bank's statement.",
        stack: [".NET", "REST APIs", "Oracle"],
      },
      {
        rotulo: "Fideval · Self-service",
        titulo: "Data updates for trusts",
        descripcion:
          "Individuals and companies with trusts verify and update their own data from a link, in a tabbed form. The application previously existed only for investment funds.",
        impacto: "Trust clients update their data without going through the trust company.",
        stack: [".NET 8", "Angular", "PL/SQL", "Oracle Forms"],
      },
      {
        rotulo: "Deloitte · Staff administration",
        titulo: "Staff and mailbox administration",
        descripcion:
          "Management of employees, mailboxes, groups and offices across Latin America, with roles and permissions, audit logs and email notifications. Scheduled jobs sync employees and offices and check expirations.",
        impacto: "It replaced the previous system, with all its data migrated.",
        stack: [".NET 8", "ASP.NET Core MVC", "EF Core", "SQL Server", "TypeScript"],
      },
    ],
  },
  experiencia: {
    titulo: "Experience",
    puestos: [
      {
        periodo: "Nov 2024 — Present",
        cargo: "Full-stack developer",
        empresa: "Proconty",
        modalidad: "Remote",
        resumen: "Development for Fideval and Deloitte, and requirements gathering with FEMSA, Banco ProCredit and ARGOS.",
        logros: [
          "For Fideval: automatic invoice entry, reconciliation with five banks and treasury payment files, end to end.",
          "For Deloitte: SABE, the staff and mailbox administration application for Latin America.",
          "Requirements gathering and user stories with each client's business areas.",
          "Backends in .NET, frontends in Angular and logic in Oracle, with documentation, test plans and releases coordinated with infrastructure.",
        ],
      },
      {
        periodo: "Jun 2026 — Present",
        cargo: "Full-stack developer",
        empresa: "AudiSupport",
        modalidad: "Remote, project-based",
        resumen: "Project-based development for Fideval.",
        logros: [
          "Due diligence engine: full design and development of the API, queue worker and browser-automation connectors, in Python with FastAPI, SQLAlchemy and Playwright on Docker.",
          "Personal data self-service: extended the existing investment funds application to trusts, for individuals and companies (.NET 8, Angular, PL/SQL and Oracle Forms).",
        ],
      },
      {
        periodo: "Nov 2024 — Feb 2026",
        cargo: "Full-stack developer and infrastructure",
        empresa: "CODETEG",
        modalidad: "On-site in Ambato, outsourced to Proconty",
        resumen: "Development for the company's clients and operation of its servers.",
        logros: [
          "Managed VPS servers with Dockerized applications and 20 to 30 clients on WHM/cPanel, including public institutions.",
          "CI/CD pipelines in Azure, server migrations, automated backups and SSL certificates.",
          "Designed and built WordPress sites, and features with React and NestJS.",
        ],
      },
    ],
  },
  proyectos: {
    titulo: "Personal projects",
    nota: "What I build on my own.",
    codigo: "Code",
    demo: "View live",
    privado: "Private repository",
    capturaDe: "Screenshot of",
    modulos: "Modules",
    lista: [
      {
        id: "bazar",
        titulo: "Point of sale for a retail shop",
        estado: "Sales and inventory",
        descripcion:
          "Sales, inventory, quotations, cash registers and branches, with electronic invoicing, direct receipt printing and real-time updates.",
        stack: ["NestJS", "Prisma", "PostgreSQL", "BullMQ", "Next.js", "Docker"],
      },
      {
        id: "nous",
        titulo: "NousAI",
        estado: "AI-powered learning platform",
        descripcion:
          "Used by more than 300 students and teachers at Universidad Técnica de Ambato. Teachers generate lessons, summaries and quizzes with language models; students chat with an assistant that answers about the course content through semantic search.",
        stack: ["NestJS", "Prisma", "PostgreSQL", "pgvector", "BullMQ", "Vercel AI SDK", "Vue"],
        modulos: [
          "Generated lessons",
          "Chat with the course",
          "Quizzes",
          "Transcribed videos",
          "Feedback",
          "Analytics",
        ],
      },
      {
        id: "dl",
        titulo: "D&L American Outlet",
        estado: "E-commerce",
        descripcion:
          "Online store with catalog, filters and cart, plus an admin panel for products, sizes, colors and orders.",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
        codigo: "https://github.com/Chu2409/e-commerce",
      },
    ],
  },
  contacto: {
    titulo: "Let's talk",
    texto: "I'm looking for new projects and opportunities. Tell me what you need and I'll reply by email.",
    ubicacion: "Ambato, Ecuador",
    nombre: "Name",
    correo: "Email",
    mensaje: "Message",
    enviar: "Send message",
    enviando: "Sending…",
    enviado: "Message sent. I'll reply by email.",
    error: "The message could not be sent. Write to me at",
  },
  pie: {
    codigo: "Source of this site",
  },
};

export const contenido: Record<Idioma, Contenido> = { es, en };

export const rutaDe = (idioma: Idioma) => (idioma === "es" ? "/" : "/en/");
