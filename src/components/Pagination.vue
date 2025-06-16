<template>
  <div class="block">
    <span class="demonstration">When you have few pages</span>
    <el-pagination
      layout="prev, pager, next"
      :total="totalCards">
    </el-pagination>
</div>
</template>

<script>
  export default {
    props: ['totalCards']
  }
</script>

<style>
</style>