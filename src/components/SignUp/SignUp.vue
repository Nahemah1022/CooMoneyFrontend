<template>
  <div class="main">
    <Header :title="'CooMoney'" @back="$router.go(-1)"></Header>
    <div class="block">
      <h1 class="title">Sign Up</h1>
      <div>
        <div class="buttons">
          <img class="fb" src="@/assets/image/Login/fb_icon.svg" alt />
          <img class="google" src="@/assets/image/Login/google_icon.svg" alt />
        </div>
        <br />
        <div class="input-block">
          <input placeholder="   Your Email" type="email" v-model="email" />
          <br />
          <br />
          <input placeholder="   Password" type="password" v-model="password" />
          <br />
          <br />
          <input placeholder="   Username" type="text" v-model="username" />
        </div>
      </div>
      <button @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/common/Header.vue";

export default {
  name: "SignUp",
  components: {
    Header
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      userGender: "MALE"
    };
  },
  methods: {
    signUp() {
      axios
        .post("https://coomoney.herokuapp.com/api/v1/user/signUp", {
          username: this.username,
          password: this.password,
          email: this.email,
          userPhoto: "",
          userGender: this.userGender,
          userBirth: "2020-06-28"
        })
        .then(res => {
          console.log(res);
          this.$router.push("/Login");
        })
        .catch(err => {
          console.log(err);
        });
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
