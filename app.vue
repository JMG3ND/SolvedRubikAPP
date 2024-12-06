<template>
  <div class="app">
    <Visor3D/>
    <VisorAlgorithm/>
  </div>
</template>

<style>
.app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 4fr 6fr;
}

@media (max-width: 900px) {
  .app {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>