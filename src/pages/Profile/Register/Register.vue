<template>
  <div class="register-container">
    <div class="regis-title">
      <span>{{$route.query.isPhoneRegis ? '手机号注册' : '邮箱账号注册'}}</span>
    </div>
    <div class="phone-regis" v-show="$route.query.isPhoneRegis">
      <div class="phone">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入验证码" v-model="code">
        <button class="get-code">获取验证码</button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" v-model="confirmPwd">
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <button class="register" @click="register">注册</button>
    </div>
    <div class="email-regis" v-show="$route.query.isPhoneRegis">
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email">
      </div>
      <div class="pwd">
        <input type="text" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="confirm-pwd">
        <input type="text" placeholder="确认密码" v-model="confirmPwd">
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <button class="register" @click="register">注册</button>
    </div>
    <div class="toash-info">
      <span class="select" :class="{selected:isSelect}" @click="this.isSelect=!this.isSelect">
        <input type="checkbox">
      </span>
      <div class="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div class="email-register"
         @click="$router.replace({path:'/profile/register',query:{isPhoneRegis: false}})"
          v-show="$router.query.isPhoneRegis"
    >
      <span>邮箱账号注册</span>
      <i class="iconfont icon-52"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Register",
    data(){
      return {
        errorMsg:"",
        isSelect:true,
        phone:"",
        pwd:"",
        confirmPwd:"",
        code:"",
        email:""
      }
    },
    props:{
      setIsShow:Function
    },
    methods:{
      toggleLoginMethod(){
        this.setIsShow()
      },
      register () {
        const {phone, code, email, pwd, confirmPwd} = this;
        if (this.$route.query.isPhoneRegis) {
          // 手机号注册
          if (phone.trim() === '') {
            this.errorMsg = '手机号不能为空';
          } else if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.errorMsg = '手机号格式不正确';
          } else if (code.trim() === '') {
            this.errorMsg = '验证码不能为空';
          } else if (!(/^\d{6}$/.test(code))) {
            this.errorMsg = '请输入正确的6位数字验证码';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else if (pwd !== confirmPwd) {
            this.errorMsg = '两次输入的密码不一致';
          } else {
            this.errorMsg = '';
            console.log('注册成功');
          }
        } else {
          // 邮箱注册
          if (email.trim() === '') {
            this.errorMsg = '邮箱不能为空';
          } else if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))) {
            this.errorMsg = '邮箱格式不正确';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else if (pwd !== confirmPwd) {
            this.errorMsg = '两次输入的密码不一致';
          } else {
            this.errorMsg = '';
            console.log('注册成功');
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .register-container
    height 100%
    background-color #fff
    padding 0 20px
    .regis-title
      margin-top 14px
      display flex
      justify-content center
      span
        font-size 18px
        color #333
    .phone-regis, .email-regis
      padding-top 60px
      .error-message
        font-size 12px
        color $red
        margin 5px 0
      .phone, .code, .pwd, .email, .confirm-pwd
        width 340px
        height 30px
        border-bottom 1px solid #ddd
        margin-top 10px
        clearFix()
        input
          float left
          margin 14px 0
          font-size 14px
          color #666
          border 1px solid rgba(0,0,0,0)
          outline none
        button
          float right
          width 84px
          height 30px
          font-size 14px
          color #333
          outline none
          margin 8px 5px 0 0
          background-color #fff
          border-radius 5px
          border 1px solid #333
      .register
        width 340px
        height 50px
        font-size 14px
        color #fff
        outline none
        background-color $red
        border 1px solid $red
    .toash-info
      height 20px
      display flex
      align-items center
      margin-top 15px
      .select
        width 14px
        height 14px
        margin-right 5px
        border 1px solid #7f7f7f
        &.selected
          background-image url("https://urswebzj.nosdn.127.net/webzj_cdn101/sprite_61fbe151ab715649c6b7c4ec39156201.png")
          background-repeat no-repeat
          background-position -180px -44px
      input
        width 20px
        height 20px
        outline none
        visibility hidden
      .text
        a
          color #007AFF
    .email-register
      display flex
      justify-content center
      align-items baseline
      margin-top 16px
      font-size 14px
      i
        font-size 14px
</style>
