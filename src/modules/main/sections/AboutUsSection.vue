<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import aboutUs from '@Assets/images/about_us.png'
import IconSpiralWave from '@/core/components/icons/IconSpiralWave.vue'
import IconWave from '@/core/components/icons/IconWave.vue'
</script>

<template>
  <section class="aboutUs" id="aboutUs">
    <div class="content">
      <BaseTitle>О нас</BaseTitle>
      <h2>КРОН — подарки из Кронштадта без лишних хлопот</h2>
      <div class="description">
        <p>
          Мы создаём полезные и оригинальные сувениры, которые дарят тепло и воспоминания о
          Кронштадте. Наша миссия — чтобы вы увозили с собой не просто вещи, а кусочек атмосферы
          этого удивительного города!
        </p>
      </div>
      <div class="description">
        <p>
          Особой гордостью стали Кронбоксы — авторские наборы, наполненные духом приключений. Они
          добавят ярких красок вашему путешествию и перенесут в волшебный мир острова Фортов
        </p>
      </div>
    </div>
    <img :src="aboutUs" alt="about us cover" />
    <IconWave class-name="wave-1" />
    <IconSpiralWave class-name="wave-2" />
  </section>
</template>

<style scoped lang="scss">
.aboutUs {
  position: relative;
  display: flex;
  gap: 3%;
  padding: 60px 0;
  margin-bottom: 90px;
  z-index: 2;

  h2 {
    @include headline-medium;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 45px;
  }

  .description {
    display: flex;
    justify-content: end;

    &:last-child {
      margin-top: 40px;
      justify-content: start;
    }

    p {
      @include body-medium;
      text-align: end;
      width: 70%;
      text-wrap: balance;
    }
  }

  .wave-1 {
    position: absolute;
    left: -12%;
    bottom: -160px;
    transform: rotate(-35deg);
    z-index: -1;
  }

  .wave-2 {
    position: absolute;
    right: calc(var(--layout-padding) * -1);
    bottom: -80px;
    z-index: 1;
  }
}
</style>
