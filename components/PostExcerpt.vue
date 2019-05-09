<template>
  <article class="Post Grid-sm">
    <!-- image -->
    <div class="Grid-sm-item w-1/5">
      <figure v-if="image" class="Post-image">
        <nuxt-link v-if="excerpt" :to="`/news/${slug}`">
          <img :src="image.url" alt="title" />
        </nuxt-link>
        <template v-else>
          <img :class="landscapeRatioClass" :src="image.url" alt="title" />
        </template>
      </figure>
    </div>

    <div class="Grid-sm-item w-4/5">
      <!-- headings -->
      <header>
        <h3 class="Heading mb-2">
          <nuxt-link :to="`/news/${slug}`">{{ title }}</nuxt-link>
        </h3>
        <div class="Meta-gray mb-4">
          <time :date-time="date">{{
            date | moment("ddd, MMMM Do YYYY")
          }}</time>
          <span class="mx-0 font-thin text-gray-500">|</span>
          <cite class="not-italic">{{ author }}</cite>
          <template v-for="(tag, index) in tags">
            <span :key="index" class="Post-tag">{{ tag }}</span>
          </template>
        </div>
      </header>
      <!-- excerpt or body -->
      <p class="text-sm text-gray-600">
        {{ excerpt }}
        <nuxt-link class="text-brand-primary" :to="`/news/${slug}`">
          Continue reading
          <IconBase class="ml-" height="14" width="14">
            <BaselineArrowForward24px />
          </IconBase>
        </nuxt-link>
      </p>
    </div>
  </article>
</template>

<script>
import IconBase from "~/components/IconBase";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import moment from "vue-moment";

export default {
  components: {
    BaselineArrowForward24px,
    IconBase,
    moment
  },
  props: {
    slug: String,
    title: String,
    tags: Array,
    date: String,
    author: String,
    image: Object,
    excerpt: String,
    isLandscapeImage: Boolean
  },
  computed: {
    landscapeRatioClass() {
      return this.isLandscapeImage && "is-landscape";
    }
  }
};
</script>

<style lang="postcss" scoped>
.Post {
  /* @apply block; */
}

.Post + .Post {
  @apply pt-12;
}

.Post-tag {
  @apply text-xs capitalize border border-gray-500 ml-2 rounded-sm;
  padding: 1px 4px;
}

@variants hover {
  .Post-tag {
    /* background-color: currentColor; */
  }
}

.Post-image {
  @apply bg-brand-neutral;
  /* @apply bg-transparent mb-4; */
  /* height: 15vh; */
}

.Post-image a {
  @apply block p-3;
  /* @apply h-full object-contain; */
}

.Post-image img {
  /* @apply h-full mx-auto; */
  /* @apply h-full object-contain; */
}

/* .Post-image .is-landscape {
  @apply object-cover;
} */

@screen xl {
  .is-article {
    /* @apply relative bg-transparent mb-6; */
    @apply bg-transparent mb-6;
    height: 30vh;
    /* left: calc((theme(screens.xl) * -0.5) + 50%);
    width: theme(screens.xl); */
  }
}

@screen lg {
  /* match the ContentColumn width */
  .text-column {
    @apply relative;
    /* right: -8.333333333%; */
    width: 108.333333333%;
  }
}
</style>
