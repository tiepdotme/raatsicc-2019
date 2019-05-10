<template>
  <main class="container">
    <HeroBlocksHome />
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
          View all news
          <IconBase height="14" width="14" class="ml-1">
            <BaselineArrowForward24px></BaselineArrowForward24px>
          </IconBase>
        </nuxt-link>
      </p>
    </ContentColumn>
    <hr class="Section-rule" />
    <ContentColumn>
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
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn.vue";
import HeroBlocksHome from "~/components/HeroBlocksHome.vue";
import IconBase from "~/components/IconBase.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 3) {
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
    CardCta,
    ContentColumn,
    HeroBlocksHome,
    IconBase,
    PostExcerpt
  }
};
</script>
