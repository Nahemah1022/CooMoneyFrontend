<template>
  <div class="main">
    <Header :title="''" @back="$router.go(-1)"></Header>
    <!-- <div class="slider"> -->
    <div class="outer">
      <swiper class="swiper" :options="swiperOption" :activeIndex="3">
        <swiper-slide v-for="preProject in projects" :key="preProject.id">
          <ProjectViewItem
            :title="preProject.title"
            :theme="preProject.theme"
            :projectId="preProject.id"
          ></ProjectViewItem>
        </swiper-slide>
      </swiper>
    </div>
    <Footer :active="2"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import ProjectViewItem from "@/components/Project/ProjectViewItem.vue";
// import { tns } from "tiny-slider/src/tiny-slider";
// import "tiny-slider/src/tiny-slider.scss";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProjectView",
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        },
        activeIndex: 3
      }
    };
  },
  components: {
    Header,
    Footer,
    ProjectViewItem,
    Swiper,
    SwiperSlide
  },
  props: {
    projects: Array,
    default: Number
  },
  mounted() {
    // this.slider = tns({
    //   container: ".slider",
    //   items: 1,
    //   startIndex: this.default,
    //   slideBy: "page",
    //   center: true,
    //   mouseDrag: true,
    //   edgePadding: 0,
    //   gutter: 0,
    //   speed: 600,
    //   loop: false,
    //   preventScrollOnTouch: "auto"
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.outer {
  height: 100vh;
}
.swiper {
  background-color: #dffffe;
  height: 90vh;
  touch-action: none;
  .swiper-slide {
    padding-top: 9vh;
    height: 90vh;
  }
}
</style>
