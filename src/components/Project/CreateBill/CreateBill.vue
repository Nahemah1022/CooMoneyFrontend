<template>
  <div class="main">
    <Header :title="title" @back="$router.push({name: 'ProjectView', params: {}})"></Header>
    <div class="block">
      <div class="type-picker">
        <label for="expense" :class="{selected: selectedIndex==1}" @click="selectedIndex=1">
          <input type="radio" name="btns" id="expense" />
          <p>Expense</p>
        </label>
        <label for="income" :class="{selected: selectedIndex==2}" @click="selectedIndex=2">
          <input type="radio" name="btns" id="income" />
          <p>Income</p>
        </label>
      </div>
      <div class="cost-block">
        <input type="text" name="title" placeholder="Bill's title" />
        <div class="cost">
          <span>$</span>
          <p>{{costFormat(money)}}</p>
        </div>
      </div>
      <div class="description">
        <textarea name="description"></textarea>
      </div>
      <div class="keyboard">
        <div v-for="item in keyboard" :key="item" @click="caculate(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "CreateBill",
  data() {
    return {
      selectedIndex: 0,
      money: 1000,
      keyboard: [
        "1",
        "2",
        "3",
        "-",
        "4",
        "5",
        "6",
        "+",
        "7",
        "8",
        "9",
        "x",
        "Back",
        "0",
        ".",
        "="
      ]
    };
  },
  components: {
    Header
  },
  props: {
    projectId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
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
    caculate(input) {
      this.money += input;
      console.log(input);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$radius: 14px;
* {
  color: #00c5b8;
}
.block {
  padding-top: 8vh;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: relative;
  .type-picker {
    width: 55%;
    margin: 3vh auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    label {
      width: 50%;
      height: 4vh;
      border: 1px solid #00c5b8;
      font-size: 20px;
      display: flex;
      justify-content: center;
      p {
        background-color: transparent;
      }
      &:nth-child(1) {
        border-radius: $radius 0 0 $radius;
      }
      &:nth-child(2) {
        border-radius: 0 $radius $radius 0;
      }
      input[type="radio"] {
        display: none;
        &:checked ~ p {
          color: #fff;
        }
      }
      &.selected {
        background-color: #00c5b8;
      }
    }
  }
  .cost-block {
    width: 82%;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input {
      width: 50%;
      line-height: 36px;
      border-radius: 20px;
      position: absolute;
      text-align: center;
      font-size: 24px;
      z-index: 5;
      left: 0;
      transition: 0.3s;
      &:focus {
        width: 100%;
        border-radius: 16px;
      }
    }
    .cost {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 36px;
    }
  }
  .description {
    width: 82%;
    margin: 2vh auto;
    textarea {
      width: 50%;
      height: 6vh;
      transition: 0.3s;
      border-radius: 16px;
      &:focus {
        width: 100%;
        height: 16vh;
      }
    }
  }
  .keyboard {
    display: grid;
    grid-template-columns: 26% 26% 26% 22%;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 36vh;
    * {
      background-color: #647895;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      border: 1px solid #4d5b70;
    }
  }
}
</style>
