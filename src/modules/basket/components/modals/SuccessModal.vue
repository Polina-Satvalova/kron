<script setup>
import BaseModal from '@/core/components/modals/BaseModal.vue'
import { useBasketStore } from '@/core/stores/basketStore.js'
import IconWave from '@/core/components/icons/IconWave.vue'

const props = defineProps(['isOpenProps'])
const emits = defineEmits(['onClose'])
const store = useBasketStore()

function onClose() {
  emits('onClose')
}
</script>

<template>
  <BaseModal modal-class="success-modal" @on-close="onClose" :is-open-props="isOpenProps">
    Спасибо за заказ
    <IconWave class-name="wave wave-1" />
    <IconWave class-name="wave wave-2" />
  </BaseModal>
</template>

<style lang="scss">
.success-modal {
  position: relative;
  padding: 60px 100px !important;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 700;
  font-size: 50px;
  max-width: 470px;
  height: 340px;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  color: var(--blue);

  .wave {
    position: absolute;
  }

  .wave-1 {
    top: -150px;
    left: -190px;
    transform: rotate(-31deg);
  }

  .wave-2 {
    bottom: -190px;
    right: -100px;
    transform: rotate(-28deg);
  }
}
</style>
