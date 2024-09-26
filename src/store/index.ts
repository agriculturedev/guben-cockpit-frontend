import { createStore } from "vuex";
import eventsModule from "@/store/Events";
import paginationModule from "@/store/Pagination";
import projectsModule from "@/store/Projects";
import projectModalModule from "@/store/ProjectModal";

export default createStore({
  modules: {
    events: eventsModule,
    projects: projectsModule,
    pagination: paginationModule,
    projectModal: projectModalModule,
  },
});
