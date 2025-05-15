<script setup>
defineProps({
  src: String,
  classCard: String || Array,
  classCover: String || Array,
  routeParams: Object,
})

const emits = defineEmits(['onClick'])

function onClick() {
  emits('onClick')
}
</script>

<template>
  <RouterLink v-if="routeParams" :to="routeParams" :class="['card', classCard]">
    <div :class="['cover', classCover]">
      <img class="image" :src="src" alt="cover" />
    </div>
    <slot />
  </RouterLink>
  <div v-else :class="['card', classCard]" @click="onClick">
    <div :class="['cover', classCover]">
      <img class="image" :src="src" alt="cover" />
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
}

.cover {
  border: 1px solid var(--black);
  border-radius: 39px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #fffcf5;

  .image {
    width: 100%;
  }
}
</style>
