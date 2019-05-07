<template>
  <component :is="type" :href="href" class="button">
    <slot />
  </component>
</template>

<script>
// https://thoughts.codegram.com/create-a-reusable-button-with-vue-dynamic-components/
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
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
