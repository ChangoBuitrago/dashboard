import api from '@/services/sites/v1/api'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllSites ({ commit }) {
    api.getSites(sites => {
      commit('setSites', sites)
    })
  }
}

// mutations
const mutations = {
  setSites (state, sites) {
    state.all = sites
  },

  decrementProductInventory (state, { id }) {
    const site = state.all.find(site => site.id === id)
    site.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
