import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrinho: 0
  },
  getters: {
    getQtdItems(state) {
      return state.carrinho
    }
  },
  mutations: {
    addCarrinho(state) {
      state.carrinho += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
