<template>
  <main class="container">
    <ContentColumn v-if="whatPage" id="story" text>
      <div class="Markdown" v-html="$md.render(whatPage.body)" />
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
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
    ContentColumn
  }
};
</script>
