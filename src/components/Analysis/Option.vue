<template>
  <div id="content1">
    <div id="pickProject">
      <div v-for="project in allProjectName" :key="project" class="layout">
        <p>{{project}}</p>
        <input type="checkbox" :value="project" v-model="checkProject" @change="getProjectName" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allProjectName: Array
  },
  components: {},
  data() {
    return {
      checkProject: []
    };
  },
  methods: {
    getProjectName() {
      //console.log(this.checkProject);
      this.$emit("projectSubmit", this.checkProject);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#content1 {
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 80px;
  width: 90%;
  height: 101px;
  background-color: white;
  box-shadow: 0px 0px 9px #b3b2b2;
  border-radius: 22px 22px;
  .circle {
    background-color: red;
  }
  #pickProject {
    display: flex;
    .layout {
      //background-color: aqua;
    }
  }
}
</style>
