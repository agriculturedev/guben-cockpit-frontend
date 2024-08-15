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
          <filterGroup :attributes="filterOn" @filter-updates="updateFilters" />
          <span
            class="filter"
            v-for="(filter, index) in filters"
            :key="index"
            >{{
              filter.start !== undefined
                ? `From: ${new Date(
                    filter.start
                  ).toLocaleDateString()}, To: ${new Date(
                    filter.end
                  ).toLocaleDateString()}`
                : `Titel: ${filter}`
            }}</span
          >
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

<style scoped lang="scss">
.events-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    padding-top: 50px;
    color: #cd1421;
  }

  .description {
    padding-top: 20px;
  }

  .event-list {
    padding-top: 30px;
  }

  .filter {
    padding: 5px 10px;
    background-color: #ccc;
    border-radius: 4px;
    margin: 0 5px;
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
      filterTimeout: null as any,
      filters: {} as any,
      markdownOptions: {
        underline: true,
        italic: true,
      },
    };
  },
  computed: {
    filterOn(): FilteredAttribute[] {
      const lang = [
        ...new Set(
          this.$store.state.events.events.map(
            (item: Event) => item.attributes.locale
          )
        ),
        "nl",
        "en",
      ].map((item) => ({ id: item }));
      return [
        { id: "datum", label: "Datum", type: "date" },
        { id: "search", label: "Search", type: "string" },
      ];
    },
    events(): Event[] {
      return this.$store.state.events.events;
    },
  },
  methods: {
    updateFilters(filter: any) {
      this.filters = filter;
      clearTimeout(this.filterTimeout);

      this.filterTimeout = setTimeout(() => {
        const filters = this.buildFilterQuery(filter);
        this.dispatchFilterUpdate(filters);
      }, 1000);
    },
    buildFilterQuery(filter: any): string {
      let filters = "";

      Object.keys(filter).forEach((key) => {
        const value = filter[key];
        if (!value) return;

        switch (key) {
          case "search":
            filters += this.buildSearchFilter(value);
            break;
          case "datum":
            filters += this.buildDatumFilter(value);
            break;
          default:
            break;
        }
      });

      return filters;
    },
    buildSearchFilter(searchValue: string): string {
      return `&filters[$and][0][title][$contains]=${searchValue}`;
    },
    buildDatumFilter(datumValue: any): string {
      if (datumValue.start === 0 || datumValue.end === 0) {
        delete this.filters.datum;
        return "";
      }

      const start = new Date(datumValue.start);
      const end = new Date(datumValue.end);

      if (
        start.getFullYear() === end.getFullYear() &&
        start.getMonth() === end.getMonth() &&
        start.getDate() === end.getDate()
      ) {
        return `&filters[$and][0][$and][1][startDate][$lte]=${start.toISOString()}
        &filters[$and][0][$and][1][endDate][$gte]=${end.toISOString()}`;
      }

      return `&filters[$and][0][$or][0][$and][0][startDate][$gte]=${start.toISOString()}
      &filters[$and][0][$or][0][$and][1][startDate][$lte]=${end.toISOString()}
      &filters[$and][0][$or][1][$and][0][endDate][$gte]=${start.toISOString()}
      &filters[$and][0][$or][1][$and][1][endDate][$lte]=${end.toISOString()}
      &filters[$and][0][$or][2][$and][0][startDate][$lte]=${start.toISOString()}
      &filters[$and][0][$or][2][$and][1][endDate][$gte]=${end.toISOString()}`;
    },
    dispatchFilterUpdate(filters: string) {
      this.$store.dispatch("events/updateFilters", {
        from: "events",
        filters: filters,
      });
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch(
        "events/fetchEvents",
        this.$store.state.pagination.pagination
      );
      this.eventPage = (await fetchEventsPage()) as EventView;
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
          await this.$store.dispatch("events/fetchEvents", newPagination);
        }
      },
      deep: true,
    },
  },
});
</script>
