<template>
  <div class="wrapper">
    <div class="row">
      <InfoCardVariant1 />
      <LineChart />
    </div>
    <div class="row">
      <BarChart />
      <InfoCardVariant2 />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  gap: 1rem;
  width: 100%;
}
</style>

<script setup lang="ts">
import InfoCardVariant1 from "@/components/Home/InfoCardVariant1.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import InfoCardVariant2 from "@/components/Home/InfoCardVariant2.vue";
import BarChart from "@/components/Charts/BarChart.vue";
</script>
