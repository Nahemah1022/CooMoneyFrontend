<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div :methods="itemExpenseCount()" id="pieExpense">
      <h2>expense</h2>
      <ve-ring
        width="90%"
        height="90%"
        id="pie1"
        :backgroundColor="backgroundColor"
        :data="pie1Data"
        :colors="colors"
        :extend="pieExtend"
      ></ve-ring>
    </div>

    <div id="pieInCome" :methods="itemIncomeCount()">
      <h2>income</h2>
      <ve-ring
        width="90%"
        height="90%"
        id="pie1"
        :backgroundColor="backgroundColor"
        :data="pie2Data"
        :colors="colors"
        :extend="pieExtend"
      ></ve-ring>
    </div>
  </div>
</template>

<script>
//這裡import vue.chart
import Vue from 'vue';
import VCharts from 'v-charts';

Vue.use(VCharts);

//這裡用來存算好的item總和
let itemAll = [
  { name: 'Transportation', money: 0 },
  { name: 'Meals', money: 0 },
  { name: 'Equipment', money: 0 },
  { name: 'others', money: 0 },
  { name: 'Rental', money: 0 },
];
let IncomeAll = [
  { name: 'Fees', money: 0 },
  { name: 'Sponsor', money: 0 },
  { name: 'Equipment', money: 0 },
  { name: 'others', money: 0 },
  { name: 'Rental', money: 0 },
];
export default {
  name: 'pie',
  props: {
    Outproject: Array,
    Inproject: Array,
  },
  components: {},
  data() {
    //上層實圖

    //设置echart的详细属性(setting失效用這格)
    this.pieExtend = {
      series: {
        dataType: 'normal',
        hoverAnimation: true,
        cursor: 'pointer',
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10,
        },
        //圖示

        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,

            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        radius: [20, 70],
        right: '50',
        bottom: '280',
      },
    };
    this.lengend = {
      show: false,
    };

    this.backgroundColor = 'white';
    //顏色藥用v-bind設置
    this.colors = ['#97EBCE', '#FBDA99', '#FF9798', '#82FFF7', '#A6CEE3'];
    return {
      //expense
      pie1Data: {
        columns: ['項目', '花費金錢'],
        rows: [
          { 項目: itemAll[0].name, 花費金錢: itemAll[0].money },
          { 項目: itemAll[1].name, 花費金錢: itemAll[1].money },
          { 項目: itemAll[2].name, 花費金錢: itemAll[2].money },
          { 項目: itemAll[3].name, 花費金錢: itemAll[3].money },
          { 項目: itemAll[4].name, 花費金錢: itemAll[4].money },
        ],
      },
      //income
      pie2Data: {
        columns: ['項目', '花費金錢'],
        rows: [
          { 項目: IncomeAll[0].name, 花費金錢: IncomeAll[0].money },
          { 項目: IncomeAll[1].name, 花費金錢: IncomeAll[1].money },
          { 項目: IncomeAll[2].name, 花費金錢: IncomeAll[2].money },
          { 項目: IncomeAll[3].name, 花費金錢: IncomeAll[3].money },
          { 項目: IncomeAll[4].name, 花費金錢: IncomeAll[4].money },
        ],
      },
    };
  },

  methods: {
    itemExpenseCount() {
      //console.log("successful");
      Object.keys(this.Outproject).forEach((p) => {
        switch (this.Outproject[p].Classification) {
          case 'Transportation':
            itemAll[0].money += this.Outproject[p].money;
            break;
          case 'Meals':
            itemAll[1].money += this.Outproject[p].money;
            break;
          case 'Equipment':
            itemAll[2].money += this.Outproject[p].money;
            break;
          case 'others':
            itemAll[3].money += this.Outproject[p].money;
            break;
          case 'Rental':
            itemAll[4].others += this.Outproject[p].money;
            break;
        }
      });
      //console.log(itemAll[2].money);
      this.pie1Data.rows = [
        { 項目: itemAll[0].name, 花費金錢: itemAll[0].money },
        { 項目: itemAll[1].name, 花費金錢: itemAll[1].money },
        { 項目: itemAll[2].name, 花費金錢: itemAll[2].money },
        { 項目: itemAll[3].name, 花費金錢: itemAll[3].money },
        { 項目: itemAll[4].name, 花費金錢: itemAll[4].money },
      ];
    },
    itemIncomeCount() {
      Object.keys(this.Inproject).forEach((p) => {
        switch (this.Inproject[p].Classification) {
          case 'Fees':
            IncomeAll[0].money += this.Inproject[p].money;
            break;
          case 'Sponsor':
            IncomeAll[1].money += this.Inproject[p].money;
            break;
          case 'Equipment':
            IncomeAll[2].money += this.Inproject[p].money;
            break;
          case 'others':
            IncomeAll[3].money += this.Inproject[p].money;
            break;
          case 'Rental':
            IncomeAll[4].others += this.Inproject[p].money;
            break;
        }
      });
      //console.log(IncomeAll[2].money);
      this.pie2Data.rows = [
        { 項目: IncomeAll[0].name, 花費金錢: IncomeAll[0].money },
        { 項目: IncomeAll[1].name, 花費金錢: IncomeAll[1].money },
        { 項目: IncomeAll[2].name, 花費金錢: IncomeAll[2].money },
        { 項目: IncomeAll[3].name, 花費金錢: IncomeAll[3].money },
        { 項目: IncomeAll[4].name, 花費金錢: IncomeAll[4].money },
      ];
    },
  },
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
}
h2 {
  font-size: 15px;
  color: #8d8d8d;
  font-weight: 50px;
  background: none;
  position: relative;
}
#pieExpense {
  width: 90%;
  margin: 0 auto;
  height: 200px;
  position: relative;

  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#pieInCome {
  display: block;
  width: 90%;
  margin: 0 auto;
  height: 200px;
  position: relative;

  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#content2 {
  display: block;
  margin: 0 auto;
  position: relative;
  top: 10px;
  width: 90%;
  height: 100%;
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
