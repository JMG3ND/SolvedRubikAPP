<template>
  <div class="rubik-cube__canvas" ref="canvas"></div>
</template>

<script setup>
import { Ambient } from "@/script/rubik-cube/ambient.js";
import { RubikCube } from "@/script/rubik-cube/rubikCube.js";
import { ref, onMounted, onUnmounted, onBeforeMount } from "vue";

const props = defineProps(["inverseAlgorithm", "tipe"]);
let ambient, rubikcube, animationId;

//Se crea un contenedor de escena para el cubo
const canvas = ref();

function createInverseAlgorithm(array = []) {
  array.forEach((element, index) => {
    element.includes("'")
      ? (array[index] = element.replace(/'/g, ""))
      : (array[index] = element + "'");
  });
  return array;
}
const changeWith = () => {
  if (canvas.value) {
    //canvas.value.style.height = `${canvas.value.clientWidth}px`;
    ambient.resizeCamera(canvas.value);
    ambient.resizeRenderer(canvas.value);
  }
};
onBeforeMount(() => {
  switch (props.tipe) {
    case "oll":
      rubikcube = new RubikCube(true);
      break;
    case "f2l":
      rubikcube = new RubikCube(false, true);
      break;
    case "pll":
      rubikcube = new RubikCube();
      break;
    default:
      rubikcube = new RubikCube();
  }
});
onMounted(() => {
  ambient = new Ambient(canvas.value);
  ambient.scene.add(rubikcube.cube);
  function animate() {
    animationId = requestAnimationFrame(animate);
    ambient.renderer();
  }
  animate();
  window.addEventListener("resize", changeWith);
  rubikcube.configure(createInverseAlgorithm(props.inverseAlgorithm));
});
onUnmounted(() => {
  window.removeEventListener("resize", changeWith);
  cancelAnimationFrame(animationId);
  ambient = null;
  rubikcube = null;
});
</script>

<style lang="scss">
.ruik-cube__canvas {
    aspect-ratio: 1/1;
    max-width: 100%;
}
</style>
