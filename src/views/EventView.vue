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
          <filterGroup :attributes="filterOn" @update="updateFilters" />
          {{ filter }}
          <div class="event-list">
            <eventList :events="events" />
          </div>
        </div>
        <div v-else>No event page available.</div>
        <span>{{ events }}</span>
      </template>

      <template #error>
        <div>There was an error loading the event data.</div>
      </template>
    </ErrorComponent>
  </div>
</template>

<style scoped lang="scss">
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
import { fetchEventsPage } from "@/api/ApiService";
import ErrorComponent from "@/components/ErrorComponent.vue";
import VueMarkdown from "vue-markdown-render";
import eventList from "@/components/Events/EventsList.vue";
import filterGroup from "@/components/Generic/FilterGroup.vue";
import { FilteredAttribute } from "@/types/generic/FilteredAttribute";
import { Event } from "@/types/collection/Event";

export default defineComponent({
  name: "EventsView",
  components: { ErrorComponent, VueMarkdown, eventList, filterGroup },
  data() {
    return {
      eventPage: null as EventView | null,
      loading: true,
      error: null,
      filter: null as any,
      markdownOptions: {
        underline: true,
        italic: true,
      },
    };
  },
  computed: {
    filterOn(): FilteredAttribute[] {
      return [
        { id: "search", label: "Search", type: "string" },
        {
          id: "locale",
          label: "Locale",
          type: "string",
          multiselect: false,
          values: [
            ...new Set(
              this.$store.state.events.map(
                (item: Event) => item.attributes.locale
              )
            ),
            "nl",
            "en",
          ],
        },
      ];
    },
    events(): Event[] {
      return this.$store.state.events.filter((event: Event) => {
        if (!this.filter) {
          return true;
        }
        return Object.keys(this.filter).every((key) => {
          switch (key) {
            case "search":
              return event.attributes.Name.toLowerCase().includes(
                this.filter[key].toLowerCase()
              );
            case "locale":
              return this.filter[key].length != 0
                ? this.filter[key].includes(event.attributes.locale)
                : true;
            default:
              return (
                event.attributes[key as keyof typeof event.attributes] as string
              )
                .toLowerCase()
                .includes(this.filter[key].toLowerCase());
          }
        });
      });
    },
  },
  methods: {
    updateFilters(filter: any) {
      this.filter = filter;
    },
  },
  async mounted() {
    try {
      this.$store.dispatch("fetchEvents");
      this.eventPage = (await fetchEventsPage()) as EventView;
    } catch (error) {
      this.error = error as any;
    } finally {
      this.loading = false;
    }
  },
});
</script>
