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
      participateID: [],
      userPhoto: "",
      userBirth: "2020-06-28",
    },
    // google: {
    //   username: "",
    //   email: "",
    //   personalID: "",
    //   picture: "",
    //   userPhoto: "",
    //   params: {
    //     client_id:
    //       "1029131813912-i7g1k358ad467mk9on0r1ht9jj55akoq.apps.googleusercontent.com",
    //   }
    // },
    login: {
      email: "",
      password: ""
    },
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
