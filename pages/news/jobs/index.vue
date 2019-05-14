<template>
  <div class="Section">
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <HeroStripe
      v-else
      :image="`${jobsPage.heroImage.url}?w=500&q=40&fm=jpg&auto=format`"
      :alt="jobsPage.heroTitle"
      color="blue"
    >
      <div class="container bg-transparent">
        <ContentColumn class="relative">
          <div class="py-4">
            <h1 class="Title text-white">
              {{ jobsPage.heroTitle }}
            </h1>
            <p class="Subheading italic text-white">
              {{ jobsPage.heroSubtitle }}
            </p>
          </div>
        </ContentColumn>
      </div>
    </HeroStripe>
    <ContentColumn>
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
import ContentColumn from "~/components/ContentColumn";
import HeroStripe from "~/components/HeroStripe";
import PostExcerpt from "~/components/PostExcerpt";
import LoadingSpinner from "~/components/LoadingSpinner";
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
    PostExcerpt
  },
  data: () => ({ allPosts: [] }),
  computed: {
    posts() {
      // map, reduce or filter:
      return this.allPosts.filter(x => x.tags[0] === "job");
    }
  }
};
</script>

<style></style>
