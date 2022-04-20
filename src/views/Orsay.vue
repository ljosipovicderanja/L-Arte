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
          <img src="zaslike/orsay3.jpg" style="height: 450px; width: 486px" />
        </div>

        <div class="centered">MUZEJ D'ORSAY</div>
        <div class="centered1">MUZEJ D'ORSAY</div>
      </div>
      <br /><br />
      <div class="zatekst">
        <p>
          Povijest muzeja (njegove zgrade) prilično je neobična. U središtu
          Pariza na obali Seine, nasuprot vrtova Tuileries, muzej je postavljen
          u <br />bivšoj željezničkoj stanici Orsay, izgrađenoj za Univerzalnu
          izložbu 1900. Tako se sama zgrada mogla smatrati prvim "umjetničkim
          djelom". <br />u Musee d'Orsay, koji prikazuje zbirke umjetnina iz
          razdoblja od 1848. do 1914. godine.
        </p>
      </div>
      <br />
      <div class="za-balu">
        <div class="bala1"></div>
        <div class="bala"></div>
        <div class="bala3"></div>
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
.zatekst {
  text-align: center;
  margin-top: 280px;
  font-weight: bold;
}
.bala1 {
  height: 20px;
  width: 20px;
  background-color: rgb(240, 242, 229);
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 7px;
}
.bala {
  height: 30px;
  width: 30px;
  background-color: rgb(240, 242, 229);
  border-radius: 25px;
  margin-left: 20px;
}
.bala3 {
  height: 20px;
  width: 20px;
  background-color: rgb(240, 242, 229);
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 7px;
}
.za-balu {
  display: flex;
  margin-left: 700px;
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