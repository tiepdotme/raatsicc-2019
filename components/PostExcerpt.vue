<template>
  <article class="Post Grid Grid--sm">
    <!-- image -->
    <div class="Grid-item w-full sm:w-1/5">
      <figure v-if="image" class="Post-image">
        <nuxt-link :to="`/news/${slug}`">
          <img
            :src="`${image.url}?w=200&q=25&fm=jpg&auto=format`"
            alt="title"
          />
        </nuxt-link>
      </figure>
    </div>

    <div class="Grid-item w-full sm:w-4/5">
      <!-- headings -->
      <header>
        <h3 class="Heading">
          <nuxt-link :to="`/news/${slug}`">{{ title }}</nuxt-link>
        </h3>
        <div class="Meta-gray s-meta">
          <time :date-time="date">
            {{ date | moment("ddd, MMMM Do YYYY") }}
          </time>
          <span class="mx-0 font-thin text-gray-500">|</span>
          <cite class="not-italic">{{ author }}</cite>
          <template v-for="(tag, index) in tags">
            <PostTag :key="index" :tag="tag" />
          </template>
        </div>
      </header>
      <!-- excerpt or body -->
      <p class="Text--sm text-gray-600">
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
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import IconBase from "~/components/IconBase";
import PostTag from "~/components/PostTag";
import moment from "vue-moment";

export default {
  components: {
    BaselineArrowForward24px,
    IconBase,
    PostTag,
    // eslint-disable-next-line
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
    },
    figureNoImg() {
      return this.image === null && "height:94%";
    }
  }
};
</script>
