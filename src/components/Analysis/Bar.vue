<template>
  <div id="content2">
    <h1>Category comparison</h1>
    <div :methods="monthExpenseCount()" id="barExpense">
      <h2>expense</h2>
    </div>
    <div id="barInCome" :methods="monthIncomeCount()">
      <h2>income</h2>
    </div>
  </div>
</template>

<script>
//這裡import vue.chart

//這裡用來存算好的item總和
let monthExpense = [
  { Month: '1', money: 0 },
  { Month: '2', money: 0 },
  { Month: '3', money: 0 },
  { Month: '4', money: 0 },
  { Month: '5', money: 0 },
  { Month: '6', money: 0 },
  { Month: '7', money: 0 },
  { Month: '8', money: 0 },
  { Month: '9', money: 0 },
  { Month: '10', money: 0 },
  { Month: '11', money: 0 },
  { Month: '12', money: 0 },
];
let monthIncome = [
  { Month: '1', money: 0 },
  { Month: '2', money: 0 },
  { Month: '3', money: 0 },
  { Month: '4', money: 0 },
  { Month: '5', money: 0 },
  { Month: '6', money: 0 },
  { Month: '7', money: 0 },
  { Month: '8', money: 0 },
  { Month: '9', money: 0 },
  { Month: '10', money: 0 },
  { Month: '11', money: 0 },
  { Month: '12', money: 0 },
];
export default {
  name: 'pie',
  props: {
    Outproject: Array,
    Inproject: Array,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    monthExpenseCount() {
      let allYear={year:}
      Object.keys(Outproject).forEach((p) => {
        for(let i=0;i<)
      });
    },
    monthIncomeCount() {
      this.Inproject;
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
  top: 10px;
}
h2 {
  font-size: 15px;
  color: #8d8d8d;
  font-weight: 50px;
  background: none;
  position: relative;
  left: 30px;
  top: 10px;
}
#barExpense {
  width: 90%;
  margin: 0 auto;
  height: 200px;
  position: relative;
  top: 20px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#barInCome {
  display: block;
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
</style>
