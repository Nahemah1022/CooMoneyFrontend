<template>
  <div class="main">
    <Header :title="''" @back="$router.go(-1)"></Header>
    <div class="slider">
      <ProjectViewItem
        v-for="preProject in projects"
        :key="preProject.id"
        :title="preProject.title"
        :theme="preProject.theme"
        :id="preProject.id"
      ></ProjectViewItem>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import ProjectViewItem from "@/components/Project/ProjectViewItem.vue";
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/src/tiny-slider.scss";

export default {
  name: "ProjectView",
  components: {
    Header,
    Footer,
    ProjectViewItem
  },
  props: {
    projects: Array,
    default: Number
  },
  mounted() {
    this.slider = tns({
      container: ".slider",
      items: 1,
      startIndex: this.default,
      slideBy: "page",
      center: true,
      mouseDrag: true,
      edgePadding: 0,
      gutter: 0,
      speed: 600,
      loop: false,
      preventScrollOnTouch: "auto"
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.slider {
  background-color: #dffffe;
  height: 90vh;
  padding-top: 4vh;
  touch-action: none;
}
</style>
