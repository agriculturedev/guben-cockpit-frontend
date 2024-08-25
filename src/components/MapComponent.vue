<template lang="html">
  <iframe
    class="map-iframe"
    style="overflow: hidden; height: 60vh; width: 100%"
    :src="props.src"
    height="100%"
    width="100%"
  ></iframe>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface MapComponentProps {
  src: string;
}

const props = defineProps<MapComponentProps>();
</script>

<style lang="scss" scoped>
.map-iframe {
  overflow: hidden;
  border: none;
  height: 100%;
  width: 100%;
}
</style>
