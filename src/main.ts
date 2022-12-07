import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.$apiHost = 'http://127.0.0.1:8000'

app.use(VueCookies)
app.use(router)

app.mount('#app')
