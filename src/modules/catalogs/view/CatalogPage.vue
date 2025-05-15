<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import { titleTranslate } from '../utils/titleTranslate.js'
import BaseCard from '@/core/components/BaseCard.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBasketStore } from '@/core/stores/basketStore.js'
import db from '/db.json'

const data = ref()
const route = useRoute()

onMounted(() => {
  data.value = db[route.params.category]
})

const store = useBasketStore()
</script>

<template>
  <div class="page">
    <BaseTitle class-name="title">
      {{ titleTranslate($route.params.category) }}
    </BaseTitle>
    <div class="catalog">
      <BaseCard
        v-for="product of data"
        :key="product.id"
        :src="product.img"
        class-card="card"
        class-cover="cover"
        @on-click="store.addToBasket(product)"
      >
        <div>
          <span class="title">{{ product.title }}</span>
          <div class="order_cost">
            <span>{{ product.cost }} ₽</span>
            <span v-if="product.oldCost" class="sale">{{ product.oldCost }}&nbsp;₽</span>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding: 0 var(--layout-padding);
  margin-bottom: 32px;
}

.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  margin: 0 11%;
}

:deep(.card) {
  width: 165px;
  min-height: 260px;
}

.card {
  @include body-medium;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 25px;

  .title {
    white-space: nowrap;
  }

  .order_cost {
    @include sale;
    display: flex;
    color: var(--red);
  }

  .sale {
    color: #b2b2b2;
    text-decoration: line-through;
    font-size: 1.3rem;
  }

  :deep(.cover) {
    min-height: 210px;
    max-height: 210px;
  }
}

:deep(.title) {
  margin: 16px 0 50px 0;
}
</style>
