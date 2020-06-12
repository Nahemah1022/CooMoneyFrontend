<template>
  <div class="main_a">
    <Header :title="'Analysis'" @back="$router.go(-1)"></Header>
    <div class="block">
      <Option
        @buttonSubmit="analysisType"
        @swiperSubmit="projectSelect"
        :allProjectName="allProject"
      ></Option>
      <div class="example-3d">
        <swiper ref="mySwiper" class="swiper" :options="swiperOption">
          <swiper-slide>
            <Pie
              v-bind:sendExpense="pieOutcomeSelect()"
              :selectType="SelectType"
              v-bind:sendIncome="pieIncomeSelect()"
            ></Pie>
          </swiper-slide>
          <swiper-slide>
            <Bar
              v-bind:sendExpense="BarExpenseSelect()"
              v-bind:sendIncome="BarIncomeSelect()"
              :selectType="SelectType"
            ></Bar>
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
import Pie from "@/components/Analysis/Pie";
import Bar from "@/components/Analysis/Bar";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
let item1 = ["Transportation", "Rental", "Meals", "Equipment", "others"];
let item2 = ["Rental", "Sponsor", "Fees", "Equipment", "others"];
//pie=>all

let outAll = [
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },

  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },

  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project 6",
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project 7",
    money: Math.floor(Math.random() * 1000) + 1000
  },
  {
    name: "Project 8",
    money: Math.floor(Math.random() * 1000) + 1000
  }
];
let inAll = [
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    name: "Project" + (Math.floor(Math.random() * 5) + 1).toString(),
    money: Math.floor(Math.random() * 1000) + 100
  }
];
//pie=>project bar=>project
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
let Inproject1 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 16
  }
];
let Inproject2 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 16
  }
];
let inProject3 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 16
  }
];
let inProject4 = [
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 1000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 16
  }
];
let inProject5 = [
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 1
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 2
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 3
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 4
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 5
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 6
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 7
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 8
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 9
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 10
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 11
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 12
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 13
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 14
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 15
  },
  {
    money: Math.floor(Math.random() * 5000) + 100,
    Classification: item2[Math.floor(Math.random() * item2.length)],
    month: 16
  }
];

//line=>all
let thisYearExpense = [
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  }
];
let lastYearExpense = [
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  }
];
let thisYearIncome = [
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  },
  {
    year: 2020,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 500) + 1300
  }
];
let lastYearIncome = [
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 1000) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  },
  {
    year: 2019,
    month: Math.floor(Math.random() * 12) + 1,
    money: Math.floor(Math.random() * 700) + 100
  }
];

//line
export default {
  name: "Analysis",
  components: {
    Header,
    Footer,
    Option,
    Pie,
    Swiper,
    SwiperSlide,
    Bar
  },
  data() {
    return {
      SelectType: "All",
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
      recieveProject: "Project 1",
      allProject: [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5",
        "Project 6",
        "Project 7"
      ]
    };
  },
  methods: {
    //選擇是project 還是all類型
    analysisType(flag) {
      if (flag) {
        this.SelectType = "Project";
      } else {
        this.SelectType = "All";
      }
      //console.log(flag);
    },
    pieOutcomeSelect() {
      if (this.SelectType === "All") return outAll;
      else if (this.SelectType === "Project") {
        switch (this.recieveProject) {
          case "Project 1":
            return Outproject1;

          case "Project 2":
            return Outproject2;

          case "Project 3":
            return outProject3;

          case "Project 4":
            return outProject4;

          case "Project 5":
            return outProject5;
        }
      }
    },
    pieIncomeSelect() {
      if (this.SelectType === "All") return inAll;
      else if (this.SelectType === "Project") {
        console.log(this.recieveProject);
        switch (this.recieveProject) {
          case "Project 1":
            return Inproject1;

          case "Project 2":
            return Inproject2;

          case "Project 3":
            return inProject3;

          case "Project 4":
            return inProject4;

          case "Project 5":
            return inProject5;
        }
      }
    },
    BarExpenseSelect() {
      //console.log(compareYear);
      if (this.SelectType === "All") {
        let compareYear1 = [thisYearExpense, lastYearExpense];
        return compareYear1;
      } else if (this.SelectType === "Project") {
        switch (this.recieveProject) {
          case "Project 1":
            return Outproject1;

          case "Project 2":
            return Outproject2;

          case "Project 3":
            return outProject3;

          case "Project 4":
            return outProject4;

          case "Project 5":
            return outProject5;
        }
      }
    },
    BarIncomeSelect() {
      //console.log(compareYear);
      if (this.SelectType === "All") {
        let compareYear2 = [thisYearIncome, lastYearIncome];
        return compareYear2;
      } else if (this.SelectType === "Project") {
        switch (this.recieveProject) {
          case "Project 1":
            return Inproject1;

          case "Project 2":
            return Inproject2;

          case "Project 3":
            return inProject3;

          case "Project 4":
            return inProject4;

          case "Project 5":
            return inProject5;
        }
      }
    },
    projectSelect(name) {
      name = name.trim();
      switch (name) {
        case "Project 1":
          console.log("i am in");
          this.recieveProject = "Project 1";
          break;
        case "Project 2":
          this.recieveProject = "Project 2";
          break;
        case "Project 3":
          this.recieveProject = "Project 3";
          break;
        case "Project 4":
          this.recieveProject = "Project 4";
          break;
        case "Project 5":
          this.recieveProject = "Project 5";
          break;
      }
      //console.log(this.recieveProject);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.block {
  background-color: #dffffe;
  height: 100vh;
  overflow: hidden;
}
.example-3d {
  width: 100%;
  height: 100%;
}
.swiper {
  height: 525px;
  width: 100%;
  top: 100px;

  .swiper-slide {
    display: flex;
    bottom: 10px;

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
