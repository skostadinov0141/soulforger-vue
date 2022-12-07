import { createRouter, createWebHistory } from 'vue-router'

import StartScreen from '@/views/StartScreen.vue'
import ImpressumScreen from '@/views/ImpressumScreen.vue'
import ApplicationScreen from '@/views/ApplicationScreen.vue'

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
    },
    {
      path: '/applications',
      name: 'Bewerben',
      component: ApplicationScreen
    }
  ]

})

export default router
