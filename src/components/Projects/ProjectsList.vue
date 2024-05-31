<template>
  <div class="projects">
    <projectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import projectCard from "@/components/Projects/ProjectCard.vue";

export default defineComponent({
  name: "ProjectList",
  props: {
    projects: Array,
  },
  components: {
    projectCard,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
}
</style>
