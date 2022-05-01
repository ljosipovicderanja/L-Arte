import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/Pocetna.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/rezervacije',
    name: 'Rezervacije',
    component: () => import('../views/Rezervacije.vue')
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
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: () => import('../views/Registracija.vue')
  },
  {
    path: '/muzeji',
    name: 'Muzeji',
    component: () => import('../views/Muzeji.vue')
  },
  {
    path: '/louvre',
    name: 'Louvre',
    component: () => import('../views/Louvre.vue')
  },
  {
    path: '/orsay',
    name: 'Orsay',
    component: () => import('../views/Orsay.vue')
  },
  {
    path: '/palais',
    name: 'Palais',
    component: () => import('../views/Palais.vue')
  },
  {
    path: '/vangogh',
    name: 'Vangogh',
    component: () => import('../views/Vangogh.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  next();
})

export default router