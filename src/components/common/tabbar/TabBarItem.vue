<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{color:"gray"}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {

    };
  },
  methods: {
    itemClick(path) {
      console.log("点击按钮");
      this.$router.replace(this.path).catch((err) => err);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: center;
}
.active {
  color: rgb(240, 45, 136);
}
</style>