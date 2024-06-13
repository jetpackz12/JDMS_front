import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('../views/pages/Home.vue')
                },
                {
                    path: '/rooms',
                    name: 'rooms',
                    component: () => import('../views/pages/Rooms.vue')
                },
                {
                    path: '/tenants',
                    name: 'tenants',
                    component: () => import('../views/pages/Tenants.vue')
                },
                {
                    path: '/guests',
                    name: 'guests',
                    component: () => import('../views/pages/Guests.vue')
                },
                {
                    path: '/waterBillingPayment',
                    name: 'waterBillingPayment',
                    component: () => import('../views/pages/WaterBillingPayment.vue')
                },
                {
                    path: '/electricityBillingPayment',
                    name: 'electricityBillingPayment',
                    component: () => import('../views/pages/ElectricityBillingPayment.vue')
                },
                {
                    path: '/reports',
                    name: 'reports',
                    component: () => import('../views/pages/Reports.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/pages/Login.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: () => import('../views/pages/NotFound.vue')
        },

    ]
})


export default router