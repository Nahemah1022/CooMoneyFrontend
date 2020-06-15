<template>
  <div class="main">
    <Header
      :title="''"
      :right="require('@/assets/image/Home/avatar_empty.svg')"
      :bg="'transparent'"
      @back="$router.go(-1)"
    ></Header>
    <div
      class="upper"
      :style="{ backgroundImage: 'url(' + require('../../assets/image/Home/clubs/' + club.name.split(' ').join('_') + '.png') + ')' }"
    >
      <div class="info">
        <img
          class="avatar"
          :src="require('@/assets/image/Home/clubs/' + club.name.split(' ').join('_') + 'LOGO.png')"
        />
        <div class="space"></div>
        <h1>{{ club.name }}</h1>
      </div>
    </div>
    <div class="block">
      <div class="tabs" :style="{ top: tabIndex===-1 ? '-36px' : '-40px' }">
        <div
          class="tab"
          v-for="(tab, index) in tabs"
          :key="index"
          :style="{ height: tabIndex===index ? '40px' : '36px' }"
          @click="tabIndex=index"
        >{{ tab.name }}</div>
      </div>
      <div class="space"></div>
      <div class="intro">
        <div class="title">社群簡介</div>
        <div class="content">{{ club.intro }}</div>
      </div>
    </div>
    <Footer :active="3"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";

export default {
  name: "Club",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      club: {
        name: "成大資訊營",
        description: "a group of fire dance NCKU",
        auth: 0,
        createDate: "2019/05/01",
        memberCount: 27,
        intro:
          "\t已算不清多少個日與夜，那身影始終懸於海岬之上，任風吹日曬雨淋；飽經風雨摧殘的臉龐上，歷經滄桑的雙眸鑲嵌其中，目光開闔之間，自有黯淡金光流瀉而出－－那是神性的光輝。\n\n\t但那身影卻好似永遠看不膩，始終懸於那處，遠眺著黑海盡頭的海天一色，從日出到日落，看盡潮起潮落。\n\n\t黎明破曉、曙光乍現，萬丈金光刺破闃黑的夜，鎏金的海映著黯金的瞳，純金的世界讓人想起了奧林帕斯的金碧輝煌，在那場天地變色的諸神戰役中，他毅然決然投身奧林帕斯陣營，劍指自己的手足－－泰坦神族。"
      },
      tabs: [{ name: "簡介" }, { name: "公告" }, { name: "成員" }],
      tabIndex: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$textBorderColor: #5d5d5d;
$tabHeight: 36px;

.main {
  width: 100%;
  overflow: hidden;
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
        height: $tabHeight;
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
        margin: 2vh 0;
      }
      .content {
        white-space: pre-wrap;
        font-size: 14px;
      }
    }
  }
}
</style>
