<script setup lang="ts">
import { ref } from 'vue'
import { PROJECT_WHATSAPP_URL, COMPANY_LOCATION } from '~/constants/company'
import { useEmbers } from '~/composables/useEmbers'

const canvasRef = ref<HTMLCanvasElement | null>(null)
useEmbers(canvasRef)
</script>

<template>
  <section class="hero">
    <canvas id="embers" ref="canvasRef" aria-hidden="true" />

    <div class="wrap">
      <div class="coords">
        <span><i>●</i> Berdiri di {{ COMPANY_LOCATION.city }}, {{ COMPANY_LOCATION.province }}</span>
        <span>{{ COMPANY_LOCATION.coordinates }}</span>
      </div>

      <h1 class="wordmark">
        PHOENIX
        <small>TECHNOLOGIES</small>
      </h1>

      <div class="hero-lower">
        <div class="hero-copy">
          <p class="tagline">
            Sistem digital yang <em>bangkit</em> dan tumbuh bersama bisnis Anda.
          </p>
          <p class="lead">
            Custom software, IoT, POS, reservasi, tiket, keuangan, sampai otomasi. Kami merancang, membangun, dan merawat teknologi yang dipakai tim Anda setiap hari.
          </p>
          <div class="cta-row">
            <a
              class="btn btn-primary"
              :href="PROJECT_WHATSAPP_URL"
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
              Chat via WhatsApp
            </a>
            <a class="btn btn-ghost" href="#layanan">
              Jelajahi layanan
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

