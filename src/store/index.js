import Vue from "vue";
import Vuex from "vuex";
import actions from "./action";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUp: {
      email: "",
      password: "",
      username: "",
      userGender: "MALE",
      userPhoto: "",
      userBirth: "2020-06-28",
    },
    userData: {
      email: "",
      username: "",
      userPhoto: "",
    },
    loginData: {
      email: "",
      password: ""
    },
    club: {}
  },
  actions,
  mutations: {
    loginError: (state) => {
      state.login.showError = true;
      state.login.showForgot = true;
      state.login.showAni = true;
    },
    setUsername: (state, name) => {
      state.username = name;
    },
    setSelectedClub: (state, club) => {
      state.club = club;
    }

  },
  modules: {},
});
