import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Catalog from '@/views/CatalogView.vue';
import Favorite from '@/views/FavoriteView.vue';

export default createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/catalog', component: Catalog},
        {path: '/favorite', component: Favorite}

    ]
})