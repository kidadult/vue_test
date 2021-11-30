# 这是一个NB的项目

## 牛不牛逼， 用心去感受，每一行代码中的诗情雅意

### 我们是有灵魂程序员，所以，我们的代码富有诗意；

#### 丫的，实在编不下去了,哈哈哈

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件
## 改造tabbar为router-link

## 设置路由高亮显示

## 点击tabbar中的路由连接,展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据,如何获取数据,使用vue-resource
2.使用vue-resource的this.$http.get来获取数据
3.获取到的数据要保存到this.data身上
4.使用v-for循环来渲染每一个item项
##改造新闻资讯路由链接

##新闻资讯页面制作
1.绘制页面--使用mui中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据
## 实现新闻资讯列表,点击跳转到新闻详情,
1.把列表中的每一项改造为routere-link,同时跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件,NewsInfo.vue
3.在router.js中配置路由和新闻详情组件的对应关系,
4.渲染到页面中
## 实现新闻详情布局和请求数据
## 单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中,先手动导入comment组件 --import
3.在父组件中使用components属性,将刚才导入的comment组件,注册为自己的子组件
4.将注册子组件时候的注册名称,以标签的形式,在页面中应用
##获取所有的数据,显示在页面中
## 实现点击加载更多功能
1.为加载更多绑定点击事件,在事件中,请求下一页数据
2.点击加载更多,让pageIndex++,然后重新调用this.getComments()方法来获取最新一页的数据;==注意不要把之前的数据覆盖了;
3.为了防止新数据覆盖老数据,我们在点击加载更多的时候,每当获取新数据,应该凭接上老的数据,而不是覆盖老的数据;
## 发表评论功能
1.文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.检验评论内容是否为空,如果为空,则提示用户Toast评论内容不能为空
4.通过vue-resource发送一个请求,把评论内容提交给服务器
5.当发表评论之后,重新刷新列表,以查看最新的评论
+如果调用getComments方法重写刷新列表之后,可能只能得到最后一页的评论,前几页的评论获取不到
+换一种思路:当评论成功之后,在客户端手动凭接出一个评论对象,然后调用数组的unshift方法,把最新的评论追加到data中的comments中开头,实现刷新列表的功能;
  --(因为每次comments数据一变,vue就会重新渲染页面数据,刷新列表;)
## 绘制图片列表组件结构并美化
1.顶部的滑动条 
   1.借助mui中的tab-top-webview-main.html中的组件
   2.需要把slideer区域中的mui-fullscreen类取消掉
   3.滑动条无法被正常的滑动,通过检查官方文档,发现这个是一个js组件,需要初始化一下
      +导入miu.js
      + 调用官方提供的方式去初始化
   4.我们在初始化滑动条的时候,会有严格模式的报错webpack中bundle.js默认是启动严格模式的,
   5.解决方案:更改:在webpack中打包时候关闭严格模式关闭,---安装插件,配置模式
   6.刚进入页面的时候,滑动条不能一定,把初始化代码放入到mounted钩子函数中进行执行;
   7.解决tabbar无法正常切换组件的问题:-样式 mui-tab-item重写改一下名字
2.中间图片列表
###制作图片列表列表区域
1.图片列表使用懒加载技术,我们可以使用Mint-ui提供的现成的组件''lazy load'进行加载
2.渲染图片列表
###图片详情
1.在改造li成router-link的时候,需要使用tag标签属性指定要渲染为哪一种元素 tag=""li"
2.实现详情页面的布局和美化;
###改造商品列表路由以及页面样式
### 尝试在自己手机上调试运行程序,要保证自己手机和开发项目电脑处于同一个wifi中,也就是说手机可以访问电脑ip
1 打开自己项目的package.json文件,在dev脚本中,添加一个 --host指令,把当前电脑的wifi ip地址设置为 --host的指令值;
   +查看自己电脑所处的ip