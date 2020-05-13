<template>
  <div class="main">
    <Header :title="'Analysis'" @back="$router.go(-1)"></Header>
    <Option></Option>
    <div class="example-3d">
      <swiper class="swiper" :options="swiperOption" :activeIndex="3">
        <swiper-slide>
          <Pie v-bind:Outproject="Outproject1" v-bind:Inproject="Inproject1"></Pie>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>

        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
      </swiper>
    </div>

    <Footer :active="1"></Footer>
  </div>
</template>

<script>
var project2 = [
  {
    year: 2019,
    month: 9,
    day: 28,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 9,
    day: 26,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "jason"
  },
  {
    year: 2019,
    month: 9,
    day: 23,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "dick"
  },
  {
    year: 2019,
    month: 9,
    day: 18,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 8,
    day: 19,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "jason"
  },
  {
    year: 2019,
    month: 8,
    day: 14,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "dick"
  },
  {
    year: 2019,
    month: 7,
    day: 18,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 7,
    day: 16,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "jason"
  },
  {
    year: 2019,
    month: 7,
    day: 13,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "dick"
  },
  {
    year: 2019,
    month: 5,
    day: 8,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 5,
    day: 6,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "jason"
  },
  {
    year: 2019,
    month: 5,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "dick"
  },
  {
    year: 2019,
    month: 4,
    day: 22,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: false,
    charge: "vargin"
  },
  {
    year: 2019,
    month: 4,
    day: 22,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Equipment",
    pass: false,
    charge: "helloni"
  },
  {
    year: 2019,
    month: 4,
    day: 22,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "others",
    pass: true,
    charge: "sggag"
  },
  {
    year: 2019,
    month: 4,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "qqq"
  },
  {
    year: 2019,
    month: 3,
    day: 25,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "wrqggr"
  },
  {
    year: 2019,
    month: 3,
    day: 13,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "gasgf"
  },
  {
    year: 2019,
    month: 3,
    day: 11,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "others",
    pass: true,
    charge: "hfjdfhj"
  },
  {
    year: 2019,
    month: 3,
    day: 6,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "gadg"
  },
  {
    year: 2019,
    month: 3,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 3,
    day: 1,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 3,
    day: 1,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 3,
    day: 1,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "sdgfsdfg"
  },
  {
    year: 2019,
    month: 2,
    day: 26,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 23,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Equipment",
    pass: true,
    charge: "gsdg"
  },
  {
    year: 2019,
    month: 2,
    day: 21,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 7,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 9,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: false,
    charge: "sfdgsdg"
  },
  {
    year: 2019,
    month: 2,
    day: 6,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Equipment",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 2,
    money: 690,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 1,
    money: 920,
    Classification: "Transportation",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 1,
    money: 990,
    Classification: "others",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 1,
    money: 870,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },

  {
    year: 2018,
    month: 5,
    day: 8,
    money: 320,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 5,
    day: 6,
    money: 520,
    Classification: "Transportation",
    pass: true,
    charge: "jason"
  },
  {
    year: 2018,
    month: 5,
    day: 3,
    money: 620,
    Classification: "Meals",
    pass: true,
    charge: "dick"
  },
  {
    year: 2018,
    month: 4,
    day: 22,
    money: 920,
    Classification: "Transportation",
    pass: false,
    charge: "vargin"
  },
  {
    year: 2018,
    month: 4,
    day: 22,
    money: 120,
    Classification: "Equipment",
    pass: false,
    charge: "helloni"
  },
  {
    year: 2018,
    month: 4,
    day: 22,
    money: 820,
    Classification: "others",
    pass: true,
    charge: "sggag"
  },
  {
    year: 2018,
    month: 4,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "qqq"
  },
  {
    year: 2018,
    month: 3,
    day: 25,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "wrqggr"
  },
  {
    year: 2018,
    month: 3,
    day: 13,
    money: 6720,
    Classification: "Transportation",
    pass: true,
    charge: "gasgf"
  },
  {
    year: 2018,
    month: 3,
    day: 11,
    money: 3220,
    Classification: "others",
    pass: true,
    charge: "hfjdfhj"
  },
  {
    year: 2018,
    month: 3,
    day: 6,
    money: 2220,
    Classification: "Transportation",
    pass: true,
    charge: "gadg"
  },
  {
    year: 2018,
    month: 3,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 3,
    day: 1,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 3,
    day: 1,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 3,
    day: 1,
    money: 220,
    Classification: "Transportation",
    pass: true,
    charge: "sdgfsdfg"
  },
  {
    year: 2018,
    month: 2,
    day: 26,
    money: 820,
    Classification: "Transportation",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2019,
    month: 2,
    day: 23,
    money: 520,
    Classification: "Equipment",
    pass: true,
    charge: "gsdg"
  },
  {
    year: 2018,
    month: 2,
    day: 21,
    money: 420,
    Classification: "Transportation",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 2,
    day: 7,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 2,
    day: 9,
    money: 640,
    Classification: "Transportation",
    pass: false,
    charge: "sfdgsdg"
  },
  {
    year: 2018,
    month: 2,
    day: 6,
    money: 410,
    Classification: "Equipment",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 2,
    day: 3,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Meals",
    pass: false,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 2,
    day: 2,
    money: 690,
    Classification: "Rental",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 2,
    day: 1,
    money: 920,
    Classification: "Transportation",
    pass: true,
    charge: "Amy"
  },
  {
    year: 2018,
    month: 2,
    day: 1,
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "others",
    pass: false,
    charge: "Amy"
  }
];

console.log(project2);
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Option from "@/components/Analysis/Option";
import Pie from "@/components/Analysis/Pie";

//import { Carousel3d, Slide } from 'vue-carousel-3d';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Analysis",
  components: {
    Header,
    Footer,
    Option,
    Pie,
    Swiper,
    SwiperSlide
    // Bar
  },
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
        activeIndex: 3 //当前滑块索引
      },
      Outproject1: [
        {
          year: 2019,
          month: 9,
          day: 28,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 9,
          day: 26,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Transportation",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 9,
          day: 23,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Meals",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 9,
          day: 18,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 8,
          day: 19,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Transportation",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 8,
          day: 14,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Meals",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 7,
          day: 18,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 7,
          day: 16,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Transportation",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 7,
          day: 13,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Meals",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 5,
          day: 8,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 5,
          day: 6,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Transportation",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 5,
          day: 3,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Meals",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Transportation",
          pass: false,
          charge: "vargin"
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Equipment",
          pass: false,
          charge: "helloni"
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "others",
          pass: true,
          charge: "sggag"
        },
        {
          year: 2019,
          month: 4,
          day: 3,
          money: 3200,
          Classification: "Transportation",
          pass: true,
          charge: "qqq"
        },
        {
          year: 2019,
          month: 3,
          day: 25,
          money: 1320,
          Classification: "Meals",
          pass: true,
          charge: "wrqggr"
        },
        {
          year: 2019,
          month: 3,
          day: 13,
          money: 6720,
          Classification: "Transportation",
          pass: true,
          charge: "gasgf"
        },
        {
          year: 2019,
          month: 3,
          day: 11,
          money: 3220,
          Classification: "others",
          pass: true,
          charge: "hfjdfhj"
        },
        {
          year: 2019,
          month: 3,
          day: 6,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Transportation",
          pass: true,
          charge: "gadg"
        },
        {
          year: 2019,
          month: 3,
          day: 3,
          money: 1820,
          Classification: "Meals",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 3,
          day: 1,
          money: 7720,
          Classification: "Transportation",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 3,
          day: 1,
          money: 6220,
          Classification: "Meals",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 3,
          day: 1,
          money: 220,
          Classification: "Transportation",
          pass: true,
          charge: "sdgfsdfg"
        },
        {
          year: 2019,
          month: 2,
          day: 26,
          money: 820,
          Classification: "Transportation",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 23,
          money: 520,
          Classification: "Equipment",
          pass: true,
          charge: "gsdg"
        },
        {
          year: 2019,
          month: 2,
          day: 21,
          money: 420,
          Classification: "Transportation",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 7,
          money: 4420,
          Classification: "Meals",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 9,
          money: 640,
          Classification: "Transportation",
          pass: false,
          charge: "sfdgsdg"
        },
        {
          year: 2019,
          month: 2,
          day: 6,
          money: 410,
          Classification: "Equipment",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 3,
          money: 380,
          Classification: "Meals",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 2,
          money: 690,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 1,
          money: 920,
          Classification: "Transportation",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 1,
          money: 990,
          Classification: "others",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 1,
          money: 870,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },

        {
          year: 2018,
          month: 5,
          day: 8,
          money: 320,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 5,
          day: 6,
          money: 520,
          Classification: "Transportation",
          pass: true,
          charge: "jason"
        },
        {
          year: 2018,
          month: 5,
          day: 3,
          money: 620,
          Classification: "Meals",
          pass: true,
          charge: "dick"
        },
        {
          year: 2018,
          month: 4,
          day: 22,
          money: 920,
          Classification: "Transportation",
          pass: false,
          charge: "vargin"
        },
        {
          year: 2018,
          month: 4,
          day: 22,
          money: 120,
          Classification: "Equipment",
          pass: false,
          charge: "helloni"
        },
        {
          year: 2018,
          month: 4,
          day: 22,
          money: 820,
          Classification: "others",
          pass: true,
          charge: "sggag"
        },
        {
          year: 2018,
          month: 4,
          day: 3,
          money: 3200,
          Classification: "Transportation",
          pass: true,
          charge: "qqq"
        },
        {
          year: 2018,
          month: 3,
          day: 25,
          money: 1320,
          Classification: "Meals",
          pass: true,
          charge: "wrqggr"
        },
        {
          year: 2018,
          month: 3,
          day: 13,
          money: 6720,
          Classification: "Transportation",
          pass: true,
          charge: "gasgf"
        },
        {
          year: 2018,
          month: 3,
          day: 11,
          money: 3220,
          Classification: "others",
          pass: true,
          charge: "hfjdfhj"
        },
        {
          year: 2018,
          month: 3,
          day: 6,
          money: 2220,
          Classification: "Transportation",
          pass: true,
          charge: "gadg"
        },
        {
          year: 2018,
          month: 3,
          day: 3,
          money: 1820,
          Classification: "Meals",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 3,
          day: 1,
          money: 7720,
          Classification: "Transportation",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 3,
          day: 1,
          money: 6220,
          Classification: "Meals",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 3,
          day: 1,
          money: 220,
          Classification: "Transportation",
          pass: true,
          charge: "sdgfsdfg"
        },
        {
          year: 2018,
          month: 2,
          day: 26,
          money: 820,
          Classification: "Transportation",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 23,
          money: 520,
          Classification: "Equipment",
          pass: true,
          charge: "gsdg"
        },
        {
          year: 2018,
          month: 2,
          day: 21,
          money: 420,
          Classification: "Transportation",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 7,
          money: 4420,
          Classification: "Meals",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 9,
          money: 640,
          Classification: "Transportation",
          pass: false,
          charge: "sfdgsdg"
        },
        {
          year: 2018,
          month: 2,
          day: 6,
          money: 410,
          Classification: "Equipment",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 3,
          money: 380,
          Classification: "Meals",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 2,
          money: 690,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 1,
          money: 920,
          Classification: "Transportation",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 1,
          money: 990,
          Classification: "others",
          pass: false,
          charge: "Amy"
        }
      ],
      Inproject1: [
        {
          year: 2019,

          month: 9,
          day: 28,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 9,
          day: 26,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Sponsor",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 9,
          day: 23,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Fees",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 9,
          day: 18,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 8,
          day: 19,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Sponsor",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 8,
          day: 14,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Fees",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 7,
          day: 18,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 7,
          day: 16,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Sponsor",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 7,
          day: 13,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Fees",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 5,
          day: 8,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 5,
          day: 6,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Sponsor",
          pass: true,
          charge: "jason"
        },
        {
          year: 2019,
          month: 5,
          day: 3,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Fees",
          pass: true,
          charge: "dick"
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Sponsor",
          pass: false,
          charge: "vargin"
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Equipment",
          pass: false,
          charge: "helloni"
        },
        {
          year: 2019,
          month: 4,
          day: 22,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "others",
          pass: true,
          charge: "sggag"
        },
        {
          year: 2019,
          month: 4,
          day: 3,
          money: 3200,
          Classification: "Sponsor",
          pass: true,
          charge: "qqq"
        },
        {
          year: 2019,
          month: 3,
          day: 25,
          money: 1320,
          Classification: "Fees",
          pass: true,
          charge: "wrqggr"
        },
        {
          year: 2019,
          month: 3,
          day: 13,
          money: 6720,
          Classification: "Sponsor",
          pass: true,
          charge: "gasgf"
        },
        {
          year: 2019,
          month: 3,
          day: 11,
          money: 3220,
          Classification: "others",
          pass: true,
          charge: "hfjdfhj"
        },
        {
          year: 2019,
          month: 3,
          day: 6,
          money: Math.floor(Math.random() * 1000) + 100,
          Classification: "Sponsor",
          pass: true,
          charge: "gadg"
        },
        {
          year: 2019,
          month: 3,
          day: 3,
          money: 1820,
          Classification: "Fees",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 3,
          day: 1,
          money: 7720,
          Classification: "Sponsor",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 3,
          day: 1,
          money: 6220,
          Classification: "Fees",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 3,
          day: 1,
          money: 220,
          Classification: "Sponsor",
          pass: true,
          charge: "sdgfsdfg"
        },
        {
          year: 2019,
          month: 2,
          day: 26,
          money: 820,
          Classification: "Sponsor",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 23,
          money: 520,
          Classification: "Equipment",
          pass: true,
          charge: "gsdg"
        },
        {
          year: 2019,
          month: 2,
          day: 21,
          money: 420,
          Classification: "Sponsor",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 7,
          money: 4420,
          Classification: "Fees",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 9,
          money: 640,
          Classification: "Sponsor",
          pass: false,
          charge: "sfdgsdg"
        },
        {
          year: 2019,
          month: 2,
          day: 6,
          money: 410,
          Classification: "Equipment",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 3,
          money: 380,
          Classification: "Fees",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 2,
          money: 690,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 1,
          money: 920,
          Classification: "Sponsor",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 1,
          money: 990,
          Classification: "others",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 1,
          money: 870,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },

        {
          year: 2018,
          month: 5,
          day: 8,
          money: 320,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 5,
          day: 6,
          money: 520,
          Classification: "Sponsor",
          pass: true,
          charge: "jason"
        },
        {
          year: 2018,
          month: 5,
          day: 3,
          money: 620,
          Classification: "Fees",
          pass: true,
          charge: "dick"
        },
        {
          year: 2018,
          month: 4,
          day: 22,
          money: 920,
          Classification: "Sponsor",
          pass: false,
          charge: "vargin"
        },
        {
          year: 2018,
          month: 4,
          day: 22,
          money: 120,
          Classification: "Equipment",
          pass: false,
          charge: "helloni"
        },
        {
          year: 2018,
          month: 4,
          day: 22,
          money: 820,
          Classification: "others",
          pass: true,
          charge: "sggag"
        },
        {
          year: 2018,
          month: 4,
          day: 3,
          money: 3200,
          Classification: "Sponsor",
          pass: true,
          charge: "qqq"
        },
        {
          year: 2018,
          month: 3,
          day: 25,
          money: 1320,
          Classification: "Fees",
          pass: true,
          charge: "wrqggr"
        },
        {
          year: 2018,
          month: 3,
          day: 13,
          money: 6720,
          Classification: "Sponsor",
          pass: true,
          charge: "gasgf"
        },
        {
          year: 2018,
          month: 3,
          day: 11,
          money: 3220,
          Classification: "others",
          pass: true,
          charge: "hfjdfhj"
        },
        {
          year: 2018,
          month: 3,
          day: 6,
          money: 2220,
          Classification: "Sponsor",
          pass: true,
          charge: "gadg"
        },
        {
          year: 2018,
          month: 3,
          day: 3,
          money: 1820,
          Classification: "Fees",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 3,
          day: 1,
          money: 7720,
          Classification: "Sponsor",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 3,
          day: 1,
          money: 6220,
          Classification: "Fees",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 3,
          day: 1,
          money: 220,
          Classification: "Sponsor",
          pass: true,
          charge: "sdgfsdfg"
        },
        {
          year: 2018,
          month: 2,
          day: 26,
          money: 820,
          Classification: "Sponsor",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2019,
          month: 2,
          day: 23,
          money: 520,
          Classification: "Equipment",
          pass: true,
          charge: "gsdg"
        },
        {
          year: 2018,
          month: 2,
          day: 21,
          money: 420,
          Classification: "Sponsor",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 7,
          money: 4420,
          Classification: "Fees",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 9,
          money: 640,
          Classification: "Sponsor",
          pass: false,
          charge: "sfdgsdg"
        },
        {
          year: 2018,
          month: 2,
          day: 6,
          money: 410,
          Classification: "Equipment",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 3,
          money: 380,
          Classification: "Fees",
          pass: false,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 2,
          money: 690,
          Classification: "Rental",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 1,
          money: 920,
          Classification: "Sponsor",
          pass: true,
          charge: "Amy"
        },
        {
          year: 2018,
          month: 2,
          day: 1,
          money: 990,
          Classification: "others",
          pass: false,
          charge: "Amy"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.example-3d {
  width: 95%;
  height: 450px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper {
  height: 100%;
  width: 100%;
  .swiper-slide {
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    text-align: center;
    font-weight: bold;
    //font-size: $font-size-huge * 2;
    background-color: #dffffe;

    background-position: center;
    background-size: cover;
    color: white;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: white;
    }
  }
}
</style>
