<template>
  <div class="main">
    <input type="text" placeholder="尋找在CooMoney中的社群" />
    <img src="@/assets/image/Home/icon_search.svg" alt />
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  border-radius: 24px;
  border: 1px solid #00c5b8;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 10px;
  input {
    width: 82%;
    line-height: 26px;
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    &::placeholder {
      color: #aeacac;
    }
  }
  img {
    width: 8%;
  }
}
</style>
