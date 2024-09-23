<template>
  <div class="wrapper">
    <TabsComponent v-slot="scope">
      <TabComponent
        v-for="(tab, index) in tabs"
        :key="tab?.id"
        :title="tab?.attributes.title"
        :tabindex="index"
        :activeTab="scope?.activeTab"
      >
        <template #map>
          <MapComponent
            v-if="scope.activeTab === 0"
            src="https://guben.elie.de/?Map/layerIds=02886f50-7bd5-46d3-a763-974213df3431,111222356,111222357,111222358,111222359,111222360,111222364,111222348&visibility=true,true,true,true,true,true,true,true&transparency=0,0,0,0,0,0,0,0"
          />
          <MapComponent
            v-if="scope.activeTab === 1"
            src="https://guben.elie.de/?Map/layerIds=02886f50-7bd5-46d3-a763-974213df3431,111222349,111222366,111222365,111222368&visibility=true,true,true,true,true&transparency=0,0,0,0,0"
          />
          <MapComponent
            v-if="scope.activeTab === 2"
            src="https://guben.elie.de/?Map/layerIds=02886f50-7bd5-46d3-a763-974213df3431,111222367,111222362,111222363,111222361&visibility=true,true,true,true,true&transparency=0,0,0,0,0"
          />
          <MapComponent
            v-if="scope.activeTab === 3"
            src="https://guben.elie.de/?Map/layerIds=02886f50-7bd5-46d3-a763-974213df3431,111222355,111222350,111222341&visibility=true,true,true,true&transparency=0,0,0,0"
          />
          <MapComponent
            v-if="scope.activeTab === 4"
            src="https://guben.elie.de/?Map/layerIds=02886f50-7bd5-46d3-a763-974213df3431,211222351,111222351,111222352,111222354,111222354&visibility=true,true,true,true,true,true&transparency=0,0,0,0,0,0"
          />
        </template>
        <template #info>
          <div class="cardWrapper">
            <BarChartEinwohner v-if="scope.activeTab === 0" />
            <InformationComponent :cards="tab?.attributes?.cards" />
          </div>
        </template>
      </TabComponent>
    </TabsComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabsComponent from "@/components/Tabs/TabsComponent.vue";
import TabComponent from "@/components/Tabs/TabComponent.vue";
import MapComponent from "@/components/MapComponent.vue";
import InformationComponent from "@/components/Home/InformationComponent.vue";
import BarChartEinwohner from "@/components/Charts/BarChartEinwohner.vue";

export default defineComponent({
  name: "TabPanel",
  components: {
    BarChartEinwohner,
    InformationComponent,
    MapComponent,
    TabComponent,
    TabsComponent,
  },
  props: {
    tabs: Array,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  padding-bottom: 20px;
}

.cardWrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
