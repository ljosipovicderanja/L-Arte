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
                  v-model="ime"
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
                  v-model="prezime"
                  type="text"
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
                  v-model="email"
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
                  v-model="password"
                  type="password"
                  style="
                    border-radius: 20px;
                    background-color: rgb(188, 201, 176);
                  "
                /><br /><br />
                <p v-if="less_char" class="alert_message">Unesite najmanje 6 znakova!</p>
                <p v-if="success_register" class="success_message">Uspješna registracija!</p>
              </div>
            </div>
            <div class="input-desno">
              <div class="drugiinput">
                <label for="datumrodenja" class="text-input"
                  >Datum rođenja:&nbsp;&nbsp;</label
                >
                <input
                  v-model="datum_rodenja"
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
                  v-model="mjesto_stanovanja"
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
                  v-model="broj_telefona"
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
            <input type="button" @click="registracija()" value="POTVRDI" class="potvrdi" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import store from "@/store";
import { firebase, db } from "@/firebase";

store.stanje = 0;
export default {
  name: "registracija",
  data: function () {
    return {
      store,
      ime:"",
      prezime:"",
      email:"",
      password: "",
      datum_rodenja: "",
      mjesto_stanovanja: "",
      broj_telefona: "",
      less_char: false,
      success_register: null,
    };
  },
  methods: {
    async registracija() {
      if(this.password.length <=5){
          this.less_char=true;
        }
      else{
        this.less_char=false;
      }
      try {
      console.log("ulazim", firebase)
      
        firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password);
          
        const unique = this.email;
        
        db.collection("user")
          .doc(unique)
          .set({
            ime: this.ime,
            prezime: this.prezime,
            email: this.email,
            password: this.password,
            datum_rodenja: this.datum_rodenja,
            mjesto_stanovanja: this.mjesto_stanovanja,
            broj_telefona: this.broj_telefona,
          });
        this.success_register=true;
      }
       catch(error) {
      
        }
      
    }
  }
};
</script>


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
  margin-top: -70px;
  margin-left: -70px;
  position:absolute
}
.zapotvrdit {
  text-align: center;
  margin-top: 70px;
}


/* Registracija responzivna */


.container {
 max-width: 800px;
 width: 100%;
 margin: 0 auto;
}
#contact {
 background-color: rgba(220, 255, 66, 0.7);
 padding: 20px;
 margin: 50px 0;
}
#contact input, button {
 font: 400 15px 'Open Sans', sans-serif, helvetica, Arial;
}
#contact h1 {
 font-size: 35px;
 font-weight: bold;
 text-align: center;
 color: blue;
}
#contact h3 {
 margin: 5px 0px 15px;
 text-align: center;
}
.row {
 display: flex;
 width: 100% !important;
 padding: 20px 0px;
}
.row .column {
 margin: 0px 20px;
 width: 50%;
}
fieldset {
 border: medium none !important;
 margin:  0 0 10px;
 min-width: 100%;
 width: 100%;
}
#contact input {
 width: 100%;
 border: 1px solid rgb(150, 150, 150);
 background-color: white;
 padding: 10px;
 margin: 5px 0;
}
input[type = "radio"] {
 width: 10% !important;
}
#contact .row .radio {
 border: 1px solid rgb(150, 150, 150);
 background-color: white;
 margin: 7px 0 10px;
 padding: 5px;
}
#contact .row .idCard{
 display: flex;
 height: 45px !important;
 margin: 5px 0;
}
#contact .row .idCard :first-child {
 width: 80px;
}
#contact .row .idCard :last-child {
 width: 40px;
}
#contact .row #phone {
 max-width: 100% !important;
 padding-right: 80px;
}
#contact input:hover {
 transition: border-color 0.3s ease-in-out;
 border: 1px solid rgb(68, 68, 68);
}
#contact button {
 outline: none;
 border: none;
 background-color: blue;
 color: white;
 margin: 0 0 5px 40%;
 padding: 10px;
 font-size: 17px;
 width: 150px;
}
 
#contact button:hover {
 background-color: rgba(0, 0, 255, 0.8);
}
 
#contact input:focus {
 outline: 0;
 border: 1px solid red;
}
 
/* mobile responsive mode */
@media screen and (max-width: 580px)  {
 .row {
  flex-direction: column;
 }
 .row .column {
  width: 90% !important;
 }
 #contact .row #phone {
 padding-right: 180px;
}
}

.alert_message {
  color:rgb(205, 31, 31);
}
.success_message {
  color:rgba(133, 198, 93, 1);
}
</style>