<template>
  <body id="b1">
    <div class="container">
      <div class="img">
        <img src="zaslike/slika1.jpg" />
      </div>

      <div class="img">
        <img src="zaslike/slika2.jpg" />
      </div>
    </div>
  </body>
</template>


<style>
.container {
  display: flex;
  box-sizing: border-box;
  background-color: black;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
body#b1 {
  background-color: blueviolet;
}
</style>
