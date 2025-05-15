<script setup>
import logo from '@Assets/icons/logo.svg'
</script>

<template>
  <footer>
    <img class="logo" :src="logo" alt="logo" />
    <div></div>
    <div class="sections">
      <a class="link" href="/#aboutUs">О нас</a>
      <a class="link" href="/#reviews">Отзывы</a>
      <a class="link" href="/#catalog">Каталог</a>
      <a class="link" href="/#delivery">Доставка</a>
      <a class="link" href="/#contacts">Контакты</a>
      <a class="link" href="/#bestsellers">Хит продаж</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: grid;
  grid-template-columns: 33% 1fr 50%;
  grid-auto-rows: minmax(120px, 1fr);
  gap: 10px;
  justify-content: space-between;
  background-color: var(--beige);
  padding: var(--layout-padding);

  .logo {
    aspect-ratio: 3.2/1;
    height: 100%;
  }

  .sections {
    border: 1px solid var(--blue);
    border-radius: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px;
    padding: 25px 27px;
    background-color: var(--white);
  }

  .link {
    @include link;
    text-align: center;
  }
}
</style>
