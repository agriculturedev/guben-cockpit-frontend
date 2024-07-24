<template>
  <div class="filter-group max-width">
    <div v-for="attribute in attributes" :key="attribute.id">
      <Search
        v-if="attribute.type === 'string' && !attribute.values"
        @update="(n: string) => updateFilter(attribute.id.toString(), n)"
      />
      <Selector
        v-if="attribute.values"
        :attribute="attribute"
        @update="(n: string) => updateFilter(attribute.id.toString(), n)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FilteredAttribute } from "@/types/generic/FilteredAttribute";
import Search from "@/components/Filters/Search.vue";
import Selector from "@/components/Filters/Selector.vue";
export default defineComponent({
  name: "FilterGroup",
  data() {
    return {
      filtered: {} as any,
    };
  },
  props: {
    filterTarget: [] as PropType<object[]>,
    attributes: [] as PropType<FilteredAttribute[]>,
  },
  components: {
    Search,
    Selector,
  },
  methods: {
    updateFilter(id: string, value: string) {
      this.filtered[id] = value;
      if (!value) {
        delete this.filtered[id];
      }
      this.$emit("update", this.filtered);
    },
  },
});
</script>

<style lang="scss" scoped>
.filter-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    margin: 10px 0;
  }
}
</style>
