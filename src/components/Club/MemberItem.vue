<template>
  <div class="main">
    <div class="left">
      <div class="idx">{{ idx }}</div>
      <img :src="user.headshot" alt="">
    </div>
    <div class="center">
      <div class="username">{{ user.username }}</div>
      <div class="email">{{ user.email }}</div>
    </div>
    <div class="right">
      <div v-if="user.auth===1" class="auth">管理員</div>
      <div class="date">{{ user.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberItem',
  props: {
    user: Object,
    idx: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  height: 60px;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  .left {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .idx {
      width: 15px;
      text-align: right;
    }
    img {
      width: 60px;
      height: 60px;
    }
  }
  .center {
    width: 56%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .username {
      font-weight: 700;
    }
    .email {
      color: #c4c4c4;
      font-size: 12px;
    }
  }
  .right {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    .auth {
      background-color: #fe7b44;
      color: #fff;
      margin: 5px 0;
      padding: 2px 3px;
      border-radius: 4px;
      font-size: 12px;
    }
    .date {
      color: #fe7b44;
      font-size: 14px;
    }
  }
}
</style>
