<template>
  <div class="project">
    <GenericImage
      v-if="project.attributes.Image?.data?.id"
      :image="project.attributes.Image"
    />
    <div class="project-content">
      <h3>{{ project.attributes.Title }}</h3>
      <p>{{ project.attributes.Description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "@/types/collection/Project";
import GenericImage from "@/components/Generic/Image.vue";

export default defineComponent({
  name: "ProjectCard",
  components: {
    GenericImage,
  },
  props: {
    project: {
      // provide more specific type to `Object`
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project {
  box-shadow: 0 5px 12px -4px #ccc;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  //max-width: 500px;
  background-color: white;

  .project-content {
    padding: 10px;
  }
}
</style>
