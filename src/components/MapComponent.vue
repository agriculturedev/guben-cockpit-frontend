<template lang="html">
  <div class="iframe-container">
    <iframe
      class="map-iframe"
      style="overflow: hidden; height: 100%; width: 100%"
      :src="props.src"
      height="100%"
      width="100%"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface MapComponentProps {
  src: string;
}

const props = defineProps<MapComponentProps>();
</script>

<style lang="scss" scoped>
.iframe-container {
  height: 100%;
  width: 100%;

  .map-iframe {
    overflow: hidden;
    border: none;
    height: 100%;
    width: 100%;
  }
}
</style>
