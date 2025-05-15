<script setup>
import BaseButton from '@/core/components/BaseButton.vue'

defineProps({
  buttonClass: String,
  routeName: String,
  routerParams: Object,
  iconClass: String,
})

const emits = defineEmits(['click'])

function onClick() {
  emits('click')
}
</script>

<template>
  <BaseButton
    :class-names="[buttonClass, 'icon-button']"
    @click="onClick"
    :route-params="routerParams"
    :route-name="routeName"
  >
    <slot :class="['icon', iconClass]"></slot>
  </BaseButton>
</template>

<style scoped lang="scss">
.icon-button {
  padding: 0 !important;
  display: flex;
  align-items: center;
  aspect-ratio: 1;
  background-color: var(--red);
  transition: all 0.3s ease-in-out;
  stroke: var(--white);

  &:hover {
    stroke: var(--black);
    background-color: var(--turquoise);
  }

  &:active {
    stroke: var(--black);
    background-color: var(--dark-turquoise);
  }
}
</style>
