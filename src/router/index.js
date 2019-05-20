import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/Home/Home";
import Classify from '../pages/Classify/Classify'
import Recommend from '../pages/Recommend/Recommend'
import Shopping from '../pages/Shopping/Shopping'
import Profile from '../pages/Profile/Profile'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/classify',component:Classify},
    {path:'/recommend',component:Recommend},
    {path:'/shopping',component:Shopping},
    {path:'/profile',component:Profile}
  ]
})
