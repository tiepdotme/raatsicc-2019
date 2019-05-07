<template>
  <main class="container">
    <ContentColumn text>
      <div class="Markdown" v-html="$md.render(constitutionPage.body)" />
    </ContentColumn>
  </main>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    constitutionPage: gql`
      {
        constitutionPage {
          body
        }
      }
    `
  },
  components: {
    ContentColumn
  }
};
</script>

<style></style>
