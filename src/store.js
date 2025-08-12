import Vue from 'vue'
import Vuex from 'vuex'
import { Card } from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardsList: [],
    card: null
  },

  getters: {
    cardsList (state) {
      return state.cardsList
    },

    card (state) {
      return state.card
    }
  },

  mutations: {
    setCardsList (state, cardsList) {
      state.cardsList = cardsList
    },

    setCard (state, card) {
      state.card = card
    }
  },

  actions: {
    loadCardsList ({ commit }, payload) {
      return Card.getCardsList(payload).then(response => {
        commit('setCardsList', response.data.data)
      }).catch((error) => error)
    },

    loadCard ({ commit }, payload) {
      return Card.getCard(payload).then(response => {
        commit('setCard', response.data)
      }).catch(error => error)
    }
  }
})
