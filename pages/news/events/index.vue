<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
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
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
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
    LoadingSpinner,
    PostExcerpt
  },
  data: () => ({ allPosts: [] }),
  computed: {
    posts() {
      // map, reduce or filter:
      return this.allPosts.filter(x => x.tags[0] === "event");
    }
  }
};
</script>
