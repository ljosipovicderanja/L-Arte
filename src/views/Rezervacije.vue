<template>
  <div class="rezervacije">
    <img
      alt="rozice"
      src="../assets/zastart.jpg"
      width="200"
      height="200"
      class="klasazastart"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Rezervacije",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.klasazastart {
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

body {
  background-color: #7cd97a;
}
</style>
