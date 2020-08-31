<template>
  <div class="profile-menu">
    <div class="contentt">
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/message.svg" alt />
        </div>
        <div class="item-text line">我的消息</div>
      </div>
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/shop.svg" alt />
        </div>
        <div class="item-text line">积分商城</div>
      </div>
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/vip.svg" alt />
        </div>
        <div class="item-text">会员卡</div>
      </div>
    </div>
    <div class="contentt">
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/shop-cart.svg" alt />
        </div>
        <div class="item-text line">我的购物车</div>
      </div>
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/logo1.svg" alt />
        </div>
        <div class="item-text">下载购物APP</div>
      </div>
    </div>
    <div class="contentt">
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/setting.svg" alt />
        </div>
        <div class="item-text line">设置</div>
      </div>
      <div class="itemline">
        <div class="item-icon">
          <img src="../../../assets/img/profile/more.svg" alt />
        </div>
        <div class="item-text">更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMenu",
};
</script>

<style>
.profile-menu .itemline {
  background-color: #fff;
  display: flex;
  height: 45px;
}
.profile-menu .item-icon {
  display: flex;
  height: 45px;
  align-items: center;
}
.profile-menu .item-icon img {
  margin-left: 10px;
  margin-right: 10px;
  height: 25px;
  width: 25px;
}
.profile-menu .item-text {
  flex: 1;
  line-height: 45px;
}

.profile-menu .line {
  border-bottom: rgb(236, 233, 233) 2px solid;
}
.profile-menu .contentt {
  border-top: 10px solid #f2f2f2;
}
</style>