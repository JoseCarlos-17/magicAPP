<template>
  <el-row style="display: flex;">
    <el-input
      placeholder="For to search, press enter"
      :value="search"
      @input="$emit('update_value', $event)"
      @change="searchingCard"
    >
    </el-input>
  </el-row>
</template>

<script>
export default {
  props: ['search', 'searchingCard']
}
</script>

<style>
  .el-input__inner{
    background-color: rgb(104, 104, 104);
    color: white;
    width: 240px;
  }
</style>
