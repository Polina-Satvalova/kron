<script setup>
import BaseHeader from '@/core/components/BaseHeader.vue'
import BaseFooter from '@/core/components/BaseFooter.vue'
</script>

<template>
  <BaseHeader />
  <main class="main">
    <RouterView />
  </main>
  <BaseFooter />
</template>

<style lang="scss" scoped>
:global(#app) {
  display: flex;
  flex-direction: column;
  position: relative;
}

.main {
  flex: 1;
}
</style>
