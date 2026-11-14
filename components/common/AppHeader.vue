<script setup lang="ts">
import { NAV_ITEMS } from '~/constants/navigation'
import { DEFAULT_WHATSAPP_URL } from '~/constants/company'
</script>

<template>
  <header class="top">
    <div class="wrap">
      <div class="pill">
        <a class="brand" href="#atas" aria-label="Phoenix Technologies">
          <img src="/logo.png" alt="Phoenix Technologies Logo" width="30" height="30" />
          <b>PHOENIX</b>
        </a>

        <nav class="links" aria-label="Navigasi utama">
          <a
            v-for="item in NAV_ITEMS"
            :key="item.href"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </nav>

        <a
          class="btn btn-primary"
          :href="DEFAULT_WHATSAPP_URL"
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
          <span>Konsultasi</span>
        </a>
      </div>
    </div>
  </header>
</template>

