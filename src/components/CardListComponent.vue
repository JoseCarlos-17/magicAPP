<template>
  <el-row v-if="cardsList">
    <el-col class="list">
      <el-row v-for="card in cardsList" :key="card.id" class="card">
        <el-col>
          <figure>
            <img
              v-if="card.image_uris"
              :src="card.image_uris.normal"
              class="card-image"
              @click="chosedCard(card)"
            >
          </figure>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['cardsList', 'chosedCard'],

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
