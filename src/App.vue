<template>
<body>
<div class="app">
  <div class="app-header"><header><h1>Welcome</h1></header> </div>
  <div class="main">Main</div>
  <div class="side">Side</div>
</div>
</body>
</template>

<script>
</script>

<style>
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
}
.main      { grid-area: 2 / 1 / 6 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.side      { grid-area: 2 / 3 / 6 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;


}

</style>