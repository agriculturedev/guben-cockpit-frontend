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
          this.$store.state.events.map((item: Event) => item.attributes.locale)
        ),
        "nl",
        "en",
      ].map((item) => ({ id: item }));
      return [
        { id: "datum", label: "Datum", type: "date" },
        // {
        //   id: "locale",
        //   label: "Gebietsschema",
        //   type: "string",
        //   multiselect: false,
        //   values: lang,
        // },
        { id: "search", label: "Search", type: "string" },
      ];
    },
    events(): Event[] {
      // return this.$store.state.events.filter((event: Event) => {
      //   if (!this.filter) {
      //     return true;
      //   }
      //   return Object.keys(this.filter).every((key) => {
      //     switch (key) {
      //       case "search":
      //         return event.attributes.title
      //           .toLowerCase()
      //           .includes(this.filter[key].toLowerCase());
      //       case "locale":
      //       case "test":
      //         return this.filter[key].length != 0
      //           ? this.filter[key].includes(event.attributes.locale)
      //           : true;
      //       case "datum":
      //         return (
      //           event.attributes.Date >= this.filter[key].start &&
      //           event.attributes.Date <= this.filter[key].end
      //         );
      //       default:
      //         return (
      //           event.attributes[key as keyof typeof event.attributes] as string
      //         )
      //           .toLowerCase()
      //           .includes(this.filter[key].toLowerCase());
      //     }
      //   });
      // });
      return this.$store.state.events;
    },
  },
  methods: {
    updateFilters(filter: any) {
      this.filters = filter;
      let filters = "";

      clearTimeout(this.filterTimeout);

      this.filterTimeout = setTimeout(() => {
        Object.keys(filter).forEach((key) => {
          console.log(key);
          if (!filter[key]) {
            return;
          }

          switch (key) {
            case "search":
              filters += `&filters[$and][0][title][$containsi]=${filter[key]}`;
              break;
            // return event.attributes.title
            //   .toLowerCase()
            //   .includes(this.filter[key].toLowerCase());
            // case "locale":
            // case "test":
            //   filters += `&filter[locale][$in]=${this.filter[key].join(",")}`;
            //   return this.filter[key].length != 0
            //     ? this.filter[key].includes(event.attributes.locale)
            //     : true;
            case "datum": {
              if (filter[key].start === 0 || filter[key].end === 0) {
                delete this.filters[key];
                return;
              }
              const start = new Date(filter[key].start),
                end = new Date(filter[key].end);

              // Check if start and end are the same day
              if (
                start.getFullYear() === end.getFullYear() &&
                start.getMonth() === end.getMonth() &&
                start.getDate() === end.getDate()
              ) {
                filters += `&filters[$and][0][$and][1][startDate][$lte]=${new Date(
                  filter[key].start
                ).toISOString()}&filters[$and][0][$and][1][endDate][$gte]=${new Date(
                  filter[key].end
                ).toISOString()}`;
                break;
              }

              filters += `&filters[$and][0][$or][0][$and][0][startDate][$gte]=${new Date(
                filter[key].start
              ).toISOString()}&filters[$and][0][$or][0][$and][1][startDate][$lte]=${new Date(
                filter[key].end
              ).toISOString()}&filters[$and][0][$or][1][$and][0][endDate][$gte]=${new Date(
                filter[key].start
              ).toISOString()}&filters[$and][0][$or][1][$and][1][endDate][$lte]=${new Date(
                filter[key].end
              ).toISOString()}&filters[$and][0][$or][2][$and][0][startDate][$lte]=${new Date(
                filter[key].start
              ).toISOString()}&filters[$and][0][$or][2][$and][1][endDate][$gte]=${new Date(
                filter[key].end
              ).toISOString()}`;
              break;
            }

            // return (
            //   event.attributes.Date >= this.filter[key].start &&
            //   event.attributes.Date <= this.filter[key].end
            // );
            default:
              break;
            // return (
            //   event.attributes[key as keyof typeof event.attributes] as string
            // )
            //   .toLowerCase()
            //   .includes(this.filter[key].toLowerCase());
          }
        });
        this.$store.dispatch("updateFilters", {
          from: "events",
          filters: filters,
        });
      }, 1000);
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
