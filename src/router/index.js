import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aniversarios',
    name: 'aniversarios',
 
    component: () => import(/* webpackChunkName: "Aniversarios" */ '../views/AniversariosView.vue')
  },
  {
    path: '/map',
    name: 'map',
 
    component: () => import(/* webpackChunkName: "Map" */ '../views/MapView.vue')
  },
  {
    path: '/contatos',
    name: 'contatos',
 
    component: () => import(/* webpackChunkName: "Contatos" */ '../views/ContatosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
