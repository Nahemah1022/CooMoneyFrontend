<template>
  <div class="main_b">
    <div class="header">
      <div class="left">
        <img :src="announce.authorHeadshot" alt="">
        <span class="name">{{ announce.author }}</span>
      </div>
      <div class="title">
        {{ announce.title }}
      </div>
      <!-- <div class="date">
        {{ announce.date }}
      </div> -->
    </div>
    <div class="content">
      {{ announce.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnnounceItem',
  props: {
    announce: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main_b {
  border: 0;
  width: 84%;
  min-height: 60px;
  margin: 40px auto;
  padding: 2px 0;
  box-sizing: border-box;
  border-radius: 16px;
  overflow-y: visible;
  box-shadow: 0 0 12px #c4c4c4;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left {
      position: relative;
      img {
        position: absolute;
        width: 60px;
        top: -36px;
        left: 5px;
      }
      .name {
        margin-left: 72px;
        font-weight: bold;
        font-size: 14px;
      }
    }
    .title {
      margin-left: 20px;
      color: #00c5b8;
      font-weight: 700;
      font-size: 20px;
    }
  }
  .content {
    width: 90%;
    margin: 10px auto;
    font-size: 14px;
  }
}
</style>
