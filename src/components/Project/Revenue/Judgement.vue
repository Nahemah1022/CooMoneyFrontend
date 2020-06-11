<template>
  <div :class="{main: true, show: show}">
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
  data() {
    return {};
  },
  props: {
    show: Boolean
  },
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
  width: 100%;
  height: 0vw;
  // border: 2px solid #000;
  border-radius: 16px;
  box-shadow: 0 0 6px #cccccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  overflow: hidden;
  transition: 0.3s;
  &.show {
    margin: 10vw 0 0 0;
    height: 25vw;
    padding: 10px;
  }
  .btns {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 30%;
    }
  }
  textarea {
    width: 90%;
    margin: 10px 0 0 0;
    padding: 2px 5px;
    height: 60%;
    border-radius: 10px;
  }
}
</style>
