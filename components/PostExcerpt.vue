<template>
  <nuxt-link class="Post" :to="`/news/${slug}`">
    <h3 class="Heading mb-2">{{ title }}</h3>
    <div class="Meta mb-4">
      <time>{{ date }}</time>
      <span class="mx-1">|</span>
      <cite class="not-italic">{{ author }}</cite>
      <template v-for="(tag, index) in tags">
        <span :key="index" class="Post-tag">{{ tag }}</span>
      </template>
    </div>
    <figure v-if="image" class="Post-image">
      <img :src="image.url" alt="title" />
    </figure>
    <p>
      {{ excerpt }}
      <span>Continue reading</span>
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: ["slug", "title", "tags", "date", "author", "image", "excerpt"]
};
</script>

<style scoped>
.Post {
  @apply block;
}

.Post + .Post {
  @apply pt-12;
}

.Post-tag {
  @apply text-gray-300 bg-brand-green ml-2 px-2 py-1 rounded-sm;
}

.Post-image {
  @apply bg-brand-neutral;
  height: 25vh;
  margin-bottom: var(--s-figure) !important;
}

.Post-image img {
  @apply h-full mx-auto;
}
</style>
