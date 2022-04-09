<template>
  <body id="p1">
    <div class="about"><br><br><br>
      <h1>This is an KONTAKT page</h1>
      <p>thrthrhr</p>
    </div>
  </body>
</template>

<style>
body#p1 {
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