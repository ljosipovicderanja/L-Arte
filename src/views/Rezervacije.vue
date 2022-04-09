<template>
  <div class="home-page">
    <div class="containerr">
      
        <div class="centerr">
            <div class="poravnaj-text">
              <p class="text1">Postani korisnik</p>
              <p class="text2">Korisnik</p>
            </div>
        <router-link to="/registracija"><img class="img img-left" src="zaslike/slika2.jpg" /></router-link>
        
        <router-link to="/prijava"><img class="img" src="zaslike/slika1.jpg" /></router-link>
        </div>
      </div>
  </div>
</template>


<style>
.home-page {
  background-color: #7E0000;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
.poravnaj-text{

}
.containerr {
  width:100%;
  display: flex;
  box-sizing: border-box;
  background-color: #7E0000;
  margin:auto;
}
.img {
  
  justify-content: center;
  align-items: center;
  padding: 20px;
  height:400px;
  width:400px;
  border-radius: 125px;
}
.text1 {
  position:absolute;
  color: white;
  margin-left: 150px;
  margin-bottom: 10px;
}
.text2 {
  position:absolute;
  color: white;
  margin-left: 670px;
  margin-bottom: 10px;
}
.centerr{
  display: flex;
  margin:auto;
  margin-top:220px;
}

.img-left{
  margin-right:100px;
}

body#b1 {
  background-color: blueviolet;
}
</style>

<script>
import store from "@/store";
store.stanje=0;
export default {
data: function() {
return {
        store,
        };
        
    },
}

</script>