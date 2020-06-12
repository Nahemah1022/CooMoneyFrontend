<template>
  <div class="account full">
    <div class="left">
      <!-- <font-awesome-icon icon="bars" size="sm" style="color: gray" /> -->
      <span class="pirority">{{(index+1)+". "}}</span>
      <div class="icon">
        <font-awesome-icon :icon="account.iconName" size="sm" style="color: #fff" />
      </div>
      <img class="space" src alt />
      <div class="title">
        <input v-if="isEditing" type="text" v-model="account.name" />
        <div v-else>{{account.name}}</div>
      </div>
    </div>
    <div class="right">
      <div class="cost">
        <span>$</span>
        <input v-if="isEditing" type="text" v-model="account.remain" />
        <div v-else>{{costFormat(account.remain)}}</div>
        <!-- {{costFormat(account.remain)}} -->
      </div>
      <font-awesome-icon
        :icon="isEditing ? 'check' : 'edit'"
        size="sm"
        style="color: #00c5b8"
        @click="isEditing=!isEditing"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountItem",
  data() {
    return {
      isEditing: false
    };
  },
  props: {
    index: Number,
    account: Object
  },
  methods: {
    costFormat(cost) {
      let str = cost.toString();
      let rtn =
        str.length % 3 === 0 ? "" : str.substr(0, str.length % 3) + ", ";
      for (var i = str.length % 3; i < str.length; i += 3) {
        rtn += str.substr(i, 3) + ", ";
      }
      rtn = rtn.slice(0, -2);
      return rtn;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.account {
  width: 90%;
  margin: 0 auto 2vh auto;
  display: flex;
  box-shadow: none;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  height: 3vh;
  font-size: 16px;
  transition: 0.5s;
  &.full {
    box-shadow: 0 0 10px #dadada;
    border-radius: 10px;
    padding: 8px 10px;
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    .title {
      width: 60%;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      input {
        width: 90%;
        line-height: 20px;
        font-size: 16px;
      }
    }
    img {
      width: 5vw;
    }
    .pirority {
      margin: 0 2vw;
      font-size: 24px;
    }
    .icon {
      width: 3vh;
      height: 3vh;
      background-color: #00b900;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: 0.3s;
    }
  }
  .right {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cost {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      input {
        width: 70%;
        line-height: 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
