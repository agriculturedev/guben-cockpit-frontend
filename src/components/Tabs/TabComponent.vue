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
      type: Number,
      default: 0,
    },
    tabindex: {
      type: Number,
    },
  },

  computed: {
    isActive() {
      return this.$props.activeTab === this.$props?.tabindex;
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 1rem;
  flex-direction: row;
  gap: 2rem;
}

.map-slot {
  width: 50%;
  height: clamp(10vh, 50vh, 70vh);
}

.info-slot {
  width: auto;
}
</style>
