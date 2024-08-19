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
  </PageContainer>
</template>

<style scoped lang="scss">
.description {
  padding-top: 20px;
}

.project-list {
  padding-top: 30px;
}

.info-from-admin {
  padding-top: 30px;
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

export default defineComponent({
  name: "ProjectView",
  components: {
    CarouselComponent,
    PageContainer,
    PageTitle,
    ErrorComponent,
    DynamicRenderer,
    VueMarkdown,
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
      this.projectPage = (await fetchProjectsPage()) as ProjectView;
    } catch (error) {
      this.error = error as any;
    } finally {
      this.loading = false;
    }
  },
});
</script>
