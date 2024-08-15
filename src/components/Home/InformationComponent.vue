<template>
  <div class="grid-container">
    <InfoCardVariant1
      v-for="card in cards"
      v-bind:key="card?.title"
      class="grid-item"
      :values="{
        imgSrc: card?.imgSrc,
        imgAlt: card?.imgAlt,
        title: card?.title,
        description: card?.description,
        button: card?.button,
      }"
    />
    <!--      <LineChart />-->
    <!--    <BarChart />-->
    <!--    <InfoCardVariant2 />-->
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Responsive column size */
  gap: 1rem;
}
.grid-item {
  :nth-child(2) {
    grid-row: span 2; /* Spans 2 rows */
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import InfoCardVariant1 from "@/components/Home/CardComponents/InfoCardVariant1.vue";

export default defineComponent({
  name: "InformationComponent",
  components: {
    InfoCardVariant1,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log(this?.cards);
  },
});
</script>
