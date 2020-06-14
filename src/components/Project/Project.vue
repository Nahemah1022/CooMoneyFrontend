<template>
  <div class="main">
    <Header
      :title="'All Project'"
      :right="require('@/assets/image/Project/icon_edit.svg')"
      @back="toNew ? toNew = false : $router.go(-1)"
      @rightClick="editStart"
    ></Header>
    <NewProject v-if="toNew" :preProject="targetProject" @newProject="newProject"></NewProject>
    <div v-else class="project-container">
      <ProjectItem
        v-for="index in projects.length"
        :key="index"
        :project="projects[index-1]"
        :isEditing="isEditing"
        @enter="enterProject"
        @edit="editProject"
        @delete="deleteProject"
      ></ProjectItem>
      <div @click="toNewFunc" class="new">
        <img src="@/assets/image/Project/Theme_new.svg" alt />
      </div>
    </div>
    <Footer v-if="!toNew" :active="2"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import ProjectItem from "@/components/Project/ProjectItem.vue";
import NewProject from "@/components/Project/NewProject.vue";

export default {
  name: "Project",
  data() {
    return {
      isEditing: false,
      nullProject: {
        id: 0,
        title: "New Project",
        theme: 6,
        budget: 0,
        expanse: 0,
        income: 0
      },
      targetProject: null,
      toNew: false,
      projects: [
        {
          id: 1,
          title: "Orientation Party",
          theme: 1,
          budget: 38092,
          expanse: 13724,
          income: 9080
        },
        {
          id: 2,
          title: "Public Performance",
          theme: 2,
          budget: 15641,
          expanse: 556,
          income: 0
        },
        {
          id: 3,
          title: "Group Activity",
          theme: 3,
          budget: 1226,
          expanse: 151,
          income: 0
        },
        {
          id: 4,
          title: "Anniversary Activity",
          theme: 4,
          budget: 30000,
          expanse: 0,
          income: 0
        },
        {
          id: 5,
          title: "Daily Expenses",
          theme: 5,
          budget: 9700,
          expanse: 300,
          income: 0
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    ProjectItem,
    NewProject
  },
  methods: {
    editStart() {
      this.isEditing = !this.isEditing;
    },
    toNewFunc() {
      this.toNew = true;
      this.targetProject = this.nullProject;
    },
    newProject(obj) {
      obj.id = this.projects.length + 1;
      obj.expanse = 0;
      obj.income = 0;
      obj.theme = 6;
      this.projects.push(obj);
      this.toNew = false;
      this.enterProject(this.projects[this.projects.length - 1]);
    },
    editProject(project) {
      this.targetProject = project;
      this.toNew = true;
      // this.$router.push({
      //   name: "NewProject",
      //   params: { preProject: project }
      // });
    },
    enterProject(project) {
      this.$router.push({
        name: "ProjectView",
        params: {
          projects: this.projects,
          default: this.projects.indexOf(project)
        }
      });
    },
    deleteProject(id, title) {
      if (
        confirm(
          `Sure to delete project ${title}?\nThis action is not reversable!`
        )
      ) {
        this.projects = this.projects.filter(project => project.id !== id);
        // TODO: also delete it in db
      }
      this.isEditing = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.project-container {
  padding-top: 8vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 86%;
  margin: 0 auto;
  .new {
    position: relative;
    width: 120px;
    height: 173px;
    margin: 20px;
    img {
      width: 99%;
    }
  }
}
</style>
