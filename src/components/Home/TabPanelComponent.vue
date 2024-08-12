<template>
  <div class="wrapper">
    <TabsComponent v-slot="scope">
      <TabComponent
        title="Stadtentwicklung und Teilhabe"
        tabindex="0"
        :activeTab="scope?.activeTab"
      >
        <template #map> <MapComponent /> </template>
        <template #info> <InformationComponent /> </template>
        ></TabComponent
      >
      <TabComponent
        title="Nachhaltige Mobilität"
        tabindex="1"
        :activeTab="scope?.activeTab"
        ><template #map> <MapComponent /> </template>
        <template #info> <InformationComponent /> </template
      ></TabComponent>
      <TabComponent
        title="Kllima und Umwelt"
        tabindex="2"
        :activeTab="scope?.activeTab"
        ><template #map> <MapComponent /> </template>
        <template #info> <InformationComponent /> </template
      ></TabComponent>
      <TabComponent
        title="Energie und Wirtschaft"
        tabindex="3"
        :activeTab="scope?.activeTab"
        ><template #map> <MapComponent /> </template>
        <template #info> <InformationComponent /> </template
      ></TabComponent>
      <TabComponent
        title="Gesundheit und Kultur"
        tabindex="4"
        :activeTab="scope?.activeTab"
        ><template #map> <MapComponent /> </template>
        <template #info> <InformationComponent /> </template
      ></TabComponent>
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
});
</script>
