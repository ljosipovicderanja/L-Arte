<template>
  <div class="pozadina">
    <div class="vodoravno">
      <div class="crni1">
        <img src="zaslike/louvre.jpg" />
        <h1>LOUVRE</h1>
      </div>

      <div class="crni1">
        <img src="zaslike/orsay.jpg" />
        <h1>MUZEJ D'ORSAY</h1>
      </div>
      <div class="crni1">
        <img src="zaslike/palais.jpg" />
        <h1>GRAND PALAIS</h1>
      </div>
      <div class="crni1">
        <img src="zaslike/van-gogh1.jpg" />
        <h1>MUZEJ VAN GOGH</h1>
      </div>
    </div>
  </div>
</template>

<style>
.pozadina {
  background-color: rgba(16, 108, 53, 1);
}
.crni1 {
  background-color: black;
  margin-left: 80px;
  width: 220px;
  height: 220px;
  padding: 10px;
}
.vodoravno {
  margin-top: 20%;
  display: flex;
  padding-left: 120px;
}
img {
  width: 200px;
}
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
</style>

<script>
import store from "@/store";
store.stanje = 0;
export default {
  data: function () {
    return {
      store,
    };
  },
};
</script>