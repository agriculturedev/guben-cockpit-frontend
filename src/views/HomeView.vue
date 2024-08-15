<template>
  <div class="home-container max-width">
    <div class="">
      <ErrorComponent :loading="loading" :error="error">
        <template #content>
          <div v-if="homePage">
            <h2 class="title">{{ homePage.attributes.title }}</h2>

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
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    align-self: self-start;
    padding-top: 50px;
    color: #cd1421;
  }

  .description {
    padding-top: 20px;
  }

  .tab-panel {
    width: 100%;
    padding-top: 30px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import VueMarkdown from "vue-markdown-render";
import { HomeView } from "@/types/HomeView";
import ErrorComponent from "@/components/ErrorComponent.vue";
import { fetchHomePage } from "@/api/ApiService";
import TabPanel from "@/components/Home/TabPanelComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
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
