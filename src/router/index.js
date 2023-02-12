import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home-page.vue'

const routerOptions =
{
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage /// mounts automaticaly
    },
    {
      path: '/contacts',
      // component: Contacts /// mounts automaticaly
    },
    {
      path: '/statistics',
      // component: () => import('../pages/AboutView.vue') /// this cmp will mount only when its being called
    }
  ]
}

const router = createRouter(routerOptions)

export default router
