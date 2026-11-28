<script setup lang="ts">
import { computed } from 'vue'
import { createWhatsAppUrl } from '~/constants/company'
import { useContent } from '~/composables/useContent'

const { content } = useContent()

const consultationUrl = computed(() => createWhatsAppUrl(content.value.whatsapp.consultation))
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
        <h2>{{ content.cta.heading }}</h2>
        <p>{{ content.cta.description }}</p>
      </div>
      <span class="go" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </div>
  </a>
</template>

