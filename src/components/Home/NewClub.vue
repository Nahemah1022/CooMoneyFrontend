<template>
  <div class="main_c">
    <img :src="require('@/assets/image/Project/cross.svg')" @click="$emit('cancel')" />
    <div class="title">建立你的社群</div>
    <div class="block">
      <div class="pair">
        <div class="topic">社群名稱</div>
        <input type="text" v-model="clubName" />
      </div>
      <div class="pair">
        <div class="topic">社群成員</div>
        <input type="text" v-model="clubMembers" />
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
      clubName: "",
      clubImage: "",
      clubMembers: "",
      uploadedFile: ""
    };
  },
  methods: {
    create() {
      this.$emit("cancel");
      console.log(this.$store.username);
      //   var bodyFormData = new FormData();
      //   bodyFormData.append("image", this.uploadedFile);
      //   axios.post("https://coomoney.herokuapp.com/api/v1/club/createClub", {
      //     clubName: this.clubName,
      //     clubImage: bodyFormData
      //   });
    },
    uploadFile(f) {
      this.uploadedFile = f.target.files[0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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
