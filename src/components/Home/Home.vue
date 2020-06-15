<template>
  <div class="main">
    <div class="profileBlock">
      <Profile></Profile>
    </div>
    <div class="block">
      <div class="serachBarBlock">
        <SearchBar></SearchBar>
      </div>
      <div class="space" />
      <div class="clubsBlock">
        <div class="top">
          <font-awesome-icon
            :icon="clubLayout?'table':'list'"
            size="lg"
            style="color: #aeacac"
            @click="clubLayout=!clubLayout"
          />
        </div>
        <ClubPreview
          v-for="(club, index) in joinedClubs"
          :key="index"
          :club="club"
          :list="clubLayout"
        ></ClubPreview>
      </div>
      <p class="msg">{{'didn\'t join ' + (joinedClubs.length === 0 ? 'any' : 'more') + ' groups'}}</p>
      <div class="space" />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Home/Profile";
import SearchBar from "@/components/Home/SearchBar";
import ClubPreview from "@/components/Home/ClubPreview";

export default {
  name: "Home",
  components: {
    Profile,
    SearchBar,
    ClubPreview
  },
  data() {
    return {
      clubLayout: true,
      joinedClubs: [
        {
          name: "成大資訊營",
          description: "a group of fire dance NCKU",
          auth: 0,
          createDate: "2019/05/01",
          memberCount: 27
        },
        {
          name: "ICT NCKU",
          description: "a group of ICT in NCKU",
          auth: 0,
          createDate: "2020/04/22",
          memberCount: 24
        },
        {
          name: "成大火舞社",
          description: "a group of fire dance NCKU",
          auth: 1,
          createDate: "2019/09/01",
          memberCount: 38
        }
        // { name: "Pop Dance NCKU", description: "a group of pop dance NCKU" },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main {
  position: relative;
  .profileBlock {
    width: 90%;
    height: 12vh;
    margin: 3vh auto 5vh auto;
  }
  .block {
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    border-radius: 24px;
    box-shadow: 0 0 12px #cccccc;
    .serachBarBlock {
      position: absolute;
      width: 90%;
      height: 32px;
      top: 15vh;
      left: 50%;
      z-index: 10;
      transform: translateX(-50%);
    }
    .space {
      height: 3vh;
    }
    .clubsBlock {
      height: auto;
      .top {
        display: flex;
        justify-content: flex-end;
        padding: 0 5%;
      }
    }
    .msg {
      text-align: center;
      z-index: 1000;
      color: #000;
      margin: 5vh auto;
      color: #cbcbcb;
      font-size: 20px;
    }
  }
}
</style>
