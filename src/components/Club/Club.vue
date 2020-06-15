<template>
  <div class="main">
    <Header
      :title="' '"
      @back="$router.go(-1)"
    ></Header>
    <Footer :active="3"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: 'Club',
  components: {
    Header, 
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
