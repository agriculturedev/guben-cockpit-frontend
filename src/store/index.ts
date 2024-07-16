import { createStore } from "vuex";
import { fetchEvents } from "@/api/ApiService";
import { Event } from "@/types/collection/Event";

export default createStore({
  state: {
    events: [],
  },
  getters: {},
  mutations: {
    setEvents(state, events): void {
      state.events = events.map((event: any): Event => {
        return {
          id: event.id,
          attributes: {
            Name: event.attributes.Name,
            Description: event.attributes.Description,
            Date: event.attributes.Date,
            locale: event.attributes.locale,
            createdAt: event.attributes.createdAt,
            publishedAt: event.attributes.publishedAt,
            updatedAt: event.attributes.updatedAt,
          },
        };
      });
    },
  },
  actions: {
    async fetchEvents(): Promise<void> {
      const events = await fetchEvents();

      this.commit("setEvents", events);
    },
  },
  modules: {},
});
