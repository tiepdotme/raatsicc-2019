<template>
  <div class="Section">
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <HeroStripe
      v-else
      :image="jobsPage.heroImage.url"
      :alt="jobsPage.heroTitle"
      color="blue"
    >
      <ContentColumn stripe class="relative">
        <div class="py-4">
          <h1 class="Title text-white">
            {{ jobsPage.heroTitle }}
          </h1>
          <p class="Subheading italic text-white">
            {{ jobsPage.heroSubtitle }}
          </p>
        </div>
      </ContentColumn>
    </HeroStripe>
    <ContentColumn>
      <PostExcerpt
        v-for="(post, index) in posts"
        :key="index"
        :slug="post.slug"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :excerpt="post.excerpt"
        :job="post.isJob"
      ></PostExcerpt>
      <PostArchiveLink />
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import HeroStripe from "~/components/HeroStripe";
import PostArchiveLink from "~/components/PostArchiveLink.vue";
import PostExcerpt from "~/components/PostExcerpt";
import LoadingSpinner from "~/components/LoadingSpinner";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(orderBy: [datePublished_DESC]) {
          _firstPublishedAt
          slug
          title
          excerpt
          datePublished
          isJob
          image {
            url
          }
        }
      }
    `,
    jobsPage: gql`
      {
        jobsPage {
          heroImage {
            url
          }
          heroTitle
          heroSubtitle
        }
      }
    `
  },
  components: {
    ContentColumn,
    HeroStripe,
    LoadingSpinner,
    PostArchiveLink,
    PostExcerpt
  },
  data: () => ({ allPosts: [] }),
  computed: {
    posts() {
      // map, reduce or filter:
      // return this.allPosts.filter(x => x.tags[0] === "job");
      return this.allPosts.filter(x => x.isJob).slice(0, 9);
    }
  }
};
</script>

<style></style>
