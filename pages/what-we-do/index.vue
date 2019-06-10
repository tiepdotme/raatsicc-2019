<template>
  <div>
    <HeroBlocksWhat />

    <ContentColumn text>
      <h3 class="Heading italic">
        {{ whatPage.subtitle }}
      </h3>
    </ContentColumn>
    <ContentColumn>
      <div class="Markdown" v-html="$md.render(whatPage.lede)" />
      <div class="Markdown st-p">
        <ul v-if="allWhatSubpages">
          <li v-for="item in allWhatSubpages" :key="item.title">
            <nuxt-link :to="`/what-we-do/${item.slug}`">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </ContentColumn>
  </div>
</template>

<script>
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import ContentColumn from "~/components/ContentColumn.vue";
import gql from "graphql-tag";

export default {
  components: {
    HeroBlocksWhat,
    ContentColumn
  },
  apollo: {
    allWhatSubpages: gql`
      {
        allWhatSubpages {
          slug
          title
        }
      }
    `,
    whatPage: gql`
      {
        whatPage {
          subtitle
          lede
        }
      }
    `
  }
};
</script>
