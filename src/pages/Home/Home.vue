<template>
  <header class="header-container">
    <div style="padding-bottom: 300px">
  <!--    头部搜索框-->
      <HeaderSearch></HeaderSearch>
  <!--    搜索底部文字-->
      <SearchText></SearchText>
  <!--    轮播图-->
      <Swiper></Swiper>
  <!--图标说明-->
      <Ggrow></Ggrow>
  <!--10项ul那里-->
      <UlItem></UlItem>
  <!--    520推荐-->
      <RecommendImg></RecommendImg>
  <!--    性价比之王-->
      <FourImage></FourImage>
  <!--类目热销榜-->
      <Popular></Popular>
    </div>
  </header>
</template>

<script>
  import BScroll from 'better-scroll'
  import HeaderSearch from './components/HeaderSearch/HeaderSearch'
  import Swiper from './components/Swiper/Swiper'
  import Popular from './components/Popular/Popular'
  import FourImage from './components/FourImage/FourImage'
  import Ggrow from './components/G-grow/G-grow'
  import SearchText from './components/SearchText/SearchText'
  import UlItem from './components/UlItem/UlItem'
  import RecommendImg from './components/RecommendImg/RecommendImg'
  export default {
    name: "Home",
    components: {Swiper,Popular,FourImage,Ggrow,SearchText,HeaderSearch,UlItem,RecommendImg},
    mounted() {
      this.$nextTick(()=>{
        new BScroll('.header-ul',{
          click:true,
          scrollX:true
        })
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





</style>
