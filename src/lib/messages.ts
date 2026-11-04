/** UI copy for every page. Markdown content is translated in `content/**\/*.es.md`. */
const en = {
  role: 'Backend & automation engineer',
  summary:
    'Electrical engineer with a dual career: national payment gateways in Node.js on one side, Body in White production lines for Jaguar Land Rover and Volvo on the other. I build mission-critical systems from scratch.',
  location: 'Madrid, Spain',
  availability: 'Open to relocation & on-site work worldwide',

  nav: {
    index: 'Index',
    work: 'Work',
    gallery: 'Gallery',
    about: 'About',
    contact: 'Contact',
    label: 'Main navigation',
    subtitle: 'Backend · Automation · rev 26.11',
    language: 'Language',
  },
  telemetry: [
    'STATUS ● OPEN TO WORK',
    'STACK NODE.JS · GO · TYPESCRIPT',
    'DB POSTGRESQL · MONGODB',
    'PROTO REST · SOAP · WEBSOCKETS',
    'PLC STUDIO 5000 · TIA PORTAL',
    'OEM JLR · VOLVO',
    'LANG ES · PT · EN',
    'COFFEE 3 / ∞',
  ],

  home: {
    title: ['Systems', 'that', 'don’t', 'stop.'],
    viewWork: 'View the work',
    experience: 'Experience',
    quickFacts: 'Quick facts',
    specSheet: 'Spec sheet',
    readouts: [
      { label: 'Years in backend', value: '05+' },
      { label: 'BIW plants', value: '03' },
      { label: 'Languages', value: '03' },
      { label: 'Line downtime', value: '0*' },
    ],
    footnote: '* integrating new models at Volvo Torslanda',
    heroCaption: 'FIG. 00 — BIW robot cell, drawn by hand',
    disciplinesKicker: 'Disciplines',
    disciplinesTitle: 'Three trades, one toolbelt.',
    disciplines: [
      {
        code: 'BE',
        title: 'High-scale backends',
        text: 'Node.js and Go services, REST and webhook APIs, payment gateways talking SOAP to banking cores.',
      },
      {
        code: 'PLC',
        title: 'Industrial automation',
        text: 'PLC programming and commissioning for Body in White lines — Studio 5000, TIA Portal, Ignition.',
      },
      {
        code: 'QA',
        title: 'Test & commissioning',
        text: 'Postman suites, test matrices and virtual commissioning — proven before it touches production.',
      },
    ],
    workKicker: 'Selected work',
    workTitle: 'Deployed, not just designed.',
    allProjects: 'All projects',
    galleryKicker: 'Field log',
    galleryTitle: 'From the plant floor.',
    openGallery: 'Open field log',
    quote: '“If it runs on a live production line, it runs anywhere.”',
    readAbout: 'Read the about page',
  },

  about: {
    kicker: 'About the engineer',
    title: ['Half code, half ', 'control', '.'],
    imageAlt:
      'Joao holding his approved thesis in front of a large tree on the UNIMET campus',
    figcaption: 'Thesis approved with honours · UNIMET',
    intro: (name: string) =>
      `I’m ${name} — an electrical engineer who writes backends and programs production lines.`,
    p1: 'As lead backend developer at Chinchin I architected a national B2B payment gateway for PedidosYa, INTT and major retailers. Today, at Atlas Company, I program and commission PLCs for Body in White lines at Jaguar Land Rover in Solihull and Liverpool and at Volvo in Torslanda.',
    p2: (location: string) =>
      `Before that I built a P2P currency exchange for a national bank, RESTful content systems for TV Azteca, and photovoltaic and diesel backup power for critical infrastructure. Based in ${location}, open to relocation and on-site work anywhere.`,
    workWithMe: 'Work with me',
    seeProjects: 'See projects',
    principlesLabel: 'Operating parameters',
    principles: [
      {
        title: 'Zero downtime is the spec',
        text: 'A payment that fails or a line that stops costs real money. Design for the busiest hour, not the average one.',
      },
      {
        title: 'Build it from scratch, own it',
        text: 'From an empty BIW zone or an empty repo — I take the architecture all the way to commissioning.',
      },
      {
        title: 'Test matrices before opinions',
        text: 'Postman suites, virtual commissioning and structured test matrices settle debates before production does.',
      },
      {
        title: 'Talk to the people who run it',
        text: 'Requirements come from operators and clients — from PedidosYa in Argentina to line leads in Sweden.',
      },
    ],
    toolkitTitle: 'Bill of materials',
    toolkitHead: ['Item', 'Category', 'Components'],
    toolkit: [
      [
        'Backend',
        'Node.js · Go · JavaScript/TypeScript · REST API design · microservices · webhooks',
      ],
      [
        'Data & finance',
        'PostgreSQL · MongoDB · P2P matching algorithms · B2B payment gateways',
      ],
      ['Protocols', 'HTTP/REST · SOAP · WebSockets · TCP/IP'],
      [
        'Automation (BIW)',
        'Siemens TIA Portal · Rockwell Studio 5000 · Ignition SCADA · interlocking logic · cycle time optimisation · SEW drives · FESTO',
      ],
      [
        'Testing & QA',
        'Postman automation · test matrices · virtual commissioning · safety checks',
      ],
      [
        'Languages',
        'Spanish (native) · Portuguese (fluent) · English (professional, UK & Sweden)',
      ],
      [
        'Education',
        'B.S. Electrical Engineering — Universidad Metropolitana (UNIMET), Venezuela. Thesis with honours: a robust controller for a magnetic levitation system.',
      ],
    ],
    serviceLog: 'Service log',
    present: 'Present',
    education: 'Education',
    skills: 'Skills',
  },

  projects: {
    kicker: (n: number) => `Project register · ${n} entries`,
    title: ['Built to run ', 'in production', '.'],
    sheet: (i: string, n: string) => `Sheet ${i} of ${n}`,
    rev: 'Rev',
    stack: 'Stack',
    notes: 'Engineering notes',
    source: 'Source',
    live: 'Live',
    empty: 'No projects published yet.',
    cta: 'Have a system that can’t afford to go down?',
    start: 'Start a project',
  },

  gallery: {
    kicker: 'Field log',
    title: ['Notes from the ', 'plant floor', '.'],
    intro:
      'Photos from my own posts — commissioning, testing and the milestones in between.',
  },

  contact: {
    title: ['Send a signal. I’ll ', 'reply', '.'],
    intro:
      'Tell me about the system, the problem and what it can’t afford to get wrong. I work on backends and payment platforms, PLC automation and commissioning — and the software that ties them together.',
    channels: 'Other channels',
    base: 'Base',
    timeZone: 'Time zone',
    socialNotes: {
      github: 'Go, Node.js & TypeScript projects',
      linkedin: 'Career log & references',
      email: 'Fastest route to a reply',
    },
  },

  footer: {
    end: '§ End of document',
    title: ['Got a high-stakes,', 'hard problem?'],
    cta: 'Get in touch',
    channels: 'Channels',
    base: 'Base of operations',
    tagline: 'Designed, built & commissioned on site',
  },

  notFound: {
    kicker: 'Error 404 · Signal lost',
    title: 'Off the line.',
    text: 'This page isn’t on the production plan. Head back to the start and try another route.',
    back: 'Back to start',
  },

  form: {
    header: 'Form TX-01 · Transmission',
    open: '● Channel open',
    receivedTitle: 'Message received',
    receivedText:
      'Thanks for reaching out. Your message was accepted — expect a reply within two working days.',
    another: 'Send another message',
    honeypot: 'Leave this empty',
    legend: 'Your message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Ada Lovelace',
    emailPlaceholder: 'ada@company.com',
    messagePlaceholder: 'System, problem, timeline…',
    sending: 'Sending…',
    send: 'Send message',
    sendingStatus: 'Sending your message…',
    error:
      'We couldn’t confirm your message. Your details are still here; please try again. Local previews don’t process submissions.',
  },
}

export type Messages = typeof en

const es: Messages = {
  role: 'Ingeniero backend y de automatización',
  summary:
    'Ingeniero electricista con una carrera dual: pasarelas de pago nacionales en Node.js por un lado, líneas de producción Body in White para Jaguar Land Rover y Volvo por el otro. Construyo sistemas de misión crítica desde cero.',
  location: 'Madrid, España',
  availability:
    'Disponible para reubicación y trabajo presencial en todo el mundo',

  nav: {
    index: 'Inicio',
    work: 'Proyectos',
    gallery: 'Galería',
    about: 'Sobre mí',
    contact: 'Contacto',
    label: 'Navegación principal',
    subtitle: 'Backend · Automatización · rev 26.11',
    language: 'Idioma',
  },
  telemetry: [
    'ESTADO ● DISPONIBLE',
    'STACK NODE.JS · GO · TYPESCRIPT',
    'BD POSTGRESQL · MONGODB',
    'PROTO REST · SOAP · WEBSOCKETS',
    'PLC STUDIO 5000 · TIA PORTAL',
    'OEM JLR · VOLVO',
    'IDIOMAS ES · PT · EN',
    'CAFÉ 3 / ∞',
  ],

  home: {
    title: ['Sistemas', 'que', 'no', 'paran.'],
    viewWork: 'Ver proyectos',
    experience: 'Experiencia',
    quickFacts: 'Datos rápidos',
    specSheet: 'Ficha técnica',
    readouts: [
      { label: 'Años en backend', value: '05+' },
      { label: 'Plantas BIW', value: '03' },
      { label: 'Idiomas', value: '03' },
      { label: 'Paradas de línea', value: '0*' },
    ],
    footnote: '* integrando nuevos modelos en Volvo Torslanda',
    heroCaption: 'FIG. 00 — Celda robotizada BIW, dibujada a mano',
    disciplinesKicker: 'Disciplinas',
    disciplinesTitle: 'Tres oficios, una caja de herramientas.',
    disciplines: [
      {
        code: 'BE',
        title: 'Backends de alta escala',
        text: 'Servicios en Node.js y Go, APIs REST y webhooks, pasarelas de pago conectadas por SOAP a núcleos bancarios.',
      },
      {
        code: 'PLC',
        title: 'Automatización industrial',
        text: 'Programación y puesta en marcha de PLC para líneas Body in White — Studio 5000, TIA Portal, Ignition.',
      },
      {
        code: 'QA',
        title: 'Pruebas y puesta en marcha',
        text: 'Suites de Postman, matrices de prueba y puesta en marcha virtual — probado antes de llegar a producción.',
      },
    ],
    workKicker: 'Proyectos destacados',
    workTitle: 'Desplegados, no solo diseñados.',
    allProjects: 'Todos los proyectos',
    galleryKicker: 'Bitácora',
    galleryTitle: 'Desde la planta.',
    openGallery: 'Abrir bitácora',
    quote:
      '“Si funciona en una línea de producción activa, funciona en cualquier parte.”',
    readAbout: 'Leer sobre mí',
  },

  about: {
    kicker: 'Sobre el ingeniero',
    title: ['Mitad código, mitad ', 'control', '.'],
    imageAlt:
      'Joao sosteniendo su tesis aprobada frente a un gran árbol en el campus de la UNIMET',
    figcaption: 'Tesis aprobada con mención honorífica · UNIMET',
    intro: (name: string) =>
      `Soy ${name} — un ingeniero electricista que escribe backends y programa líneas de producción.`,
    p1: 'Como desarrollador backend principal en Chinchin diseñé la arquitectura de una pasarela de pagos B2B nacional para PedidosYa, INTT y grandes minoristas. Hoy, en Atlas Company, programo y pongo en marcha PLC para líneas Body in White de Jaguar Land Rover en Solihull y Liverpool y de Volvo en Torslanda.',
    p2: (location: string) =>
      `Antes construí una plataforma P2P de intercambio de divisas para un banco nacional, sistemas de contenido RESTful para TV Azteca y respaldos de energía fotovoltaica y diésel para infraestructura crítica. Vivo en ${location} y estoy abierto a reubicarme y trabajar presencialmente en cualquier lugar.`,
    workWithMe: 'Trabaja conmigo',
    seeProjects: 'Ver proyectos',
    principlesLabel: 'Parámetros de operación',
    principles: [
      {
        title: 'Cero paradas es la especificación',
        text: 'Un pago que falla o una línea que se detiene cuesta dinero real. Diseño para la hora más cargada, no para la media.',
      },
      {
        title: 'Construirlo desde cero y hacerlo mío',
        text: 'Desde una zona BIW vacía o un repositorio vacío — llevo la arquitectura hasta la puesta en marcha.',
      },
      {
        title: 'Matrices de prueba antes que opiniones',
        text: 'Suites de Postman, puesta en marcha virtual y matrices de prueba resuelven los debates antes que producción.',
      },
      {
        title: 'Hablar con quien lo opera',
        text: 'Los requisitos vienen de operadores y clientes — de PedidosYa en Argentina a jefes de línea en Suecia.',
      },
    ],
    toolkitTitle: 'Lista de materiales',
    toolkitHead: ['Ítem', 'Categoría', 'Componentes'],
    toolkit: [
      [
        'Backend',
        'Node.js · Go · JavaScript/TypeScript · diseño de APIs REST · microservicios · webhooks',
      ],
      [
        'Datos y finanzas',
        'PostgreSQL · MongoDB · algoritmos de emparejamiento P2P · pasarelas de pago B2B',
      ],
      ['Protocolos', 'HTTP/REST · SOAP · WebSockets · TCP/IP'],
      [
        'Automatización (BIW)',
        'Siemens TIA Portal · Rockwell Studio 5000 · Ignition SCADA · lógica de enclavamiento · optimización de tiempos de ciclo · variadores SEW · FESTO',
      ],
      [
        'Pruebas y QA',
        'Automatización con Postman · matrices de prueba · puesta en marcha virtual · controles de seguridad',
      ],
      [
        'Idiomas',
        'Español (nativo) · Portugués (fluido) · Inglés (profesional, Reino Unido y Suecia)',
      ],
      [
        'Educación',
        'Ingeniería Eléctrica — Universidad Metropolitana (UNIMET), Venezuela. Tesis con mención honorífica: controlador robusto para un sistema de levitación magnética.',
      ],
    ],
    serviceLog: 'Historial',
    present: 'Actualidad',
    education: 'Educación',
    skills: 'Habilidades',
  },

  projects: {
    kicker: (n: number) => `Registro de proyectos · ${n} entradas`,
    title: ['Hecho para correr ', 'en producción', '.'],
    sheet: (i: string, n: string) => `Hoja ${i} de ${n}`,
    rev: 'Rev',
    stack: 'Stack',
    notes: 'Notas de ingeniería',
    source: 'Código',
    live: 'En vivo',
    empty: 'Todavía no hay proyectos publicados.',
    cta: '¿Tienes un sistema que no se puede permitir caer?',
    start: 'Empezar un proyecto',
  },

  gallery: {
    kicker: 'Bitácora',
    title: ['Notas desde la ', 'planta', '.'],
    intro:
      'Fotos de mis propias publicaciones — puestas en marcha, pruebas y los hitos entre medias.',
  },

  contact: {
    title: ['Envía una señal. ', 'Respondo', '.'],
    intro:
      'Cuéntame sobre el sistema, el problema y lo que no puede salir mal. Trabajo en backends y plataformas de pago, automatización con PLC y puesta en marcha — y el software que lo une todo.',
    channels: 'Otros canales',
    base: 'Base',
    timeZone: 'Zona horaria',
    socialNotes: {
      github: 'Proyectos en Go, Node.js y TypeScript',
      linkedin: 'Trayectoria y referencias',
      email: 'La vía más rápida para una respuesta',
    },
  },

  footer: {
    end: '§ Fin del documento',
    title: ['¿Un problema difícil', 'y crítico?'],
    cta: 'Hablemos',
    channels: 'Canales',
    base: 'Base de operaciones',
    tagline: 'Diseñado, construido y puesto en marcha en sitio',
  },

  notFound: {
    kicker: 'Error 404 · Señal perdida',
    title: 'Fuera de línea.',
    text: 'Esta página no está en el plan de producción. Vuelve al inicio y prueba otra ruta.',
    back: 'Volver al inicio',
  },

  form: {
    header: 'Formulario TX-01 · Transmisión',
    open: '● Canal abierto',
    receivedTitle: 'Mensaje recibido',
    receivedText:
      'Gracias por escribir. Tu mensaje fue aceptado — espera una respuesta en dos días hábiles.',
    another: 'Enviar otro mensaje',
    honeypot: 'Deja esto vacío',
    legend: 'Tu mensaje',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    namePlaceholder: 'Ada Lovelace',
    emailPlaceholder: 'ada@empresa.com',
    messagePlaceholder: 'Sistema, problema, plazos…',
    sending: 'Enviando…',
    send: 'Enviar mensaje',
    sendingStatus: 'Enviando tu mensaje…',
    error:
      'No pudimos confirmar tu mensaje. Tus datos siguen aquí; inténtalo de nuevo. Las vistas previas locales no procesan envíos.',
  },
}

export const messages = { en, es }
