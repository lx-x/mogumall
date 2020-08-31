<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
      ref="tabControl1"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="probeType"
      :pull-up-load="pullUpLoad"
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list class="goods-list" :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "../home/childComps/HomeSwiper";
import HomeRecommendView from "../home/childComps/HomeRecommendView";
import FeatureView from "../home/childComps/FeatureView";
import TabControl from "../../components/content/tabcontrol/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import { getHomeMultidata } from "../../network/home";
import { getHomeGoods } from "../../network/home";
import { debounce } from "../../common/utils";
import {backTopMinxin} from "../../common/mixin"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins:[backTopMinxin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      page: 0,
      currentType: "pop",
      probeType: 3,
      pullUpLoad: true,
      taboffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null,
    };
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      // 1.判斷是否显示backtop
      this.isShowBackTop = -position.y > 1000;
      // 2.判断tabcontrol是否吸顶
      this.isTabFixed = -position.y > this.taboffsetTop;
    },
    loadMore() {
      console.log("加载更多");
      this.getHomeGoods(this.currentType);
    },

    swiperImageLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  mounted() {
    // 3.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.getCurrentY();

    // 取消全局事件的监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.goods-list {
  margin-bottom: 60px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>