<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <!--  <router-link :to="'/home/newsinfo/'+item.id">  -->
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1004/200/300">
          <div class="mui-media-body">
            幸福
            <p class='mui-ellipsis'>
              <!--如何进行时间格式化:定义一个全局过滤器 通过管道符就行调用就可以了 -->
              <!-- <span>发表时间: {{item.add_time | dateFormat('YYYY-MM-DD') }}</span>                                    -->
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1010/200/300">
          <div class="mui-media-body">
            木屋
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1014/200/300">
          <div class="mui-media-body">
            CBD
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1004/200/300">
          <div class="mui-media-body">
            幸福
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1010/200/300">
          <div class="mui-media-body">
            木屋
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1014/200/300">
          <div class="mui-media-body">
            CBD
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1004/200/300">
          <div class="mui-media-body">
            幸福
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1010/200/300">
          <div class="mui-media-body">
            木屋
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1014/200/300">
          <div class="mui-media-body">
            CBD
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newInfo/1">
          <img class="mui-media-object mui-pull-left" src="https://picsum.photos/id/1004/200/300">
          <div class="mui-media-body">
            幸福
            <p class='mui-ellipsis'>
              <span>发表时间:2020.02.20</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      newsList:[]  // 后面拿到这个数据然后进行渲染就可以了,使用v-for,和插值表达式
    }
  },
  created() {
    // this.getNewsList();
  },
  methods:{
    getNewsList(){
      this.$http.get('api/getnewsList').then(result =>{
        if (result.body.status===0){
          Toast('获取新闻列表失败')
        }else{
          this.newsList = result.body.message;
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
  }
}
</style>