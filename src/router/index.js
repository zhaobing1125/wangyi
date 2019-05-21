import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/Home/Home";
import Classify from '../pages/Classify/Classify'
import Recommend from '../pages/Recommend/Recommend'
import Shopping from '../pages/Shopping/Shopping'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Profile/Login/Login'
import Register from '../pages/Profile/Register/Register'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/classify',component:Classify},
    {path:'/recommend',component:Recommend},
    {path:'/shopping',component:Shopping},
    {path:'/profile',component:Profile},
    {path:'/profile/login',component:Login},
    {path:'/profile/register',component:Register}
  ]
})
