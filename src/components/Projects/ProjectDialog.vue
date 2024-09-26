<template>
  <div
    class="modal-backdrop"
    v-show="isOpen"
    :class="{ open: isOpen }"
    @click="closeDialog()"
  >
    <dialog :open="isOpen" class="dialog">
      <CardComponent class="dialog-card">
        <div class="dialog-header">
          <h2>{{ project.attributes.title }}</h2>
          <img
            class="close-dialog"
            @click="closeDialog()"
            src="@/assets/cross.svg?.data"
            alt="close"
          />
        </div>
        <div class="image-wrapper" v-if="project.attributes.imageUrl">
          <img
            class="image"
            :src="project.attributes.imageUrl"
            :alt="project.attributes.imageCaption"
          />
          <p class="image-credits" v-if="project.attributes.imageCredits">
            {{ project.attributes.imageCredits }}
          </p>
        </div>
        <p>{{ project.attributes.description }}</p>
        <div v-html="project.attributes.fullText" />
      </CardComponent>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/Generic/Card.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { Project } from "@/types/collection/Project";

export default defineComponent({
  name: "ProjectDialog",
  computed: {
    project(): Project {
      return this.$store.state.projectModal.project;
    },
    isOpen(): boolean {
      return this.$store.state.projectModal.isOpen;
    },
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("projectModal/closeModal");
    },
  },
});
</script>

<style scoped lang="scss">
.modal-backdrop {
  background: rgba(250, 250, 250, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .dialog {
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    z-index: 100;
    border-radius: 10px;
    border: 0;
    background-color: transparent;
    flex-direction: column;

    .dialog-card {
      padding: 1rem;
      width: clamp(100px, 70dvw, 900px);
      height: 75dvh;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-content: center;
      gap: 0.5rem;
      overflow: scroll;

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .close-dialog {
        top: 0;
        right: 0;
        width: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.1);
      }

      .image-wrapper {
        position: relative;
        align-self: center;
        background: transparent;
        width: 85%;

        .image {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          width: 100%;
          height: auto;
        }

        .image-credits {
          position: absolute;
          padding: 0.25rem;
          bottom: 0.25rem;
          left: 0;
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
</style>
