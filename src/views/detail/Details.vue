<template>
  <div class="details">
    <!-- 导航栏 -->
    <!-- <div>{{id}}</div> -->
    <detail-nav-bar ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-basic-info :goodsInfo="goodsInfo"></detail-basic-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramsInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recomment" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "../detail/childComponents/DetailsNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import {
  getDetails,
  getRecommend,
  GoodsInfo,
  Shop,
  GoodsParam,
} from "../../network/detail";
import Scroll from "../../components/common/scroll/Scroll";
import DetailBasicInfo from "../../views/detail/childComponents/DetailBasicInfo";
import DetailShopInfo from "../../views/detail/childComponents/DetailShopInfo";
import DetailGoodsInfo from "../../views/detail/childComponents/DetailGoodsInfo";
import DetailParamInfo from "../../views/detail/childComponents/DetailParamInfo";
import DetailCommentInfo from "../../views/detail/childComponents/DetailCommentInfo";
import GoodsList from "../../components/content/goods/GoodsList";

import DetailBottomBar from "../../views/detail/childComponents/DetailBottomBar";

import { debounce } from "../../common/utils";

import { backTopMinxin } from "../../common/mixin";
import { mapActions } from "vuex";


export default {
  name: "Details",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBasicInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [backTopMinxin],
  data() {
    return {
      id: null,
      topImages: null,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.scroll.refresh();
      // this.$nextTick(() => {
      this.getThemeTopY();
      // });
    },
    titleClick(index) {
      console.log("titleClick");
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      // 获取y值
      const positionY = -position.y;
      // positionY和主题中的值进行对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 1.判斷是否显示backtop
      this.isShowBackTop = -position.y > 1000;
      // 2.判断tabcontrol是否吸顶
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
    addToCart() {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.iid = this.id;

// 方式1
      this.addCart(product).then((res) => {
        console.log(res);
        // this.isShow = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message = '';
        // }, 1500);
         this.$toast.show(res,2000)
      });
      // 方式2
      // this.$store.dispatch(res,product)
      // .then(res=>{
      //   console.log(res)
      //    this.$toast.show(res,2000)

      // });
    },
  },
  created() {
    this.id = this.$route.params.id;

    // 请求详情页面数据
    getDetails(this.id).then((res) => {
      // 获取顶部的轮播数据
      console.log(res);
      const data = res.result;

      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息的数据
      this.shopInfo = new Shop(data.shopInfo);
      // 商品详情数据
      this.detailInfo = data.detailInfo;
      // 获取参数信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    // 请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    // 给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recomment.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    });
  },
  mounted() {
    // 3.监听item中图片加载完成
    // const refresh = this.debounce(this.$refs.scroll.refresh, 200);

    // this.$bus.$on("DetailItemImageLoad", () => {
    //   refresh();
    // });
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
.details {
  background-color: #fff;
  position: relative;
  z-index: 99;
  height: 100vh;
}
.content {
  overflow: hidden;
  height: calc(100% - 93px);
}
</style>