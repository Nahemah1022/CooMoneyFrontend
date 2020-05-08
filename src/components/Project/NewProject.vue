<template>
  <div class="main">
    <Header :title="title" @back="$router.go(-1)"></Header>
    <div class="center">
      <ProjectItem
        class="theme"
        :large="true"
        :project="{id: this.id, title: this.projectName, theme: this.theme}"
      ></ProjectItem>
      <!-- <img class="theme" :src="require(`@/assets/image/Project/Theme_${theme}.svg`)" alt /> -->
      <div class="theme-pick">
        <p>choose cover</p>
        <div class="pick-bar">
          <label v-for="index in coverCount" :key="index" :for="`cover_${index}`">
            <input type="radio" :name="`covers`" :id="`cover_${index}`" />
            <img :src="require(`@/assets/image/Project/cover_${index}.svg`)" />
          </label>
        </div>
      </div>
      <div class="input-block">
        <input type="text" name="name" v-model="projectName" placeholder="Project's Name" />
        <input type="text" name="partners[]" placeholder="Your Partners" />
      </div>
      <div class="budget-block">
        <p>Budget</p>
        <div class="budget">
          <span>$</span>
          <input type="text" name="budget" />
          <img src="@/assets/image/Project/TWD.svg" alt />
        </div>
      </div>

      <button @click="submit">Confirm</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import ProjectItem from "@/components/Project/ProjectItem.vue";

export default {
  name: "NewProject",
  data() {
    return {
      id: undefined,
      title: "",
      theme: 6,
      projectName: "",
      partners: [],
      coverCount: 5
    };
  },
  props: {
    preProject: Object
  },
  components: {
    Header,
    ProjectItem
  },
  beforeMount() {
    if (this.preProject) {
      this.id = this.preProject.id;
      this.title = "Edit Project";
      this.projectName = this.preProject.title;
      this.theme = this.preProject.theme;
      // TODO: get budget, partners from db
    } else {
      this.title = "New Project";
    }
  },
  methods: {
    submit() {
      console.log(this.projectName);
      // TODO: submit
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.center {
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  .theme {
    width: 25vh;
    height: 36vh;
    margin: 3vh 0;
  }
  .theme-pick {
    width: 80%;
    color: #8d8d8d;
    .pick-bar {
      margin: 5% auto;
      display: flex;
      justify-content: space-around;
      width: 100%;
      input[type="radio"] {
        display: none;
        &:checked ~ img {
          border: 2px #00c5b8 solid;
        }
      }
      img {
        width: 120%;
        padding: 2px;
        border-radius: 50%;
      }
    }
  }
  .input-block {
    height: 16vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 1vh 0;
    input {
      width: 240px;
      line-height: 35px;
      border-radius: 20px;
      text-align: center;
      font-size: 16px;
      border: #00c5b8 1px solid;
    }
  }
  .budget-block {
    width: 80%;
    color: #8d8d8d;
    .budget {
      width: 100%;
      line-height: 30px;
      border: 0;
      border-bottom: #8d8d8d 1px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        border: 0;
        margin: 6px 0;
        font-size: 20px;
        text-align: center;
      }
    }
  }
  button {
    width: 240px;
    height: 35px;
    border-radius: 20px;
    border: 0;
    margin: 4vh 0;
    background: #00c5b8;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
