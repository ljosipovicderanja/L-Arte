<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <font-awesome-icon icon="fa-solid fa-house" class="ikona" />
        <router-link to="/">&nbsp;L'Arte</router-link>
      </a>
      <router-link to="/">REZERVACIJE</router-link>
      <router-link to="/galerija">GALERIJA</router-link>
      <router-link to="/kontakt">KONTAKT</router-link>
      <br />
    </nav>
    <br />
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ikona {
  position: relative;
}
.ikona font-awesome-icon {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>

