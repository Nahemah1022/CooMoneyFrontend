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
            <p :class="{selectedP: selectedIndex==3}" @click="selectedIndex=3">Tramsfer</p>
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
          <div class="cost">
            <span>$</span>
            <p>{{costFormat(money)}}</p>
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
        <div class="description">
          <datepicker :format="'yyyy/MM/dd'" :placeholder="'pick a date'"></datepicker>
          <img class="icon_calander" src="@/assets/image/Project/icon_calander.svg" alt />
          <input type="text" placeholder="brief description" />
        </div>
      </div>
      <div class="keyboard">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>x</div>
        <div>⮨</div>
        <div>0</div>
        <div class="apply">Apply</div>
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
      money: 1000,
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
      categoryIndex: 0
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
      this.money += input;
      console.log(input);
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
      width: 95%;
      height: 6vh;
      padding-top: 2vh;
      display: flex;
      overflow: hidden;
      justify-content: space-around;
      align-items: center;
      .account {
        width: 50%;
        height: 8vh;
      }
      .cost {
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        margin-bottom: 3vh;
      }
    }
    .description {
      width: 80vw;
      margin: 2vh auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      .icon_calander {
        position: absolute;
        left: 30%;
        top: 5px;
      }
      input {
        width: auto;
        line-height: 24px;
        padding: 0 20px;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid;
        text-align: center;
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
