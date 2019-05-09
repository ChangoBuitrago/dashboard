import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding, faHome, faBicycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBuilding, faHome, faBicycle )
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Ionic);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
