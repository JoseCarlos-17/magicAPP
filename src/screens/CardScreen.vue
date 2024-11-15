<template>
  <div>
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
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'card',
      'search'
    ])
  },

  methods: {
    ...mapActions([
      'loadCard'
    ]),

    backToTheCardList () {
      this.$router.push({
        name: `cardlist`,
        params: { cardsList: this.search }
      })
    }
  },

  mounted () {
    this.loadCard(this.$route.query.chosedcard.name)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  h1 {
    font-family: 'Libre Baskerville', serif;
  }

  .goBack {
    font-family: 'Libre Baskerville', serif;
    color: white;
    margin-top: 10px;
    margin-bottom: 12px;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 15px;
    background-color: rgb(223, 119, 34);
  }

  .goBack:hover {
    background-color: rgb(223, 119, 34);
    color: white;
  }

  .chosedCard {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 220px;
  }

  .chosedCard img {
    border: 3px solid white;
    overflow: hidden;
    border-radius: 10px;
    width: 270px;
    margin: 50px 0px 0px 0px;
  }

   .card-description {
    color: white;
    background-color: rgb(40, 49, 49);
    font-family: 'Old Standard TT', serif;
    border-radius: 20px;
    text-align: center;
    word-wrap: break-word;
    margin: 60px 0px 20px 0px;
    padding: 20px 20px 20px 20px;
    border: 5px outset white;
    font-size: 22px;
  }
</style>
