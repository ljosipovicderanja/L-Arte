<template>
  <body>
    <div class="boja">
      <br /><br /><br />
      <img
        src="zaslike/louvre/louvre111.jpg"
        style="width: 100%; height: auto"
      />

      <div class="transparent">LOUVRE</div>

      <div class="naslov">LOUVRE</div>

      <br /><br />
      <p>
        Muzej Louvre jedan je od najvećih svjetskih muzeja.<br />
        Nalazi se u središtu Pariza, na obali rijeke Seine, u zdanju nekadašnje
        kraljevske palače. Obilazak opsežnih galerija muzeja Louvre pruža brzi
        tečaj o najboljoj umjetnosti zapadne civilizacije. Ovdje su izložena
        neka od najpoznatijih svjetskih remek-djela, uključujući Mona Lizu
        Leonarda da Vincija.
      </p>

      <!--
      <marquee
        ><img src="zaslike/palais.jpg" />&nbsp;<img src="zaslike/palais.jpg"
      /></marquee> -->
      <br />
    </div>
  </body>
</template>


<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
}
.boja {
  background-color: rgba(206, 145, 111, 1);
  width: 100%;
  height: 200%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
.naslov {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 40px;
  font-size: 2.5vw;
}
.transparent {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  opacity: 0.5;
  font-size: 40px;
  background-color: white;
  width: 800px;
  color: white;
}

p {
  text-align: left;
  font-weight: bold;
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 20px;
  font-size: 1vw;
}
</style>


<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Louvre",
  data: function () {
    return {
      store,
    };
  },
};
</script>