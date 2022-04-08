<template>
  <body id="p3">
    <div class="bijeli">
      <br />
      <h1>PRIJAVA</h1>
      <!-- registracija???-->
      <br />
      <div class="prviinput">
        <label for="email">E-mail :&nbsp;&nbsp;</label>
        <input
          type="email"
          style="border-radius: 20px; background-color: rgb(188, 201, 176)"
        />
      </div>
      <div class="prviinput">
        <label for="pass">Lozinka :&nbsp;</label>
        <input
          type="password"
          style="border-radius: 20px; background-color: rgb(188, 201, 176)"
        />
      </div>
      <div class="zapotvrdit">
        <input type="submit" value="POTVRDI" class="potvrdi" />
      </div>
    </div>
  </body>
</template>

<style>
body#p3 {
  background-color: rgba(133, 198, 93, 1);
  padding: 25px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: rgb(0, 0, 0);
  padding-top: 100px;
  padding-bottom: 100px;
}
.bijeli {
  background-color: rgb(255, 255, 255);
  height: 500px;
  margin: 20px;
  border-radius: 40px;
  margin: auto;
  width: 40%;
  /*border: 3px solid #73ad21;*/
  padding: 10px;
}
h1 {
  text-align: center;
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 20px;
}
.prviinput {
  text-align: center;
  margin: 10px;
  font-size: 25px;
  border-radius: 20px;
  padding: 20px;
}
.potvrdi {
  background-color: rgba(133, 198, 93, 1);
  border-radius: 20px;
  width: 150px;
  height: 40px;
  font-weight: bold;
}
.zapotvrdit {
  text-align: center;
  margin-top: 70px;
}
</style>
