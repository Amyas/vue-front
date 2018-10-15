import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'

import Home from '../views/Home'
import Article from '../views/Article'
import ArticleDetail from '../views/Article/detail'
import About from '../views/About'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        nav: true
      }
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
      meta: {
        title: '归档',
        nav: true
      }
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component: ArticleDetail,
      meta: {
        title: '文章详情',
        nav: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于',
        nav: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from, next) => {
  Nprogress.done()
})

export default router
