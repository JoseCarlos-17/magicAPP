<template>
  <CardSelectedComponent
    :card="card"
    :backToTheCardList="backToTheCardList"
  />
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CardSelectedComponent from '../components/CardSelectedComponent.vue'
export default {
  name: 'CardScreen',

  components: {
    CardSelectedComponent
  },

  computed: {
    ...mapState(['card', 'search'])
  },

  methods: {
    ...mapActions(['loadCard']),

    backToTheCardList () {
      this.$router.back({
        name: 'cardslist',
        params: { cardsList: this.search }
      })
    }
  },

  beforeMount () {
    this.loadCard(this.$route.params.card)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  h1 {
    font-family: 'Libre Baskerville', serif;
  }

  .goBack {
    font-family: 'Libre Baskerville', serif;
    color: white;
    margin-top: 10px;
    margin-bottom: 12px;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 15px;
    background-color: rgb(223, 119, 34);
  }

  .goBack:hover {
    background-color: rgb(223, 119, 34);
    color: white;
  }

  .chosedCard {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 220px;
  }

  .chosedCard img {
    border: 3px solid white;
    overflow: hidden;
    border-radius: 10px;
    width: 270px;
    margin: 50px 0px 0px 0px;
  }

   .card-description {
    color: white;
    background-color: rgb(40, 49, 49);
    font-family: 'Old Standard TT', serif;
    border-radius: 20px;
    text-align: center;
    word-wrap: break-word;
    margin: 60px 0px 20px 0px;
    padding: 20px 20px 20px 20px;
    border: 5px outset white;
    font-size: 22px;
  }
</style>
