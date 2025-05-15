<script setup>
import { Size } from '@/core/constants/size.js'
import { Shape } from '@/core/constants/shape.js'
import { useRouter } from 'vue-router'
import { Routes } from '@/core/router/routes.js'

const router = useRouter()
const props = defineProps({
  routeName: { type: String },
  routeParams: { type: Object },
  size: {
    type: String,
    default: Size.Medium,
  },
  shape: {
    type: String,
    default: Shape.Circular,
  },
  classNames: {
    type: [String, Array],
  },
})
const emits = defineEmits(['click'])

function onClick() {
  if (props.routeParams?.hash) {
    router.push({ name: Routes.Home, hash: props.routeParams.hash })
    const el = document.querySelector(props.routeParams.hash)
    el.scrollIntoView({ behavior: 'smooth' })
  }
  if (props.routeName || props.routeParams) {
    router.push({ name: props.routeName, ...props.routeParams })
  }
  emits('click')
}
</script>

<template>
  <button @click="onClick" :class="['button', size, shape, classNames]">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black);
  background-color: var(--turquoise);
  color: var(--black);
  font-family:
    Montserrat Alternates,
    sans-serif;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  line-height: normal; /* сброс line-height */
  box-sizing: border-box;
  cursor: pointer;
}

@include isHover {
  .button:hover {
    background-color: var(--red);
    color: var(--white);
  }
}

.button:active {
  background-color: var(--dark-red);
  color: var(--white);
}

.large {
  font-size: var(--display-size-large);
}

.medium {
  font-size: var(--body-size-large);
}

.small {
  font-size: var(--body-size-medium);
}

.circular {
  border-radius: 25px;
}

.rounded {
  border-radius: 6px;
}
</style>
