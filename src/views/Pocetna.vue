<template>
  <div class="pozadina-pocetna">
    <div class="okrugla-slika"><p class="larte-text">L`Arte</p></div>
  </div>
</template>

<style>
body#p1 {
  background-color: blueviolet;
}
.larte-text { 
    color: black;
    position: absolute;
    font-weight: bold;
    letter-spacing: 1rem;
    font-size: 38px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
}
.okrugla-slika {
    background-image: url("../assets/zastart.jpg");;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    margin:auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 99;
}
.pocetna-slika-lijevo {
    background-image: url("../assets/pocetna_merged_left.jpg");;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    margin:auto;
    position: absolute;
    
    left: 0%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 99;
}
.pozadina-pocetna {
    background-color: #4bc455;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    position: absolute;
    z-index: -1;
}
</style>

<script>
import store from "@/store";
store.stanje=1;
export default {
data: function() {
return {
        store,
        };
        
    },
}

</script>