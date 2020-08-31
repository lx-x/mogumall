<template>
  <van-swipe :autoplay="3000"  indicator-color="#ff5777">
    <van-swipe-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" height="180px" width="100%" @load="imageload" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageload() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>