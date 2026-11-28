import { COMPANY_NAME } from '../constants/company'
import type { ErrorCopy, SiteContent } from '../types/content'

function errorCopy(code: number): ErrorCopy {
  if (code === 404) {
    return {
      title: 'Halaman tidak ditemukan',
      message: 'Tautan yang Anda tuju mungkin telah dipindahkan, diubah namanya, atau tidak pernah ada.',
      hint: 'Periksa kembali alamatnya, atau mulai lagi dari beranda.',
      primary: 'home',
    }
  }

  if (code === 403) {
    return {
      title: 'Akses ditolak',
      message: 'Anda tidak memiliki izin untuk membuka halaman ini.',
      hint: 'Jika ini keliru, hubungi tim kami untuk mendapatkan akses.',
      primary: 'home',
    }
  }

  if (code === 429) {
    return {
      title: 'Terlalu banyak permintaan',
      message: 'Anda mengirim permintaan terlalu sering dalam waktu singkat.',
      hint: 'Tunggu sebentar, lalu coba lagi.',
      primary: 'retry',
    }
  }

  if (code === 503) {
    return {
      title: 'Layanan sedang tidak tersedia',
      message: 'Kami sedang melakukan pemeliharaan atau lonjakan trafik.',
      hint: 'Silakan kembali beberapa saat lagi.',
      primary: 'retry',
    }
  }

  if (code >= 500) {
    return {
      title: 'Terjadi kesalahan pada server',
      message: 'Sistem kami gagal memproses permintaan ini. Ini bukan kesalahan Anda.',
      hint: 'Silakan coba lagi sebentar lagi. Jika masih gagal, hubungi tim kami.',
      primary: 'retry',
    }
  }

  return {
    title: 'Terjadi kesalahan',
    message: 'Sesuatu yang tidak terduga terjadi saat memuat halaman ini.',
    hint: 'Silakan coba lagi atau kembali ke beranda.',
    primary: 'retry',
  }
}

export const idContent: SiteContent = {
  locale: 'id',
  htmlLang: 'id',
  canonicalPath: '/',
  seo: {
    title: 'Phoenix Technologies | Solusi POS, Enterprise & Custom Software',
    description:
      'Solusi POS, software enterprise, ticketing digital, maintenance aplikasi & server, serta custom software dari Rangkasbitung, Banten untuk bisnis di seluruh Indonesia.',
    keywords:
      'Phoenix Technologies, solusi POS Indonesia, software POS multi-cabang, aplikasi kasir, solusi enterprise, enterprise software Indonesia, custom software Indonesia, jasa pembuatan aplikasi, aplikasi ticketing, ticketing QR, maintenance aplikasi, maintenance server, manajemen server, server cloud, infrastruktur server, software house Indonesia, software house Rangkasbitung, solusi IT Banten',
    ogLocale: 'id_ID',
    ogImageAlt: `${COMPANY_NAME} | Solusi POS dan Software`,
    catalogName: 'Katalog Layanan Phoenix Technologies',
    knowsAbout: [
      'Sistem point of sale (POS)',
      'Enterprise software',
      'Custom software',
      'Sistem ticketing digital',
      'Maintenance aplikasi dan server',
      'Infrastruktur server dan cloud',
    ],
  },
  nav: {
    ariaLabel: 'Navigasi utama',
    ctaLabel: 'Konsultasi',
    items: [
      { label: 'Layanan', href: '#layanan' },
      { label: 'Klien', href: '#klien' },
      { label: 'Portofolio', href: '#portofolio' },
      { label: 'Keunggulan', href: '#keunggulan' },
      { label: 'Proses', href: '#proses' },
      { label: 'Kontak', href: '#kontak' },
    ],
  },
  hero: {
    locationLabel: 'Berdiri di',
    tagline: {
      lead: 'Sistem digital yang ',
      accent: 'bangkit',
      trail: ' dan tumbuh bersama bisnis Anda.',
    },
    lead: 'Custom software, IoT, POS, reservasi, tiket, keuangan, sampai otomasi. Kami merancang, membangun, dan merawat teknologi yang dipakai tim Anda setiap hari.',
    ctaWhatsApp: 'Chat via WhatsApp',
    ctaServices: 'Jelajahi layanan',
  },
  services: {
    tag: '// layanan',
    heading: 'Sepuluh solusi yang mengorbit satu tujuan: bisnis Anda berjalan lebih ringan.',
    description:
      'Pilih satu untuk melihat detailnya. Semua sistem bisa berdiri sendiri atau saling terhubung.',
    ctaLabel: 'Tanyakan layanan ini',
    items: [
      {
        id: 'tech-solutions',
        name: 'Tech & Server Solutions',
        description:
          'Konsultasi teknologi dan perancangan infrastruktur server maupun cloud, termasuk pemilihan platform dan penyusunan peta jalan sistem.',
        tags: ['Server', 'Cloud', 'Arsitektur'],
        iconSvg:
          '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9zM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
      },
      {
        id: 'custom-software',
        name: 'Custom Software',
        description:
          'Pengembangan aplikasi web dan mobile sesuai alur kerja, integrasi, dan kebutuhan khusus bisnis Anda.',
        tags: ['Web', 'Mobile', 'API'],
        iconSvg: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
      },
      {
        id: 'iot-solutions',
        name: 'IoT Solutions',
        description:
          'Perangkat dan sensor yang terhubung ke dashboard, memantau kondisi dan mengirim peringatan secara real-time.',
        tags: ['Sensor', 'Monitoring', 'Alert'],
        iconSvg:
          '<circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2"/>',
      },
      {
        id: 'business-solutions',
        name: 'Enterprise Solutions',
        description:
          'Sistem enterprise untuk mengelola inventori, pelanggan, SDM, dan laporan operasional dalam satu dashboard.',
        tags: ['ERP', 'CRM', 'Multi-divisi'],
        iconSvg: '<path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6"/>',
      },
      {
        id: 'finance-system',
        name: 'Finance System Solutions',
        description:
          'Pencatatan transaksi, invoice, pembayaran, dan laporan keuangan yang rapi dan mudah diaudit.',
        tags: ['Invoice', 'Pembukuan', 'Laporan'],
        iconSvg: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>',
      },
      {
        id: 'ticketing-solutions',
        name: 'Ticketing Solutions',
        description:
          'Sistem ticketing digital dengan tiket QR dan validasi masuk untuk acara, destinasi wisata, maupun transportasi.',
        tags: ['Event', 'Wisata', 'QR'],
        iconSvg:
          '<path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3z"/><path d="M14 6v12" stroke-dasharray="2 2.4"/>',
      },
      {
        id: 'reservation-system',
        name: 'Reservation System Solutions',
        description:
          'Booking online untuk hotel, restoran, klinik, atau layanan jasa, lengkap dengan jadwal dan pengingat otomatis.',
        tags: ['Jadwal', 'Booking', 'Pengingat'],
        iconSvg:
          '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4M8 15l2.5 2.5L16 13"/>',
      },
      {
        id: 'pos-solutions',
        name: 'POS Solutions',
        description:
          'Solusi POS untuk transaksi kasir, pengelolaan stok real-time, laporan penjualan, dan operasional multi-cabang.',
        tags: ['Kasir', 'Stok', 'Multi-outlet'],
        iconSvg:
          '<path d="M6 3h12v6H6zM4 9h16v12H4zM8 13h2M12 13h2M8 17h2M12 17h4"/>',
      },
      {
        id: 'automation-solutions',
        name: 'Automation Solutions',
        description:
          'Mengubah pekerjaan manual berulang menjadi alur otomatis yang menghubungkan aplikasi dan data Anda.',
        tags: ['Workflow', 'Integrasi', 'Bot'],
        iconSvg: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
      },
      {
        id: 'maintenance',
        name: 'Maintenance',
        description:
          'Pemeliharaan aplikasi dan server melalui perbaikan bug, pembaruan sistem, serta monitoring berkala sesuai kebutuhan operasional.',
        tags: ['Aplikasi', 'Server', 'Monitoring'],
        iconSvg:
          '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3z"/>',
      },
    ],
  },
  benefits: {
    tag: '// mengapa phoenix',
    heading: 'Dibuat untuk dipakai, bukan sekadar diserahkan.',
    description:
      'Seperti burung yang menjadi nama kami, sistem yang kami bangun dirancang untuk bertahan, beradaptasi, dan bangkit lagi saat kebutuhan berubah.',
    items: [
      {
        title: 'Sesuai proses bisnis',
        description:
          'Kami mulai dari cara kerja tim Anda, lalu menerjemahkannya menjadi sistem yang terasa natural dipakai.',
      },
      {
        title: 'Terintegrasi',
        description:
          'POS, keuangan, reservasi, dan IoT bisa saling terhubung sehingga data mengalir tanpa input ulang.',
      },
      {
        title: 'Siap berkembang',
        description:
          'Arsitektur modular memudahkan penambahan fitur, outlet, atau pengguna saat usaha Anda tumbuh.',
      },
      {
        title: 'Dukungan berkelanjutan',
        description:
          'Setelah rilis kami tetap mendampingi: perbaikan, pembaruan, dan pelatihan untuk tim Anda.',
      },
    ],
  },
  clients: {
    tag: '// klien',
    heading: 'Kolaborasi yang membangun kepercayaan.',
    description: 'Beberapa mitra yang telah berkolaborasi bersama Phoenix Technologies.',
    listAriaLabel: 'Daftar klien',
    items: [
      { name: 'Mitra.net', location: 'Jambi' },
      { name: 'Micro Padma Nusantara', location: '' },
      { name: 'Rolista', location: '' },
    ],
  },
  portfolio: {
    tag: '// portofolio',
    heading: 'Solusi digital yang dirancang untuk kebutuhan nyata.',
    description: 'Cuplikan aplikasi yang kami bangun bersama mitra.',
    previewAriaLabel: (appName) => `Pratinjau tampilan aplikasi ${appName}`,
    items: [
      {
        id: 'bacco-kanvas',
        name: 'Bacco Kanvas',
        category: 'Aplikasi sales',
        description: 'Aplikasi sales penjualan produk tembakau untuk UMKM.',
        image: '/portfolio/bacco-kanvas-icon.webp',
        imageAlt: 'Ikon aplikasi Bacco Kanvas',
      },
      {
        id: 'udayana-store',
        name: 'Udayana Store',
        category: 'E-commerce',
        description: 'E-commerce milik UMKM Udayana.',
        image: '/portfolio/udayana-logo.webp',
        imageAlt: 'Logo Udayana',
      },
    ],
  },
  process: {
    tag: '// metodologi kerja',
    heading: 'Proses kerja yang terstruktur dan transparan di setiap fase.',
    activitiesLabel: 'Aktivitas',
    deliverableLabel: 'Deliverable',
    phases: [
      {
        phaseNumber: 1,
        label: 'Fase 1',
        title: 'Analisis Kebutuhan',
        description: 'Memahami proses bisnis, kendala, dan target yang ingin dicapai.',
        activities: [
          'Diskusi dan wawancara pemangku kepentingan',
          'Pemetaan alur kerja saat ini',
          'Penentuan lingkup dan prioritas',
        ],
        deliverable: 'Dokumen lingkup kerja dan estimasi',
      },
      {
        phaseNumber: 2,
        label: 'Fase 2',
        title: 'Perancangan Solusi',
        description: 'Menerjemahkan kebutuhan menjadi rancangan sistem yang disepakati.',
        activities: [
          'Rancangan arsitektur dan basis data',
          'Desain alur dan antarmuka pengguna',
          'Persetujuan prototipe',
        ],
        deliverable: 'Prototipe dan dokumen rancangan',
      },
      {
        phaseNumber: 3,
        label: 'Fase 3',
        title: 'Pengembangan dan Pengujian',
        description: 'Pembangunan sistem secara bertahap dengan peninjauan berkala.',
        activities: [
          'Pengembangan per modul',
          'Demo berkala kepada klien',
          'Pengujian fungsi dan keamanan',
        ],
        deliverable: 'Versi uji dan laporan pengujian',
      },
      {
        phaseNumber: 4,
        label: 'Fase 4',
        title: 'Implementasi dan Dukungan',
        description: 'Peluncuran sistem ke lingkungan operasional dan pendampingan.',
        activities: ['Migrasi data dan peluncuran', 'Pelatihan pengguna', 'Pemeliharaan dan dukungan teknis'],
        deliverable: 'Sistem operasional dan panduan pengguna',
      },
    ],
  },
  cta: {
    heading: 'Mulai proyek Anda.',
    description: 'Konsultasi awal tanpa biaya · balasan lewat WhatsApp',
  },
  contact: {
    tag: '// kontak',
    heading: 'Hubungi Phoenix Technologies.',
    channels: {
      whatsapp: { label: 'WhatsApp', actionLabel: 'Buka WhatsApp', copyLabel: 'Salin nomor' },
      email: { label: 'Email', actionLabel: 'Kirim email', copyLabel: 'Salin email' },
      address: { label: 'Alamat', actionLabel: 'Lihat peta' },
    },
    form: {
      terminalTitle: 'phoenix ~ konsultasi-baru',
      nameLabel: 'nama',
      namePlaceholder: 'Nama Anda atau usaha',
      serviceLabel: 'layanan',
      messageLabel: 'pesan',
      messagePlaceholder: 'Contoh: saya punya 3 cabang toko dan ingin stok tersinkron.',
      submitLabel: 'Kirim lewat WhatsApp',
    },
    mapTitle: 'Lokasi Phoenix Technologies',
  },
  footer: {
    rights: (year) => `© ${year} ${COMPANY_NAME}. Seluruh hak cipta dilindungi.`,
  },
  whatsapp: {
    default: 'Halo Phoenix Technologies, saya ingin konsultasi.',
    project: 'Halo Phoenix Technologies, saya ingin membahas proyek.',
    consultation: 'Halo Phoenix Technologies, saya ingin konsultasi proyek.',
    serviceInterest: (serviceName) =>
      `Halo Phoenix Technologies, saya tertarik dengan layanan ${serviceName}.`,
    composeMessage: ({ name, service, notes }) => {
      const namePart = name.trim() ? `saya ${name.trim()}. ` : ''
      const notesPart = notes.trim() ? ` ${notes.trim()}` : ''
      return `Halo Phoenix Technologies, ${namePart}Saya tertarik dengan layanan ${service}.${notesPart}`
    },
  },
  toast: {
    copied: (value) => `Tersalin: ${value}`,
    manualCopy: (value) => `Salin manual: ${value}`,
  },
  error: {
    pageTitle: (code, title) => `${code} · ${title} | Phoenix Technologies`,
    quickNavLabel: 'Langsung ke',
    detailAriaLabel: 'Detail kesalahan',
    detailTerminalTitle: 'error log',
    rows: { code: 'Kode', description: 'Keterangan', url: 'Alamat' },
    buttons: { home: 'Kembali ke Beranda', retry: 'Coba Lagi', consultation: 'Konsultasi' },
    byStatus: errorCopy,
  },
  languageSwitcher: {
    ariaLabel: 'Ganti bahasa',
    titles: { id: 'Bahasa Indonesia', en: 'English' },
  },
}
