<template>
  <body id="p2">
    <div class="zagaleriju">
      <div class="prikaz">
        <div class="img2">
          <img src="zaslike/slika3.jpg" style="height: 300px" />
        </div>
        <div class="img2">
          <img src="zaslike/slika4.jpg" style="height: 300px" />
        </div>
        <div class="img2">
          <img src="zaslike/slika5.jpg" style="height: 300px" />
        </div>
        <div class="img2">
          <img src="zaslike/slika6.jpg" style="height: 300px" />
        </div>
        <router-link :to="{ name: 'Prijava' }">
          <div class="gumb">
            <font-awesome-icon icon="fa-solid fa-plus " class="iplus" />
          </div>
        </router-link>
      </div>
    </div>

    <div class="t1">
      <p>Podijeli svoje dojmove</p>
    </div>
    <hr
      style="
        width: 19%;
        text-align: left;
        margin-left: 0;
        border-color: black;
        margin-left: 15px;
      "
    />

    <div class="zakomentare">
      <div class="spoj1">
        <div class="purple"></div>
        <div class="dugi1">
          <input type="text" placeholder="Dodaj komentar..." class="kom" />
        </div>
      </div>
      <div class="spoj2">
        <div class="plavi"></div>
        <div class="dugi2">
          <input type="text" class="kom" />
        </div>
      </div>
    </div>

    <br /><br /><br />
  </body>
</template>


<style>
body#p2 {
  background-color: rgba(133, 198, 93, 1);
  padding: 25px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.zagaleriju {
  border-radius: 25px;
  background: rgb(235, 239, 116);
  padding: 20px;
  width: 100%;
  height: 350px;
}
.zakomentare {
  border-radius: 25px;
  background: rgb(235, 239, 116);
  padding: 25px;
  width: 100%;
  height: 400px;
  margin-top: 20px;
}
.t1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 35px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 12px;
}
.prikaz {
  display: flex;
}
.img2 {
  padding: 5px;
}
.gumb {
  border-radius: 50px;
  background-color: rgb(237, 140, 71);
  width: 100px;
  height: 100px;
  margin-top: 100px;
  margin-left: 40px;
}
.iplus {
  margin: 42px;
  color: rgb(195, 56, 9);
}
.spoj1 {
  display: flex;
  margin: 25px;
}
.kom {
  border-radius: 25px;
  border-color: rgb(217, 205, 126);
  background-color: rgb(217, 205, 126);
  height: 50px;
  margin-top: 13px;
}
.purple {
  border-radius: 50px;
  background-color: #5f083a;
  width: 70px;
  height: 70px;
  margin-right: 30px;
}
.spoj2 {
  display: flex;
  margin: 25px;
}
.plavi {
  border-radius: 50px;
  background-color: #8661ff;
  width: 70px;
  height: 70px;
  margin-right: 30px;
}
</style>