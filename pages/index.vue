<template>
  <main class="container">
    <HeroBlocksHome />
    <ContentColumn text>
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
    <hr class="Section-rule" />
    <ContentColumn text>
      <div class="Grid">
        <div class="Grid-item w-1/2">
          <CardCta
            icon="member"
            lede="Join and contribute"
            sublede="Our members help us blah blah…"
            link-label="Become a RAATSICC member"
            to="/about#member"
          />
        </div>
        <div class="Grid-item w-1/2">
          <CardCta
            icon="share-news"
            lede="News to share?"
            sublede="Send it to us, we'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            href="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div>
      <CardCta
        icon="newsletter"
        lede="Get all the news in your email inbox"
        sublede="Subscribe to news"
        link-label="goodnews@raatsicc.org.au"
        href="mailto:goodnews@raatsicc.org.au"
        class="mt-8"
      />
    </ContentColumn>
  </main>
</template>

<script>
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn.vue";
import HeroBlocksHome from "~/components/HeroBlocksHome.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 1) {
          _firstPublishedAt
          slug
          tags
          title
          excerpt
          datePublished
          body
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
    CardCta,
    ContentColumn,
    HeroBlocksHome,
    PostExcerpt
  }
};
</script>
