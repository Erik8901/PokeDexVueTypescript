<template>
  <div class="hello">
    <ul>
      <li v-for="pokemon in selectedPokemon" :key="pokemon.name">
        <span>{{ pokemon.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "./store/index";

@Component({
  computed: {
    selectedPokemon: {
      get(): Record<any, unknown> {
        return this.$store.state.selectedPokemon;
      },
    },
    // other stuff
  },
})
export default class HelloWorld extends Vue {
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
