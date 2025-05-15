<script setup>
import logo from '@Assets/icons/logo.svg'
import BaseButton from '@/core/components/BaseButton.vue'
import { Size } from '@/core/constants/size.js'
import IconPerson from '@/core/components/icons/IconPerson.vue'
import BaseIconButton from '@/core/components/BaseIconButton.vue'
import IconBasket from '@/core/components/icons/IconBasket.vue'
import IconSearch from '@/core/components/icons/IconSearch.vue'
import { ref, watchEffect } from 'vue'
import LoginModal from '@/core/components/modals/LoginModal.vue'
import { Routes } from '@/core/router/routes.js'
import { useRouter } from 'vue-router'

const isOpen = ref(false)

function openLoginModal() {
  isOpen.value = true
}

function closeLoginModal() {
  isOpen.value = false
  router.push({ name: Routes.Home })
}

const router = useRouter()
watchEffect(() => {
  if (router.currentRoute.value.hash === '#login') {
    openLoginModal()
  }
})
</script>

<template>
  <header>
    <nav class="navigation">
      <div class="sections">
        <RouterLink :to="{ name: 'home' }">
          <img :src="logo" alt="logo" />
        </RouterLink>
        <div class="search">
          <IconSearch />
          <input />
        </div>
        <BaseButton
          route-name="home"
          :route-params="{ hash: '#aboutUs' }"
          class-names="navigation-button"
          :size="Size.Small"
        >
          О нас
        </BaseButton>
        <BaseButton
          class-names="navigation-button"
          :size="Size.Small"
          route-name="home"
          :route-params="{ hash: '#catalog' }"
        >
          <span>Каталог</span>
        </BaseButton>
        <BaseButton
          class-names="navigation-button"
          :size="Size.Small"
          :route-params="{ hash: '#reviews' }"
          >Отзывы
        </BaseButton>
        <BaseButton
          class-names="navigation-button"
          :size="Size.Small"
          :route-params="{ hash: '#contacts' }"
          >Конткаты
        </BaseButton>
      </div>
      <div class="actions">
        <BaseIconButton button-class="navigation-button" @click="openLoginModal">
          <IconPerson class="icon" />
        </BaseIconButton>
        <BaseIconButton button-class="navigation-button" :route-name="Routes.Basket">
          <IconBasket class="icon" />
        </BaseIconButton>
      </div>
    </nav>
  </header>
  <LoginModal :is-open-props="isOpen" @on-close="closeLoginModal" />
</template>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0;
  background-color: var(--white);
  z-index: 100;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 30px var(--layout-padding) 17px;

  &-button {
    height: 38px;
    font-family:
      Playfair Display,
      sans-serif;
    font-size: var(--body-size-medium);
    font-weight: 600;
    padding: 9px 18px;
    white-space: nowrap;
  }

  .search {
    max-height: 38px;
    width: 100%;
    max-width: 300px;
    padding: 6px 6px 6px 11px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 25px;
    border: 1px solid var(--black);
    background-color: var(--beige);

    input {
      border: 1px solid var(--black);
      border-radius: 23px;
      height: 100%;
    }
  }

  .sections {
    display: flex;
    align-content: center;
    gap: 25px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
