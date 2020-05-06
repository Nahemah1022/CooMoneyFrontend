<template>
  <div class="main">
    <Header :title="'All Project'" @back="$router.go(-1)"></Header>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "Project",
  data() {
    return {};
  },
  components: {
    Header
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
