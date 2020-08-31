<template>
  <div id="detailnavbar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          :class="{active:index===currentIndex}"
          v-for="(item,index) in titles"
          :key="index"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
#detailnavbar {
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 12px;
}
.active {
  color: rgb(240, 45, 136);
}
.back img {
  width: 15px;
  height: 15px;
  margin-top: 15px;
  margin-left: 20px;
}
</style>