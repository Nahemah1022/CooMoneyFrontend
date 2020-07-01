<template>
  <div class="main_c">
    <img
      :src="require('@/assets/image/Project/cross.svg')"
      @click="$emit('cancel')"
    />
    <div class="title">建立你的社群</div>
    <div class="block">
      <div class="pair">
        <div class="topic">社群名稱</div>
        <input type="text" v-model="clubName" />
      </div>
      <div class="pair">
        <div class="topic">社群成員</div>
        <div :class="{ matchBlock: true, focus: focusPartner }">
          <input
            type="text"
            @focus="focusPartner = true"
            @blur="focusPartner = false"
            @input="searchUser"
            v-model="username"
            placeholder="Your Partners"
          />
          <div class="selectedUsers">
            <img
              v-for="(user, index) in this.selectedUser"
              :key="index"
              :src="
                user.userPhoto
                  ? user.userPhoto
                  : require('@/assets/image/Home/avatar_empty.svg')
              "
              alt=""
            />
          </div>
          <MemberItem
            v-for="(user, index) in this.matchUsers"
            :key="index"
            :user="user"
            @select="selectUser"
          ></MemberItem>
        </div>
      </div>
      <div class="pair">
        <div class="topic">封面照片</div>
        <input type="file" @change="uploadFile" />
      </div>
      <div class="pair">
        <button @click="create">建立</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "NewClub",
  data() {
    return {
      username: "",
      matchUsers: [],
      selectedUser: [],
      focusPartner: false,
      clubName: "",
      clubImage: "",
      clubMembers: "",
      uploadedFile: "",
    };
  },
  methods: {
    async searchUser() {
      let response = await this.$store.dispatch(
        "getAllUserByUsername",
        this.username
      );
      this.matchUsers = response.data.data;
      console.log(this.matchUsers);
    },
    async create() {
      this.$emit("cancel");
      let clubMembers = [];
      let members = this.clubMembers.split(" ");
      if (members[0]) {
        for (let i = 0; i < members.length; i++) {
          clubMembers.push(members[i]);
        }
      }
      clubMembers = JSON.stringify(clubMembers); // 要先轉成字串
      let bodyFormData = new FormData();
      bodyFormData.append("clubImage", this.uploadedFile);
      bodyFormData.set("clubName", this.clubName);
      bodyFormData.set("clubMembers", clubMembers);
      let newClub = await this.$store.dispatch("createClub", bodyFormData);

      let imageData = new FormData();
      imageData.append("clubImage", this.uploadedFile);
      let newClubImage = await this.$store.dispatch("clubImage", imageData);
      console.log(newClub);
      console.log(newClubImage);
      // let club = await this.$store.dispatch("getClub");
      // console.log(club);
    },
    uploadFile(f) {
      this.uploadedFile = f.target.files[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main_c {
  position: absolute;
  width: 70vw;
  height: 40vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px #02aa9e solid;
  border-radius: 16px;
  background-color: #fff;
  z-index: 10;
  img {
    position: absolute;
    right: 0;
    transform: translate(20%, -20%);
    border: 1px solid #00c5b8;
    border-radius: 50%;
  }
  .title {
    color: #00c5b8;
    padding: 5px 10px;
    font-size: 20px;
  }
  .block {
    width: 90%;
    margin: 0 auto;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .pair {
      display: flex;
      width: 90%;
      flex-direction: column;
      align-items: flex-start;
      margin: 5px auto;
      .topic {
        margin: 5px 0;
        color: #8d8d8d;
        font-size: 14px;
      }
      input[type="text"] {
        width: 90%;
        margin: 0 auto;
        line-height: 28px;
        font-size: 16px;
        border: #00c5b8 1px solid;
        border-radius: 16px;
        padding: 0 10px;
      }
      input[type="file"] {
        width: 90%;
        margin: 0 auto;
        line-height: 28px;
        font-size: 16px;
        border: 0;
        border-radius: 0;
      }
      button {
        width: 80%;
        margin: 0 auto;
        line-height: 28px;
        font-size: 16px;
        border: #00c5b8 1px solid;
        border-radius: 16px;
        background-color: #00c5b8;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
</style>
