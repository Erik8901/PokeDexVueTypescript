<template>
  <div class="hello">
    <SelectedPokemonV2 />
    <!-- <div v-for="poke in SELECTED_POKEMON" :key="poke.id">
      <span>{{ poke.name }}</span>
    </div> -->
    <!-- <div v-for="poke in pokemon" :key="poke.id">
      <span>{{ poke.name }}W</span>
    </div> -->
    <!-- <ul>
      <li
        class="pokemon-obj"
        v-for="pokemon in selectedPokemon"
        :key="pokemon.id"
      >
        <span>{{ pokemon.name }}V1</span>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import SelectedPokemonV2 from "@/components/SelectedPokemonV2.vue";

@Component({
  components: {
    SelectedPokemonV2,
  },
  data() {
    return {
      pokemon: {
        type: Object,
        default: () => ({}),
      },
    }; //return
  },
  computed: {
    selectedPokemon: {
      get(): Record<any, unknown> {
        return this.$store.state.selectedPokemon;
      },
    },
  },
  mounted: function () {
    this.runOnLoad(); //method1 will execute at pageload
  },
  methods: {
    runOnLoad: function () {
      console.log("Seleced Pokemon: " + this.$store.state.selectedPokemon.name);
      this.pokemon = this.$store.state.selectedPokemon;
    },
  },
})
export default class SelectedPokemon extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.pokemon-obj {
  background: yellow;
}
a {
  color: #42b983;
}
</style>