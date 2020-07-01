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
      password: ""
    },
    club: {}
  },
  actions,
  mutations: {},
  modules: {},
});
