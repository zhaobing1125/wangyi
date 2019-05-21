<template>
  <section>
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
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "Swiper",
    mounted(){
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

<style scoped>

</style>
