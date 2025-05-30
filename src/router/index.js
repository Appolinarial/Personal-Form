import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Preview from '@/pages/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
  ],
})

export default router
