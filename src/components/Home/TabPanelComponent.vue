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
        <template #map> <MapComponent /> </template>
        <template #info>
          <InformationComponent :cards="tab?.attributes?.cards" />
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

export default defineComponent({
  name: "TabPanel",
  components: {
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
