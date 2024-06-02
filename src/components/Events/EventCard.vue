<template>
  <div class="event">
    <div class="event-header">header</div>
    <div class="event-content">
      <div class="title-content">
        <div class="title-content-title bold">Titel</div>
        <div class="title-content-content bold">
          {{ event.attributes.Name }}
        </div>
      </div>
      <div class="title-content">
        <div class="title-content-title">Beschreibung</div>
        <div class="title-content-content title-content-content__max-height">
          {{ event.attributes.Description }}
        </div>
      </div>
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
  background-color: white;
  flex: 1;

  .event-header {
    padding: 20px;
  }

  .event-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    font-size: 12px;

    .title-content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;

      .title-content-title {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }

      .title-content-content {
        grid-column: span 2;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        &__max-height {
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 100px;
        }
      }

      .bold {
        font-weight: bold;
      }
    }
  }
}
</style>
