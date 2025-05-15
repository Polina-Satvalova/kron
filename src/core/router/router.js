import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/core/router/routes.js'

export const router = createRouter({
  history: createWebHistory('/kron/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
