<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="tab in tabs"
        :key="tab.props.tabindex"
        @click="setActiveTab(tab.props.tabindex)"
        :class="{ tab__selected: tab.props.tabindex == activeTab }"
      >
        {{ tab.props.title }}
      </li>
    </ul>

    <slot v-bind:activeTab="$data?.activeTab"> </slot>
  </div>
</template>

<script lang="js">


export default {
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      tabs: [],
      activeTab: "0",
    };
  },
  mounted() {
    this.tabs = this.$slots.default();
  },
  methods: {
    setActiveTab(tabindex) {
      this.activeTab = tabindex;
    },
  },
};
</script>

<style lang="css">
ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}

ul.tabs__header > li {
  padding: 15px 30px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}

ul.tabs__header > li.tab__selected {
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-bottom: 8px solid transparent;
}

.tab {
  display: inline-block;
  color: black;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  min-height: 400px;
}

.tabs .tab {
  background-color: #fff;
}

.tabs li {
  background-color: #ddd;
  color: #aaa;
}

.tabs li.tab__selected {
  background-color: #fff;
  color: #505050;
}
</style>
