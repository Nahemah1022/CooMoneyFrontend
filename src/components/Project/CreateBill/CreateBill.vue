<template>
  <div class="main">
    <div class="block">
      <img class="collapse" src="@/assets/image/Project/collapse.svg" @click="$emit('collapse')" />
      <div class="upper">
        <div class="type-picker">
          <label for="expense" :class="{selected: selectedIndex==1}" @click="selectedIndex=1">
            <input type="radio" name="btns" id="expense" />
            <p :class="{selectedP: selectedIndex==1}" @click="selectedIndex=1">Expense</p>
          </label>
          <label for="income" :class="{selected: selectedIndex==2}" @click="selectedIndex=2">
            <input type="radio" name="btns" id="income" />
            <p :class="{selectedP: selectedIndex==2}" @click="selectedIndex=2">Income</p>
          </label>
          <label for="transfer" :class="{selected: selectedIndex==3}" @click="selectedIndex=3">
            <input type="radio" name="btns" id="transfer" />
            <p :class="{selectedP: selectedIndex==3}" @click="selectedIndex=3">Transfer</p>
          </label>
        </div>
        <div class="cost-block">
          <div class="account">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="account in accounts" :key="account.id">
                <div class="div-cont">
                  <img :src="require(`@/assets/image/Project/${account.img}.svg`)" />
                  <img class="space" src alt />
                  {{account.name}}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="money-block">
            <div v-if="costBufferDisplay" class="buffer">
              <span>$</span>
              <p>{{costBufferDisplay}}</p>
            </div>
            <div class="cost">
              <span>$</span>
              <p>{{costFormat(money)}}</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="category-block">
          <p>Category</p>
          <div class="category-bar">
            <div
              v-for="category in categorys"
              :key="category.index"
              :for="`category_${category.index}`"
            >
              <input
                type="radio"
                name="categorys"
                :value="category.index"
                :checked="categoryIndex==category.index?'checked':''"
                :id="`category_${category.index}`"
              />
              <img
                @click="categoryIndex=category.index"
                :src="require(`@/assets/image/Project/${category.type}.svg`)"
              />
              <p>{{category.type}}</p>
            </div>
          </div>
        </div>
        <div :class="{inputBlock: true, focus: focus}">
          <div class="description">
            <datepicker
              v-model="date"
              :value="new Date(2016, 9, 16)"
              :format="'yyyy-MM-dd'"
              :placeholder="'pick a date'"
            ></datepicker>
            <img class="icon_calander" src="@/assets/image/Project/icon_calander.svg" alt />
            <input
              v-model="title"
              @focus="focus=true"
              @blur="focus=false"
              type="text"
              placeholder="Title here"
            />
          </div>
          <textarea
            @focus="focus=true"
            @blur="focus=false"
            v-model="description"
            :class="{desc: true, focus: focus}"
            placeholder="brief description"
          ></textarea>
        </div>
      </div>
      <div class="keyboard">
        <div @click="caculate('1')">1</div>
        <div @click="caculate('2')">2</div>
        <div @click="caculate('3')">3</div>
        <div @click="caculate('+')">+</div>
        <div @click="caculate('4')">4</div>
        <div @click="caculate('5')">5</div>
        <div @click="caculate('6')">6</div>
        <div @click="caculate('-')">-</div>
        <div @click="caculate('7')">7</div>
        <div @click="caculate('8')">8</div>
        <div @click="caculate('9')">9</div>
        <div @click="caculate('x')">x</div>
        <div @click="caculate(-1)">⮨</div>
        <div @click="caculate('0')">0</div>
        <div class="apply" @click="apply">Apply</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Datepicker from "vuejs-datepicker";

export default {
  name: "CreateBill",
  data() {
    return {
      selectedIndex: 1,
      money: 0,
      title: "",
      date: "",
      description: "",
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        direction: "vertical",
        height: 40,
        coverflowEffect: {
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }
      },
      categorys: [
        { index: 1, type: "purchase" },
        { index: 2, type: "print" },
        { index: 3, type: "repair" },
        { index: 4, type: "more" }
      ],
      categoryIndex: 0,
      focus: false,
      costBufferDisplay: "",
      operation: ""
    };
  },
  props: {
    projectId: {
      type: Number,
      required: true
    },
    accounts: Array
  },
  components: { Swiper, SwiperSlide, Datepicker },
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
      if (input == -1) {
        if(this.costBufferDisplay.length <= 1){
          this.costBufferDisplay = "";
          this.money = 0;
          return;
        }
        this.costBufferDisplay = this.costBufferDisplay.slice(0, -1);
      } else {
        let last = this.costBufferDisplay[this.costBufferDisplay.length - 1];
        if (
          (last == "+" || last == "x" || last == "-") &&
          (input == "+" || input == "x" || input == "-")
        ) {
          this.costBufferDisplay = this.costBufferDisplay.slice(0, -1);
        }
        this.costBufferDisplay += input;
      }
      let str = this.costBufferDisplay;
      let operand = [];
      let operator = [];
      let tempNum = "";
      for (let c of str) {
        if (c == "+" || c == "x" || c == "-") {
          operand.push(parseInt(tempNum));
          operator.push(c);
          tempNum = 0;
        } else {
          tempNum += c;
        }
      }
      operand.push(parseInt(tempNum));
      for (let index = 0; index < operator.length; index++) {
        if (operator[index] == "x" && operand[parseInt(index) + 1] !== 0) {
          operator.splice(parseInt(index), 1);
          operand[index] =
            operand[parseInt(index)] * operand[parseInt(index) + 1];
          operand.splice(parseInt(index) + 1, 1);
          index--;
        }
      }
      for (let index = 0; index < operator.length; index++) {
        if (operator[index] == "+") {
          operator.splice(parseInt(index), 1);
          operand[index] =
            operand[parseInt(index)] + operand[parseInt(index) + 1];
          operand.splice(parseInt(index) + 1, 1);
          index--;
        }
        if (operator[index] == "-") {
          operator.splice(parseInt(index), 1);
          operand[index] =
            operand[parseInt(index)] - operand[parseInt(index) + 1];
          operand.splice(parseInt(index) + 1, 1);
          index--;
        }
      }
      this.money = operand[0];
    },
    apply() {
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let d = new Date(this.date);
      this.$emit("newRevenue", {
        title: this.title,
        cost: this.money,
        categoty: this.categorys[this.categoryIndex - 1].type,
        status: "pending",
        date:
          new Date(d).getFullYear() +
          "-" +
          ("0" + (new Date(d).getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + new Date(d).getDate()).slice(-2) +
          " " +
          days[d.getDay()],
        description: this.description
      });
      this.$emit("collapse");
      this.title = "";
      this.costBufferDisplay = "";
      this.money = 0;
      this.categoryIndex = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$transition: 0.5s;
$radius: 14px;
* {
  color: #00c5b8;
  background-color: transparent;
}

.swiper {
  height: 6vh;
  width: 90%;
  background-color: white;
  box-shadow: 0 0 10px #ececec;
  border-radius: 14px;
  .swiper-slide {
    top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 6vh;
    font-size: 20px;
    .div-cont {
      min-width: 64%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        zoom: 2;
        &.space {
          width: 10%;
        }
      }
    }
  }
}
.block {
  box-sizing: border-box;
  padding-top: 1px;
  border-top: #dfdfdf dashed 3px;
  background-color: #fff;
  width: 100%;
  height: 73vh;
  position: relative;
  border-radius: 0 0 8% 8%;
  .upper {
    height: 44vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .type-picker {
      width: 80%;
      margin: 2vh auto;
      padding-right: 10vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      label {
        width: 33%;
        height: 3vh;
        border: 1px solid #00c5b8;
        font-size: 18px;
        display: flex;
        justify-content: center;
        p {
          background-color: transparent;
          &.selectedP {
            color: #fff;
          }
        }
        &:nth-child(1) {
          border-radius: $radius 0 0 $radius;
        }
        &:nth-child(3) {
          border-radius: 0 $radius $radius 0;
        }
        input[type="radio"] {
          display: none;
        }
        &.selected {
          background-color: #00c5b8;
        }
      }
    }
    .cost-block {
      width: 90%;
      margin: 0 auto;
      height: 6vh;
      padding-top: 2vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .account {
        width: 50%;
        height: 8vh;
      }
      .money-block {
        position: relative;
        .buffer {
          position: absolute;
          width: 80vw;
          top: -2vh;
          right: 0;
          display: flex;
          justify-content: flex-end;
          text-align: right;
        }
        .cost {
          display: flex;
          justify-content: space-between;
          font-size: 40px;
          margin-bottom: 3vh;
        }
      }
    }
    .inputBlock {
      width: 80vw;
      margin: 2vh auto;
      padding: 0 3px;
      position: relative;
      box-sizing: border-box;
      border: 0px #00c5b8 solid;
      transition: 0.3s;
      &.focus {
        border: 2px #00c5b8 solid;
        border-radius: 16px 16px 0 0;
      }
      .description {
        display: flex;
        justify-content: space-between;
        .icon_calander {
          position: absolute;
          left: 30%;
          top: 5px;
        }
        input {
          color: #5d5d5d;
          width: auto;
          line-height: 24px;
          padding: 0 14px;
          box-sizing: border-box;
          border: 0;
          border-bottom: 1px solid;
          text-align: center;
        }
      }
      .desc {
        color: #5d5d5d;
        width: 80vw;
        position: absolute;
        top: 3vh;
        left: -2px;
        z-index: 10;
        height: 0vh;
        border: 0px #00c5b8 solid;
        border-radius: 0;
        background-color: #fff;
        transition: 0.3s;
        box-sizing: border-box;
        &.focus {
          height: 16vh;
          padding: 5px 10px;
          border: 2px #00c5b8 solid;
          border-radius: 0 0 16px 16px;
        }
      }
    }
    .category-block {
      width: 90%;
      margin: 1vh auto;
      p {
        margin: 1vh 0;
      }
      .category-bar {
        width: 90%;
        margin: 1vh auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div {
          width: 25%;
          display: flex;
          flex-direction: column;
          align-items: center;
          input[type="radio"] {
            display: none;
            &:checked ~ img {
              border: 2px #00c5b8 solid;
            }
          }
          img {
            border-radius: 50%;
            width: 50%;
          }
        }
      }
    }
  }
  .collapse {
    position: absolute;
    top: 2%;
    right: 3%;
  }

  .keyboard {
    display: grid;
    grid-template-columns: 26% 26% 26% 22%;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 26vh;
    padding-bottom: 1vh;
    border-radius: 0 0 30px 30px;
    .apply {
      grid-column-start: 3;
      grid-column-end: 5;
      background-color: #00c5b8;
      font-size: 30px;
    }

    overflow: hidden;
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
