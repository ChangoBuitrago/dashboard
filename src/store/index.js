import Vue from 'vue'
import Vuex from 'vuex'
import site from './modules/version3/site';
import siteSegment from './modules/version3/siteSegment';
import view from './modules/version3/view';
import device from './modules/version3/device'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    siteModule: 
      { ...site, 
        modules: { 
          siteSegment: siteSegment 
        }
      },
    viewModule: view,
    deviceModule: device
  },
  strict: debug
})
