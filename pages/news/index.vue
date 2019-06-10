<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <PostExcerpt
        v-for="(post, index) in allPosts"
        :key="index"
        :slug="post.slug"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :excerpt="post.excerpt"
        :job="post.isJob"
        :staff="post.isStaff"
        :event="post.isEvent"
      ></PostExcerpt>
      <PostArchiveLink />
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import PostArchiveLink from "~/components/PostArchiveLink.vue";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 6, orderBy: [datePublished_DESC]) {
          _firstPublishedAt
          slug
          title
          excerpt
          datePublished
          isEvent
          isJob
          isStaff
          image {
            url
          }
        }
      }
    `,
    newsPage: gql`
      {
        newsPage {
          ${metaTagsQuery}
        }
      }
    `
  },
  components: {
    ContentColumn,
    LoadingSpinner,
    PostArchiveLink,
    PostExcerpt
  },
  mixins: [head],
  data: () => ({ newsPage: null }),
  computed: {
    /* assign page to the gql query containing the meta tags */
    page() {
      return !this.$apollo.loading && this.$apollo.data.newsPage;
    }
  }
};
</script>
