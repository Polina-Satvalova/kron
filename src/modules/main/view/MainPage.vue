<script setup>
import HeroSection from '@/modules/main/sections/HeroSection.vue'
import AboutUsSection from '@/modules/main/sections/AboutUsSection.vue'
import CatalogSection from '@/modules/main/sections/CatalogSection.vue'
import BestsellerSection from '@/modules/main/sections/BestsellerSection.vue'
import AboutSection from '@/modules/main/sections/AboutSection.vue'
import DeliverySection from '@/modules/main/sections/DeliverySection.vue'
import ContactSection from '@/modules/main/sections/ContactSection.vue'
import ReviewSection from '@/modules/main/sections/ReviewSection.vue'
</script>

<template>
  <div class="main">
    <HeroSection />
    <AboutUsSection />
    <BestsellerSection />
    <CatalogSection />
    <AboutSection />
    <DeliverySection />
    <ContactSection />
    <ReviewSection />
  </div>
</template>

<style scoped lang="scss">
.main {
  padding: 0 var(--layout-padding);
}
</style>
