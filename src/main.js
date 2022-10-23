import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import store from '@/store/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(store)
    .mount('#app')
