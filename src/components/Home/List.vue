<template>
  <div :class="{ main_l: true, show: show }" v-click-outside="hide">
    <div class="header">
      CooMoney -- 團隊記帳工具
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "List",
  props: {
    show: Boolean,
  },
  methods: {
    hide() {
      if (this.show) {
        this.$emit("toggleList");
      }
    },
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main_l {
  position: absolute;
  width: 75vw;
  height: 100vh;
  top: 0;
  left: -75vw;
  background-color: #fff;
  z-index: 1000;
  transition: 0.3s;
  &.show {
    left: 0vw;
  }
}
</style>
