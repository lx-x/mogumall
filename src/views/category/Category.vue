<template>
  <div class="category">
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
    <div class="container">
      <category-left-tab @tabClick="tabClick" :tabList="tabList"></category-left-tab>
      <category-right-content class="right" :catagoryDetail="catagoryDetail"></category-right-content>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";


import CategoryLeftTab from "./childComps/CategoryLeftTab";
import CategoryRightContent from "./childComps/CategoryRightContent";
import { getCategory, getSubcategory } from "../../network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    CategoryLeftTab,
    CategoryRightContent,

  },
  data() {
    return {
      tabList: [],
      catagoryDetail: [],
      maitKey: 0,
 
    };
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        console.log(res);
        this.tabList = res.data.category.list;
        this.maitKey = this.tabList[0].maitKey;
        this.getSubcategory(this.tabList[0].maitKey);
      });
    },
    getSubcategory(mKey) {
      getSubcategory(mKey).then((res) => {
        console.log(res);
        this.catagoryDetail = res.data.list;
      });
    },
    tabClick(index) {
      this.maitKey = this.tabList[index].maitKey;
      this.getSubcategory(this.maitKey);
    },
  },
  created() {
    // 获取左侧分类数据
    this.getCategory();
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  display: flex; 
  justify-content: space-between;
}
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
.right{
  flex: 1;
}
</style>