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
        <!-- version 1 -->
        <!-- <div class="money left">
          <p class="text">Expenses</p>
          <span>$</span>
          {{this.expanse}}
        </div>
        <img src="@/assets/image/Project/line.svg" alt />
        <div class="right-block">
          <div class="money">
            <p class="text">Income</p>
            <span>$</span>
            {{this.income}}
          </div>
          <div class="money">
            <p class="text">Remaining</p>
            <span>$</span>
            {{this.budget}}
          </div>
        </div>-->
      </div>
      <div class="account-block">
        <div class="header">
          <p>Account</p>
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
        <Revenue :class="{revenue: true, full: fullRevenue}" @full="toggleRevenue"></Revenue>
      </div>
      <div class="btns">
        <div :class="{notification: true, click: adding}">
          Notification of Paying
          <span>{{notificationCount}}</span>
        </div>
        <button :class="{add: true, click: adding}" @click="add">
          <img v-if="!adding" src="@/assets/image/Project/add.svg" />
          <div v-else>
            <span class="remind">Remind&nbsp;</span>
            <div class="line"></div>
            <span class="now">Paying</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Revenue from "@/components/Project/Revenue/Revenue.vue";

export default {
  name: "ProjectViewItem",
  components: {
    Revenue
  },
  data() {
    return {
      adding: false,
      fullRevenue: false,
      expanse: 13724,
      income: 9080,
      budget: 38092,
      notificationCount: 3,
      accounts: [
        { id: 1, name: "cash", remain: 2092, img: "cash" },
        { id: 2, name: "Bank Sinopac", remain: 36000, img: "bank" }
      ]
    };
  },
  props: {
    title: String,
    id: Number,
    theme: Number
  },
  methods: {
    add() {
      this.adding = !this.adding;
    },
    costFormat(cost) {
      let str = cost.toString();
      let rtn = str.substr(0, str.length % 3) + ", ";
      for (var i = str.length % 3; i < str.length; i += 3) {
        rtn += str.substr(i, 3) + ", ";
      }
      rtn = rtn.slice(0, -2);
      return rtn;
    },
    toggleRevenue() {
      this.fullRevenue = !this.fullRevenue;
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
* {
  background-color: transparent;
}
.main {
  height: 100%;
  .block {
    width: 90%;
    height: 82vh;
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
      //   img {
      //     height: 100%;
      //   }
      //   .right-block {
      //     display: flex;
      //     flex-direction: column;
      //     align-items: flex-start;
      //     justify-content: space-between;
      //     width: 30%;
      //     margin: 0 20px 0 10px;
      //   }
      //   .money {
      //     font-size: 16px;
      //     width: 100%;
      //     .text {
      //       font-size: 12px;
      //       text-align: left;
      //       margin: 6px 0;
      //     }
      //     span {
      //       margin-left: 16px;
      //     }
      //     &.left {
      //       width: 50%;
      //       font-size: 36px;
      //       span {
      //         margin-left: 4px;
      //       }
      //       .text {
      //         font-size: 24px;
      //         margin: 5px 0;
      //       }
      //     }
      //   }
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
      height: 24vh;
      .revenue {
        width: 90vw;
        position: absolute;
        top: -2vh;
        left: 0;
        transition: 0.5s;
        &.full {
          width: 110vw;
          top: -50vh;
          left: -10vw;
          height: 100vh;
        }
      }
    }
    .btns {
      display: flex;
      width: 90%;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      .add {
        width: 50px;
        height: 50px;
        border: 0;
        background-color: #00c5b8;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        &.click {
          width: 55%;
        }
        div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          .line {
            height: 50px;
            margin: 0 5px;
            border: 1.5px #fff solid;
          }
          span {
            color: #fff;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .notification {
        width: 66%;
        height: 7vh;
        padding: 0 20px;
        border-radius: 40px;
        box-shadow: 0 0 12px #e6e6e6;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.4s;
        &.click {
          width: 35%;
        }
        span {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          color: #fff;
          background-color: #00c5b8;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
