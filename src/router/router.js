import VueRouter from 'vue-router'
import Vue from 'vue'

import login from '../components/login'
import register from '../components/register'
import home from '../components/home'
import message from '../views/message'
import other from '../views/other'
import shop from '../views/shop'
import users from '../views/users'
import index from '../views/index'


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
                    path: '/home/message',
                    name:'message',
                    component: message
                },
                {
                    path: '/home/other',
                    name:'other',
                    component: other
                },
                {
                    path: '/home/shop',
                    name:'shop',
                    component: shop
                },
                {
                    path: '/home/users',
                    name:'users',
                    component: users
                },
            ]
        }

    ]
})

export default router