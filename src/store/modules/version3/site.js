import api from '@/services/api/version3/endpoints/site'
import i18n from '@/i18n'

// initial state
const state = {
  sites: [],
  selected: {}
}

// getters
const getters = {
  getHeaderTitle: () => i18n.t('app.sites.title'),
  getSiteList: (state) => state.sites,
  getSelectedSite: (state) => 
    state.selected
}

// actions
const actions = {
  apiGetSiteList: ({ commit }) => {
    api.getSiteList(sites => {
      commit('setSites', sites)
    })
  },
  setSelectedSite: ({ commit }, siteId) => {
    commit('setSelectedSite', siteId )
  },
}

// mutations
const mutations = {
  setSites: (state, sites) => {
    state.sites = sites
  },
  setSelectedSite: (state, siteId) => {
    state.selected = state.sites.find(({ _id }) => _id === siteId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
