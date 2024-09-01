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
}

::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}

::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #e9ecef;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #888;
}

#container {
  min-height: 100vh;
  width: 100%;
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
      max-width: clamp(200px, 90vw, 2000px);
      width: 100%;
    }
  }
}
</style>
<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>
