import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from '@/core/router/router.js'

const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
