<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <DisplayPokemons />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DisplayPokemons from "@/components/DisplayPokemons.vue";

@Component({
  components: {
    DisplayPokemons,
  },
})
export default class Home extends Vue {}
</script>


<style lang="scss">
.home {
  background: #cbf6db;
}
</style>