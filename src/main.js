import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import App from './App.vue';
import NotificationsOptions from './components/NotificationsOptions';
import AboutPage from './components/AboutPage';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:"Home", component: NotificationsOptions},
        {path: '/about', name:"About", component: AboutPage}
    ]
})

createApp(App)
.use(router)
.mount('#app')
