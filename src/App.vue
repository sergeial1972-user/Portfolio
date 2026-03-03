<template>
<body>
<div class="app">
  <div class="app-header"><header><h1>Welcome</h1></header> </div>
  <div class="main">
    <header class="about-header">
      <h1>About me</h1>
      <p> sifjoivsoncklnvoijvirgjejsopjmdsjersojwsccaoiaqjds90asj</p>
    </header>
  </div>
  <div class="side">Side</div>
</div>
</body>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
.app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;     /* 3 равные колонки для main:side 2:1 */
  grid-template-rows: repeat(5, 1fr);     /* 5 строк высотой viewport */
  height: 100vh;
  gap: 10px;
  padding: 20px;
}

.app-header { grid-area: 1 / 1 / 2 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Bubblegum Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.main      { grid-area: 2 / 1 / 6 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
}
.side      { grid-area: 2 / 3 / 6 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;


}



</style>