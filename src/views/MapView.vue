<template>
  <div class="map-container">
    <iframe
      class="map-iframe"
      src="https://guben.elie.de/"
      height="100%"
      width="100%"
    ></iframe>
  </div>
</template>

<style>
.map-container {
  padding: 0;
  position: relative;
  width: 100vw;
  height: 100vh;

  .map-iframe {
    overflow: hidden;
    border: none;
    height: calc(100% - 80px);
    padding-top: 80px;
    width: 100%;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MapView",
  components: {},
});
</script>
