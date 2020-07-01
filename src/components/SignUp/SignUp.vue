<template>
  <div class="main">
    <Header :title="'CooMoney'" @back="$router.go(-1)"></Header>
    <div class="block">
      <h1 class="title">Sign Up</h1>
      <div>
        <!-- <div class="buttons">
          <img class="fb" src="@/assets/image/Login/fb_icon.svg" alt />
          <img class="google" src="@/assets/image/Login/google_icon.svg" alt />
        </div> -->
        <br />
        <div class="input-block">
          <input placeholder="   Your Email" type="email" v-model="signUpData.email" />
          <br />
          <br />
          <input placeholder="   Password" type="password" v-model="signUpData.password" />
          <br />
          <br />
          <input placeholder="   Username" type="text" v-model="signUpData.username" />
        </div>
      </div>
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import axios from '@/store/axios';

export default {
  name: "SignUp",
  components: {
    Header
  },
  computed:{
    signUpData(){
      return this.$store.state.signUp;
    }
  },
  methods: {
    async signUp() {
      let response = await this.$store.dispatch('signUp');
      if(response.data.status == 200){
        this.$store.state.login.email = response.data.data.email;
        this.$store.state.login.password = response.data.data.password;
        let response = await this.$store.dispatch("login");
        if (response.data.status == 200) {
          this.$store.state.userData.username = this.$store.state.signUp.username;
          this.$store.state.userData.email = this.$store.state.signUp.email;
          this.$store.state.userData.userPhoto = this.$store.state.signUp.userPhoto;
          this.$cookies.set("token", response.data.data.token, "1d");
          localStorage.setItem("token", response.data.data.token);
          axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.data.token;
          this.$router.push("/Home");
        } else {
          this.error();
        }
      }
      console.log(response.data);
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
</style>
