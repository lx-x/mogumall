<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default(){
                return false;
            }
        }
    }
}
</script>

<style scoped>
.check-button{
    border: 2px #aaa solid;
    border-radius: 50%;
}
.check{
    border-color:var(--color-tint);
    background-color: var(--color-tint);
}
</style>