<script setup>
import IconCross from '@/core/components/icons/IconCross.vue'

defineProps({
  isOpenProps: Boolean,
  modalClass: String,
})

const emits = defineEmits(['onClose'])

function closeModal() {
  emits('onClose')
}
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isOpenProps" :class="[`modal`]" @click="closeModal">
        <div :class="['content', modalClass]" @click.stop>
          <slot></slot>
          <div class="cross" @click="closeModal">
            <IconCross />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  z-index: 10;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    border-radius: 25px;
    padding: 50px;
  }

  .cross {
    position: absolute;
    right: 25px;
    top: 20px;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
