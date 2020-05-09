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
        <div v-for="bill in bills" :key="bill.id" class="bill">
          <div>
            <img :src="require(`@/assets/image/Project/${bill.categoty}.svg`)" />
            {{bill.title}}
          </div>
          <p>
            <span>$</span>
            {{costFormat(bill.cost)}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      full: false,
      bills: [
        {
          id: 1,
          title: "Equipment Purchase",
          cost: 6092,
          categoty: "repair",
          status: "accepted",
          date: "2020-04-30 Thursday"
        },
        {
          id: 2,
          title: "Software Purchase",
          cost: 2000,
          categoty: "purchase",
          status: "rejected",
          date: "2020-04-27 Monday"
        },
        {
          id: 3,
          title: "Equipment Rental",
          cost: 3000,
          categoty: "repair",
          status: "pending",
          date: "2020-04-27 Monday"
        },
        {
          id: 4,
          title: "Equipment Repair",
          cost: 1020,
          categoty: "repair",
          status: "pending",
          date: "2020-04-27 Monday"
        },
        {
          id: 5,
          title: "Equipment Repair",
          cost: 1222,
          categoty: "repair",
          status: "accepted",
          date: "2020-04-25 Saturday"
        },
        {
          id: 6,
          title: "Equipment Repair",
          cost: 4241,
          categoty: "repair",
          status: "accepted",
          date: "2020-04-25 Saturday"
        }
      ],
      detailedBills: {}
    };
  },
  props: {
    id: Number
  },
  methods: {
    fullRevenue() {
      this.full = !this.full;
      this.$emit("full");
    },
    costFormat(cost) {
      let str = cost.toString();
      let rtn = str.substr(0, str.length % 3) + ", ";
      for (var i = str.length % 3; i < str.length; i += 3) {
        rtn += str.substr(i, 3) + ", ";
      }
      rtn = rtn.slice(0, -2);
      return rtn;
    }
  },
  beforeMount() {
    for (const bill of this.bills) {
      if (this.detailedBills[bill.date] == undefined) {
        this.detailedBills[bill.date] = new Array();
      }
      this.detailedBills[bill.date].push(bill);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
* {
  background-color: transparent;
}
.submain {
  width: 100%;
  .block {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 12px #e6e6e6;
    background-color: #fff;
    border-radius: 16px;
    padding: 10px 5vw;
    transition: 0.5s;
    height: 20vh;
    &.fullBlock {
      height: 90vh;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin: 0 0 2vh 0;
      font-size: 16px;
      transition: 0.5s;
      &.fullHeader {
        font-size: 24px;
      }
    }
    .bills {
      height: 16vh;
      overflow: scroll;
      transition: 0.5s;
      &.fullBills {
        height: 100vh;
      }
      .bill {
        display: flex;
        margin: 10px auto;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
