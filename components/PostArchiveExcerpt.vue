<template>
  <article class="Post">
    <div class=" w-4/5">
      <!-- headings -->
      <header>
        <h3 class="Subheading mb-2">
          <nuxt-link :to="`/news/${slug}`">{{ title }}</nuxt-link>
        </h3>
        <div class="Meta-gray mb-2">
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
      <p class="text-rg text-gray-600">
        <nuxt-link class="text-brand-primary" :to="`/news/${slug}`">
          View post
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
    moment
  },
  props: {
    slug: String,
    title: String,
    tags: Array,
    date: String,
    author: String
  }
};
</script>
