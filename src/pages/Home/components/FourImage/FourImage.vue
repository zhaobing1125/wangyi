<template>
  <section>
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
  </section>
</template>

<script>
  export default {
    name: "FourImage"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .fourImgContainer
    display flex
    width 100%
    height 310px
    flex-wrap wrap
    justify-content center
    li
      position relative
      width 40%
      height 130px
      border-sizing border-box
      margin 2px 0 0 2px
      padding 20px 0 0 20px
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
