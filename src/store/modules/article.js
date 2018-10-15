import {detailApi, indexApi} from '@/api/article'

export default {
  namespaced: true,
  state: {
    list: {},
    detail: {}
  },
  getters: {
  },
  mutations: {
    SET_DETAIL (state, v) {
      state.detail = v
    },
    SET_LIST (state, v) {
      state.list = v
    }
  },
  actions: {
    async detail ({commit}, params) {
      const {item} = await detailApi(params.id)
      commit('SET_DETAIL', item)
    },
    async index ({commit}) {
      const {items} = await indexApi()

      let sortItems = items.reduce((acc, curr) => {
        const time = curr.created.slice(0, 7).replace('-', '年') + '月'
        if (!acc[time]) {
          acc[time] = [curr]
        } else {
          acc[time].push(curr)
        }
        return acc
      }, {})

      commit('SET_LIST', sortItems)
    }
  }
}
