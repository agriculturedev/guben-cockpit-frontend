<template>
  <div class="project-container">
    <div class="max-width">
      <ErrorComponent :loading="loading" :error="error">
        <template #content>
          <div v-if="projectPage">
            <h2>{{ projectPage.attributes.Title }}</h2>
            <div>{{ projectPage.attributes.Description }}</div>
            <projectsList :projects="projectPage.attributes.projects.data" />
            <DynamicRenderer
              :components="projectPage.attributes.InfoFromAdmin"
            />
          </div>
          <div v-else>No project data available.</div>
        </template>
        <template #error>
          <div>There was an error loading the project data.</div>
        </template>
      </ErrorComponent>
    </div>
  </div>
</template>

<style>
.project-container {
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.max-width {
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import projectsList from "@/components/Projects/ProjectsList.vue";
import { fetchProjectsPage } from "@/api/ApiService";
import { ProjectView } from "@/types/ProjectView";
import ErrorComponent from "@/components/ErrorComponent.vue";
import DynamicRenderer from "@/components/DynamicRenderer.vue";

export default defineComponent({
  name: "ProjectView",
  components: { ErrorComponent, projectsList, DynamicRenderer },
  data() {
    return {
      projectPage: null as ProjectView | null,
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      this.projectPage = (await fetchProjectsPage()) as ProjectView;
      console.log(this.projectPage?.attributes.projects.data);
    } catch (error) {
      this.error = error as any;
    } finally {
      this.loading = false;
    }
  },
});
</script>
