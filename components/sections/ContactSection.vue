<script setup lang="ts">
import { COMPANY_LOCATION, CONTACT_CHANNELS } from '~/constants/company'
import { useClipboard } from '~/composables/useClipboard'
import { useContent } from '~/composables/useContent'
import { useWhatsAppComposer } from '~/composables/useWhatsAppComposer'

const { content } = useContent()

const { copyToClipboard } = useClipboard()
const { clientName, selectedServiceName, messageNotes, whatsAppUrl } = useWhatsAppComposer()
</script>

<template>
  <section class="s" id="kontak">
    <div class="wrap">
      <div class="contact">
        <!-- Direct Contact Channels -->
        <div>
          <span class="tag">{{ content.contact.tag }}</span>
          <h2 style="font-size: clamp(1.55rem, 3.6vw, 2.5rem); margin-top: 0.9rem">
            {{ content.contact.heading }}
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
                <small>{{ content.contact.channels.whatsapp.label }}</small>
                <div class="val">{{ CONTACT_CHANNELS[0].displayValue }}</div>
                <div class="acts">
                  <a :href="CONTACT_CHANNELS[0].href" target="_blank" rel="noopener">
                    {{ content.contact.channels.whatsapp.actionLabel }}
                  </a>
                  <button
                    type="button"
                    @click="copyToClipboard(CONTACT_CHANNELS[0].copyValue || '')"
                  >
                    {{ content.contact.channels.whatsapp.copyLabel }}
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
                <small>{{ content.contact.channels.email.label }}</small>
                <div class="val">{{ CONTACT_CHANNELS[1].displayValue }}</div>
                <div class="acts">
                  <a :href="CONTACT_CHANNELS[1].href">
                    {{ content.contact.channels.email.actionLabel }}
                  </a>
                  <button
                    type="button"
                    @click="copyToClipboard(CONTACT_CHANNELS[1].copyValue || '')"
                  >
                    {{ content.contact.channels.email.copyLabel }}
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
                <small>{{ content.contact.channels.address.label }}</small>
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
            <span style="margin-left: 0.4rem">{{ content.contact.form.terminalTitle }}</span>
          </div>

          <form autocomplete="off" @submit.prevent>
            <label for="f-name">
              &gt; {{ content.contact.form.nameLabel }}
              <input
                id="f-name"
                v-model="clientName"
                type="text"
                :placeholder="content.contact.form.namePlaceholder"
              />
            </label>

            <label for="f-svc">
              &gt; {{ content.contact.form.serviceLabel }}
              <select id="f-svc" v-model="selectedServiceName">
                <option
                  v-for="service in content.services.items"
                  :key="service.id"
                  :value="service.name"
                >
                  {{ service.name }}
                </option>
              </select>
            </label>

            <label for="f-msg">
              &gt; {{ content.contact.form.messageLabel }}
              <textarea
                id="f-msg"
                v-model="messageNotes"
                :placeholder="content.contact.form.messagePlaceholder"
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
              {{ content.contact.form.submitLabel }}
            </a>
          </form>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="map">
        <iframe
          :title="content.contact.mapTitle"
          :src="COMPANY_LOCATION.embedMapUrl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>
