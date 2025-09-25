<template>
  <div>
    <CardListComponent
      :cardsList="paginatedCards"
      :chosedCard="chosedCard"
    />

    <Pagination
      :totalCards="cardsList"
      @next="nextPage"
      @prev="prevPage"
      @current-page="getCurrentPage"
    />
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

  data () {
    return {
      perPage: 8,
      pages: [],
      page: 1
    }
  },

  methods: {
    ...mapActions(['loadCardsList']),

    chosedCard (card) {
      this.$router.push({ name: 'chosedcard', params: { card: card.name } })
    },

    setPages () {
      let numberOfPages = Math.ceil(this.cardsList.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },

    nextPage () {
      this.page++
    },

    prevPage () {
      this.page--
    },

    scrollToTop() {
      window.scrollTo({ top: 0 });
    },

    getCurrentPage (val) {
      this.page = val
      this.scrollToTop()
    },

    paginate (cards) {
      let page = this.page
      let perPage = this.perPage
      let from = (page * perPage) - perPage
      let to = (page * perPage)
      return cards.slice(from, to)
    }
  },

  computed: {
    ...mapState(['cardsList']),

    paginatedCards () {
      return this.paginate(this.cardsList)
    }
  },

  watch: {
    cardsList () {
      this.setPages()
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
    transition: ease 0.2s;
  }
</style>
