<template>
  <div class="main">
    <div :class="{mask: true, edit: isEditing}">
      <img class="edit" src="@/assets/image/Project/edit.svg" alt />
      <img
        class="cross"
        @click="$emit('delete', project.id, project.title)"
        src="@/assets/image/Project/cross.svg"
        alt
      />
    </div>
    <img :src="require(`@/assets/image/Project/Theme_${project.theme}.svg`)" alt />
    <p class="text">{{project.title}}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  data() {
    return {};
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    theme: {
      type: Number
    },
    isEditing: {
      type: Boolean
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "@/assets/css/global.scss";
.main {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 173px;
  margin: 20px;
  //   box-shadow: 0px -1px 10px #c8c8c8;
  .text {
    position: absolute;
    width: 70%;
    top: 12%;
    z-index: 2;
    background-color: transparent;
    text-align: center;
    font-weight: 500;
  }
  .mask {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.4s;
    background-color: rgba(255, 255, 255, 0.54);
    opacity: 0;
    &.edit {
      z-index: 1;
      opacity: 1;
    }
    .edit {
      background-color: transparent;
      width: 36%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .cross {
      background-color: transparent;
      width: 16%;
      position: absolute;
      top: 0%;
      left: 100%;
      transform: translate(-70%, -30%);
    }
  }
  img {
    width: 100%;
  }
}
</style>
