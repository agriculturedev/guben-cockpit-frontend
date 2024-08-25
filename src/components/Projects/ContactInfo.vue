<template>
  <div class="contact-info">
    <div class="column">
      <LabelledValue label="address" :value="contact.address" />
      <LabelledValue label="email" :value="contact.email" />
    </div>
    <div class="column">
      <LabelledValue label="phone" :value="contact.phone" />
      <LabelledValue label="fax" :value="contact.fax" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Contact } from "@/types/collection/Project";
import LabelledValue from "@/components/Generic/LabelledValue.vue";

export default defineComponent({
  name: "ContactInformation",
  components: { LabelledValue },
  props: {
    contact: {
      // provide more specific type to `Object`
      type: Object as PropType<Contact>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.contact-info {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #ccc;

  .column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
