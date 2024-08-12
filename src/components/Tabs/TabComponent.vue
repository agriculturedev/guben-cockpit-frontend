<template lang="html">
  <div class="tab" v-show="isActive">
    <div class="map-slot">
      <slot name="map"></slot>
    </div>
    <div class="info-slot">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: {
    title: {
      type: String,
      default: "Tab",
    },
    activeTab: {
      type: String,
      default: "1",
    },
    tabindex: {
      type: String,
    },
  },

  computed: {
    isActive() {
      return this.$props.activeTab.toString() === this.$props.tabindex;
    },
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  gap: 2rem;
}

.map-slot {
  width: 50%;
  height: clamp(10vh, 50vh, 70vh);
}

.info-slot {
  width: 50%;
}
</style>
