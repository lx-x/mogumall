<template>
  <div class="nav-bar">
     <div class="left">
          <slot name="left"> </slot>
     </div>
     <div class="center">
          <slot name="center"></slot>
     </div>
     <div class="right">
          <slot name="right"></slot>
     </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    /* border-bottom: .5px solid rgb(229, 226, 226); */
}
.right,.left{
    width: 60px;
}
.center{
    flex: 1;
}

</style>