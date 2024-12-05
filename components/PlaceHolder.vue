<template>
  <div class="placeHolder">
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: "Empty tag",
  },
});
</script>

<style scoped>
.placeHolder {
  font-family: "Hachi Maru Pop", cursive;
  font-weight: 400;
  font-style: normal;
  text-shadow: 1px 1px 2px white;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
</style>
