<template>
  <div :class="{bill: true, expand: expand}" @click="expand=!expand">
    <div :class="{titleBlock: true, titleExpand: expand}">
      <img :src="require(`@/assets/image/Project/${category}.svg`)" />
      <img class="space" src="" alt="">
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
        :src="require(`@/assets/image/Project/Revenue/${status}.svg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      expand: false
    }
  },
  props: {
    costTitle: String,
    category: String,
    cost: String,
    status: String,
    fullRevenue: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .bill {
    display: flex;
    position: relative;
    height: 3vh;
    margin: 16px auto;
    justify-content: space-between;
    align-items: flex-start;
    transition: 0.3s;
    &.expand{
      height: 20vh;
    }
    .titleBlock{
      width: 70%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      height: 3vh;
      font-size: 16px;
      transition: 0.3s;
      img{
        width: 5vw;
        transition: 0.3s;
      }
      &.titleExpand{
        width: 100%;
        height: 20vh;
        font-size: 20px;
        img:not(.space){
          width: 16vw;
        }
      }
    }
    .right {
      position: relative;
      width: 16vw;
      height: 2.5vh;
      overflow: hidden;
      background-color: transparent;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 16px;
      transition: 0.3s;
      &.fullRight {
        position: absolute;
        width: 27vw;
        &.expandRight{
          height: 7vh;
          width: 64vw;
          font-size: 18px;
        }
      }
      img {
        transition: 0.3s;
        width: 0vw;
        &.fullImg {
          width: 10vw;
          &.imgRxpand{
            width: 20vw;
          }
        }
      }
    }
  }

</style>
