<template>
  <div @click="toggleDropdown" class="main" v-click-outside="closeDropdown">
    <span>{{ attribute.label ? attribute.label : attribute.id }}</span>
    <ul v-show="dropdownActive" class="dropdown">
      <li
        @click="setSelection($event, value)"
        v-for="(value, index) in attribute.values"
        :key="value"
      >
        <input
          :type="attribute.multiselect ? 'checkbox' : 'radio'"
          :name="attribute.id"
          :id="`${value}-${index}`"
          :value="value"
        />
        <label
          :class="{ active: currentActive.includes(value) }"
          :for="`${value}-${index}`"
        >
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
      currentActive: [],
      dropdownActive: false,
    };
  },
  methods: {
    setSelection(e, val) {
      e.preventDefault();

      if (this.attribute.multiselect) {
        if (this.currentActive.includes(val)) {
          this.currentActive = this.currentActive.filter((v) => v !== val);
          e.currentTarget.querySelector("input").checked = false;
        } else {
          this.currentActive.push(val);
          e.currentTarget.querySelector("input").checked = true;
        }
      } else {
        document
          .querySelectorAll(`input[name='${this.attribute.id}']`)
          .forEach((el) => {
            el.checked = false;
          });
        if (this.currentActive.includes(val)) {
          this.currentActive = [];
          e.currentTarget.querySelector("input").checked = false;
        } else {
          this.currentActive = [val];
          e.currentTarget.querySelector("input").checked = true;
        }
      }

      this.$emit("update", this.currentActive);
    },
    toggleDropdown(e) {
      if (e.currentTarget.querySelector("ul").contains(e.target)) {
        return;
      }
      this.dropdownActive = !this.dropdownActive;
    },
    closeDropdown() {
      this.dropdownActive = false;
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
