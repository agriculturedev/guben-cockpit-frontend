<template>
  <div class="events-container max-width">
    <ErrorComponent :loading="loading" :error="error">
      <template #content>
        <div v-if="eventPage">
          <h2 class="title">{{ eventPage.attributes.Title }}</h2>

          <VueMarkdown
            :source="eventPage.attributes.Description"
            :options="markdownOptions"
            class="description"
          />

          <div class="event-list">
            <eventList :events="events" />
          </div>
        </div>
        <div v-else>No event page available.</div>
      </template>
      <template #error>
        <div>There was an error loading the event data.</div>
      </template>
    </ErrorComponent>
  </div>
</template>

<style>
.events-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    padding-top: 50px;
  }

  .description {
    padding-top: 20px;
  }

  .event-list {
    padding-top: 30px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { EventView } from "@/types/EventView";
import { fetchEventsPage, fetchEvents } from "@/api/ApiService";
import ErrorComponent from "@/components/ErrorComponent.vue";
import VueMarkdown from "vue-markdown-render";
import eventList from "@/components/Events/EventsList.vue";

export default defineComponent({
  name: "EventsView",
  components: { ErrorComponent, VueMarkdown, eventList },
  data() {
    return {
      eventPage: null as EventView | null,
      events: [] as Event[],
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
      this.eventPage = (await fetchEventsPage()) as EventView;
      this.events = (await fetchEvents()) as Event[];
    } catch (error) {
      this.error = error as any;
    } finally {
      this.loading = false;
    }
  },
});
</script>
