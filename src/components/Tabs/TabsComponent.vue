<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActiveTab(index)"
        :class="{ tab__selected: index === activeTab }"
      >
        {{ tab?.props?.title }}
      </li>
    </ul>

    <slot v-bind:activeTab="$data?.activeTab"> </slot>
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      tabs: [],
      activeTab: 0,
    };
  },
  mounted() {
    this.tabs = this.$slots.default()[0]?.children; // not sure why i need to use the [0]?.children here, something to do with slots?
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
  padding: 0 0 0 20px;
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

.tabs li {
  background-color: #ddd;
  color: #aaa;
}

.tabs li.tab__selected {
  background-color: #fff;
  color: #505050;
}
</style>
