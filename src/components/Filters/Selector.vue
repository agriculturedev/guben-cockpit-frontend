<template>
  <div
    @click="toggleDropdown"
    :class="dropdownActive ? `main active` : `main`"
    v-click-outside="closeDropdown"
  >
    <span>{{ attribute.label ? attribute.label : attribute.id }}</span>
    <ul
      v-show="dropdownActive"
      :class="'dropdown ' + (right === true ? 'right' : '')"
    >
      <li
        @click="setSelection($event, value)"
        v-for="(value, index) in attribute.values"
        :key="value.id"
      >
        <input
          :type="attribute.multiselect ? 'checkbox' : 'radio'"
          :name="attribute.id"
          :id="`${value.id}-${index}`"
          :value="value.id"
        />
        <label
          :class="{ active: currentActive.includes(value.id) }"
          :for="`${value.id}-${index}`"
        >
          {{ value.label !== undefined ? value.label : value.id }}</label
        >
      </li>
      <li>
        <slot />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SelectorComponent",
  props: {
    attribute: [],
    right: Boolean,
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

      val = val.id;

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
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  position: relative;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;

  &.active {
    outline-width: thick;
    outline-style: solid;
    outline-color: #cd142036;
    border-color: #cd1420;
  }

  span {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  ul {
    position: absolute;
    left: 0;
    right: auto;
    top: calc(100% + 10px);
    background-color: inherit;
    border: inherit;
    padding: 5px 0;
    min-width: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 5px 12px -4px #ccc;
    border: none;
    max-height: 400px;
    overflow-y: scroll;

    &.right {
      right: 0;
      left: auto;
    }

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
