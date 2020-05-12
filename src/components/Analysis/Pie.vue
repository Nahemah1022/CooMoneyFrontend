<template>
  <div id="content2">
    <div :methods="itemExpenseCount()" id="pieExpense">
      <ve-ring
        width="90%"
        height="90%"
        id="pie1"
        :backgroundColor="backgroundColor"
        :data="chartData"
        :colors="colors"
        :extend="pie1Extend"
      ></ve-ring>
      <!-- 弟二個虛圖 -->
      <!-- <ve-ring -->
      <!-- width="100%" -->
      <!-- height="100%" -->
      <!-- id="pie2" -->
      <!-- :backgroundColor="backgroundColor" -->
      <!-- :data="chartData" -->
      <!-- :colors="colors" -->
      <!-- :extend="pie2Extend" -->
      <!-- :setRadius="setRadius(100,false)" -->
      <!-- :legendVisible="false" -->
      <!-- ></ve-ring> -->
    </div>

    <div id="pieInCome"></div>
  </div>
</template>

<script>
//這裡import vue.chart
import Vue from "vue";
import VCharts from "v-charts";

Vue.use(VCharts);

//這裡用來存算好的item總和
let itemAll = [
  { name: "Transportation", money: 0 },
  { name: "Meals", money: 0 },
  { name: "Equipment", money: 0 },
  { name: "others", money: 0 },
  { name: "Rental", money: 0 }
];
export default {
  name: "pie",
  props: {
    project: Array
  },
  components: {},
  data() {
    //上層實圖

    //设置echart的详细属性(setting失效用這格)
    this.pie1Extend = {
      series: {
        dataType: "normal",
        hoverAnimation: true,
        cursor: "pointer",
        itemStyle: {
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 10
        },
        //圖示

        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,

            fontSize: "20",
            fontWeight: "bold"
          }
        },
        radius: [20, 70],
        right: "100",
        bottom: "280"
      }
    };
    this.lengend = {
      show: false
    };
    //下層虛圖
    /*this.pie2Extend = {
      series: {
        dataType: "normal",
        hoverAnimation: false,
        cursor: "pointer",

        itemStyle: {
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 10
        },
        label: {
          show: false
        },
        right: "100",
        bottom: "300"
      }
    };*/
    this.backgroundColor = "white";
    //顏色藥用v-bind設置
    this.colors = ["#97EBCE", "#FBDA99", "#FF9798", "#82FFF7", "#A6CEE3"];
    return {
      chartData: {
        columns: ["項目", "花費金錢"],
        rows: [
          { 項目: itemAll[0].name, 花費金錢: itemAll[0].money },
          { 項目: itemAll[1].name, 花費金錢: itemAll[1].money },
          { 項目: itemAll[2].name, 花費金錢: itemAll[2].money },
          { 項目: itemAll[3].name, 花費金錢: itemAll[3].money },
          { 項目: itemAll[4].name, 花費金錢: itemAll[4].money }
        ]
      }
    };
  },

  methods: {
    itemExpenseCount() {
      console.log("successful");
      Object.keys(this.project).forEach(p => {
        switch (this.project[p].Classification) {
          case "Transportation":
            itemAll[0].money += this.project[p].money;
            break;
          case "Meals":
            itemAll[1].money += this.project[p].money;
            break;
          case "Equipment":
            itemAll[2].money += this.project[p].money;
            break;
          case "others":
            itemAll[3].money += this.project[p].money;
            break;
          case "Rental":
            itemAll[4].others += this.project[p].money;
            break;
        }
      });
      //console.log(itemAll[2].money);
      this.chartData.rows = [
        { 項目: itemAll[0].name, 花費金錢: itemAll[0].money },
        { 項目: itemAll[1].name, 花費金錢: itemAll[1].money },
        { 項目: itemAll[2].name, 花費金錢: itemAll[2].money },
        { 項目: itemAll[3].name, 花費金錢: itemAll[3].money },
        { 項目: itemAll[4].name, 花費金錢: itemAll[4].money }
      ];
    }
    /*setRadius(r, flag) {
      //上層實圖
      if (flag) this.pie1Extend.series.radius = [20, r];
      //下層虛圖
      else this.pie2Extend.series.radius = [20, r];
    }*/
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 20px;
  color: #00c5b8;
  font-weight: 100px;
  background: none;
  position: relative;
  left: 30px;
  top: 10px;
}
#pieExpense {
  width: 90%;
  margin: 0 auto;
  height: 200px;
  position: relative;
  top: 20px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#pieInCome {
  display: none;
  width: 90%;
  margin: 0 auto;
  height: 200px;
  position: relative;
  top: 40px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#content2 {
  display: block;
  margin: 0 auto;
  position: relative;
  top: 50px;
  width: 90%;
  height: 480px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#pie1 {
  background-color: transparent;
  top: 10px;

  margin: 0 auto;
  position: relative;
  z-index: 2;
}
/*#pie2 {
  border: 2px solid red;
  position: relative;
  bottom: 200px;
  opacity: 0.5;
  z-index: 2;
}*/
</style>
