<template>
  <div class="nav-container">
    <div id="logo">
      <router-link to="/" class="nav-item">
        <img src="@/assets/stadt-guben-wappen.jpg" alt="logo" />
      </router-link>
    </div>
    <ul>
      <li>
        <router-link to="/" class="nav-item">
          <HomeIcon class="icon" />
        </router-link>
      </li>
      <li>
        <router-link to="/projects" class="nav-item">
          <Squares2X2Icon class="icon" />
        </router-link>
      </li>
      <li>
        <router-link to="/map" class="nav-item">
          <MapIcon class="icon" />
        </router-link>
      </li>
      <li>
        <router-link to="/events" class="nav-item">
          <ListBulletIcon class="icon" />
        </router-link>
      </li>
    </ul>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import homeView from "@/views/HomeView.vue";
import mapView from "@/views/MapView.vue";
import projectView from "@/views/ProjectView.vue";

import {
  MapIcon,
  ListBulletIcon,
  Squares2X2Icon,
  HomeIcon,
} from "@heroicons/vue/24/outline";

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
  components: {
    MapIcon,
    ListBulletIcon,
    Squares2X2Icon,
    HomeIcon,
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
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: #00000033 0 0 10px;
  padding: 0;
  margin: 0;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  #logo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin-left: 20px;

    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 70%;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: center;
    justify-self: center;

    li {
      a {
        height: 100%;
        padding: 12px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease-in-out;
        width: auto;
        border-radius: 10px;

        .icon {
          height: 20px;
          width: 20px;

          color: #cd1421;
        }

        &:hover {
          background-color: #cd1421;

          .icon {
            color: white;
          }
        }
      }
    }
  }
}
</style>
