<template>
  <div>

    <!-- 轮播图区域 -->
<!--    <mt-swipe :auto="4000">
      &lt;!&ndash; 在组件中，使用v-for循环的话，一定要使用 key &ndash;&gt;
      <mt-swipe-item><img src="../../images/slideshow1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/slideshow2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/slideshow3.png" alt=""></mt-swipe-item>
      
&lt;!&ndash;      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>&ndash;&gt;
    </mt-swipe>-->
    <swiper :lunbotuList="lunbotuList"></swiper>

    <!-- 6宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">热卖商品</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">吃喝玩乐</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">关于我们</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
  </ul> 

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../subcomment/swiper.vue";
export default {
  data() {
    return {
      lunbotuList: [
        {src:"https://picsum.photos/id/1020/300/200"},
        {src:"https://picsum.photos/id/1004/300/200"},
        {src:"https://picsum.photos/id/10/300/200"},
      ] // 保存轮播图的数组
    };
  },
 /* created() {
    this.getLunbotu();
  },*/
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        // result.body拿到返回来的json数据; console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.lunbotuList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。");
        }
      });
    }
  },
  components:{
    swiper
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
