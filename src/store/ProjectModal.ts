import { Project } from "@/types/collection/Project";
import { Module } from "vuex";

interface ProjectModalState {
  isOpen: boolean;
  project: Project;
}

const projectModalModule: Module<ProjectModalState, unknown> = {
  namespaced: true,
  state: {
    isOpen: false,
    project: {
      id: 0,
      attributes: {
        projectId: "",
        title: "",
        description: "",
        fullText: "",
        imageUrl: "",
        imageCaption: "",
        imageCredits: "",
        locale: "",
        createdAt: new Date(),
        publishedAt: new Date(),
        updatedAt: new Date(),
      },
    },
  },
  mutations: {
    openModal(state, project: Project): void {
      state.isOpen = true;
      state.project = project;
    },
    closeModal(state): void {
      state.isOpen = false;
    },
  },
  actions: {
    openModal({ commit }, project: Project): void {
      commit("openModal", project);
    },
    closeModal({ commit }): void {
      commit("closeModal");
    },
  },
};

export default projectModalModule;
