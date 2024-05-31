<template>
  <div class="button">
    <a :href="values.URL" :target="values.newTab ? '_blank' : ''">{{
      values.Text
    }}</a>
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
<style scoped lang="scss">
.button {
  a {
    transition: background-color 0.3s, color 0.3s;
    background-color: white;
    border: 1px solid #89a5d3;
    color: #89a5d3;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0 5px 12px -4px #999;

    &:hover {
      background-color: #1f4b84;
      color: white;
    }
  }
}
</style>
