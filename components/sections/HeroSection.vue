<script setup lang="ts">
import { computed, ref } from 'vue'
import { COMPANY_LOCATION, createWhatsAppUrl } from '~/constants/company'
import { useContent } from '~/composables/useContent'
import { useEmbers } from '~/composables/useEmbers'

const canvasRef = ref<HTMLCanvasElement | null>(null)
useEmbers(canvasRef)

const { content } = useContent()

const projectWhatsAppUrl = computed(() => createWhatsAppUrl(content.value.whatsapp.project))
</script>

<template>
  <section class="hero">
    <canvas id="embers" ref="canvasRef" aria-hidden="true" />

    <div class="wrap">
      <div class="coords">
        <span><i>●</i> {{ content.hero.locationLabel }} {{ COMPANY_LOCATION.city }}, {{ COMPANY_LOCATION.province }}</span>
        <span>{{ COMPANY_LOCATION.coordinates }}</span>
      </div>

      <h1 class="wordmark">
        PHOENIX
        <small>TECHNOLOGIES</small>
      </h1>

      <div class="hero-lower">
        <div class="hero-copy">
          <p class="tagline">
            {{ content.hero.tagline.lead }}<em>{{ content.hero.tagline.accent }}</em>{{ content.hero.tagline.trail }}
          </p>
          <p class="lead">
            {{ content.hero.lead }}
          </p>
          <div class="cta-row">
            <a
              class="btn btn-primary"
              :href="projectWhatsAppUrl"
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
              {{ content.hero.ctaWhatsApp }}
            </a>
            <a class="btn btn-ghost" href="#layanan">
              {{ content.hero.ctaServices }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="rise" aria-hidden="true">
      <div class="r c" />
      <div class="r" />
      <div class="r b" />
      <img src="/logo.png" alt="Phoenix Emblem" width="300" height="300" />
    </div>
  </section>
</template>
