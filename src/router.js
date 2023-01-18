import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Catalog from '@/views/CatalogView.vue';
import Favorite from '@/views/FavoriteView.vue';
import FilmDetails from '@/views/FilmDetailsView.vue';
import Login from '@/views/LoginView.vue';
import Registration from '@/views/RegistrationView.vue';
import store from '@/store/index.js'

export default createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/catalog'
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/catalog',
            children: [
                {path: '', component: Catalog},
                {path: ':id', component: FilmDetails}
            ]
        },
        {
            path: '/favorite',
            component: Favorite,
            beforeEnter(to, from, next) {
                if (store.getters['user/GET_ACCESS']) {
                    next()
                } else {
                    return
                }
            }
        },
        {
            path: '/login',
            component: Login,
            beforeEnter(to, from, next) {
                if (!store.getters['user/GET_ACCESS']) {
                    next()
                } else {
                    return
                }
            }
        },
        {
            path: '/registration',
            component: Registration
        }
    ]
})