<template>
  <div class="main">
    <img src="@/assets/image/Header/arrow.svg" @click="$emit('back')" />
    <div class="title">{{ title }}</div>
    <img v-if="right" :src="right" @click="$emit('rightClick')" />
    <img v-else src />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true
    },
    right: {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "@/assets/css/global.scss";

.main {
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 8vh;
  .title {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 40%;
    color: #00c5b8;
    font-size: 24px;
  }
  img {
    background-color: #fff;
    width: 6%;
    margin: 5vw 8vw;
  }
}
</style>
