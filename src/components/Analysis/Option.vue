<template>
  <div id="content1">
    <toggle-button
      id="setButton"
      :width="76.5"
      :height="30.96"
      :speed="1000"
      :value="value"
      :sync="false"
      :color="color"
      :font-size="fontSize"
      @change="onChangeEventHandler"
    />
    <div id="choose">
      <h1 style="font-size:17px; top:10px">All</h1>
      <h2 style="font-size:17px; top:40px">Project</h2>
    </div>
    <div id="projectView">
      <div class="example-3d">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>Project 1</swiper-slide>
          <swiper-slide>Project 2</swiper-slide>
          <swiper-slide>Project 3</swiper-slide>
          <swiper-slide>Project 4</swiper-slide>
          <swiper-slide>Project 5</swiper-slide>
          <swiper-slide>Project 6</swiper-slide>
          <swiper-slide>Project 7</swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
//toggleButton
import Vue from "vue";
import ToggleButton from "vue-js-toggle-button";

//slide project
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.use(ToggleButton);
export default {
  name: "Option",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      //swiper
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        direction: "vertical",
        coverflowEffect: {
          rotate: 30,
          stretch: 75, //彼此swiper的距離
          depth: 0, //swiper離z軸的距離
          modifier: 1,
          slideShadows: false
        },

        pagination: {
          el: ".swiper-pagination"
        }
      },

      //button

      value: true,
      color: { checked: "#E3EDF7", unchecked: "#A6F3F3" },
      fontSize: 20
    };
  },
  methods: {
    onChangeEventHandler() {
      //false=>all true=>project

      //all
      if (this.value) {
        document.querySelector("h1").style.color = "#02AA9E";
        document.querySelector("h2").style.color = "#DBDBDB";
        this.value = false;
        this.$emit("buttonSubmit", this.value);
      }

      //project
      else {
        document.querySelector("h2").style.color = "#02AA9E";
        document.querySelector("h1").style.color = "#DBDBDB";

        this.value = true;

        this.$emit("buttonSubmit", this.value);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  position: relative;
  transition: 1s;
  color: #dbdbdb;
  background-color: white;
  right: 20px;
  font-weight: 500;
}

#content1 {
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 20px;
  width: 90%;
  height: 101px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;
}
#choose {
  position: relative;

  height: 100%;
  background-color: transparent;
}
#setButton {
  position: relative;
  right: 40px;
  background-color: transparent;
  transform: rotate(90deg);
}
#projectView {
  position: relative;

  width: 100%;
  height: 100%;
  border-radius: 22px 22px;
  background: inherit;
}
.example-3d {
  width: 95%;
  height: 100%;
  background: inherit;
  overflow: hidden;
  background-color: transparent;
}
.swiper {
  width: 163px;
  height: 142px;
  background-color: transparent;

  .swiper-slide {
    //border: 2px solid yellow;
    position: relative;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    text-align: center;
    font-weight: 200px;
    font-size: 26px;

    background-color: transparent;

    background-position: center;
    background-size: cover;
    color: #02aa9e;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: transparent;
    }
  }
}
</style>
