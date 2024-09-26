<template>
  <div class="events">
    <eventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <paginationComponent @updatePagination="handlePaginationUpdate" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import eventCard from "@/components/Events/EventCard.vue";
import paginationComponent from "@/components/Generic/Pagination.vue";
import { Pagination } from "@/types/generic/Pagination";

export default defineComponent({
  name: "EventsList",
  props: {
    events: Array,
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
    eventCard,
    paginationComponent,
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
.events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-top: 0.5rem;
}
</style>
