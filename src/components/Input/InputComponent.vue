<template>
  <div class="input">
    <label :for="props.name" class="label">{{ props.label }}</label>
    <input
      :type="props.type"
      :value="props.value"
      :required="props.required"
      :name="props.name"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { InputProps } from "@/types/generic/Input";

const props = defineProps<InputProps>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
  row-gap: 0.25em;

  .label {
    font-size: 0.9em;
    color: #333;
  }

  input {
    width: 100%;
    padding: 0.375rem 0.375rem;
    line-height: 1.5;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
      outline-width: thick;
      outline-style: solid;
      outline-color: #cd142036;
      border-color: #cd1420;
    }

    &:active {
      outline: 0.25em solid #cd1420;
      outline-offset: 0.2em;
    }
  }
}
</style>
