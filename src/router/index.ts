import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "@/views/MapView.vue";
import ProjectView from "@/views/ProjectView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
