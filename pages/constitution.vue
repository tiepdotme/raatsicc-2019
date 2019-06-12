<template>
  <div>
    <ContentColumn v-if="page" text>
      <div class="Markdown" v-html="$md.render(page.body)" />
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  apollo: {
    page: gql`
      {
        page: constitutionPage {
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
  data: () => ({ page: null })
};
</script>

<style></style>
