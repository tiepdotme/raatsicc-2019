<template>
  <figure class="Aspect" :ratio="ratio" :style="aspectRatio">
    <slot />
  </figure>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String
    }
  },
  computed: {
    aspectRatio() {
      return this.ratio && `--aspect-ratio: ${this.ratio}`;
    }
  }
};
</script>

<style>
:root {
  --aspect-ratio: 9 / 16;
}

.Aspect {
  /* requires adding a padding-bottom style, see: https://github.com/callumflack/iremono/blob/master/lib/components/aspect-ratio.css */
  @apply relative overflow-hidden h-0;
  padding-bottom: calc(100% * (var(--aspect-ratio)));
}

.Aspect > * {
  @apply absolute inset-0 object-cover h-full w-full;
}
</style>
