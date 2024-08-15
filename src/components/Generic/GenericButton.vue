<template>
  <div class="button">
    <a :href="props.URL" :target="props.newTab ? '_blank' : ''">{{
      props.Text
    }}</a>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { ButtonProps } from "@/types/generic/Button";

const props = defineProps<ButtonProps>();
</script>

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
