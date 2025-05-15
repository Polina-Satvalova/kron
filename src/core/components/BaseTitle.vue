<script setup>
defineProps({
  className: String,
})
</script>

<template>
  <h1 :class="className">
    <slot />
  </h1>
</template>

<style scoped lang="scss">
h1 {
  @include headline-large;
  color: var(--white);
  background-color: var(--blue);
  text-transform: uppercase;
  width: fit-content;
  padding: 20px 35px;
  border-radius: 20px;
  white-space: nowrap;
}
</style>
