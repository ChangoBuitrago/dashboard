import api from '@/services/api/version3/endpoints/site'
import i18n from '@/i18n'

// initial state
const state = {
  sites: []
}

// getters
const getters = {
  getHeaderTitle: () => i18n.t('app.sites.title'),
  getSiteList: (state) => state.sites,
}

// actions
const actions = {
  apiGetSiteList: ({ commit }) => {
    api.getSiteList(sites => {
      commit('setSites', sites)
    })
  },
}

// mutations
const mutations = {
  setSites: (state, sites) => {
    state.sites = sites
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
