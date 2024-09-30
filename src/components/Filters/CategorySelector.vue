<template>
  <Selector
    :attribute="dateAttribute"
    @update="(n: string) => updateFilter(attribute.id.toString(), n)"
  >
  </Selector>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Selector from "@/components/Filters/Selector.vue";
import { Category } from "@/types/collection/Category";
export default defineComponent({
  name: "CategorySelectorComponent",
  props: {
    attribute: {},
  },
  computed: {
    dateAttribute(): any {
      if (!this.attribute || this.attribute === null) return null;
      const copyAttribute = JSON.parse(JSON.stringify(this.attribute));
      copyAttribute.values = this.$store.state.categories.categories.data.map(
        (category: Category) => {
          return {
            id: category.attributes.Name,
            label: category.attributes.Name,
          };
        }
      );
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
      this.$emit("update", value);
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
