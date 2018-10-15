import {listApi} from '@/api/home'

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
  },
  mutations: {
    SET_LIST (state, v) {
      state.list = v
    }
  },
  actions: {
    async list ({commit}) {
      const {items} = await listApi()
      commit('SET_LIST', items)
    }
  }
}
