<template>
  <div class="left-tab">
    <scroll
      class="left-content"
      ref="scroll"
      :bounce="bounce"
      :probe-type="probeType"
      :pull-up-load="pullUpLoad"
    >
      <ul v-for="(item,index) in tabList" :key="index">
        <div :class="{active:index ===currentIndex}">
          <li class="itemtab" @click="tabClick(index)">
            {{item.title}}
            <span :class="{tab:index === currentIndex}"></span>
          </li>
        </div>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll";
export default {
  name: "CategoryLeftTab",
  components: {
    Scroll,
  },
  data() {
    return {
      probeType: 3,
      pullUpLoad: true,
      currentIndex: 0,
      bounce: false,
    };
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      //   console.log(this.tabList[index].title)
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.left-tab {
  font-size: 14px;
  margin: auto;
  height: 100vh;
  border-right: 1px solid #aaa;
}
.left-tab ul {
  background-color: #f2f2f2;
}

.itemtab {
  padding: 20px;
  /* height: 40px; */
  width: 100px;
  text-align: center;
  display: flex;
  align-items: center;
}
.left-content {
  overflow: hidden;
  height: calc(100% - 93px);
}
.tab {
  height: 20px;
  width: 5px;
  background-color: red;
  position: fixed;
  right: 0;
}
.active {
  background-color: white;
}
</style>