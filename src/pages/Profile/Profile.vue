<template>
  <section>
    <div class="car_header">
      <span class="goHome">
        <i class="iconfont icon-msite"></i>
      </span>
      <div class="yxtitle">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="logo">
      </div>
      <div class="tips">
        <span class="icon_2">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-shopping"></i>
        </span>
      </div>
    </div>
    <div class="profile-main" v-show="isShow">
      <div class="main-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>
      <div class="login-methods">
        <div class="phone-login" :class="{active: isActive}" @click="gotoLogin('/profile/login', true)">
          <i class="iconfont icon-phone"></i>
          <span>手机号码登录</span>
        </div>
        <div class="email-login" :class="{active: !isActive}" @click="gotoLogin('/profile/login', false)">
          <i class="iconfont icon-email"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="quick-login" @click="gotoRegis('/profile/register', true)">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-52"></i>
        </div>
      </div>
      <div class="login-type">
        <div class="login-wechat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="login-qq">
          <i class="iconfont icon-icon"></i>
          <span>QQ</span>
        </div>
        <div class="login-weibo">
          <i class="iconfont icon-7"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <router-view :setIsShow="setIsShow"/>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Profile",
    data(){
      return {
        isShow:true,
        isActive:true
      }
    },
    methods:{
      gotoLogin(path,isPhoneLogin){
        this.isShow=false
        this.isActive=!this.isActive
        this.$router.replace({path,query:{isPhoneLogin}})
      },
      gotoRegis(path,isPhoneRegis){
        this.isShow=false
        this.$router.replace({path,query:{isPhoneRegis}})
      },
      setIsShow(){
        this.isShow =true
        this.isActive=true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl";
  .car_header
    position relative
    top 0
    left 0
    width 100%
    height 44px
    background-color #fff
    .goHome
      float left
      margin-left 10px
      padding-top 8px
      i
        font-size 24px
    .yxtitle
      position absolute
      width 100%
      height 100%
      display flex
      align-items center
      justify-content center
      img
        width 2.1rem
    .tips
      position absolute
      right 0px
      top -12px
      transform translateY(50%)
      .icon_2
        > i
          font-size 30px
          margin-right 10px

  .profile-main
    height 100%
    background-color #F2F5F4
    .main-logo
      display flex
      justify-content center
      padding 80px 0
      img
        width 134px
        height 46px
    .login-methods
      padding 0 20px 190px
      .phone-login, .email-login
        display flex
        align-items center
        justify-content center
        width 346px
        height 50px
        font-size 14px
        color $red
        border 1px solid $red
        margin-bottom 16px
        &.active
          color #fff
          background-color $red
        i
          width 20px
          height 20px
          font-size 20px
          margin-right 8px
      .quick-login
        font-size 14px
        color #333
        text-align center
        i
          font-size 14px
    .login-type
      display flex
      justify-content center
      align-items baseline
      height 20px
      font-size 14px
      .login-wechat, .login-qq, .login-weibo
        float left
        display flex
        text-align center
        align-items center
        padding 0 20px
        color #7f7f7f
        border-left 1px solid #7f7f7f
      .login-wechat
        border none
      i
        font-size 20px
        margin-right 10px
  .title-logo
    display block
    width 70px
    height 20px
    background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
    background-repeat no-repeat
    background-size 70px 20px
    background-position center
</style>
