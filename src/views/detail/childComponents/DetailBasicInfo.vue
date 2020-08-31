<template>
  <div v-if="Object.keys(goodsInfo).length !==0" class="basic-info">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsInfo.newPrice}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
    </div>

    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" />
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBasicInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.basic-info{
    padding: 5px;
}
.info-title{
    color: black;
    font-size: 14px;

}
.info-price{
    margin:10px 0 10px 0;
}
.n-price{
    color: var(--color-high-text);
    font-weight: 600;
}
.o-price{
    text-decoration: line-through;
    font-size: 12px;
    margin: 5px 15px 0px 5px;
}
.discount{
    background-color: var(--color-tint);
    border-radius: 10px;
    padding: 3px;
    font-size: 8px;
    color: white;
}
.info-other{
    display: flex;
    justify-content: space-between;
    color: black;
    font-size: 12px;
    border-bottom: 1px gainsboro solid;
    padding-bottom: 10px;
}
.info-service{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-top: 10px;
}
.info-service-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
}
.info-service-item span{
    font-size: 12px;
    color: #333;
}

</style>