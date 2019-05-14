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
        :tags="post.tags"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :author="post.author.name"
        :excerpt="post.excerpt"
      ></PostExcerpt>
      <p class="Section text-right">
        <nuxt-link to="/news/archive" class="Button">
          View news archive
          <IconBase height="14" width="14" class="ml-1">
            <BaselineArrowForward24px />
          </IconBase>
        </nuxt-link>
      </p>
    </ContentColumn>
  </div>
</template>

<script>
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import ContentColumn from "~/components/ContentColumn.vue";
import IconBase from "~/components/IconBase.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 6, orderBy: [datePublished_DESC]) {
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
    BaselineArrowForward24px,
    ContentColumn,
    IconBase,
    LoadingSpinner,
    PostExcerpt
  }
};
</script>
