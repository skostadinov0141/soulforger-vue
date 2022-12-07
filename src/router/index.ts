import { createRouter, createWebHistory } from 'vue-router'

import StartScreen from '@/views/StartScreen.vue'
import ImpressumScreen from '@/views/ImpressumScreen.vue'
import ApplicationScreen from '@/views/ApplicationScreen.vue'
import LoginScreen from '@/views/LoginScreen.vue'

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
      path: '/account',
      name: 'Profil',
      component: ApplicationScreen
    },
    {
      path: '/account/login',
      name: 'Login',
      component: LoginScreen
    },
  ]

})

export default router
