<template>
  <component
    :is="type"
    :to="to"
    :href="href"
    class="Block"
    :class="rootClasses"
  >
    <!-- reactive image didn't work in assets -->
    <img
      class="Block-image"
      :class="imageOpacityClass"
      :src="`/images/${image}`"
      :alt="label"
    />
    <div class="Block-inner">
      <h3 class="Title mb-1" :class="colorClass">{{ label }}</h3>
      <p
        v-if="sublabel"
        class="Subheading font-normal italic"
        :class="colorClass"
      >
        {{ sublabel }}
      </p>
      <div v-if="cta" class="Meta font-medium" :class="ctaClasses">
        {{ cta }}
        <IconBase height="14" width="14" class="Block-cta">
          <BaselineArrowForward24px />
        </IconBase>
      </div>
    </div>
  </component>
</template>

<script>
import IconBase from "~/components/IconBase.vue";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";

export default {
  components: {
    IconBase,
    BaselineArrowForward24px
  },
  props: {
    image: String,
    label: String,
    sublabel: String,
    cta: String,
    ctaReposition: {
      type: Boolean,
      default: false
    },
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
    imageOpacityClass() {
      return this.ctaReposition !== true && "opacity-50";
    },
    ctaClasses() {
      return [
        this.color !== "" && "text-white",
        { "mt-auto text-right": this.ctaReposition }
      ];
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
  }
  // mounted() {
  //   console.log(this.$route.params.page);
  // }
};
</script>

<style lang="postcss">
.Block {
  @apply relative overflow-hidden flex-grow;
  height: calc(100vh * 1 / 3);
  transition: background-color 500ms ease, transform 500ms ease-in-out;
}

.Block:not(:first-of-type) {
  @apply border-l border-white;
}

.Block:hover {
  /* @apply bg-brand-dust; */
}

.Block-inner {
  @apply px-6 py-5 relative flex flex-col h-full;
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
  transform: scale(1.025);
}

.Block-cta svg {
  transform: translateX(0);
  transition: transform 500ms ease;
}
.Block:hover .Block-cta svg {
  transform: translateX(3px);
  transition: transform 500ms ease;
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
