<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div id="Expense">
      <ve-ring
        width="100%"
        height="100%"
        id="pie1"
        :backgroundColor="BackgroundColor"
        :data="pieExpense()"
        :colors="Colors"
        :legend="pieLegend"
        :extend="pieExtend"
        v-if="chartType(1)"
      ></ve-ring>
      <ve-bar
        class="Bar"
        :data="barExpense()"
        :extend="barExtend"
        :backgroundColor="BackgroundColor"
        :color="Colors"
        v-if="chartType(2)"
      ></ve-bar>
      <ve-line
        :data="lineExpense()"
        :extend="lineExtend"
        v-if="chartType(3)"
      ></ve-line>
      <!-- for toggle button -->
      <div class="container">
        <h2>{{ changeText() }}</h2>
        <label class="switch">
          <input type="checkbox" v-model="ischecked" @change="switchType()" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
//這裡import vue.chart
import Vue from "vue";
import VCharts from "v-charts";

Vue.use(VCharts);
export default {
  props: {
    //傳進來的project
    sendExpense: Object,
  },
  components: {},
  data() {
    return {
      //這裡調整canvas
      lineExtend: {
        backgroundColor: "white",
        grid: {
          x: 10,
          y: 10,
          x2: 10,
          y2: 10,
          top: 20,
          width: "95%",
        },
        xAxis: {
          axisLabel: { fontSize: 15, interval: 2 },
        },
        yAxis: {
          axisLabel: { fontSize: 12, interval: 0 },
        },
        series: {
          lineStyle: {
            type: "solid",
            width: 1,
          },
          symbol: "circle",
          smooth: 0,
        },

        color: ["#61dddd", "#b3b2b2"],
      },
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      pieExtend: {
        series: {
          dataType: "normal",
          hoverAnimation: true,
          cursor: "pointer",
          itemStyle: {
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowBlur: 5,
          },
          //圖示

          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,

              fontSize: "20",
              fontWeight: "bold",
            },
          },
          radius: [40, 130],
          //right: '145',
          bottom: "50",
        },
      },
      pieLegend: {
        //type: 'scroll',
        icon: "circle",
        orient: "horizontal",
        //left: '140',
        top: "350",
        itemHeight: 30,
        itemWidth: 30,
      },
      BackgroundColor: "transparent",
      //顏色藥用v-bind設置
      Colors: [
        "#97EBCE",
        "#FBDA99",
        "#FF9798",
        "#82FFF7",
        "#A6CEE3",
        "#C4FFFB",
        "#B2DF8A",
        "#CE90E4",
      ],
      barExtend: {
        grid: {
          width: 300,
          height: 330,
        },

        yAxis: {
          axisLabel: {
            fontSize: 10,
          },
        },
        legend: {
          //type: 'scroll',
          icon: "circle",
          orient: "horizontal",
          //left: 140,

          itemHeight: 20,
          itemWidth: 20,
        },
      },

      //for month or item
      ischecked: false,
    };
  },
  methods: {
    //for change month and catogory
    switchType() {
      //console.log(this.ischecked);
      //this.type = 3;
      this.$emit("Type", this.ischecked);
    },
    changeText() {
      if (this.ischecked) return "month";
      else return "category";
    },

    chartType(type) {
      //console.log();
      //只有一個Project
      if (type === 1) {
        if (Object.keys(this.sendExpense).length != 1 || this.ischecked)
          return false;
        else return true;
      }
      //多個proejct
      else if (type === 2) {
        if (Object.keys(this.sendExpense).length > 1 && !this.ischecked)
          return true;
        else return false;
      }
      //換成折線圖
      else {
        if (this.ischecked) return true;
        else return false;
      }
    },
    pieExpense() {
      let key = Object.keys(this.sendExpense);
      let projectExpense = this.sendExpense[key];
      //console.log(projectExpense);
      let count = 0;
      let expenseItem = [];
      for (let i = 0; i < projectExpense.length; ++i) {
        let name = projectExpense[i].Classification;
        let money = projectExpense[i].money;
        let index = expenseItem.findIndex((e) => e.name === name);
        //沒有這個項目
        if (index === -1) {
          expenseItem[count] = { name: name, money: money };
          ++count;
        }
        //已經有這個項目把錢加上去
        else {
          expenseItem[index].money += money;
        }
      }
      //console.log(expenseItem);
      return {
        columns: ["name", "money"],
        rows: expenseItem,
      };
    },
    barExpense() {
      console.log(this.sendExpense);
      //得到這個Project的所有名字
      let keys = Object.keys(this.sendExpense);
      let Columns = ["items"];
      for (let i = 0; i < keys.length; ++i) {
        Columns[i + 1] = keys[i];
      }
      let expenseItem = [];
      let count = 0;
      //console.log(keys.length);
      for (let i = 0; i < keys.length; ++i) {
        //得到這個Project的所有支出

        let projectExpense = this.sendExpense[keys[i]];
        if (i === 0) {
          //先算第一個
          for (let j = 0; j < projectExpense.length; ++j) {
            //console.log(projectExpense.length);
            let name = projectExpense[j].Classification;
            let money = projectExpense[j].money;
            let index = expenseItem.findIndex((e) => e.items === name);
            //沒有這個項目
            if (index === -1) {
              let key = keys[i];
              let obj = {};
              obj["items"] = name;
              obj[key] = money;
              expenseItem[count] = obj;

              ++count;
            }
            //已經有這個項目把錢加上去
            else {
              let key = keys[i];
              let obj = expenseItem[index];
              obj[key] += money;
              expenseItem[index] = obj;
            }
          }
        }

        //第二個Project繼續做下去
        else {
          for (let j = 0; j < projectExpense.length; ++j) {
            let name = projectExpense[j].Classification;
            let money = projectExpense[j].money;
            let index = expenseItem.findIndex((e) => e.items === name);
            if (index === -1) {
              //  console.log("i should not in!!!");
              let key = keys[i];
              let obj = {};
              obj["items"] = name;
              //前面也要建立這個項目(只是為0而已)
              for (let k = i; k >= 0; k--) obj[key[k]] = 0;
              obj[key] = money;

              expenseItem[count] = obj;
              ++count;
            }
            //其他project有這個項目(必須一起比較)
            else {
              //project name
              let key = keys[i];
              let obj = expenseItem[index];

              //已經有記錄過了把錢加上去
              if (key in obj) obj[key] += money;
              else obj[key] = money;

              expenseItem[index] = obj;
              //console.log(expenseItem[index]);
            }
          }
        }
      }
      //console.log(expenseItem);
      return {
        columns: Columns,
        rows: expenseItem,
      };
    },
    lineExpense() {
      /*let keys = Object.keys(this.sendExpense);
      //let projectRange = [];
      //let c1 = 0;
      console.log(this.sendExpense[keys[0]]);

      //must decide every range
      //every project
      for (let k = 0; k < keys.length; ++k) {
        let project = this.sendExpense[keys[k]];
        //every month
        for (let j = 0; j < project.length; ++j) {
          let date = project[j].month.split("/");
          //console.log(date);
          let year = date[0];
          let month = date[1];
        }
      }*/
      //add first one project months and comtinuous
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content2 {
  //flat toggle

  h1 {
    font-size: 3vh;
    color: #00c5b8;
    font-weight: normal;
    background: none;
    position: relative;
    right: 5vh;
    top: 2vh;
  }

  #Expense {
    width: 100%;
    height: 100%;
    background: transparent;
    .Bar {
      position: relative;
      top: 10%;
      //background-color: red;
    }
  }
  display: block;
  margin: 0 auto;
  position: relative;
  //bottom: 5vh;
  width: 93%;
  height: 93%;
  background-color: #ffffff;
  opacity: 1;
  box-shadow: 0px 0px 5px #b3b2b2;
  border-radius: 22px 22px;
}

.container {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 55%;
  top: 93%;
  //background-color: red;
  h2 {
    font-size: 15px;

    color: #8d8d8d;
    font-weight: normal;
    //background: blue;
    position: relative;
    //transition: 10s;
    z-index: 1;
  }
  .switch {
    input {
      display: none;
      /* transform: translateX(300px); */
    }
    input:checked + .slider:before {
      //+ is choosed the next element css
      transform: translateX(0vw);
    }

    .slider {
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #777;
        border-radius: 30vw;

        transform: translateX(-15vw);
        transition: 1s;
      }
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 30vw;
      box-shadow: 0 0 0 2px #777, 0 0 4px #777;
      cursor: pointer;
      border: 4px solid transparent;

      overflow: hidden;
    }
    position: relative;
    display: inline-block;
    width: 17vw;
    height: 8vw;

    //background-color: green;
    //margin: 8vw;
    //transform: translateY(50%);
  }
}
</style>
