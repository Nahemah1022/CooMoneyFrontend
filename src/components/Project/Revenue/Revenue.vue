<template>
  <div class="submain">
    <div :class="{block: true, fullBlock: full}">
      <div :class="{header: true, fullHeader: full}">
        <span>Bills</span>
        <img
          @click="fullRevenue"
          :src="require('@/assets/image/Project/Revenue/'+ (full ? 'down' : 'option') +'.svg')"
        />
      </div>
      <div :class="{bills: true, fullBills: full}">
        <div v-for="bill in bills" :key="bill.id">
          <p class="date" v-if="showDate(full && bill.date)">{{bill.date}}</p>
          <!-- <div class="bill">
            <div>
              <img :src="require(`@/assets/image/Project/${bill.categoty}.svg`)" />
              {{bill.title}}
            </div>
            <div :class="{right: true, fullRight: full}">
              <span>$</span>
              {{costFormat(bill.cost)}}
              <span>&nbsp;</span>
              <img
                :class="{fullImg: full}"
                :src="require(`@/assets/image/Project/Revenue/${bill.status}.svg`)"
              />
            </div>
          </div>-->
          <RevenueItem
            :costTitle="bill.title"
            :category="bill.categoty"
            :cost="costFormat(bill.cost)"
            :status="bill.status"
            :fullRevenue="full"
          ></RevenueItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RevenueItem from "@/components/Project/Revenue/RevenueItem.vue";

export default {
  name: "",
  data() {
    return {
      dates: {},
      detailedBills: {}
    };
  },
  components: {
    RevenueItem
  },
  props: {
    projectId: Number,
    full: Boolean,
    bills: Array
  },
  methods: {
    fullRevenue() {
      if (!this.full) {
        for (const date in this.dates) {
          this.dates[date] = false;
        }
      }
      this.$emit("full");
    },
    costFormat(cost) {
      let str = cost.toString();
      let rtn =
        str.length % 3 === 0 ? "" : str.substr(0, str.length % 3) + ", ";
      for (var i = str.length % 3; i < str.length; i += 3) {
        rtn += str.substr(i, 3) + ", ";
      }
      rtn = rtn.slice(0, -2);
      return rtn;
    },

    showDate(date) {
      if (!this.dates[date]) {
        this.dates[date] = true;
        return date;
      } else {
        return false;
      }
    }
  },
  beforeMount() {
    for (const bill of this.bills) {
      if (this.detailedBills[bill.date] == undefined) {
        this.detailedBills[bill.date] = new Array();
        this.dates[bill.date] = false;
      }
      this.detailedBills[bill.date].push(bill);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$transition: 0.5s;
* {
  background-color: transparent;
}
.submain {
  width: 100%;
  .block {
    width: 90%;
    margin: 15px auto;
    box-shadow: 0 0 12px #e6e6e6;
    background-color: #fff;
    border-radius: 16px;
    padding: 10px 0;
    transition: $transition;
    height: 27vh;
    &.fullBlock {
      height: 90vh;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin: 0 0 2vh 0;
      padding: 0 4vw;
      font-size: 16px;
      transition: $transition;
      &.fullHeader {
        font-size: 24px;
      }
    }
    .bills {
      height: 22vh;
      width: 100%;
      overflow: scroll;
      transition: $transition;
      &.fullBills {
        height: 76vh;
      }
      .date {
        font-size: 14px;
        margin-top: 10px;
        margin-left: 12px;
      }
      // .bill {
      //   display: flex;
      //   margin: 16px auto;
      //   justify-content: space-between;
      //   align-items: center;
      //   .right {
      //     width: 16vw;
      //     display: flex;
      //     justify-content: space-between;
      //     align-items: center;
      //     transition: 0.5s;
      //     &.fullRight {
      //       width: 27vw;
      //     }
      //     img {
      //       transition: 0.5s;
      //       width: 0vw;
      //       &.fullImg {
      //         width: 10vw;
      //       }
      //     }
      //   }
      // }
    }
  }
}
</style>
