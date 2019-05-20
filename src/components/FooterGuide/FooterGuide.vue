<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont icon-msite"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/classify')" :class="{on: isCurrent('/classify')}">
      <span class="item_icon">
        <i class="iconfont icon-classify"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goto('/recommend')" :class="{on: isCurrent('/recommend')}">
      <span class="item_icon">
        <i class="iconfont icon-recommend"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goto('/shopping')" :class="{on: isCurrent('/shopping')}">
      <span class="item_icon">
        <i class="iconfont icon-shopping"></i>
      </span>
      <span>购物车</span>
     </div>
    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-profile"></i>
      </span>
      <span>个人</span>
     </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterGuide',
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path === path
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>


