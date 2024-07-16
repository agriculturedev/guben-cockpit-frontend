<template>
  <div>
    <input
      type="text"
      @input="$emit('update', $event.target.value)"
      placeholder="Search"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SearchComponent",
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
