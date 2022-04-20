<template>
  <div class="boja4">
    <br /><br /><br /><br /><br />
    <h1>PALAIS</h1>
  </div>
</template>
<style>
.boja4 {
  background-color: rgba(162, 184, 208, 1);
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}
</style>
<script>
import store from "@/store";
store.stanje = 0;
export default {
  name: "Palais",
  data: function () {
    return {
      store,
    };
  },
};
</script>