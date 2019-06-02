import i18n from '@/i18n'

// initial state
const state = {
  segments: [],
  selected: {},
  initSegmentId: "2"
}

// getters
const getters = {
  getSegmentList: (state) => state.segments,
  getSelectedSegment: (state) => state.selected,
}

// actions
const actions = {
  setSegmentList: ({ commit }) => {
    // i18n needs to be dynamic
    const segments = [
      { 
        _id: "0",
        label: i18n.t('app.sites.segment.recent') 
      },
      { 
        _id: "1",
        label: i18n.t('app.sites.segment.favourite')
      },
      { 
        _id: "2",
        label: i18n.t('app.sites.segment.all')
      }
    ]

    commit('setSegmentList', segments)
  },
  setSelectedSegment: ({ commit, state }, segmentId = '') => {
  
    commit('setSelectedSegment', (segmentId === '') ? state.initSegmentId : segmentId)
  },
}

// mutations
const mutations = {
  setSegmentList: (state, segments) => {
    state.segments = segments
  },
  setSelectedSegment: (state, segmentId) => {

    const selected = state.segments.find(({ _id }) => _id === segmentId)
    
    state.selected = selected
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
