<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #3B4CCA;
  text-align: left;
  border-bottom: 10px solid #FFDE00;

  a {
    font-weight: bold;
    color: #ffff;

    &.router-link-exact-active {
      color: #FFDE00;
    }
  }
}
</style>
