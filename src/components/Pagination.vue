<template>
  <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      layout="prev, pager, next"
      :background="true"
      :total="totalCards.length"
      @next-click="$emit('next')"
      @prev-click="$emit('prev')"
      @current-change="$emit('current-page', $event)"
    />
</div>
</template>

<script>
export default {
  props: ['totalCards']
}
</script>

<style>

</style>
