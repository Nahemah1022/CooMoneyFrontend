<template>
  <div class="main_a">
    <Header :title="'Analysis'" @back="$router.go(-1)"></Header>
    <div id="block">
      <Option :allProjectName="allProject" @projectSubmit="projectSelect"></Option>

      <div class="example-3d">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide>
            <Expense
              v-bind:sendExpense="expenseSelect()"
              :sendIncome="incomeSelect()"
              @Type="isDisplay"
            ></Expense>
          </swiper-slide>
          <swiper-slide v-if="displayIncome">
            <Imcome :sendIncome="incomeSelect()"></Imcome>
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
let item2 = ["Rental", "Sponsor", "Fees", "Equipment", "others"];

//2018-2019
let outproject2 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/05"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/11"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    Classification: "Transportation",
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    Classification: "Transportation",
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/06",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/08",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/10",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/1",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/3",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/5",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/7",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/9",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/11",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/2",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/4",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/6",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/8",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/10",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/12",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2020/2",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2020/4",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2020/8",
    Classification: "Transportation"
  }
];

//2018
let outproject1 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/05"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/08"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/11"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/05"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  }
];
//2018 1~4
let outProject3 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/02"
  }
];
//2018 6~10
let outProject4 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/08"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/08"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/08"
  }
];
//only 2018 12 to 2019 1
let outProject5 = [
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item1[Math.floor(Math.random() * item1.length)],
    month: "2019/01"
  }
];

//2018-2019
let inProject2 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/05"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: "Transportation",
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/11"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    Classification: "Transportation",
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    Classification: "Transportation",
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/06",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/08",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/10",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/1",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/3",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/5",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/7",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/9",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/11",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/2",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/4",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/6",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/8",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/10",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/12",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2020/2",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2020/4",
    Classification: "Transportation"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    //Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2020/8",
    Classification: "Transportation"
  }
];
//2018
let inProject1 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/05"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/08"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/11"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/05"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  }
];
//2018 1~4
let inProject3 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/01"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/04"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/02"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/03"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/02"
  }
];
//2018 6~10
let inProject4 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/08"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/06"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/08"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/09"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/07"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/10"
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/08"
  }
];
//only 2018 12 to 2019 1
let inProject5 = [
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2018/12"
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: "2019/01"
  }
];
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
        "資 營2018",
        "資 營2019",
        "資 營2020",
        "迎 新2019",
        "資 周2020",
        "系 學會2019",
        "系 學會2020",
        "系 學會2018"
      ],
      receiveProject: [],
      displayIncome: true
    };
  },
  methods: {
    //don't show income when month type
    isDisplay(checked) {
      //表示切成Month income不要顯示
      if (checked) this.displayIncome = false;
      else this.displayIncome = true;
    },

    projectSelect(project) {
      this.receiveProject = project;
      //console.log(project[0]);
    },
    expenseSelect() {
      //每次都要清空
      let expenseData = {};
      for (let i = 0; i < this.receiveProject.length; ++i) {
        switch (this.receiveProject[i]) {
          case "資 營2018":
            expenseData["資 營2018"] = outproject1;
            break;
          case "資 營2019":
            expenseData["資 營2019"] = outproject2;
            break;
          case "資 營2020":
            expenseData["資 營2020"] = outProject3;
            break;
          case "迎 新2019":
            expenseData["迎 新2019"] = outProject4;
            break;
          case "資 周2020":
            expenseData["資 周2020"] = outProject5;
            break;
          case "系 學會2019":
            expenseData["系 學會2019"] = outProject5;
            break;
          case "系 學會2020":
            expenseData["系 學會2020"] = outProject5;
            break;
        }
      }

      //console.log(expenseData);
      return expenseData;
    },
    incomeSelect() {
      let incomeData = {};
      for (let i = 0; i < this.receiveProject.length; ++i) {
        switch (this.receiveProject[i]) {
          case "資 營2018":
            incomeData["資 營2018"] = inProject1;
            break;
          case "資 營2019":
            incomeData["資 營2019"] = inProject2;
            break;
          case "資 營2020":
            incomeData["資 營2020"] = inProject3;
            break;
          case "迎 新2019":
            incomeData["迎 新2019"] = inProject4;
            break;
          case "資 周2020":
            incomeData["資 周2020"] = inProject5;
            break;
          case "系 學會2018":
            incomeData["系 學會2018"] = inProject5;
            break;
          case "系 學會2019":
            incomeData["系 學會2019"] = inProject5;
            break;
          case "系 學會2020":
            incomeData["系 學會2020"] = inProject5;
            break;
        }
      }

      //console.log(incomeData);
      return incomeData;
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
  top: 9vh;
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
