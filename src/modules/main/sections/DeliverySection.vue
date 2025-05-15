<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import deliveryOne from '@Assets/images/delivery-1.png'
import deliveryTwo from '@Assets/images/delivery-2.png'
import deliveryThree from '@Assets/images/delivery-3.png'
import IconWave from '@/core/components/icons/IconWave.vue'
import IconSpiralWave from '@/core/components/icons/IconSpiralWave.vue'
</script>

<template>
  <section class="delivery" id="delivery">
    <BaseTitle>доставка</BaseTitle>
    <div class="content">
      <div class="card first">
        <img :src="deliveryOne" alt="delivery" />
        <p>
          Заполните детали заказа, и мы подготовим ваш набор памятных подарков из нашего города.
        </p>
      </div>
      <div class="card second">
        <img :src="deliveryTwo" alt="delivery" />
        <p>Проверяем комплектацию, бережно упаковываем сувениры и готовим к отправке.</p>
      </div>
      <div class="card">
        <img :src="deliveryThree" alt="delivery" />
        <p>
          Ваш заказ в пути. Ожидайте трек-номер и скорее встречайте посылку с атмосферой нашего
          города.
        </p>
      </div>
    </div>
    <IconSpiralWave class-name="wave-1" />
    <IconSpiralWave class-name="wave-2" />
  </section>
</template>

<style scoped lang="scss">
.delivery {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  margin-bottom: 250px;
  position: relative;

  .content {
    @include body-medium;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10%;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    text-align: center;
    max-width: 285px;
  }

  .first:after {
    content: '';
    position: absolute;
    right: -60%;
    top: 60%;
    width: 130px;
    height: 50px;
    background: no-repeat
      url('data:image/svg+xml,<svg width="131" height="31" viewBox="0 0 131 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.65576 1.94769C3.66253 1.03324 2.11605 1.0971 1.2016 2.09034C0.287146 3.08357 0.351011 4.63005 1.34424 5.5445L4.65576 1.94769ZM130.172 6.01695C130.331 4.6762 129.372 3.46083 128.031 3.30235L106.183 0.719706C104.842 0.561222 103.627 1.51964 103.468 2.86039C103.31 4.20114 104.268 5.41651 105.609 5.57499L125.03 7.87067L122.734 27.2918C122.576 28.6326 123.534 29.8479 124.875 30.0064C126.216 30.1649 127.431 29.2065 127.589 27.8657L130.172 6.01695ZM3 3.74609L1.34424 5.5445C6.51361 10.3038 15.9698 17.1675 27.7369 22.5249C39.5027 27.8816 53.7559 31.8125 68.4508 30.4674L68.228 28.033L68.0052 25.5986C54.4316 26.8411 41.0529 23.2154 29.7628 18.0752C18.4741 12.9357 9.45052 6.36213 4.65576 1.94769L3 3.74609ZM68.228 28.033L68.4508 30.4674C97.2794 27.8285 120.904 14.2378 129.258 7.6495L127.744 5.72999L126.231 3.81048C118.465 9.93458 95.7135 23.0624 68.0052 25.5986L68.228 28.033Z" fill="%23DA533B"/></svg>');
  }

  .second:after {
    content: '';
    position: absolute;
    right: -60%;
    top: -10%;
    width: 130px;
    height: 50px;
    background: no-repeat
      url('data:image/svg+xml,<svg width="131" height="31" viewBox="0 0 131 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.65576 29.4044C3.66253 30.3188 2.11605 30.2549 1.2016 29.2617C0.287146 28.2685 0.351011 26.722 1.34424 25.8076L4.65576 29.4044ZM130.172 25.3351C130.331 26.6759 129.372 27.8912 128.031 28.0497L106.183 30.6324C104.842 30.7908 103.627 29.8324 103.468 28.4917C103.31 27.1509 104.268 25.9356 105.609 25.7771L125.03 23.4814L122.734 4.06025C122.576 2.7195 123.534 1.50413 124.875 1.34564C126.216 1.18716 127.431 2.14557 127.589 3.48633L130.172 25.3351ZM3 27.606L1.34424 25.8076C6.51361 21.0482 15.9698 14.1846 27.7369 8.82719C39.5027 3.47046 53.7559 -0.460417 68.4508 0.884686L68.228 3.31905L68.0051 5.75342C54.4316 4.51096 41.0529 8.13665 29.7628 13.2768C18.4741 18.4163 9.45052 24.9899 4.65576 29.4044L3 27.606ZM68.228 3.31905L68.4508 0.884686C97.2794 3.52352 120.904 17.1143 129.258 23.7026L127.744 25.6221L126.231 27.5416C118.465 21.4175 95.7135 8.28971 68.0051 5.75342L68.228 3.31905Z" fill="%23DA533B"/></svg>');
  }

  .wave-1 {
    position: absolute;
    left: calc(var(--layout-padding) * -1);
    bottom: -240px;
    z-index: -1;
  }

  .wave-2 {
    position: absolute;
    right: -90px;
    bottom: -210px;
    z-index: -1;
    transform: rotate(-27deg);
  }
}
</style>
