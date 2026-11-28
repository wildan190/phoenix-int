<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { createWhatsAppUrl } from '~/constants/company'
import { useContent } from '~/composables/useContent'

const { content } = useContent()

const currentIndex = ref(0)
const isAutoRotating = ref(true)
let autoRotateTimer: ReturnType<typeof setInterval> | null = null

const services = computed(() => {
  const items = content.value.services.items
  const total = items.length

  return items.map((item, index) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2
    const x = Number((50 + 42 * Math.cos(angle)).toFixed(3))
    const y = Number((50 + 42 * Math.sin(angle)).toFixed(3))

    return {
      ...item,
      x,
      y,
      whatsAppUrl: createWhatsAppUrl(content.value.whatsapp.serviceInterest(item.name)),
    }
  })
})

const activeCoordinates = computed(() => {
  const activeService = services.value[currentIndex.value]
  return {
    x2: activeService?.x ?? 50,
    y2: activeService?.y ?? 8,
  }
})

function selectService(index: number, stopAuto = true) {
  currentIndex.value = index
  if (stopAuto) {
    isAutoRotating.value = false
  }
}

function handlePointerEnter(index: number, event: PointerEvent) {
  if (event.pointerType === 'mouse') {
    selectService(index, true)
  }
}

function pauseAutoRotation() {
  isAutoRotating.value = false
}

onMounted(() => {
  if (!import.meta.client) return

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!prefersReducedMotion) {
    autoRotateTimer = setInterval(() => {
      if (isAutoRotating.value) {
        currentIndex.value = (currentIndex.value + 1) % services.value.length
      }
    }, 4500)
  }
})

onBeforeUnmount(() => {
  if (autoRotateTimer) {
    clearInterval(autoRotateTimer)
  }
})
</script>

<template>
  <section class="s" id="layanan">
    <div class="wrap">
      <div class="head">
        <span class="tag">{{ content.services.tag }}</span>
        <h2>{{ content.services.heading }}</h2>
        <p>{{ content.services.description }}</p>
      </div>

      <div class="svc" @pointerenter="pauseAutoRotation">
        <!-- Interactive Orbital Dial -->
        <div class="dial" aria-hidden="false">
          <svg class="ringsvg" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" stroke-width=".4" />
            <circle
              class="spinring"
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="var(--accent)"
              stroke-opacity=".35"
              stroke-width=".3"
              stroke-dasharray="1 2.2"
            />
            <line
              id="beam"
              x1="50"
              y1="50"
              :x2="activeCoordinates.x2"
              :y2="activeCoordinates.y2"
            />
          </svg>

          <div class="core">
            <img src="/logo-256.webp" alt="Phoenix Core" width="120" height="109" />
          </div>

          <!-- Service Circular Nodes -->
          <button
            v-for="(service, idx) in services"
            :key="service.id"
            type="button"
            class="node"
            :class="{ on: idx === currentIndex }"
            :style="{ left: `${service.x}%`, top: `${service.y}%` }"
            :aria-label="service.name"
            :title="service.name"
            @click="selectService(idx, true)"
            @pointerenter="handlePointerEnter(idx, $event)"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              v-html="service.iconSvg"
            />
          </button>
        </div>

        <!-- Service Accordion List -->
        <ul class="idx">
          <li
            v-for="(service, idx) in services"
            :key="service.id"
            class="item"
            :class="{ on: idx === currentIndex }"
          >
            <button
              type="button"
              class="row"
              :aria-expanded="idx === currentIndex"
              @click="selectService(idx, true)"
              @pointerenter="handlePointerEnter(idx, $event)"
            >
              <span>{{ service.name }}</span>
              <span class="arr" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </button>

            <div class="more">
              <div>
                <div class="in">
                  <p>{{ service.description }}</p>
                  <div class="tags">
                    <span v-for="tag in service.tags" :key="tag">
                      {{ tag }}
                    </span>
                  </div>
                  <a
                    class="btn btn-primary"
                    :href="service.whatsAppUrl"
                    target="_blank"
                    rel="noopener"
                  >
                    {{ content.services.ctaLabel }}
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
