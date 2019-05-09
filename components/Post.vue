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
          <span :key="index" class="Post-tag">{{ tag }}</span>
        </template>
      </div>
    </header>

    <!-- v-if=body allows md to render -->
    <article v-if="body" class="text-column">
      <div class="Markdown" v-html="$md.render(body)" />

      <!-- share -->
      <div class="Subsection">
        <hr class="Section-rule border-gray-600 mb-4" />
        <div class="flex mb-4">
          <div class="Metaheading mr-4">Share this article:</div>
          <a
            class="block pr-4"
            :href="facebookUrl"
            target="_blank"
            rel="noopener"
            aria-label="Share on Facebook"
          >
            <IconBase class="text-black" height="24" width="24">
              <IconSocialFacebook />
            </IconBase>
          </a>
        </div>
        <p>
          <nuxt-link to="/news">
            <IconBase class="ml-" height="14" width="14">
              <BaselineArrowBack24px />
            </IconBase>
            See all news
          </nuxt-link>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import IconBase from "~/components/IconBase";
import BaselineArrowBack24px from "~/components/icons/baseline-arrow-back-24px";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import IconSocialFacebook from "~/components/icons/IconSocialFacebook";
import moment from "vue-moment";

let linkText = "text=Check%20out%20this%20article%20by%20Portt&amp;";
let linkPortt = "https%3A//www.portt.com";

export default {
  components: {
    BaselineArrowBack24px,
    BaselineArrowForward24px,
    IconBase,
    IconSocialFacebook,
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
    /* linkPortt() {
      return `https%3A//portt.com/${this.postSlug}`;
    }, */
    /* see: https://sharingbuttons.io/ + http://www.sharelinkgenerator.com/ */
    facebookUrl() {
      /* prettier-ignore */
      return `https://facebook.com/sharer/sharer.php?u=${linkPortt}/${this.slug}`;
    },
    twitterUrl() {
      /* prettier-ignore */
      return `https://twitter.com/intent/tweet/?${linkText}url=${linkPortt}/${this.postSlug}`;
    },
    linkedinUrl() {
      /* prettier-ignore */
      return `https://www.linkedin.com/shareArticle?mini=true&url=${linkPortt}/${this.postSlug}&title=${linkText}`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.Post {
}

@screen lg {
  /* match the ContentColumn width */
  .text-column {
    @apply relative;
    /* right: -8.333333333%; */
    width: 108.333333333%;
  }
}

.Post-tag {
  @apply text-xs capitalize border border-gray-500 ml-2 rounded-sm;
  padding: 1px 4px;
}

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

/* .Post-image.is-article {
  @apply relative overflow-hidden;
}

.Post-image.is-article > .is-landscape {
  @apply absolute inset-0 object-cover h-full w-full;
} */

/* .Post-image .is-landscape {
  @apply object-cover;
} */
</style>
