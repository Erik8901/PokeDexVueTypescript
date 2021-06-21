<template>
  <div class="hello">
    <h1>Pokemon App</h1>
    <div v-if="pokemonList.length <= 100">
      <h3>Loading Pokemons...</h3>
    </div>
    <div v-else>
      <ul>
        <router-link :to="{ path: '/Pokemon/', query: { id: this.url } }">
          <li
            v-for="(pokemon, index) in this.pokeList"
            :key="`pokemon-${index}`"
            @click="selectPokemon(pokemon)"
          >
            <div v-if="pokemon.sprites === undefined"></div>
            <div v-else class="pokemons-li-container">
              <img :src="pokemon.sprites.front_default" />
              <span>{{
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }}</span>
              <span> #{{ pokemon.id }}</span>
              <div
                v-if="pokemon.types[1] === undefined"
                class="pokemon-type-container"
              >
                <span> {{ pokemon.types[0].type.name }}</span>
              </div>
              <div v-else>
                <span> {{ pokemon.types[0].type.name }}</span>
                <span> {{ pokemon.types[1].type.name }}</span>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "./store/index";

//  v-bind:style="{ background: background }"

export default {
  name: "DisplayPokemons",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      url: "",
      pokeList: {
        type: Array,
        default: () => [],
      },
    }; //return
  },
  computed: mapState(["pokemonList"]),
  beforeMount() {
    this.$store.dispatch("loadPokemons");
  },
  created() {
   // this.$store.dispatch("loadPokemons");
   this.pokeList = this.$store.state.pokemonList;
  },
  mounted: function () {
    this.runOnLoad();
  },
  // mounted: function () {},
  methods: {
    runOnLoad: function () {
    //  this.pokeList = this.$store.state.pokemonList;
    },
    selectPokemon(pokemon) {
      this.$store.commit("SET_SELECTEDPOKEMON", pokemon);
      this.url = pokemon.name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul,
.pokemons-li-container {
  display: flex;
  flex-direction: column;
}
a {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  width: 97vw;
  /* grid-column-gap: 10px;
  grid-row-gap: 10px; */
}
li {
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  font-weight: 600;
  padding: 1rem;
  color: #000;
  margin: 1rem;
}
li:first-letter {
  text-transform: capitalize;
}
.pokemon-type-container {
  margin-top: 0.6rem;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
 