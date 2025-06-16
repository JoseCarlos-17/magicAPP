<template>
  <el-row class="chosedCard" v-if="card">
    <el-col :lg="6">
      <div>
        <el-button class="goBack" @click="backToTheCardList()">
          Back to the list
        </el-button>
      </div>

      <img :src="card.image_uris.png">
    </el-col>

    <el-col :xs="24" :sm="24" :md="24" :lg="12" class="card-description">
      <h2><b>Name: </b>{{ card.name }}</h2>
      <h3><b>Type: </b>{{ card.type_line }}</h3>

      <p v-show="card.power && card.toughness">
        <b>Power/Toughness: {{ card.power }}/{{ card.toughness }}</b>
      </p>

      <p v-show="card.oracle_text">
        <b>Description: </b>{{ card.oracle_text }}
      </p>

      <p v-show="card.flavor_text">
        <i>{{ card.flavor_text }}</i>
      </p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['card', 'backToTheCardList']
}
</script>

<style>

</style>
