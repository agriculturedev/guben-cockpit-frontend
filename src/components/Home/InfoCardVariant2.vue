<template>
  <CardComponent>
    <h2 class="title">{{ title }}</h2>
    <VueMarkdown
      :source="description"
      :options="markdownOptions"
      class="description"
    />
  </CardComponent>
</template>

<style scoped lang="scss">
.title {
  align-self: self-start;
  color: #cd1421;
}

.description {
  padding-top: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import VueMarkdown from "vue-markdown-render";
import GenericButton from "@/components/Generic/Button.vue";
import CardComponent from "@/components/Generic/Card.vue";

export default defineComponent({
  name: "InfoCardVariant2",
  components: { CardComponent, VueMarkdown },
  data() {
    return {
      title: "Klima und Umwelt",
      description:
        "Übersicht offener Datensätze, sowie kommunaler Richtlinien/Satzungen/Ordnungen zum Thema.",
      markdownOptions: {
        underline: true,
        italic: true,
      },
    };
  },
});
</script>
