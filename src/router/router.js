import VueRouter from 'vue-router'
import Vue from 'vue'

import login from '../components/login'
import register from '../components/register'
import home from '../components/home'
import index from '../views/index'
import foodlist from '../views/foodlist'
import storelist from '../views/storelist'
import userlist from '../views/userlist'
import orderlist from '../views/orderlist'


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name:'login',
            component: login
        },
        {
            path: '/register',
            name:'register',
            component: register
        },
        {
            path: '/home',
            name:'home',
            component: home,
            children: [
                {
                    path: '/home/index',
                    name:'index',
                    component: index
                },
                {
                    path: '/home/storelist',
                    name:'storelist',
                    component: storelist
                },
                {
                    path: '/home/foodlist',
                    name:'foodlist',
                    component: foodlist
                },
                {
                    path: '/home/userlist',
                    name:'userlist',
                    component: userlist
                },
                {
                    path: '/home/orderlist',
                    name:'orderlist',
                    component: orderlist
                },
  
            ]
        }

    ]
})

export default router