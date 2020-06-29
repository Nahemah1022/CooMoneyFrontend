<template>
  <div class="main">
    <div class="bar">
      <font-awesome-icon
        icon="bars"
        size="lg"
        style="color: #9e9e9e"
        @click="$emit('toggleList')"
      ></font-awesome-icon>
      <input
        type="text"
        placeholder="尋找在CooMoney中的社群"
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
      <img :src="require('@/assets/image/Home/avatar_empty.svg')" alt="" />
    </div>
    <div :class="{ block: true, focus: isFocus }">
      <div class="result">...沒有符合條件的社群</div>
      <div class="new" @click="$emit('newClub')">
        <img class="add" :src="require('@/assets/image/Home/add.png')" alt />
        <div class="cont">
          <div class="title">在CooMoney中建立你的社群</div>
          <div class="content">tap to create your group in 10 second</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isFocus: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
  .bar {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #9e9e9e;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 10px;
    input {
      width: 82%;
      line-height: 36px;
      padding: 0 14px;
      font-size: 20px;
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
  .block {
    width: 100%;
    position: relative;
    max-height: 0px;
    overflow: hidden;
    border: 1px #00c5b8 solid;
    background-color: #fff;
    transform: translateY(-16px);
    border-top: 0;
    z-index: 1;
    border-radius: 0 0 16px 16px;
    transition: 0.3s;
    padding: 0;
    &.focus {
      max-height: 100px;
      padding: 20px 0 6px 0;
    }
    .result {
      width: 90%;
      margin: 10px auto;
      color: #aaaaaa;
    }
    .new {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 60px;
      .add {
        width: 24%;
      }
      .cont {
        width: 70%;
        height: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .title {
          color: #676767;
          font-weight: 700;
          font-size: 18px;
        }
        .content {
          font-size: 12px;
          color: #8d8d8d;
        }
      }
    }
  }
}
</style>
