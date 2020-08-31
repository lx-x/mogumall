<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list>

    </cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar>
      
    </cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "../cart/childComponent/CartList";
import CartBottomBar from "../cart/childComponent/CartBottomBar"

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    //  两种语法
    // ...mapGetters(["cartLength"], ["cartList"]),
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
};
</script>

<style>
.cart{
  height: 100vh;
}
.cart-nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: white;
}
</style>