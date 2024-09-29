<template>
  <div class="event">
    <div class="event-content">
      <div class="title-content">
        <div class="title-content-title bold">Titel</div>
        <div class="title-content-content bold">
          {{ event.attributes.title }}
        </div>
      </div>
      <div class="description-content">
        <div class="description-content-title">Beschreibung</div>
        <div
          class="description-content-content title-content-content__max-height"
        >
          {{ event.attributes.description }}
        </div>
      </div>
      <div class="category-content">
        <div class="category-content-title">Kategorie</div>
        <div class="category-content-content title-content-content__max-height">
          <div
            v-bind:key="index"
            v-for="(item, index) in event.attributes.categories.data"
          >
            {{ item.attributes.Name }}
          </div>
        </div>
      </div>
      <div class="date-content">
        <div class="date-content-title">Start Datum</div>
        <div class="date-content-content title-content-content__max-height">
          {{ startDate }}
        </div>
      </div>
      <div class="date-content">
        <div class="date-content-title">End Datum</div>
        <div class="date-content-content title-content-content__max-height">
          {{ endDate }}
        </div>
      </div>
      <div class="links-content">
        <div class="links-content-title">Links</div>
        <div class="links-content-content title-content-content__max-height">
          <a
            v-bind:key="index"
            :href="item.link"
            target="_black"
            v-for="(item, index) in event.attributes.urls.filter(
              (link) => link.link !== '' && link.description !== ''
            )"
            >{{ item.description }}
            <span
              v-if="
                index <
                event.attributes.urls.filter(
                  (link) => link.link !== '' && link.description !== ''
                ).length -
                  1
              "
              >,
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Event } from "@/types/collection/Event";
import events from "../../store/Events";

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
  computed: {
    events() {
      return events;
    },
    startDate(): string {
      return new Date(this.event.attributes.startDate).formatDateTime(false);
    },
    endDate(): string {
      return new Date(this.event.attributes.startDate).formatDateTime(false);
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

    .title-content,
    .description-content,
    .date-content,
    .category-content,
    .links-content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;

      &.title-content {
        color: #cd1421;
      }

      .title-content-title,
      .description-content-title,
      .category-content-title,
      .date-content-title,
      .links-content-title {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }

      .title-content-content,
      .description-content-content,
      .category-content-content,
      .date-content-content,
      .links-content-content {
        overflow: auto;
        grid-column: span 2;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        &__max-height {
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
