<template>
  <div class="events">
    <eventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import eventCard from "@/components/Events/EventCard.vue";

export default defineComponent({
  name: "EventsList",
  props: {
    events: Array,
  },
  components: {
    eventCard,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.events {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
}
</style>
