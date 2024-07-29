import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import ProjectView from "@/views/ProjectView.vue";
import EventView from "@/views/EventView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
  },
  {
    path: "/events",
    name: "events",
    component: EventView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
