<template>
  <div class="visorAlgorithm">
    <div class="divider">
      <PlaceHolder text="Selector de Algoritmo" />
    </div>
    <div class="divider">
      <PlaceHolder text="Selector de método" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.visorAlgorithm {
  display: grid;
  grid-template-rows: 8fr 2fr;
  padding: 1rem;
  gap: 1rem;
}
</style>
