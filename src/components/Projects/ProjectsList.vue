<template>
  <CarouselComponent :projects="projects" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";

export default defineComponent({
  name: "ProjectList",
  props: {
    projects: Array,
  },
  components: {
    CarouselComponent,
  },
});
</script>
