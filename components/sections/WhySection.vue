<script setup lang="ts">
import { useContent } from '~/composables/useContent'

const { content } = useContent()
</script>

<template>
  <section class="s why" id="keunggulan">
    <div class="wrap why-grid">
      <div class="head">
        <span class="tag">{{ content.benefits.tag }}</span>
        <h2>{{ content.benefits.heading }}</h2>
        <p>
          {{ content.benefits.description }}
        </p>
      </div>

      <div class="rules">
        <div
          v-for="benefit in content.benefits.items"
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

