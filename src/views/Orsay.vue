<template>
  <div class="boja">
    <br /><br /><br /><br /><br />
    <h1>ORSAY</h1>
  </div>
</template>
<style>
.boja {
  background-color: rgba(139, 133, 144, 1);
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
  name: "Orsay",
  data: function () {
    return {
      store,
    };
  },
};
</script>