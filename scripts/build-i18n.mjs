import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'i18n');

const aboutCode = [
  'class Developer {',
  '',
  '    constructor() {',
  "        this.name = 'Fatih Akman';",
  "        this.role = 'Full-Stack Developer & Analyst';",
  "        this.certification = 'PSPO I';",
  "        this.experience = '5+ years';",
  '    }',
  '',
  '    getCurrentProject() {',
  '        return {',
  "            client: 'European Wholesale Industry',",
  "            type: 'Strategic Platform',",
  '            responsibilities: [',
  "                'Architecture & Development',",
  "                'Monitoring & Support',",
  "                'Translating business needs into technical solutions',",
  '            ],',
  '        };',
  '    }',
  '',
  '}',
];

function aboutCodeObj(lines) {
  const o = {};
  lines.forEach((line, i) => {
    o[String(i)] = line;
  });
  return o;
}

/** `cat roles.txt` output lines (hero terminal), keyed like `about.code` → `hero.stdout.0` … */
const heroStdoutEn = [
  'Freelance',
  'Analyst & Full Stack Developer',
  'Product Owner (PSPO I)',
];

function buildEn() {
  return {
    meta: {
      title: 'Fatih Akman — Full-Stack Developer & Analyst | OGF Solutions',
      description:
        'Freelance full-stack developer and analyst with OGF Solutions (SRL), Belgium. VAT BE 1031.478.796. Angular, Go, PHP, Laravel, Flutter, enterprise data. PSPO I. Remote, small projects.',
      ogLocale: 'en_US',
      ogSiteName: 'OGF Solutions',
    },
    nav: {
      about: 'ABOUT',
      certifications: 'CERTS',
      services: 'SERVICES',
      stack: 'STACK',
      projects: 'PROJECTS',
      contact: 'CONTACT',
    },
    header: {
      brand: 'fatih@ogf_solutions',
      hireMe: 'HIRE_ME',
      menuToggle: 'Toggle menu',
    },
    lang: { en: 'EN', fr: 'FR', nl: 'NL', tr: 'TR' },
    a11y: {
      language: 'Language',
      socialLinks: 'Social profiles',
    },
    hero: {
      pathPortfolio: '~/portfolio',
      pathIntro: './introduce',
      constDev: 'const developer =',
      consolePrompt: 'fatih@ogf_solutions:~$ ',
      consoleTitle: 'bash — ~/portfolio/roles.txt',
      consoleCmd: 'cat roles.txt',
      stdout: aboutCodeObj(heroStdoutEn),
      statYears: 'Years Exp',
      statTech: 'Technologies',
      statCert: 'Certified',
      ctaContact: 'CONTACT.init()',
      ctaExplore: 'EXPLORE.run()',
      portraitAlt: 'Fatih Akman — full-stack developer & analyst',
    },
    about: {
      section: 'About Me',
      panelFile: 'developer.ts',
      headline1: 'BUILDING SCALABLE',
      headline2: 'DIGITAL SOLUTIONS',
      p1: 'Currently contributing to a strategic platform for a leading European wholesale industry group, handling architecture, development, monitoring, and production support.',
      p2: 'I bridge the gap between business stakeholders and technical teams, translating complex requirements into robust, scalable solutions.',
      p3: "With 5+ years of experience, I've delivered full-stack applications using Go, PHP, Laravel, Angular, and Flutter, working with enterprise databases like MySQL, IBM i DB2, and PostgreSQL.",
      statusLine: 'Remote · small projects only',
      code: aboutCodeObj(aboutCode),
    },
    services: {
      section: 'Services',
      headline1: 'WHAT I',
      headline2: 'CAN DO',
      fullstack: {
        title: 'Full-Stack Development',
        command: 'dev.build()',
        description:
          'End-to-end web applications with React, Angular, Node.js, PHP, Laravel, and Go.',
        tags: 'Frontend|Backend|API',
      },
      apicustom: {
        title: 'Custom APIs',
        command: 'api.custom()',
        description:
          'Design and delivery of tailor-made HTTP APIs: REST or GraphQL, authentication, versioning, documentation (OpenAPI), and integration with your existing systems and partners.',
        tags: 'REST|GraphQL|OpenAPI|Integration',
      },
      mobile: {
        title: 'Mobile Development',
        command: 'mobile.deploy()',
        description:
          'Cross-platform apps with Flutter, Ionic, and native iOS with Swift.',
        tags: 'iOS|Android|Cross-platform',
      },
      database: {
        title: 'Database Architecture',
        command: 'db.optimize()',
        description:
          'Design and optimization for MySQL, PostgreSQL, and IBM i DB2.',
        tags: 'SQL|NoSQL|Performance',
      },
      architecture: {
        title: 'System Architecture',
        command: 'sys.scale()',
        description:
          'Scalable architecture with monitoring and production support.',
        tags: 'Cloud|DevOps|Monitoring',
      },
      analysis: {
        title: 'Business Analysis',
        command: 'analyze.requirements()',
        description: 'Translating business needs into technical solutions.',
        tags: 'Strategy|Planning|Documentation',
      },
      product: {
        title: 'Product Ownership',
        command: 'product.manage()',
        description:
          'PSPO I certified, bridging stakeholders and development teams.',
        tags: 'Agile|Scrum|Leadership',
      },
      automation: {
        title: 'Business automation & n8n',
        command: 'automate.workflows()',
        description:
          'Workflow automation with n8n: connect CRMs, APIs, notifications, and internal tools. End-to-end process automation for SMEs and larger orgs.',
        tags: 'n8n|Integrations|APIs|Ops',
      },
      ai: {
        title: 'AI automation',
        command: 'ai.orchestrate()',
        description:
          'LLM-powered pipelines: summarisation, classification, routing, and copilots wired into your stack — from prototypes to production guardrails.',
        tags: 'Mistral|LLMs|RAG|Prompting',
      },
      bots: {
        title: 'Bots & messaging',
        command: 'bot.deploy()',
        description:
          'Chatbots and task bots on Telegram, webhooks, and custom backends — alerts, support flows, and lightweight automation users can talk to.',
        tags: 'Telegram|Discord|Webhooks|Chatbots',
      },
      wallet: {
        title: 'Loyalty & wallet cards',
        command: 'loyalty.wallet()',
        description:
          'Digital fidelity / loyalty programmes: passes for Apple Wallet & Google Wallet, paired with iOS & Android apps for businesses (stamps, tiers, campaigns).',
        tags: 'iOS|Android|Wallet|Retail',
      },
    },
    projects: {
      section: 'Projects',
      headline1: 'SELECTED',
      headline2: 'WORK',
      sub:
        'Timeline aligned with your PDF (2020–2023 slides) and more recent work.',
      metaLine: 'Full-Stack & Analyst',
      chrono: '// Chrono.parallax()',
      countSingular: 'project',
      countPlural: 'projects',
      wip: 'WIP',
      nda: 'NDA',
      pdfAria: 'Open portfolio PDF — projects through 2023',
      pdfQrAlt: 'QR code — portfolio PDF projects through 2023',
      pdfLabel: '// portfolio.archive.pdf',
      pdfBlurb: 'Summary PDF of projects through 2023.',
      pdfLink: 'Open portfolio PDF (2023)',
      entries: {
        ryflex: {
          name: 'Ryflex',
          kind: 'Application · home care (Belgium)',
          summary:
            'Replacement application for home care services in Belgium.',
        },
        'confidential-2025': {
          name: 'Confidential project — 2025',
          kind: 'Retail (Europe)',
          summary:
            'NDA project for a major European retail company. Details not disclosed.',
        },
        'confidential-2024': {
          name: 'Confidential project — 2024',
          kind: 'Retail (Europe)',
          summary:
            'NDA project for a European retail company. Details not disclosed.',
        },
        lobi: {
          name: 'Lobi',
          kind: 'Android application',
          summary: 'Personal work in progress. Android app with Firebase.',
        },
        'altrove-media': {
          name: 'Altrove Media',
          kind: 'Media / news',
          summary: 'Media that covers the news from another angle — Altrove.',
        },
        lubala: {
          name: 'Lubala',
          kind: 'WebApp',
          summary:
            'Flutter WebApp for a law firm in Kinshasa.',
        },
        havilaway: {
          name: 'Havilaway',
          kind: 'WebApp · IT Manager',
          summary:
            'Flutter WebApp for administrative and financial management in healthcare (London). Process automation, databases (SQL, Python).',
        },
        emsf: {
          name: 'EMSF',
          kind: 'Showcase WebApp',
          summary:
            'Site for NGO Enfance Meurtrie Sans Frontière (emsf-monde.org) — street children and orphans.',
        },
        deenshop: {
          name: 'DeenShop',
          kind: 'Data analysis',
          summary:
            'Python tool for a bookstore: API-based analysis, sales tracking, profit distribution (publishers, suppliers).',
        },
        'la-bombetta': {
          name: 'La Bombetta',
          kind: 'WebApp',
          summary:
            'Site for Italian restaurant La Bombetta, Grand Sablon — Rue Sainte-Anne 24, 1000 Brussels.',
        },
        kace: {
          name: 'Kace',
          kind: 'E-commerce WebApp',
          summary: 'T-shirt sales site highlighting Charleroi.',
        },
        tipstreet: {
          name: 'TipStreet',
          kind: 'Android application',
          summary:
            'Sports betting app: Firebase (auth, real-time data, notifications), bankroll and history, payments via Stripe.',
        },
      },
    },
    certs: {
      section: 'Certifications',
      headline1: 'CREDENTIALS',
      headline2: '& TRUST',
      issued: 'Issued',
      expires: 'Expires',
      id: 'ID',
      verifyHint:
        'Verification on the issuing organisation’s portal.',
      verifyFallback: 'Verify',
      ariaLogoExternal: '{{issuer}} — {{alt}} (external link)',
      items: {
        '180944_10122025': {
          issuerShort: 'ANSSI',
          issuer:
            'ANSSI — French National Cybersecurity Agency',
          title: 'Introduction to cybersecurity',
          issued: 'Dec 2025',
          expires: 'Dec 2035',
          category: 'Cybersecurity',
          issuerLogoAlt: 'ANSSI logo',
        },
        '66a5fc98-e77c-433b-8826-86a75885e380': {
          issuerShort: 'Scrum.org',
          issuer: 'Scrum.org',
          title: 'Professional Scrum Product Owner™ I (PSPO I)',
          issued: 'May 2025',
          expires: 'May 2028',
          verifyLabel: 'Scrum.org — PSPO I',
          issuerLogoAlt: 'Scrum.org',
        },
      },
    },
    tech: {
      section: 'Tech Stack',
      headline1: 'TOOLS &',
      headline2: 'TECHNOLOGIES',
      stackOpen: 'stack = [',
      stackClose: '];',
      logoAlt: '{{name}} logo',
      categories: {
        language: 'language',
        frontend: 'frontend',
        backend: 'backend',
        database: 'database',
        tool: 'tool',
        mobile: 'mobile',
        automation: 'automation',
        ai: 'ai',
        payments: 'payments',
        wallet: 'wallet',
      },
      stat1: 'Technologies Mastered',
      stat2: 'Development Approach',
      stat3: 'Continuous Learning',
    },
    contact: {
      section: 'Get In Touch',
      headline1: "LET'S BUILD",
      headline2: 'SOMETHING GREAT',
      email: 'EMAIL',
      location: 'LOCATION',
      locationPrefix: 'Remote only — currently taking ',
      locationEmphasis: 'small projects',
      status: 'STATUS',
      statusBody: 'Open for small remote work',
      blurbBefore:
        'Need a full-stack developer, analyst, or product clarity on a ',
      blurbEmphasis: 'small',
      blurbAfter:
        ' remote project? I’m taking limited remote engagements right now — send a short brief and we’ll see if it’s a fit.',
      responseTime: '< 24 hours',
      responseKey: 'response_time',
      formTitle: 'contact.form',
      name: 'Name *',
      emailLabel: 'Email *',
      subject: 'Subject *',
      message: 'Message *',
      phName: 'John Doe',
      phEmail: 'john@example.com',
      phSubject: 'Project inquiry',
      phMessage: 'Tell me about your project…',
      send: 'SEND.message()',
      snackOpen:
        'Opening your email app… Message also copied to clipboard as a backup.',
      snackDismiss: 'Dismiss',
    },
    footer: {
      tagline:
        'Full-Stack Developer & Analyst building scalable digital products. PSPO I certified with 5+ years of experience.',
      statusReady: 'ready',
      company: '// Company',
      navigate: '// Navigate',
      connect: '// Connect',
      about: 'About',
      certifications: 'Certifications',
      services: 'Services',
      stack: 'Tech Stack',
      projects: 'Projects',
      contact: 'Contact',
      li: 'LinkedIn',
      mail: 'Email',
      backTop: 'BACK_TO_TOP',
      rights: '© {{year}} Fatih Akman. All rights reserved.',
      built: 'Built with Angular + Tailwind + CSS animations',
    },
  };
}

function deepMerge(base, patch) {
  if (patch === undefined) return base;
  if (typeof base !== 'object' || base === null || Array.isArray(base))
    return patch;
  const out = { ...base };
  for (const k of Object.keys(patch)) {
    if (
      typeof base[k] === 'object' &&
      base[k] !== null &&
      !Array.isArray(base[k]) &&
      typeof patch[k] === 'object' &&
      patch[k] !== null &&
      !Array.isArray(patch[k])
    ) {
      out[k] = deepMerge(base[k], patch[k]);
    } else {
      out[k] = patch[k];
    }
  }
  return out;
}

const frPatch = {
  meta: {
    title:
      'Fatih Akman — Développeur full-stack & analyste | OGF Solutions',
    description:
      'Analyste et développeur full-stack freelance chez OGF Solutions (SRL), Belgique. TVA BE 1031.478.796. Angular, Go, PHP, Laravel, Flutter, données d’entreprise. PSPO I. Télétravail, petits projets.',
    ogLocale: 'fr_FR',
  },
  nav: {
    about: 'À PROPOS',
    certifications: 'CERTIFS',
    services: 'SERVICES',
    stack: 'STACK',
    projects: 'PROJETS',
    contact: 'CONTACT',
  },
  header: { hireMe: 'ME_RECRUTER' },
  a11y: { language: 'Langue', socialLinks: 'Profils sociaux' },
  hero: {
    consoleTitle: 'bash — ~/portfolio/roles.txt',
    consoleCmd: 'cat roles.txt',
    stdout: {
      1: 'Analyste & développeur full stack',
      2: 'Product Owner (PSPO I)',
    },
    statYears: 'Ans d’exp.',
    statTech: 'Technos',
    statCert: 'Certifié',
    ctaContact: 'CONTACT.init()',
    ctaExplore: 'EXPLORER.run()',
    portraitAlt: 'Fatih Akman — développeur full stack & analyste',
  },
  about: {
    section: 'À propos',
    panelFile: 'developer.ts',
    headline1: 'CONSTRUIRE DES',
    headline2: 'SOLUTIONS NUMÉRIQUES',
    p1: 'Je contribue actuellement à une plateforme stratégique pour un groupe européen de la grande distribution : architecture, développement, monitoring et support production.',
    p2: 'Je fais le lien entre métiers et équipes techniques, en traduisant des besoins complexes en solutions robustes et scalables.',
    p3: 'Avec plus de 5 ans d’expérience, j’ai livré des applications full stack avec Go, PHP, Laravel, Angular et Flutter, sur des bases MySQL, IBM i DB2 et PostgreSQL.',
    statusLine: 'Télétravail · petits projets uniquement',
    code: aboutCodeObj([
      'class Developer {',
      '',
      '    constructor() {',
      "        this.name = 'Fatih Akman';",
      "        this.role = 'Développeur full-stack & Analyste';",
      "        this.certification = 'PSPO I';",
      "        this.experience = '5+ ans';",
      '    }',
      '',
      '    getCurrentProject() {',
      '        return {',
      "            client: 'Grande distribution européenne',",
      "            type: 'Plateforme stratégique',",
      '            responsibilities: [',
      "                'Architecture & développement',",
      "                'Monitoring & support',",
      "                'Traduire les besoins métier en solutions techniques',",
      '            ],',
      '        };',
      '    }',
      '',
      '}',
    ]),
  },
  services: {
    section: 'Services',
    headline1: 'CE QUE JE',
    headline2: 'FAIS',
    fullstack: {
      title: 'Développement full-stack',
      description:
        'Applications web de bout en bout avec React, Angular, Node.js, PHP, Laravel et Go.',
      tags: 'Frontend|Backend|API',
    },
    apicustom: {
      title: 'API sur mesure',
      description:
        'Conception et livraison d’API HTTP sur mesure : REST ou GraphQL, authentification, versioning, documentation (OpenAPI), intégration à vos systèmes et partenaires.',
      tags: 'REST|GraphQL|OpenAPI|Intégration',
    },
    mobile: {
      title: 'Développement mobile',
      description:
        'Apps cross-plateforme avec Flutter, Ionic, et iOS natif avec Swift.',
      tags: 'iOS|Android|Cross-plateforme',
    },
    database: {
      title: 'Architecture bases de données',
      description:
        'Conception et optimisation MySQL, PostgreSQL et IBM i DB2.',
      tags: 'SQL|NoSQL|Performance',
    },
    architecture: {
      title: 'Architecture système',
      description:
        'Architecture scalable avec monitoring et support production.',
      tags: 'Cloud|DevOps|Monitoring',
    },
    analysis: {
      title: 'Analyse métier',
      description: 'Traduire les besoins métier en solutions techniques.',
      tags: 'Stratégie|Planification|Documentation',
    },
    product: {
      title: 'Product ownership',
      description:
        'Certifié PSPO I, lien entre parties prenantes et équipes de développement.',
      tags: 'Agile|Scrum|Leadership',
    },
    automation: {
      title: 'Automatisation métier & n8n',
      description:
        'Automatisation de workflows avec n8n : CRM, APIs, notifications, outils internes. Automatisation de bout en bout pour PME et grandes structures.',
      tags: 'n8n|Intégrations|APIs|Ops',
    },
    ai: {
      title: 'Automatisation IA',
      description:
        'Pipelines LLM : résumés, classification, routage, copilotes branchés sur votre stack — du prototype aux garde-fous production.',
      tags: 'Mistral|LLM|RAG|Prompting',
    },
    bots: {
      title: 'Bots & messagerie',
      description:
        'Chatbots et bots tâches sur Telegram, webhooks, backends sur mesure — alertes, support, automatisation légère.',
      tags: 'Telegram|Discord|Webhooks|Chatbots',
    },
    wallet: {
      title: 'Fidélité & cartes wallet',
      description:
        'Programmes de fidélité numériques : passes Apple Wallet & Google Wallet, avec apps iOS & Android (tampons, paliers, campagnes).',
      tags: 'iOS|Android|Wallet|Retail',
    },
  },
  projects: {
    section: 'Projets',
    headline1: 'SÉLECTION',
    headline2: 'DE TRAVAUX',
    sub: 'Chronologie alignée sur ton PDF (slides 2020–2023) et projets plus récents.',
    metaLine: 'Full-Stack & Analyste',
    countSingular: 'projet',
    countPlural: 'projets',
    pdfAria: 'Ouvrir le portfolio PDF — projets jusqu’en 2023',
    pdfQrAlt: 'QR code — portfolio PDF projets jusqu’en 2023',
    pdfBlurb: 'PDF de synthèse des projets jusqu’en 2023.',
    pdfLink: 'Ouvrir le portfolio PDF (2023)',
    entries: {
      ryflex: {
        name: 'Ryflex',
        kind: 'Application · soins à domicile (Belgique)',
        summary:
          'Application de remplacement pour les services de soins à domicile en Belgique.',
      },
      'confidential-2025': {
        name: 'Projet confidentiel — 2025',
        kind: 'Grande distribution (Europe)',
        summary:
          'Projet sous NDA pour une grande société européenne de la grande distribution. Détails non divulguables.',
      },
      'confidential-2024': {
        name: 'Projet confidentiel — 2024',
        kind: 'Grande distribution (Europe)',
        summary:
          'Projet sous NDA pour une société européenne de la grande distribution. Détails non divulguables.',
      },
      lobi: {
        name: 'Lobi',
        kind: 'Application Android',
        summary:
          'Projet personnel en cours. Application Android avec Firebase.',
      },
      'altrove-media': {
        name: 'Altrove Media',
        kind: 'Média / journal',
        summary:
          "Média qui prend l'actualité sous un autre angle — Altrove.",
      },
      lubala: {
        name: 'Lubala',
        kind: 'WebApp',
        summary:
          'WebApp développée en Flutter pour un cabinet d’avocats à Kinshasa.',
      },
      havilaway: {
        name: 'Havilaway',
        kind: 'WebApp · IT Manager',
        summary:
          'WebApp Flutter pour une entreprise de gestion administrative et financière dans le domaine médical (Londres). Automatisation de processus, bases de données (SQL, Python).',
      },
      emsf: {
        name: 'EMSF',
        kind: 'WebApp vitrine',
        summary:
          'Site pour l’ONG Enfance Meurtrie Sans Frontière (emsf-monde.org) — enfants de la rue et orphelins.',
      },
      deenshop: {
        name: 'DeenShop',
        kind: 'Analyse de données',
        summary:
          'Outil Python pour une librairie : analyse via APIs, suivi des ventes, répartition des bénéfices (maisons d’édition, fournisseurs).',
      },
      'la-bombetta': {
        name: 'La Bombetta',
        kind: 'WebApp',
        summary:
          'Site du restaurant italien La Bombetta, Grand Sablon — Rue Sainte-Anne 24, 1000 Bruxelles.',
      },
      kace: {
        name: 'Kace',
        kind: 'WebApp e-commerce',
        summary: 'Site de vente de T-shirts mettant en avant Charleroi.',
      },
      tipstreet: {
        name: 'TipStreet',
        kind: 'Application Android',
        summary:
          'Application de paris sportifs : Firebase (authentification, données temps réel, notifications), système de bankroll et historique, paiement via Stripe.',
      },
    },
  },
  certs: {
    section: 'Certifications',
    headline1: 'PREUVES',
    headline2: '& CONFIANCE',
    issued: 'Délivrance',
    expires: 'Expire',
    id: 'ID',
    verifyHint: 'Vérification sur le portail de l’organisme certificateur.',
    verifyFallback: 'Vérifier',
    ariaLogoExternal: '{{issuer}} — {{alt}} (lien externe)',
    items: {
      '180944_10122025': {
        issuer:
          'ANSSI — Agence nationale de la sécurité des systèmes d’information',
        title: 'Initiation à la cybersécurité',
        issued: 'Déc. 2025',
        expires: 'Déc. 2035',
        category: 'Cybersécurité',
        issuerLogoAlt: 'Logo ANSSI',
      },
      '66a5fc98-e77c-433b-8826-86a75885e380': {
        title: 'Professional Scrum Product Owner™ I (PSPO I)',
        issued: 'Mai 2025',
        expires: 'Mai 2028',
        verifyLabel: 'Scrum.org — PSPO I',
      },
    },
  },
  tech: {
    section: 'Stack technique',
    headline1: 'OUTILS &',
    headline2: 'TECHNOLOGIES',
    categories: {
      language: 'langage',
      frontend: 'frontend',
      backend: 'backend',
      database: 'base de données',
      tool: 'outil',
      mobile: 'mobile',
      automation: 'automatisation',
      ai: 'ia',
      payments: 'paiements',
      wallet: 'wallet',
    },
    stat1: 'Technologies maîtrisées',
    stat2: 'Approche full-stack',
    stat3: 'Apprentissage continu',
  },
  contact: {
    section: 'Contact',
    headline1: 'CONSTRUISONS',
    headline2: 'ENSEMBLE',
    locationPrefix: 'Télétravail uniquement — actuellement ',
    locationEmphasis: 'petits projets',
    statusBody: 'Ouvert aux petites missions à distance',
    blurbBefore:
      'Besoin d’un développeur full-stack, d’un analyste ou d’éclaircissements produit sur un ',
    blurbEmphasis: 'petit',
    blurbAfter:
      ' projet à distance ? J’accepte un nombre limité de missions — envoyez un court brief pour voir si ça colle.',
    name: 'Nom *',
    emailLabel: 'E-mail *',
    subject: 'Sujet *',
    message: 'Message *',
    phName: 'Jean Dupont',
    phEmail: 'vous@exemple.com',
    phSubject: 'Demande de projet',
    phMessage: 'Parlez-moi de votre projet…',
    snackOpen:
      'Ouverture de votre messagerie… Le message est aussi copié dans le presse-papiers.',
    snackDismiss: 'Fermer',
  },
  footer: {
    tagline:
      'Développeur full-stack & analyste, produits numériques scalables. Certifié PSPO I, 5+ ans d’expérience.',
    company: '// Société',
    navigate: '// Navigation',
    connect: '// Réseaux',
    about: 'À propos',
    certifications: 'Certifications',
    stack: 'Stack technique',
    projects: 'Projets',
    backTop: 'HAUT_DE_PAGE',
    rights: '© {{year}} Fatih Akman. Tous droits réservés.',
    built: 'Réalisé avec Angular + Tailwind + animations CSS',
  },
};

const nlPatch = {
  meta: {
    title: 'Fatih Akman — Full-stack ontwikkelaar & analist | OGF Solutions',
    description:
      'Freelance analist en full-stack ontwikkelaar bij OGF Solutions (SRL), België. BTW BE 1031.478.796. Angular, Go, PHP, Laravel, Flutter, enterprise data. PSPO I. Remote, kleine projecten.',
    ogLocale: 'nl_BE',
  },
  nav: {
    about: 'OVER',
    certifications: 'CERT',
    services: 'DIENSTEN',
    stack: 'STACK',
    projects: 'PROJECTEN',
    contact: 'CONTACT',
  },
  header: { hireMe: 'INHUUR_MIJ' },
  a11y: { language: 'Taal', socialLinks: 'Social profielen' },
  hero: {
    stdout: {
      1: 'Analist & full-stack ontwikkelaar',
    },
    statYears: 'Jr erv.',
    statTech: 'Technologieën',
    statCert: 'Gecertificeerd',
    portraitAlt: 'Fatih Akman — full-stack ontwikkelaar & analist',
  },
  about: {
    section: 'Over mij',
    headline1: 'SCHAALBARE',
    headline2: 'DIGITALE OPLOSSINGEN',
    p1: 'Ik werk mee aan een strategisch platform voor een toonaangevende Europese groothandelsgroep: architectuur, ontwikkeling, monitoring en productie-ondersteuning.',
    p2: 'Ik verbind business en IT-teams door complexe requirements om te zetten in robuuste, schaalbare oplossingen.',
    p3: 'Met 5+ jaar ervaring leverde ik full-stack apps met Go, PHP, Laravel, Angular en Flutter, met enterprise-databases zoals MySQL, IBM i DB2 en PostgreSQL.',
    statusLine: 'Remote · alleen kleine projecten',
    code: aboutCodeObj(
      aboutCode.map((l) =>
        l
          .replace('Full-Stack Developer & Analyst', 'Full-stack ontwikkelaar & analist')
          .replace('European Wholesale Industry', 'Europese groothandel')
          .replace('Strategic Platform', 'Strategisch platform')
          .replace('Architecture & Development', 'Architectuur & ontwikkeling')
          .replace('Monitoring & Support', 'Monitoring & support')
          .replace(
            'Translating business needs into technical solutions',
            'Bedrijfsbehoeften vertalen naar technische oplossingen',
          )
          .replace('Business-to-Tech Translation', 'Business naar tech vertaling'),
      ),
    ),
  },
  services: {
    section: 'Diensten',
    headline1: 'WAT IK',
    headline2: 'KAN',
    fullstack: {
      title: 'Full-stack ontwikkeling',
      description:
        'End-to-end webapplicaties met React, Angular, Node.js, PHP, Laravel en Go.',
    },
    apicustom: {
      title: 'API’s op maat',
      description:
        'Ontwerp en oplevering van HTTP-API’s op maat: REST of GraphQL, auth, versioning, documentatie (OpenAPI), integratie met bestaande systemen.',
    },
    mobile: {
      title: 'Mobiele ontwikkeling',
      description:
        'Cross-platform apps met Flutter, Ionic en native iOS met Swift.',
    },
    database: {
      title: 'Database-architectuur',
      description: 'Ontwerp en optimalisatie voor MySQL, PostgreSQL en IBM i DB2.',
    },
    architecture: {
      title: 'Systeemarchitectuur',
      description: 'Schaalbare architectuur met monitoring en productie-ondersteuning.',
    },
    analysis: {
      title: 'Businessanalyse',
      description: 'Bedrijfsbehoeften vertalen naar technische oplossingen.',
    },
    product: {
      title: 'Product ownership',
      description: 'PSPO I gecertificeerd, brug tussen stakeholders en development.',
    },
    automation: {
      title: 'Automatisering & n8n',
      description:
        'Workflow-automatisering met n8n: CRM’s, API’s, notificaties en interne tools.',
    },
    ai: {
      title: 'AI-automatisering',
      description:
        'LLM-pipelines: samenvatting, classificatie, routing en copilots in uw stack.',
    },
    bots: {
      title: 'Bots & messaging',
      description:
        'Chatbots en taskbots op Telegram, webhooks en maatwerk backends.',
    },
    wallet: {
      title: 'Loyalty & wallet',
      description:
        'Digitale loyaliteitsprogramma’s: Apple Wallet & Google Wallet, met iOS- en Android-apps.',
    },
  },
  projects: {
    section: 'Projecten',
    headline1: 'SELECTIE',
    headline2: 'WERK',
    sub: 'Tijdlijn afgestemd op je PDF (2020–2023) en recentere projecten.',
    metaLine: 'Full-stack & analist',
    countSingular: 'project',
    countPlural: 'projecten',
    pdfAria: 'Portfolio-PDF openen — projecten t/m 2023',
    pdfQrAlt: 'QR-code — portfolio-PDF projecten t/m 2023',
    pdfBlurb: 'Samenvattende PDF van projecten t/m 2023.',
    pdfLink: 'Portfolio-PDF openen (2023)',
    entries: {
      ryflex: {
        kind: 'Applicatie · thuiszorg (België)',
        summary: 'Vervangende applicatie voor thuiszorgdiensten in België.',
      },
      'confidential-2025': {
        name: 'Vertrouwelijk project — 2025',
        kind: 'Retail (Europa)',
        summary:
          'NDA-project voor een grote Europese retailorganisatie. Geen details.',
      },
      'confidential-2024': {
        name: 'Vertrouwelijk project — 2024',
        kind: 'Retail (Europa)',
        summary:
          'NDA-project voor een Europese retailorganisatie. Geen details.',
      },
      lobi: {
        kind: 'Android-applicatie',
        summary: 'Persoonlijk werk in uitvoering. Android-app met Firebase.',
      },
      'altrove-media': {
        kind: 'Media / nieuws',
        summary: 'Media die het nieuws vanuit een andere hoek belicht — Altrove.',
      },
      lubala: {
        summary: 'Flutter WebApp voor een advocatenkantoor in Kinshasa.',
      },
      havilaway: {
        summary:
          'Flutter WebApp voor administratieve en financiële ondersteuning in de zorg (Londen). Automatisering, SQL, Python.',
      },
      emsf: {
        kind: 'Showcase WebApp',
        summary:
          'Site voor NGO Enfance Meurtrie Sans Frontière — straatkinderen en wezen.',
      },
      deenshop: {
        kind: 'Data-analyse',
        summary:
          'Python-tool voor een boekhandel: API-analyse, verkooptracking, winstverdeling.',
      },
      'la-bombetta': {
        summary:
          'Site voor Italiaans restaurant La Bombetta, Grand Sablon — Brussel.',
      },
      kace: {
        kind: 'E-commerce WebApp',
        summary: 'T-shirtshop met focus op Charleroi.',
      },
      tipstreet: {
        kind: 'Android-applicatie',
        summary:
          'Sportweddenschappen-app: Firebase, bankroll, geschiedenis, Stripe-betalingen.',
      },
    },
  },
  certs: {
    section: 'Certificeringen',
    headline1: 'BEWIJZEN',
    headline2: '& VERTROUWEN',
    issued: 'Uitgegeven',
    expires: 'Verloopt',
    verifyHint: 'Verificatie via het portaal van de uitgever.',
    verifyFallback: 'Verifiëren',
    ariaLogoExternal: '{{issuer}} — {{alt}} (externe link)',
    items: {
      '180944_10122025': {
        issuer: 'ANSSI — Franse nationale cyberbeveiligingsdienst',
        title: 'Inleiding tot cybersecurity',
        issued: 'dec 2025',
        expires: 'dec 2035',
        category: 'Cybersecurity',
        issuerLogoAlt: 'ANSSI-logo',
      },
      '66a5fc98-e77c-433b-8826-86a75885e380': {
        issued: 'mei 2025',
        expires: 'mei 2028',
      },
    },
  },
  tech: {
    section: 'Techstack',
    headline1: 'TOOLS &',
    headline2: 'TECHNOLOGIEËN',
    categories: {
      language: 'taal',
      database: 'database',
      tool: 'tool',
      automation: 'automatisering',
      payments: 'betalingen',
    },
    stat1: 'Beheerste technologieën',
    stat2: 'Full-stack aanpak',
    stat3: 'Blijvend leren',
  },
  contact: {
    section: 'Contact',
    headline1: 'LATEN WE',
    headline2: 'IETS BOUWEN',
    locationPrefix: 'Alleen remote — momenteel ',
    locationEmphasis: 'kleine projecten',
    statusBody: 'Open voor kleine remote opdrachten',
    blurbBefore:
      'Full-stack ontwikkelaar, analist of producthelderheid nodig voor een ',
    blurbEmphasis: 'klein',
    blurbAfter: ' remote project? Beperkte capaciteit — stuur een korte briefing.',
    name: 'Naam *',
    emailLabel: 'E-mail *',
    subject: 'Onderwerp *',
    message: 'Bericht *',
    phName: 'Jan Jansen',
    phEmail: 'jij@voorbeeld.com',
    phSubject: 'Projectvraag',
    phMessage: 'Vertel over je project…',
    snackOpen:
      'Je mailapp wordt geopend… Bericht ook naar klembord gekopieerd.',
    snackDismiss: 'Sluiten',
  },
  footer: {
    tagline:
      'Full-stack ontwikkelaar & analist voor schaalbare digitale producten. PSPO I, 5+ jaar ervaring.',
    company: '// Bedrijf',
    navigate: '// Navigatie',
    connect: '// Social',
    about: 'Over',
    certifications: 'Certificeringen',
    services: 'Diensten',
    stack: 'Techstack',
    projects: 'Projecten',
    backTop: 'NAAR_BOVEN',
    rights: '© {{year}} Fatih Akman. Alle rechten voorbehouden.',
    built: 'Gebouwd met Angular + Tailwind + CSS-animaties',
  },
};

const trPatch = {
  meta: {
    title: 'Fatih Akman — Full-stack geliştirici & analist | OGF Solutions',
    description:
      'OGF Solutions (SRL), Belçika bünyesinde serbest analist ve full-stack geliştirici. KDV/VAT BE 1031.478.796. Angular, Go, PHP, Laravel, Flutter, kurumsal veri. PSPO I. Uzaktan, küçük projeler.',
    ogLocale: 'tr_TR',
  },
  nav: {
    about: 'HAKKIMDA',
    certifications: 'SERTİFİKALAR',
    services: 'HİZMETLER',
    stack: 'STACK',
    projects: 'PROJELER',
    contact: 'İLETİŞİM',
  },
  header: { hireMe: 'İŞE_AL' },
  a11y: { language: 'Dil', socialLinks: 'Sosyal profiller' },
  hero: {
    stdout: {
      1: 'Analist & full-stack geliştirici',
    },
    statYears: 'Yıl deneyim',
    statTech: 'Teknolojiler',
    statCert: 'Sertifikalı',
    portraitAlt: 'Fatih Akman — full-stack geliştirici & analist',
  },
  about: {
    section: 'Hakkımda',
    headline1: 'ÖLÇEKLENEBİLİR',
    headline2: 'DİJİTAL ÇÖZÜMLER',
    p1: 'Önde gelen bir Avrupa toptan satış grubu için stratejik bir platforma katkıda bulunuyorum: mimari, geliştirme, izleme ve prodüksiyon desteği.',
    p2: 'İş paydaşları ile teknik ekipler arasında köprü kurarak karmaşık gereksinimleri sağlam, ölçeklenebilir çözümlere dönüştürüyorum.',
    p3: '5+ yıllık deneyimle Go, PHP, Laravel, Angular ve Flutter ile full-stack uygulamalar; MySQL, IBM i DB2 ve PostgreSQL gibi kurumsal veritabanları üzerinde çalıştım.',
    statusLine: 'Uzaktan · yalnızca küçük projeler',
    code: aboutCodeObj(
      aboutCode.map((l) =>
        l
          .replace('Full-Stack Developer & Analyst', 'Full-stack geliştirici & analist')
          .replace('European Wholesale Industry', 'Avrupa toptan satış')
          .replace('Strategic Platform', 'Stratejik platform')
          .replace('Architecture & Development', 'Mimari & geliştirme')
          .replace('Monitoring & Support', 'İzleme & destek')
          .replace(
            'Translating business needs into technical solutions',
            'İş ihtiyaçlarını teknik çözümlere dönüştürme',
          )
          .replace('Business-to-Tech Translation', 'İşten teknolojiye çeviri'),
      ),
    ),
  },
  services: {
    section: 'Hizmetler',
    headline1: 'NELER',
    headline2: 'YAPABİLİRİM',
    fullstack: {
      title: 'Full-stack geliştirme',
      description:
        'React, Angular, Node.js, PHP, Laravel ve Go ile uçtan uca web uygulamaları.',
    },
    apicustom: {
      title: 'Özel API’ler',
      description:
        'REST veya GraphQL, kimlik doğrulama, sürümleme, OpenAPI dokümantasyonu ve entegrasyon.',
    },
    mobile: {
      title: 'Mobil geliştirme',
      description: 'Flutter, Ionic ve Swift ile native iOS dahil çapraz platform.',
    },
    database: {
      title: 'Veritabanı mimarisi',
      description: 'MySQL, PostgreSQL ve IBM i DB2 için tasarım ve optimizasyon.',
    },
    architecture: {
      title: 'Sistem mimarisi',
      description: 'İzleme ve prodüksiyon desteği ile ölçeklenebilir mimari.',
    },
    analysis: {
      title: 'İş analizi',
      description: 'İş ihtiyaçlarını teknik çözümlere çevirme.',
    },
    product: {
      title: 'Ürün sahipliği',
      description: 'PSPO I sertifikalı; paydaşlar ve geliştirme ekipleri arasında köprü.',
    },
    automation: {
      title: 'İş otomasyonu & n8n',
      description:
        'n8n ile CRM, API, bildirim ve iç araç otomasyonu; KOBİ ve kurumsal süreçler.',
    },
    ai: {
      title: 'Yapay zekâ otomasyonu',
      description:
        'LLM boru hatları: özetleme, sınıflandırma, yönlendirme, yardımcı asistanlar.',
    },
    bots: {
      title: 'Botlar & mesajlaşma',
      description:
        'Telegram, webhook ve özel backend üzerinde sohbet ve görev botları.',
    },
    wallet: {
      title: 'Sadakat & cüzdan kartları',
      description:
        'Apple Wallet ve Google Wallet geçişleri; işletmeler için iOS ve Android uygulamaları.',
    },
  },
  projects: {
    section: 'Projeler',
    headline1: 'SEÇİLMİŞ',
    headline2: 'İŞLER',
    sub: 'PDF’nizle (2020–2023 slaytları) hizalı zaman çizelgesi ve daha yeni işler.',
    metaLine: 'Full-stack & analist',
    countSingular: 'proje',
    countPlural: 'proje',
    pdfAria: 'Portfolyo PDF’ini aç — 2023’e kadar projeler',
    pdfQrAlt: 'QR kod — 2023’e kadar portfolyo PDF projeleri',
    pdfBlurb: '2023’e kadar projelerin özet PDF’i.',
    pdfLink: 'Portfolyo PDF’ini aç (2023)',
    entries: {
      ryflex: {
        kind: 'Uygulama · evde bakım (Belçika)',
        summary: 'Belçika’daki evde bakım hizmetleri için yedek uygulama.',
      },
      'confidential-2025': {
        name: 'Gizli proje — 2025',
        kind: 'Perakende (Avrupa)',
        summary:
          'Büyük bir Avrupa perakende şirketi için NDA altındaki proje. Detay yok.',
      },
      'confidential-2024': {
        name: 'Gizli proje — 2024',
        kind: 'Perakende (Avrupa)',
        summary:
          'Avrupa perakende şirketi için NDA altındaki proje. Detay yok.',
      },
      lobi: {
        kind: 'Android uygulaması',
        summary: 'Devam eden kişisel çalışma. Firebase ile Android uygulaması.',
      },
      'altrove-media': {
        kind: 'Medya / haber',
        summary: 'Haberleri farklı açıdan ele alan medya — Altrove.',
      },
      lubala: {
        summary: 'Kinşasa’daki bir hukuk bürosu için Flutter WebApp.',
      },
      havilaway: {
        summary:
          'Londra’daki sağlık alanında idari ve mali yönetim için Flutter WebApp. Otomasyon, SQL, Python.',
      },
      emsf: {
        kind: 'Tanıtım WebApp',
        summary:
          'Enfance Meurtrie Sans Frontière STK sitesi — sokak çocukları ve yetimler.',
      },
      deenshop: {
        kind: 'Veri analizi',
        summary:
          'Bir kitapçı için Python aracı: API analizi, satış takibi, kâr paylaşımı.',
      },
      'la-bombetta': {
        summary:
          'La Bombetta İtalyan restoranı sitesi — Grand Sablon, Brüksel.',
      },
      kace: {
        kind: 'E-ticaret WebApp',
        summary: 'Charleroi’yu öne çıkaran tişört satış sitesi.',
      },
      tipstreet: {
        kind: 'Android uygulaması',
        summary:
          'Spor bahisleri uygulaması: Firebase, bankroll, geçmiş, Stripe ödemeleri.',
      },
    },
  },
  certs: {
    section: 'Sertifikalar',
    headline1: 'YETKİNLİKLER',
    headline2: '& GÜVEN',
    issued: 'Veriliş',
    expires: 'Bitiş',
    verifyHint: 'Doğrulama, sertifikayı veren kurumun portalında.',
    verifyFallback: 'Doğrula',
    ariaLogoExternal: '{{issuer}} — {{alt}} (dış bağlantı)',
    items: {
      '180944_10122025': {
        issuer: 'ANSSI — Fransa Ulusal Siber Güvenlik Ajansı',
        title: 'Siber güvenliğe giriş',
        issued: 'Ara 2025',
        expires: 'Ara 2035',
        category: 'Siber güvenlik',
        issuerLogoAlt: 'ANSSI logosu',
      },
      '66a5fc98-e77c-433b-8826-86a75885e380': {
        issued: 'Mayıs 2025',
        expires: 'Mayıs 2028',
      },
    },
  },
  tech: {
    section: 'Teknoloji yığını',
    headline1: 'ARAÇLAR &',
    headline2: 'TEKNOLOJİLER',
    categories: {
      language: 'dil',
      database: 'veritabanı',
      tool: 'araç',
      automation: 'otomasyon',
      payments: 'ödemeler',
    },
    stat1: 'Ustalık kazanılan teknolojiler',
    stat2: 'Full-stack yaklaşım',
    stat3: 'Sürekli öğrenme',
  },
  contact: {
    section: 'İletişim',
    headline1: 'BİRLİKTE',
    headline2: 'BİR ŞEY KURALIM',
    locationPrefix: 'Yalnızca uzaktan — şu an ',
    locationEmphasis: 'küçük projeler',
    statusBody: 'Küçük uzaktan işlere açık',
    blurbBefore: 'Uzaktan ',
    blurbEmphasis: 'küçük',
    blurbAfter:
      ' bir proje için full-stack geliştirici, analist veya ürün netliği mi gerekiyor? Şu an sınırlı uzaktan iş kabul ediyorum — kısa bir özet gönderin, uygun olup olmadığımı görelim.',
    name: 'Ad *',
    emailLabel: 'E-posta *',
    subject: 'Konu *',
    message: 'Mesaj *',
    phName: 'Ali Yılmaz',
    phEmail: 'siz@ornek.com',
    phSubject: 'Proje talebi',
    phMessage: 'Projenizden bahsedin…',
    snackOpen:
      'E-posta uygulamanız açılıyor… Mesaj yedek olarak panoya da kopyalandı.',
    snackDismiss: 'Kapat',
  },
  footer: {
    tagline:
      'Ölçeklenebilir dijital ürünler için full-stack geliştirici & analist. PSPO I, 5+ yıl deneyim.',
    company: '// Şirket',
    navigate: '// Gezinme',
    connect: '// Sosyal',
    about: 'Hakkımda',
    certifications: 'Sertifikalar',
    services: 'Hizmetler',
    stack: 'Teknoloji yığını',
    projects: 'Projeler',
    contact: 'İletişim',
    backTop: 'YUKARI_DÖN',
    rights: '© {{year}} Fatih Akman. Tüm hakları saklıdır.',
    built: 'Angular + Tailwind + CSS animasyonları ile oluşturuldu',
  },
};

writeFileSync(
  join(outDir, 'en.json'),
  JSON.stringify(buildEn(), null, 2),
  'utf8',
);
writeFileSync(
  join(outDir, 'fr.json'),
  JSON.stringify(deepMerge(buildEn(), frPatch), null, 2),
  'utf8',
);
writeFileSync(
  join(outDir, 'nl.json'),
  JSON.stringify(deepMerge(buildEn(), nlPatch), null, 2),
  'utf8',
);
writeFileSync(
  join(outDir, 'tr.json'),
  JSON.stringify(deepMerge(buildEn(), trPatch), null, 2),
  'utf8',
);

console.log('Wrote en.json, fr.json, nl.json, tr.json to', outDir);
