<template>
  <div class="block">
    <span class="demonstration"></span>
    <!-- {{ totalCards.length }} -->
    <!-- <el-pagination
      layout="prev, pager, next"
      background="true"
      :total="totalCards"
      :pages-size="pages"
    >
    </el-pagination> -->
</div>
</template>

<script>
export default {
  props: ['totalCards'],

  data () {
    return {
    }
  },

  methods: {
  },

  computed: {
  }
}
</script>

<style>

</style>
