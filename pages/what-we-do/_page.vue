<template>
  <main class="container">
    <ContentColumn id="story" text>
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
        query WhatPage($slug: String!) {
          allWhatPages(filter: { slug: { eq: $slug } }) {
            title
            body
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.slug
        };
      },
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  },
  components: {
    ContentColumn
  }
};
</script>
