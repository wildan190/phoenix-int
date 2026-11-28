import { COMPANY_NAME } from '../constants/company'
import type { ErrorCopy, SiteContent } from '../types/content'

function errorCopy(code: number): ErrorCopy {
  if (code === 404) {
    return {
      title: 'Page not found',
      message: 'The link you followed may have been moved, renamed, or never existed.',
      hint: 'Check the address again, or start over from the homepage.',
      primary: 'home',
    }
  }

  if (code === 403) {
    return {
      title: 'Access denied',
      message: 'You do not have permission to open this page.',
      hint: 'If this looks wrong, contact our team to request access.',
      primary: 'home',
    }
  }

  if (code === 429) {
    return {
      title: 'Too many requests',
      message: 'You sent too many requests in a short period of time.',
      hint: 'Wait a moment, then try again.',
      primary: 'retry',
    }
  }

  if (code === 503) {
    return {
      title: 'Service temporarily unavailable',
      message: 'We are performing maintenance or handling a traffic spike.',
      hint: 'Please come back in a little while.',
      primary: 'retry',
    }
  }

  if (code >= 500) {
    return {
      title: 'Server error',
      message: 'Our system failed to process this request. This is not your fault.',
      hint: 'Please try again shortly. If it still fails, contact our team.',
      primary: 'retry',
    }
  }

  return {
    title: 'Something went wrong',
    message: 'An unexpected problem occurred while loading this page.',
    hint: 'Please try again or return to the homepage.',
    primary: 'retry',
  }
}

export const enContent: SiteContent = {
  locale: 'en',
  htmlLang: 'en',
  canonicalPath: '/en',
  seo: {
    title: 'Phoenix Technologies | POS, Enterprise & Custom Software Solutions',
    description:
      'POS solutions, enterprise software, digital ticketing, application & server maintenance, and custom software from Rangkasbitung, Banten for businesses across Indonesia.',
    keywords:
      'Phoenix Technologies, POS solutions Indonesia, multi-outlet POS software, cashier application, enterprise solutions, enterprise software Indonesia, custom software Indonesia, software development services, ticketing system, QR ticketing, application maintenance, server maintenance, server management, cloud server, server infrastructure, software house Indonesia, software house Rangkasbitung, IT solutions Banten',
    ogLocale: 'en_US',
    ogImageAlt: `${COMPANY_NAME} | POS and Software Solutions`,
    catalogName: 'Phoenix Technologies Service Catalog',
    knowsAbout: [
      'Point of sale (POS) systems',
      'Enterprise software',
      'Custom software',
      'Digital ticketing systems',
      'Application and server maintenance',
      'Server and cloud infrastructure',
    ],
  },
  nav: {
    ariaLabel: 'Main navigation',
    ctaLabel: 'Consult',
    items: [
      { label: 'Services', href: '#layanan' },
      { label: 'Clients', href: '#klien' },
      { label: 'Portfolio', href: '#portofolio' },
      { label: 'Why Us', href: '#keunggulan' },
      { label: 'Process', href: '#proses' },
      { label: 'Contact', href: '#kontak' },
    ],
  },
  hero: {
    locationLabel: 'Based in',
    tagline: {
      lead: 'Digital systems that ',
      accent: 'rise',
      trail: ' and grow with your business.',
    },
    lead: 'Custom software, IoT, POS, reservations, ticketing, finance, and automation. We design, build, and maintain the technology your team relies on every day.',
    ctaWhatsApp: 'Chat via WhatsApp',
    ctaServices: 'Explore services',
  },
  services: {
    tag: '// services',
    heading: 'Ten solutions orbiting a single goal: making your business run lighter.',
    description:
      'Pick one to see the details. Every system can stand on its own or connect with the others.',
    ctaLabel: 'Ask about this service',
    items: [
      {
        id: 'tech-solutions',
        name: 'Tech & Server Solutions',
        description:
          'Technology consulting and server or cloud infrastructure design, including platform selection and system roadmaps.',
        tags: ['Server', 'Cloud', 'Architecture'],
        iconSvg:
          '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
      },
      {
        id: 'custom-software',
        name: 'Custom Software',
        description:
          'Web and mobile application development tailored to your workflows, integrations, and specific business needs.',
        tags: ['Web', 'Mobile', 'API'],
        iconSvg: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
      },
      {
        id: 'iot-solutions',
        name: 'IoT Solutions',
        description:
          'Devices and sensors connected to a dashboard that monitors conditions and sends real-time alerts.',
        tags: ['Sensor', 'Monitoring', 'Alert'],
        iconSvg:
          '<circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2"/>',
      },
      {
        id: 'business-solutions',
        name: 'Enterprise Solutions',
        description:
          'Enterprise systems to manage inventory, customers, HR, and operational reporting in a single dashboard.',
        tags: ['ERP', 'CRM', 'Multi-division'],
        iconSvg: '<path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6"/>',
      },
      {
        id: 'finance-system',
        name: 'Finance System Solutions',
        description:
          'Transaction records, invoices, payments, and financial reports that stay tidy and easy to audit.',
        tags: ['Invoice', 'Bookkeeping', 'Reports'],
        iconSvg: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>',
      },
      {
        id: 'ticketing-solutions',
        name: 'Ticketing Solutions',
        description:
          'Digital ticketing systems with QR tickets and entry validation for events, tourist destinations, and transportation.',
        tags: ['Event', 'Tourism', 'QR'],
        iconSvg:
          '<path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3z"/><path d="M14 6v12" stroke-dasharray="2 2.4"/>',
      },
      {
        id: 'reservation-system',
        name: 'Reservation System Solutions',
        description:
          'Online booking for hotels, restaurants, clinics, or service businesses, complete with schedules and automatic reminders.',
        tags: ['Schedule', 'Booking', 'Reminder'],
        iconSvg:
          '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4M8 15l2.5 2.5L16 13"/>',
      },
      {
        id: 'pos-solutions',
        name: 'POS Solutions',
        description:
          'POS solutions for cashier transactions, real-time stock management, sales reports, and multi-outlet operations.',
        tags: ['Cashier', 'Stock', 'Multi-outlet'],
        iconSvg:
          '<path d="M6 3h12v6H6zM4 9h16v12H4zM8 13h2M12 13h2M8 17h2M12 17h4"/>',
      },
      {
        id: 'automation-solutions',
        name: 'Automation Solutions',
        description:
          'Turning repetitive manual work into automated flows that connect your applications and data.',
        tags: ['Workflow', 'Integration', 'Bot'],
        iconSvg: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
      },
      {
        id: 'maintenance',
        name: 'Maintenance',
        description:
          'Application and server maintenance through bug fixes, system updates, and regular monitoring based on operational needs.',
        tags: ['Application', 'Server', 'Monitoring'],
        iconSvg:
          '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3z"/>',
      },
    ],
  },
  benefits: {
    tag: '// why phoenix',
    heading: 'Built to be used, not just handed over.',
    description:
      'Like the bird we are named after, the systems we build are designed to endure, adapt, and rise again as your needs change.',
    items: [
      {
        title: 'Fits your business process',
        description:
          'We start from how your team works, then translate it into a system that feels natural to use.',
      },
      {
        title: 'Integrated',
        description:
          'POS, finance, reservations, and IoT can connect so data flows without re-entry.',
      },
      {
        title: 'Ready to scale',
        description:
          'A modular architecture makes it easy to add features, outlets, or users as your business grows.',
      },
      {
        title: 'Ongoing support',
        description:
          'After launch we stay with you: fixes, updates, and training for your team.',
      },
    ],
  },
  clients: {
    tag: '// clients',
    heading: 'Partnerships that build trust.',
    description: 'A few partners who have collaborated with Phoenix Technologies.',
    listAriaLabel: 'Client list',
    items: [
      { name: 'Mitra.net', location: 'Jambi' },
      { name: 'Micro Padma Nusantara', location: '' },
      { name: 'Rolista', location: '' },
    ],
  },
  portfolio: {
    tag: '// portfolio',
    heading: 'Digital solutions designed for real-world needs.',
    description: 'A glimpse of the applications we build with our partners.',
    previewAriaLabel: (appName) => `Preview of the ${appName} application interface`,
    items: [
      {
        id: 'bacco-kanvas',
        name: 'Bacco Kanvas',
        category: 'Sales app',
        description: 'A sales app for tobacco product distribution, built for small businesses.',
        image: '/portfolio/bacco-kanvas-icon.png',
        imageAlt: 'Bacco Kanvas application icon',
      },
      {
        id: 'udayana-store',
        name: 'Udayana Store',
        category: 'E-commerce',
        description: 'An e-commerce platform for the Udayana small business.',
        image: '/portfolio/udayana-logo.png',
        imageAlt: 'Udayana logo',
      },
    ],
  },
  process: {
    tag: '// working methodology',
    heading: 'A structured, transparent process at every phase.',
    activitiesLabel: 'Activities',
    deliverableLabel: 'Deliverable',
    phases: [
      {
        phaseNumber: 1,
        label: 'Phase 1',
        title: 'Requirements Analysis',
        description: 'Understanding the business processes, constraints, and goals you want to reach.',
        activities: [
          'Stakeholder discussions and interviews',
          'Mapping the current workflow',
          'Defining scope and priorities',
        ],
        deliverable: 'Scope document and estimate',
      },
      {
        phaseNumber: 2,
        label: 'Phase 2',
        title: 'Solution Design',
        description: 'Translating requirements into an agreed system design.',
        activities: [
          'Architecture and database design',
          'User flow and interface design',
          'Prototype approval',
        ],
        deliverable: 'Prototype and design document',
      },
      {
        phaseNumber: 3,
        label: 'Phase 3',
        title: 'Development and Testing',
        description: 'Building the system in stages with regular reviews.',
        activities: [
          'Module-by-module development',
          'Regular demos for the client',
          'Functional and security testing',
        ],
        deliverable: 'Test build and test report',
      },
      {
        phaseNumber: 4,
        label: 'Phase 4',
        title: 'Implementation and Support',
        description: 'Launching the system into the live environment with hands-on support.',
        activities: [
          'Data migration and launch',
          'User training',
          'Maintenance and technical support',
        ],
        deliverable: 'Live system and user guide',
      },
    ],
  },
  cta: {
    heading: 'Start your project.',
    description: 'Free initial consultation · replies via WhatsApp',
  },
  contact: {
    tag: '// contact',
    heading: 'Contact Phoenix Technologies.',
    channels: {
      whatsapp: { label: 'WhatsApp', actionLabel: 'Open WhatsApp', copyLabel: 'Copy number' },
      email: { label: 'Email', actionLabel: 'Send email', copyLabel: 'Copy email' },
      address: { label: 'Address', actionLabel: 'View map' },
    },
    form: {
      terminalTitle: 'phoenix ~ new-inquiry',
      nameLabel: 'name',
      namePlaceholder: 'Your name or business',
      serviceLabel: 'service',
      messageLabel: 'message',
      messagePlaceholder: 'Example: I run 3 store branches and want stock to stay in sync.',
      submitLabel: 'Send via WhatsApp',
    },
    mapTitle: 'Phoenix Technologies location',
  },
  footer: {
    rights: (year) => `© ${year} ${COMPANY_NAME}. All rights reserved.`,
  },
  whatsapp: {
    default: 'Hello Phoenix Technologies, I would like a consultation.',
    project: 'Hello Phoenix Technologies, I would like to discuss a project.',
    consultation: 'Hello Phoenix Technologies, I would like a project consultation.',
    serviceInterest: (serviceName) =>
      `Hello Phoenix Technologies, I am interested in your ${serviceName} service.`,
    composeMessage: ({ name, service, notes }) => {
      const namePart = name.trim() ? `my name is ${name.trim()}. ` : ''
      const notesPart = notes.trim() ? ` ${notes.trim()}` : ''
      return `Hello Phoenix Technologies, ${namePart}I am interested in your ${service} service.${notesPart}`
    },
  },
  toast: {
    copied: (value) => `Copied: ${value}`,
    manualCopy: (value) => `Copy manually: ${value}`,
  },
  error: {
    pageTitle: (code, title) => `${code} · ${title} | Phoenix Technologies`,
    quickNavLabel: 'Jump to',
    detailAriaLabel: 'Error details',
    detailTerminalTitle: 'error log',
    rows: { code: 'Code', description: 'Description', url: 'Address' },
    buttons: { home: 'Back to Home', retry: 'Try Again', consultation: 'Consult' },
    byStatus: errorCopy,
  },
  languageSwitcher: {
    ariaLabel: 'Switch language',
    titles: { id: 'Bahasa Indonesia', en: 'English' },
  },
}
