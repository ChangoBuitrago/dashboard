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
  getViewList: (state) => (id) => 
    state.views.filter(({ siteId }) => siteId === id),
}

// actions
const actions = {
  apiGetViewList: ({ commit }) => {
    api.getViewList(views => {
      commit('setViews', views)
    })
  },
  addViewToFavourite: ({ commit }, viewId) => {
    commit('setViewToFavourite', viewId )
  },
}

// mutations
const mutations = {
  setViews: (state, views) => {
    state.views = views
  },
  setViewToFavourite: (state, viewId) => {
    const view = state.views.find(({ _id }) => _id === viewId)
    view.favourite = !view.favourite
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
