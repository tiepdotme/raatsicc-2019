<template>
  <main class="container">
    <ContentColumn v-if="posts">
      <PostExcerpt
        v-for="(post, index) in posts"
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
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(
          first: 6
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
    PostExcerpt
  },
  data: () => ({ allPosts: [] }),
  computed: {
    posts() {
      // map, reduce or filter:
      return this.allPosts.filter(x => x.tags[0] === "staff");
    }
  }
};
</script>

<style></style>
