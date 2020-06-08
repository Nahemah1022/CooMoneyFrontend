<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div id="Expense">
      <ve-ring
        width="100%"
        height="100%"
        id="pie1"
        :backgroundColor="backgroundColor"
        :data="pieExpense()"
        :colors="colors"
        :legend="legend"
        :extend="pieExtend"
        v-if="projectNum(1)"
      ></ve-ring>
      <ve-bar :data="barExpense()" v-if="projectNum(2)"></ve-bar>
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
    sendExpense: Object
  },
  components: {},
  data() {
    return {
      pieExtend: {
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
          radius: [40, 130],
          //right: '145',
          bottom: "50"
        }
      },
      legend: {
        //type: 'scroll',
        icon: "circle",
        orient: "horizontal",
        //left: '140',
        top: "400",
        itemHeight: 30,
        itemWidth: 30
      },
      backgroundColor: "transparent",
      //顏色藥用v-bind設置
      colors: [
        "#97EBCE",
        "#FBDA99",
        "#FF9798",
        "#82FFF7",
        "#A6CEE3",
        "#C4FFFB",
        "#B2DF8A",
        "#CE90E4"
      ]
    };
  },
  methods: {
    projectNum(type) {
      console.log();
      //只有一個Project
      if (type === 1) {
        if (Object.keys(this.sendExpense).length != 1) return false;
        else return true;
      }
      //多個proejct
      else {
        if (Object.keys(this.sendExpense).length > 1) return true;
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
        let index = expenseItem.findIndex(e => e.name === name);
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
        rows: expenseItem
      };
    },
    barExpense() {
      //得到這個Project的所有名字
      let keys = Object.keys(this.sendExpense);
      let Columns = ["items"];
      for (let i = 0; i < keys.length; ++i) {
        Columns[i + 1] = keys[i];
      }
      let expenseItem = [];
      let count = 0;
      console.log(keys.length);
      for (let i = 0; i < keys.length; ++i) {
        //得到這個Project的所有支出

        let projectExpense = this.sendExpense[keys[i]];
        if (i === 0) {
          //先算第一個
          for (let j = 0; j < projectExpense.length; ++j) {
            //console.log(projectExpense.length);
            let name = projectExpense[j].Classification;
            let money = projectExpense[j].money;
            let index = expenseItem.findIndex(e => e.items === name);
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
            let index = expenseItem.findIndex(e => e.items === name);
            if (index === -1) {
              console.log("i should not in!!!");
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
      console.log(expenseItem);
      return {
        columns: Columns,
        rows: expenseItem
      };
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content2 {
  h1 {
    font-size: 19px;
    color: #00c5b8;
    font-weight: normal;
    background: none;
    position: relative;
    right: 60px;
    top: 10px;
  }
  #Expense {
    width: 100%;
    height: 90%;
    background: #ffffff;
  }

  display: block;
  margin: 0 auto;
  position: relative;
  width: 43vh;
  height: 65vh;
  background-color: #ffffff;
  opacity: 1;
  box-shadow: 0px 0px 5px #b3b2b2;
  border-radius: 22px 22px;
}
</style>
