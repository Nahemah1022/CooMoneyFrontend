<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div id="pieExpense">
      <h2>expense</h2>
      <ve-ring
        width="90%"
        height="90%"
        id="pie1"
        :backgroundColor="backgroundColor"
        :data="expenseCount"
        :colors="colors"
        :legend="legend"
        :extend="pieExtend"
      ></ve-ring>
    </div>

    <div id="pieInCome">
      <h2>income</h2>
      <ve-ring
        width="90%"
        height="90%"
        id="pie1"
        :backgroundColor="backgroundColor"
        :data=" incomeCount"
        :colors="colors"
        :legend="legend"
        :extend="pieExtend"
      ></ve-ring>
    </div>
  </div>
</template>

<script>
//這裡import vue.chart
import Vue from "vue";
import VCharts from "v-charts";

Vue.use(VCharts);

//這裡用來存算好的item總和
let expenseItem = [
  { name: "Transportation", money: 0 },
  { name: "Meals", money: 0 },
  { name: "Equipment", money: 0 },
  { name: "others", money: 0 },
  { name: "Rental", money: 0 }
];
let incomeItem = [
  { name: "Fees", money: 0 },
  { name: "Sponsor", money: 0 },
  { name: "Equipment", money: 0 },
  { name: "others", money: 0 },
  { name: "Rental", money: 0 }
];

export default {
  name: "pie",
  props: {
    Outproject: Array,
    Inproject: Array,
    selectType: String
  },
  components: {},
  data() {
    //上層實圖

    //设置echart的详细属性(setting失效用這格)
    this.pieExtend = {
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
        right: "50",
        bottom: "280"
      }
    };
    this.legend = {
      icon: "circle",
      orient: "vertical",
      left: "150",
      top: "20"
    };

    this.backgroundColor = "white";
    //顏色藥用v-bind設置
    this.colors = ["#97EBCE", "#FBDA99", "#FF9798", "#82FFF7", "#A6CEE3"];
    return {};
  },

  methods: {},
  computed: {
    expenseCount() {
      console.log(this.selectType);
      //每次change都要初始化
      //console.log(this.selectType);
      for (let i = 0; i < expenseItem.length; ++i) expenseItem[i].money = 0;
      Object.keys(this.Outproject).forEach(p => {
        switch (this.Outproject[p].Classification) {
          case "Transportation":
            expenseItem[0].money += this.Outproject[p].money;
            break;
          case "Meals":
            expenseItem[1].money += this.Outproject[p].money;
            break;
          case "Equipment":
            expenseItem[2].money += this.Outproject[p].money;
            break;
          case "others":
            expenseItem[3].money += this.Outproject[p].money;
            break;
          case "Rental":
            expenseItem[4].others += this.Outproject[p].money;
            break;
        }
      });
      //console.log(expenseItem[2].money);
      return {
        columns: ["name", "money"],
        rows: [
          { name: expenseItem[0].name, money: expenseItem[0].money },
          { name: expenseItem[1].name, money: expenseItem[1].money },
          { name: expenseItem[2].name, money: expenseItem[2].money },
          { name: expenseItem[3].name, money: expenseItem[3].money },
          { name: expenseItem[4].name, money: expenseItem[4].money }
        ]
      };
    },
    incomeCount() {
      //每次change都要初始化
      for (let i = 0; i < incomeItem.length; ++i) incomeItem[i].money = 0;
      Object.keys(this.Inproject).forEach(p => {
        switch (this.Inproject[p].Classification) {
          case "Fees":
            incomeItem[0].money += this.Inproject[p].money;
            break;
          case "Sponsor":
            incomeItem[1].money += this.Inproject[p].money;
            break;
          case "Equipment":
            incomeItem[2].money += this.Inproject[p].money;
            break;
          case "others":
            incomeItem[3].money += this.Inproject[p].money;
            break;
          case "Rental":
            incomeItem[4].others += this.Inproject[p].money;
            break;
        }
      });
      //console.log(incomeItem[2].money);
      return {
        columns: ["name", "money"],
        rows: [
          { name: incomeItem[0].name, money: incomeItem[0].money },
          { name: incomeItem[1].name, money: incomeItem[1].money },
          { name: incomeItem[2].name, money: incomeItem[2].money },
          { name: incomeItem[3].name, money: incomeItem[3].money },
          { name: incomeItem[4].name, money: incomeItem[4].money }
        ]
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 25px;
  color: #00c5b8;
  font-weight: 100px;
  background: none;
  position: relative;
  right: 20px;
}
h2 {
  font-size: 15px;
  right: 50px;
  color: #8d8d8d;
  font-weight: 50px;
  background: none;
  position: relative;
}
#pieExpense {
  width: 90%;
  margin: 0 auto;
  height: 215px;
  position: relative;
  top: 20px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;
}
#pieInCome {
  display: block;
  width: 90%;
  margin: 0 auto;
  height: 215px;
  position: relative;
  top: 30px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;
}
#content2 {
  display: block;
  margin: 0 auto;
  position: relative;
  top: 10px;
  width: 90%;
  height: 98%;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;
}
#pie1 {
  background-color: transparent;
  top: 10px;

  margin: 0 auto;
  position: relative;
  z-index: 2;
}
</style>
