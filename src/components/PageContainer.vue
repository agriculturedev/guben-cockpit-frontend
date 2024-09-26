<template>
  <div class="page-container max-width">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageContainer",
});
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
