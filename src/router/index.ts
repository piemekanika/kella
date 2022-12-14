import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/org-login',
            name: 'Organizer login',
            component: () => import('@/pages/organizer/Login.vue'),
        },
        {
            path: '/org/sessions',
            name: 'Session list',
            component: () => import('@/pages/organizer/sessions/SessionsList.vue'),
        },
    ],
});

export default router
