<template>
  <div class="carousel-container">
    <button class="carousel-button" @click="prev">
      <img
        class="carousel-button-svg"
        src="@/assets/ArrowLeft.svg?.data"
        alt="arrowLeft"
      />
    </button>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div
          class="card"
          v-for="(card, index) in cards.slice(0, this.renderLimit)"
          :key="index"
        >
          <projectCard :project="card" />
        </div>
      </div>
    </div>
    <button class="carousel-button" @click="next">
      <img
        class="carousel-button-svg"
        src="@/assets/ArrowRight.svg?.data"
        alt="arrowRight"
      />
    </button>
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
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  props: {
    projects: Array,
  },

  mounted() {
    if (this.projects.length <= 4) {
      this.cards = this.projects.concat(this.projects);
    } else {
      this.cards = this.projects;
    }
    this.setStep();
    window.addEventListener("resize", this.setStep);
  },

  methods: {
    setStep() {
      this.$nextTick(() => {
        const card = this.$refs.inner.children[0];
        const gap = parseFloat(getComputedStyle(this.$refs.inner).gap) || 0;
        const cardWidth = card?.scrollWidth;
        if (cardWidth === undefined) {
          const innerWidth = this.$refs.inner.scrollWidth;
          const totalCards = this.cards.slice(0, this.renderLimit).length;
          this.step = `${innerWidth / totalCards}px`;
          return;
        }
        this.step = `${cardWidth + gap}px`;
        this.resetTranslate();
      });
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
  height: 40vh;

  .carousel-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .carousel {
    width: 100%;
    overflow: hidden;

    .inner {
      transition: transform 0.5s;
      white-space: nowrap;
      display: inline-flex;
      gap: 2rem;

      .card {
        display: inline-flex;
        width: 25vw;
        min-width: min-content;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
