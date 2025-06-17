<template>
  <CardListComponent
    :cardsList="cardsList"
    :chosedCard="chosedCard"
  />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CardListComponent from '../components/CardListComponent.vue'
export default {
  name: 'CardList',

  components: {
    CardListComponent
  },

  computed: {
    ...mapState(['cardsList', 'search'])
  },

  watch: {
    search () {
      setTimeout(() => this.loadCardsList(this.search), 1500)
    }
  },

  methods: {
    ...mapActions(['loadCardsList']),

    chosedCard (card) {
      this.$router.push({ name: 'chosedcard', params: { card: card.name } })
    }
  },

  mounted () {
    this.loadCardsList(this.$route.params.search)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  .card {
    color: white;
    margin: 10px;
  }

  .list {
    margin-top: 100px;
    margin-bottom: 212px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-image {
    border-radius: 7px;
    border: solid 3.5px;
    border-color: white;
    width: 270px;
    height: auto;
    overflow: hidden;
  }

  .card-image:hover{
    box-shadow: 0px 0px 15px white;
    transition: ease 0.8s;
  }
</style>
