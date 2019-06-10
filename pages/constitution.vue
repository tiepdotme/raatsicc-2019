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
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  apollo: {
    constitutionPage: gql`
      {
        constitutionPage {
          body
          ${metaTagsQuery}
        }
      }
    `
  },
  components: {
    ContentColumn
  },
  mixins: [head],
  computed: {
    /* assign page to the gql query containing the meta tags */
    page() {
      return !this.$apollo.loading && this.$apollo.data.constitutionPage;
    }
  }
};
</script>

<style></style>
