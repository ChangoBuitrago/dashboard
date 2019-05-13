import Vue from 'vue'
import Home from './views/Home.vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);


export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sites',
      name: 'sites',
      // lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "sites" */ './views/Sites.vue')
    },
    {
      path: '/consumption',
      name: 'consumption',
      // lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "sites" */ './views/Consumption.vue')
    },
    {
      path: '/about',
      name: 'about',
      // lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

  ]
})
