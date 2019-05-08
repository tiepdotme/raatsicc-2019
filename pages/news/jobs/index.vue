<template>
  <main class="container">
    <ContentColumn v-if="jobs">
      <Post
        v-for="(post, index) in jobs"
        :key="index"
        :slug="post.slug"
        :tags="post.tags"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :author="post.author.name"
        :excerpt="post.excerpt"
      ></Post>
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import Post from "~/components/Post.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(
          first: 9
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
    Post
  },
  computed: {
    jobs() {
      // return this.allPosts.tags.includes("job");
      // return this.allPosts.map(x => x.tags);
      return this.allPosts.filter(x => x.tags[0] === "job");
    }
  }
};
</script>

<style></style>
