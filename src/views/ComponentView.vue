<template>
  <div class="container">
    <InputComponent
      name="test"
      placeholder="Placeholder"
      :required="true"
      type="string"
      :value="props.value"
      label="Test"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import InputComponent from "@/components/Input/InputComponent.vue";

interface ViewProps {
  value: string;
}

const props = defineProps<ViewProps>();
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  padding: 20px;
}
</style>
