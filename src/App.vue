<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>


import FooterGuide from "./components/FooterGuide/FooterGuide";
import Shopping from "./pages/Shopping/Shopping"
export default {
  name: 'App',
  components: {
    FooterGuide,
    Shopping

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #app
  width 100%
  height 100%
</style>
