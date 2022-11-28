import { createRouter, createWebHistory } from 'vue-router'

import StartScreen from '@/views/StartScreen.vue'
import ImpressumScreen from '@/views/ImpressumScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartScreen 
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: ImpressumScreen
    }
  ]

})

export default router
