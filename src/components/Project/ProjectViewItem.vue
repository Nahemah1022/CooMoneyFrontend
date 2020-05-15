<template>
  <div class="main">
    <div class="block">
      <p class="title">{{title}}</p>
      <div class="money-block">
        <div class="first">
          <div class="money">
            <p class="text">Remaining budget</p>
            <span>$</span>
            {{costFormat(this.budget)}}
          </div>
          <img :src="require(`@/assets/image/Project/Theme_${theme}.svg`)" alt />
        </div>
        <div class="second">
          <div class="money">
            <p class="text">Monthly income</p>
            <span>$</span>
            {{costFormat(this.income)}}
          </div>
          <div class="money">
            <p class="text">Monthly expenses</p>
            <span>$</span>
            {{costFormat(this.expanse)}}
          </div>
        </div>
      </div>
      <div class="account-block">
        <div class="header">
          <p>Accounts</p>
          <img src="@/assets/image/Project/option.svg" alt />
        </div>
        <div v-for="account in accounts" :key="account.id" class="account">
          <div>
            <img :src="require(`@/assets/image/Project/${account.img}.svg`)" />
            {{account.name}}
          </div>
          <p>
            <span>$</span>
            {{costFormat(account.remain)}}
          </p>
        </div>
      </div>
      <div class="cont">
        <Revenue
          :class="{revenue: true, full: fullRevenue}"
          :projectId="projectId"
          :full="fullRevenue"
          :bills="bills"
          @full="toggleRevenue"
        ></Revenue>
      </div>
      <button :class="{add: true, fullPlus: fullRevenue}" @click="add">
        <img src="@/assets/image/Project/add.svg" />
      </button>
      <CreateBill
        :class="{create: true, show: isAdding}"
        :projectId="projectId"
        :accounts="accounts"
        @collapse="isAdding=false"
        @newRevenue="newRevenue"
      ></CreateBill>
    </div>
  </div>
</template>

<script>
import Revenue from "@/components/Project/Revenue/Revenue.vue";
import CreateBill from "@/components/Project/CreateBill/CreateBill.vue";

export default {
  name: "ProjectViewItem",
  components: {
    Revenue,
    CreateBill
  },
  data() {
    return {
      isAdding: false,
      fullRevenue: false,
      expanse: 13724,
      income: 9080,
      budget: 38092,
      notificationCount: 3,
      accounts: [
        { id: 1, name: "cash", remain: 2092, img: "cash" },
        { id: 2, name: "Sinopac", remain: 36000, img: "bank" }
      ],
      bills: [
        {
          id: 1,
          title: "Equipment Purchase",
          cost: 6092,
          categoty: "repair",
          status: "approved",
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
          status: "approved",
          date: "2020-04-25 Saturday"
        },
        {
          id: 6,
          title: "Equipment Repair",
          cost: 4241,
          categoty: "repair",
          status: "approved",
          date: "2020-04-25 Saturday"
        }
      ]
    };
  },
  props: {
    title: String,
    projectId: Number,
    theme: Number
  },
  methods: {
    add() {
      this.isAdding = !this.isAdding;
      this.fullRevenue = false;
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
    toggleRevenue() {
      this.fullRevenue = !this.fullRevenue;
    },
    newRevenue(obj) {
      console.log(obj);
      this.bills.unshift(obj);
    }
  },
  beforeMount() {
    // TODO: read expanse, income, budget, accoints from db
    // TODO: read last three's bills with title, cost, categoty, status, date from db
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$transition: 0.5s;
* {
  background-color: transparent;
}
.main {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  .block {
    height: 80vh;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    border: #fff 1px solid;
    border-radius: 22px;
    box-shadow: 0 0 12px #c8c8c8;
    color: #8d8d8d;
    .title {
      margin: 5% auto;
      font-size: 26px;
      width: 80%;
      color: #00c5b8;
    }
    .money-block {
      width: 85%;
      height: 22vh;
      margin: 0 auto;
      .first {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 15vh;
        .money {
          width: 70%;
          font-size: 42px;
          text-align: center;
          p {
            font-size: 24px;
            text-align: left;
          }
        }
        img {
          width: 24%;
        }
      }
      .second {
        display: flex;
        justify-content: space-between;
        .momny {
          width: 45%;
        }
      }
    }
    .account-block {
      width: 80%;
      margin: 15px auto;
      box-shadow: 0 0 12px #e6e6e6;
      border-radius: 16px;
      padding: 10px 5vw;
      .header {
        display: flex;
        justify-content: space-between;
        margin: 0 0 2vh 0;
      }
      .account {
        display: flex;
        margin: 10px auto;
        justify-content: space-between;
        align-items: center;
      }
    }
    .cont {
      position: relative;
      height: 50vh;
      .revenue {
        width: 90vw;
        position: absolute;
        top: -2vh;
        left: 0;
        transition: $transition;
        &.full {
          width: 110vw;
          top: -50vh;
          left: -10vw;
          height: 100vh;
        }
      }
    }
    .add {
      position: absolute;
      bottom: 3vh;
      right: 7vw;
      width: 40px;
      height: 40px;
      border: 0;
      background-color: #00c5b8;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.4s;
      &.fullPlus {
        bottom: 2vh;
        right: 1vw;
      }
    }
    .create {
      position: absolute;
      width: 100%;
      height: 80vh;
      left: 0;
      top: 110vh;
      transition: $transition;
      &.show {
        top: 8vh;
      }
    }
  }
}
</style>
