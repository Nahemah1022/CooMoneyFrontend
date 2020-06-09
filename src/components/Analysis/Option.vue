<template>
  <div id="content1">
    <swiper class="swiper" ref="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="project in allProjectName" :key="project">
        <label class="layout">
          <h1>{{project}}</h1>
          <input type="checkbox" :value="project" v-model="checkProject" @change="getProjectName" />
        </label>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    allProjectName: Array
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true
        },
        on: {
          /*resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? "vertical" : "horizontal"
            );
          }*/
        }
      },
      checkProject: []
    };
  },
  methods: {
    getProjectName() {
      //console.log(this.checkProject);
      this.$emit("projectSubmit", this.checkProject);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content1 {
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 10vh;
  width: 90%;
  height: 15vh;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;

  .swiper-button-next {
    //transform: rotate(90deg);
    right: -0.5vh;
    &:after {
      font-size: 3vh;
    }
  }

  .swiper-button-prev {
    //transform: rotate(90deg);
    left: -0.5vh;
    &:after {
      font-size: 3vh;
    }
  }
  .swiper {
    //background-color: red;
    .swiper-slide {
      //background-color: yellow;
      .layout {
        background-color: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        h1 {
          font-size: 1vh;
        }
      }
    }
  }
}
</style>
