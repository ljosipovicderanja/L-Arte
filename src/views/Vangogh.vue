<template>
  <div class="boja5">
    <br /><br /><br /><br /><br />
    <h1>VAN GOGH</h1>
  </div>
</template>
<style>
.boja5 {
  background-color: rgba(126, 124, 25, 1);
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
  name: "Vangogh",
  data: function () {
    return {
      store,
    };
  },
};
</script>