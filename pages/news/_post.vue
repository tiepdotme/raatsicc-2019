<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else article>
      <Post
        :slug="post.slug"
        :tags="post.tags"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :author="post.author.name"
        :body="post.body"
        :is-landscape-image="post.horizontalImage"
      ></Post>
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import Post from "~/components/Post";
import gql from "graphql-tag";

export default {
  apollo: {
    post: {
      query: gql`
        query Post($slug: String!) {
          post(filter: { slug: { eq: $slug } }) {
            slug
            tags
            title
            datePublished
            body
            horizontalImage
            image {
              url
            }
            author {
              name
            }
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.post
        };
      },
      variables() {
        return {
          slug: this.$route.params.post
        };
      }
    }
  },
  components: {
    ContentColumn,
    LoadingSpinner,
    Post
  }
};
</script>
