<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { usePageSeo } from '~/composables/usePageSeo'

const { content } = useContent()
usePageSeo(content.value)
</script>

<template>
  <main id="atas">
    <HeroSection />
    <ServicesSection />
    <WhySection />
    <ClientsSection />
    <PortfolioSection />
    <ProcessSection />
    <CtaBanner />
    <ContactSection />
  </main>
</template>
