<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:index ===currentIndex}"
      @click="tabItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
      tabItemClick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
      }
  },
  props: {
    titles: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: white;
  z-index: 9;
}
.tab-control-item span{
    padding: 5px;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
.active span {
    border-bottom: 3px solid var(--color-tint);
}
</style>