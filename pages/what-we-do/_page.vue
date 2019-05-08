<template>
  <main class="container">
    <HeroBlocksWhat class="nested-blocks" />

    <ContentColumn v-if="whatPage" id="story" text>
      <div class="Markdown" v-html="$md.render(whatPage.body)" />
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    whatPage: {
      query: gql`
        query whatPage($slug: String!) {
          whatPage(filter: { slug: { eq: $slug } }) {
            title
            body
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.page
        };
      },
      variables() {
        return {
          slug: this.$route.params.page
        };
      }
    }
  },
  components: {
    ContentColumn,
    HeroBlocksWhat
  }
};
</script>

<style lang="postcss" scoped>
/* .nested-blocks >>> .Block:not(:hover):not(.nuxt-link-active) {
  @apply bg-brand-dust;
} */

.nested-blocks >>> .nuxt-link-active {
  @apply bg-brand-primary;
}

.nested-blocks >>> .nuxt-link-active .Block-image {
  @apply opacity-0;
}

.nested-blocks >>> .nuxt-link-active .Block-inner h3,
.nested-blocks >>> .nuxt-link-active .Block-inner p {
  @apply text-gray-900;
}
</style>
