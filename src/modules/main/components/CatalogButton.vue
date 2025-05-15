<script setup>
import BaseButton from '@/core/components/BaseButton.vue'

defineProps({
  buttonClass: String,
})
</script>

<template>
  <BaseButton :class-names="buttonClass">
    <slot></slot>
  </BaseButton>
</template>

<style scoped lang="scss">
.button {
  color: var(--white);
  border-radius: 6px;
  background-color: var(--blue);
  transition: all 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: var(--turquoise);
    color: var(--blue);
  }

  &:active {
    color: var(--white);
    background-color: var(--dark-blue);
  }
}
</style>
