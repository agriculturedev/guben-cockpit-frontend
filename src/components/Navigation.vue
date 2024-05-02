<template>
  <div class="nav-container">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projekte</router-link>
      </li>
      <li>
        <router-link to="/map">Map</router-link>
      </li>
      <li>
        <router-link to="/">Veranstaltungen</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import homeView from "@/views/HomeView.vue";
import mapView from "@/views/MapView.vue";
import projectView from "@/views/ProjectView.vue";

export default defineComponent({
  name: "NavComponent",
  computed: {
    homeView() {
      return homeView;
    },
    mapView() {
      return mapView;
    },
    projectView() {
      return projectView;
    },
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-container {
  width: 100vw;
  height: 80px;
  background: white;
  position: absolute;
  z-index: 10;
  box-shadow: #00000011 0 0 10px;
  padding: 0;
  margin: 0;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: center;

    li {
      a {
        height: 100%;
        padding: 18px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
}
</style>
