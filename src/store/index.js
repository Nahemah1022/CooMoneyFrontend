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
    login: {
      username: "",
      email: "",
      personalID: "",
      userPhoto: "",
      showForgot: false,
      showError: false,
      showAni: false,
      otherSource: false,
      time: null,
    },
  },
  actions,
  mutations: {
    onSuccess: (state, googleUser) => {
      console.log(googleUser);
      let profile = googleUser.getBasicProfile();
      state.login.username = profile.getName();
      state.login.email = profile.getEmail();
      state.login.personalID = profile.getId();
      state.login.userPhoto = profile.getImageUrl();
    },
    loginError: (state) => {
      state.login.showError = true;
      state.login.showForgot = true;
      state.login.showAni = true;
    },
    setHeadshot(state, pic) {
      state.headshot = pic;
    },
    setUsername(state, name) {
      state.username = name;
    },
  },
  modules: {},
});
