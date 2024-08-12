// src/store/modules/events.ts
import { Module } from "vuex";
import { fetchEvents } from "@/api/ApiService";
import { Event } from "@/types/collection/Event";
import { Pagination } from "@/types/generic/Pagination";
import { defaultPagination } from "@/constants/defaultValues";
import { PagedResult } from "@/types/generic/PagedResult";

interface EventsState {
  events: Event[];
  eventFilters: string;
}

const eventsModule: Module<EventsState, unknown> = {
  namespaced: true,
  state: {
    events: [],
    eventFilters: "",
  },
  getters: {
    async getEvents(
      state,
      pagination = defaultPagination
    ): Promise<PagedResult<Event>> {
      return await fetchEvents(state.eventFilters, pagination);
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
    async fetchEvents(
      { commit, state },
      pagination: Pagination
    ): Promise<void> {
      const events = await fetchEvents(state.eventFilters, pagination);
      commit("setEvents", events.data);
      commit("pagination/SET_PAGINATION", events.meta.pagination, {
        root: true,
      });
    },
    async updateFilters({ commit, dispatch }, payload): Promise<void> {
      switch (payload.from) {
        case "events":
          commit("setEventFilters", payload.filters);
          break;
        default:
          break;
      }
      await dispatch("fetchEvents", defaultPagination);
    },
  },
};

export default eventsModule;
