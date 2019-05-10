<template>
  <main class="container">
    <ContentColumn v-if="allPosts">
      <PostArchiveExcerpt
        v-for="(post, index) in allPosts"
        :key="index"
        :slug="post.slug"
        :tags="post.tags"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :author="post.author.name"
        :excerpt="post.excerpt"
      ></PostArchiveExcerpt>
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import PostArchiveExcerpt from "~/components/PostArchiveExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(
          skip: 1
          orderBy: [datePublished_DESC]
          # can only filter for json if exists…
          filter: { tags: { exists: true } }
        ) {
          _firstPublishedAt
          slug
          tags
          title
          excerpt
          datePublished
          image {
            url
          }
          author {
            name
          }
        }
      }
    `
  },
  components: {
    ContentColumn,
    PostArchiveExcerpt
  },
  data: () => ({ allPosts: [] })
};
</script>

<style></style>
