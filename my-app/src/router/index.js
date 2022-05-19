import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BannerView from '../views/Banner'

Vue.use(VueRouter)

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
    path: '/textfield',
    name: 'TextField',
    component: () => import('../views/Textfield.vue')
  },
  {
    path: '/selectfield',
    name: 'SelectField',
    component: () => import('../views/Selectfield.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('../views/Alert.vue')
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue')
  },
  {
    path: '/banner',
    name: 'Banner',
    component: BannerView
  },
  {
    path: '/Addprogram',
    name: 'Addlistprogram',
    component: () => import('../views/AddlistProgram.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
