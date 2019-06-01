import api from '@/services/api/version3/endpoints/site'

// initial state
const state = {
  sites: []
}

// getters
const getters = {
  getSiteList: (state) => state.sites,
}

// actions
const actions = {
  getSiteList ({ commit }) {
    api.getSiteList(sites => {
      commit('setSites', sites)
    })
  },
}

// mutations
const mutations = {
  setSites (state, sites) {
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
