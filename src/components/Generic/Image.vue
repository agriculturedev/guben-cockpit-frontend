<template>
  <img
    class="image"
    :src="imageSrc"
    :alt="image.data.attributes.alternativeText"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Image } from "@/types/generic/Image";
import { BASE_URL } from "@/api/ApiService";

export default defineComponent({
  name: "GenericImage",
  props: {
    image: {
      type: Object as PropType<Image>,
      required: true,
    },
  },

  data() {
    return {
      imageSrc: "",
    };
  },
  mounted() {
    this.imageSrc = `${BASE_URL}${this.image.data.attributes.formats.large.url}`;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image {
  width: 100%;
  height: auto;
}
</style>
