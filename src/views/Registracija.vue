<template>
  <div>
    <div class="pozadina-registracija">
      <br />
      <div class="bijeli-reg">
        <br />
        <h1>REGISTRACIJA</h1>
        <!-- registracija???-->
        <br />
        <div class="centriraj-input">
          <div class="pozicija-inputa">
            <div class="input-lijevo">
              <div class="drugiinput">
                <label for="ime" class="text-input">Ime:&nbsp;&nbsp;</label>
                <input
                  type="text"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>

              <div class="drugiinput">
                <label for="prezime" class="text-input">Prezime:&nbsp;</label>
                <input
                  type="texxt"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>
              <div class="drugiinput">
                <label for="email" class="text-input"
                  >E-mail:&nbsp;&nbsp;</label
                >
                <input
                  type="text"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>
              <div class="drugiinput">
                <label for="pass" class="text-input"
                  >Lozinka:&nbsp;&nbsp;</label
                >
                <input
                  type="password"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>
            </div>
            <div class="input-desno">
              <div class="drugiinput">
                <label for="datumrodenja" class="text-input"
                  >Datum rođenja:&nbsp;&nbsp;</label
                >
                <input
                  type="text"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>
              <div class="drugiinput">
                <label for="mjestostanovanja" class="text-input"
                  >Mjesto stanovanja:&nbsp;&nbsp;</label
                >
                <input
                  type="text"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>
              <div class="drugiinput">
                <label for="mjestostanovanja" class="text-input"
                  >Broj telefona:&nbsp;&nbsp;</label
                >
                <input
                  type="text"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
              </div>
            </div>
          </div>
          <div class="zapotvrdit">
            <input type="submit" value="POTVRDI" class="potvrdi" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pozadina-registracija {
  width: 100%;
  min-height: 100%;
  background-color: #7e0000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-attachment: fixed;
  position: absolute;
}
body#p3 {
  padding: 25px;

  color: rgb(0, 0, 0);
  height: 100%;
}
.bijeli-reg {
  background-color: rgb(255, 255, 255);
  height: 580px;
  margin: 20px;
  border-radius: 40px;
  margin: auto;
  width: 80%;
  /*border: 3px solid #73ad21;*/
  padding: 10px;
  margin-top: 80px;
  box-sizing: border-box;
}
.pozicija-inputa {
  display: flex;
}
.centriraj-input {
}
.input-lijevo {
  float: left;
  margin: auto;
}
.text-input {
  float: left;
}
.input-desno {
  margin-left: 20px;

  margin-left: auto;
  margin-right: auto;
}
h1 {
  text-align: center;
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 20px;
}
.drugiinput {
  text-align: center;
  font-size: 25px;
  border-radius: 20px;
  margin: auto;
  /*
  padding: 20px;
  display:inline-block;*/
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

<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Registracija",
  data: function () {
    return {
      store,
    };
  },
};
</script>