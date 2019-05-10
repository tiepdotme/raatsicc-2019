<template>
  <header class="Stripe" :class="rootClasses">
    <img class="Stripe-image" :src="image" :alt="alt" />
    <slot></slot>
    <!-- <div class="Stripe-inner"></div> -->
  </header>
</template>

<script>
export default {
  props: {
    image: String,
    alt: String,
    color: String
  },
  computed: {
    rootClasses() {
      return [this.color && `bg-brand-${this.color}`];
    }
  }
};
</script>

<style lang="postcss" scoped>
.Stripe {
  @apply relative overflow-hidden flex-grow;
  height: calc(100vh * 1 / 3);
  transition: background-color 500ms ease, transform 500ms ease-in-out;
}

.Stripe-image {
  @apply absolute inset-0 h-full w-full object-cover opacity-75;
  mix-blend-mode: multiply;
  transition: transform 250ms ease;
}
</style>
