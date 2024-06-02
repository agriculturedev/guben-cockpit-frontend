<template>
  <div class="project-container max-width">
    <div class="">
      <ErrorComponent :loading="loading" :error="error">
        <template #content>
          <div v-if="projectPage">
            <h2 class="title">{{ projectPage.attributes.Title }}</h2>

            <VueMarkdown
              :source="projectPage.attributes.Description"
              :options="markdownOptions"
              class="description"
            />
            <projectsList
              class="project-list"
              :projects="projectPage.attributes.projects.data"
            />
            <DynamicRenderer
              class="info-from-admin"
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
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    padding-top: 50px;
  }

  .description {
    padding-top: 20px;
  }

  .project-list {
    padding-top: 30px;
  }

  .info-from-admin {
    padding-top: 30px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import projectsList from "@/components/Projects/ProjectsList.vue";
import { fetchProjectsPage } from "@/api/ApiService";
import { ProjectView } from "@/types/ProjectView";
import ErrorComponent from "@/components/ErrorComponent.vue";
import DynamicRenderer from "@/components/DynamicRenderer.vue";
import VueMarkdown from "vue-markdown-render";

export default defineComponent({
  name: "ProjectView",
  components: { ErrorComponent, projectsList, DynamicRenderer, VueMarkdown },
  data() {
    return {
      projectPage: null as ProjectView | null,
      loading: true,
      error: null,
      markdownOptions: {
        underline: true,
        italic: true,
      },
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
