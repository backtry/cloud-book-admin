import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '../views/index/index'
Vue.use(Router)
const components={
  login:()=>import('../views/login/login'),
  layout:()=>import('../views/layout/index'),
  // index:()=>import('../views/index/index'),
  users:()=>import('../views/users/users')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: components.login
    },
    {
      path:'/layout',
      name:'layout',
      component:components.layout,
      redirect:'/layout/index',
      children:[
        {
          path:'index',
          component:index
        },
        {
          path:'users',
          component:components.users
        },
        {
          path:'userDetails',
          component:()=>import('../views/users/userDetails')
        },
        {
          path:'bookcla',
          component:()=>import('../views/book/bookcla')
        },
        {
          path:'bookEditor',
          name:'bookEditor',
          component:()=>import('../views/book/editor')
        }
      ]
    }
  ]
})
