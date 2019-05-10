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
      <p class="mt-12 text-right">
        <nuxt-link to="/news/archive" class="Button">
          View news archive
          <IconBase height="14" width="14" class="ml-1">
            <BaselineArrowForward24px></BaselineArrowForward24px>
          </IconBase>
        </nuxt-link>
      </p>
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import IconBase from "~/components/IconBase.vue";
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
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
    PostExcerpt
  }
};
</script>
