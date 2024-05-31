<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">
      <slot name="error">Error: {{ error }}</slot>
    </div>
    <div v-else>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ErrorComponent",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: [String, Object, null] as PropType<string | Error | null>,
      default: null,
    },
  },
});
</script>

<style scoped>
/* Add any styles specific to the error component here */
</style>
