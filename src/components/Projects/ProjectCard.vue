<template>
  <div class="project">
    <h3>{{ project.attributes.Titel }}</h3>
    <p>{{ project.attributes.Beschreibung }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface IProjekt {
  attributes: {
    Titel: string;
    Beschreibung: string;
  };
}

export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      // provide more specific type to `Object`
      type: Object as PropType<IProjekt>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project {
  padding: 10px;
  box-shadow: 0px 5px 12px -4px #ccc;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
