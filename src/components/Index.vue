<template>
  <div class="main">
    <h1>Login</h1>
    <div class="buttons">
      <img src="@/assets/image/Login/fb_icon.svg" alt="">
      <img src="@/assets/image/Login/google_icon.svg" alt="">
    </div>
    <input type="email" v-model="account">
    <input type="password" v-model="password">
    <p>Forgot your password?</p>
    <button @click="Login">Login</button>
    <p>Don't have an account?<span>Sign up</span></p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    Login() {
      this.$router.push('/Project');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main{
  margin: 10vh auto;
  width: 80%;
}
</style>
