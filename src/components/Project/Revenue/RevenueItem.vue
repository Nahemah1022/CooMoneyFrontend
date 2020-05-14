<template>
  <div
    :class="{bill: true, fullBill: fullRevenue, expand: expand}"
    @click="fullRevenue && (expand=!expand)"
  >
    <div :class="{titleBlock: true, titleExpand: expand}">
      <img :src="require(`@/assets/image/Project/${category}.svg`)" />
      <img class="space" src alt />
      <div>{{costTitle}}</div>
    </div>
    <div :class="{right: true, fullRight: fullRevenue, expandRight: expand}">
      <div>
        <span>$</span>
        {{cost}}
      </div>
      <span>&nbsp;</span>
      <img
        :class="{fullImg: fullRevenue, imgRxpand: expand}"
        :src="require(`@/assets/image/Project/Revenue/${status}${expand ? '_expand' : ''}.svg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      expand: false
    };
  },
  props: {
    costTitle: String,
    category: String,
    cost: String,
    status: String,
    fullRevenue: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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
  transition: 0.3s;
  &.fullBill {
    padding: 4px;
    &.expand {
      height: 20vh;
      width: 92%;
      background-color: #f1f1f1;
      padding: 12px;
      border-radius: 16px;
    }
  }
  .titleBlock {
    width: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 3vh;
    font-size: 16px;
    transition: 0.3s;
    img {
      width: 5vw;
      transition: 0.3s;
    }
    &.titleExpand {
      width: 100%;
      height: 20vh;
      font-size: 20px;
      img {
        width: 5vw;
        &:not(.space) {
          width: 16vw;
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
    transition: 0.3s;
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
      transition: 0.3s;
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
