<template>
  <section>
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
  </section>
</template>

<script>
  export default {
    name: "SearchText"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

</style>
