import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import clickOutsideDirective from "./helpers/clickOutsideDirective";

createApp(App)
  .use(store)
  .use(router)
  .directive("click-outside", clickOutsideDirective)
  .mount("#app");
