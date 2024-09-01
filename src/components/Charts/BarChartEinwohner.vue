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
import { einwohnerzahl } from "@/chartData/einwohnerzahl/einwohnerzahl";

export default {
  name: "BarChartEinwohner",
  components: {
    CardComponent,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      title: "Einwohnerzahl",
      series: [
        {
          name: "Einwohner gesamt",
          data: einwohnerzahl.map((data) => data.einwohnerGesamt),
        },
        {
          name: "EW männlich",
          data: einwohnerzahl.map((data) => data.mannlich),
        },
        {
          name: "EW weiblich",
          data: einwohnerzahl.map((data) => data.weiblich),
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
          categories: this.sortDateStrings(
            einwohnerzahl.map((data) => data.alterspyramideZum)
          ),
        },
      },
    };
  },
  methods: {
    parseDate(dateString) {
      const [day, month, year] = dateString.split(".").map(Number);
      return new Date(year, month - 1, day); // month is 0-indexed in JavaScript Date
    },
    sortDateStrings(dateStrings) {
      return dateStrings.sort((a, b) => {
        const dateA = this.parseDate(a);
        const dateB = this.parseDate(b);
        return dateA - dateB;
      });
    },
  },
};
</script>

<style scoped>
.title {
  padding: 0.5rem;
  padding-bottom: 0;
}
</style>
