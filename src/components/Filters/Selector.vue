<template>
  <div class="main">
    <span>Label temporary</span>
    <ul class="dropdown">
      <li v-for="(value, index) in attribute.values" :key="value">
        <input
          type="radio"
          :name="attribute.id"
          :id="`${value}-${index}`"
          :value="value"
          @input="testing($event, value)"
        />
        <label :class="{ active: test === value }" :for="`${value}-${index}`">
          {{ value }}</label
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SearchComponent",
  props: {
    attribute: [],
  },
  data() {
    return {
      test: null,
    };
  },
  methods: {
    testing(e, val) {
      e.preventDefault();
      if (this.test === val) {
        this.test = null;
        e.checked = false;
      } else {
        this.test = val;
      }
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
