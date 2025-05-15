<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import telegram from '@Assets/icons/telegram.svg'
import instagram from '@Assets/icons/instagram.svg'
import vk from '@Assets/icons/vk.svg'
import IconWave from '@/core/components/icons/IconWave.vue'
</script>

<template>
  <section class="contact" id="contacts">
    <BaseTitle>контакты</BaseTitle>
    <div class="content">
      <div class="cards">
        <div class="card">
          <span class="title">Адрес</span>
          <div class="coordinates">59.999422, 29.769198</div>
          <p>проспект Ленина, 6, Кронштадт, Санкт-Петербург, 197760</p>
        </div>
        <div class="card clients">
          <span class="title">Для оптовых клиентов</span>
          <span class="emails">OptKron@gmail.com</span>
          <span>А по вопросам сотрудничества</span>
          <span class="emails">SoKron@gmail.com</span>
        </div>
        <div class="card">
          <span class="title">Для вопросов</span>
          <span class="contacts">+7(906) 226-44-65</span>
          <span class="contacts">KRON@gmail.com</span>
        </div>
        <div class="card">
          <span class="title">Мы в соцсетях</span>
          <p>Рассказываем о КРОН и проводим секретные акции</p>
          <div class="icons">
            <img :src="vk" alt="vk" />
            <img :src="instagram" alt="instagram" />
            <img :src="telegram" alt="telegram" />
          </div>
        </div>
      </div>
      <div class="map" style="position: relative; overflow: hidden">
        <a
          href="https://yandex.ru/maps/21776/kronstadt/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Кронштадт</a
        ><a
          href="https://yandex.ru/maps/21776/kronstadt/house/prospekt_lenina_6/ZkAYcQFpSEwPQFtjfXV4eHhhZg==/?ll=29.770443%2C59.999343&tilt=0.8726646259971648&utm_medium=mapframe&utm_source=maps&z=18.24"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Проспект Ленина, 6 — Яндекс Карты</a
        >
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=29.770443%2C59.999343&mode=whatshere&tilt=0.8726646259971648&whatshere%5Bpoint%5D=29.769120%2C59.999399&whatshere%5Bzoom%5D=17&z=18.24"
          allowfullscreen="true"
          style="position: relative; width: 100%; height: 100%"
        ></iframe>
      </div>
    </div>
    <IconWave class-name="wave wave-1" />
    <IconWave class-name="wave wave-2" />
  </section>
</template>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin-bottom: 160px;
  position: relative;

  .content {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 55px;
  }

  .map {
    border-radius: 53px;
    border: 1px solid var(--black);
    width: 100%;
    height: 100%;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 54px;
    row-gap: 36px;
  }

  .card {
    @include body-small;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    background-color: #fffcf5;
    border-radius: 53px;
    border: 1px solid var(--black);
    padding: 38px 38px 28px;

    .title {
      @include body-medium;
      color: var(--dark-blue);
      border-radius: 6px;
      border: 1px solid var(--dark-blue);
      margin-bottom: 16px;
      padding: 5px 10px;
      background-color: var(--white);
      text-align: center;
    }
  }

  .coordinates {
    background-color: var(--red);
    color: var(--white);
    border-radius: 6px;
    padding: 3px 6px;
  }

  .clients {
    text-align: center;
  }

  .emails {
    color: var(--black);
    background-color: var(--turquoise);
    padding: 3px 6px;
    border-radius: 6px;
    box-sizing: border-box;
    width: 100%;
  }

  .contacts {
    background-color: var(--dark-blue);
    color: var(--white);
    border-radius: 6px;
    padding: 3px 6px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    margin-top: 8px;
  }
  .wave {
    position: absolute;
    z-index: -1;
  }

  .wave-1 {
    left: calc(calc(var(--layout-padding) * -1) + 25px);
    bottom: -230px;
    transform: rotate(-28deg);
  }
  .wave-2 {
    right: calc(var(--layout-padding) * -1);
    bottom: -250px;
  }
}
</style>
