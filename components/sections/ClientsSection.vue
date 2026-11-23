<script setup lang="ts">
import { CLIENTS_DATA } from '~/constants/clients'
</script>

<template>
  <section id="klien" class="s clients">
    <div class="wrap">
      <div class="head">
        <span class="tag">// klien</span>
        <h2>Kolaborasi yang membangun kepercayaan.</h2>
        <p>Beberapa mitra yang telah berkolaborasi bersama Phoenix Technologies.</p>
      </div>

      <ul class="client-list" aria-label="Daftar klien">
        <li
          v-for="(client, index) in CLIENTS_DATA"
          :key="client.name"
          class="client"
        >
          <span class="client-index" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <div class="client-name">
            <h3>{{ client.name }}</h3>
            <span v-if="client.location">{{ client.location }}</span>
          </div>
          <span class="client-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.clients {
  border-block: 1px solid var(--line);
  background:
    radial-gradient(ellipse at 92% 10%, var(--glow), transparent 35%),
    var(--surface);
}

.client-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.client {
  min-height: 150px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: 1rem;
  padding: 1.35rem;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: color-mix(in srgb, var(--surface) 90%, transparent);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.client:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
  box-shadow: 0 16px 38px -28px var(--glow);
}

.client-index {
  padding-top: 0.2rem;
  color: var(--accent-ink);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.client-name {
  min-width: 0;
}

.client-name h3 {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  overflow-wrap: anywhere;
}

.client-name span {
  display: block;
  margin-top: 0.55rem;
  color: var(--muted);
  font-size: 0.88rem;
}

.client-mark {
  display: grid;
  place-items: center;
  width: 34px;
  aspect-ratio: 1;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--accent-ink);
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.client:hover .client-mark {
  transform: rotate(-45deg);
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: var(--on-accent);
}

.client-mark svg {
  width: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@media (max-width: 760px) {
  .client-list {
    grid-template-columns: 1fr;
  }

  .client {
    min-height: 0;
    align-items: center;
    padding: 1.1rem;
  }
}
</style>
