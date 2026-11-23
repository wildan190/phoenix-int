import type { ServiceItem } from '../types/services'

export const SERVICES_DATA: ServiceItem[] = [
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
]
