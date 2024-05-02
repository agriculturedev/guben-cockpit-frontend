<template>
  <div class="project-container">
    <h1>ProjectView</h1>
    <projectsList :projects="projects" />
  </div>
</template>

<style>
.project-container {
  padding-top: 80px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import projectsList from "@/components/Projects/ProjectsList.vue";
import { fetchProjects } from "@/api/ApiService";

export default defineComponent({
  name: "ProjectView",
  components: {
    projectsList,
  },
  data() {
    return {
      projects: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      this.projects = await fetchProjects();
    } catch (error) {
      this.error = error as any;
    } finally {
      this.loading = false;
    }
  },
});
</script>
