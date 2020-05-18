<template>
  <div class="main">
    <img
      @click="$router.push('/Analysis')"
      :src="require(`@/assets/image/Footer/icon_analysis${(active==1) ? '_active' : ''}.svg`)"
      alt
    />
    <img
      @click="$router.push('/Project')"
      :src="require(`@/assets/image/Footer/icon_home${(active==2) ? '_active' : ''}.svg`)"
      alt
    />
    <img
      @click="$router.push('/')"
      :src="require(`@/assets/image/Footer/icon_chat${(active==3) ? '_active' : ''}.svg`)"
      alt
    />
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    active: {
      type: Number,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 7vh;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -1px 10px #c8c8c8;
}
</style>
