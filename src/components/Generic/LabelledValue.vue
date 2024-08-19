<template>
  <div class="labelled-value">
    <div class="label">
      <p>{{ label }}:</p>
    </div>
    <div>
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LabelledValue",
  props: {
    label: {
      // provide more specific type to `Object`
      type: String,
      required: true,
    },
    value: {
      // provide more specific type to `Object`
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.labelled-value {
  display: flex;
  flex-direction: column;

  .label {
    font-weight: bold;
    line-height: 0.9;
    font-size: 0.9rem;
  }
}
</style>
