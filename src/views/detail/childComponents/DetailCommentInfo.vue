<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail" v-if="commentInfo.user">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>

      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt />
      </div>
    </div>
    <div class="empty-comment" v-if="!commentInfo.user">
      <div>暂时没有评论~</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      // 1.先将时间戳转成date对象
      const date = new Date(value * 1000);
      // 2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss ");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 12px;
  color: black;
  font-size: 14px;
}
.info-header {
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: rgb(238, 233, 233) 1px solid;
}
.info-user {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
.info-user img {
  height: 45px;
  width: 45px;
  border: 1px solid white;
  border-radius: 50%;
  margin-right: 5px;
}
.info-detail {
  font-size: 14px;
  text-size-adjust: 12px;
  line-height: 2;
}
.info-imgs {
  margin-top: 10px;
  display: flex;
  /* justify-content: space-between; */
}
.info-imgs img {
  margin-right: 12px;
  height: 70px;
  width: 70px;
}
.empty-comment{
  padding-top: 10px;
}
</style>