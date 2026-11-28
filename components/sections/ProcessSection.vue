<script setup lang="ts">
import { useContent } from '~/composables/useContent'

const { content } = useContent()
</script>

<template>
  <section class="s" id="proses">
    <div class="wrap">
      <div class="head">
        <span class="tag">{{ content.process.tag }}</span>
        <h2>{{ content.process.heading }}</h2>
      </div>

      <div class="method">
        <div
          v-for="phase in content.process.phases"
          :key="phase.phaseNumber"
          class="ph"
        >
          <div class="ph-top">
            <span class="ph-n">{{ phase.phaseNumber }}</span>
            <span class="lb">{{ phase.label }}</span>
          </div>

          <h3>{{ phase.title }}</h3>
          <p>{{ phase.description }}</p>

          <div>
            <h4>{{ content.process.activitiesLabel }}</h4>
            <ul>
              <li v-for="(act, idx) in phase.activities" :key="idx">
                {{ act }}
              </li>
            </ul>
          </div>

          <div class="dl">
            <h4>{{ content.process.deliverableLabel }}</h4>
            {{ phase.deliverable }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

