import { createStore } from "vuex";
import eventsModule from "@/store/Events";
import paginationModule from "@/store/Pagination";

export default createStore({
  modules: {
    events: eventsModule,
    pagination: paginationModule,
  },
});
