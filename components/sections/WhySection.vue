<script setup lang="ts">
import { BENEFITS_DATA } from '~/constants/benefits'
</script>

<template>
  <section class="s why" id="keunggulan">
    <div class="wrap why-grid">
      <div class="head">
        <span class="tag">// mengapa phoenix</span>
        <h2>Dibuat untuk dipakai, bukan sekadar diserahkan.</h2>
        <p>
          Seperti burung yang menjadi nama kami, sistem yang kami bangun dirancang untuk bertahan, beradaptasi, dan bangkit lagi saat kebutuhan berubah.
        </p>
      </div>

      <div class="rules">
        <div
          v-for="benefit in BENEFITS_DATA"
          :key="benefit.title"
          class="rule"
        >
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

