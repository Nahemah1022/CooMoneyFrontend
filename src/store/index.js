import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headshot: "",
    username: ""
  },
  mutations: {
    setHeadshot(state, pic) {
      state.headshot = pic;
    },
    setUsername(state, name) {
      state.username = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
