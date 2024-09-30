// src/store/modules/projects.ts
import { Module } from "vuex";
import { fetchProjects } from "@/api/ApiService";
import { Pagination } from "@/types/generic/Pagination";
import { defaultPagination } from "@/constants/defaultValues";
import { PagedResult } from "@/types/generic/PagedResult";
import { Project } from "@/types/collection/Project";
import paginationModule from "@/store/Pagination";

interface ProjectsState {
  projects: Project[];
  projectFilters: string;
}

const projectsModule: Module<ProjectsState, unknown> = {
  namespaced: true,
  modules: {
    pagination: paginationModule,
  },
  state: {
    projects: [],
    projectFilters: "",
  },
  getters: {
    async getProjects(
      state,
      pagination = defaultPagination
    ): Promise<PagedResult<Project>> {
      return await fetchProjects(state.projectFilters, pagination);
    },
  },
  mutations: {
    setProjects(state, projects): void {
      state.projects = projects.map((project: any): Project => {
        return {
          id: project.id,
          attributes: {
            projectId: project.attributes.projectId,
            title: project.attributes.title,
            description: project.attributes.description,
            fullText: project.attributes.fullText,
            imageUrl: project.attributes.imageUrl,
            imageCaption: project.attributes.imageCaption,
            imageCredits: project.attributes.imageCredits,
            locale: project.attributes.locale,
            createdAt: project.attributes.createdAt,
            publishedAt: project.attributes.publishedAt,
            updatedAt: project.attributes.updatedAt,
          },
        };
      });
    },
    setProjectFilters(state: any, filters: any): void {
      state.projectFilters = filters;
    },
  },
  actions: {
    async fetchProjects(
      { commit, state },
      pagination: Pagination
    ): Promise<void> {
      const projects = await fetchProjects(state.projectFilters, pagination);
      commit("setProjects", projects.data);
      commit("projects/pagination/SET_PAGINATION", projects.meta.pagination, {
        root: true,
      });
    },
    async updateFilters({ commit, dispatch }, payload): Promise<void> {
      switch (payload.from) {
        case "projects":
          commit("setProjectFilters", payload.filters);
          break;
        default:
          break;
      }
      await dispatch("fetchProjects", defaultPagination);
    },
  },
};

export default projectsModule;
