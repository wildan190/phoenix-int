# Phoenix Technologies - Nuxt 3

Website resmi Phoenix Technologies yang dibangun ulang dengan arsitektur modern **Nuxt 3**, **Vue 3 Composition API (`<script setup>`)**, dan **TypeScript**.

## 🚀 Keunggulan Arsitektur & Clean Code

- **Zero Fat Code**: Logika, state, data, dan tampilan dipisah secara modular dan terorganisir rapi.
- **Single Source of Truth**: Semua data layanan, alur metodologi kerja, informasi kontak, dan benefit perusahaan disimpan dalam folder `constants/` dengan validasi `types/`.
- **Reusable Composables**:
  - `useToast`: State management notifikasi toast.
  - `useClipboard`: Helper penyalinan ke clipboard dengan toast notifikasi dan fallback otomatis.
  - `useEmbers`: Visual canvas partikel interaktif (mengikuti tema warna `--accent`, ramah aksesibilitas `prefers-reduced-motion`, dan pembersihan memori otomatis).
  - `useWhatsAppComposer`: Generator pesan interaktif WhatsApp secara reaktif.
- **Komponen Modular**:
  - `components/common/AppHeader.vue`: Navigasi sticky blur pill.
  - `components/common/AppFooter.vue`: Footer hak cipta & lokasi.
  - `components/common/AppToast.vue`: Notifikasi mengambang.
  - `components/sections/HeroSection.vue`: Hero rising sun & canvas partikel.
  - `components/sections/ServicesSection.vue`: Dial orbit interaktif 9 layanan + accordion list dengan rotasi otomatis dan pause-on-hover.
  - `components/sections/WhySection.vue`: Grid nilai keunggulan utama.
  - `components/sections/ProcessSection.vue`: 4 fase metodologi kerja terstruktur.
  - `components/sections/CtaBanner.vue`: Banner CTA interaktif.
  - `components/sections/ContactSection.vue`: Saluran kontak cepat, WhatsApp terminal composer, dan Google Maps embed.

---

## 🛠️ Perintah Menjalankan Proyek

### 1. Jalankan Mode Pengembangan (Dev Server)
```bash
npm run dev
```

### 2. Build untuk Produksi (SSR / Node Server)
```bash
npm run build
npm run preview
```

### 3. Generate Statis (SSG / Jamstack)
```bash
npm run generate
```
Output static files akan berada di direktori `.output/public`.

