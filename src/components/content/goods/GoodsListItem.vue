<template>
  <div class="goods-item">
    <img class="image" :src="goodsItem.show.img" alt @load="imageLoad" />
    <div class="desc-info">
      <div class="title">{{goodsItem.title}}</div>
      <div class="info">
        <span class="price">¥{{goodsItem.price}}</span>
        <img class="icon" src="../../../assets/img/common/collect.svg" alt />
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    }
  }
};
</script>

<style>
.goods-item {
  margin-top: 5px;
  text-align: center;
  color: #333;
  font-size: 12px;
}
.icon {
  width: 25px;
  height: 20px;
  padding: 0 5px 0 5px;
  position: relative;
  top: 5px;
}

.image {
  width: 100%;
  border-radius: 10px;
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  margin-top: 10px;
}
.price {
  color: #ff5777;
}
</style>