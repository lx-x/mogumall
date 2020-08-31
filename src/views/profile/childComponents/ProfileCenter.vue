<template>
  <div class="profile-center">
    <div class="my-charge">
      <div class="charge-num price">{{numbers[0]}}</div>
      <span>元</span>
      <div>我的余额</div>
    </div>
    <div class="my-discount">
      <div class="discount-num price">{{numbers[1]}}</div>
      <span>个</span>
      <div>我的优惠</div>
    </div>
    <div class="my-integral">
      <div class="integral-num price">{{numbers[2]}}</div>
      <span>分</span>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCenter",
  props: {
    numbers: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.profile-center {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}
.my-charge {
  flex: 1;
  padding: 20px 0px;
  text-align: center;
}
.my-discount {
  flex: 1;
  padding: 20px 0px;
  text-align: center;
  border-left: 2px rgb(241, 241, 241) solid;
  border-right: 2px rgb(238, 238, 238) solid;
}
.my-integral {
  flex: 1;
  padding: 20px 0px;
  text-align: center;
}

.price {
  font-size: 23px;
  font-weight: 700;
  color: red;
  display: inline-block;
  margin-bottom: 5px;
}
span {
  margin-left: 5px;
}
</style>