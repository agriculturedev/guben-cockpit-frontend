<template>
  <div class="carousel-container">
    <button @click="prev">prev</button>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div
          class="card"
          v-for="card in cards.slice(0, this.renderLimit)"
          :key="card.id"
        >
          <!-- {{card }} -->
          <projectCard :key="card.id" :project="card" />
        </div>
      </div>
    </div>
    <button @click="next">next</button>
  </div>
</template>

based on
https://dev.to/luvejo/how-to-build-a-carousel-from-scratch-using-vue-js-4ki0
with some minor improvements like the renderLimit, this prevents slowdowns in
large arrays with images etc.

<script>
import projectCard from "@/components/Projects/ProjectCard.vue";

export default {
  components: { projectCard },
  data() {
    return {
      renderLimit: 10, // without this large arrays are slower and use more memory
      cards: [],
      // cards: Array.from({ length: 100 }, (_, i) => i + 1),
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  props: {
    projects: Array,
  },

  mounted() {
    this.cards = this.projects;
    this.setStep();
    this.resetTranslate();
  },

  methods: {
    setStep() {
      const cardWidth = this.$refs.inner.children[0]?.scrollWidth;
      if (cardWidth === undefined) {
        console.log("cardWidth is undefined");
        const innerWidth = this.$refs.inner.scrollWidth;
        const totalCards = this.cards.slice(0, this.renderLimit).length;
        this.step = `${innerWidth / totalCards}px`;
        return;
      }
      this.step = `${cardWidth}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.carousel {
  width: 100%;
  overflow: hidden;
}

.inner {
  transition: transform 0.5s;
  white-space: nowrap;
  display: inline-flex;
  gap: 2rem;
}

.card {
  display: inline-flex;
  width: 25vw;
  align-items: center;
  justify-content: center;
}
</style>
