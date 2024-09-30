<template>
  <div class="projects-wrapper">
    <div class="filter-group">
      <h2>Projekte</h2>
      <Search @update="(n: string) => updateFilter(n)" />
    </div>

    <div class="projects">
      <project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
    <paginationComponent @updatePagination="handlePaginationUpdate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import paginationComponent from "@/components/Generic/Pagination.vue";
import { Pagination } from "@/types/generic/Pagination";
import projectCard from "@/components/Projects/ProjectCard.vue";
import { FilteredAttribute } from "@/types/generic/FilteredAttribute";
import { Event } from "@/types/collection/Event";
import Search from "@/components/Filters/Search.vue";

export default defineComponent({
  name: "ProjectsList",
  props: {
    projects: Array,
    attribute: {} as PropType<FilteredAttribute>,
  },
  data() {
    return {
      filters: {} as any,
      filterTimeout: null as any,
      pagination: {
        page: 0,
        pageCount: 10,
        pageSize: 10,
      },
    };
  },
  components: {
    Search,
    projectCard,
    paginationComponent,
  },
  methods: {
    updateFilter(value: string) {
      if (!value) {
        delete this.filters["search"];
      }
      clearTimeout(this.filterTimeout);

      this.filterTimeout = setTimeout(() => {
        const filters = this.buildSearchFilter(value);
        this.dispatchFilterUpdate(filters);
      }, 300);
    },
    handlePaginationUpdate(newPagination: Pagination) {
      this.pagination = newPagination;
    },
    buildSearchFilter(searchValue: string): string {
      return `&filters[$and][0][title][$contains]=${searchValue}`;
    },
    dispatchFilterUpdate(filters: string) {
      this.$store.dispatch("projects/updateFilters", {
        from: "projects",
        filters: filters,
      });
    },
  },
  computed: {
    filterOn(): FilteredAttribute[] {
      const lang = [
        ...new Set(
          this.$store.state.projects.projects.map(
            (item: Event) => item.attributes.locale
          )
        ),
        "nl",
        "en",
      ].map((item) => ({ id: item }));
      return [{ id: "search", label: "Search", type: "string" }];
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects-wrapper {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .filter-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
}
</style>
