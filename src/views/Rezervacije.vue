<template>
  <div class="home-page">
    <div class="containerr">
      <div class="centerr">
        <div class="poravnaj-text">
          <div class="respon">
            <div class="text1">Postani korisnik</div>
            <router-link to="/registracija"
              ><img class="img" src="zaslike/slika2.jpg"
            /></router-link>

            <div class="text2">Korisnik</div>
            <router-link to="/prijava"
              ><img class="img" src="zaslike/slika11.jpg"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.home-page {
  background-color: #7e0000;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
.poravnaj-text {
  padding: 20px;
}
.containerr {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  background-color: #7e0000;
  margin: auto;
}
.img {
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 400px;
  width: 450px;
  border-radius: 125px;
}
.text1 {
  position: absolute;
  color: white;
}
.text2 {
  position: absolute;
  color: white;
}
.centerr {
  display: flex;
  margin: auto;
  margin-top: 220px;
}

body#b1 {
  background-color: blueviolet;
}
.respon {
  width: 100%;
  height: auto;
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