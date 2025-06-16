import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '../screens/MainScreen'
import Layout from '../layouts/Layout'
import CardList from '../screens/CardList'
import CardScreen from '../screens/CardScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'mainscreen',
      children: [
        { path: 'mainscreen', component: MainScreen, name: 'mainscreen' },
        { path: 'cardslist/:search', component: CardList, name: 'cardslist' },
        { path: 'cardsList/:card', component: CardScreen, name: 'chosedcard' }
      ]
    }
  ]
})
