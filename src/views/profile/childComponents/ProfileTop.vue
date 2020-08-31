<template>
  <div class="top-info">
    <div class="avatar">
      <img src="../../../assets/img/profile/avatar.svg" alt />
    </div>
    <div class="bind-info">
      <div class="login">登录/注册</div>
      <div class="bind">
        <img src="../../../assets/img/profile/phone.svg" alt />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="right">
      <img src="../../../assets/img/profile/right.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop",
};
</script>

<style scoped>
.top-info {
  padding: 20px;
  display: flex;
  background-color: var(--color-tint);
  color: white;
  justify-content: space-between;
}
.top-info .avatar {
  height: 70px;
}
.top-info .avatar img {
  width: 70px;
  height: 70px;
}
.bind-info {
  padding-left: 12px;
  margin: auto;
  flex: 1;
}
.bind-info .login {
  font-size: 14px;
}
.bind-info .bind {
    margin-top: 5px;
    display: flex;
}
.bind img {
  width: 30px;
  height:20px;
}
.right{
  margin: auto;
}
.right img{
  height:30px;
  width: 30px;
}
</style>