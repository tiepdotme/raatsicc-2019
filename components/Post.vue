<template>
  <div class="Post" :class="{ 'text-column': body }">
    <!-- image -->
    <figure v-if="image" class="Post-image" :class="{ 'is-article': body }">
      <nuxt-link v-if="excerpt" :to="`/news/${slug}`">
        <img :src="image.url" alt="title" />
      </nuxt-link>
      <template v-else>
        <img :class="landscapeRatioClass" :src="image.url" alt="title" />
      </template>
    </figure>

    <!-- headings -->
    <header>
      <h2 v-if="excerpt" class="Heading mb-2">
        <nuxt-link :to="`/news/${slug}`">{{ title }}</nuxt-link>
      </h2>
      <h1 v-else class="Title mb-4">
        <span class="lg:w-5/6">
          {{ title }}
        </span>
      </h1>
      <div class="Meta-gray mb-4" :class="{ 'mb-8': body }">
        <time :date-time="date">{{ date | moment("ddd, MMMM Do YYYY") }}</time>
        <span class="mx-0 font-thin text-gray-500">|</span>
        <cite class="not-italic">{{ author }}</cite>
        <template v-for="(tag, index) in tags">
          <span :key="index" class="Post-tag">{{ tag }}</span>
        </template>
      </div>
    </header>

    <!-- excerpt or body -->
    <p v-if="excerpt" class="text-gray-600">
      {{ excerpt }}
      <nuxt-link class="text-brand-primary" :to="`/news/${slug}`">
        Continue reading
        <IconBase class="ml-" height="14" width="14">
          <BaselineArrowForward24px />
        </IconBase>
      </nuxt-link>
    </p>
    <article v-if="body">
      <div class="Markdown" v-html="$md.render(body)" />

      <!-- share -->
      <div class="Subsection">
        <hr class="Section-rule mb-4" />
        <div class="flex">
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
            See all news</nuxt-link
          >
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
  @apply block;
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
  /* @apply bg-brand-neutral mb-4; */
  @apply bg-transparent mb-4;
  height: 15vh;
}

.Post-image img {
  /* @apply h-full mx-auto; */
  @apply h-full object-contain;
}

.Post-image.is-article {
  @apply relative overflow-hidden;
}

.Post-image.is-article > .is-landscape {
  @apply absolute inset-0 object-cover h-full w-full;
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
