<script setup lang="ts">
import { computed } from 'vue'
import { createWhatsAppUrl } from '~/constants/company'
import { useContent } from '~/composables/useContent'

const { content, locale } = useContent()

const consultationUrl = computed(() => createWhatsAppUrl(content.value.whatsapp.default))
</script>

<template>
  <header class="top">
    <div class="wrap">
      <div class="pill">
        <a class="brand" href="#atas" aria-label="Phoenix Technologies">
          <img src="/logo-64.webp" alt="Phoenix Technologies Logo" width="30" height="27" />
          <b>PHOENIX</b>
        </a>

        <nav class="links" :aria-label="content.nav.ariaLabel">
          <a
            v-for="item in content.nav.items"
            :key="item.href"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="pill-actions">
          <div class="lang" role="group" :aria-label="content.languageSwitcher.ariaLabel">
            <NuxtLink
              to="/"
              :class="{ on: locale === 'id' }"
              :title="content.languageSwitcher.titles.id"
              :aria-current="locale === 'id' ? 'true' : undefined"
            >
              ID
            </NuxtLink>
            <NuxtLink
              to="/en"
              :class="{ on: locale === 'en' }"
              :title="content.languageSwitcher.titles.en"
              :aria-current="locale === 'en' ? 'true' : undefined"
            >
              EN
            </NuxtLink>
          </div>

          <a
            class="btn btn-primary"
            :href="consultationUrl"
            target="_blank"
            rel="noopener"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
            </svg>
            <span>{{ content.nav.ctaLabel }}</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
