import api from '@/services/api/version3/endpoints/device'

// initial state
const state = {
  devices: []
}

// getters
const getters = {}

// actions
const actions = {
  getDeviceList ({ commit }) {
    api.getDeviceList(devices => {
      commit('setDevices', devices)
    })
  },
  getValidDeviceModelList ({ commit }) {
    api.getValidDeviceModelList(devices => {
      commit('setDevices', devices)
    })
  }
}

// mutations
const mutations = {
  setDevices (state, devices) {
    state.devices = devices
  },

  // decrementProductInventory (state, { id }) {
  //   const device = state.all.find(device => device.id === id)
  //   device.inventory--
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
