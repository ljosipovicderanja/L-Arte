<template>
  <div id="app">
    <div v-if="store.stanje == 0">
      <nav id="nav" class="navbar">
        <a class="navbar-brand">
          <router-link to="/muzeji">
            <font-awesome-icon icon="fa-solid fa-house" class="ikona"
          /></router-link>
          <router-link to="/muzeji">&nbsp;L'Arte</router-link>
        </a>
        <router-link to="/rezervacije">REZERVACIJE</router-link>
        <router-link to="/galerija">GALERIJA</router-link>
        <router-link to="/kontakt">KONTAKT</router-link>
        <br />
      </nav>
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
  padding: 20px;
  background-color: black;
  position: absolute;
  width: 100%;
  z-index: 99;
  a {
    font-weight: 300;
    color: white;

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
<script>
import store from "@/store";

export default {
  data: function () {
    return {
      store,
    };
  },
};
</script>
