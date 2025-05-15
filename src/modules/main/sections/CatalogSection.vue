<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import BaseCard from '@/core/components/BaseCard.vue'
import CatalogButton from '@/modules/main/components/CatalogButton.vue'
import { Routes } from '@/core/router/routes.js'
import { Categories } from '@/modules/main/const/Categories.js'

const baseUrl = window.location.origin + '/kron/'
</script>

<template>
  <section class="catalog" id="catalog">
    <BaseTitle class-name="">Катлог</BaseTitle>
    <div class="container">
      <BaseCard
        class-cover="catalog-cover"
        :route-params="{ name: Routes.Catalog, params: { category: Categories.Boxes } }"
        :src="`${baseUrl}/${Categories.Boxes}.png`"
      >
        <CatalogButton button-class="catalog-button">КронБоксы</CatalogButton>
      </BaseCard>
      <BaseCard
        class-cover="catalog-cover"
        :route-params="{ name: Routes.Catalog, params: { category: Categories.Posters } }"
        :src="`${baseUrl}/${Categories.Posters}.png`"
      >
        <CatalogButton button-class="catalog-button">Постеры</CatalogButton>
      </BaseCard>
      <BaseCard
        class-cover="catalog-cover"
        :route-params="{ name: Routes.Catalog, params: { category: Categories.Mugs } }"
        :src="`${baseUrl}/${Categories.Mugs}.png`"
      >
        <CatalogButton button-class="catalog-button">Кружки</CatalogButton>
      </BaseCard>
      <BaseCard
        class-cover="catalog-cover"
        :route-params="{ name: Routes.Catalog, params: { category: Categories.Merch } }"
        :src="`${baseUrl}/${Categories.Merch}.png`"
      >
        <CatalogButton button-class="catalog-button"> Мерч</CatalogButton>
      </BaseCard>
      <BaseCard
        class-cover="catalog-cover"
        :route-params="{ name: Routes.Catalog, params: { category: Categories.Chancellery } }"
        :src="`${baseUrl}/${Categories.Chancellery}.png`"
      >
        <CatalogButton button-class="catalog-button">Канцелярия</CatalogButton>
      </BaseCard>
      <BaseCard
        class-cover="catalog-cover"
        :route-params="{ name: Routes.Catalog, params: { category: Categories.Accessories } }"
        :src="`${baseUrl}/${Categories.Accessories}.png`"
      >
        <CatalogButton button-class="catalog-button">Аксессуары</CatalogButton>
      </BaseCard>
    </div>
  </section>
</template>

<style scoped lang="scss">
.catalog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 0 50px 0;

  .container {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 11%;
    row-gap: 20px;
    justify-content: center;
  }

  :deep(.catalog-cover) {
    width: 190px;
    max-width: 190px;
    height: 225px;
  }

  :deep(.catalog-button) {
    width: 220px;
  }
}
</style>
