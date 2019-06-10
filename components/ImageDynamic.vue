<template>
  <no-ssr>
    <figure>
      <!-- SVG blur -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="hidden">
        <defs>
          <filter id="blur">
            <feGaussianBlur :stdDeviation="deviation" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
      <!-- v-lazy-image -->
      <v-lazy-image
        :src="url"
        :src-placeholder="urlPlaceholder"
        :srcset="srcset"
      />
    </figure>
  </no-ssr>
</template>

<script>
/*
 * ImageDynamic
 *
 * Built to work with Dato CMS images.
 * Dato provides built in support for imgix parameters.
 *
 * Component features:
 * - Optimize quality for speed
 * - Responsive image sizes using srcset
 * - Lazy loads offscreen image
 * - SVG for a better, frostier blur than CSS
 */

// const optimizeParams = "fit=crop&crop=edges&auto=format,enhance&q=50";
const optimizeParams = "auto=format&q=33";
const sizes = [480, 640, 960, 1200];

export default {
  props: {
    src: String,
    alt: String,
    maxWidth: Number,
    blurLevel: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      url: null,
      urlPlaceholder: null,
      srcset: null,
      rate: 1
    };
  },
  computed: {
    deviation() {
      return this.blurLevel * this.rate;
    }
  },
  created() {
    const maxWidth = this.maxWidth || sizes[sizes.length - 1];
    const url = `${this.src}?${optimizeParams}`;
    this.urlPlaceholder = `${url}&blur=100&w=50`;
    this.url = `${url}&max-w=${maxWidth}`;
    this.srcset = sizes
      .filter(size => size <= maxWidth)
      .map(size => `${url}&w=${size * 1.5} ${size}w`)
      .join(", ");
  },
  methods: {
    animate() {
      const start = Date.now() + this.duration;

      const step = () => {
        const remaining = start - Date.now();

        if (remaining < 0) {
          this.rate = 0;
        } else {
          this.rate = remaining / this.duration;
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }
};
</script>

<style scoped>
/*
  1. enable Safari to keep sharp edges
     …but only works if pos-abs within an aspect-ratio div.
*/
.v-lazy-image {
  min-height: 100%;
  min-width: 100%;
  filter: url("#blur");
  transition: filter 1s;
  transform: scale(1); /*1 */
}
.v-lazy-image-loaded {
  filter: none;
}

img {
  @apply object-cover;
}
</style>
