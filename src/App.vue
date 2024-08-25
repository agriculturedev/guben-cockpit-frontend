<template>
  <div id="container">
    <Navigation />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

#container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9ecef;

  .content {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;

    .full-width {
      width: 100%;
    }

    .max-width {
      max-width: 1200px;
      width: 100%;
    }
  }
}
</style>
<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>
