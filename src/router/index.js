import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home-page.vue'
import Contacts from '../pages/contacts.vue'
import Statistics from '../pages/Statistics.vue'

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
      component: Contacts /// mounts automaticaly
    },
    {
      path: '/statistics',
      component: Statistics /// mounts automaticaly
    },

  ]
}

const router = createRouter(routerOptions)

export default router
