import Vue from 'vue'
import Home from '@/views/Home.vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);


export default new IonicVueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sites',
      name: 'sites',
      component: () => import('@/views/Sites.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ '@/views/Settings.vue')
    },
  ]
})
