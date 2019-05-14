<template>
  <div>
    <ContentColumn v-if="constitutionPage" text>
      <div class="Markdown" v-html="$md.render(constitutionPage.body)" />
    </ContentColumn>
  </div>
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
