<template>
  <el-row style="display: flex;">
    <el-input
      placeholder="For to search, press enter"
      :value="search"
      @input="inputSearch"
      @change="searchingCard(search)"
    >
    </el-input>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['search', 'cardsList'])
  },

  methods: {
    ...mapActions(['inputSearch']),

    searchingCard (search) {
      this.$router.push({ name: 'cardslist', params: { search: search } })
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
