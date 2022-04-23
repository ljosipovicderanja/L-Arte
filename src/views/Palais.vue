<template>
  <body>
    <div class="boja">
      <br /><br /><br />
      <img src="zaslike/palais/palais4.jpg" style="width: 39%" />
      <div class="transparent">GRAND PALAIS</div>
      <div class="naslov">GRAND PALAIS</div>
      <br /><br />
      <div class="tekst">
        “Réunion des musées nationaux – Grand Palais”, ili skraćeno “Rmn-GP”.
        Nova javna kulturna ustanova koja odgovara ministru kulture i
        komunikacija. Rmn-GP je osnovan 2011. nakon spajanja Réunion des musées
        nationaux i Grand Palais, otuda i potječe ime. Smješten u srcu Pariza na
        Avenue des Champs-Élysées, Grand Palais je kultni spomenik Rmn-GP-a.
        Izgrađen za Univerzalnu izložbu 1900. godine i posvećen „Francuskoj
        Republici na slavu francuske umjetnosti“, proglašen je povijesnim
        spomenikom 2000. godine.
      </div>
      <div class="crno">
        <marquee>
          <img
            src="zaslike/palais/palais18.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais2.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais7.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais1.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais10.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais16.jpg"
            style="height: 280px"
          />&nbsp;&nbsp;<img
            src="zaslike/palais/palais8.jpg"
            style="height: 280px"
          />
        </marquee>
      </div>
    </div>
  </body>
</template>


<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
.boja {
  background-color: rgba(162, 184, 208, 1);
  width: 100%;
  height: 200%;
  background-attachment: fixed;
  position: absolute;
}
.naslov {
  margin-left: 50%;
  position: absolute;
  top: 20%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 40px;
  font-size: 2.5vw;
}
.transparent {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  opacity: 0.6;
  font-size: 40px;
  background-color: rgba(167, 208, 193, 0.81);
  width: 100%;
  height: 15%;
  color: rgba(167, 208, 193, 0.81);
  text-align: center;
}
.tekst {
  margin-left: 46%;
  font-weight: bold;
  position: absolute;
  top: 38%;
  margin-right: 6%;

  font-size: 1vw;
}
.crno {
  width: 100%;
  height: 20%;
  background-color: black;
  margin-top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>


<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Palais",
  data: function () {
    return {
      store,
    };
  },
};
</script>