<template>
  <main class="container">
    <section class="Section">
      <div class="flex">
        <!-- pretter-ignore -->
        <HeroBlock
          label="Corporate Unit"
          image="block-bw-fierce.jpg"
          color="red"
          class="md:w-1/2 lg:w-1/4"
        />
      </div>
    </section>
    <ContentColumn v-if="whatPage" id="story" text>
      <div class="Markdown" v-html="$md.render(whatPage.body)" />
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import HeroBlock from "~/components/HeroBlock.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    whatPage: {
      query: gql`
        query whatPage($slug: String!) {
          whatPage(filter: { slug: { eq: $slug } }) {
            title
            body
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.page
        };
      },
      variables() {
        return {
          slug: this.$route.params.page
        };
      }
    }
  },
  components: {
    ContentColumn,
    HeroBlock
  }
};
</script>
