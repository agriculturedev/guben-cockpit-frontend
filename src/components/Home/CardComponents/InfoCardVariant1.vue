<template>
  <CardComponent>
    <div class="card-content">
      <img
        v-if="values.imgSrc"
        class="image"
        :alt="values.imgAlt"
        :src="values.imgSrc"
      />
      <h2 v-if="values.title" class="title">{{ values.title }}</h2>
      <VueMarkdown
        class="description"
        v-if="values.description"
        :options="markdownOptions"
        :source="values.description"
      />
      <GenericButton v-if="values.button" :values="values.button" />
    </div>
  </CardComponent>
</template>

<style scoped lang="scss">
.card-content {
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  height: 20%;
  object-fit: cover;
  border-radius: 5px;
}

.title {
  width: 100%;
  text-align: center;
  align-self: self-start;
  color: #cd1421;
}

.description {
  width: 100%;
  text-align: center;
  align-self: self-start;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import VueMarkdown from "vue-markdown-render";
import GenericButton from "@/components/Generic/Button.vue";
import CardComponent from "@/components/Generic/Card.vue";
import { InfoCardVariant1 } from "@/types/cards/InfoCardVariants";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InfoCardVariant1",
  components: { CardComponent, GenericButton, VueMarkdown },
  props: {
    values: {
      type: Object as PropType<InfoCardVariant1>,
      required: true,
    },
  },
  data() {
    return {
      markdownOptions: {
        underline: true,
        italic: true,
        html: true,
      },
    };
  },
});
</script>
