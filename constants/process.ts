import type { ProcessPhase } from '../types/process'

export const PROCESS_PHASES: ProcessPhase[] = [
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
    activities: [
      'Migrasi data dan peluncuran',
      'Pelatihan pengguna',
      'Pemeliharaan dan dukungan teknis',
    ],
    deliverable: 'Sistem operasional dan panduan pengguna',
  },
]

