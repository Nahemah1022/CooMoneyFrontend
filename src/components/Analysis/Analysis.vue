<template>
  <div class="main">
    <Header :title="'Analysis'" @back="$router.go(-1)"></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  name: "Analysis",
  components: {
    Header,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
