<template>
  <div class="input">
    <input
      :type="values.type"
      :value="values.value"
      :required="values.required"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Input } from "@/types/generic/Input";

export default defineComponent({
  name: "GenericInput",
  props: {
    values: {
      // provide more specific type to `Object`
      type: Object as PropType<Input>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
}
</style>
