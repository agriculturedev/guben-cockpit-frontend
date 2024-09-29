// src/store/modules/events.ts
import { Module } from "vuex";
import { fetchCategories } from "@/api/ApiService";
import { Pagination } from "@/types/generic/Pagination";
import { Category } from "@/types/collection/Category";

interface CategoriesState {
  categories: { data: Category[] };
}

const categoriesModule: Module<CategoriesState, unknown> = {
  namespaced: true,
  state: {
    categories: { data: [] },
  },
  getters: {
    async getCategories(): Promise<Category[]> {
      return await fetchCategories();
    },
  },
  mutations: {
    setCategories(state, categories): void {
      state.categories = {
        data: categories.map((event: any): Category => {
          return {
            id: event.id,
            attributes: {
              Name: event.attributes.Name,
              locale: event.attributes.locale,
              createdAt: event.attributes.createdAt,
              publishedAt: event.attributes.publishedAt,
              updatedAt: event.attributes.updatedAt,
            },
          };
        }),
      };
    },
    setEventFilters(state: any, filters: any): void {
      state.eventFilters = filters;
    },
  },
  actions: {
    async fetchCategories({ commit }): Promise<void> {
      const events = await fetchCategories();
      commit("setCategories", events.data);
    },
  },
};

export default categoriesModule;
