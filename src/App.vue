<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: "Carmen";
    src: local("Carmen"),
    url("./fonts/CarmenSansLight.woff") format("woff");
}

body{
  font-family: "Carmen", Arial, Helvetica;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 217, 0);
  font-size: 1.2em;
}

button, input{
  font-family: "Carmen", Arial, Helvetica;
}

li{
  list-style: none;
}

ul{
  padding: 0;
}

textarea:focus, input:focus{
    outline: none;
}
</style>
