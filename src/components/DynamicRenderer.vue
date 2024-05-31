<template>
  <div class="dynamic-renderer">
    <component
      :is="getComponentByType(component.__component)"
      v-for="component in components"
      :key="component.id"
      :values="component"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DynamicComponent } from "@/types/Dynamic";
import { getComponentByType } from "@/helpers/getDynamicComponentByType";

export default defineComponent({
  name: "DynamicRenderer",
  props: {
    components: {
      type: Array as PropType<DynamicComponent[]>,
      required: true,
    },
  },
  methods: {
    getComponentByType,
  },
});
</script>

<style scoped>
/* Add any styles specific to the error component here */
.dynamic-renderer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
