<template>
  <Navigation />
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>
<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>
