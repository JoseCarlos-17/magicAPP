<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24">
      <Header
        :search="search"
        @update_value="search = $event"
        :searchingCard="searchingCard"
      />

      <el-main>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </el-main>
      <Footer />
    </el-col>
  </el-row>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },

  data () {
    return {
      search: ''
    }
  },

  computed: {
    ...mapState(['cardsList'])
  },

  methods: {
    ...mapActions(['loadCardsList']),

    searchingCard () {
      if (this.$route.params.search) {
        this.$router.push(
          { name: 'cardslist', params: { search: this.search } }
        )

        this.loadCardsList(this.search)
      } else {
        this.$router.push(
          { name: 'cardslist', params: { search: this.search } }
        )
      }
    }
  }
}
</script>

<style>
  body {
    background-image: url('../assets/background/background2.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  p {
    color: white;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }
</style>
