<template>
  <body>
    <div class="boja">
      <br /><br /><br />
      <div class="container-za-slike">
        <div class="pocetneslike">
          <img src="zaslike/orsay1.jpg" style="height: 450px; width: 500px" />
        </div>
        <div class="pocetneslike">
          <img src="zaslike/orsay2.jpg" style="height: 450px; width: 550px" />
        </div>
        <div class="pocetneslike">
          <img src="zaslike/orsay3.jpg" style="height: 450px; width: 500px" />
        </div>

        <div class="centered">MUZEJ D'ORSAY</div>
        <div class="centered1">MUZEJ D'ORSAY</div>
      </div>
      <br />
      <!--
      <p>
        Povijest muzeja (njegove zgrade) prilično je neobična. U središtu Pariza
        na obali Seine, nasuprot vrtova Tuileries, muzej je postavljen u bivšoj
        željezničkoj stanici Orsay, izgrađenoj za Univerzalnu izložbu 1900. Tako
        se sama zgrada mogla smatrati prvim "umjetničkim djelom". u Musee
        d'Orsay, koji prikazuje zbirke umjetnina iz razdoblja od 1848. do 1914.
        godine.
      </p>
      -->
    </div>
  </body>
</template>
<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
.boja {
  background-color: rgba(139, 133, 144, 1);
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
.container-za-slike {
  display: flex;
  height: 210px;
}

.zanaslov {
  background-color: rgb(65, 47, 23);
}
.centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  opacity: 0.5;
  font-size: 40px;
  background-color: white;
  width: 800px;
  color: white;
}

.centered1 {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 40px;
}
</style>
<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Orsay",
  data: function () {
    return {
      store,
    };
  },
};
</script>