<template>
  <div class="main">
    <h1 class="title">Login</h1>
    <div class="buttons">
      <img class="fb" src="@/assets/image/Login/fb_icon.svg" alt />
      <img class="google" src="@/assets/image/Login/google_icon.svg" alt />
    </div>
    <input placeholder="   Your Email" class="account" type="email" v-model="username" />
    <input placeholder="   Password" class="password" type="password" v-model="password" />
    <p class="forgot">Forgot your password?</p>
    <button class="loginbtn" @click="Login">Login</button>
    <p class="dont">
      Don't have an account?
      <span @click="SignUp">Sign up</span>
    </p>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: "Index",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    
    error() {
      console.log("123");
      document.getElementById( "dont" ).text = "ssergsergsergser";
    },
    Login() {
      axios.post('https://coomoney.herokuapp.com/api/v1/user/login',{
        username: this.username,
        password: this.password
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.data.token);
        this.$router.push("/Project");
      }).catch(() => {
        this.error()
      })
    },
    SignUp() {
      this.$router.push("/SignUp");
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang='scss' scoped>
.main
{
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: hidden;
}


.title
{
  position: absolute;
  font-size: 10vw;
  font-weight:bold;
  top: 20vh;
  left: 10vw;
  padding: 0;
  color: #000000;
  background-color: #ffffff;
}

.subtitle
{
  position: absolute;
  font-size: 3vw;
  font-weight:bold;
  top: 55vh;
  left: 12vw;
  padding: 0;
  color: #0eb9ab;
  background-color: #ffffff;
}


.forgot
{
  position: absolute;
  font-size: 3vw;
  font-weight:bold;
  top: 63vh;
  left: 58vw;
  padding: 0;
  color: #8D8D8D;
  background-color: #ffffff;
}

.dont
{
  position: absolute;
  font-size: 3vw;
  font-weight:bold;
  top: 90vh;
  left: 28vw;
  padding: 0;
  color: #0eb9ab;
  background-color: #ffffff;
}
.signup
{
  position: absolute;
  font-size: 3vw;
  font-weight:bold;
  top: 80vh;
  left: 10vw;
  padding: 0;
  color: #0eb9ab;
  background-color: #ffffff;
}

.account
{
  position: absolute;
  font-size: 5vw;
  font-weight:normal;
  border-radius: 5vw;
  width: 80vw;
  height: 12vw;
  top: 45vh;
  left: 10vw;
  padding: 0;
  color: rgb(153, 153, 153);
  background-color: #ffffff;
  border-color : #0eb9ab;
}
.password
{
  position: absolute;
  font-size: 5vw;
  font-weight:normal;
  border-radius: 5vw;
  width: 80vw;
  height: 12vw;
  top: 55vh;
  left: 10vw;
  padding: 0;
  color: rgb(153, 153, 153);
  background-color: #ffffff;
  border-color : #0eb9ab;
}

.fb
{
  position: absolute;
  top: 30vh;
  left: 10vw;
  width: 38vw;
  padding: 0;
  background-color: #ffffff;
}
.google
{
  position: absolute;
  top: 30vh;
  left: 55vw;
  width: 38vw;
  padding: 0;
  background-color: #ffffff;
}

.loginbtn
{
  position: absolute;
  font-size: 5vw;
  font-weight:normal;
  border-radius: 5vw;
  width: 40vw;
  height: 12vw;
  top: 68vh;
  left: 30vw;
  padding: 0;
  color: rgb(255, 255, 255);
  background-color: #ffffff;
  background-color : #0eb9ab;
}
</style>
