<template>
  <div>
    <CardListComponent
      :cardsList="cardsList"
      :chosedCard="chosedCard"
    />

    <Pagination :totalCards="cardsList"/>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import { mapActions, mapState } from 'vuex'
import CardListComponent from '../components/CardListComponent.vue'
export default {
  name: 'CardList',

  components: {
    CardListComponent,
    Pagination
  },

  computed: {
    ...mapState(['cardsList'])
  },

  methods: {
    ...mapActions(['loadCardsList']),

    chosedCard (card) {
      this.$router.push({ name: 'chosedcard', params: { card: card.name } })
    }
  },

  beforeMount () {
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
