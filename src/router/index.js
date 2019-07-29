import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DictionaryList from '@/components/DictionaryList'
//const UserList = resolve => require(['@/components/UserList'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DictionaryList',
      component: DictionaryList
    }
  ]
})


