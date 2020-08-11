<template>
  <div id="home">
      <nav-bar class="home-nav">
        <div slot='center'>购物车</div>
      </nav-bar>
      <h2>首页</h2>

  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
    name:'Home',
    components:{
      NavBar
    }
}
</script>

<style>
.home-nav{
  background-color:var(--color-tint);
  color: white;
}
</style>