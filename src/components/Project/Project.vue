<template>
  <div class="main">
    <Header
      :title="'All Project'"
      :right="require('@/assets/image/Project/icon_edit.svg')"
      @back="$router.go(-1)"
      @rightClick="editStart"
    ></Header>
    <div class="project-container">
      <ProjectItem
        v-for="index in projects.length"
        :key="index"
        :project="projects[index-1]"
        :isEditing="isEditing"
        @enter="enterProject"
        @edit="editProject"
        @delete="deleteProject"
      ></ProjectItem>
      <div @click="newProject" class="new">
        <img src="@/assets/image/Project/Theme_new.svg" alt />
      </div>
    </div>
    <Footer :active="2"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import ProjectItem from "@/components/Project/ProjectItem.vue";

export default {
  name: "Project",
  data() {
    return {
      isEditing: false,
      projects: [
        {
          id: 1,
          title: "Orientation Party",
          theme: 1
        },
        {
          id: 2,
          title: "Public Performance",
          theme: 2
        },
        {
          id: 3,
          title: "Group Activity",
          theme: 3
        },
        {
          id: 4,
          title: "Anniversary Activity",
          theme: 4
        },
        {
          id: 5,
          title: "Daily Expenses",
          theme: 5
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    ProjectItem
  },
  methods: {
    editStart() {
      this.isEditing = !this.isEditing;
    },
    newProject() {
      this.$router.push({ name: "NewProject" });
    },
    editProject(project) {
      this.$router.push({
        name: "NewProject",
        params: { preProject: project }
      });
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
