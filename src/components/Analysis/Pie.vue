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
        :data="incomeCount"
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
    sendExpense: Array,
    sendIncome: Array,
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
    return {
      allExpense: [],
      allIncome: []
    };
  },

  computed: {
    expenseCount() {
      //console.log(this.sendExpense);
      let flag;
      if (this.selectType === "Project") flag = true;
      else if (this.selectType === "All") flag = false;
      //每次change都要初始化
      //console.log(this.selectType);
      if (flag) {
        for (let i = 0; i < expenseItem.length; ++i) expenseItem[i].money = 0;
        Object.keys(this.sendExpense).forEach(p => {
          switch (this.sendExpense[p].Classification) {
            case "Transportation":
              expenseItem[0].money += this.sendExpense[p].money;
              break;
            case "Meals":
              expenseItem[1].money += this.sendExpense[p].money;
              break;
            case "Equipment":
              expenseItem[2].money += this.sendExpense[p].money;
              break;
            case "others":
              expenseItem[3].money += this.sendExpense[p].money;
              break;
            case "Rental":
              expenseItem[4].others += this.sendExpense[p].money;
              break;
          }
        });
        return {
          columns: ["name", "money"],
          rows: expenseItem
        };
      } else {
        let count = 0;

        //每次都要初始化再去計算
        console.log(this.allExpense);
        Object.keys(this.sendExpense).forEach(p => {
          let index = this.allExpense.findIndex(
            e => e.name === this.sendExpense[p].name
          );
          if (index === -1) {
            //代表還沒有存取這個project所以要先建立一個
            this.allExpense[count] = {
              name: this.sendExpense[p].name,
              money: this.sendExpense[p].money
            };
            ++count;
          } else {
            //已經存在繼續存
            this.allExpense[index].money += this.sendExpense[p].money;
          }
        });
        return {
          columns: ["name", "money"],
          rows: this.allExpense
        };
      }
    },
    incomeCount() {
      let flag;
      if (this.selectType === "Project") flag = true;
      else if (this.selectType === "All") flag = false;
      //看室this.all 還是 project型態
      if (flag) {
        //每次change都要初始化
        for (let i = 0; i < incomeItem.length; ++i) incomeItem[i].money = 0;
        Object.keys(this.sendIncome).forEach(p => {
          switch (this.sendIncome[p].Classification) {
            case "Fees":
              incomeItem[0].money += this.sendIncome[p].money;
              break;
            case "Sponsor":
              incomeItem[1].money += this.sendIncome[p].money;
              break;
            case "Equipment":
              incomeItem[2].money += this.sendIncome[p].money;
              break;
            case "others":
              incomeItem[3].money += this.sendIncome[p].money;
              break;
            case "Rental":
              incomeItem[4].others += this.sendIncome[p].money;
              break;
          }
        });
        //console.log(incomeItem[2].money);
        return {
          columns: ["name", "money"],
          rows: incomeItem
        };
      } else {
        let count = 0;

        Object.keys(this.sendExpense).forEach(p => {
          let index = this.allIncome.findIndex(
            e => e.name === this.sendExpense[p].name
          );
          if (index === -1) {
            //代表還沒有存取這個project所以要先建立一個
            this.allIncome[count] = {
              name: this.sendExpense[p].name,
              money: this.sendExpense[p].money
            };
            ++count;
          } else {
            //已經存在繼續存
            this.allIncome[index].money += this.sendExpense[p].money;
          }
        });
        return {
          columns: ["name", "money"],
          rows: this.allIncome
        };
      }
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
  width: 93%;
  height: 98%;
  background-color: #ffffff;
  opacity: 0.5;
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
