<template>
  <div class="footer-container">
    <ul>
      <li>
        <router-link to="/">&copy; 2024 Softwareentwickler</router-link>
      </li>
      <li>
        <router-link to="/">Nutzungsbedingungen</router-link>
      </li>
      <li>
        <router-link to="/">Datenschutzbedingungen</router-link>
      </li>
      <li>
        <router-link to="/">Impressum</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-container {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #89a5d3;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    li {
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
