import { createStore } from "vuex";
import { fetchEvents } from "@/api/ApiService";
import { Event } from "@/types/collection/Event";

export default createStore({
  state: {
    events: [],
    eventFilters: "",
  },
  getters: {
    async getEvents(state): Promise<Event[]> {
      return await fetchEvents(state.eventFilters);
    },
  },
  mutations: {
    setEvents(state, events): void {
      state.events = events.map((event: any): Event => {
        return {
          id: event.id,
          attributes: {
            title: event.attributes.title,
            description: event.attributes.description,
            startDate: event.attributes.startDate,
            endDate: event.attributes.endDate,
            locale: event.attributes.locale,
            createdAt: event.attributes.createdAt,
            publishedAt: event.attributes.publishedAt,
            updatedAt: event.attributes.updatedAt,
          },
        };
      });
    },
    setEventFilters(state: any, filters: any): void {
      state.eventFilters = filters;
    },
  },
  actions: {
    async fetchEvents(): Promise<void> {
      const events = await fetchEvents(this.state.eventFilters);

      this.commit("setEvents", events);
    },
    async updateFilters({ commit }, payload): Promise<void> {
      switch (payload.from) {
        case "events":
          commit("setEventFilters", payload.filters);
          break;

        default:
          break;
      }
      await this.dispatch("fetchEvents");
    },
  },
  modules: {},
});
