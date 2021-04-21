import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    wishlist: [],
    cart: [],
  },
  mutations,
  actions,
  modules: {
  }
})
