<script setup lang="ts">
import { createWhatsAppUrl } from '~/constants/company'

const consultationUrl = createWhatsAppUrl(
  'Halo Phoenix Technologies, saya ingin konsultasi proyek.'
)
</script>

<template>
  <a
    class="bigcta"
    :href="consultationUrl"
    target="_blank"
    rel="noopener"
  >
    <div class="wrap">
      <div>
        <h2>Mulai proyek Anda.</h2>
        <p>Konsultasi awal tanpa biaya · balasan lewat WhatsApp</p>
      </div>
      <span class="go" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </div>
  </a>
</template>

