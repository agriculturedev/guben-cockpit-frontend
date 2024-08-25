<template>
  <InputComponent
    type="text"
    @input="$emit('update', $event.target.value)"
    placeholder="Suchen"
  />
</template>

<script>
import { defineComponent } from "vue";
import InputComponent from "@/components/Input/InputComponent.vue";
export default defineComponent({
  name: "SearchComponent",
  components: { InputComponent },
});
</script>
