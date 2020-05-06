<template>
  <div class="main">
    <img src="@/assets/image/Login/center.svg" alt />
    <p>Keep Track Of Money</p>
    <p>Tracking every expenses you have and understand your spending pattern</p>
    <button @click="Login">Log In</button>
    <button @click="SignUp">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    Login() {
      this.$router.push("/Login");
    },
    SignUp() {
      this.$router.push("/SignUp");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
