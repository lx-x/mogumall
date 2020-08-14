<template>
  <div class="wrapper" ref="swiper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscoll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 1.创建Bscroll对象
    this.scroll = new Bscoll(this.$refs.swiper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // 2.监听滚动位置
    this.scroll.on("scroll", (position) => {
      // console.log(position)
      this.$emit("scroll", position);
    });

    // 2.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      console.log("--------");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>