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
      <p class="dont">
        Don't have an account?
        <span @click="SignUp">Sign up</span>
      </p>
          <div class="fb-login-button" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>

    </div>
  </div>
</template>

<script>
  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1066388720410146',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v7.0'          // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };

  
  (function(d, s, id) {                      // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

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
      document.getElementById("dont").text = "ssergsergsergser";
    },
    Login() {
      axios
        .post("https://coomoney.herokuapp.com/api/v1/user/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
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
.fb-login-button {
  position: absolute;
  border-radius: 5vw;
  width: 50vw;
  height: 10vw;
  top: 80vh;
  left: 25vw;
  padding: 0;
  background-color: #ffffff;
}
</style>
