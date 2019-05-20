<template>
  <header class="header-container">
<!--    头部搜索框-->
    <div class="header-search">
      <span class="logo"></span>
      <div class="searchInput">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共XXX件好物</span>
      </div>
      <button>登录</button>
    </div>
<!--    搜索底部文字-->
    <div class="header-ul">
      <ul class="all_nav clearfix" ref="allNav">
        <li><a href="javascript:">推荐</a></li>
        <li><a href="javascript:">居家生活</a></li>
        <li><a href="javascript:">服饰鞋包</a></li>
        <li><a href="javascript:">美食酒水</a></li>
        <li><a href="javascript:">个户清洁</a></li>
        <li><a href="javascript:">母婴亲子</a></li>
        <li><a href="javascript:">运动旅行</a></li>
        <li><a href="javascript:">数码家电</a></li>
        <li><a href="javascript:">礼品特色</a></li>
      </ul>
    </div>
<!--    轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3f6db7a6a0b24bc30807c806507b81e0.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/a1e7ea79a6221552eb0e00e5552bc74f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fdf6de9f80d2200d8fe6d267dff99151.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/cfa93449e6deef735fc746c7aa39b96f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/2240e726260c2f9f544a9d4dbe743773.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>
<!--图标说明-->
    <ul class="g-grow">
        <li class="item">
          <i class="iconfont icon-wangyi"></i>
          <span class="text">网易自营品牌</span>
        </li>
        <li class="item">
          <i class="iconfont icon-yanxuan"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-qian"></i>
          <span class="text">48小时极速退款</span>
        </li>
      </ul>
<!--10项ul那里-->
    <ul class="ul-item">
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
          <span>居民生活</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/f90310e950469586307d8595d0ee9c81.png">
          <span>服饰鞋品</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png">
          <span>美食酒水</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png">
          <span>个护清洁</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png">
          <span>母婴亲子</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png">
          <span>运动旅行</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png">
          <span>数码家电</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png">
          <span>全球特别</span>
        </li>
        <li class="li-item">
          <img class="img" src="https://yanxuan.nosdn.127.net/861a521a6f53e3399205f18daa23cddc.gif">
          <span>超级会员</span>
        </li>
      </ul>
<!--    520推荐-->
    <a href="javascript:" class="recommendImg">
      <img src="https://yanxuan.nosdn.127.net/77ede95488ac33d2444a884a722eefed.png" class="img">
    </a>
<!--    性价比之王-->
    <ul class="fourImgContainer">
      <li>
        <p class="title">性价比之王</p>
        <p class="desc">品质惊人的良心替代</p>
        <div class="imgContainer">
          <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          <img src="https://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&amp;thumbnail=150x150&amp;quality=75">
        </div>

      </li>
      <li>
        <p class="title">无限回购榜单</p>
        <p class="desc">快消日用 超值5.9元起</p>
        <div class="imgContainer">
          <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          <img src="https://yanxuan.nosdn.127.net/be4d030d4b4a8a4bf096714ec5b2a4aa.png?imageView&amp;thumbnail=150x150&amp;quality=75">
        </div>
      </li>
      <li>
        <p class="title">断货补单王</p>
        <p class="desc">严选必买爆款</p>
        <div class="imgContainer">
          <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          <img src="https://yanxuan.nosdn.127.net/6463c70f8b50bd14fd49d1f5903c06ec.png?imageView&amp;thumbnail=150x150&amp;quality=75">
        </div>
      </li>
      <li>
        <p class="title">双料口碑爆品榜</p>
        <p class="desc">高销量高好评好物</p>
        <div class="imgContainer">
          <img src="https://yanxuan.nosdn.127.net/bbdbfc9d084e0188af383ff9255a4cc1.png?imageView&amp;thumbnail=150x150&amp;quality=75">
          <img src="https://yanxuan.nosdn.127.net/b2a64915d5a9ae04964de87901f284eb.png?imageView&amp;thumbnail=150x150&amp;quality=75">
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "Home",
    mounted() {
      this.$nextTick(()=>{
        new BScroll('.header-ul',{
          click:true,
          scrollX:true
        })
      }),
      new Swiper ('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .header-container
    position relative
    height 75px
    width 100%
    background-color #fff
    box-sizing border-box
    .header-search
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 44px
      font-size 15px
      padding 12.5px
      box-sizing border-box
      .logo
        flex 2
        height 20px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 67px 20px
        background-position center
        margin-right 5px
      .searchInput
        flex 7
        height 28px
        border-radius 5px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 28px
        color #666
        .iconfont
          font-size 14px
      button
        flex 1
        height 20px
        margin-left 5px
        font-size 12px
        border-radius 5px
        outline none
        color red
        border 1px solid red
        background-color #fff
    .header-ul
      width 100%
      height 30px
      overflow hidden
      .all_nav
        height 30px
        display flex
        float left
        >li
          display flex
          justify-content center
          align-items center
          flex-wrap nowrap
          height 30px
          padding 0 16px
          width 50px
          color #333
          :after
            content ''
            position absolute
            left 15px
            bottom 1px
            width 50px
            height 1px
            background red
          a.active
            color red

    .g-grow
      display flex
      height 36px
      width 100%
      align-items center
      justify-content center
      .item
        color #b4282d
        padding 12px
        .iconfont
          font-size 12px
    .ul-item
      width 100%
      height 180px
      >li
        float left
        text-align center
        margin 5px 10px
        >img
          width 55px
          height 55px

    .recommendImg
      >.img
        width 100%
        height 80px
    .fourImgContainer
      display flex
      width 100%
      height 260px
      flex-wrap wrap
      justify-content center
      li
        position relative
        width 40%
        height 130px
        border-sizing border-box
        margin 2px 0 0 2px
        padding 10px 0 0 10px
        border-radius 4px
        background-color #F5F5F5
        .title
          padding-left 5px
          box-sizing border-box
          color #333
          font-size 14px
        .desc
          margin-top 5px
          margin-bottom 5px
          padding-left 5px
          box-sizing border-box
          color #7f7f7f
          font-size 10px
        .imgContainer
          display flex
          img
            width 75px
            height 75px
            margin-right 4px
</style>
