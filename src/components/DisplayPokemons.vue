<template>
  <div class="hello">
    <h1>Pokemon App</h1>
    <div v-if="pokemonList.length <= 100">
      <h3>Loading Pokemons...</h3>
    </div>
    <div v-else>
      <ul>
        <li
          v-for="pokemon in pokemonList"
          :key="pokemon.name"
          v-bind:style="{ background: background }"
        >
          <span>{{ pokemon.name }}</span>
          <span> {{ pokemon.id }}</span>
          <img :src="pokemon.sprites.front_default" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
//import store from "./store/index";

export default {
  name: "DisplayPokemons",
  data() {
    return {
      background: "yellow",
    }; //return
  },
  computed: mapState(["pokemonList"]),
  created() {
    this.$store.dispatch("loadPokemons");
    console.log(this.$store.state.pokemonList);
  },

  // mounted: function () {},

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  /* grid-column-gap: 10px;
  grid-row-gap: 10px; */
}
li {
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  font-weight: 600;
  color: #fff;
  margin: 1rem;
}
a {
  color: #42b983;
}
</style>
 