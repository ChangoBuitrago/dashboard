import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faBuilding, faHome, faTachometerAlt, faBolt, faInfoCircle, 
  faCog, faMicrochip, faToggleOn, faBookmark, faStopwatch, 
  faChevronLeft, faLayerGroup, faStar, faSolarPanel, faExchangeAlt,
  faEllipsisH, faFileAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './i18n'

library.add(faBuilding, faHome,
  faTachometerAlt, faBolt, faInfoCircle, faCog, 
  faMicrochip, faToggleOn, faBookmark, faStopwatch, 
  faChevronLeft, faLayerGroup, faStar, faSolarPanel, faExchangeAlt,
  faEllipsisH, faFileAlt, faPlus )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Ionic);

Vue.config.productionTip = false

const init = () => {
  new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')
}

// Wait for the deviceready event to start the render
document.addEventListener("deviceready", () => {
  // eslint-disable-next-line
  console.log("Ready, Render the App");
  init();
});

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== "undefined");
if (!isCordovaApp){
  document.dispatchEvent(new CustomEvent("deviceready", {}));
}