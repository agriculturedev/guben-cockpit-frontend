<template>
  <div>
    <input
      type="text"
      @input="$emit('update', $event.target.value)"
      placeholder="Suchen"
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
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline-width: thick;
    outline-style: solid;
    outline-color: #cd142036;
    border-color: #cd1420;
  }
}
</style>
