<template>
  <main class="container">
    <ContentColumn>
      <PostExcerpt
        v-for="(post, index) in allPosts"
        :key="index"
        :slug="post.slug"
        :tags="post.tags"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :author="post.author.name"
        :excerpt="post.excerpt"
      ></PostExcerpt>
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
// import PostExcerpt from "~/components/PostExcerpt.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 9, orderBy: [datePublished_DESC]) {
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
    PostExcerpt
  }
};
</script>
