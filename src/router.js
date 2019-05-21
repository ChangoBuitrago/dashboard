import Vue from 'vue'
import Home from './views/Home.vue'
import Site from './views/Site.vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);


export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sitesview',
      name: 'sitesView',
      component: () => import('./views/SitesView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    { 
      path: '/sites/:id', 
      component: Site,
      children: [
        {
          path: '',
          redirect: '/sites'
        },
        {
          path: 'consumption',
          component: () => import('./views/Consumption.vue')
        },
        {
          path: 'circuits',
          component: () => import('./views/Circuits.vue')
        },
        {
          path: 'switches',
          component: () => import('./views/Switches.vue')
        }
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

  ]
})
