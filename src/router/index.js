import Vue from 'vue'
import VueRouter from 'vue-router'
import Rezervacije from '../views/Rezervacije.vue'
import Kontakt from '../views/Kontakt.vue'
import Galerija from '../views/Galerija.vue'
import Prijava from '../views/Prijava.vue'

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
    component: () => import('../views/Galerija.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/Kontakt.vue')
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: () => import('../views/Prijava.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router