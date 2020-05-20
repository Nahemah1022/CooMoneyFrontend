<template>
  <div class="main">
    <Header :title="'CooMoney'" @back="$router.push('/')"></Header>
    <div class="block">
      <h1 class="title">Log In</h1>
      <div>
        <div class="buttons">
          <img class="fb" src="@/assets/image/Login/fb_icon.svg" alt />
          <img class="google" src="@/assets/image/Login/google_icon.svg" alt />
        </div>
        <p class="p1">or login with email.</p>
        <div class="input-block">
          <input placeholder="   Your Email" type="email" v-model="username" />
          <br />
          <br />
          <input placeholder="   Password" type="password" v-model="password" />
          <p class="p2">Forgot your password?</p>
        </div>
      </div>
      <button @click="Login">Log In</button>
      <p class="dont" id="dont">
        Don't have an account?
        <span @click="SignUp">Sign up</span>
      </p>
      <!-- <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/common/Header.vue";

export default {
  name: "Login",
  components: {
    Header
  },
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "incorrect account or password!"
    };
  },
  methods: {
    error() {
      document.getElementById("dont").text = this.errorMsg;
    },
    Login() {
      axios
        .post("https://coomoney.herokuapp.com/api/v1/user/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("token", res.data.data.token);
          this.$router.push("/Project");
        })
        .catch(() => {
          this.error();
        });
    },
    SignUp() {
      this.$router.push("/SignUp");
    }
  }
};
</script>

<style lang='scss' scoped>
.block {
  width: 85%;
  height: 90vh;
  margin: 0 auto;
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    font-size: 44px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .input-block {
    input {
      width: 90%;
      border: 1px solid #00c5b8;
      line-height: 44px;
      border-radius: 30px;
      padding: 0 5%;
      font-size: 18px;
    }
    .p2 {
      color: #8d8d8d;
      text-align: right;
      margin-top: 1vh;
    }
  }
  .p1 {
    color: #8d8d8d;
    text-align: center;
    margin: 2vh;
    font-size: 14px;
  }
  button {
    color: #fff;
    font-size: 20px;
    width: 70%;
    margin: 0 auto;
    border: 1px solid #00c5b8;
    background-color: #00c5b8;
    line-height: 40px;
    border-radius: 30px;
    margin-top: 0vh;
    margin-bottom: 10vh;
  }
  p {
    color: #8d8d8d;
    text-align: center;
  }
}
// .fb-login-button {
//   position: absolute;
//   border-radius: 5vw;
//   width: 50vw;
//   height: 10vw;
//   top: 80vh;
//   left: 25vw;
//   padding: 0;
//   background-color: #ffffff;
// }
</style>
