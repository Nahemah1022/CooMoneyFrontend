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
  mutations: {},
  modules: {},
});
