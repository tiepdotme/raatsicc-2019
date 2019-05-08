<template>
  <component
    :is="type"
    :to="to"
    :href="href"
    class="Block"
    :class="rootClasses"
  >
    <!-- reactive image didn't work in assets -->
    <img class="Block-image" :src="`/images/${image}`" :alt="label" />
    <div class="Block-inner">
      <h3 class="Title mb-1" :class="colorClass">{{ label }}</h3>
      <p v-if="sublabel" class="Subheading italic" :class="colorClass">
        {{ sublabel }}
      </p>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    image: String,
    label: String,
    sublabel: String,
    to: String,
    href: String,
    color: String
  },
  computed: {
    rootClasses() {
      return [
        this.color && `bg-brand-${this.color}`
        // this doesn't fuck work WTF?
        // this.to === this.$route.params.page && "is-active"
      ];
    },
    colorClass() {
      return this.color !== "" && "text-white";
    },
    type() {
      if (this.to) {
        return "nuxt-link";
      } else if (this.href) {
        return "a";
      } else {
        return "div";
      }
    }
  },
  mounted() {
    console.log(this.$route.params.page);
  }
};
</script>

<style lang="postcss">
/* md:w-1/2 lg:w-1/4 */
.Block {
  @apply relative overflow-hidden flex-grow;
  height: calc(100vh * 1 / 3);
  transition: background-color 500ms ease;
}

.Block:hover {
  @apply bg-brand-dust;
}

.Block-inner {
  @apply px-6 py-5 relative;
}

.Block-inner h3 {
  @apply mb-1 !important;
}

.Block-image {
  @apply absolute inset-0 h-full object-cover;
  mix-blend-mode: multiply;
  transition: transform 250ms ease;
}

.Block:hover .Block-image {
  transform: scale(1.01);
}

@variants hover {
}

@screen md {
  .Block {
    @apply w-1/2;
  }
}

@screen lg {
  .Block {
    @apply w-1/4;
  }
}
</style>
