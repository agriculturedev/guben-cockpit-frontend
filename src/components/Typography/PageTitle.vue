<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageTitle",
  props: {
    title: { type: String, default: "null", required: true },
  },
});
</script>

<style>
.title {
  padding-top: 1.5rem;
  color: #cd1421;
}
</style>
