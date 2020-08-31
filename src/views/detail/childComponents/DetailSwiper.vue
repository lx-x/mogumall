<template>
  <van-swipe :autoplay="3000" indicator-color="#ff5777">
    <van-swipe-item  class="swiper" v-for="(item,index) in topImages" :key="index">
        <img v-lazy="item" width="100%"  />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "DetailSwiper",
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
  
  },
};
</script>

<style scoped>
.swiper{
    height:400px;
    overflow: hidden;
}
</style>