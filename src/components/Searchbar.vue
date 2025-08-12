<template>
  <el-row style="display: flex;">
    <el-input
      placeholder="For to search, press enter"
      v-model="search"
      @change="searchingCard"
    >
    </el-input>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['cardsList'])
  },

  data () {
    return {
      search: ''
    }
  },

  methods: {
    ...mapActions(['loadCardsList']),

    searchingCard () {
      if (this.$route.params.search) {
        this.$router.push(
          {
            name: 'cardslist',
            params: { search: this.search }
          }
        )
        this.loadCardsList(this.search)
      } else {
        this.$router.push(
          {
            name: 'cardslist',
            params: { search: this.search }
          }
        )
      }
    }
  }
}
</script>

<style>
  .el-input__inner{
    background-color: rgb(104, 104, 104);
    color: white;
    width: 240px;
  }
</style>
