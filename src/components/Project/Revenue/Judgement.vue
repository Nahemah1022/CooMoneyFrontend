<template>
  <div class="main">
    <div class="btns">
      <img
        :src="require(`@/assets/image/Project/Revenue/approved_expand.svg`)"
        @click.stop="judge(true)"
        alt
      />
      <img
        :src="require(`@/assets/image/Project/Revenue/rejected_expand.svg`)"
        @click.stop="judge(false)"
        alt
      />
    </div>
    <textarea placeholder="Write your comment here"></textarea>
  </div>
</template>

<script>
export default {
  name: "Judgement",
  methods: {
    judge(result) {
      console.log(result);
      this.$emit("toggle");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  width: 88vw;
  height: 100px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  //   border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  .btns {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 35%;
    }
  }
  textarea {
    width: 90%;
    margin: 10px 0 0 0;
    padding: 2px 5px;
    height: 70%;
    border-radius: 10px;
  }
}
</style>
