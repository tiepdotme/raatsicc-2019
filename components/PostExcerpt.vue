<template>
  <div class="Post">
    <figure v-if="image" class="Post-image">
      <nuxt-link :to="`/news/${slug}`">
        <img :src="image.url" alt="title" />
      </nuxt-link>
    </figure>
    <h3 class="Heading mb-2">
      <nuxt-link :to="`/news/${slug}`">{{ title }}</nuxt-link>
    </h3>
    <div class="Meta-gray mb-4">
      <time>{{ date }}</time>
      <span class="mx-0 font-thin text-gray-500">|</span>
      <cite class="not-italic">{{ author }}</cite>
      <template v-for="(tag, index) in tags">
        <span :key="index" class="Post-tag">{{ tag }}</span>
      </template>
    </div>
    <p>
      {{ excerpt }}
      <nuxt-link class="text-brand-primary" :to="`/news/${slug}`">
        Continue reading
        <IconBase class="ml-" height="14" width="14">
          <BaselineArrowForward24px />
        </IconBase>
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import IconBase from "~/components/IconBase";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";

export default {
  components: {
    IconBase,
    BaselineArrowForward24px
  },
  props: ["slug", "title", "tags", "date", "author", "image", "excerpt"]
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
  @apply text-xs border border-gray-500 ml-2 rounded-sm;
  padding: 1px 4px;
}

@variants hover {
  .Post-tag {
    /* background-color: currentColor; */
  }
}

.Post-image {
  @apply bg-brand-neutral mb-4;
  height: 25vh;
}

.Post-image img {
  @apply h-full mx-auto;
}
</style>
