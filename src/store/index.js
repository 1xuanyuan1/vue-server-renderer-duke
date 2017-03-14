import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {}
}

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  state,
  strict: debug
})

export default store
