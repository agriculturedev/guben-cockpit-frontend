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
  width: 0.6rem;
  height: 0.6rem;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
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
      max-width: 90vw;
      width: 100%;
    }
  }
}
</style>
<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>
