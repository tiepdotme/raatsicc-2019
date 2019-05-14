<template>
  <div class="Post">
    <!-- image -->
    <figure v-if="image" class="Post-image">
      <img :class="landscapeRatioClass" :src="image.url" alt="title" />
    </figure>

    <!-- headings -->
    <header class="text-column">
      <h1 class="Title mb-4">
        <span class="lg:w-5/6">
          {{ title }}
        </span>
      </h1>
      <div class="Meta-gray mb-8">
        <time :date-time="date">{{ date | moment("ddd, MMMM Do YYYY") }}</time>
        <span class="mx-0 font-thin text-gray-500">|</span>
        <cite class="not-italic">{{ author }}</cite>
        <template v-for="(tag, index) in tags">
          <PostTag :key="index" :tag="tag" />
        </template>
      </div>
    </header>

    <!-- v-if=body allows md to render -->
    <article v-if="body" class="text-column">
      <div class="Markdown" v-html="$md.render(body)" />

      <!-- share -->
      <div class="">
        <hr class="Section-rule mb-4" />
        <div class="flex mb-4 text-gray">
          <div class=" mr-3">Share this article:</div>
          <!-- fb -->
          <a
            class="Post-share"
            :href="facebookUrl"
            target="_blank"
            rel="noopener"
            aria-label="Share on Facebook"
          >
            <IconBase height="30" width="30">
              <IconSocialFacebook />
            </IconBase>
          </a>
          <!-- email -->
          <a
            class="Post-share"
            :href="emailUrl"
            target="_blank"
            rel="noopener"
            aria-label="Share on Facebook"
          >
            <IconBase height="30" width="30">
              <IconShareEmail />
            </IconBase>
          </a>
          <!-- back to news -->
          <nuxt-link to="/news" class="text-brand-primary ml-auto">
            See all news
            <IconBase height="14" width="14">
              <BaselineArrowForward24px />
            </IconBase>
          </nuxt-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import IconBase from "~/components/IconBase";
// import BaselineArrowBack24px from "~/components/icons/baseline-arrow-back-24px";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import IconSocialFacebook from "~/components/icons/IconSocialFacebook";
import IconShareEmail from "~/components/icons/IconShareEmail";
import PostTag from "~/components/PostTag";
import moment from "vue-moment";

let baseUrl = "https%3A//raatsicc.org.au";
let linkText = "Check%20out%20this%20article%20from%20RAATSICC&amp;";

export default {
  components: {
    // BaselineArrowBack24px,
    BaselineArrowForward24px,
    IconBase,
    IconSocialFacebook,
    IconShareEmail,
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
    body: String,
    isArticle: Boolean,
    isLandscapeImage: Boolean
  },
  computed: {
    landscapeRatioClass() {
      return this.isLandscapeImage && "is-landscape";
    },
    /* see: https://sharingbuttons.io/ + http://www.sharelinkgenerator.com/ */
    facebookUrl() {
      /* prettier-ignore */
      return `https://facebook.com/sharer/sharer.php?u=${baseUrl}/${this.slug}`;
    },
    emailUrl() {
      /* prettier-ignore */
      return `mailto:?subject=${linkText}&body=${baseUrl}/${this.slug}`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.Post-image {
  @apply bg-brand-neutral relative mb-6 py-2;
  height: 30vh;
}

@screen xl {
  .Post-image {
    left: calc((theme(screens.xl) * -0.5) + 50%);
    width: theme(screens.xl);
  }
}

.Post-image img {
  @apply relative w-auto h-full;
  margin-left: 16.66667%;
}

@screen lg {
  .Post-image img {
    margin-left: 25%;
  }
}

.Post-share {
  @apply block mr-3;
  transform: translateY(-2px);
}
</style>
