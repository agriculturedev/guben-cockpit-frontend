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
    <!--    <component :is="randomChartComponent1" />-->
    <!--    <component :is="randomChartComponent2" />-->
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
  gap: 0.5rem;
}
.grid-item {
  :nth-child(2) {
    grid-row: span 2; /* Spans 2 rows */
  }
}
</style>

<script lang="ts">
import { DefineComponent, defineComponent } from "vue";
import InfoCardVariant1 from "@/components/Home/CardComponents/InfoCardVariant1.vue";
// import LineChart from "@/components/Charts/LineChart.vue";
// import BarChartV2 from "@/components/Charts/BarChartV2.vue";
// import PieChart from "@/components/Charts/PieChart.vue";

export default defineComponent({
  name: "InformationComponent",
  components: {
    // PieChart,
    // BarChartV2,
    // LineChart,
    InfoCardVariant1,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      randomChartComponent1: null as DefineComponent<
        NonNullable<unknown>,
        NonNullable<unknown>,
        any
      > | null,
      randomChartComponent2: null as DefineComponent<
        NonNullable<unknown>,
        NonNullable<unknown>,
        any
      > | null,
    };
  },
  // mounted() {
  //   this.randomChartComponent1 = this.randomChartComponent();
  //   this.randomChartComponent2 = this.randomChartComponent();
  // },
  // methods: {
  //   randomChartComponent() {
  //     const components = [LineChart, BarChartV2, PieChart];
  //     const randomIndex = Math.floor(Math.random() * components.length);
  //     return components[randomIndex];
  //   },
  // },
});
</script>
