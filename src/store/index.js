import Vue from "vue";
import Vuex from "vuex";
import actions from "./action";
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'


Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {
    signUp: {
      email: "",
      password: "",
      username: "",
      userGender: "",
      userPhoto: "",
      userBirth: "",
    },
    userData: {
      email: "",
      username: "",
      userPhoto: "",
    },
    loginData: {
      email: "",
      password: "",
    },
    club: {},
  },
  actions,
  mutations: {
    setSelectedClub(state, club) {
      state.club = club;
    },
    setUserDate(state, userData) {
      state.userData = userData;
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key)
      }
    })
  ]
});
