<script setup lang="ts">
import { PROCESS_PHASES } from '~/constants/process'
</script>

<template>
  <section class="s" id="proses">
    <div class="wrap">
      <div class="head">
        <span class="tag">// metodologi kerja</span>
        <h2>Proses kerja yang terstruktur dan transparan di setiap fase.</h2>
      </div>

      <div class="method">
        <div
          v-for="phase in PROCESS_PHASES"
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
            <h4>Aktivitas</h4>
            <ul>
              <li v-for="(act, idx) in phase.activities" :key="idx">
                {{ act }}
              </li>
            </ul>
          </div>

          <div class="dl">
            <h4>Deliverable</h4>
            {{ phase.deliverable }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

