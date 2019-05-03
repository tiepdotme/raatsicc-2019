<template>
  <div id="js-siteNavMenu" class="split">
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
  data() {
    return {
      nav
    };
  }
};
</script>

<style scoped>
.Nav-link {
  @apply font-serif font-bold inline-block ml-10;
  line-height: 5.5;
  transform: translateY(1px);
  transition: color 250ms ease;
}

.Nav-link:hover {
  @apply text-brand-primary;
}

.Nav-link:first-of-type {
  margin-left: 0;
}

.Nav-link.nuxt-link-exact-active {
  @apply text-brand-primary border-brand-primary border-0 border-b-2;
}
</style>
