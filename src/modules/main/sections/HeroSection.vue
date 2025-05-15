<script setup>
import logo from '@Assets/icons/logo.svg'
import BaseButton from '@/core/components/BaseButton.vue'
import { Routes } from '@/core/router/routes.js'
import IconWave from '@/core/components/icons/IconWave.vue'
import IconSpiralWave from '@/core/components/icons/IconSpiralWave.vue'
</script>

<template>
  <section class="section">
    <img :src="logo" class="logo" alt="logo" />
    <h2 class="headline">Сувенирный магазин</h2>
    <BaseButton route-name="home" :route-params="{ hash: '#catalog' }" class-names="link">
      Каталог
    </BaseButton>
    <IconWave class-name="wave-1" />
    <IconSpiralWave class-name="wave-2" />
  </section>
</template>

<style scoped lang="scss">
@mixin font-size {
  font-size: var(--display-size-medium);
  font-weight: 600;
  line-height: 100%;
}

.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8% 18% 13% 18%;
  border-radius: 55px;

  background: no-repeat center url('../../../assets/images/hero_background.png');
  background-size: cover;
  margin-bottom: 40px;

  .logo {
    width: 100%;
    align-self: center;
    position: relative;

    box-shadow: 10px 10px 35px rgba(255, 255, 255, 0.2) inset;

    backdrop-filter: blur(5px);
    border-radius: 60px;
    padding: 15px;

    &:after {
      position: absolute;
      inset: 0;
      background: red;
    }
  }

  .headline {
    @include font-size;
    font-family:
      Montserrat Alternates,
      sans-serif;
    color: var(--white);
    margin-top: 17px;
    margin-bottom: 4.3rem;
  }

  .link {
    @include font-size;
    font-family:
      Playfair Display,
      sans-serif;
    padding: 15px;
    width: 53%;
    border-radius: 40px;
  }

  .wave-1 {
    position: absolute;
    left: calc(var(--layout-padding) * -1);
    bottom: -160px;
    z-index: 1;
  }

  .wave-2 {
    position: absolute;
    right: -90px;
    bottom: -60px;
    z-index: 1;
    transform: rotate(-27deg);
  }
}
</style>
