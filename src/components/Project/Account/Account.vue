<template>
  <div class="submain">
    <!-- <BlurMask :show="judgementShow"></BlurMask> -->
    <div class="block">
      <div :class="{header: true, fullHeader: full}">
        <span>Primary account</span>
        <img
          @click="$emit('toggleAccount')"
          :src="require('@/assets/image/Project/Revenue/'+ (full ? 'up' : 'option') +'.svg')"
        />
      </div>
      <div class="accounts">
        <div v-if="full">
          <Draggable
            v-model="localAccounts"
            v-bind="dragOptions"
            @start="isDragging = true"
            @end="isDragging = false"
          >
            <transition-group type="transition" name="flip-list">
              <div class="account full" v-for="(account, index) in localAccounts" :key="account.id">
                <div class="left">
                  <!-- <font-awesome-icon icon="bars" size="sm" style="color: gray" /> -->
                  <span class="pirority">{{(index+1)+". "}}</span>
                  <div class="icon">
                    <font-awesome-icon
                      :icon="account.iconName"
                      :size="full ? 'sm' : 'sm'"
                      style="color: #fff"
                    />
                  </div>
                  <img class="space" src alt />
                  <div class="title">{{account.name}}</div>
                </div>
                <div class="cost">
                  <span>$</span>
                  {{costFormat(account.remain)}}
                </div>
              </div>
            </transition-group>
          </Draggable>
          <p>Order thier priority by dragging</p>
        </div>

        <div v-else class="account">
          <div class="left">
            <div class="icon">
              <font-awesome-icon
                :icon="localAccounts[0].iconName"
                :size="full ? '2x' : 'sm'"
                style="color: #fff"
              />
            </div>
            <img class="space" src alt />
            <div class="title">{{localAccounts[0].name}}</div>
          </div>
          <div class="cost">
            <span>$</span>
            {{costFormat(localAccounts[0].remain)}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BlurMask from "@/components/common/BlurMask";
import Draggable from "vuedraggable";

export default {
  name: "",
  data() {
    return {
      isDragging: false,
      localAccounts: []
    };
  },
  components: {
    Draggable
    // BlurMask
  },
  props: {
    full: Boolean,
    projectId: Number,
    accounts: Array
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    costFormat(cost) {
      let str = cost.toString();
      let rtn =
        str.length % 3 === 0 ? "" : str.substr(0, str.length % 3) + ", ";
      for (var i = str.length % 3; i < str.length; i += 3) {
        rtn += str.substr(i, 3) + ", ";
      }
      rtn = rtn.slice(0, -2);
      return rtn;
    }
  },
  beforeMount() {
    this.localAccounts = this.accounts;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$transition: 0.5s;
* {
  background-color: transparent;
}
.submain {
  width: 100%;
  .block {
    width: 90%;
    height: 90%;
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0 0 12px #e6e6e6;
    background-color: #fff;
    border-radius: 16px;
    transition: $transition;
    overflow: hidden;
    &.fullBlock {
      height: 90vh;
    }
    .header {
      display: flex;
      justify-content: space-between;
      margin: 2vh 0 1vh 0;
      padding: 0 4vw;
      font-size: 16px;
      transition: $transition;
      &.fullHeader {
        font-size: 24px;
      }
    }
    .accounts {
      width: 100%;
      text-align: center;
      .account {
        width: 90%;
        margin: 0 auto 2vh auto;
        display: flex;
        box-shadow: none;
        padding: 0;
        align-items: center;
        justify-content: space-between;
        height: 3vh;
        font-size: 16px;
        transition: 0.5s;
        &.full {
          box-shadow: 0 0 10px #dadada;
          padding: 8px 10px;
        }
        .left {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .title {
            width: auto;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          img {
            width: 5vw;
          }
          .pirority {
            margin: 0 2vw;
            font-size: 24px;
          }
          .icon {
            width: 3vh;
            height: 3vh;
            background-color: #00b900;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: 0.3s;
          }
        }
      }
    }
  }
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
