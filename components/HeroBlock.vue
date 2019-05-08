<template>
  <component
    :is="type"
    :to="to"
    :href="href"
    class="Block"
    :class="bgColorClass"
  >
    <!-- reactive image didn't work in assets -->
    <img class="Block-image" :src="`/images/${image}`" :alt="label" />
    <div class="Block-inner">
      <h3 class="Title" :class="colorClass">{{ label }}</h3>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    image: String,
    label: String,
    to: String,
    href: String,
    color: String
  },
  computed: {
    bgColorClass() {
      return this.color && `bg-brand-${this.color}`;
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
        return "button";
      }
    }
  }
};
</script>

<style>
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
