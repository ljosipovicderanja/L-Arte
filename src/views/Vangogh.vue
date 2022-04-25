<template>
  <body>
    <div class="boja">
      <br /><br /><br />
      <div class="naslov">MUZEJ VAN GOGH</div>
      <br /><br />
      <div class="prva-slika">
        <div class="za-balu">
          <div class="bala1"></div>
          <div class="bala"></div>
          <div class="bala3"></div>
        </div>
        <p>
          Van Goghov muzej u Amsterdamu čuva najveću zbirku umjetničkih djela
          Vincenta van Gogha (1853.-1890.) na svijetu. Stalna zbirka uključuje
          preko 200 slika Vincenta van Gogha, 500 crteža i više od 750 pisama.
          Muzej također predstavlja izložbe o raznim temama iz povijesti
          umjetnosti 19. stoljeća.
        </p>
        <div class="za-balu-druga">
          <div class="bala1-druga"></div>
          <div class="bala-druga"></div>
          <div class="bala3-druga"></div>
        </div>
        <img src="zaslike/vangogh/vangogh2.jpg" style="width: 50%" />
      </div>
      <br /><br />
      <div class="druga-slika">
        <img id="druga" src="zaslike/vangogh/vangogh3.jpg" />
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
  background-color: rgba(126, 124, 25, 1);
  width: 100%;
  height: 280%;
  background-attachment: fixed;
  position: absolute;
}
.naslov {
  font-size: 2.5vw;
  font-weight: bold;
  background-color: rgba(215, 135, 46, 0.83);
  height: 8%;
  padding: 4%;
  text-align: center;
}
img {
  border: 7px solid black;
  margin-left: 47%;
}

p {
  text-align: left;
  margin-left: 7%;
  position: absolute;
  top: 23%;
  /*transform: translate(-50%, -50%);*/
  font-weight: bold;
  margin-right: 60%;
}
/*.prva-slika {
  width: 100%;
  height: auto;
}*/
#druga {
  width: 40%;
  margin-left: 4%;
}
.druga-slika {
  padding-top: 6%;
}
.bala1 {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 15%;
}
.bala {
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
}
.bala3 {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 15%;
}
.za-balu {
  display: flex;
  margin-left: 270px;
  margin-top: 7%;
  position: absolute;
}
.bala1-druga {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 2%;
}
.bala-druga {
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 10%;
}
.bala3-druga {
  height: 20px;
  width: 20px;
  background-color: black;
  border-radius: 25px;
  margin-left: 20px;
  margin-top: 2%;
}
.za-balu-druga {
  display: flex;
  margin-left: 270px;
  margin-top: 25%;
  position: absolute;
}
</style>


<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Vangogh",
  data: function () {
    return {
      store,
    };
  },
};
</script>



