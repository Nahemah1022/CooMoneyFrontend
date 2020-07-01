<template>
  <div class="main">
    <Header
      :title="''"
      :right="require('@/assets/image/Home/avatar_empty.svg')"
      :bg="'transparent'"
      @back="$router.go(-1)"
    ></Header>
    <div v-if="isAddingMember" class="addMember">
      <div class="header">
        Add member
        <div class="check" @click="addUser">
          <img class="check" src="@/assets/image/Project/check.svg" alt />
        </div>
        <div class="cross" @click="isAddingMember = false">
          <img class="cross" src="@/assets/image/Project/cross.svg" alt />
        </div>
      </div>
      <input type="text" v-model="addUsername" />
    </div>
    <BlurMask :show="isAddingMember"></BlurMask>
    <div
      class="upper"
      :style="{ backgroundImage: 'url(' + preClub.clubImage + ')' }"
    >
      <div class="info">
        <img
          class="avatar"
          :src="require('@/assets/image/Home/avatar_empty.svg')"
        />
        <div class="space"></div>
        <h1>{{ club.name }}</h1>
      </div>
    </div>
    <div class="block">
      <div class="tabs" :style="{ top: tabIndex === -1 ? '-32px' : '-36px' }">
        <div
          class="tab"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ selected: tabIndex === index }"
          @click="tabIndex = index"
        >
          {{ tab.name }}
        </div>
      </div>
      <div class="space"></div>
      <div v-if="tabIndex === 0" class="intro">
        <div class="title">
          <span>社群簡介</span>
          <font-awesome-icon :icon="type" @click="editIntro">
          </font-awesome-icon>
        </div>
        <textarea
          v-if="introExist"
          v-model="club.intro"
          name="intro"
          id="edit"
          cols="60"
          rows="10"
        ></textarea>
        <div class="content">{{ club.intro }}</div>
      </div>
      <!-- <textarea v-if="" name="intro" id="intro" cols="30" rows="10"></textarea> -->
      <div v-if="tabIndex === 1" class="announce">
        <AnnounceItem
          v-for="(announce, index) in club.announces"
          :key="index"
          :announce="announce"
          @deleteAnnounce="deleteAnnounce"
        ></AnnounceItem>
        <div :class="{ container: true, onFocus: announceInputing }">
          <textarea
            placeholder="撰寫公告..."
            name=""
            id="messege"
            cols="10"
            rows="5"
            v-model="inputAnnounce"
            @focus="announceInputing = true"
            @blur="announceInputing = false"
          ></textarea>
          <font-awesome-icon
            class="arrow"
            icon="location-arrow"
            size="lg"
            style="color: #00c5b8"
            @click="addAnnounce"
          >
          </font-awesome-icon>
        </div>
      </div>
      <div v-if="tabIndex === 2" class="member">
        <div class="header">
          <span>成員總數</span>
          <div class="right">
            <div @click="addMember">新增成員</div>
            <span>{{ club.members.length + "人" }}</span>
          </div>
        </div>
        <div class="memberBlock">
          <MemberItem
            v-for="(member, index) in club.members"
            :key="index"
            :idx="index + 1"
            :user="member"
          ></MemberItem>
        </div>
      </div>
    </div>
    <Footer :active="3"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import BlurMask from "@/components/common/BlurMask.vue";
import MemberItem from "@/components/Club/MemberItem.vue";
import AnnounceItem from "@/components/Club/AnnounceItem.vue";

export default {
  name: "Club",
  components: {
    Header,
    Footer,
    MemberItem,
    AnnounceItem,
    BlurMask,
  },
  data() {
    return {
      announceInputing: false,
      preClub: {},
      club: {
        intro: "",
        announces: [],
      },
      addUsername: "",
      members: [],
      tabs: [{ name: "簡介" }, { name: "公告" }, { name: "成員" }],
      tabIndex: 0,
      introExist: false,
      type: "edit",
      inputAnnounce: "",
      isAddingMember: false,
    };
  },
  beforeMount: async function() {
    this.preClub = this.$store.state.club;
    this.club.name = this.preClub.clubName;
    this.club.createDate = this.preClub.createdAt
      .substring(0, 10)
      .replace("-", "/")
      .replace("-", "/");
    this.club.intro = this.preClub.clubIntro;
    this.club.members = this.preClub.clubMembers;
    this.club.announces = this.preClub.clubAnnounce;
    // console.log(this.club.announces);
    let clubID = this.preClub._id;
    this.club.members = await this.$store.dispatch("getClubMembers", {
      clubID,
    });
    this.club.members = this.club.members.data.data;
    //console.log(this.preClub.announce);
    //console.log(await this.$store.dispatch("getAnnounce", { clubID }));
    // console.log(this.$store.state);
  },
  methods: {
    async editIntro() {
      if (this.type === "edit") {
        //console.log("hey");
        this.type = "check";
        this.introExist = true;
      } else if (this.type === "check") {
        this.type = "edit";
        this.introExist = false;
        await this.$store.dispatch("updateIntro", {
          data: { clubIntro: this.club.intro },
          params: { clubID: this.$store.state.club._id },
        });
      }
    },
    async addAnnounce() {
      let d = new Date();
      d =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
        "-" +
        (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

      let res = await this.$store.dispatch("addAnnounce", {
        data: {
          info: this.inputAnnounce,
          date: d,
        },
        params: { clubID: this.$store.state.club._id },
      });
      this.club.announces.push(
        res.data.data.clubAnnounce[res.data.data.clubAnnounce.length - 1]
      );
      console.log(this.club.announces);
    },
    async deleteAnnounce(announceID) {
      this.club.announces = this.club.announces.filter(
        (a) => a._id !== announceID
      );
    },
    addMember() {
      this.isAddingMember = true;
    },
    async addUser() {
      let response = await this.$store.dispatch("addClubMembers", {
        data: { username: this.addUsername },
        params: { clubID: this.$store.state.club._id },
      });
      console.log(response);
      this.isAddingMember = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$textBorderColor: #5d5d5d;
$tabHeight: 36px;

.main {
  width: 100%;
  overflow: hidden;
  .addMember {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70vw;
    height: 20vw;
    transform: translate(-50%, -50%);
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid #00c5b8;
    .header {
      padding-top: 7px;
      height: 30%;
      color: #00c5b8;
      font-size: 18px;
      font-weight: 700;
      .check {
        position: absolute;
        z-index: 100;
        top: 2%;
        left: 84%;
      }
      .cross {
        position: absolute;
        z-index: 100;
        top: 2%;
        left: 92%;
      }
    }
    input {
      width: 50vw;
      height: 24px;
      line-height: 24px;
      border: 1px solid #00c5b8;
      border-radius: 16px;
      padding: 5px 10px;
    }
  }
  .upper {
    position: relative;
    padding-top: 8vh;
    width: 100%;
    height: 16vh;
    opacity: 0.8;
    border: 1px solid #000;
    background-position: center;
    background-size: cover;
    .info {
      position: absolute;
      left: 2vw;
      bottom: -20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        width: 32%;
      }
      .space {
        width: 5%;
      }
      h1 {
        font-size: 36px;
        color: #fff;
        text-shadow: -1px -1px 0 $textBorderColor, 1px -1px 0 $textBorderColor,
          -1px 1px 0 $textBorderColor, 1px 1px 0 $textBorderColor;
        font-weight: 500;
      }
    }
  }
  .block {
    position: relative;
    border-radius: 16px 0 16px 16px;
    box-shadow: 0px 0px 10px #ccc;
    width: 95%;
    margin: 3.5vh auto;
    padding: 5px;
    box-sizing: border-box;
    min-height: 70vh;
    .tabs {
      position: absolute;
      right: 0;
      top: -$tabHeight;
      width: 68%;
      height: $tabHeight;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .tab {
        width: 33%;
        height: 36px;
        background-color: #fff;
        box-shadow: 0 -5px 6px rgb(238, 238, 238) inset;
        border: 1px solid #e9eaed;
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 700;
        color: #00c5b8;
        &.selected {
          height: 40px;
          background-color: #00c5b8;
          color: #fff;
          box-shadow: none;
        }
      }
    }
    .space {
      height: 1px;
    }
    .intro {
      width: 90%;
      margin: 2vh auto;
      color: #8d8d8d;
      .title {
        font-size: 26px;
        font-weight: 700;
        margin: 2vh 0;
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      #edit {
        position: relative;
        border: 0;
        width: 100%;
        height: 100%;
        font-size: 3vh;
      }
      .content {
        white-space: pre-wrap;
        font-size: 14px;
      }
    }
    .announce {
      height: 70vh;
      overflow: scroll;
      .container {
        height: 40px;
        width: 90%;
        position: fixed;
        display: flex;
        justify-content: center;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 8vh;
        transition: 0.3s;
        &.onFocus {
          height: 130px;
        }
        .arrow {
          position: absolute;
          left: 100%;
          bottom: 0;
          transform: translate(-150%, -40%);
        }
        #messege {
          width: 100%;
          height: 100%;
          padding: 6px 10px;
          box-sizing: border-box;
          font-size: 5vw;
          border-radius: 16px;
        }
      }
    }
    .member {
      height: 70vh;
      .header {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 1px solid #e4e4e4;
        .right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div {
            background-color: #dddddd;
            color: #fff;
            padding: 2px 8px;
            margin-right: -3px;
            border-radius: 16px;
          }
        }
        span,
        div {
          margin: 5px 5px 2px 10px;
          font-weight: 700;
          color: #00c5b8;
        }
      }
      .memberBlock {
        height: 60vh;
        overflow-x: hidden;
        overflow-y: scroll;
      }
    }
  }
}
</style>
