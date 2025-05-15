<script setup>
import BaseCard from '@/core/components/BaseCard.vue'
import CatalogButton from '@/modules/main/components/CatalogButton.vue'
import { onMounted, ref, useTemplateRef } from 'vue'
import SliderButton from '@/modules/main/components/SliderButton.vue'
import BaseTitle from '@/core/components/BaseTitle.vue'
import IconWave from '@/core/components/icons/IconWave.vue'
import IconSpiralWave from '@/core/components/icons/IconSpiralWave.vue'
import { useBasketStore } from '@/core/stores/basketStore.js'
import db from '/db.json'
import { Categories } from '@/modules/main/const/Categories.js'

const baseUrl = window.location.origin + '/kron/'

const data = ref()
const error = ref()

const swiperEl = useTemplateRef('swiper')

function onPrev() {
  swiperEl.value.swiper.slidePrev()
}

function onNext() {
  swiperEl.value.swiper.slideNext()
}

onMounted(() => {
  data.value = db.bestsellers
})

const store = useBasketStore()
</script>

<template>
  <section class="bestseller" id="bestseller">
    <BaseTitle>хит продаж</BaseTitle>
    <div class="slider">
      <SliderButton @click="onPrev" />
      <swiper-container
        ref="swiper"
        slides-per-view="3"
        speed="500"
        space-between="15%"
        :simulate-touch="true"
      >
        <swiper-slide v-for="bestseller of data">
          <BaseCard
            class-card="card"
            :src="`${baseUrl}/bestsellers/image-${bestseller.id}.png`"
            @onClick="store.addToBasket(bestseller, Categories.Boxes)"
          >
            <CatalogButton button-class="title">{{ bestseller.title }}</CatalogButton>

            <span class="order_cost">{{ bestseller.cost }}&nbsp;₽</span>
          </BaseCard>
        </swiper-slide>
      </swiper-container>
      <SliderButton :next="true" @click="onNext" />
    </div>
    <IconWave class-name="wave-1" />
    <IconSpiralWave class-name="wave-2" />
  </section>
</template>

<style scoped lang="scss">
.bestseller {
  display: flex;
  align-items: center;
  gap: 10vw;
  flex-direction: column;
  position: relative;
  margin-bottom: 195px;

  .wave-1 {
    position: absolute;
    right: -14%;
    bottom: -290px;
    transform: rotate(-35deg);
    z-index: -1;
  }

  .wave-2 {
    position: absolute;
    left: calc(var(--layout-padding) * -1);
    bottom: -240px;
    z-index: -1;
  }
}

.slider {
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: 5%;
}

swiper-container {
  flex: 1; // или фиксированная ширина
  max-width: 100%;
  overflow: hidden;

  // важно! чтобы swiper не растягивался бесконечно
  swiper-container {
    width: 100%;
  }
}

:deep(.title) {
  cursor: default;
  background-color: var(--dark-blue) !important;
  color: var(--white) !important;
}

:deep(.card) {
  width: 220px;
}

.order_cost {
  background-color: #da533b;
  color: var(--white);

  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
}
</style>
