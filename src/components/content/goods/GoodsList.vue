<template>
  <div class="goodslist">
      <goods-list-item class="item" v-for="(item,index) in goods" :key='index' :goods-item = "item"/>
  </div>
</template>

<script>
 import GoodsListItem from '../goods/GoodsListItem'
export default {
    name:'GoodsList',
    components:{
       GoodsListItem 
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goodslist>.item{
  position: relative;
  margin-top: 10px;
  width: 48%;
  
}

</style>