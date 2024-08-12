<template>
  <CardComponent>
    <h2 class="title">{{ title }}</h2>
    <apexchart
      type="line"
      :options="chartOptions"
      :series="series"
      height="350"
    ></apexchart>
  </CardComponent>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import CardComponent from "@/components/Generic/Card.vue";

export default {
  name: "LineChart",
  components: {
    CardComponent,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      title: "Demografie Guben",
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
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
