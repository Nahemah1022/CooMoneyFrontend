<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div id="pieExpense">
      <h2>expense</h2>
      <ve-ring
        width="95%"
        height="95%"
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
        width="95%"
        height="95%"
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
          shadowBlur: 5
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
        radius: [20, 65],
        right: "145",
        bottom: "280"
      }
    };
    this.legend = {
      type: "scroll",

      icon: "rect",
      orient: "vertical",
      left: "140",
      top: "10",
      itemHeight: 5,
      itemWidth: 80
    };

    this.backgroundColor = "white";
    //顏色藥用v-bind設置
    this.colors = [
      "#97EBCE",
      "#FBDA99",
      "#FF9798",
      "#82FFF7",
      "#A6CEE3",
      "#C4FFFB",
      "#B2DF8A",
      "#CE90E4"
    ];
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
        let count = 0;
        let expenseItem = [];
        for (let i = 0; i < this.sendExpense.length; ++i) {
          let name = this.sendExpense[i].Classification;
          let money = this.sendExpense[i].money;
          let index = expenseItem.findIndex(e => e.name === name);
          if (index === -1) {
            expenseItem[count] = { name: name, money: money };
            ++count;
          } else {
            expenseItem[index].money += money;
          }
        }
        return {
          columns: ["name", "money"],
          rows: expenseItem
        };
      } else {
        let count = 0;

        //每次都要初始化再去計算
        //console.log(this.allExpense);
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
        let count = 0;
        let incomeItem = [];
        for (let i = 0; i < this.sendIncome.length; ++i) {
          let name = this.sendIncome[i].Classification;
          let money = this.sendIncome[i].money;
          let index = incomeItem.findIndex(e => e.name === name);
          if (index === -1) {
            incomeItem[count] = { name: name, money: money };
            ++count;
          } else {
            incomeItem[index].money += money;
          }
        }
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
  font-size: 19px;
  color: #00c5b8;
  font-weight: normal;
  background: none;
  position: relative;
  right: 60px;
  top: 10px;
}
h2 {
  font-size: 15px;
  right: 100px;
  top: 5px;
  color: #8d8d8d;
  font-weight: normal;
  background: none;
  position: relative;
  z-index: 1;
}
#pieExpense {
  width: 90%;
  margin: 0 auto;
  height: 215px;
  position: relative;
  top: 20px;
  background-color: white;
  box-shadow: 0px 0px 5px #b3b2b2;
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
  box-shadow: 0px 0px 5px #b3b2b2;
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
  box-shadow: 0px 0px 5px #b3b2b2;
  border-radius: 22px 22px;
}
#pie1 {
  background-color: transparent;
  bottom: 10px;
  left: 10px;
  margin: 0 auto;
  position: relative;
  z-index: 0;
}
</style>
