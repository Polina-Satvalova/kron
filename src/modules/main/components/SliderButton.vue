<script setup>
import BaseIconButton from '@/core/components/BaseIconButton.vue'

defineProps({
  next: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['click'])

function onClick() {
  emits('click')
}
</script>

<template>
  <BaseIconButton @click="onClick" :button-class="$style.sliderButton">
    <svg
      :class="next && $style.isNext"
      width="19"
      height="38"
      viewBox="0 0 19 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2031 2.07034L3.23715 16.0363C1.58779 17.6857 1.58779 20.3846 3.23715 22.034L17.2031 36"
        stroke="black"
        stroke-width="3.13439"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </BaseIconButton>
</template>

<style lang="scss" module>
.sliderButton {
  width: 53px;
  height: 53px;
  background-color: var(--turquoise) !important;
}

.isNext {
  transform: rotate(180deg);
}
</style>
