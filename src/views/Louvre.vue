<template>
  <div class="svijetlo-smedi">
    <img src="zaslike/slika11.jpg" />
    <h1>MUZEJ LOUVRE</h1>
  </div>
</template>

<style>
.svijetlo-smedi {
  background-color: rgba(206, 145, 111, 1);
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
h1 {
  text-align: center;
}
</style>

<script>
import store from "@/store";

export default {
  name: "Louvre",
  data: function () {
    return {
      store,
    };
  },
};
</script>

