<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div id="BarExpense">
      <h2>expense</h2>
      <ve-line class="line" width="97%" height="85%" :data="chooseType(1)" :extend="lineExtend"></ve-line>
    </div>
    <div id="BarInCome">
      <h2>income</h2>
      <ve-line class="line" width="97%" height="85%" :data="chooseType(2)" :extend="lineExtend"></ve-line>
    </div>
  </div>
</template>

<script>
//這裡import vue.chart
import Vue from "vue";
import VCharts from "v-charts";

//下拉是選單
//import VueDropdown from 'vue-dynamic-dropdown';
Vue.use(VCharts);

export default {
  name: "Bar",
  props: {
    sendExpense: Array,
    sendIncome: Array,
    selectType: String
  },
  components: {},
  data() {
    //這裡調整canvas
    this.lineExtend = {
      backgroundColor: "white",
      grid: {
        x: 10,
        y: 10,
        x2: 10,
        y2: 10,
        top: 20,
        width: "95%"
      },
      xAxis: {
        axisLabel: { fontSize: 15, interval: 2 }
      },
      yAxis: {
        axisLabel: { fontSize: 12, interval: 0 }
      },
      series: {
        lineStyle: {
          type: "solid",
          width: 1
        },
        symbol: "circle",
        smooth: 0
      },

      color: ["#61dddd", "#b3b2b2"]
    };
    return {};
  },
  methods: {
    chooseType(Bar) {
      //expense
      if (Bar === 1) {
        if (this.selectType === "All") return this.monthExpenseCount;
        else return this.projectExpenseCount;
      }
      //income
      else if (Bar === 2) {
        if (this.selectType === "All") return this.monthIncomeCount;
        else return this.projectIncomeCount;
      }
    }
  },
  computed: {
    projectExpenseCount() {
      let count = 0;
      let projectMonth = [];
      for (let i = 0; i < this.sendExpense.length; ++i) {
        let index = projectMonth.findIndex(
          e => e.month === this.sendExpense[i].month
        );

        //沒有這個month創建一個
        if (index === -1) {
          projectMonth[count] = {
            month: this.sendExpense[i].month,
            This: this.sendExpense[i].money
          };
          ++count;
        }
        //已經存在加上去
        else {
          projectMonth[index].money += this.sendExpense[i].money;
        }
      }
      return {
        columns: ["month", "This"],
        rows: projectMonth
      };
    },
    projectIncomeCount() {
      let count = 0;
      let projectMonth = [];
      for (let i = 0; i < this.sendIncome.length; ++i) {
        let index = projectMonth.findIndex(
          e => e.month === this.sendIncome[i].month
        );

        //沒有這個month創建一個
        if (index === -1) {
          projectMonth[count] = {
            month: this.sendIncome[i].month,
            This: this.sendIncome[i].money
          };
          ++count;
        }
        //已經存在加上去
        else {
          projectMonth[index].money += this.sendIncome[i].money;
        }
      }
      console.log(projectMonth);
      return {
        columns: ["month", "This"],
        rows: projectMonth
      };
    },

    monthExpenseCount() {
      let thisYear = [];
      thisYear = this.sendExpense[0];
      //console.log(thisYear);
      let lastYear = [];
      lastYear = this.sendExpense[1];

      //使用前請先歸零
      let allMonth = [
        { month: "Jan", This: 0, Last: 0 },
        { month: "Feb", This: 0, Last: 0 },
        { month: "Mar", This: 0, Last: 0 },
        { month: "Apr", This: 0, Last: 0 },
        { month: "May", This: 0, Last: 0 },
        { month: "Jun", This: 0, Last: 0 },
        { month: "Jul", This: 0, Last: 0 },
        { month: "Aug", This: 0, Last: 0 },
        { month: "Sep", This: 0, Last: 0 },
        { month: "Oct", This: 0, Last: 0 },
        { month: "Nov", This: 0, Last: 0 },
        { month: "Dec", This: 0, Last: 0 }
      ];

      //console.log("hello " + allMonth[0].money);
      //this year
      for (let i = 0; i < thisYear.length; ++i) {
        switch (thisYear[i].month) {
          case 1:
            allMonth[0].This += thisYear[i].money;
            break;
          case 2:
            allMonth[1].This += thisYear[i].money;
            break;
          case 3:
            allMonth[2].This += thisYear[i].money;
            break;
          case 4:
            allMonth[3].This += thisYear[i].money;
            break;
          case 5:
            allMonth[4].This += thisYear[i].money;
            break;
          case 6:
            allMonth[5].This += thisYear[i].money;
            break;
          case 7:
            allMonth[6].This += thisYear[i].money;
            break;
          case 8:
            allMonth[7].This += thisYear[i].money;
            break;
          case 9:
            allMonth[8].This += thisYear[i].money;
            break;
          case 10:
            allMonth[9].This += thisYear[i].money;
            break;
          case 11:
            allMonth[10].This += thisYear[i].money;
            break;
          case 12:
            allMonth[11].This += thisYear[i].money;
            break;
        }
      }
      //last year
      for (let i = 0; i < lastYear.length; ++i) {
        switch (lastYear[i].month) {
          case 1:
            allMonth[0].Last += lastYear[i].money;
            break;
          case 2:
            allMonth[1].Last += lastYear[i].money;
            break;
          case 3:
            allMonth[2].Last += lastYear[i].money;
            break;
          case 4:
            allMonth[3].Last += lastYear[i].money;
            break;
          case 5:
            allMonth[4].Last += lastYear[i].money;
            break;
          case 6:
            allMonth[5].Last += lastYear[i].money;
            break;
          case 7:
            allMonth[6].Last += lastYear[i].money;
            break;
          case 8:
            allMonth[7].Last += lastYear[i].money;
            break;
          case 9:
            allMonth[8].Last += lastYear[i].money;
            break;
          case 10:
            allMonth[9].Last += lastYear[i].money;
            break;
          case 11:
            allMonth[10].Last += lastYear[i].money;
            break;
          case 12:
            allMonth[11].Last += lastYear[i].money;
            break;
        }
      }

      //console.log(allMonth);

      return {
        columns: ["month", "This", "Last"],
        rows: allMonth
      };
    },
    monthIncomeCount() {
      let thisYear = [];
      thisYear = this.sendIncome[0];
      let lastYear = [];
      lastYear = this.sendIncome[1];

      let allMonth = [
        { month: "Jan", This: 0, Last: 0 },
        { month: "Feb", This: 0, Last: 0 },
        { month: "Mar", This: 0, Last: 0 },
        { month: "Apr", This: 0, Last: 0 },
        { month: "May", This: 0, Last: 0 },
        { month: "Jun", This: 0, Last: 0 },
        { month: "Jul", This: 0, Last: 0 },
        { month: "Aug", This: 0, Last: 0 },
        { month: "Sep", This: 0, Last: 0 },
        { month: "Oct", This: 0, Last: 0 },
        { month: "Nov", This: 0, Last: 0 },
        { month: "Dec", This: 0, Last: 0 }
      ];
      //console.log("hello " + allMonth[0].money);
      //this
      for (let i = 0; i < thisYear.length; ++i) {
        switch (thisYear[i].month) {
          case 1:
            allMonth[0].This += thisYear[i].money;
            break;
          case 2:
            allMonth[1].This += thisYear[i].money;
            break;
          case 3:
            allMonth[2].This += thisYear[i].money;
            break;
          case 4:
            allMonth[3].This += thisYear[i].money;
            break;
          case 5:
            allMonth[4].This += thisYear[i].money;
            break;
          case 6:
            allMonth[5].This += thisYear[i].money;
            break;
          case 7:
            allMonth[6].This += thisYear[i].money;
            break;
          case 8:
            allMonth[7].This += thisYear[i].money;
            break;
          case 9:
            allMonth[8].This += thisYear[i].money;
            break;
          case 10:
            allMonth[9].This += thisYear[i].money;
            break;
          case 11:
            allMonth[10].This += thisYear[i].money;
            break;
          case 12:
            allMonth[11].This += thisYear[i].money;
            break;
        }
      }
      //last
      for (let i = 0; i < lastYear.length; ++i) {
        switch (lastYear[i].month) {
          case 1:
            allMonth[0].Last += lastYear[i].money;
            break;
          case 2:
            allMonth[1].Last += lastYear[i].money;
            break;
          case 3:
            allMonth[2].Last += lastYear[i].money;
            break;
          case 4:
            allMonth[3].Last += lastYear[i].money;
            break;
          case 5:
            allMonth[4].Last += lastYear[i].money;
            break;
          case 6:
            allMonth[5].Last += lastYear[i].money;
            break;
          case 7:
            allMonth[6].Last += lastYear[i].money;
            break;
          case 8:
            allMonth[7].Last += lastYear[i].money;
            break;
          case 9:
            allMonth[8].Last += lastYear[i].money;
            break;
          case 10:
            allMonth[9].Last += lastYear[i].money;
            break;
          case 11:
            allMonth[10].Last += lastYear[i].money;
            break;
          case 12:
            allMonth[11].Last += lastYear[i].money;
            break;
        }
      }

      return {
        columns: ["month", "This", "Last"],
        rows: allMonth
      };
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
#BarExpense {
  width: 90%;
  margin: 0 auto;
  height: 215px;
  position: relative;
  top: 20px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;
}
#BarInCome {
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
  box-shadow: 0px 0px 9px #b2b3b3;
  border-radius: 22px 22px;
}

//這裡調整整個圖表div
.line {
  display: flex;

  background-color: white;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
}
</style>
