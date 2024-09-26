// store/modules/pagination.ts
import { createStore, Module } from "vuex";
import { Pagination } from "@/types/generic/Pagination";

export const defaultPagination: Pagination = {
  page: 1,
  pageCount: 0,
  pageSize: 5,
  total: 0,
};

interface PaginationState {
  pagination: Pagination;
}

// needs to be update to be used with multiple tables, pass a state key for example like 'projects'
const paginationModule: Module<PaginationState, unknown> = {
  namespaced: true,
  state: {
    pagination: { ...defaultPagination },
  },
  getters: {
    currentPageIndex(state): number {
      return state.pagination.page;
    },
    totalPages(state): number {
      return state.pagination.pageCount;
    },
    pageSize(state): number {
      return state.pagination.pageSize;
    },
  },
  mutations: {
    SET_PAGINATION(state, pagination: Pagination) {
      state.pagination = pagination;
    },
    SET_PAGE_INDEX(state, pageIndex: number) {
      state.pagination.page = pageIndex;
    },
  },
  actions: {
    updatePagination({ commit }, pagination: Pagination) {
      commit("SET_PAGINATION", pagination);
    },
    updatePageIndex({ commit }, pageIndex: number) {
      commit("SET_PAGE_INDEX", pageIndex);
    },
  },
};

export default paginationModule;
