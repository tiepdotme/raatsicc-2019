<template>
  <div>
    <HeroBlocksHome />
    <!-- <div v-if="$apollo.queries.allPosts.loading" class="Loading"> -->
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
      />
      <p class="Section text-right">
        <nuxt-link to="/news" class="Button">
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
        <div class="Grid-item sm:w-1/2">
          <CardCta
            icon="member"
            lede="Join and contribute"
            sublede="Our members help us blah blah…"
            link-label="Become a RAATSICC member"
            to="/about#member"
          />
        </div>
        <div class="Grid-item sm:w-1/2">
          <CardCta
            icon="share-news"
            lede="News to share?"
            sublede="Send it to us, we'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            href="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div>
      <!-- <CardCta
        icon="newsletter"
        lede="Subscribe to news"
        sublede="Get all the news in your email inbox"
        link-label="goodnews@raatsicc.org.au"
        href="mailto:goodnews@raatsicc.org.au"
        class="mt-8"
      /> -->
      <CardCta
        icon="resources"
        lede="Resources heading"
        sublede="Resources sub-heading"
        link-label="Order from our Resources "
        href="https://www.datocms-assets.com/11614/1557789367-raatsicc-resources-flyer2017.pdf"
        class="Grid-space"
        orange
      />
    </ContentColumn>
  </div>
</template>

<script>
import BaselineArrowForward24px from "~/components/icons/baseline-arrow-forward-24px";
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn.vue";
import HeroBlocksHome from "~/components/HeroBlocksHome.vue";
import IconBase from "~/components/IconBase.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";

export default {
  components: {
    BaselineArrowForward24px,
    CardCta,
    ContentColumn,
    HeroBlocksHome,
    IconBase,
    LoadingSpinner,
    PostExcerpt
  },
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 3, orderBy: [datePublished_DESC]) {
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
  data: () => ({ allPosts: [] })
};
</script>
