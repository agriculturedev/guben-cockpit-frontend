// src/store/modules/events.ts
import { Module } from "vuex";
import { fetchProjects } from "@/api/ApiService";
import { Pagination } from "@/types/generic/Pagination";
import { defaultPagination } from "@/constants/defaultValues";
import { PagedResult } from "@/types/generic/PagedResult";
import { Project } from "@/types/collection/Project";

interface ProjectsState {
  projects: Project[];
}

const projectsModule: Module<ProjectsState, unknown> = {
  namespaced: true,
  state: {
    projects: [],
  },
  getters: {
    async getProjects(
      pagination = defaultPagination
    ): Promise<PagedResult<Project>> {
      return await fetchProjects(pagination);
    },
  },
  mutations: {
    setProjects(state, projects): void {
      state.projects = projects.map((project: any): Project => {
        return {
          id: project.id,
          attributes: {
            title: project.attributes.title,
            description: project.attributes.description,
            locale: project.attributes.locale,
          },
        };
      });
    },
  },
  actions: {
    async fetchProjects({ commit }, pagination: Pagination): Promise<void> {
      const projects = await fetchProjects(pagination);
      commit("setProjects", projects.data);
      commit("pagination/SET_PAGINATION", projects.meta.pagination, {
        root: true,
      });
    },
  },
};

export default projectsModule;
