import api from '@/services/api/version3/endpoints/view'

// initial state
const state = {
  views: []
}

// getters
const getters = {
  getRecentViewList: (state) => (id) => 
    state.views.filter(({ recent, siteId }) => siteId === id && recent),
  getFavouriteViewList: (state) => (id) => 
    state.views.filter(({ favourite, siteId }) => siteId === id && favourite),
  getAllViewList: (state) => (id) => 
    state.views.filter(({ siteId }) => siteId === id),
}

// actions
const actions = {
  getViewList ({ commit }) {
    api.getViewList(views => {
      commit('setViews', views)
    })
  },
}

// mutations
const mutations = {
  setViews (state, views) {
    state.views = views
  },

  // decrementProductInventory (state, { id }) {
  //   const view = state.all.find(view => view.id === id)
  //   view.inventory--
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
