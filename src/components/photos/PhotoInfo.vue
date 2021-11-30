<template>

<!--  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    &lt;!&ndash; 缩略图区域 &ndash;&gt;
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div>

    &lt;!&ndash; 图片内容区域 &ndash;&gt;
    <div class="content" v-html="photoinfo.content"></div>

    &lt;!&ndash; 放置一个现成的 评论子组件 &ndash;&gt;
    <cmt-box :id="id"></cmt-box>
  </div>-->

  <div class="photoinfo-container">
    <h3>题都城南庄</h3>
    <p class="subtitle">
      <span>发表时间：2020.02.20 20:20:20</span>
      <span>点击：1000次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" > 尽管这首诗有某种情节性，有富于传奇色彩的“本事”，甚至带有戏剧性，但它并不是一首小叙事诗，而是一首抒情诗。“本事”可能有助于它的广泛流传，但它本身所具的典型意义却在于抒写了某种人生体验，而不在于叙述了一个人们感兴趣的故事。它诠释了一种普遍性的人生体验：在偶然、不经意的情况下遇到某种美好事物，而当自己去有意追求时，却再也不可复得。这也许正是这首诗保持经久不衰的艺术生命力的原因之一。</div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box ></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomment/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,     // 从路由中获取到的 图片Id
      photoinfo: {}, // 图片详情
      list: [], // 缩略图的数组
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        },
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        },
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    //this.getPhotoInfo();
    //this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            // 设置每一张图片的宽与高
            item.w = 600;
            item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      });
    },
    handleClose () {
      console.log('close event')
    }
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 25px;
  }

  .thumbs{
    vue-preview{
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
