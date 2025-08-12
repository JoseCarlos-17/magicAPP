<template>
  <div class="block">
    <span class="demonstration">When you have {{ totalCards.length }} pages</span>
    <el-pagination
      layout="prev, pager, next"
      @current-change="current_page"
    >
    </el-pagination>
</div>
</template>

<script>
export default {
  props: ['totalCards'],

  methods: {
    current_page (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
