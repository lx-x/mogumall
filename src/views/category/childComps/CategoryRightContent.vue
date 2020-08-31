<template>
  <div class="right-content">
    <scroll
      class="right-scroll"
      ref="scroll"
      :probe-type="probeType"
      :pull-up-load="pullUpLoad"
      :bounce="bounce"
    >
      <category-right-class :catagoryDetail="catagoryDetail"></category-right-class>
    <!-- <category-right-detail></category-right-detail> -->
   
    </scroll>
  </div>
</template>

<script>
import CategoryRightDetail from "../childComps/CategoryRightDetail";
import CategoryRightClass from "./CategoryRightClass";
import Scroll from "../../../components/common/scroll/Scroll";
export default {
  name: "CategoryRightContent",
  components: {
    CategoryRightDetail,
    CategoryRightClass,
    Scroll,
  },
  data() {
    return {
      probeType: 3,
      pullUpLoad: true,
      bounce: true,
    };
  },

  props: {
    contentList: {
      type: Array,
      default() {
        return [];
      },
    },
    catagoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    active() {
      this.$refs.scroll.refresh();
    },
  },
  updated() {
    this.active();
  },
};
</script>

<style scoped>
.right-content {
  height: 100vh;
  background-color: white;
}
.right-scroll {
  overflow: hidden;
  height: calc(100% - 93px);
}
</style>