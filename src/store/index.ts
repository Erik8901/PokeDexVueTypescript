import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonList: [],
    amount: 151
  },
  mutations: {
    SET_POKEMONLIST: (state, pokemon) => {
      if (state.pokemonList.length !== state.amount) {
        state.pokemonList.push(pokemon)
      }
    }
  },
  actions: {
    loadPokemons({ commit, state }) {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=' + state.amount).then(result => {
        result.data.results.map(char => axios.get(char.url).then(res => {
          commit("SET_POKEMONLIST", res.data)
        }))
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }//loadPokemons
  },
  modules: {
  }
})
