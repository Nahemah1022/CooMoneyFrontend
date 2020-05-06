<template>
  <div class="main">
    <img @click="$router.push('/Analysis')" src="@/assets/image/Footer/icon_analysis.svg" alt />
    <img @click="$router.push('/Project')" src="@/assets/image/Footer/icon_home.svg" alt />
    <img @click="$router.push('/')" src="@/assets/image/Footer/icon_chat.svg" alt />
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 6vh;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -1px 10px #b3b2b2;
}
</style>
