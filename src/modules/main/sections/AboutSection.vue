<script setup>
import BaseTitle from '@/core/components/BaseTitle.vue'
import about from '@Assets/images/about.png'
import cathedral from '@Assets/images/cathedral.png'
import lighthouse from '@Assets/images/lighthouse.png'
import IconWave from '@/core/components/icons/IconWave.vue'
</script>

<template>
  <section class="about" id="about">
    <div class="description">
      <BaseTitle>О КРОНШТАДТЕ</BaseTitle>
      <p>
        Кронштадт — морская крепость Петра I на острове Котлин. Здесь — величественный Морской
        собор, старинные форты и дух русского флота. Сохраняет историю великих открытий и морских
        традиций. Близко к Петербургу, но со своим характером!
      </p>
      <img :src="about" alt="about image" />
    </div>
    <div class="gallery">
      <img id="cathedral" :src="cathedral" alt="cathedral" />
      <div id="lighthouse"><img :src="lighthouse" alt="lighthouse" /></div>
    </div>
    <IconWave class-name="wave-1" />
    <IconWave class-name="wave-2" />
  </section>
</template>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 85px 0;
  position: relative;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      @include body-medium;
      text-wrap: balance;
    }

    p,
    img {
      width: 90%;
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: 20% 31% 1fr;

    #cathedral {
      grid-row: 1;
      grid-column: 2/4;
      align-self: end;
      width: 100%;
    }

    #lighthouse {
      display: flex;
      grid-row: 1;
      grid-column: 1/3;
      align-self: end;
      width: 100%;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 200px;
        height: 75px;
        top: -38px;
        right: 6px;
        background: url('data:image/svg+xml,<svg width="204" height="76" viewBox="0 0 204 76" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 36.7037C15.388 14.8458 44.8561 -14.1059 75.7705 12.9422C95.443 30.1545 74.9508 61.2938 49.541 53.0971C62.6557 50.6374 70.8522 24.4086 49.541 24.4086C25.7705 24.4086 20.646 62.5808 46.2623 71.1291C68.3934 78.5144 86.4262 67.8587 93.8033 58.8423" stroke="%23FFFCF5" stroke-width="3.81347" stroke-linecap="round" stroke-linejoin="round"/><path d="M109.377 36.9914C122.765 15.1334 152.233 -13.8184 183.147 13.2299C202.82 30.4421 182.328 61.5815 156.918 53.3848C170.033 50.925 178.229 24.6963 156.918 24.6963C133.147 24.6963 128.023 62.8684 153.639 71.4168C175.77 78.8021 194.623 67.0417 202 58.0253" stroke="%23FFFCF5" stroke-width="3.81347" stroke-linecap="round" stroke-linejoin="round"/><path d="M93.8027 58.8449C103.639 47.3695 106.917 40.8121 111.836 33.4351" stroke="%23FFFCF5" stroke-width="3.81347" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }

      &:after {
        content: '';
        position: absolute;
        width: 200px;
        height: 75px;
        bottom: 0;
        right: -125px;
        background: url('data:image/svg+xml,<svg width="204" height="76" viewBox="0 0 204 76" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M202 36.7037C188.612 14.8457 159.144 -14.1061 128.23 12.9422C108.557 30.1544 129.049 61.2938 154.459 53.0971C141.344 50.6373 133.148 24.4086 154.459 24.4086C178.23 24.4086 183.354 62.5807 157.738 71.1291C135.607 78.5144 117.574 67.8587 110.197 58.8423" stroke="%23FFFCF5" stroke-width="3.81347" stroke-linecap="round" stroke-linejoin="round"/><path d="M94.623 36.9914C81.2351 15.1334 51.767 -13.8184 20.8526 13.2299C1.18 30.4421 21.6722 61.5815 47.0821 53.3848C33.9673 50.925 25.7709 24.6963 47.0821 24.6963C70.8526 24.6963 75.977 62.8684 50.3607 71.4168C28.2296 78.8021 9.37714 67.0417 2.00009 58.0253" stroke="%23FFFCF5" stroke-width="3.81347" stroke-linecap="round" stroke-linejoin="round"/><path d="M110.197 58.8449C100.361 47.3695 97.0825 40.8121 92.1645 33.4351" stroke="%23FFFCF5" stroke-width="3.81347" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      }
    }
  }

  .wave-1 {
    position: absolute;
    left: -10%;
    bottom: -200px;
    transform: rotate(-35deg);
    z-index: 1;
  }

  .wave-2 {
    position: absolute;
    right: calc(var(--layout-padding) * -1);
    bottom: -200px;
    z-index: -1;
  }
}
</style>
