<template>
  <Selector
    :attribute="dateAttribute"
    @update="(n: any) => updateFilter(attribute.id.toString(), n)"
  >
  </Selector>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Selector from "@/components/Filters/Selector.vue";
export default defineComponent({
  name: "DateSelectorComponent",
  props: {
    attribute: {},
  },
  computed: {
    dateAttribute(): any {
      if (!this.attribute || this.attribute === null) return null;
      const copyAttribute = JSON.parse(JSON.stringify(this.attribute));
      copyAttribute.values = [
        { id: "tomorrow", label: "Morgen" },
        { id: "day_after_tomorrow", label: "Übermorgen" },
        { id: "this_week", label: "Diese Woche" },
        { id: "next_week", label: "Nächste Woche" },
        { id: "this_month", label: "Diesen Monat" },
        { id: "next_month", label: "Nächsten Monat" },
      ];
      return copyAttribute;
    },
  },
  components: {
    Selector,
  },
  data() {
    return {};
  },
  methods: {
    updateFilter(id: string, value: string) {
      const today = new Date();
      // set time to 00:00:00:000
      today.setHours(0, 0, 0, 0);
      let selected_date = { start: 0, end: 0 };

      switch (value[0]) {
        case "tomorrow": {
          let date = new Date(today);
          date.setDate(today.getDate() + 1);
          selected_date.start = date.getTime();
          date.setHours(23, 59, 59, 999);
          selected_date.end = date.getTime();
          break;
        }
        case "day_after_tomorrow": {
          let date = new Date(today);
          date.setDate(today.getDate() + 2);
          selected_date.start = date.getTime();
          selected_date.end = date.getTime();
          break;
        }
        case "this_week": {
          let date = new Date(today);
          date.setDate(today.getDate() - today.getDay());
          selected_date.start = date.getTime();
          selected_date.end = date.getTime() + 6 * 24 * 60 * 60 * 1000;
          break;
        }
        case "next_week": {
          let date = new Date(today);
          date.setDate(today.getDate() - today.getDay() + 7);
          selected_date.start = date.getTime();
          selected_date.end = date.getTime() + 6 * 24 * 60 * 60 * 1000;
          break;
        }
        case "this_month": {
          let date = new Date(today);
          date.setDate(1);
          selected_date.start = date.getTime();
          selected_date.end = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0
          ).getTime();
          break;
        }
        case "next_month": {
          let date = new Date(today);
          date.setDate(1);
          date.setMonth(today.getMonth() + 1);
          selected_date.start = date.getTime();
          selected_date.end = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
          ).getTime();
          break;
        }
        default:
          break;
      }

      this.$emit("date-update", selected_date);
    },
  },
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  padding: 5px 25px 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;

  span {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  ul {
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    background-color: inherit;
    border: inherit;
    padding: 5px 0;
    min-width: 100%;
    box-sizing: border-box;
    li {
      list-style: none;
      width: 100%;
      margin: 5px 0;

      label {
        width: 100%;
        display: block;
        padding: 5px 10px;
        cursor: pointer;
        box-sizing: border-box;

        &.active {
          background-color: #ccc;
        }
      }

      input {
        position: absolute;
        visibility: hidden;
      }
    }
  }

  &::after {
    content: "▼";
    font-size: 10px;
    position: absolute;
    right: 10px;
    top: 8px;
  }
}
</style>
