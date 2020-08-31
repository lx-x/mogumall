<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-item-list 
      v-for="(item,index) in cartList"
      :key="index"
      :itemInfo="item"></cart-item-list>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItemList from "../childComponent/CartListItem";
import Scroll from "../../../components/common/scroll/Scroll";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartItemList
  },
  computed: {
    ...mapGetters(["length", "cartList"]),
  },
  activated(){
      this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {  
  height: calc(100% - 49px - 44px - 44px);
 
  
}
.content {
 overflow: hidden;
  height: 100%;
}
</style>