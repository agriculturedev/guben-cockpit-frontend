<template>
  <PageContainer>
    <ErrorComponent :loading="loading" :error="error">
      <template #content>
        <div v-if="homePage">
          <PageTitle :title="homePage.attributes.title" />

          <VueMarkdown
            :source="homePage.attributes.description"
            :options="markdownOptions"
            class="description"
          />
          <TabPanel class="tab-panel" :tabs="homePage.attributes.tabs.data" />
        </div>
        <div v-else>No home page data available.</div>
      </template>
      <template #error>
        <div>There was an error loading the home page data.</div>
      </template>
    </ErrorComponent>
  </PageContainer>
</template>

<style scoped lang="scss">
.description {
  padding-top: 20px;
}

.tab-panel {
  width: 100%;
  padding-top: 30px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import VueMarkdown from "vue-markdown-render";
import { HomeView } from "@/types/HomeView";
import ErrorComponent from "@/components/ErrorComponent.vue";
import { fetchHomePage } from "@/api/ApiService";
import TabPanel from "@/components/Home/TabPanelComponent.vue";
import PageTitle from "@/components/Typography/PageTitle.vue";
import PageContainer from "@/components/PageContainer.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    PageContainer,
    PageTitle,
    TabPanel,
    ErrorComponent,
    VueMarkdown,
  },
  data() {
    return {
      homePage: null as HomeView | null,
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
      this.homePage = (await fetchHomePage()) as HomeView;
    } catch (error) {
      this.error = error as never;
    } finally {
      this.loading = false;
    }
  },
});
</script>
