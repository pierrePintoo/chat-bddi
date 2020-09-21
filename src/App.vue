<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
@font-face {
    font-family: "Carmen";
    src: local("Carmen"),
    url("./fonts/CarmenSansThin.woff") format("woff");
}

@font-face {
    font-family: "CarmenRegular";
    src: local("CarmenRegular"),
    url("./fonts/CarmenSansLight.woff") format("woff");
}

@font-face {
    font-family: "CarmenSemiBold";
    src: local("CarmenSemiBold"),
    url("./fonts/CarmenSansSemiBold.woff") format("woff");
}

body{
  font-family: "Carmen", Arial, Helvetica;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 217, 0);
  font-size: 15px;
  overflow: hidden;
}

strong{
  font-weight: normal;
}

#app{
  height: 100%;
}

button, input{
  font-family: "Carmen", Arial, Helvetica;
}

li{
  list-style: none;
}

ul{
  padding: 0;
  margin: 0;
}

textarea:focus, input:focus{
    outline: none;
}
</style>
