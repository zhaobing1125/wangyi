<template>
  <section>
    <div class="header-search">
      <span class="logo"></span>
      <div class="searchInput">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共XXX件好物</span>
      </div>
      <button>登录</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HeaderSearch"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
</style>
