<template>
  <div class="recommend">
      <div class="recommenditem" v-for="(item,index) in recommends" :key='index'>
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommendView',
    props:{
        recommends:{
            type:Array,
             default(){
                return[]
            }
        }
    }

}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px;
    border-bottom: whitesmoke 8px solid;
}
.recommenditem{
    flex: 1;
}
.recommenditem img{
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
}

</style>