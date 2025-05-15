<script setup>
import { useBasketStore } from '@/core/stores/basketStore.js'
import { titleTranslate } from '@/modules/catalogs/utils/titleTranslate.js'
import BaseTitle from '@/core/components/BaseTitle.vue'
import BaseButton from '@/core/components/BaseButton.vue'
import IconMinus from '@/core/components/icons/IconMinus.vue'
import IconPlus from '@/core/components/icons/IconPlus.vue'
import SuccessModal from '@/modules/basket/components/modals/SuccessModal.vue'
import { ref } from 'vue'

const store = useBasketStore()

const isOpen = ref(false)

function openSuccessModal() {
  isOpen.value = true
}

function closeSuccessModal() {
  isOpen.value = false
  store.clearBasket()
}
</script>

<template>
  <div class="page">
    <BaseTitle>Корзина</BaseTitle>
    <div class="content">
      <div class="basket" v-for="product of store.totalCost" :key="product.id">
        <div class="line"></div>
        <div class="basket-item">
          <div class="title">
            <img :src="product.img" alt="cover" />
            <p>{{ product.title }}</p>
          </div>
          <div class="const-information">
            <p class="order_cost">{{ product.sum }} ₽</p>
            <div class="counter">
              <button @click="store.removeFromBasket(product, product.category)">
                <IconMinus />
              </button>
              <p>{{ product.count }}</p>
              <button @click="store.addToBasket(product, product.category)">
                <IconPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="order">
        <BaseButton @click="openSuccessModal">Оформить заказ</BaseButton>
        <p class="sum">
          Итог: <span class="order_cost">{{ store.sum }} ₽</span>
        </p>
      </div>
    </div>
    <SuccessModal :is-open-props="isOpen" @on-close="closeSuccessModal" />
  </div>
</template>

<style scoped lang="scss">
.page {
  padding: 0 var(--layout-padding);
  margin-bottom: 32px;
}

.content {
  padding: 26px 13%;

  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;

    button {
      @include headline-medium;
      padding: 15px 30px;
      font-family: 'Playfair Display', sans-serif;
      text-align: center;
      border-radius: 38px;
      text-transform: uppercase;
    }

    .sum {
      display: flex;
      gap: 10px;
      align-items: center;
      font-family:
        Montserrat Alternates,
        sans-serif;
      font-size: 3rem !important;

      .order_cost {
        font-size: 3rem !important;
      }
    }
  }
}

.line {
  background-color: var(--red);
  border-radius: 25px;
  height: 2px;
  margin-bottom: 17px;
}

.order_cost {
  @include sale;
  color: var(--red);
}

.basket {
  &-item {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 17px;

    .title {
      @include headline-medium;
      font-size: var(--display-size-small);
      display: flex;
      align-items: center;
      gap: 20px;

      img {
        border-radius: 15px;
        border: 1px solid var(--black);
        width: 120px;
        aspect-ratio: 1;
      }
    }

    .const-information {
      display: flex;
      align-items: center;
      gap: 70px;

      .counter {
        @include headline-medium;
        font-size: 3.2rem;
        display: flex;
        align-items: center;
        gap: 20px;
      }

      button {
        height: 31px;
        width: 31px;
        border-radius: 100%;
        border: none;
        background-color: #d9d9d9;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>
