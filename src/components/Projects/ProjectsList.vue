<template>
  <h2>Projekte</h2>
  <div class="projects">
    <project-card
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
  <projectsPaginatorComponent @updatePagination="handlePaginationUpdate" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Pagination } from "@/types/generic/Pagination";
import projectCard from "@/components/Projects/ProjectCard.vue";
import projectsPaginatorComponent from "@/components/Generic/PaginationProjects.vue";

export default defineComponent({
  name: "ProjectsList",
  props: {
    projects: Array,
  },
  data() {
    return {
      pagination: {
        page: 0,
        pageCount: 10,
        pageSize: 10,
      },
    };
  },
  components: {
    projectsPaginatorComponent,
    projectCard,
  },
  methods: {
    handlePaginationUpdate(newPagination: Pagination) {
      this.pagination = newPagination;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 0.5rem;
}
</style>
