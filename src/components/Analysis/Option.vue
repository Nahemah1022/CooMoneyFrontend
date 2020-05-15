<template>
  <div id="content1">
    <toggle-button
      id="setButton"
      :width="120"
      :height="50"
      :speed="1000"
      :value="value"
      :sync="false"
      :color="color"
      :font-size="fontSize"
      @change="onChangeEventHandler"
    />
    <div id="choose">
      <h1 style="top: 20px;">All</h1>
      <h2 style="top: 50px;">Project</h2>
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
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: false
        },

        pagination: {
          el: ".swiper-pagination"
        }
      },

      value: true,
      color: { checked: "#E3EDF7", unchecked: "#A6F3F3" },
      fontSize: 20
    };
  },
  methods: {
    onChangeEventHandler() {
      //false=>all true=>project
      if (this.value) {
        document.querySelector("h1").style.color = "#02AA9E";
        document.querySelector("h2").style.color = "#DBDBDB";
        this.value = false;
      } else {
        document.querySelector("h2").style.color = "#02AA9E";
        document.querySelector("h1").style.color = "#DBDBDB";

        this.value = true;
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
  font-size: 30px;
  font-weight: 500;
}

#content1 {
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 30px;
  width: 90%;
  height: 150px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 50px 50px;
}
#choose {
  position: relative;
  right: 50px;

  background-color: white;
}
#setButton {
  position: relative;
  right: 70px;
  background-color: transparent;
  transform: rotate(90deg);
}
#projectView {
  position: relative;
  right: 50px;
  width: 100%;
  height: 100%;

  background: inherit;
}
.example-3d {
  width: 95%;
  height: 70%;
  background: inherit;
}
.swiper {
  height: 100%;
  padding-bottom: 40px;
  width: 100%;
  background-color: white;
  .swiper-slide {
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    text-align: center;
    font-weight: 200px;
    font-size: 26px;

    background-color: white;

    background-position: center;
    background-size: cover;
    color: #02aa9e;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}
</style>
