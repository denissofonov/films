import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import store from '@/store/index.js'
import ElementPlus from 'element-plus'

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
