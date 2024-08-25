<template>
  <div class="project">
    <GenericImage
      v-if="project.attributes.image?.data?.id"
      :image="project.attributes.image"
    />
    <div class="project-content">
      <h3>{{ project.attributes.title }}</h3>
      <p>{{ project.attributes.description }}</p>
    </div>
    <ContactInformation
      v-if="project.attributes.contact"
      :contact="project.attributes.contact"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "@/types/collection/Project";
import GenericImage from "@/components/Generic/Image.vue";
import ContactInformation from "@/components/Projects/ContactInfo.vue";

export default defineComponent({
  name: "ProjectCard",
  components: {
    ContactInformation,
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
    text-wrap: pretty;
  }
}
</style>
