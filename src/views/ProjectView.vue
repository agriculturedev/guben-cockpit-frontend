<template>
  <PageContainer>
    <ErrorComponent :loading="loading" :error="error">
      <template #content>
        <div v-if="projectPage">
          <PageTitle :title="projectPage.attributes.Title" />

          <VueMarkdown
            :source="projectPage.attributes.Description"
            :options="markdownOptions"
            class="description"
          />
          <CarouselComponent
            class="project-carousel"
            :projects="projectPage.attributes.projects.data"
          />

          <projects-list class="project-list" :projects="projects" />

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
  </PageContainer>
  <ProjectDialog />
</template>

<style scoped lang="scss">
.description {
  padding-top: 1rem;
}

.project-carousel {
  padding-top: 1rem;
}

.project-list {
  padding-top: 1rem;
}

.info-from-admin {
  padding: 30px 0;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchProjectsPage } from "@/api/ApiService";
import { ProjectView } from "@/types/ProjectView";
import ErrorComponent from "@/components/ErrorComponent.vue";
import DynamicRenderer from "@/components/DynamicRenderer.vue";
import VueMarkdown from "vue-markdown-render";
import PageTitle from "@/components/Typography/PageTitle.vue";
import PageContainer from "@/components/PageContainer.vue";
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";
import ProjectsList from "@/components/Projects/ProjectsList.vue";
import { Project } from "@/types/collection/Project";
import ProjectDialog from "@/components/Projects/ProjectDialog.vue";

export default defineComponent({
  name: "ProjectView",
  components: {
    ProjectDialog,
    ProjectsList,
    CarouselComponent,
    PageContainer,
    PageTitle,
    ErrorComponent,
    DynamicRenderer,
    VueMarkdown,
  },
  computed: {
    projects(): Project[] {
      return this.$store.state.projects.projects;
    },
  },
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
      await this.$store.dispatch(
        "projects/fetchProjects",
        this.$store.state.pagination.pagination
      );
      this.projectPage = (await fetchProjectsPage()) as ProjectView;
    } catch (error) {
      this.error = error as any;
    } finally {
      this.loading = false;
    }
  },
  watch: {
    "$store.state.pagination.pagination": {
      async handler(newPagination, oldPagination) {
        if (JSON.stringify(newPagination) !== JSON.stringify(oldPagination)) {
          await this.$store.dispatch("projects/fetchProjects", newPagination);
        }
      },
      deep: true,
    },
  },
});
</script>
