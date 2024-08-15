<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div
        class="card"
        v-for="card in cards.slice(0, this.renderLimit)"
        :key="card"
      >
        {{ card }}
      </div>
    </div>
  </div>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

based on
https://dev.to/luvejo/how-to-build-a-carousel-from-scratch-using-vue-js-4ki0
with some minor improvements like the renderLimit, this prevents slowdowns in
large arrays with images etc.

<script>
export default {
  data() {
    return {
      renderLimit: 10, // without this large arrays are slower and use more memory
      cards: Array.from({ length: 100 }, (_, i) => i + 1),
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },

  mounted() {
    this.setStep();
    this.resetTranslate();
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      this.step = `${innerWidth / this.renderLimit}px`;
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

<style>
.carousel {
  width: 170px;
  overflow: hidden;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;

  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
