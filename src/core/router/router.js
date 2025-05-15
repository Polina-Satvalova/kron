import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/core/router/routes.js'
import { nextTick } from 'vue'

export const router = createRouter({
  history: createWebHistory('/kron/'),
  routes,
  async scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      await new Promise((resolve) => setTimeout(resolve, 100)) // небольшой буфер
      await nextTick() // подождать, пока DOM обновится

      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})
