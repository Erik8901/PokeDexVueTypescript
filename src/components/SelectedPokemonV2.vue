<template>
  <div class="selected-pokemon">
    <h1>Pokemon V2</h1>
    <div class="selected-pokemon-container">
      <span>{{ this.data.name }}</span>
      <span>{{ this.data.id }}</span>
      <div class="container-selected-pokemons-imgs">
        <img :src="this.data.sprites.front_shiny" />
        <img :src="this.data.sprites.back_default" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//  v-bind:style="{ background: background }"

export default {
  name: "SelectedPokemon",
  props: {},
  data() {
    return {
      data: {
        type: Object,
        default: () => ({}),
      },
    }; //return
  },
  selectedPokemon: {},
  mounted: function () {
    this.runOnLoad();
  },
  methods: {
    runOnLoad: function () {
      console.log("Seleced Pokemon: " + this.$store.state.selectedPokemon.name);
      console.log(this.$store.state.selectedPokemon.id);
      this.data = this.$store.state.selectedPokemon;
      console.log(this.data.moves);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
 