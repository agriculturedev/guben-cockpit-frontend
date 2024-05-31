<template>
  <div class="button">
    <a :href="values.URL">{{ values.Text }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GenericButton } from "@/types/generic/Button";

export default defineComponent({
  name: "GenericButton",
  props: {
    values: {
      // provide more specific type to `Object`
      type: Object as PropType<GenericButton>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
