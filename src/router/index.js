import Vue from 'vue'
import VueRouter from 'vue-router'
import Rezervacije from '../views/Rezervacije.vue'
import Kontakt from '../views/Kontakt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Rezervacije',
    component: Rezervacije
  },
  {
    path: '/galerija',
    name: 'Galerija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Galerija.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Kontakt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router