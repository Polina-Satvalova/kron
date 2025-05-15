<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import IconWave from '@/core/components/icons/IconWave.vue'
import IconSpiralWave from '@/core/components/icons/IconSpiralWave.vue'
import SliderButton from '@/modules/main/components/SliderButton.vue'
import { useTemplateRef } from 'vue'
import { reviews } from '@/modules/main/data/reviews.js'
import IconStar from '@/core/components/icons/IconStar.vue'

const baseUrl = window.location.origin

const swiperEl = useTemplateRef('swiper')

function onPrev() {
  swiperEl.value.swiper.slidePrev()
}

function onNext() {
  swiperEl.value.swiper.slideNext()
}
</script>

<template>
  <section class="review" id="reviews">
    <BaseTitle>отзывы</BaseTitle>
    <div class="slider">
      <SliderButton @click="onPrev" />
      <swiper-container
        ref="swiper"
        slides-per-view="2"
        speed="500"
        space-between="15%"
        :simulate-touch="true"
      >
        <swiper-slide v-for="review of reviews" :key="review.id">
          <div class="card">
            <div class="title">
              <img :src="`${baseUrl}/${review.avatar}`" alt="avatar" />
              <div class="name">
                <span>{{ review.name }}</span>
                <div class="stars">
                  <IconStar v-for="i in review.starsCount" :key="i" />
                </div>
              </div>
            </div>
            <p class="description">{{ review.description }}</p>
          </div>
        </swiper-slide>
      </swiper-container>
      <SliderButton :next="true" @click="onNext" />
    </div>
    <IconSpiralWave class-name="wave-1" />
    <IconSpiralWave class-name="wave-2" />
  </section>
</template>

<style lang="scss">
.review {
  display: flex;
  align-items: center;
  gap: 10vw;
  flex-direction: column;
  position: relative;
  margin-bottom: 195px;

  .wave-1 {
    position: absolute;
    right: -145px;
    bottom: -200px;
    z-index: -1;
  }

  .wave-2 {
    position: absolute;
    left: -135px;
    bottom: -200px;
    z-index: -1;
  }

  .slider {
    display: flex;
    align-items: center;
    max-width: 80%;
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

  swiper-slide {
    height: auto;
  }

  .card {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 53px;
    border: 1px solid var(--black);
    background-color: #fffcf5;
    gap: 20px;
    padding: 50px 20px 70px 20px;
    height: 100%;
    box-sizing: border-box;

    .title {
      @include product;
      display: flex;
      align-items: center;
      gap: 12px;

      .name {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .stars {
          display: flex;
          gap: 5px;
        }
      }
    }

    .description {
      @include body-small;
      text-align: center;
    }
  }
}
</style>
