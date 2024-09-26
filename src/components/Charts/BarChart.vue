<template>
  <CardComponent>
    <h2 class="title">{{ title }}</h2>
    <apexchart
      type="bar"
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
  name: "BarChart",
  components: {
    CardComponent,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      title: "barchart placeholger",
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
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
