<template>
  <div class="selected-pokemon">
    <h1>Pokemon V2</h1>
    <div
      v-if="this.Pokemon.name === undefined"
      class="selected-pokemon-container"
    >
      <span>Loading...</span>
    </div>
    <div v-else class="pokemon-info-container">
      <h2>
        {{
          this.Pokemon.name.charAt(0).toUpperCase() + this.Pokemon.name.slice(1)
        }}
      </h2>
      <span>#{{ this.Pokemon.id }}</span>
      <div class="container-selected-pokemons-imgs">
        <img :src="this.Pokemon.sprites.other.dream_world.front_default" />
        <!-- <img :src="this.Pokemon.sprites.back_default" /> -->
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
      Pokemon: {
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
      this.Pokemon = this.$store.state.selectedPokemon;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.pokemon-info-container {
  text-align: left;
  padding-left: 10rem;
  font-weight: 600;
}
img {
  height: 20rem;
  width: 20rem;
}
</style>
 