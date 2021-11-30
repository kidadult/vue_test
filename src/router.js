import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from "./components/photos/PhotoList.vue"
import photoInfo from"./components/photos/PhotoInfo.vue"
import goodList from "./components/goods/GoodsList.vue"
import goodsInfo from "./components/goods/GoodsInfo.vue"
import goodsdesc from "./components/goods/GoodsDesc.vue"
import goodscomment from "./components/goods/GoodsComment.vue"
// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },   // 路由重定向.
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newsList',component: newsList },
    { path: '/home/newInfo/1',component: newsInfo },
    /*{ path: '/home/newInfo/:id',component: newsInfo },*/
    { path: '/home/photolist',component: photoList },
    { path: '/home/photoinfo/1',component: photoInfo },
   /* { path: '/home/photoinfo/:id',component: photoInfo },*/
    { path: '/home/goodlist',component: goodList },
    { path: '/home/goodinfo/1',component: goodsInfo },
    /*{ path: '/home/goodinfo/:id',component: goodsInfo,name:"goodsinfo" },*/
    { path: '/home/goodsdesc/:id',component: goodsdesc,name:"goodsdesc" },
    { path: '/home/goodscomment/:id',component: goodscomment,name:"goodscomment" },
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router