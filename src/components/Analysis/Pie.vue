<template>
  <div id="content2" >
    {{itemCount()}}
    <div id="pieExpense">
      <line-chart :chart-data="datacollection"></line-chart>
      <button @click="fillData()">Randomize</button>
    </div>
    <div id="pieInCome">
        <Highcharts :options="chartOptions"></Highcharts>
    </div>

  </div>
</template>

<script>
import LineChart from './LineChart.js'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)

export default {
  name: "Pie",
  props:{
    project: Array
  },
  components:{
    LineChart,
    Highcharts
  },
  data () {
      return {
        datacollection: null,
        chartOptions: {
        series: [{
          data: [1, 2, 3] // sample data
        }]
    }
        
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              //backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data Two',
              //backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      
      },
      itemCount(){
        console.log(this.project)
      }
    }   

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1{
  font-size: 20px;
  color:#00C5B8; 
  font-weight:100px; 
  background:none; 
  position: relative;
  left:30px;
  top:10px;
}
#pieExpense{
  width: 90%;
  margin:0 auto;
  height: 200px;
  position: relative;
  top: 20px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#pieInCome{
  
  width: 90%;
  margin:0 auto;
  height: 200px;
  position: relative;
  top: 40px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 40px 40px;
}
#content2{
    
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
