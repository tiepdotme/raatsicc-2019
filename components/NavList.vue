<template>
  <div>
    <nuxt-link
      v-for="item in nav.items"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
      class="Nav-link"
    >
      <span>{{ item.label }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import nav from "~/data/nav";

export default {
  data: () => ({ nav })
};
</script>

<style lang="postcss" scoped>
.Nav-link {
  @apply text-sm font-medium uppercase inline-block ml-10;
  line-height: 5;
  transform: translateY(1px);
  transition: color 250ms ease;
}

.Nav-link:hover {
  @apply text-brand-primary;
}

.Nav-link:first-of-type {
  margin-left: 0;
}

.page-news-jobs .Nav-link.nuxt-link-active {
  @apply text-gray-900 border-0;
}

.Nav-link.nuxt-link-active,
.Nav-link.nuxt-link-exact-active,
.page-news-jobs .Nav-link.nuxt-link-exact-active {
  @apply text-brand-primary border-brand-primary border-0 border-b;
}
</style>
