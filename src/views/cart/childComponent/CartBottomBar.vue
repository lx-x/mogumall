<template>
  <div class="cart-bottom-bar">
    <div class="checked-all">
      <check-buttom :is-checked="isSelectAll" class="checked" @click.native="clickAll"></check-buttom>
      <span>全选</span>
    </div>
    <div class="price">合计:{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去计算({{checkLenght}})</div>
  </div>
</template>

<script>
import CheckButtom from "../../../components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButtom,
  },
  computed: {
    ...mapGetters(["cartList"]),
    checkLenght() {
      return this.cartList.filter((item) => item.checked).length;
    },
    totalPrice() {
      return (
        "¥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    isSelectAll() {
      if (this.cartList.length == 0) {
        return false;
      }
      //   return !(this.cartList.filter((item) => !item.checked).length);

      return !this.cartList.find((item) => !item.checked);

      // for(let item in this.cartList){
      //     if(!item.checked){
      //         return false
      //     }
      // }
      // return true
    },
  },
  methods: {
    clickAll() {
      console.log("点击全选按钮");
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        //部分或者全部不选中
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    calcClick(){
        if(!this.isSelectAll){
            this.$toast.show('请选择购买的商品',2000)
        }
    }
  },
};
</script>

<style>
.cart-bottom-bar {
  display: flex;
  position: relative;
  background-color: rgb(241, 235, 235);
  height: 44px;
  line-height: 44px;
  font-size: 14px;
}
.checked-all {
  display: flex;
  align-items: center;
  width: 60px;
  margin-left: 5px;
}
.checked {
  line-height: 20px;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.price {
  flex: 1;
  margin-left: 20px;
}
.calculate {
  width: 80px;
  background-color: red;
  color: white;
  font-size: 14px;
  text-align: center;
}
</style>