<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <DisplayPokemons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import DisplayPokemons from "@/components/DisplayPokemons.vue";

@Component({
  components: {
    HelloWorld,
    DisplayPokemons,
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss">
.home {
  background: #FF0000;
}
</style>