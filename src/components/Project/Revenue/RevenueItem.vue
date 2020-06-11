<template>
  <div
    :class="{bill: true, fullBill: fullRevenue, expand: fullRevenue&&expand}"
    @click="fullRevenue && !judgementShow && (expand = !expand)"
  >
    <div class="block">
      <div :class="{titleBlock: true, titleExpand: fullRevenue&&expand}">
        <!-- <img :src="require(`@/assets/image/Project/${category}.svg`)" /> -->
        <div class="icon">
          <font-awesome-icon
            :icon="getIcon(category)"
            :size="expand ? '2x' : 'sm'"
            style="color: #fff"
          />
        </div>
        <img class="space" src alt />
        <div>{{costTitle}}</div>
      </div>
      <hr />
      <div v-if="fullRevenue&&expand" class="desc">
        {{description}}
        <Judgement v-if="judgementShow" @toggle="toggle"></Judgement>
      </div>
    </div>
    <div :class="{right: true, fullRight: fullRevenue, expandRight: fullRevenue&&expand}">
      <div>
        <span>$</span>
        {{cost}}
      </div>
      <span>&nbsp;</span>
      <img
        :class="{fullImg: fullRevenue, imgRxpand: fullRevenue&&expand}"
        :src="require(`@/assets/image/Project/Revenue/${status}${fullRevenue&&expand ? '_expand' : ''}.svg`)"
        @click.stop="toggle"
      />
    </div>
  </div>
</template>

<script>
import { IconLibary } from "@/assets/js/fontawesome.js";
import Judgement from "@/components/Project/Revenue/Judgement.vue";

export default {
  name: "",
  data() {
    return {
      expand: false,
      judgementShow: false,
      IconLibary: IconLibary
    };
  },
  props: {
    costTitle: String,
    category: String,
    cost: String,
    status: String,
    description: String,
    fullRevenue: Boolean
  },
  components: {
    Judgement
  },
  methods: {
    getIcon(type) {
      return IconLibary.filter(icon => icon.type === type)[0].font.iconName;
    },
    toggle() {
      this.judgementShow = !this.judgementShow;
      this.$emit("toggle");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$transition: 0.3s;
* {
  background-color: transparent;
}
.bill {
  position: relative;
  display: flex;
  height: 3vh;
  width: 90%;
  margin: 16px auto;
  padding: 0px;
  border-radius: 0px;
  justify-content: space-between;
  align-items: flex-start;
  transition: $transition;
  &.fullBill {
    padding: 4px;
    &.expand {
      height: 20vh;
      width: 88vw;
      background-color: #f1f1f1;
      padding: 12px;
      border-radius: 16px;
    }
  }
  .block {
    width: 100%;
    hr {
      margin: 1vh auto;
    }
    .desc {
      font-size: 18px;
    }
    .titleBlock {
      width: 70%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      height: 3vh;
      font-size: 16px;
      transition: $transition;
      img {
        width: 5vw;
        transition: $transition;
      }
      .icon {
        width: 7vw;
        height: 7vw;
        background-color: #00c5b8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: 0.3s;
      }
      &.titleExpand {
        width: 100%;
        height: auto;
        font-size: 20px;
        img {
          width: 5vw;
          &:not(.space) {
            width: 16vw;
          }
        }
        .icon {
          width: 18vw;
          height: 18vw;
        }
      }
    }
  }
  .right {
    position: absolute;
    width: 16vw;
    height: 2.5vh;
    overflow: hidden;
    background-color: transparent;
    right: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    transition: $transition;
    &.fullRight {
      position: absolute;
      width: 27vw;
      &.expandRight {
        height: 7vh;
        width: 64vw;
        right: 4vw;
        font-size: 18px;
      }
    }
    img {
      transition: $transition;
      width: 0vw;
      &.fullImg {
        width: 10vw;
        &.imgRxpand {
          width: 26vw;
        }
      }
    }
  }
}
</style>
