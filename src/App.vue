<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
 font-family: "CarmenSansLight";
 src: url("/assets/fonts/CarmenSansLight.otf") format("otf"),
}

body{
  font-family: "CarmenSansLight";
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 217, 0);
  font-size: 1.2em;
}

li{
  list-style: none;
}

textarea:focus, input:focus{
    outline: none;
}
</style>
