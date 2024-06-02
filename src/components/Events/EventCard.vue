<template>
  <div class="event">
    <div class="event-content">
      <h3>{{ event.attributes.Title }}</h3>
      <p>{{ event.attributes.Description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Event } from "@/types/collection/Event";

export default defineComponent({
  name: "EventCard",
  components: {},
  props: {
    event: {
      // provide more specific type to `Object`
      type: Object as PropType<Event>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event {
  box-shadow: 0 5px 12px -4px #ccc;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
  background-color: white;

  .event-content {
    padding: 10px;
  }
}
</style>
