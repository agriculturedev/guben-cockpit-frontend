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
  flex-direction: column;
  gap: 1rem;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px #ccc;
  max-height: 70vh;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .map-slot {
    display: flex;
    flex: 1;
    min-height: 300px;

    .map {
      height: 100%;
      width: 100%;
    }
  }
  .info-slot {
    padding: 10px;
    position: relative;
    overflow-y: auto;
    flex: 1;
  }
}
</style>
