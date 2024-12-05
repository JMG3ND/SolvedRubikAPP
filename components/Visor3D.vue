<template>
  <div class="visor3d">
    <Cube3DContainer />
    <div class="divider">
      <PlaceHolder text="Contenedor de controles" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.visor3d {
  display: grid;
  grid-template-rows: 8fr 2fr;
  padding: 1rem;
  gap: 1rem;
}
</style>
