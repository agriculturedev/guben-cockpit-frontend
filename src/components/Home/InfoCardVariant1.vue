<template>
  <CardComponent class="card-content">
    <img
      class="image"
      alt="Low Poly City"
      src="https://i.pinimg.com/originals/b8/0c/ee/b80ceec6d3d292362091f4e1da859e4a.png"
    />
    <h2 class="title">{{ title }}</h2>
    <VueMarkdown :source="description" :options="markdownOptions" />
    <GenericButton
      :values="{
        Text: 'Öffnen',
        URL: 'https://www.guben-tut-gut.de/de/wohnen/wohnungsangebote.html',
        newTab: true,
        id: 1,
        __component: 'Generic.Button',
      }"
    />
  </CardComponent>
</template>

<style scoped lang="scss">
.card-content {
  gap: 1rem;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.title {
  align-self: self-start;
  color: #cd1421;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import VueMarkdown from "vue-markdown-render";
import GenericButton from "@/components/Generic/Button.vue";
import CardComponent from "@/components/Generic/Card.vue";

export default defineComponent({
  name: "InfoCardVariant1",
  components: { CardComponent, GenericButton, VueMarkdown },
  data() {
    return {
      title: "Wohnungsangebot",
      description:
        "Suchen Sie nach leerstehenden Wohnungen und Gebäuden in Guben und Umgebung und nehmen Sie Konktakt auf!",
      markdownOptions: {
        underline: true,
        italic: true,
      },
    };
  },
});
</script>
