<template>
  <div class="main_a">
    <Header :title="'Analysis'" @back="$router.go(-1)"></Header>
    <div id="block">
      <Option :allProjectName="allProject" @projectSubmit="projectSelect"></Option>

      <div class="example-3d">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide>
            <Expense v-bind:sendExpense="expenseSelect()"></Expense>
          </swiper-slide>
          <swiper-slide>
            <Imcome></Imcome>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <Footer :active="1"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Option from "@/components/Analysis/Option";
import Expense from "@/components/Analysis/Expense";
import Imcome from "@/components/Analysis/Imcome";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
let item1 = ["Transportation", "Rental", "Meals", "Equipment", "others"];
//let item2 = ["Rental", "Sponsor", "Fees", "Equipment", "others"];
let Outproject1 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 16
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 17
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 18
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 19
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 20
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 21
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 22
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 25
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 30
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 32
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 38
  }
];
let Outproject2 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 16
  }
];
let outProject3 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 16
  }
];
let outProject4 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 16
  }
];
let outProject5 = [
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: 16
  }
];
let expenseData = {};
export default {
  name: "Analysis",
  components: {
    Header,
    Footer,
    Option,
    Expense,
    Imcome,
    SwiperSlide,
    Swiper
  },
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: false,

        spaceBetween: 0, //slide相互距離
        initialSlide: 0, //起始頁面
        coverflowEffect: {
          //很屌的效果
          rotate: 30,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        pagination: {
          el: ".swiper-pagination"
        },

        //切換圖表特效
        on: {
          init: function() {
            let c = this.slides[this.activeIndex].children;
            c[0].style.backgroundColor = "#FFFFFF";
            //console.log(c[0]);
            c[0].style.opacity = "1";
          },
          slideChange: function() {
            //console.log(this.activeIndex); //必須用activeIndex因為event是以他為基準 //切换结束时，告诉我现在是第几个slide

            //把目前的slide變回白色

            let c1 = this.slides[this.activeIndex].children;

            c1[0].style.backgroundColor = "#FFFFFF";
            c1[0].style.opacity = "1";
            if (this.activeIndex == 0) {
              //左右弄成透明
              let cForward = this.slides[this.activeIndex + 1].children;
              cForward[0].style.backgroundColor = "#FFFFFF";
              cForward[0].style.opacity = "0.5";
            } else {
              let cBack = this.slides[this.activeIndex - 1].children;
              cBack[0].style.backgroundColor = "#FFFFFF";
              cBack[0].style.opacity = "0.5";
              //c.style.backgroundColor = '#e5e5e5';
            }
          }
        }
      },
      allProject: [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5",
        "Project 6",
        "Project 7"
      ],
      receiveProject: []
    };
  },
  methods: {
    projectSelect(project) {
      this.receiveProject = project;
      //console.log(project[0]);
    },
    expenseSelect() {
      //每次都要清空
      expenseData = {};
      for (let i = 0; i < this.receiveProject.length; ++i) {
        switch (this.receiveProject[i]) {
          case "Project 1":
            expenseData["project1"] = Outproject1;
            break;

          case "Project 2":
            expenseData["project2"] = Outproject2;
            break;
          case "Project 3":
            expenseData["project3"] = outProject3;
            break;
          case "Project 4":
            expenseData["project4"] = outProject4;
            break;
          case "Project 5":
            expenseData["project5"] = outProject5;
            break;
        }
      }

      //console.log(expenseData);
      return expenseData;
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
#block {
  background-color: #dffffe;
  height: 100vh;
  overflow: hidden;
}
.example-3d {
  width: 100%;
  height: 100%;
}
.swiper {
  height: 70vh;
  width: 100%;
  top: 100px;
  //background-color: black;
  .swiper-slide {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: bold;
    //font-size: $font-size-huge * 2;
    background-color: transparent;

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
