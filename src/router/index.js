import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImpressumView.vue')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }, {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    }, {
      path: '/:location_id',
      name: 'location',
      component: () => import('../views/LocationView.vue'),
      props: true
    }
  ]
})

export default router
