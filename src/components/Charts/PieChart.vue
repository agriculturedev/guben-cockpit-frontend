<template>
  <CardComponent>
    <h2 class="title">{{ title }}</h2>
    <apexchart
      type="pie"
      :options="chartOptions"
      :series="series"
      height="350"
    />
  </CardComponent>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import CardComponent from "@/components/Generic/Card.vue";

export default {
  name: "PieChart",
  components: {
    CardComponent,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      title: "piechart placeholger",
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 250,
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.title {
  padding: 1rem;
}
</style>
