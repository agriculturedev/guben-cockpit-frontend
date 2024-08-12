<template>
  <div class="home-container max-width">
    <h2 class="title">{{ title }}</h2>
    <VueMarkdown
      :source="description"
      :options="markdownOptions"
      class="description"
    />
    <div class="tab-panel">
      <TabPanel />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    align-self: self-start;
    padding-top: 50px;
    color: #cd1421;
  }

  .description {
    padding-top: 20px;
  }

  .tab-panel {
    width: 100%;
    padding-top: 30px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import VueMarkdown from "vue-markdown-render";
import TabPanel from "@/components/Home/TabPanelComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: { TabPanel, VueMarkdown },
  data() {
    return {
      title: "Wilkommen auf der Übersichtsseite",
      description:
        "Herzlich willkommen auf dem Dashboard des Guben Cockpit! Um barrierefreie und grenzüberschreitende Zusammenarbeit zu vereinfachen, digitalisiert Guben städtische Aktivitäten und Informationen. Seien Sie eingeladen die städtische Daten frei nach Ihren Interessen  zu erkunden und für Ihre Ideen einzusetzen. Das Ziel: Guben gemeinsam mit Ihnen zu entwickeln. Lassen Sie uns Guben gemeinsam gestalten unter dem Motto: Eine smarte Europastadt.",
      markdownOptions: {
        underline: true,
        italic: true,
      },
    };
  },
});
</script>
