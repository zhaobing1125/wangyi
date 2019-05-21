<template>
  <section>
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
  </section>
</template>

<script>
  export default {
    name: "G-grow"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
</style>
