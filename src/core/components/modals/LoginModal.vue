<script setup>
import BaseModal from '@/core/components/modals/BaseModal.vue'
import BaseButton from '@/core/components/BaseButton.vue'
import { computed, ref } from 'vue'
import logo from '@Assets/icons/logo.svg'
import { Keys } from '@/core/constants/keys.js'

defineProps(['isOpenProps'])

const emits = defineEmits(['onClose'])

const login = ref('')
const password = ref('')

const isLogin = computed(() => {
  return !!localStorage.getItem(Keys.Login)
})

function submit() {
  if (!password.value) return
  localStorage.setItem(Keys.Login, login.value)
  localStorage.setItem(Keys.Password, password.value)
  emits('onClose')
}

function logout() {
  localStorage.removeItem(Keys.Login)
  localStorage.removeItem(Keys.Password)
  emits('onClose')
}
</script>

<template>
  <BaseModal modal-class="login-modal" :is-open-props="isOpenProps" @on-close="$emit('onClose')">
    <div v-if="!isLogin" class="form">
      <img :src="logo" alt="logo" class="logo" />
      <div class="field">
        <span>Логин:</span>
        <input v-model="login" />
      </div>
      <div class="field">
        <span>Пароль:</span>
        <input type="password" v-model="password" />
      </div>
      <BaseButton class-names="submit" @click="submit">Вход</BaseButton>
    </div>
    <div v-else class="form">
      <p class="description">Вы уверены что хотите выйти?</p>
      <BaseButton class-names="submit" @click="logout"> Подтвердить</BaseButton>
    </div>
  </BaseModal>
</template>

<style lang="scss">
.login-modal {
  width: 50%;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 3% 10%;
  max-width: 600px;

  .logo {
    max-width: 300px;
    width: 100%;
    height: 100px;
  }

  .submit {
    font-family:
      Playfair Display,
      sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    max-width: 280px;
    width: 100%;
    padding: 5px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    span {
      margin-left: 15px;
      font-family:
        Montserrat Alternates,
        sans-serif;
      font-size: 2.3rem;
      font-weight: 600;
    }

    input {
      border-radius: 22px;
      background-color: #fffcf5;
      border: 1px solid var(--black);
      outline: none;
      padding: 10px;
      font-size: var(--body-size-medium);
    }
  }

  .description {
    @include body-medium;
  }
}
</style>
