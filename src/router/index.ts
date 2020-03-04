import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/qrcode',
    name: 'QRCode',
    component: () => import('../views/QRCode.vue')
  },
  {
    path: '/qrcodescan',
    name: 'QRCodeScan',
    component: () => import('../views/QRCodeScan.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
