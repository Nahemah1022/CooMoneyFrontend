<template>
  <div
    :class="{main: true, list: list}"
    v-bind:style="{ backgroundImage: 'url(' + require('../../assets/image/Home/clubs/' + club.name.split(' ').join('_') + '.png') + ')' }"
    @click="$router.push('/Project')"
  >
    <div class="content">
      <img
        class="avatar"
        :src="require('@/assets/image/Home/avatar_' + (club.auth===0 ? 'member' : 'owner') + '.svg')"
      />
      <p class="title">{{club.name}}</p>
      <div class="right">
        <p class="date">{{club.createDate}}</p>
        <p class="member">{{club.memberCount+'位成員'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClubPreview",
  props: {
    club: Object,
    list: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  position: relative;
  width: 92%;
  height: 22vh;
  margin: 2vh auto;
  border-radius: 8px;
  box-shadow: 0 0 12px #797878;
  background-size: cover;
  background-position: bottom;
  opacity: 0.9;
  transition: 0.3s;
  &.list {
    height: 10vh;
    background-position: center;
  }
  .content {
    width: 100%;
    height: 42px;
    background-color: #e8f0fe;
    border-radius: 0 0 8px 8px;
    box-sizing: border-box;
    position: absolute;
    padding-left: 70px;
    bottom: 0;
    display: flex;
    align-items: center;
    .title {
      width: 60%;
      font-size: 24px;
      color: rgb(56, 56, 56);
      font-weight: 600;
    }
    .right {
      width: 36%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      font-weight: 600;
      .member {
        font-size: 12px;
      }
    }
  }
  .avatar {
    position: absolute;
    width: 50px;
    left: 10px;
    bottom: 5px;
    border-radius: 50%;
    box-shadow: 0 0 12px #a1a1a1;
  }
}
</style>
