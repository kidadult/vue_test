<template>
  <div class="newInfo-content">
    <h3 class="title">40.6摄氏度：上海创出140年气象史上高温新纪录</h3>
<!--    <h3 class="title">{{newsInfo.id}}</h3>-->
    <p class="subtitle">
      <span>发表时间:</span>
<!--      <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>-->
      <span>点击次数:</span>
    </p>
    <hr>
    <!--显示内容区域-->
<!--    <div class="content" v-html="newsInfo.content">-->
    <div class="content">

      <p>2016年7月27日 10:58:26 来源： 新华网</p>
      <hr />
      <p>新华网上海７月２６日电（记者李荣）２６日１３时３６分至４７分这一时间段，上海徐家汇气象观测站测得当日最高温达４０．６摄氏度。这是上海有气象记录以来１４０年的高温新纪录，打破了此前１９３４年创下的４０．２摄氏度的历史极值。</p>

      <p>上海已经连续２天发出了最高等级的红色高温警报。上海中心气象台首席服务官满莉萍说，今年副热带高压强度特别强，对上海及江南地区的控制“实在太稳定了”，整个７月份基本上都处在它的势力范围之内。２５日上海已出现了气象史上７月份“第四高”的高温值，这使得２６日的“基础”气温就很高，超过了３０摄氏度，然后不断地升温。此外，２６日白天风小，又吹的是西南风，特别是在中午之后这一个最易出现高温的时段，光照又比较强，所以气温“直线飙升”，一举冲破历史极值，出现了“创纪录”的极端酷暑天</p>

      <p> 在上海历史上，出现４０摄氏度以上极端高温的几率并不大。根据相关资料，中心城区徐家汇观测站１４０年来仅出现了５次记录，除了这一次的新纪录，还有就是１９３４年７月１２日的４０．２摄氏度；１９３４年８月２５日、２００９年７月２０日、２０１０年８月１３日的４０摄氏度。</p>

      <p>由于气温实在太高，上 海２６日下午不少地区出现了热对流天气。气象台说，首先是浦东地区，下起了热雷雨。到１５时０５分，全市大部分地区出现了分散性的雷电活动和热雷雨，中心城区徐家汇等地都响起了隆隆的雷声。</p><p>新华网上海７月２６日电（记者李荣）２６日１３时３６分至４７分这一时间段，上海徐家汇气象观测站测得当日最高温达４０．６摄氏度。这是上海有气象记录以来１４０年的高温新纪录，打破了此前１９３４年创下的４０．２摄氏度的历史极值。</p>

      <p>上海已经连续２天发出了最高等级的红色高温警报。上海中心气象台首席服务官满莉萍说，今年副热带高压强度特别强，对上海及江南地区的控制“实在太稳定了”，整个７月份基本上都处在它的势力范围之内。２５日上海已出现了气象史上７月份“第四高”的高温值，这使得２６日的“基础”气温就很高，超过了３０摄氏度，然后不断地升温。此外，２６日白天风小，又吹的是西南风，特别是在中午之后这一个最易出现高温的时段，光照又比较强，所以气温“直线飙升”，一举冲破历史极值，出现了“创纪录”的极端酷暑天</p>

      <p> 在上海历史上，出现４０摄氏度以上极端高温的几率并不大。根据相关资料，中心城区徐家汇观测站１４０年来仅出现了５次记录，除了这一次的新纪录，还有就是１９３４年７月１２日的４０．２摄氏度；１９３４年８月２５日、２００９年７月２０日、２０１０年８月１３日的４０摄氏度。</p>

      <p>由于气温实在太高，上 海２６日下午不少地区出现了热对流天气。气象台说，首先是浦东地区，下起了热雷雨。到１５时０５分，全市大部分地区出现了分散性的雷电活动和热雷雨，中心城区徐家汇等地都响起了隆隆的雷声。</p>
    </div>
    <!--评论区:评论子组件 父组件向子组件传值.把newsId传入过去-->
<!--    <comment-box :id="this.id"></comment-box>-->
    <comment-box></comment-box>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
// 导入comment.vue子组件
import comment from "../subcomment/comment.vue";
export default {
  data(){
    return{
      newId:this.$route.params.id,   // 拿到路由中get请求的中携带的id,方便后面取到
      newsInfo:[]
    }
  },
  created() {
    // this.getNewsInfo()
  },
  methods:{
    getNewsInfo(){  //发起Ajax请求获取新闻详情
      this.$http.get('/api/getnew/'+this.newId).then(result=>{
        if (result.body.status ===0){
            this.newsInfo = result.body.message[0]; // 详情嘛,只有一项
        }else{
          Toast("获取新闻详情失败")
        }
      })
    }
  },
  // 注册子组件
  components:{
    'comment-box':comment
  }

}
</script>

<style lang="scss" scoped>
.newInfo-content{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #007aff;
    display: flex;
    justify-content: space-between;
  }
  .content{}
}
</style>