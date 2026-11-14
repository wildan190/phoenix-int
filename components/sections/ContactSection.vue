<script setup lang="ts">
import { CONTACT_CHANNELS, COMPANY_LOCATION } from '~/constants/company'
import { SERVICES_DATA } from '~/constants/services'
import { useClipboard } from '~/composables/useClipboard'
import { useWhatsAppComposer } from '~/composables/useWhatsAppComposer'

const { copyToClipboard } = useClipboard()
const { clientName, selectedServiceName, messageNotes, whatsAppUrl } = useWhatsAppComposer()
</script>

<template>
  <section class="s" id="kontak">
    <div class="wrap">
      <div class="contact">
        <!-- Direct Contact Channels -->
        <div>
          <span class="tag">// kontak</span>
          <h2 style="font-size: clamp(1.55rem, 3.6vw, 2.5rem); margin-top: 0.9rem">
            Hubungi Phoenix Technologies.
          </h2>

          <div class="rows">
            <!-- WhatsApp -->
            <div class="crow">
              <div class="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
                </svg>
              </div>
              <div>
                <small>WhatsApp</small>
                <div class="val">{{ CONTACT_CHANNELS[0].displayValue }}</div>
                <div class="acts">
                  <a :href="CONTACT_CHANNELS[0].href" target="_blank" rel="noopener">
                    Buka WhatsApp
                  </a>
                  <button
                    type="button"
                    @click="copyToClipboard(CONTACT_CHANNELS[0].copyValue || '')"
                  >
                    Salin nomor
                  </button>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="crow">
              <div class="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m3 8 9 6 9-6" />
                </svg>
              </div>
              <div>
                <small>Email</small>
                <div class="val">{{ CONTACT_CHANNELS[1].displayValue }}</div>
                <div class="acts">
                  <a :href="CONTACT_CHANNELS[1].href">
                    Kirim email
                  </a>
                  <button
                    type="button"
                    @click="copyToClipboard(CONTACT_CHANNELS[1].copyValue || '')"
                  >
                    Salin email
                  </button>
                </div>
              </div>
            </div>

            <!-- Address -->
            <div class="crow">
              <div class="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>
              <div>
                <small>Alamat</small>
                <div class="val">{{ COMPANY_LOCATION.fullAddress }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Terminal WhatsApp Composer -->
        <div class="term">
          <div class="bar">
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <span style="margin-left: 0.4rem">phoenix ~ konsultasi-baru</span>
          </div>

          <form autocomplete="off" @submit.prevent>
            <label for="f-name">
              &gt; nama
              <input
                id="f-name"
                v-model="clientName"
                type="text"
                placeholder="Nama Anda atau usaha"
              />
            </label>

            <label for="f-svc">
              &gt; layanan
              <select id="f-svc" v-model="selectedServiceName">
                <option
                  v-for="service in SERVICES_DATA"
                  :key="service.id"
                  :value="service.name"
                >
                  {{ service.name }}
                </option>
              </select>
            </label>

            <label for="f-msg">
              &gt; pesan
              <textarea
                id="f-msg"
                v-model="messageNotes"
                placeholder="Contoh: saya punya 3 cabang toko dan ingin stok tersinkron."
              />
            </label>

            <a
              class="btn btn-primary"
              :href="whatsAppUrl"
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
              Kirim lewat WhatsApp
            </a>
          </form>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="map">
        <iframe
          title="Lokasi Phoenix Technologies"
          :src="COMPANY_LOCATION.embedMapUrl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>

