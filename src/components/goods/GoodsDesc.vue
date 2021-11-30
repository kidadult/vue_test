<template>
  <div class="goodsdesc-container">
<!--    <h3>{{ info.title }}</h3>-->
    <h3>Apple MacBook Air 13.3 新款8核M1芯片(7核图形处理器) 8G 256G SSD 金色 笔记本电脑 MGND3CH/A</h3>
    <hr>

<!--    <div class="content" v-html="info.content"></div>-->
    <div class="content" >
      <p>商品名称：AppleMacBook Air商品编号：100009464797</p>
      <p> 商品毛重：2.45kg商品产地：中国大陆屏幕色域：DCI-P3类型：高端轻薄笔记本系统：</p>
      <p>MacOS厚度：15.1-18.0mm机身材质：金属特性：指纹识别，长续航，Wi-Fi 6屏幕尺寸：13.0-13.9英寸系列：其他颜色：金色处理器：Apple M1裸机重量：</p>
      <p>1-1.5kg显卡芯片供应商：其他内存容量：8GB显卡型号：集成显卡屏幕刷新率：60Hz固态硬盘（SSD）：256GB机械硬盘：无机械硬盘 </p>
      <img src="https://img13.360buyimg.com/cms/jfs/t1/133196/13/15607/437742/5faaf86bE4b9e17f6/3b6e2685f262e56c.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {} // 图文数据
    };
  },
  created() {
    //this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    }
  }
};
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
