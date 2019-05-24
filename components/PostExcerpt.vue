<template>
  <article class="Post Grid Grid--sm">
    <!-- image -->
    <div class="Grid-item w-full sm:w-1/5">
      <figure v-if="image" class="Post-image">
        <nuxt-link :to="`/news/${slug}`">
          <img :src="`${image.url}?w=200&q=25&auto=format`" alt="title" />
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
          <PostTag v-if="tag !== null" :tag="tag" />
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
import tag from "@/mixins/tag";

export default {
  components: {
    BaselineArrowForward24px,
    IconBase,
    PostTag,
    // eslint-disable-next-line
    moment
  },
  mixins: [tag],
  props: {
    slug: String,
    title: String,
    date: String,
    image: Object,
    excerpt: String,
    event: Boolean,
    staff: Boolean,
    job: Boolean
  },
  computed: {
    figureNoImg() {
      return this.image === null && "height:94%";
    }
  }
};
</script>

<style lang="postcss" scoped>
.Post-image {
  @apply bg-brand-neutral;
  height: 20vh;
}

.Post-image img {
  @apply relative w-auto h-full block p-2;
}

@screen sm {
  .Post-image {
    @apply h-auto mt-2;
  }
  .Post-image img {
    @apply w-full h-auto;
  }
}
</style>
