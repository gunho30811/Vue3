import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar, SessionStorage, Notify } from 'quasar'

import './assets/main.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

const app = createApp(App).use(router).use(Quasar, {
  plugins: {SessionStorage,Notify}, // import Quasar plugins and add here
})

app.mount('#app')
